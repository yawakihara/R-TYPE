import * as THREE from 'three';
import {clamp} from './core.js';

const vertexShader=`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const plasmaShader=`
  varying vec2 vUv;uniform float time,energy,fade;
  void main(){
    float u=vUv.x;float y=(vUv.y-.5)*2.;
    float tail=smoothstep(0.,.32,u)*(1.-smoothstep(.87,1.,u));
    float head=exp(-pow((u-.82)*9.,2.));
    float width=.025+.065*u+.055*head;
    float core=exp(-pow(y/width,2.))*tail;
    float haze=exp(-y*y*3.8)*tail;
    float twist=sin(u*29.-time*27.)*(.52-.28*u);
    float strands=exp(-abs(y-twist)*95.)+exp(-abs(y+twist)*95.);
    float turbulence=.65+.35*sin(u*61.-time*49.+sin(y*24.+time*8.)*2.);
    float sheath=exp(-pow((abs(y)-.22-.08*sin(u*24.-time*15.))*9.,2.))*tail;
    vec3 blue=vec3(.015,.16,1.6),cyan=vec3(.025,1.15,1.9),white=vec3(1.45,2.3,2.8);
    vec3 rgb=blue*haze*.65+cyan*(sheath*.8+strands*tail*.85)+white*core*(.8+.3*energy);
    rgb+=vec3(.4,.12,.8)*sheath*turbulence*.23;
    float alpha=clamp(core+haze*.33+sheath*.45+strands*tail*.52,0.,1.)*fade;
    gl_FragColor=vec4(rgb,alpha);
  }`;
const flareShader=`
  varying vec2 vUv;uniform float time,energy,fade;
  void main(){
    vec2 p=(vUv-.5)*2.;float r=length(p);
    float hot=exp(-r*r*32.);float aura=exp(-r*r*4.6);
    float cross=exp(-abs(p.y)*65.)*exp(-abs(p.x)*1.8)+exp(-abs(p.x)*90.)*exp(-abs(p.y)*5.);
    float ray=pow(abs(cos(atan(p.y,p.x)*3.+time*2.)),16.)*exp(-r*4.)*.23;
    vec3 rgb=vec3(3.3,4.7,5.4)*hot+vec3(.04,.7,1.65)*(aura*.65+ray)+vec3(.3,1.6,2.5)*cross*.7;
    gl_FragColor=vec4(rgb,clamp(hot+aura*.28+cross*.45+ray,0.,1.)*fade);
  }`;

/** 蓄積から発射まで連続する波動砲専用の描画。物理判定と攻撃力は変更しない。 */
export class WaveEffects {
  /** @param {THREE.Object3D} parent プレイ空間の親オブジェクト */
  constructor(parent) {
    this.root=new THREE.Group();this.root.name='wave-cannon-effects';parent.add(this.root);
    this.clock=0;this.flash=0;this.bolts=new Map();this.pool=[];this.muzzles=[];
    this.plane=new THREE.PlaneGeometry(1,1);this.sphere=new THREE.SphereGeometry(1,20,12);this.ring=new THREE.TorusGeometry(1,.018,6,56);
    this.white=new THREE.MeshBasicMaterial({color:new THREE.Color(3.2,4.5,5),transparent:true,opacity:.9,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false});
    this.charge=new THREE.Group();this.root.add(this.charge);
    this.chargeMaterial=this.shader(flareShader);this.chargeHalo=new THREE.Mesh(this.plane,this.chargeMaterial);this.chargeHalo.scale.set(2.8,2.8,1);this.charge.add(this.chargeHalo);
    this.chargeCore=new THREE.Mesh(this.sphere,this.white);this.charge.add(this.chargeCore);
    this.chargeRings=[];
    for(let i=0;i<3;i++){
      const material=new THREE.MeshBasicMaterial({color:new THREE.Color(.15,.85,1.6),transparent:true,opacity:.6,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false});
      const ring=new THREE.Mesh(this.ring,material);this.charge.add(ring);this.chargeRings.push(ring);
    }
    this.moteGeometry=new THREE.SphereGeometry(.035,6,4);
    this.motes=new THREE.InstancedMesh(this.moteGeometry,new THREE.MeshBasicMaterial({color:new THREE.Color(.35,1.3,2),transparent:true,opacity:.7,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}),48);
    this.motes.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.motes.frustumCulled=false;this.charge.add(this.motes);this.matrixHelper=new THREE.Object3D();
    this.chargeLight=new THREE.PointLight(0x4ebfff,0,7,2);this.charge.add(this.chargeLight);
    this.flashLight=new THREE.PointLight(0x6edcff,0,15,2);this.root.add(this.flashLight);
    for(let i=0;i<4;i++){
      const group=new THREE.Group(),material=this.shader(flareShader),flare=new THREE.Mesh(this.plane,material);
      group.visible=false;group.add(flare);const rings=[];
      for(let j=0;j<2;j++){const r=new THREE.Mesh(this.ring,new THREE.MeshBasicMaterial({color:new THREE.Color(.22,1.2,2.1),transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));group.add(r);rings.push(r);}
      this.root.add(group);this.muzzles.push({group,flare,material,rings,age:99,power:2});
    }
  }
  /** 加算合成シェーダーを作る。@param {string} fragmentShader フラグメント処理 @returns {THREE.ShaderMaterial} 波動砲専用材質 */
  shader(fragmentShader) {
    return new THREE.ShaderMaterial({vertexShader,fragmentShader,uniforms:{time:{value:0},energy:{value:1},fade:{value:1}},transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false,side:THREE.DoubleSide});
  }
  /** 飛翔するプラズマ弾を上限8個のプールから取得する。@returns {THREE.Group|null} 描画オブジェクト */
  acquireBolt() {
    let group=this.pool.find(g=>!g.userData.active);
    if(!group&&this.pool.length<8){
      group=new THREE.Group();const material=this.shader(plasmaShader),body=new THREE.Mesh(this.plane,material),volume=new THREE.Mesh(this.plane,material);
      volume.rotation.x=.55;volume.position.z=-.08;group.add(body,volume);
      const core=new THREE.Mesh(this.sphere,this.white);core.scale.set(.55,.19,.19);group.add(core);
      const rings=[];
      for(let i=0;i<3;i++){const ring=new THREE.Mesh(this.ring,new THREE.MeshBasicMaterial({color:new THREE.Color(.1,.95,1.6),transparent:true,opacity:.4,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));group.add(ring);rings.push(ring);}
      group.userData={material,body,volume,core,rings,active:false};this.root.add(group);this.pool.push(group);
    }
    if(group){group.userData.active=true;group.visible=true;}return group||null;
  }
  /** 発射口の閃光と膨張する余波を開始する。@param {object} event 発射位置と溜め段階 */
  fire(event) {
    const slot=this.muzzles.reduce((old,item)=>item.age>old.age?item:old,this.muzzles[0]);
    slot.age=0;slot.power=event.power||2;slot.group.position.set(event.x+1,event.y,1.6);slot.group.visible=true;
    this.flash=Math.max(this.flash,.65+slot.power*.18);this.flashLight.position.copy(slot.group.position);
  }
  /** 溜め・発射の残りを消し、プールを再利用可能にする。 */
  reset() {
    this.charge.visible=false;this.chargeLight.intensity=0;this.flash=0;this.flashLight.intensity=0;
    for(const group of this.pool){group.visible=false;group.userData.active=false;}
    this.bolts.clear();for(const slot of this.muzzles){slot.age=99;slot.group.visible=false;}
  }
  /** 蓄積量に応じて収束する粒子、回転する電場、発光を更新する。@param {object} player 自機状態 @param {boolean} active 溜め操作中か */
  updateCharge(player,active) {
    const q=player.charge||0;this.charge.visible=active&&q>.025;
    if(!this.charge.visible){this.chargeLight.intensity=0;return;}
    this.charge.position.set(player.x+1,player.y,1.25);
    const pulse=q>.98?1+Math.sin(this.clock*32)*.06:1;
    this.chargeCore.scale.setScalar((.05+q*.25)*pulse);
    this.chargeHalo.scale.setScalar(.55+q*2.7);
    this.chargeMaterial.uniforms.time.value=this.clock;this.chargeMaterial.uniforms.energy.value=q;this.chargeMaterial.uniforms.fade.value=.3+q*.65;
    this.chargeLight.intensity=q*q*8;
    this.chargeRings.forEach((ring,i)=>{
      ring.rotation.set(Math.PI*.2+Math.sin(this.clock*1.7+i)*.55,this.clock*(i%2?2:-2)+i,Math.sin(this.clock*1.2+i)*.5);
      ring.scale.setScalar((.85-q*.42+i*.11)*pulse);ring.material.opacity=(.18+q*.5)*(i===2?.6:1);
      ring.material.color.setRGB(.08+q*.25,.5+q*.65,1.2+q*.7);
    });
    const count=12+Math.floor(q*36);this.motes.count=count;
    for(let i=0;i<count;i++){
      const phase=(i*.6180339+this.clock*(.35+q*.4))%1,angle=i*2.39996+this.clock*(1+q*2),radius=(1-phase)*(.65+q*.9),o=this.matrixHelper;
      o.position.set(Math.cos(angle)*radius,Math.sin(angle)*radius,Math.sin(angle*1.7)*radius*.35);o.scale.setScalar(.2+phase*1.5);o.updateMatrix();this.motes.setMatrixAt(i,o.matrix);
    }
    this.motes.instanceMatrix.needsUpdate=true;
  }
  /** 本体の波動弾に追従し、白い核・青いプラズマ・螺旋・残光を描く。@param {Game|null} game 本体状態 @param {number} dt 経過秒 */
  update(game,dt) {
    if(!game){this.root.visible=false;this.reset();return;}
    this.root.visible=true;if(!game.paused)this.clock+=dt;
    this.updateCharge(game.player,game.mode==='playing'&&!game.paused&&game.player.fireWas);
    const live=new Set();
    if(game.mode==='playing')for(const shot of game.shots){
      if(shot.type!=='wave')continue;live.add(shot.id);
      let group=this.bolts.get(shot.id);if(!group){group=this.acquireBolt();if(!group)continue;this.bolts.set(shot.id,group);}
      const e=clamp(shot.power/2,.25,1),length=3.5+e*2.8,height=.65+e*.65,data=group.userData;
      group.position.set(shot.x,shot.y,1.4);data.material.uniforms.time.value=this.clock;data.material.uniforms.energy.value=e;data.material.uniforms.fade.value=clamp((shot.life-shot.age)*6,0,1);
      for(const plane of [data.body,data.volume]){plane.scale.set(length,height,1);plane.position.x=-length*.32;}
      data.core.scale.set(.32+e*.32,.12+e*.1,.12+e*.1);
      data.rings.forEach((ring,i)=>{const phase=(shot.age*2.9+i*.29)%1;ring.position.set(-.4-phase*2.5,0,0);ring.rotation.set(.15,1.0+Math.sin(this.clock*4+i)*.12,this.clock*.5);ring.scale.setScalar((.25+e*.35)*(1+phase*.4));ring.material.opacity=(1-phase)*.4;});
    }
    for(const [id,group]of this.bolts)if(!live.has(id)){group.visible=false;group.userData.active=false;this.bolts.delete(id);}
    this.flash=Math.max(0,this.flash-dt*5);this.flashLight.intensity=this.flash*this.flash*65;
    for(const slot of this.muzzles){
      slot.age+=dt;slot.group.visible=slot.age<.65;if(!slot.group.visible)continue;
      const energy=clamp(slot.power/2,.25,1),fade=Math.exp(-slot.age*13);
      slot.flare.scale.set((3.8+energy*4.2)*(1+slot.age),2.1+energy*2.7,1);slot.material.uniforms.fade.value=fade;slot.material.uniforms.time.value=this.clock;
      slot.rings.forEach((ring,i)=>{const age=Math.max(0,slot.age-i*.035),radius=.12+age*(5+energy*3);ring.rotation.set(0,i===0?1.05:0,slot.age*.4);ring.scale.setScalar(radius);ring.material.opacity=Math.exp(-age*7)*(i===0?.9:.35);});
    }
  }
}
