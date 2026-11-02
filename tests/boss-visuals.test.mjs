import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createBoss,bossPartPosition} from '../src/bosses.js';
import {BossVisuals} from '../src/boss-visuals.js';

/** 共有モデル資源の所有権と関節の更新を確認する最小テンプレート。 */
function template(b){
  const model=new THREE.Group(),geometry=new THREE.BoxGeometry(),material=new THREE.MeshStandardMaterial({color:0x587080});
  for(const suffix of ['shell_top','shell_bottom','rotor',...b.parts.map(p=>'part_'+p.id)]){
    const joint=new THREE.Group();joint.name='boss_'+b.type+'__'+suffix;joint.position.set(0,1,0);joint.add(new THREE.Mesh(geometry,material));model.add(joint);
  }
  return {model,geometry,material};
}
test('部位破壊・開閉・予告ビームがゲーム本体と同じ座標で動く',()=>{
  const b=createBoss(2,1),world=new THREE.Group(),{model}=template(b),v=new BossVisuals(world,model,b);
  b.x=10;b.y=1;b.openness=1;b.open=true;b.parts[0].hp=0;b.hazards=[{x1:8,y1:2,x2:-17,y2:2,age:2,warn:1.5,r:.48}];v.update(b,.1);
  assert.equal(v.joints.get('part_top').o.visible,false);assert.equal(v.parts[0].scar.visible,true);assert.equal(v.parts[0].bar.visible,false);
  const q=bossPartPosition(b,b.parts[1]);assert.ok(Math.abs(v.parts[1].group.position.y+b.y-q.y)<1e-9);
  assert.equal(v.shield.visible,false);assert.ok(v.joints.get('shell_top').o.quaternion.z<0);
  assert.equal(v.beams[0].group.visible,true);assert.equal(v.beams[0].hot.visible,true);assert.equal(v.beams[0].group.position.x,-4.5);assert.equal(v.beams[0].group.position.y,2);
  assert.ok(Math.abs(v.beams[0].zone.scale.x-25)<1e-9);v.dispose();assert.equal(world.children.length,0);
});
test('長時間の更新で資源が増えず、個体破棄は共有GLB素材・形状を解放しない',()=>{
  for(let stage=0;stage<8;stage++){
    const b=createBoss(stage,1),world=new THREE.Group(),t=template(b);let sharedDisposed=0;t.geometry.addEventListener('dispose',()=>sharedDisposed++);t.material.addEventListener('dispose',()=>sharedDisposed++);
    const v=new BossVisuals(world,t.model,b),count=v.resources.size;let disposed=0;for(const r of v.resources)r.addEventListener('dispose',()=>disposed++);
    for(let i=0;i<2400;i++){b.age=i/60;b.open=i%100>50;b.openness=b.open?1:0;v.update(b,1/60);}
    assert.equal(v.resources.size,count);assert.equal(v.beams.length,6);assert.equal(v.materialCopies.size,1);
    v.dispose();assert.equal(disposed,count);assert.equal(sharedDisposed,0);assert.equal(world.children.length,0);t.geometry.dispose();t.material.dispose();
  }
});
