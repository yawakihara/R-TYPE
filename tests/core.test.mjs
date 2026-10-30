import test from 'node:test';
import assert from 'node:assert/strict';
import {Game,STAGES,terrainAt,obstaclesFor,rng} from '../src/core.js';

/** 指定時間だけ60Hzで進める。 */
function run(g,seconds,input={}){for(let i=0;i<Math.ceil(seconds*60);i++)g.update(1/60,typeof input==='function'?input(g,i):input);}

test('地形には全8ステージを通じて通過できる間隔がある',()=>{
  assert.equal(STAGES.length,8);
  for(let s=0;s<8;s++)for(let x=0;x<400;x+=.25){const t=terrainAt(s,x);assert.ok(t.top-t.bottom>9);assert.ok(Number.isFinite(t.top));}
  for(let s=0;s<8;s++)for(const o of obstaclesFor(s)){assert.ok(o.w>0&&o.h>0);assert.ok(Math.abs(o.y)-o.h/2>1);}
});
test('乱数は同じシードで再現できる',()=>{const a=rng(5),b=rng(5);for(let i=0;i<200;i++)assert.equal(a(),b());});
test('斜め移動を正規化し、スピード段階を切り替える',()=>{
  const a=new Game(),b=new Game();run(a,.3,{x:1});run(b,.3,{x:1,y:1});
  assert.ok(Math.abs((a.player.x+9)-Math.hypot(b.player.x+9,b.player.y))<1e-8);
  a.update(1/60,{speed:true});assert.equal(a.player.speed,1);
});
test('通常ショットと溜め撃ちを区別し、最大チャージは24ダメージの貫通弾になる',()=>{
  const g=new Game();g.update(1/60,{fire:true});assert.equal(g.shots.filter(s=>s.type==='shot').length,1);
  run(g,1.8,{fire:true});assert.equal(g.player.charge,1);
  g.update(1/60,{});const wave=g.shots.find(s=>s.type==='wave');assert.ok(wave);assert.equal(wave.damage,24);assert.equal(wave.pierce,true);assert.equal(g.player.charge,0);
});
test('フォースは前後合体・射出・回収ができ、通常弾を防ぐ',()=>{
  const g=new Game();g.collect('red');run(g,2);assert.equal(g.force.mode,'front');
  g.toggleForce();assert.equal(g.force.mode,'launch');run(g,1.4);assert.equal(g.force.mode,'free');
  g.toggleForce();run(g,2);assert.equal(g.force.mode,'front');
  const f=g.force;g.bullets=[{id:900,x:f.x,y:f.y,vx:0,vy:0,r:.14,age:0,grazed:false}];g.updateBullets(1/60);assert.equal(g.bullets.length,0);
  g.force.mode='return';g.force.x=g.player.x-1;g.force.y=g.player.y;g.update(1/60);assert.equal(g.force.mode,'rear');
});
test('クリスタルと装備を上限まで成長させ、3種類のレーザーを生成する',()=>{
  const g=new Game();for(const color of ['red','blue','yellow']){
    for(let i=0;i<4;i++)g.collect(color);g.force.mode='front';g.force.x=g.player.x+1.6;g.force.y=g.player.y;g.shots=[];g.shoot();
    assert.equal(g.player.level,3);assert.ok(g.shots.some(s=>s.type===({red:'helix',blue:'reflect',yellow:'crawler'}[color])));
  }
  for(let i=0;i<8;i++){g.collect('bit');g.collect('missile');g.collect('speed');}
  assert.equal(g.player.bits,2);assert.equal(g.player.missiles,2);assert.equal(g.player.maxSpeed,4);
});
test('反射レーザーは上下の地形で跳ね返り、対地レーザーは表面を這う',()=>{
  const g=new Game();const limit=terrainAt(0,0);g.shots=[{type:'reflect',x:0,y:limit.top-.01,vx:0,vy:10,age:0,life:2,r:.1,bounces:0}];g.updateShots(1/60);assert.ok(g.shots[0].vy<0);
  g.shots=[{type:'crawler',x:0,y:limit.bottom+.01,vx:3,vy:-10,sign:-1,grounded:false,age:0,life:2,r:.1,hit:new Set()}];g.updateShots(1/60);assert.equal(g.shots[0].grounded,true);assert.equal(g.shots[0].vy,0);
});
test('被弾と地形接触は一撃でミスし、チェックポイントで装備を初期化する',()=>{
  const g=new Game();g.time=25;g.scroll=80;g.checkpoint=24;g.player.invuln=0;g.collect('blue');g.die();assert.equal(g.lives,2);run(g,1.6);assert.equal(g.mode,'playing');assert.ok(g.time>=24&&g.time<24.2);assert.equal(g.player.level,0);assert.equal(g.force.mode,'none');
  g.player.invuln=0;g.player.y=9;g.update(1/60);assert.equal(g.mode,'dying');
});
test('CADETは装備を保持し、練習は残機を失わない',()=>{
  const cadet=new Game({difficulty:'cadet'});cadet.collect('yellow');cadet.force.mode='front';cadet.player.invuln=0;cadet.die();run(cadet,1.6);assert.equal(cadet.player.weapon,'yellow');assert.equal(cadet.player.level,1);
  const practice=new Game({practice:true});practice.player.invuln=0;practice.die();assert.equal(practice.lives,3);
});
test('残機ゼロからコンティニューで同じチェックポイントへ復帰できる',()=>{
  const g=new Game();g.lives=1;g.checkpoint=24;g.player.invuln=0;g.die();run(g,2);assert.equal(g.mode,'over');g.continueGame();assert.equal(g.mode,'playing');assert.equal(g.time,24);assert.equal(g.continues,1);assert.equal(g.lives,3);
});
test('DRIVEは満タンで発動し、クラシックでは発動しない',()=>{
  const g=new Game();assert.equal(g.activateDrive(),false);g.drive=100;assert.equal(g.activateDrive(),true);assert.equal(g.drive,0);assert.ok(g.driveTime>4);
  const classic=new Game({classic:true});classic.drive=100;assert.equal(classic.activateDrive(),false);
});
test('最終ボスの核は波動砲を防ぎ、開いた時のフォース接触で傷つく',()=>{
  const g=new Game({stage:7,practice:true});g.spawnBoss();const b=g.boss;b.x=9;b.age=4;b.y=0;b.open=true;const hp=b.hp;
  g.player.charge=1;g.player.x=5.8;g.player.y=0;g.shoot(true);g.updateShots(1/60);assert.equal(b.hp,hp);
  g.force.mode='free';g.force.x=b.x-1.65;g.force.y=0;g.updateBoss(1/60);assert.ok(b.hp<hp);
});
test('全8ステージを同じ本体・正規の射撃とフォース操作で通しクリアできる',()=>{
  const g=new Game({practice:true,difficulty:'cadet'});g.debugInvincible=true;
  const equip=()=>{for(let j=0;j<3;j++)g.collect('red');g.collect('missile');g.collect('missile');g.collect('bit');g.collect('bit');g.force.mode='front';g.force.x=g.player.x+1.6;};
  equip();let stage=0,frame=0;
  while(frame<60*1600&&g.mode!=='victory'){
    const b=g.boss,p=g.player;
    let targetY=b?b.y:0;
    const item=g.items.find(i=>i.x<p.x+6&&i.x>p.x-2);if(!b&&item)targetY=item.y;
    const force=!!b&&g.stage===7&&(g.force.mode==='front'||g.force.mode==='rear')&&b.open;
    g.update(1/60,{x:p.x<-8?.4:p.x>-7.6?-.4:0,y:clampTest((targetY-p.y)*3),rapid:!b||g.stage===7,fire:!!b&&g.stage!==7&&frame%115<103,force});
    if(g.stage!==stage){stage=g.stage;equip();}
    if(frame%600===0)assert.ok(Number.isFinite(g.player.x)&&Number.isFinite(g.score));
    g.drainEvents();frame++;
  }
  assert.equal(g.mode,'victory',`Stopped at stage ${g.stage+1}, t=${g.time}, boss hp=${g.boss?.hp}, force=${g.force.mode}`);
  assert.equal(g.stage,7);assert.ok(g.kills>100);assert.ok(g.score>100000);
});
function clampTest(n){return Math.max(-1,Math.min(1,n));}
