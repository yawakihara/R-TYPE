import {createBoss,updateBossMechanics,hitBoss} from './bosses.js';

/** R-TYPEらしい攻略を担う、描画・音声に依存しない固定時間刻みのゲーム本体。 */
export const STAGES = [
  {name:'DERELICT GATE', ja:'廃墟の向こうへ', theme:'station', boss:'DOORKEEPER', bossJa:'装甲殻・ドアキーパー', duration:82, color:0x72bbd3, fog:0x07141b, bg:0x02080e, track:0, bossType:'doorkeeper'},
  {name:'LIVING ABYSS', ja:'脈打つ深淵', theme:'organic', boss:'GORGON', bossJa:'生体兵器・ゴルゴン', duration:88, color:0x91bc83, fog:0x11190e, bg:0x050b07, track:1, bossType:'gorgon'},
  {name:'SILENT COLOSSUS', ja:'沈黙の巨大戦艦', theme:'battleship', boss:'COLOSSUS CORE', bossJa:'巨大戦艦・中枢炉', duration:92, color:0xa6b9cc, fog:0x09141e, bg:0x02070e, track:2, bossType:'colossus'},
  {name:'IRON CATHEDRAL', ja:'鉄の大聖堂', theme:'foundry', boss:'JUDGEMENT', bossJa:'機動要塞・ジャッジメント', duration:88, color:0xe4a473, fog:0x1b100c, bg:0x0b0503, track:3, bossType:'judgement'},
  {name:'OSSUARY', ja:'星の墓標', theme:'bones', boss:'OUROBOROS', bossJa:'骨竜・ウロボロス', duration:90, color:0xb6a1c9, fog:0x150c1e, bg:0x07030e, track:4, bossType:'ouroboros'},
  {name:'NEURAL STORM', ja:'記憶の迷宮', theme:'neural', boss:'MNEMOSYNE', bossJa:'神経網・ムネモシュネ', duration:90, color:0x8490e4, fog:0x0e0b23, bg:0x04020c, track:5, bossType:'mnemosyne'},
  {name:'EVENT HORIZON', ja:'還らざる境界', theme:'citadel', boss:'THE ARBITER', bossJa:'最終防衛機・アービター', duration:95, color:0x81d7d0, fog:0x081917, bg:0x020908, track:6, bossType:'arbiter'},
  {name:'REQUIEM', ja:'最後の鼓動', theme:'heart', boss:'ORIGIN', bossJa:'始原核・オリジン', duration:90, color:0xe69b89, fog:0x210c12, bg:0x0b0205, track:7, bossType:'origin'},
];
export const WEAPONS = {
  red:{name:'HELIX', ja:'対空レーザー', color:0xff613b},
  blue:{name:'REFLECT', ja:'反射レーザー', color:0x52c8ff},
  yellow:{name:'CRAWLER', ja:'対地レーザー', color:0xffcc52},
};
export const DIFFICULTIES = {
  cadet:{name:'CADET',ja:'訓練兵',lives:5,bullet:.73,rate:.85,keep:true},
  arcade:{name:'ARCADE',ja:'アーケード',lives:3,bullet:1,rate:1,keep:false},
  ace:{name:'ACE',ja:'エース',lives:3,bullet:1.23,rate:1.2,keep:false},
};
export const clamp = (v,a,b) => Math.max(a,Math.min(b,v));
export const lerp = (a,b,t) => a+(b-a)*t;

/** シードを固定して敵配置・演出を再現できる乱数生成器。@param {number} seed 初期値 */
export function rng(seed=1987) { return () => { seed|=0;seed=seed+0x6d2b79f5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296; }; }

/** 描画と衝突判定で共有する地形境界。@returns {{top:number,bottom:number}} 通行可能な範囲 */
export function terrainAt(stage,x) {
  const theme=STAGES[stage%8].theme;
  let top=7.9,bottom=-7.9;
  if(['organic','neural','heart','bones'].includes(theme)) {
    const a=theme==='heart'?1.6:theme==='bones'?1.1:1.4;
    top=7.25+Math.sin(x*.075+stage)*a+Math.sin(x*.21)*.43;
    bottom=-7.25+Math.sin(x*.067+1+stage)*a+Math.sin(x*.18)*.48;
  } else {
    const wave=Math.sin(x*.057+stage);
    top=7.7-Math.max(0,wave)*1.65;
    bottom=-7.7+Math.max(0,Math.sin(x*.065+2))*1.8;
  }
  return {top,bottom};
}

/** 地形に加わる固定障害物。全ステージで中心付近に通過可能な経路を残す。 */
export function obstaclesFor(stage) {
  const theme=STAGES[stage].theme;
  const list=[];
  if(theme==='battleship') {
    list.push({wx:138,y:-6.3,w:210,h:4.3,type:'hull'});
    for(let i=0;i<7;i++) list.push({wx:43+i*25,y:-2.8,w:5,h:3,type:'tower'});
  } else {
    for(let i=0;i<9;i++) {
      const top=i%2===0;
      list.push({wx:46+i*24,y:top?6.8:-6.8,w:3.6+(i%3),h:3.8+((i+stage)%3)*.65,type:theme==='foundry'?'press':'column'});
    }
  }
  return list;
}

/** 横STGの全状態を管理する。描画側へはeventsを通して効果音・通知を渡す。 */
export class Game {
  /** @param {object} options 難易度、開始ステージ、練習・クラシック指定 */
  constructor(options={}) {
    this.options={difficulty:'arcade',stage:0,practice:false,classic:false,...options};
    this.diff=DIFFICULTIES[this.options.difficulty]||DIFFICULTIES.arcade;
    this.random=rng(1987+this.options.stage*79);
    this.stage=this.options.stage;
    this.score=0;this.kills=0;this.shotsFired=0;this.hits=0;this.deaths=0;this.totalTime=0;this.continues=0;
    this.lives=this.diff.lives;this.extends=0;
    this.events=[];this.nextId=1;this.combo=0;this.comboTimer=0;this.bestCombo=0;this.drive=35;this.driveTime=0;
    this.mode='playing';this.modeTime=0;this.paused=false;this.debugInvincible=false;
    this.startStage(this.stage);
    if(this.options.bossPractice)this.beginBossPractice();
  }
  /** 通知をキューへ追加する。@param {string} type 種別 @param {object} data 付随情報 */
  emit(type,data={}) { this.events.push({...data,type}); }
  /** 通知を一度だけ取得する。@returns {Array} 描画・音声への通知 */
  drainEvents() { const out=this.events;this.events=[];return out; }
  /** 新しいステージを開始する。@param {number} index ステージ番号（0始まり） */
  startStage(index) {
    this.stage=index;this.time=0;this.scroll=0;this.checkpoint=0;this.wave=0;this.turretWave=0;this.nextCarrier=2;this.carrierCount=0;
    this.enemies=[];this.shots=[];this.bullets=[];this.items=[];this.effects=[];
    this.boss=null;this.bossDefeated=false;this.obstacles=obstaclesFor(index);
    this.player={x:-9,y:0,vy:0,charge:0,fireWas:false,cooldown:0,missileCd:0,invuln:3.4,speed:2,maxSpeed:2,weapon:'red',level:0,missiles:0,bits:0};
    this.force={mode:'none',x:-11,y:0,side:1,level:0,age:0,cooldown:0};
    this.mode='playing';this.modeTime=0;
    this.emit('stage',{index,name:STAGES[index].name,ja:STAGES[index].ja});
  }
  /** キャンペーン途中の装備を次のステージへ引き継ぐ。 */
  nextStage() {
    if(this.stage>=7) { this.mode='victory';this.emit('victory');return; }
    const old={...this.player},f=this.force.mode!=='none';
    this.startStage(this.stage+1);
    Object.assign(this.player,{level:old.level,weapon:old.weapon,missiles:old.missiles,bits:old.bits,speed:old.speed,maxSpeed:old.maxSpeed});
    if(f) Object.assign(this.force,{mode:'front',level:this.player.level,x:this.player.x+1.7,y:0});
    if(this.options.bossPractice)this.beginBossPractice();
  }
  /** チェックポイントで敵と装備を初期化し、ゲームオーバー後も復帰可能にする。 */
  respawn() {
    const t=this.checkpoint;
    const saved={...this.player},wasForce=this.force.mode!=='none';
    this.time=t;this.scroll=t*3.2;this.wave=Math.floor(t/2.85);this.turretWave=Math.floor(t/6.3);
    this.enemies=[];this.shots=[];this.bullets=[];this.items=[];this.boss=null;this.bossDefeated=false;this.nextCarrier=t+1.5;
    this.player={x:-9,y:0,vy:0,charge:0,fireWas:false,cooldown:0,missileCd:0,invuln:3.6,speed:2,maxSpeed:2,weapon:'red',level:0,missiles:0,bits:0};
    this.force={mode:'none',x:-10,y:0,side:1,level:0,age:0,cooldown:0};
    if(this.diff.keep && wasForce) {
      Object.assign(this.player,{level:Math.max(1,saved.level),weapon:saved.weapon,bits:saved.bits,missiles:saved.missiles,maxSpeed:saved.maxSpeed,speed:saved.speed});
      Object.assign(this.force,{mode:'front',level:this.player.level,x:-7.3,y:0});
    }
    this.mode='playing';this.modeTime=0;this.driveTime=0;this.emit('respawn');
    if(this.options.bossPractice)this.beginBossPractice();
  }
  /** ボス直行訓練を開始する。再出撃と次面でもボス戦から再開する。 */
  beginBossPractice(){
    this.time=STAGES[this.stage].duration;this.scroll=this.time*3.2;
    this.spawnBoss();this.boss.x=this.stage===2?10.6:10;
  }
  /** 残機を補充して直前のチェックポイントから継続する。 */
  continueGame() { this.continues++;this.lives=this.diff.lives;this.score=Math.floor(this.score/10)*10+Math.min(9,this.continues);this.respawn(); }
  /** メニュー入力からフォースの射出・回収を切り替える。 */
  toggleForce() {
    const f=this.force;
    if(f.mode==='none') return;
    if(f.mode==='front'||f.mode==='rear') { f.side=f.mode==='front'?1:-1;f.mode='launch';f.age=0;this.emit('forceLaunch'); }
    else { f.mode='return';f.age=0;this.emit('forceRecall'); }
  }
  /** 現代アレンジの時間減速を発動する。クラシックでは無効。 */
  activateDrive() {
    if(this.options.classic || this.drive<100 || this.driveTime>0 || this.mode!=='playing') return false;
    this.drive=0;this.driveTime=4.5;this.player.invuln=Math.max(.8,this.player.invuln);this.emit('drive');return true;
  }
  /** アイテムの効果を適用する。@param {string} type クリスタル色または装備名 */
  collect(type) {
    const p=this.player;
    if(WEAPONS[type]) {
      p.weapon=type;p.level=Math.min(3,p.level+1);this.force.level=p.level;
      if(this.force.mode==='none') Object.assign(this.force,{mode:'return',x:17,y:p.y});
    } else if(type==='speed') {p.maxSpeed=Math.min(4,p.maxSpeed+1);p.speed=p.maxSpeed;}
    else if(type==='bit') p.bits=Math.min(2,p.bits+1);
    else if(type==='missile') p.missiles=Math.min(2,p.missiles+1);
    this.addScore(300);this.emit('pickup',{item:type});
  }
  /** 得点・エクステンドを更新する。@param {number} value 加点値 */
  addScore(value) {
    this.score+=value;
    const threshold=this.extends===0?50000:150000*this.extends;
    if(this.score>=threshold) {this.extends++;this.lives++;this.emit('extend');}
  }
  /** 敵を生成する。@returns {object} 生成した敵 */
  spawn(type,x,y,extra={}) {
    const hp=type==='carrier'?5:type==='turret'?7:type==='organism'?5:type==='interceptor'?3:2;
    const e={id:this.nextId++,type,x,y,baseY:y,hp,maxHp:hp,r:type==='carrier'?.65:type==='turret'?.57:.48,age:0,cooldown:1.5+this.random(),vx:-3.1-this.random(),...extra};
    this.enemies.push(e);return e;
  }
  /** 通常弾・レーザー・波動砲を生成する。@param {boolean} wave 溜め撃ち指定 */
  shoot(wave=false) {
    const p=this.player,f=this.force;
    if(wave) {
      const power=p.charge>=.98?2:p.charge>=.52?1:.5;
      this.shots.push({id:this.nextId++,type:'wave',x:p.x+1,y:p.y,vx:29,vy:0,age:0,life:1.7,r:.25+power*.22,damage:power===2?24:power===1?12:6,pierce:true,hit:new Set(),power});
      this.emit('wave',{power,x:p.x,y:p.y});this.shotsFired++;return;
    }
    this.shotsFired++;
    this.shots.push({id:this.nextId++,type:'shot',x:p.x+.8,y:p.y,vx:31,vy:0,age:0,life:1.5,r:.12,damage:1});
    if(f.mode!=='none') {
      const dir=f.mode==='rear'?-1:1;
      const x=f.x+dir*.5,y=f.y;
      if(f.mode==='front'||f.mode==='rear') {
        for(let i=0;i<Math.max(1,p.level);i++) {
          const offset=i-(p.level-1)/2;
          if(p.weapon==='red') this.shots.push({id:this.nextId++,type:'helix',x,y,baseY:y,vx:dir*29,vy:0,age:0,phase:i*Math.PI,amp:.2+i*.13,life:1.6,r:.19,damage:1.2,pierce:true,hit:new Set()});
          if(p.weapon==='blue') for(const sign of [-1,1]) this.shots.push({id:this.nextId++,type:'reflect',x,y,vx:dir*(20+Math.abs(offset)*2),vy:sign*(12+offset*3),age:0,life:2.2,r:.15,damage:1.1,bounces:0});
          if(p.weapon==='yellow') for(const sign of [-1,1]) this.shots.push({id:this.nextId++,type:'crawler',x,y,vx:dir*22,vy:sign*17,sign,grounded:false,age:0,life:2.4,r:.2,damage:1.4,pierce:true,hit:new Set()});
        }
      } else {
        for(const sign of [-1,0,1]) this.shots.push({id:this.nextId++,type:'forceShot',x,y,vx:dir*24,vy:sign*7,age:0,life:1.5,r:.14,damage:1.2});
      }
    }
    for(let i=0;i<p.bits;i++) this.shots.push({id:this.nextId++,type:'bitShot',x:p.x+.05,y:p.y+(i===0?1.05:-1.05),vx:29,vy:0,age:0,life:1.5,r:.09,damage:.6});
    this.emit('shot',{x:p.x,y:p.y});
  }
  /** 敵弾を生成する。@param {number} angle 進行方向 @param {number} speed 速度 */
  enemyBullet(x,y,angle,speed=5,type='orb') {
    if(this.bullets.length>240) return;
    const v=speed*this.diff.bullet;
    this.bullets.push({id:this.nextId++,x,y,vx:Math.cos(angle)*v,vy:Math.sin(angle)*v,r:type==='heavy'?.24:.14,type,age:0,grazed:false});
  }
  /** プレイヤーの位置へ扇状の狙い弾を放つ。 */
  aimed(x,y,count=1,spread=.18,speed=5) {
    const a=Math.atan2(this.player.y-y,this.player.x-x);
    for(let i=0;i<count;i++) this.enemyBullet(x,y,a+(i-(count-1)/2)*spread,speed);
  }
  /** 敵を倒して得点とアイテムを発生させる。 */
  kill(e,byWave=false) {
    if(e.dead) return;
    e.dead=true;this.kills++;this.combo++;this.comboTimer=2.4;this.bestCombo=Math.max(this.combo,this.bestCombo);
    const score=e.type==='carrier'?500:e.type==='turret'?350:150;
    this.addScore(score+(byWave?Math.min(this.combo,12)*30:0));
    this.drive=Math.min(100,this.drive+2.6);
    this.emit('explosion',{x:e.x,y:e.y,size:e.type==='carrier'?1.2:.8,enemyType:e.type,enemyId:e.id,vx:e.vx||0,weapon:byWave?'wave':undefined});
    if(e.type==='carrier') this.items.push({id:this.nextId++,type:e.drop||'red',x:e.x,y:e.y,age:0});
    if(this.options.difficulty==='ace'&&e.type!=='carrier') this.aimed(e.x,e.y,1,.1,5.5);
  }
  /** 被弾・接触でミスする。無敵期間と練習モードの残機を処理する。 */
  die() {
    if(this.player.invuln>0||this.debugInvincible||this.mode!=='playing') return;
    this.deaths++;if(!this.options.practice) this.lives--;
    this.mode='dying';this.modeTime=0;this.combo=0;
    this.emit('playerDeath',{x:this.player.x,y:this.player.y});
  }
  /** 弱点開閉・部位破壊を持つ大型ボスを出現させる。 */
  spawnBoss() {
    this.boss=createBoss(this.stage,this.nextId++);
    this.enemies=this.enemies.filter(e=>e.type==='carrier');this.bullets=[];this.emit('boss',{name:STAGES[this.stage].boss,ja:STAGES[this.stage].bossJa});
  }
  /** ボス本体、砲台、予兆付き攻撃を更新する。 */
  updateBoss(dt) {
    updateBossMechanics(this,dt);
  }
  /** ボス撃破で弾を消去し、次ステージへの演出へ進む。 */
  defeatBoss() {
    const b=this.boss;if(!b)return;
    this.addScore(12000+(this.stage+1)*2000+this.bullets.length*30);
    this.emit('bossDeath',{x:b.x,y:b.y});this.boss=null;this.bullets=[];this.enemies=[];this.shots=[];
    this.bossDefeated=true;this.mode='stageclear';this.modeTime=0;
  }
  /** シミュレーションを1ステップ進める。@param {number} dt 秒 @param {object} input 現フレームの操作 */
  update(dt,input={}) {
    if(this.paused||this.mode==='over'||this.mode==='victory') return;
    this.totalTime+=dt;this.modeTime+=dt;
    if(this.mode==='dying') {
      if(this.modeTime>1.5) { if(this.lives>0||this.options.practice) this.respawn();else {this.mode='over';this.emit('gameover');} }
      return;
    }
    if(this.mode==='stageclear') {if(this.modeTime>5.8) this.nextStage();return;}
    const slow=this.driveTime>0?.43:1,wdt=dt*slow;
    this.time+=wdt;this.scroll+=this.boss?0:wdt*3.2;
    this.driveTime=Math.max(0,this.driveTime-dt);
    if(!this.boss) this.checkpoint=Math.min(Math.floor(this.time/24)*24,Math.floor((STAGES[this.stage].duration-12)/24)*24);
    const p=this.player,f=this.force;
    p.invuln=Math.max(0,p.invuln-dt);p.cooldown=Math.max(0,p.cooldown-dt);p.missileCd-=dt;
    const dx=clamp(input.x||0,-1,1),dy=clamp(input.y||0,-1,1),norm=Math.max(1,Math.hypot(dx,dy));
    const speed=4.5+p.speed*1.5;
    p.x=clamp(p.x+dx/norm*speed*dt,-15.2,15.2);p.y=clamp(p.y+dy/norm*speed*dt,-8.5,8.5);p.vy=dy*speed;
    if(input.speed) p.speed=p.speed%p.maxSpeed+1;
    if(input.force) this.toggleForce();
    if(input.drive) this.activateDrive();
    if(input.fire) {
      if(!p.fireWas&&p.cooldown<=0) {this.shoot();p.cooldown=.14;}
      const old=p.charge;p.charge=Math.min(1,p.charge+dt/(this.driveTime>0?.6:1.65));
      if(old<1&&p.charge===1) this.emit('charged');
    } else {
      if(p.fireWas&&p.charge>.18) this.shoot(true);
      p.charge=0;
      if(input.rapid&&p.cooldown<=0) {this.shoot();p.cooldown=.125;}
    }
    p.fireWas=!!input.fire;
    if(p.missiles>0&&p.missileCd<=0&&(input.fire||input.rapid)) {
      p.missileCd=.8;for(let i=0;i<p.missiles;i++) this.shots.push({id:this.nextId++,type:'missile',x:p.x-.2,y:p.y-.4-i*.18,vx:9,vy:-3,age:0,life:4,r:.18,damage:4});
      this.emit('missile');
    }
    f.age+=dt;
    if(f.mode==='front'||f.mode==='rear') {f.x=lerp(f.x,p.x+(f.mode==='front'?1.6:-1.6),Math.min(1,dt*18));f.y=lerp(f.y,p.y,Math.min(1,dt*18));}
    else if(f.mode==='launch') {f.x+=f.side*23*dt;if(f.x>13||f.x<-13){f.x=clamp(f.x,-13,13);f.mode='free';}}
    else if(f.mode==='free') {f.y=lerp(f.y,p.y,dt*.55);f.x-=wdt*.25;}
    else if(f.mode==='return') {
      const dist=Math.hypot(p.x-f.x,p.y-f.y),step=dt*15;
      f.x+=(p.x-f.x)/Math.max(.01,dist)*Math.min(step,dist);f.y+=(p.y-f.y)/Math.max(.01,dist)*Math.min(step,dist);
      if(dist<1.65) {f.mode=f.x<p.x?'rear':'front';f.side=f.mode==='front'?1:-1;this.emit('forceDock');}
    }
    if(f.mode==='free'&&Math.hypot(f.x-p.x,f.y-p.y)<1.55) {f.mode=f.x<p.x?'rear':'front';this.emit('forceDock');}
    this.schedule();
    this.updateEnemies(wdt);
    this.updateBoss(wdt);
    this.updateShots(wdt);
    this.updateBullets(wdt);
    this.updateItems(wdt);
    if(this.mode!=='playing') return;
    const limits=terrainAt(this.stage,this.scroll+p.x);
    if(p.y+.27>limits.top||p.y-.27<limits.bottom) this.die();
    for(const o of this.obstacles) if(Math.abs(p.x-(o.wx-this.scroll))<o.w/2+.5&&Math.abs(p.y-o.y)<o.h/2+.23) this.die();
    this.comboTimer=Math.max(0,this.comboTimer-dt);if(this.comboTimer===0) this.combo=0;
  }
  /** 時刻に応じて攻略可能な編隊、砲台、補給機を配置する。 */
  schedule() {
    if(this.boss||this.bossDefeated) return;
    const duration=STAGES[this.stage].duration;
    if(this.time>=duration) {this.spawnBoss();return;}
    const wave=Math.floor(this.time/2.85);
    if(wave>this.wave) {
      this.wave=wave;
      const base=Math.sin(wave*2.19+this.stage)*4.2;
      const type=wave%5===3?'interceptor':['organic','heart','neural'].includes(STAGES[this.stage].theme)?'organism':'scout';
      const n=3+(wave%3);
      for(let i=0;i<n;i++) this.spawn(type,18+i*1.6,base+Math.sin(i*.8)*1.0,{vx:-4-this.stage*.1,formation:wave%4});
    }
    const tw=Math.floor(this.time/6.3);
    if(tw>this.turretWave) {
      this.turretWave=tw;const top=tw%2===0,lim=terrainAt(this.stage,this.scroll+19);
      this.spawn('turret',19,top?lim.top-.35:lim.bottom+.35,{top,vx:-3.2,cooldown:1.6});
    }
    if(this.time>=this.nextCarrier) {
      const drops=['red','speed','blue','missile','bit','yellow','red','bit','missile','blue'];
      const drop=this.force.mode==='none'?'red':drops[this.carrierCount%drops.length];
      this.spawn('carrier',18,this.force.mode==='none'?0:Math.sin(this.carrierCount*2.4)*3.4,{drop,vx:-3.7,hp:4,cooldown:99});
      this.nextCarrier=this.time+10;this.carrierCount++;
    }
  }
  /** 編隊の移動、敵砲撃、フォース接触、機体接触を解決する。 */
  updateEnemies(dt) {
    const f=this.force,p=this.player;
    for(const e of this.enemies) {
      e.age+=dt;e.x+=e.vx*dt;e.cooldown-=dt;
      if(e.type==='scout') e.y=e.baseY+Math.sin(e.age*2.2)*.85;
      if(e.type==='organism') e.y=e.baseY+Math.sin(e.age*2.5)*1.3;
      if(e.type==='interceptor'&&e.age>1.2) { e.y=lerp(e.y,p.y,dt*.7);e.x-=dt*1.5; }
      if(e.type==='carrier') e.y=e.baseY+Math.sin(e.age*2)*.35;
      if(e.type==='turret') {const lim=terrainAt(this.stage,this.scroll+e.x);e.y=e.top?lim.top-.35:lim.bottom+.35;}
      if(e.cooldown<=0&&e.x>-12&&e.x<16&&e.type!=='carrier') {
        if(e.type==='turret') this.aimed(e.x,e.y,1+(this.stage>2?1:0),.22,5.5);
        else if(e.type==='organism') this.aimed(e.x,e.y,3,.32,3.5);
        else this.aimed(e.x,e.y,1,.1,4.3);
        e.cooldown=(e.type==='turret'?2.3:3.6)/this.diff.rate;
      }
      if(f.mode!=='none'&&Math.hypot(e.x-f.x,e.y-f.y)<e.r+.6) {e.hp-=dt*30;if(e.hp<=0)this.kill(e);}
      if(!e.dead&&Math.hypot(e.x-p.x,e.y-p.y)<e.r+.26) this.die();
    }
    this.enemies=this.enemies.filter(e=>!e.dead&&e.x>-20);
  }
  /** 自弾の追尾・反射・地形追従と敵への命中を解決する。 */
  updateShots(dt) {
    for(const s of this.shots) {
      s.age+=dt;
      if(s.type==='missile') {
        const target=this.enemies.find(e=>e.x>s.x-.5)||this.boss;
        if(target) {const a=Math.atan2(target.y-s.y,target.x-s.x);s.vx=lerp(s.vx,Math.cos(a)*18,dt*5);s.vy=lerp(s.vy,Math.sin(a)*18,dt*5);}
        else s.vy=lerp(s.vy,0,dt*3);
      }
      s.x+=s.vx*dt;s.y+=s.vy*dt;
      if(s.type==='helix') s.y=s.baseY+Math.sin(s.age*27+s.phase)*s.amp;
      const lim=terrainAt(this.stage,this.scroll+s.x);
      if(s.type==='reflect'&&(s.y>lim.top-.2||s.y<lim.bottom+.2)) {s.vy*=-1;s.y=clamp(s.y,lim.bottom+.21,lim.top-.21);s.bounces++;}
      else if(s.type==='crawler') {
        if(s.y>=lim.top-.18||s.y<=lim.bottom+.18||s.grounded) {s.grounded=true;s.vy=0;s.y=s.sign>0?lim.top-.19:lim.bottom+.19;}
      } else if(s.type!=='wave'&&(s.y>lim.top||s.y<lim.bottom)) s.dead=true;
      for(const o of this.obstacles) if(Math.abs(s.x-(o.wx-this.scroll))<o.w/2&&Math.abs(s.y-o.y)<o.h/2&&s.type!=='wave'&&s.type!=='crawler') {
        if(s.type==='reflect'){s.vy*=-1;s.vx*=-1;}else s.dead=true;
      }
      if(s.dead) continue;
      for(const e of this.enemies) {
        if(e.dead||s.hit?.has(e.id))continue;
        if(Math.abs(s.x-e.x)<e.r+s.r+(s.type==='wave'?.7:0)&&Math.abs(s.y-e.y)<e.r+s.r) {
          e.hp-=s.damage;this.hits++;s.hit?.add(e.id);
          if(e.hp<=0) this.kill(e,s.type==='wave');else this.emit('hit',{x:e.x,y:e.y,enemyId:e.id,enemyType:e.type,weapon:s.type});
          if(!s.pierce){s.dead=true;break;}
        }
      }
      hitBoss(this,s);
    }
    this.shots=this.shots.filter(s=>!s.dead&&s.age<s.life&&s.x>-21&&s.x<23&&Math.abs(s.y)<12);
    if(this.boss&&this.boss.hp<=0)this.defeatBoss();
  }
  /** 敵弾を移動し、無敵フォース・ビットの防御と小さな被弾判定を適用する。 */
  updateBullets(dt) {
    const p=this.player,f=this.force;
    for(const b of this.bullets) {
      b.age+=dt;b.x+=b.vx*dt;b.y+=b.vy*dt;
      if(f.mode!=='none'&&Math.hypot(b.x-f.x,b.y-f.y)<.66+b.r) {b.dead=true;this.emit('block',{x:b.x,y:b.y});continue;}
      let blocked=false;
      for(let i=0;i<p.bits;i++) if(Math.hypot(b.x-p.x,b.y-(p.y+(i===0?1.05:-1.05)))<.23+b.r) blocked=true;
      if(blocked){b.dead=true;this.emit('block',{x:b.x,y:b.y});continue;}
      const dist=Math.hypot(b.x-p.x,b.y-p.y);
      if(dist<.16+b.r) {this.die();b.dead=true;}
      else if(dist<.8&&!b.grazed) {b.grazed=true;this.drive=Math.min(100,this.drive+1.5);this.addScore(10);this.emit('graze',{x:b.x,y:b.y});}
    }
    this.bullets=this.bullets.filter(b=>!b.dead&&b.age<10&&b.x>-19&&b.x<21&&Math.abs(b.y)<12);
  }
  /** 補給アイテムを移動し、接触時に装備を取得する。 */
  updateItems(dt) {
    for(const item of this.items) {
      item.x-=2.6*dt;item.age+=dt;
      if(Math.hypot(item.x-this.player.x,item.y-this.player.y)<1.02) {this.collect(item.type);item.dead=true;}
    }
    this.items=this.items.filter(i=>!i.dead&&i.x>-19&&i.age<16);
  }
}
