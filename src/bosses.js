const TAU=Math.PI*2;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const mix=(a,b,t)=>a+(b-a)*t;
const state=(key,ja,seconds,open=false)=>({key,ja,seconds,open});
const part=(id,label,x,y,hp)=>({id,label,ox:x,oy:y,hp,maxHp:hp,r:.65});

/** 各面の専用造形、破壊部位、弱点開放条件と攻撃順序。配列の順番はステージ順。 */
export const BOSS_PROFILES=[
  {id:'doorkeeper',color:0xffab59,hp:130,role:'装甲門 / 連装砲と冷却シャッター',hint:'上下の砲塔を破壊。排熱で装甲が開いたら核を撃つ。',parts:[part('top','上部砲塔',-.8,2.6,20),part('bottom','下部砲塔',-.8,-2.6,20)],states:[state('guard','装甲防御',[2.2,1.6]),state('barrage','連装砲斉射',[2.4,2.1]),state('vent','排熱 / 核露出',[4.6,4.1],true)]},
  {id:'gorgon',color:0xbbe67b,hp:160,role:'生体捕食者 / 顎の突進と孵化嚢',hint:'顎の突進を避け、捕食後の口内を狙う。孵化嚢を壊すと幼体が減る。',parts:[part('top','上部孵化嚢',-.7,2.3,23),part('bottom','下部孵化嚢',-.7,-2.3,23)],states:[state('stalk','捕食準備',[3.0,2.4]),state('bite-warn','突進予告 / 顎を回避',1.35),state('bite','捕食突進',1.5),state('digest','捕食後 / 口内露出',[4.5,4.0],true)]},
  {id:'colossus',color:0x79cfff,hp:200,role:'巨大戦艦 / 冷却装置と主砲',hint:'上下の冷却装置を両方破壊し、主砲発射後の中枢炉を狙う。',parts:[part('top','上部冷却装置',-1.8,2.25,28),part('bottom','下部冷却装置',-1.8,-2.25,28)],states:[state('siege','迎撃砲作動',[3.1,2.5]),state('lock','主砲照準 / 射線を回避',1.5),state('cannon','主砲放射',1.9),state('cool','炉心冷却',[5.2,4.6],true)]},
  {id:'judgement',color:0xff7545,hp:210,role:'圧砕要塞 / 油圧アームと焼却柱',hint:'縦の圧砕予告から離れ、アームが戻る隙に中央核へ波動砲。',parts:[part('top','上部油圧サーボ',-.6,3,26),part('bottom','下部油圧サーボ',-.6,-3,26)],states:[state('survey','圧砕座標検索',[2.7,2.1]),state('press-warn','圧砕予告 / 縦の帯を回避',1.4),state('crush','油圧圧砕',1.7),state('retract','アーム収納 / 核露出',[4.5,4.0],true)]},
  {id:'ouroboros',color:0xd5b1ff,hp:230,role:'骨竜 / 巻き付きと牙の突進',hint:'突進の予告を見て距離を取り、身をほどいた時に頭部の核を狙う。',parts:[part('top','上顎の骨棘',-.2,2.25,26),part('bottom','下顎の骨棘',-.2,-2.25,26)],states:[state('coil','骨環収束',[3.2,2.6]),state('sweep-warn','突進予告 / 牙に注意',1.35),state('sweep','骨竜突進',[2.6,2.2]),state('uncoil','骨環展開 / 頭部露出',[4.8,4.4],true)]},
  {id:'mnemosyne',color:0x99acff,hp:210,role:'神経中枢 / 三重の再生シールド',hint:'前面の神経節を3個破壊してシールドを停止。再生前に核へ集中攻撃。',parts:[part('node0','下部神経節',-2.8,-2.8,12),part('node1','中央神経節',-2.8,0,12),part('node2','上部神経節',-2.8,2.8,12)],states:[state('network','神経節を3個破壊',Infinity),state('overload','神経遮断 / 核露出',[5.8,5.1],true),state('reweave','神経節再生',1.8)]},
  {id:'arbiter',color:0x72f1dc,hp:250,role:'回転防衛機 / 光翼とレーザー格子',hint:'レーザーの予告線の間へ移動。光翼が停止した瞬間に核を撃つ。',parts:[part('top','上部光翼制御器',-.3,2.7,30),part('bottom','下部光翼制御器',-.3,-2.7,30)],states:[state('rotate','光翼回転 / 防御',[3.2,2.5]),state('align','格子予告 / 線の間へ',1.6),state('lattice','レーザー格子',1.8),state('stall','光翼停止 / 核露出',[4.5,3.9],true)]},
  {id:'origin',color:0xff8c9d,hp:300,role:'始原核 / 収縮する心臓と動脈弁',hint:'拡張して核が開いたら [X] でフォースを直接送り込む。弾は無効。',parts:[part('top','上部動脈弁',-.2,2.5,32),part('bottom','下部動脈弁',-.2,-2.5,32)],states:[state('heartbeat','心拍 / 動脈弾放出',[3.0,2.4]),state('contract','収縮予告',1.3),state('systole','収縮 / 心拍衝撃',[1.7,1.5]),state('diastole','拡張 / フォースを射出',[5.0,4.5],true)]},
];

/** 面に対応するボスを生成する。@param {number} stage 面番号 @param {number} id 個体ID @returns {object} ボス状態 */
export function createBoss(stage,id){
  const p=BOSS_PROFILES[stage];
  return {id,type:p.id,stage,x:21,y:0,age:0,hp:p.hp,maxHp:p.hp,open:false,phase:0,flash:0,state:'arrival',stateIndex:-1,stateTime:0,cycle:0,fireCd:.4,hazards:[],parts:p.parts.map(p=>({...p})),weakX:-1.65,weakY:0,weakR:.83,status:'接近中 / 巨大反応',hint:p.hint,openness:0,targetY:0,supplyCd:5,forceLatched:false};
}

/** 破壊部位の衝突・発光マーカーで共有するワールド座標を返す。 */
export function bossPartPosition(b,p){
  const wave=b.stage===5?Math.sin(b.age*.8+Number(p.id.slice(-1))*1.8)*.28:0;
  return {x:b.x+p.ox,y:b.y+p.oy+wave};
}

/** 弱点核のワールド座標。全攻撃と表示はこの位置を共有する。 */
export function bossCorePosition(b){return {x:b.x+b.weakX,y:b.y+b.weakY};}

/** 線分と点の距離。斜め砲撃・縦の圧砕にも表示と同じ判定を使う。 */
export function distanceToSegment(x,y,h){
  const dx=h.x2-h.x1,dy=h.y2-h.y1,t=clamp(((x-h.x1)*dx+(y-h.y1)*dy)/(dx*dx+dy*dy||1),0,1);
  return Math.hypot(x-h.x1-dx*t,y-h.y1-dy*t);
}

/** 造形に沿った簡略接触判定。長い主砲、開いた顎、圧盤の中央の隙間を区別する。 */
export function bossContact(b,x,y){
  const px=x-b.x,py=y-b.y,o=b.openness;
  const ellipse=(cx,cy,rx,ry)=>Math.hypot((px-cx)/(rx+.16),(py-cy)/(ry+.16))<1;
  if(ellipse(b.weakX,b.weakY,.64,.72))return true;
  for(const p of b.parts)if(p.hp>0){const q=bossPartPosition(b,p);if(Math.hypot(x-q.x,y-q.y)<.7)return true;}
  if(b.stage===0)return ellipse(2.25,0,.58,3.0)||ellipse(-.3,1.7+o*.95,2.1,.75)||ellipse(-.3,-1.7-o*.95,2.1,.75);
  if(b.stage===1||b.stage===4){
    const gape=['bite-warn','sweep-warn'].includes(b.state)?.9:['bite','sweep'].includes(b.state)?.1:o;
    return ellipse(1.3,0,1.4,2.5)||ellipse(-1.0,1.4+gape*.9,1.8,.48)||ellipse(-1.0,-1.4-gape*.9,1.8,.48);
  }
  if(b.stage===2){
    const a=b.aimAngle||0,c=Math.cos(a),s=Math.sin(a),dx=px-.4,dy=py-.22;
    const barrelX=dx*c+dy*s,barrelY=-dx*s+dy*c;
    return ellipse(1.1,0,3.7,1.13)||(barrelX>-5.5&&barrelX<0&&Math.abs(barrelY)<.47);
  }
  if(b.stage===3)return ellipse(2.2,0,.7,2.8)||ellipse(-.5,1.25+o*1.15,2.2,.5)||ellipse(-.5,-1.25-o*1.15,2.2,.5);
  if(b.stage===5)return ellipse(.4,1.4,2.3,1.7)||ellipse(1.0,-1.1,.75,1.7);
  if(b.stage===6)return ellipse(1.1,0,1.5,1.6)||(px>-4.3&&px<.4&&Math.abs(py-1)<.42)||Math.abs(Math.hypot(px-.1,py)-2.65)<.23;
  return ellipse(.8,0,1.5,2.4);
}

/** 予告を伴う攻撃を登録する。照準は登録時に固定し、発射後に自機を追尾しない。 */
function beam(g,b,x1,y1,x2,y2,warn,active,r=.35,kind='beam'){
  b.hazards.push({id:g.nextId++,kind,x1,y1,x2,y2,y:y1,age:0,warn,duration:warn+active,r});
}

/** 攻撃状態へ遷移し、照準確定・部位再生など一度だけの動作を行う。 */
function enter(g,b,index){
  const profile=BOSS_PROFILES[b.stage],s=profile.states[index];
  b.stateIndex=index;b.state=s.key;b.stateTime=0;b.fireCd=.15;
  b.targetY=clamp(g.player.y,-4.2,4.2);
  const alive=b.parts.filter(p=>p.hp>0).length;
  if(s.key==='lock'){
    b.lockY=b.y;
    const angle=Math.atan2(g.player.y-(b.y+.22),g.player.x-(b.x+.4))-Math.PI;
    b.aimAngle=clamp(Math.atan2(Math.sin(angle),Math.cos(angle)),-.33,.33);
    const muzzleX=b.x+.4-5.42*Math.cos(b.aimAngle),muzzleY=b.y+.22-5.42*Math.sin(b.aimAngle);
    beam(g,b,muzzleX,muzzleY,-17.5,muzzleY+(-17.5-muzzleX)*Math.tan(b.aimAngle),1.5,1.9,.48);
    if(b.phase){const a=b.aimAngle+(b.targetY>0?.16:-.16);beam(g,b,muzzleX,muzzleY,-17.5,muzzleY+(-17.5-muzzleX)*Math.tan(a),1.5,1.9,.28);}
  }
  if(s.key==='press-warn'){
    const x=clamp(g.player.x,-12,1);
    beam(g,b,x,6.4,x,-6.4,1.4,1.7,.64,'press');
    if(alive>0)beam(g,b,x+5.3,6.4,x+5.3,-6.4,1.4,1.7,.64,'press');
  }
  if(s.key==='align'){
    b.safeLane=[-2.4,2.4,0][b.cycle%3];
    let lanes=[-4.8,-2.4,0,2.4,4.8].filter(y=>y!==b.safeLane);
    if(alive===0)lanes=lanes.filter((_,i)=>i%2===0);
    for(const y of lanes){const slope=b.phase?(y-b.safeLane)*.09:0;beam(g,b,b.x-2,y,-17.5,y+slope,1.6,1.8,.27);}
  }
  if(s.key==='digest')for(const p of b.parts)if(p.hp>0)g.spawn('organism',b.x-2,b.y+p.oy*.65,{hp:4,vx:-4.3,cooldown:2.8});
  if(s.key==='overload'){
    g.bullets=[];g.emit('shieldBreak',{x:b.x-1.65,y:b.y});
  }
  if(s.key==='network'&&b.cycle>0)for(const p of b.parts){p.hp=p.maxHp;}
  if(['lock','press-warn','align','bite-warn','sweep-warn','contract'].includes(s.key))g.emit('telegraph',{bossType:b.type});
  if(['contract','systole'].includes(s.key))g.emit('heartbeat');
  g.emit('bossState',{bossType:b.type,state:s.key});
}

/** 現在の攻撃の継続時間。部位破壊によって一部の攻撃後の隙が延びる。 */
function duration(b){
  const s=BOSS_PROFILES[b.stage].states[b.stateIndex];
  let n=Array.isArray(s.seconds)?s.seconds[b.phase]:s.seconds;
  if(b.parts.every(p=>p.hp<=0)&&['vent','diastole','uncoil'].includes(s.key))n+=1.5;
  return n;
}

/** 同心円状の低速弾を放つ。@param {number} count 弾数 @param {number} speed 弾速 */
function radial(g,b,count,speed){for(let i=0;i<count;i++)g.enemyBullet(b.x-1.65,b.y,b.age*.37+i*TAU/count,speed,'heavy');}

/** ボス固有の射撃を更新する。閉鎖・予告・露出を攻撃密度でも区別する。 */
function attack(g,b,dt){
  b.fireCd-=dt;if(b.fireCd>0)return;
  const p=g.player,s=b.state,alive=b.parts.filter(p=>p.hp>0),phase=b.phase;
  let delay=1.2,fired=false;
  const aim=(x,y,n,spread,speed)=>{g.aimed(x,y,n,spread,speed);fired=true;};
  if(b.stage===0){
    if(s==='guard')for(const part of alive){const q=bossPartPosition(b,part);aim(q.x-.5,q.y,1,.1,5.4);}
    if(s==='barrage'){delay=.65;for(const part of alive){const q=bossPartPosition(b,part);aim(q.x-.5,q.y,phase?3:2,.16,5.1);}if(!alive.length)aim(b.x-2,b.y,3,.2,4.2);}
    if(s==='vent'){delay=1.65;aim(b.x-2,b.y,phase?3:1,.22,3.8);}
  }else if(b.stage===1){
    if(s==='stalk'){delay=.9;aim(b.x-2,b.y,3+phase*2,.2,4.3);}
    if(s==='digest'){delay=1.7;for(const part of alive){const q=bossPartPosition(b,part);aim(q.x,q.y,1,.1,4.2);}}
  }else if(b.stage===2){
    if(s==='siege'){delay=phase?.7:1;for(const part of alive){const q=bossPartPosition(b,part);aim(q.x,q.y,3,.16,5);}if(!alive.length)aim(b.x-2,b.y,3,.22,4.4);}
    if(s==='cool'){delay=1.8;aim(b.x-2,b.y,1,.1,4.2);}
  }else if(b.stage===3){
    if(s==='survey'){delay=.85;for(const part of alive){const q=bossPartPosition(b,part);aim(q.x,q.y,2+phase,.2,4.7);}}
    if(s==='retract'){delay=1.5;aim(b.x-2,b.y,3,.3,3.5);}
  }else if(b.stage===4){
    if(s==='coil'){delay=1.05;for(let i=0;i<7+phase*2;i++)g.enemyBullet(b.x-2,b.y,Math.PI+(i-(6+phase*2)/2)*.17,3.7,'heavy');fired=true;}
    if(s==='uncoil'){delay=1.55;aim(b.x-2,b.y,3,.26,4.2);}
  }else if(b.stage===5){
    if(s==='network'){delay=phase?.65:.9;for(const part of alive){const q=bossPartPosition(b,part);const a=Math.atan2(p.y-q.y,p.x-q.x);for(const off of [-.2,.2])g.enemyBullet(q.x,q.y,a+off,3.9);g.enemyBullet(q.x,q.y,Math.PI+Math.sin(b.age+q.y)*.85,3.1,'heavy');}fired=true;}
    if(s==='overload'){delay=2.0;radial(g,b,8+phase*2,2.9);fired=true;}
  }else if(b.stage===6){
    if(s==='rotate'){delay=.8;for(const part of alive){const q=bossPartPosition(b,part);aim(q.x,q.y,3,.2,4.8);}if(!alive.length)aim(b.x-2,b.y,3,.26,4.4);}
    if(s==='stall'){delay=1.5;aim(b.x-2,b.y,phase?3:1,.25,4.4);}
  }else{
    if(s==='heartbeat'){delay=phase?.85:1.15;for(const part of alive){const q=bossPartPosition(b,part);aim(q.x,q.y,3,.18,3.5);}if(!alive.length)aim(b.x-2,b.y,3,.24,3.3);}
    if(s==='systole'){delay=.8;radial(g,b,phase?20:14,phase?3.3:2.8);fired=true;}
    if(s==='diastole'&&alive.length){delay=2.2;aim(b.x-2,b.y,phase?5:3,.27,3.0);}
  }
  b.fireCd=delay/g.diff.rate;if(fired)g.emit('bossFire',{bossType:b.type});
}

/** 機構と接触判定を進める。描画は状態・予告線・部位座標をそのまま使用する。 */
export function updateBossMechanics(g,dt){
  const b=g.boss;if(!b)return;
  b.age+=dt;b.flash=Math.max(0,b.flash-dt);
  const newPhase=b.hp/b.maxHp<.45?1:0;
  if(newPhase!==b.phase){b.phase=newPhase;g.emit('bossPhase',{x:b.x,y:b.y,bossType:b.type});}
  const baseY=Math.sin(b.age*(b.stage===7?.31:.42))*(b.stage===2?.45:b.stage===4?.8:1.0);
  let targetX=b.stage===2?10.6:10.0,targetY=baseY;
  if(b.stateIndex<0){
    b.x=mix(b.x,targetX,Math.min(1,dt*1.2));b.y=baseY;
    if(b.age>=2.8)enter(g,b,0);
  }else{
    b.stateTime+=dt;
    if(b.stage===5&&b.state==='network'&&b.parts.every(p=>p.hp<=0))enter(g,b,1);
    else if(b.stateTime>=duration(b)){
      let next=b.stateIndex+1;
      if(next>=BOSS_PROFILES[b.stage].states.length){next=0;b.cycle++;}
      enter(g,b,next);
    }
    if(b.state==='bite'||b.state==='sweep'){
      const progress=clamp(b.stateTime/duration(b),0,1),lunge=Math.sin(progress*Math.PI);
      targetX-=lunge*(b.state==='bite'?14.5:8.8);targetY=mix(baseY,b.targetY,lunge);
    }
    if(b.stage===2){if(['lock','cannon'].includes(b.state))targetY=b.lockY;else b.aimAngle=mix(b.aimAngle||0,0,Math.min(1,dt*3));}
    b.x=mix(b.x,targetX,Math.min(1,dt*(b.state==='bite'?12:4.2)));b.y=mix(b.y,targetY,Math.min(1,dt*4));
    attack(g,b,dt);
  }
  const s=BOSS_PROFILES[b.stage].states[b.stateIndex];
  b.open=!!s?.open&&(b.stage!==2||b.parts.every(p=>p.hp<=0));
  b.status=s?.ja||'接近中 / 巨大反応';
  if(b.state==='cool'&&!b.open)b.status='炉心封鎖 / 冷却装置を両方破壊';
  b.openness=mix(b.openness,b.open?1:0,Math.min(1,dt*5.5));
  for(const h of b.hazards){
    h.age+=dt;
    if(h.age>=h.warn&&h.age<h.duration&&distanceToSegment(g.player.x,g.player.y,h)<h.r+.16)g.die();
  }
  b.hazards=b.hazards.filter(h=>h.age<h.duration);
  const f=g.force,q=bossCorePosition(b);
  if(b.forceLatched&&f.mode==='free'){f.x=q.x;f.y=q.y;}
  else b.forceLatched=false;
  if(b.open&&f.mode!=='none'&&Math.hypot(f.x-q.x,f.y-q.y)<1.18){
    b.hp-=dt*(b.stage===7?32:16);b.flash=.06;
    if(f.mode==='launch'||f.mode==='free'){f.mode='free';f.x=q.x;f.y=q.y;if(b.stage===7)b.forceLatched=true;}
  }
  if(bossContact(b,g.player.x,g.player.y))g.die();
  // 装備なしで最終核へ到達しても、正規の補給機からフォースを回収できる。
  if(b.stage===7&&f.mode==='none'){
    b.supplyCd-=dt;
    if(b.supplyCd<=0&&!g.enemies.some(e=>e.type==='carrier')&&!g.items.some(i=>i.type==='red')){g.spawn('carrier',16,0,{drop:'red',vx:-3.4,hp:4,cooldown:99});b.supplyCd=12;}
  }
  if(b.hp<=0)g.defeatBoss();
}

/** ボスに対するショットの命中を判定する。部位の破壊と核の装甲を分ける。 */
export function hitBoss(g,s){
  const b=g.boss;if(!b||s.dead)return;
  let partHit=false;
  for(const p of b.parts){
    if(p.hp<=0||s.hit?.has('p'+p.id))continue;
    const q=bossPartPosition(b,p);
    if(Math.hypot(s.x-q.x,s.y-q.y)<p.r+s.r){
      p.hp-=s.damage;s.hit?.add('p'+p.id);if(!s.pierce)s.dead=true;partHit=true;g.hits++;
      g.emit('hit',{...q,weapon:s.type});
      if(p.hp<=0){p.hp=0;g.emit('partBreak',{...q,partId:p.id,bossType:b.type});g.addScore(2000);}
      if(s.dead)break;
    }
  }
  const q=bossCorePosition(b);
  if(!partHit&&!s.hit?.has('boss')&&Math.abs(s.x-q.x)<1+s.r&&Math.abs(s.y-q.y)<b.weakR+s.r){
    if(b.open&&b.stage!==7){b.hp-=s.damage;s.hit?.add('boss');b.flash=.08;g.hits++;g.emit('hit',{...q,weapon:s.type});}
    else g.emit('armour',{x:s.x,y:s.y});
    if(!s.pierce||!b.open||b.stage===7)s.dead=true;
  }
}
