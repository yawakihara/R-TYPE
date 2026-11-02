import test from 'node:test';
import assert from 'node:assert/strict';
import {Game,STAGES} from '../src/core.js';
import {BOSS_PROFILES,bossCorePosition,bossPartPosition,bossContact,distanceToSegment,hitBoss} from '../src/bosses.js';
import {pilotInput} from './boss-pilot.mjs';

/** 道中を省略し、被弾を無効にしたボス戦を用意する。 */
function encounter(stage){const g=new Game({stage,practice:true,bossPractice:true});g.debugInvincible=true;g.drainEvents();return g;}
/** ボスだけを固定刻みで進め、条件に到達できなければ失敗する。 */
function until(g,predicate,seconds=40){for(let i=0;i<seconds*60;i++){g.updateBoss(1/60);if(predicate(g.boss))return;}assert.fail('状態に到達しません: '+g.boss?.type+'/'+g.boss?.state);}
/** 衝突位置へ独立した検証弾を一発渡す。 */
function hit(g,q,damage=24,pierce=true){const s={x:q.x,y:q.y,r:.15,damage,pierce,hit:new Set(),type:'wave'};hitBoss(g,s);return s;}

test('8面が専用モデル・異なる攻撃順序・攻略ヒントを持つ',()=>{
  assert.equal(BOSS_PROFILES.length,8);assert.equal(new Set(BOSS_PROFILES.map(p=>p.id)).size,8);
  assert.equal(new Set(BOSS_PROFILES.map(p=>p.states.map(s=>s.key).join(','))).size,8);
  BOSS_PROFILES.forEach((p,i)=>{assert.equal(STAGES[i].bossType,p.id);assert.ok(p.hint.length>20);const b=encounter(i).boss;assert.equal(b.type,p.id);assert.ok(b.parts.length>=2);assert.equal(b.open,false);});
});
test('装甲中は核の弾を防ぎ、露出すると正規ダメージを一度だけ通す',()=>{
  for(let stage=0;stage<7;stage++){
    const g=encounter(stage),b=g.boss,original=b.hp;hit(g,bossCorePosition(b));assert.equal(b.hp,original);
    if(stage===2||stage===5)for(const p of b.parts)hit(g,bossPartPosition(b,p),100);
    until(g,b=>b.open);const q=bossCorePosition(b),s=hit(g,q);assert.equal(b.hp,original-24,'ST '+(stage+1));hitBoss(g,s);assert.equal(b.hp,original-24);
  }
});
test('戦艦の冷却装置は片方だけの破壊では炉心を開かない',()=>{
  const g=encounter(2),b=g.boss;
  until(g,b=>b.state==='cool');assert.equal(b.open,false);
  hit(g,bossPartPosition(b,b.parts[0]),100);g.updateBoss(1/60);assert.equal(b.open,false);
  hit(g,bossPartPosition(b,b.parts[1]),100);g.updateBoss(1/60);assert.equal(b.open,true);
  assert.equal(g.drainEvents().filter(e=>e.type==='partBreak').length,2);
});
test('神経節を3個破壊すると弾幕とシールドが消え、攻撃後に神経節が再生する',()=>{
  const g=encounter(5),b=g.boss;until(g,b=>b.state==='network');
  for(let i=0;i<2;i++){hit(g,bossPartPosition(b,b.parts[i]),100);g.updateBoss(1/60);assert.equal(b.open,false);}
  hit(g,bossPartPosition(b,b.parts[2]),100);g.updateBoss(1/60);
  assert.equal(b.state,'overload');assert.equal(b.open,true);assert.equal(g.bullets.length,0);
  assert.equal(g.drainEvents().filter(e=>e.type==='shieldBreak').length,1);
  until(g,b=>b.state==='network');assert.ok(b.parts.every(p=>p.hp===p.maxHp));assert.equal(b.open,false);
});
test('主砲・圧砕・格子は十分な予告を出し、照準を固定してから当たり判定を有効にする',()=>{
  for(const stage of [2,3,6]){
    const g=encounter(stage);g.debugInvincible=false;g.player.invuln=0;g.player.x=-8;g.player.y=0;
    until(g,b=>b.hazards.length>0);const h=g.boss.hazards[0];assert.ok(h.warn>=1.3);
    const frozen=[h.x1,h.y1,h.x2,h.y2];g.player.x=(h.x1+h.x2)/2;g.player.y=(h.y1+h.y2)/2;
    for(let i=0;i<50;i++)g.updateBoss(1/60);assert.equal(g.mode,'playing');assert.deepEqual([h.x1,h.y1,h.x2,h.y2],frozen);
    for(let i=0;i<70;i++)g.updateBoss(1/60);assert.equal(g.mode,'dying','ST '+(stage+1));
  }
});
test('縦・斜めの砲撃も描画と同じ線分を判定し、格子の予告には回避できる隙間がある',()=>{
  assert.equal(distanceToSegment(0,0,{x1:0,y1:-5,x2:0,y2:5}),0);
  assert.ok(distanceToSegment(0,0,{x1:-4,y1:-4,x2:4,y2:4})<1e-9);
  assert.ok(distanceToSegment(2,0,{x1:0,y1:-5,x2:0,y2:5})>1.9);
  const g=encounter(6);until(g,b=>b.state==='align');
  assert.equal(g.boss.hazards.length,4);
  for(const h of g.boss.hazards)assert.ok(distanceToSegment(-8,g.boss.safeLane,h)>1.7);
});
test('孵化嚢・光翼制御器の破壊で幼体・格子の本数が減る',()=>{
  const full=encounter(1),broken=encounter(1);for(const p of broken.boss.parts)hit(broken,bossPartPosition(broken.boss,p),100);
  until(full,b=>b.state==='digest');until(broken,b=>b.state==='digest');assert.equal(full.enemies.length,2);assert.equal(broken.enemies.length,0);
  const g=encounter(6);for(const p of g.boss.parts)hit(g,bossPartPosition(g.boss,p),100);until(g,b=>b.state==='align');assert.equal(g.boss.hazards.length,2);
});
test('HP45%未満で第2段階へ一度だけ移行する',()=>{
  const g=encounter(0);g.boss.hp=g.boss.maxHp*.44;for(let i=0;i<90;i++)g.updateBoss(1/60);
  assert.equal(g.boss.phase,1);assert.equal(g.drainEvents().filter(e=>e.type==='bossPhase').length,1);
});
test('捕食突進は左側の戦域まで届き、長い主砲と圧盤も造形に沿って接触する',()=>{
  const g=encounter(1);until(g,b=>b.state==='bite');let left=100;for(let i=0;i<80;i++){g.updateBoss(1/60);left=Math.min(left,g.boss.x);}
  assert.ok(left<-3.5,'正面に居続けると顎の先端が自機の付近まで来る');
  const ship=encounter(2).boss;assert.equal(bossContact(ship,ship.x-4.5,.22),true);assert.equal(bossContact(ship,ship.x-4.5,2),false);
  const press=encounter(3).boss;press.openness=1;assert.equal(bossContact(press,press.x-2,2.4),true);assert.equal(bossContact(press,press.x-.3,0),false);
});
test('最終核はフォースが閉鎖中に傷つけず、露出中だけ損傷し、装備なしでも補給できる',()=>{
  const g=encounter(7),b=g.boss,hp=b.hp,q=bossCorePosition(b);g.force.mode='free';g.force.x=q.x;g.force.y=q.y;g.updateBoss(1/60);assert.equal(b.hp,hp);
  g.force.mode='none';until(g,b=>b.open);hit(g,bossCorePosition(b),100);assert.equal(b.hp,hp);
  const core=bossCorePosition(b);g.force.mode='free';g.force.x=core.x;g.force.y=core.y;g.updateBoss(1/60);assert.ok(b.hp<hp);assert.equal(b.forceLatched,true);
  g.force.mode='return';g.updateBoss(1/60);assert.equal(b.forceLatched,false);
  const supply=encounter(7);until(supply,()=>supply.enemies.some(e=>e.type==='carrier'));assert.equal(supply.enemies[0].drop,'red');
});
test('ボス直行の再出撃・次面遷移でも道中へ戻らず、実際の射撃操作で全8体を撃破できる',()=>{
  const retry=new Game({stage:3,practice:true,bossPractice:true});retry.player.invuln=0;retry.die();for(let i=0;i<100;i++)retry.update(1/60);assert.ok(retry.boss);assert.equal(retry.stage,3);assert.ok(retry.time>=STAGES[3].duration);
  const g=encounter(0);for(let i=0;i<3;i++)g.collect('red');g.collect('bit');g.collect('bit');g.force.mode='front';let frame=0,oldStage=0,phaseCount=0,partBreaks=0;
  while(g.mode!=='victory'&&frame<60*600){
    g.update(1/60,pilotInput(g,frame++));for(const e of g.drainEvents()){if(e.type==='bossPhase')phaseCount++;if(e.type==='partBreak')partBreaks++;}
    if(g.stage!==oldStage){oldStage=g.stage;assert.ok(g.boss);}
  }
  assert.equal(g.mode,'victory',`ST ${g.stage+1}, ${g.boss?.state}, hp=${g.boss?.hp}`);assert.equal(phaseCount,8);assert.ok(partBreaks>=10);assert.ok(g.totalTime<600);
});
