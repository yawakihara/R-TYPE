import test from 'node:test';
import assert from 'node:assert/strict';
import {Game} from '../src/core.js';

test('敵の種類で撃破通知が上書きされず、通常弾で各敵が爆発する',()=>{
  for(const enemyType of ['scout','interceptor','organism','turret','carrier']){
    const game=new Game();game.drainEvents();game.player.x=-1;
    const enemy=game.spawn(enemyType,.25,0,{hp:1,vx:0});
    game.shoot();game.updateShots(1/60);
    const events=game.drainEvents(),explosions=events.filter(e=>e.type==='explosion');
    assert.equal(enemy.dead,true);assert.equal(explosions.length,1,enemyType+'の撃破を描画・音声へ渡す');
    assert.equal(explosions[0].enemyType,enemyType);assert.equal(explosions[0].enemyId,enemy.id);
    assert.equal(explosions[0].x,enemy.x);assert.equal(explosions[0].y,enemy.y);
    game.kill(enemy);assert.equal(game.drainEvents().length,0,'撃破済みの敵で爆発や得点を二重発生させない');
  }
});
test('耐久力が残る命中では敵を消さず、対象ID付きの被弾通知を出す',()=>{
  const game=new Game();game.drainEvents();game.player.x=-1;
  const enemy=game.spawn('scout',.25,0,{hp:2,vx:0});game.shoot();game.updateShots(1/60);
  const events=game.drainEvents(),hit=events.find(e=>e.type==='hit');
  assert.equal(enemy.hp,1);assert.ok(!enemy.dead);assert.equal(hit.enemyId,enemy.id);assert.equal(hit.enemyType,'scout');
  assert.equal(events.filter(e=>e.type==='explosion').length,0);
});
test('波動砲の貫通撃破とフォース接触でもそれぞれ爆発を通知する',()=>{
  const game=new Game();game.drainEvents();game.player.x=-1;game.player.charge=1;
  const first=game.spawn('scout',.25,0,{hp:2}),second=game.spawn('scout',.55,0,{hp:2});
  game.shoot(true);game.updateShots(1/60);
  assert.equal(game.drainEvents().filter(e=>e.type==='explosion').length,2);
  assert.equal(first.dead,true);assert.equal(second.dead,true);
  const contact=new Game();contact.drainEvents();const enemy=contact.spawn('organism',0,0,{hp:.25,vx:0});
  Object.assign(contact.force,{mode:'free',x:0,y:0});contact.updateEnemies(1/60);
  assert.equal(enemy.dead,true);assert.equal(contact.drainEvents().filter(e=>e.type==='explosion').length,1);
});
test('通知種別は付随データの同名フィールドより優先する',()=>{
  const game=new Game();game.drainEvents();game.emit('explosion',{type:'scout',enemyType:'scout',x:0,y:0});
  assert.equal(game.drainEvents()[0].type,'explosion');
});
