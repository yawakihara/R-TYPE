import * as THREE from 'three';
import {clamp} from './core.js';

const vertexShader=`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const noiseShader=`
  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+1.),f.x),f.y);}
  float fbm(vec2 p){return noise(p)*.57+noise(p*2.1+3.7)*.28+noise(p*4.3+8.2)*.15;}
`;
const fireShader=`
  varying vec2 vUv;uniform float age,seed;${noiseShader}
  void main(){
    vec2 p=(vUv-.5)*2.;float r=length(p*vec2(.94,1.05));
    float n=fbm(p*3.4-vec2(age*.8,age*3.3)+seed);
    float edge=1.-smoothstep(.43,.94,r+(n-.5)*.37);
    float heat=clamp((1.-r*.78)*(.72+n*.42)-age*.7,0.,1.);
    vec3 red=vec3(.65,.055,.004),orange=vec3(2.8,.5,.018),yellow=vec3(4.1,2.1,.25);
    vec3 rgb=mix(red,orange,smoothstep(.17,.68,heat));rgb=mix(rgb,yellow,smoothstep(.68,.98,heat));
    float flash=exp(-age*32.)*(1.-smoothstep(.03,.65,r));rgb+=vec3(4.,4.7,3.5)*flash;
    float fade=1.-smoothstep(.32,.83,age);
    gl_FragColor=vec4(rgb,edge*fade*.86);
  }`;
const smokeShader=`
  varying vec2 vUv;uniform float age,seed;${noiseShader}
  void main(){
    vec2 p=(vUv-.5)*2.;float n=fbm(p*3.2-vec2(age*.12,age*.65)+seed);
    float shape=1.-smoothstep(.45,.98,length(p)+(n-.5)*.45);
    float opacity=smoothstep(.08,.32,age)*(1.-smoothstep(.55,1.75,age));
    vec3 shade=mix(vec3(.035,.04,.045),vec3(.19,.20,.21),n);
    shade+=vec3(.22,.065,.008)*exp(-age*4.5)*(1.-length(p)*.6);
    gl_FragColor=vec4(shade,shape*opacity*.72);
  }`;
const impactShader=`
  varying vec2 vUv;uniform float age;uniform vec3 tint;
  void main(){
    vec2 p=(vUv-.5)*2.;float r=length(p),a=atan(p.y,p.x);
    float core=exp(-r*r*43.);float rays=pow(abs(cos(a*3.+.35)),18.)*exp(-r*3.6);
    float glow=exp(-r*r*5.);float fade=exp(-age*19.);
    gl_FragColor=vec4(vec3(3.3,2.7,1.6)*core+tint*(rays+glow*.45),clamp(core+rays+glow*.3,0.,1.)*fade);
  }`;

/** 命中の閃光と、敵が消えた後まで残る爆炎・煙・装甲片を描く。 */
export class CombatEffects {
  /** @param {THREE.Object3D} parent プレイ空間の親 */
  constructor(parent) {
    this.root=new THREE.Group();this.root.name='combat-effects';parent.add(this.root);
    this.clock=0;this.blasts=[];this.impacts=[];this.fragments=[];this.hitFlashes=new Map();
    this.plane=new THREE.PlaneGeometry(1,1);this.ring=new THREE.TorusGeometry(1,.018,6,48);
    this.helper=new THREE.Object3D();this.color=new THREE.Color();
    this.fragmentMesh=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(.09,0),new THREE.MeshStandardMaterial({color:0xffffff,metalness:.7,roughness:.4,emissive:0x291002,emissiveIntensity:.6}),768);
    this.fragmentMesh.count=0;this.fragmentMesh.frustumCulled=false;this.fragmentMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.root.add(this.fragmentMesh);
    this.light=new THREE.PointLight(0xff872b,0,12,2);this.root.add(this.light);
  }
  /** 爆炎・煙用の材質。@param {string} fragmentShader GLSL @param {boolean} additive 発光合成 @returns {THREE.ShaderMaterial} 独立した時間パラメーターを持つ材質 */
  material(fragmentShader,additive=true) {
    return new THREE.ShaderMaterial({vertexShader,fragmentShader,uniforms:{age:{value:0},seed:{value:0},tint:{value:new THREE.Color(1.6,.65,.12)}},transparent:true,blending:additive?THREE.AdditiveBlending:THREE.NormalBlending,depthWrite:false,toneMapped:false});
  }
  /** 爆発オブジェクトを最大48個の再利用枠から取得する。@returns {object} 爆炎・煙・衝撃波の組 */
  acquireBlast() {
    let slot=this.blasts.find(s=>!s.active);
    if(!slot&&this.blasts.length<48){
      const group=new THREE.Group(),fireMaterial=this.material(fireShader),smokeMaterial=this.material(smokeShader,false);
      const fire=new THREE.Mesh(this.plane,fireMaterial),smoke=new THREE.Mesh(this.plane,smokeMaterial);
      smoke.position.z=-.08;group.add(smoke,fire);
      const ring=new THREE.Mesh(this.ring,new THREE.MeshBasicMaterial({color:new THREE.Color(1.7,.65,.13),transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));group.add(ring);
      this.root.add(group);slot={group,fire,smoke,ring,fireMaterial,smokeMaterial,active:false,age:0};this.blasts.push(slot);
    }
    return slot||this.blasts.reduce((old,s)=>s.age>old.age?s:old,this.blasts[0]);
  }
  /** 撃破位置へ爆発を生成する。@param {object} event 位置・敵種別・規模 @param {boolean} massive ボスの連鎖爆発 */
  explode(event,massive=false) {
    const size=clamp(event.size||(massive?3.1:.8),.4,4),count=massive?6:1;
    for(let i=0;i<count;i++){
      const slot=this.acquireBlast(),angle=i*2.39996;
      slot.active=true;slot.age=-i*.075;slot.size=i===0?size:size*.46;slot.vx=(event.vx||0)*.36;
      slot.seed=Math.random()*60;slot.group.position.set(event.x+Math.cos(angle)*(i===0?0:size*.72),event.y+Math.sin(angle)*(i===0?0:size*.7),1.5);
      slot.group.visible=i===0;
    }
    const n=massive?85:size>1?22:16;
    for(let i=0;i<n&&this.fragments.length<768;i++){
      const a=Math.random()*Math.PI*2,speed=(1.4+Math.random()*5.2)*Math.sqrt(size);
      this.fragments.push({x:event.x,y:event.y,z:.7,vx:Math.cos(a)*speed+(event.vx||0)*.4,vy:Math.sin(a)*speed,vz:(Math.random()-.5)*3,age:0,life:.65+Math.random()*.9,size:.45+Math.random()*1.2,spin:Math.random()*8+2});
    }
  }
  /** 命中点の火花と、該当する敵だけの白い被弾反応を発生させる。@param {object} event 命中位置・対象ID */
  hit(event) {
    if(Number.isFinite(event.enemyId))this.hitFlashes.set(event.enemyId,this.clock+.15);
    let slot=this.impacts.find(s=>!s.active);
    if(!slot&&this.impacts.length<32){const material=this.material(impactShader),mesh=new THREE.Mesh(this.plane,material);this.root.add(mesh);slot={mesh,material,age:0,active:false};this.impacts.push(slot);}
    if(!slot)slot=this.impacts.reduce((old,s)=>s.age>old.age?s:old,this.impacts[0]);
    slot.age=0;slot.active=true;slot.mesh.visible=true;slot.mesh.position.set(event.x-.18,event.y,1.65);slot.mesh.scale.setScalar(event.weapon==='wave'?1.3:.85);
    slot.material.uniforms.tint.value.set(event.weapon==='wave'||event.weapon==='reflect'?0x65cfff:0xffac45).multiplyScalar(2);
  }
  /** 敵ごとの被弾発光強度。@param {number} id 対象ID @returns {number} 0〜1 */
  flashStrength(id) {return clamp(((this.hitFlashes.get(id)||0)-this.clock)/.15,0,1);}
  /** 残像と発光を取り除き、画面移動後に爆発を持ち越さない。 */
  reset() {
    for(const slot of this.blasts){slot.active=false;slot.group.visible=false;}
    for(const slot of this.impacts){slot.active=false;slot.mesh.visible=false;}
    this.fragments=[];this.fragmentMesh.count=0;this.hitFlashes.clear();this.light.intensity=0;
  }
  /** 敵の削除とは独立して爆発を進める。@param {Game|null} game 本体 @param {number} dt 経過秒 */
  update(game,dt) {
    this.root.visible=!!game;if(!game){this.reset();return;}
    const step=game.paused?0:dt;this.clock+=step;
    let light=0;
    for(const slot of this.blasts){
      if(!slot.active)continue;slot.age+=step;const age=slot.age;
      if(age<0){slot.group.visible=false;continue;}
      if(age>1.85){slot.active=false;slot.group.visible=false;continue;}
      slot.group.visible=true;slot.group.position.x+=slot.vx*step;
      const base=slot.size*2.8,spread=.43+(1-Math.exp(-age*8))*.72;
      slot.fire.scale.setScalar(base*spread);slot.fireMaterial.uniforms.age.value=age;slot.fireMaterial.uniforms.seed.value=slot.seed;
      slot.smoke.scale.setScalar(base*(.55+age*.65));slot.smoke.position.y=age*.4;
      slot.smokeMaterial.uniforms.age.value=age;slot.smokeMaterial.uniforms.seed.value=slot.seed+12;
      slot.ring.scale.setScalar((.18+age*4.2)*slot.size);slot.ring.material.opacity=Math.exp(-age*9)*.85;slot.ring.visible=age<.55;
      const glow=Math.exp(-age*15)*slot.size*36;
      if(glow>light){light=glow;this.light.position.copy(slot.group.position);}
    }
    this.light.intensity=light;
    for(const slot of this.impacts){if(!slot.active)continue;slot.age+=step;slot.material.uniforms.age.value=slot.age;if(slot.age>.22){slot.active=false;slot.mesh.visible=false;}}
    for(const [id,expires]of this.hitFlashes)if(expires<=this.clock)this.hitFlashes.delete(id);
    this.fragments=this.fragments.filter(p=>p.age<p.life);let count=0;
    for(const p of this.fragments){
      p.age+=step;p.x+=p.vx*step;p.y+=p.vy*step;p.z+=p.vz*step;p.vy-=step*2.5;p.vx*=1-step*.6;
      const fade=clamp((p.life-p.age)*3,0,1),heat=Math.exp(-p.age*5);
      this.helper.position.set(p.x,p.y,p.z);this.helper.rotation.set(p.age*p.spin,p.age*p.spin*.8,p.age*p.spin*.6);this.helper.scale.set(p.size*fade,p.size*.42*fade,p.size*.6*fade);this.helper.updateMatrix();this.fragmentMesh.setMatrixAt(count,this.helper.matrix);
      this.color.setRGB(.17+heat*2,.21+heat*.75,.25+heat*.1);this.fragmentMesh.setColorAt(count,this.color);count++;
    }
    this.fragmentMesh.count=count;this.fragmentMesh.instanceMatrix.needsUpdate=true;if(count)this.fragmentMesh.instanceColor.needsUpdate=true;
  }
}
