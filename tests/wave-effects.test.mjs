import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {Game} from '../src/core.js';
import {WaveEffects} from '../src/wave-effects.js';

test('溜め中だけ電場が見え、ポーズ・ミス・タイトルで発光が止まる',()=>{
  const fx=new WaveEffects(new THREE.Group()),game=new Game();
  game.player.charge=.8;game.player.fireWas=true;fx.update(game,1/60);
  assert.equal(fx.charge.visible,true);assert.ok(fx.chargeLight.intensity>0);assert.ok(fx.motes.count>12);
  game.paused=true;fx.update(game,1/60);assert.equal(fx.charge.visible,false);assert.equal(fx.chargeLight.intensity,0);
  game.paused=false;game.mode='dying';fx.update(game,1/60);assert.equal(fx.charge.visible,false);
  fx.update(null,1/60);assert.equal(fx.root.visible,false);
});
test('専用の波動砲描画は元の弾・攻撃力・当たり判定を書き換えない',()=>{
  const game=new Game(),fx=new WaveEffects(new THREE.Group());game.player.charge=1;game.shoot(true);
  const shot=game.shots[0],before={x:shot.x,y:shot.y,r:shot.r,vx:shot.vx,damage:shot.damage,life:shot.life};
  fx.fire(game.drainEvents().find(e=>e.type==='wave'));fx.update(game,1/60);
  assert.equal(fx.bolts.size,1);assert.ok(fx.flashLight.intensity>0);
  assert.deepEqual({x:shot.x,y:shot.y,r:shot.r,vx:shot.vx,damage:shot.damage,life:shot.life},before);
  assert.equal(shot.damage,24);assert.equal(shot.r,.69);
});
test('繰り返し発射しても描画オブジェクトを再利用し、消えた弾の残像を残さない',()=>{
  const game=new Game(),fx=new WaveEffects(new THREE.Group());
  for(let i=0;i<250;i++){
    game.player.charge=1;game.shoot(true);fx.fire({x:-9,y:0,power:2});fx.update(game,1/60);
    game.shots=[];fx.update(game,.7);assert.equal(fx.bolts.size,0);
  }
  assert.equal(fx.pool.length,1);assert.equal(fx.muzzles.length,4);assert.ok(fx.muzzles.every(s=>!s.group.visible));
});
