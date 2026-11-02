import * as THREE from 'three';
import {BOSS_PROFILES,bossPartPosition} from './bosses.js';

const Z=new THREE.Vector3(0,0,1),rotation=new THREE.Quaternion();
const flashColor=new THREE.Color(0xfff0d5);
const beamVertex='varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}';
const beamFragment=`varying vec2 vUv;uniform float time;uniform vec3 tint;
  void main(){float y=abs(vUv.y-.5)*2.;float envelope=pow(max(0.,1.-y*y),2.2);
    float ribbons=pow(.5+.5*sin(vUv.x*92.-time*37.+sin(vUv.x*27.+time*6.)*2.+vUv.y*16.),5.);
    float flow=.75+.18*sin(vUv.x*130.-time*52.)+.14*ribbons;
    float filament=pow(max(0.,1.-y),9.);vec3 c=tint*(.85+ribbons*.65)+vec3(1.8,2.,2.2)*filament;
    gl_FragColor=vec4(c,envelope*flow);}`;

/** 専用Blenderモデルの関節・破壊部位・核・予告攻撃をゲーム状態に合わせて描く。 */
export class BossVisuals{
  /** @param {THREE.Group} world 描画先 @param {THREE.Object3D} model 複製済み専用モデル @param {object} boss ボス状態 */
  constructor(world,model,boss){
    this.world=world;this.model=model;this.stage=boss.stage;this.profile=BOSS_PROFILES[this.stage];
    this.resources=new Set();this.joints=new Map();this.materialCopies=new Map();this.rotorAngle=0;
    this.group=new THREE.Group();this.group.name='boss-encounter-'+boss.type;this.group.add(model);world.add(this.group);
    model.traverse(o=>{
      const split=o.name.indexOf('__');
      if(split>=0){this.joints.set(o.name.slice(split+2),{o,position:o.position.clone(),quaternion:o.quaternion.clone(),scale:o.scale.clone()});}
      if(o.isMesh){
        const copy=m=>{
          if(!this.materialCopies.has(m)){
            const own=this.own(m.clone());own.userData.bossBase={color:own.color?.clone(),emissive:own.emissive?.clone(),intensity:own.emissiveIntensity||0};this.materialCopies.set(m,own);
          }
          return this.materialCopies.get(m);
        };
        o.material=Array.isArray(o.material)?o.material.map(copy):copy(o.material);
      }
    });
    this.sphere=this.own(new THREE.SphereGeometry(1,24,16));this.box=this.own(new THREE.BoxGeometry(1,1,1));
    this.ringGeometry=this.own(new THREE.TorusGeometry(1,.027,6,64));this.plane=this.own(new THREE.PlaneGeometry(1,1));
    this.makeCore(boss);this.makeParts(boss);this.makeBeams();
    this.update(boss,0);
  }
  /** 所有するGPU資源を登録する。共有モデルのジオメトリー・画像は登録しない。 */
  own(resource){this.resources.add(resource);return resource;}
  /** 発光素材を作る。@param {number} color 色 @param {number} opacity 不透明度 */
  glow(color,opacity=1){return this.own(new THREE.MeshBasicMaterial({color:new THREE.Color(color).multiplyScalar(1.5),transparent:opacity<1,opacity,depthWrite:opacity>=1,blending:opacity<1?THREE.AdditiveBlending:THREE.NormalBlending,toneMapped:false}));}
  /** 部位の装甲・黒い破断面に使うPBR材質。 */
  metal(color,roughness=.4){return this.own(new THREE.MeshStandardMaterial({color,metalness:.78,roughness}));}
  /** エネルギー核と、防御中だけ現れるシールド膜を作る。 */
  makeCore(b){
    this.coreGroup=new THREE.Group();this.coreGroup.position.set(b.weakX,b.weakY,1.5);this.group.add(this.coreGroup);
    this.coreMaterial=this.own(new THREE.MeshStandardMaterial({color:0xffd5a4,emissive:this.profile.color,emissiveIntensity:1.8,metalness:.38,roughness:.2}));
    const pixels=new Uint8Array(128*128*4);
    for(let y=0;y<128;y++)for(let x=0;x<128;x++){const u=x/128*Math.PI*2,v=y/128*Math.PI*2,vein=Math.sin(u*7+Math.sin(v*5)*1.5)+Math.cos(v*7+Math.sin(u*3)*2),light=60+195*Math.exp(-Math.abs(vein)*3),k=(y*128+x)*4;pixels.set([light,light,light,255],k);}
    const texture=this.own(new THREE.DataTexture(pixels,128,128));texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.magFilter=THREE.LinearFilter;texture.minFilter=THREE.LinearFilter;texture.needsUpdate=true;this.coreMaterial.emissiveMap=texture;
    this.core=new THREE.Mesh(this.sphere,this.coreMaterial);this.core.scale.set(.62,.71,.48);this.coreGroup.add(this.core);
    const coil=new THREE.Mesh(this.own(new THREE.TorusKnotGeometry(.43,.07,80,8,2,3)),this.metal(this.stage%2?0x53415c:0x445c66));this.coreGroup.add(coil);this.coil=coil;
    this.coreRings=[];
    for(let i=0;i<2;i++){
      const ring=new THREE.Mesh(this.ringGeometry,this.glow(this.profile.color,.65));ring.scale.setScalar(.85+i*.18);ring.rotation.x=i*.38;this.coreGroup.add(ring);this.coreRings.push(ring);
    }
    this.shield=new THREE.Mesh(this.sphere,this.own(new THREE.MeshPhysicalMaterial({color:this.profile.color,emissive:this.profile.color,emissiveIntensity:.5,metalness:.3,roughness:.2,transparent:true,opacity:.17,depthWrite:false,side:THREE.FrontSide})));
    this.shield.scale.set(1.08,1.18,.38);this.shield.position.z=.25;this.coreGroup.add(this.shield);
    if(this.stage===5){
      const material=this.own(new THREE.MeshBasicMaterial({color:0x91aaff,transparent:true,opacity:.08,wireframe:true,depthWrite:false,blending:THREE.AdditiveBlending}));
      this.neuralShield=new THREE.Mesh(this.own(new THREE.IcosahedronGeometry(1,2)),material);this.neuralShield.scale.set(2.8,3.15,1.7);this.neuralShield.position.set(.15,0,.5);this.group.add(this.neuralShield);
    }
    this.coreLight=new THREE.PointLight(this.profile.color,14,7,2);this.coreLight.position.z=2;this.coreGroup.add(this.coreLight);
    const toothGeometry=this.own(new THREE.ConeGeometry(.13,.34,5)),toothMaterial=this.metal(0x687077);
    for(let i=0;i<8;i++){const a=i*Math.PI/4,m=new THREE.Mesh(toothGeometry,toothMaterial);m.position.set(Math.cos(a)*.96,Math.sin(a)*.96,.08);m.rotation.z=a-Math.PI/2;this.coreGroup.add(m);}
  }
  /** 破壊できる部位を、弱点の発光部・耐久バー・破断面で示す。 */
  makeParts(b){
    this.parts=[];
    const plateMaterial=this.metal(0x131c24),scarMaterial=this.metal(0x08090b,.98);
    const barMaterial=this.glow(0x85dfed),darkMaterial=this.glow(0x1a2730);
    for(const p of b.parts){
      const group=new THREE.Group();this.group.add(group);
      const socket=new THREE.Mesh(this.sphere,plateMaterial);socket.scale.set(.51,.55,.28);group.add(socket);
      const material=this.own(new THREE.MeshStandardMaterial({color:0xd8d7ac,emissive:this.profile.color,emissiveIntensity:1.2,metalness:.4,roughness:.26}));
      const target=new THREE.Mesh(this.sphere,material);target.scale.set(.27,.31,.2);target.position.z=.24;group.add(target);
      const ring=new THREE.Mesh(this.ringGeometry,this.glow(this.profile.color,.8));ring.scale.setScalar(.4);ring.position.z=.32;group.add(ring);
      const background=new THREE.Mesh(this.box,darkMaterial);background.position.set(0,-.7,.31);background.scale.set(.86,.05,.02);group.add(background);
      const bar=new THREE.Mesh(this.box,barMaterial);bar.position.set(0,-.7,.33);bar.scale.set(.86,.05,.02);group.add(bar);
      const scar=new THREE.Mesh(this.sphere,scarMaterial);scar.scale.set(.36,.4,.2);scar.position.z=.27;scar.visible=false;group.add(scar);
      this.parts.push({group,target,ring,bar,background,scar,material,id:p.id});
    }
  }
  /** 最大6本の予告帯・発射光を確保する。毎フレーム新しい素材を作らない。 */
  makeBeams(){
    this.beams=[];
    for(let i=0;i<6;i++){
      const group=new THREE.Group();this.world.add(group);group.visible=false;
      const zone=new THREE.Mesh(this.plane,this.glow(0xff6946,.1)),line=new THREE.Mesh(this.plane,this.glow(0xff9c69,.7));
      const material=this.own(new THREE.ShaderMaterial({uniforms:{time:{value:0},tint:{value:new THREE.Color(this.stage===6?0x72f1dc:this.stage===2?0x71caff:0xff7b36)}},vertexShader:beamVertex,fragmentShader:beamFragment,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false}));
      const hot=new THREE.Mesh(this.plane,material);
      group.add(zone,line,hot);this.beams.push({group,zone,line,hot});
    }
    this.lunge=new THREE.Mesh(this.box,this.glow(0xffa065,.1));this.world.add(this.lunge);this.lunge.visible=false;
  }
  /** Blender関節を基準姿勢から移動する。@param {string} name 接尾名 @param {number} angle Z軸角度 @param {number} dy 縦移動 */
  joint(name,angle=0,dy=0){
    const j=this.joints.get(name);if(!j)return;
    j.o.position.copy(j.position);j.o.position.y+=dy;
    rotation.setFromAxisAngle(Z,angle);j.o.quaternion.copy(j.quaternion).premultiply(rotation);
  }
  /** 閉鎖・突進・冷却・再生などを各モデルの専用関節へ反映する。 */
  animate(b,dt){
    const t=b.age,o=b.openness,warn=['bite-warn','sweep-warn'].includes(b.state);
    this.model.rotation.y=Math.sin(t*.6)*.025;
    if(this.stage===0||this.stage===2){this.joint('shell_top',-o*.65,o*.4);this.joint('shell_bottom',o*.65,-o*.4);}
    if(this.stage===1||this.stage===4){
      const gape=warn?.9:b.state==='bite'||b.state==='sweep'?.1:o;
      this.joint('jaw_top',-gape*.47,gape*.2);this.joint('jaw_bottom',gape*.58,-gape*.24);
    }
    if(this.stage===3){this.joint('shell_top',-o*.17,o*1.15);this.joint('shell_bottom',o*.17,-o*1.15);}
    if(this.stage===5)for(let i=0;i<7;i++)this.joint('tentacle_'+i,Math.sin(t*1.45+i*.83)*(.08+o*.06));
    if(this.stage===6){this.rotorAngle+=dt*(1-o)*(b.phase?1.5:.9);this.joint('rotor',this.rotorAngle);}
    if(this.stage===7){
      const beat=Math.pow(Math.max(0,Math.sin(t*(b.phase?6.8:5.1))),6);
      this.model.scale.setScalar(1+beat*.025);this.joint('shell_top',-o*.48,o*.64);this.joint('shell_bottom',o*.48,-o*.64);
      this.core.scale.set(.62*(1+beat*.17),.71*(1+beat*.11),.48);
    }
    if(this.stage===0||this.stage===2||this.stage===3){
      this.joint('cannon_top',Math.sin(t*.75)*.06);this.joint('cannon_bottom',-Math.sin(t*.75)*.06);
    }
    if(this.stage===2)this.joint('main_cannon',b.aimAngle||0);
  }
  /** ゲーム状態を一度だけ反映する。@param {object} b ボス @param {number} dt 経過秒 */
  update(b,dt){
    this.group.position.set(b.x,b.y,-.1);this.animate(b,dt);
    const pulse=1+Math.sin(b.age*7)*.04;if(this.stage!==7)this.core.scale.set(.62*pulse,.71*pulse,.48);
    this.coreMaterial.emissiveIntensity=b.flash>0?6:b.open?1.8:.35;this.core.rotation.y=b.age*.25;
    this.coreLight.intensity=b.flash>0?30:b.open?18:3;
    this.coil.rotation.set(b.age*.45,b.age*.31,b.age*.2);
    this.coreRings.forEach((m,i)=>{m.rotation.y=b.age*(i?-.5:.4);m.rotation.z=b.age*(i?.3:-.6);m.material.opacity=b.open?.8:.23;});
    this.shield.visible=!b.open;this.shield.material.opacity=.13+Math.sin(b.age*5)*.035;
    if(this.neuralShield){this.neuralShield.visible=!b.open;this.neuralShield.rotation.y=Math.sin(b.age*.3)*.15;}
    for(const m of this.materialCopies.values()){
      const base=m.userData.bossBase;
      if(base.color)m.color.copy(base.color).lerp(flashColor,b.flash>0?.5:0);
      if(base.emissive){m.emissive.copy(base.emissive);m.emissiveIntensity=base.intensity*(b.phase?1.4:1)+(b.flash>0?.4:0);}
    }
    for(let i=0;i<this.parts.length;i++){
      const v=this.parts[i],p=b.parts[i],q=bossPartPosition(b,p),alive=p.hp>0,fraction=Math.max(0,p.hp/p.maxHp);
      v.group.position.set(q.x-b.x,q.y-b.y,2.0);v.target.visible=alive;v.ring.visible=alive;v.bar.visible=alive;v.background.visible=alive;v.scar.visible=!alive;
      v.material.emissiveIntensity=.85+Math.sin(b.age*5+i)*.25+(fraction<.3?.8:0);v.ring.rotation.z=b.age*.6;
      v.bar.scale.x=.86*fraction;v.bar.position.x=-.43*(1-fraction);
      const modelPart=this.joints.get('part_'+p.id);if(modelPart){modelPart.o.visible=alive;if(b.stage===5)modelPart.o.position.y=modelPart.position.y+(q.y-b.y-p.oy);}
      if(['top','bottom'].includes(p.id)&&[0,2,3].includes(this.stage)){const cannon=this.joints.get('cannon_'+p.id);if(cannon)cannon.o.visible=alive;}
    }
    this.beams.forEach((v,i)=>{
      const h=b.hazards[i];v.group.visible=!!h;if(!h)return;
      const dx=h.x2-h.x1,dy=h.y2-h.y1,length=Math.hypot(dx,dy),active=h.age>=h.warn;
      v.line.material.color.set(active?(this.stage===6?0x72f1dc:this.stage===2?0x8fd5ff:0xff8b45):0xff9c69).multiplyScalar(1.5);
      v.group.position.set((h.x1+h.x2)/2,(h.y1+h.y2)/2,2.5);v.group.rotation.z=Math.atan2(dy,dx);
      v.zone.scale.set(length,h.r*2,.025);v.zone.material.opacity=active?.32:.06+Math.sin(b.age*14)*.025;
      v.line.scale.set(length,.026,.04);v.line.material.opacity=.5+Math.sin(b.age*18)*.25;v.line.visible=!active;
      v.hot.scale.set(length,h.r*2.8,.05);v.hot.visible=active;v.hot.material.uniforms.time.value=b.age;
    });
    this.lunge.visible=['bite-warn','sweep-warn'].includes(b.state);
    if(this.lunge.visible){const width=b.stage===1?19:12;this.lunge.position.set(b.x-width/2,b.targetY,1.2);this.lunge.scale.set(width,1.6,.025);this.lunge.material.opacity=.07+Math.sin(b.age*18)*.035;}
  }
  /** 個体専用の資源を解放し、GLBテンプレートの共有資源を保持する。 */
  dispose(){
    this.world.remove(this.group,this.lunge);for(const b of this.beams)this.world.remove(b.group);
    for(const resource of this.resources)resource.dispose();this.resources.clear();this.materialCopies.clear();this.joints.clear();
  }
}
