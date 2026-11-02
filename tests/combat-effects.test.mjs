import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {Game} from '../src/core.js';
import {CombatEffects} from '../src/combat-effects.js';

test('被弾反応は命中した敵だけを発光させ、短時間で消える',()=>{
  const game=new Game(),fx=new CombatEffects(new THREE.Group());
  fx.hit({x:1,y:2,enemyId:4});assert.equal(fx.flashStrength(4),1);assert.equal(fx.flashStrength(5),0);
  fx.update(game,.08);assert.ok(fx.flashStrength(4)>0);assert.equal(fx.impacts[0].mesh.visible,true);
  fx.update(game,.2);assert.equal(fx.flashStrength(4),0);assert.equal(fx.impacts[0].mesh.visible,false);
});
test('敵を削除した後も爆炎・破片・煙が残り、終了後は発光を消す',()=>{
  const game=new Game(),fx=new CombatEffects(new THREE.Group());game.drainEvents();
  const enemy=game.spawn('scout',1,0);game.kill(enemy);
  for(const event of game.drainEvents())if(event.type==='explosion')fx.explode(event);
  game.enemies=[];fx.update(game,.1);
  assert.equal(fx.blasts[0].group.visible,true);assert.ok(fx.fragmentMesh.count>0);assert.ok(fx.light.intensity>0);
  const age=fx.blasts[0].age;game.paused=true;fx.update(game,1);assert.equal(fx.blasts[0].age,age);
  game.paused=false;fx.update(game,.7);assert.equal(fx.blasts[0].group.visible,true,'炎が消えた後も煙が残る');
  for(let i=0;i<150;i++)fx.update(game,1/60);
  assert.ok(fx.blasts.every(b=>!b.active&&!b.group.visible));assert.equal(fx.fragmentMesh.count,0);assert.equal(fx.light.intensity,0);
});
test('連続撃破で描画枠を使い回し、タイトル復帰時に演出を持ち越さない',()=>{
  const game=new Game(),fx=new CombatEffects(new THREE.Group());
  for(let i=0;i<600;i++){
    fx.explode({x:0,y:0,size:.8});fx.hit({x:0,y:0,enemyId:i});fx.update(game,.03);
    assert.ok(fx.blasts.length<=48);assert.ok(fx.impacts.length<=32);assert.ok(fx.fragments.length<=768);
  }
  assert.ok(fx.hitFlashes.size<8);fx.update(null,1/60);
  assert.equal(fx.root.visible,false);assert.equal(fx.fragmentMesh.count,0);assert.equal(fx.hitFlashes.size,0);
  assert.ok(fx.blasts.every(b=>!b.group.visible));
});
