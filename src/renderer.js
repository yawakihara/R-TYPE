import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {STAGES,WEAPONS,terrainAt,clamp,lerp,rng} from './core.js';
import {WaveEffects} from './wave-effects.js';
import {CombatEffects} from './combat-effects.js';
import {BOSS_PROFILES} from './bosses.js';
import {BossVisuals} from './boss-visuals.js';

const dummy=new THREE.Object3D(),col=new THREE.Color();
const v3=new THREE.Vector3();
const gradeShader={
  uniforms:{tDiffuse:{value:null},time:{value:0},impact:{value:0},drive:{value:0},crt:{value:0}},
  vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:`uniform sampler2D tDiffuse;uniform float time,impact,drive,crt;varying vec2 vUv;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    void main(){vec2 uv=vUv;vec2 c=uv-.5;float dist=length(c);uv+=normalize(c+.001)*sin(dist*36.-time*22.)*impact*.002;
      float ab=.00035+impact*.0015+drive*.0008;vec3 color=vec3(texture2D(tDiffuse,uv+vec2(ab,0.)).r,texture2D(tDiffuse,uv).g,texture2D(tDiffuse,uv-vec2(ab,0.)).b);
      color*=1.-smoothstep(.34,.77,dist)*.34; color+= (hash(uv+fract(time))-.5)*.006;
      color=mix(color,vec3(color.r*.75,color.g*.98,color.b*1.17),drive*.27);
      if(crt>.5){color*=.91+.09*sin(uv.y*950.);color*=vec3(.98,1.,.98);}
      gl_FragColor=vec4(color,1.);
    }`,
};

/** BlenderのPBR素材とリアルタイム照明・パーティクルを描く3D描画器。 */
export class Renderer {
  constructor(canvas,settings={}) {
    this.canvas=canvas;this.settings=settings;this.time=0;this.stage=-1;this.lastScroll=0;this.shake=0;this.impact=0;this.particles=[];this.enemyMeshes=new Map();this.itemMeshes=new Map();this.quality=settings.quality||'high';
    this.webgl=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});
    this.webgl.info.autoReset=false;this.drawCalls=0;
    const gl=this.webgl.getContext(),debug=gl.getExtension('WEBGL_debug_renderer_info');this.gpu=debug?gl.getParameter(debug.UNMASKED_RENDERER_WEBGL):'WebGL 2';
    this.webgl.setClearColor(0x03070c);this.webgl.toneMapping=THREE.ACESFilmicToneMapping;this.webgl.toneMappingExposure=.94;
    this.scene=new THREE.Scene();this.scene.background=new THREE.Color(0x03070c);this.scene.fog=new THREE.FogExp2(0x08121b,.016);
    this.camera=new THREE.PerspectiveCamera(31.5,16/9,.1,200);this.camera.position.set(0,0,34);this.camera.lookAt(0,0,0);
    this.world=new THREE.Group();this.scene.add(this.world);
    this.ambient=new THREE.HemisphereLight(0xb5d9e7,0x15202a,.8);this.scene.add(this.ambient);
    this.key=new THREE.DirectionalLight(0xf5e5cf,2.3);this.key.position.set(-7,12,17);this.scene.add(this.key);
    this.rim=new THREE.DirectionalLight(0x448cd1,2.1);this.rim.position.set(3,-4,-8);this.scene.add(this.rim);
    this.fill=new THREE.PointLight(0xff6c28,70,32,2);this.fill.position.set(7,3,8);this.scene.add(this.fill);
    const pmrem=new THREE.PMREMGenerator(this.webgl),room=new RoomEnvironment();
    this.env=pmrem.fromScene(room,.06);this.scene.environment=this.env.texture;this.scene.environmentIntensity=.6;room.dispose();pmrem.dispose();
    this.composer=new EffectComposer(this.webgl);this.composer.addPass(new RenderPass(this.scene,this.camera));
    this.bloom=new UnrealBloomPass(new THREE.Vector2(1280,720),.3,.45,3.2);this.composer.addPass(this.bloom);
    this.grade=new ShaderPass(gradeShader);this.composer.addPass(this.grade);this.composer.addPass(new OutputPass());
    this.geometry={sphere:new THREE.SphereGeometry(1,16,12),box:new THREE.BoxGeometry(1,1,1),ico:new THREE.IcosahedronGeometry(1,0),torus:new THREE.TorusGeometry(1,.045,8,48)};
    this.materials={
      steel:new THREE.MeshStandardMaterial({color:0x1d2a33,metalness:.86,roughness:.43}),
      edge:new THREE.MeshStandardMaterial({color:0x49515a,metalness:.84,roughness:.33}),
      dark:new THREE.MeshStandardMaterial({color:0x090e13,metalness:.65,roughness:.5}),
      flesh:new THREE.MeshStandardMaterial({color:0x26121b,metalness:.32,roughness:.4}),
      bone:new THREE.MeshStandardMaterial({color:0x736957,metalness:.37,roughness:.46}),
      glow:new THREE.MeshBasicMaterial({color:0xff5f1c,toneMapped:false}),
      cyan:new THREE.MeshBasicMaterial({color:new THREE.Color(0x29a7e7).multiplyScalar(2),toneMapped:false}),
      distant:new THREE.MeshStandardMaterial({color:0x08141d,metalness:.5,roughness:.75}),
    };
    this.makeSurfaceTextures();
    this.makeStars();this.makeParticleSystem();this.makeProjectiles();this.makeForce();this.waveFX=new WaveEffects(this.world);this.combatFX=new CombatEffects(this.world);
    this.playerGroup=new THREE.Group();this.world.add(this.playerGroup);
    this.heroGroup=new THREE.Group();this.scene.add(this.heroGroup);this.heroAngle=0;
    this.makeExhaust(this.playerGroup);this.makeExhaust(this.heroGroup);
    this.resize();window.addEventListener('resize',()=>this.resize());
    this.contextLost=false;
    canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();this.contextLost=true;window.dispatchEvent(new CustomEvent('renderer-lost'));});
    canvas.addEventListener('webglcontextrestored',()=>location.reload());
  }
  /** Blenderで作成したテンプレートを読み込む。@param {Function} progress 進捗通知 */
  async load(progress=()=>{}) {
    const loader=new GLTFLoader();
    const loaded=[0,0],report=(i,p)=>{loaded[i]=p.total?p.loaded/p.total:.5;progress(loaded[0]*.4+loaded[1]*.6);};
    const [gltf,bosses]=await Promise.all([
      loader.loadAsync(new URL('models/requiem.glb',document.baseURI).href,p=>report(0,p)),
      loader.loadAsync(new URL('models/bosses.glb',document.baseURI).href,p=>report(1,p)),
    ]);
    this.templates={};
    for(const name of ['r9','scout','interceptor','carrier','turret','organism','sentinel','leviathan','dreadnought']) {
      const root=gltf.scene.getObjectByName(name);if(!root)throw new Error('Missing Blender asset: '+name);this.templates[name]=root;
      root.traverse(obj=>{if(obj.isMesh){obj.castShadow=false;obj.receiveShadow=false;obj.frustumCulled=true;}});
    }
    for(const p of BOSS_PROFILES){const name='boss_'+p.id,root=bosses.scene.getObjectByName(name);if(!root)throw new Error('Missing Blender boss: '+name);this.templates[name]=root;}
    this.templates.leviathan.traverse(obj=>{if(obj.isMesh)for(const m of (Array.isArray(obj.material)?obj.material:[obj.material])){
      if(m.name==='Alien muscular tissue')this.materials.flesh.copy(m);
      if(m.name==='Calcified exoskeleton')this.materials.bone.copy(m);
    }});
    this.ship=this.clone('r9');this.ship.scale.setScalar(.49);this.playerGroup.add(this.ship);
    this.hero=this.clone('r9');this.hero.scale.setScalar(2.05);this.heroGroup.add(this.hero);
    this.makeBits();progress(1);
  }
  /** 共有ジオメトリーの3Dモデルを複製する。 */
  clone(name) {const o=this.templates[name].clone(true);o.position.set(0,0,0);return o;}
  /** 画質・ディスプレイに合わせ、描画解像度とカメラの画角を設定する。 */
  resize() {
    const w=window.innerWidth,h=window.innerHeight;
    this.portrait=w/h<1.25;const rh=this.portrait?w*9/16:h;
    this.canvas.style.height=rh+'px';this.canvas.style.top=this.portrait?(h-rh)/2+'px':'0px';
    const cap=this.quality==='ultra'?2560:this.quality==='high'?1920:this.quality==='low'?1000:1440;
    const ratio=Math.min(devicePixelRatio,this.quality==='ultra'?1.7:this.quality==='high'?1.25:this.quality==='low'?.7:1,cap/w);
    this.webgl.setPixelRatio(ratio);this.webgl.setSize(w,rh,false);this.composer.setPixelRatio(ratio);this.composer.setSize(w,rh);
    this.camera.aspect=w/rh;this.camera.fov=this.camera.aspect<16/9?2*Math.atan(17/this.camera.aspect/34)*180/Math.PI:31.5;this.camera.updateProjectionMatrix();
    this.bloom.enabled=this.quality!=='low';
  }
  /** 星と奥行きのある宇宙塵を作る。 */
  makeStars() {
    const random=rng(3456),pos=[],colors=[];
    for(let i=0;i<1600;i++){pos.push((random()-.5)*180,(random()-.5)*90,-10-random()*110);const k=.3+random()*.7;colors.push(k*.75,k*.86,k);}
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
    this.stars=new THREE.Points(g,new THREE.PointsMaterial({size:.1,sizeAttenuation:true,vertexColors:true,transparent:true,opacity:.8,depthWrite:false}));this.scene.add(this.stars);
    const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=512;const ctx=canvas.getContext('2d');
    ctx.fillStyle='#020711';ctx.fillRect(0,0,1024,512);
    for(let i=0;i<35;i++) {
      const x=random()*1024,y=random()*512,r=60+random()*240;
      const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,i%3===0?'rgba(56,39,71,.11)':'rgba(18,73,91,.14)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,1024,512);
    }
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
    this.nebula=new THREE.Mesh(new THREE.PlaneGeometry(190,95),new THREE.MeshBasicMaterial({map:texture,depthWrite:false}));this.nebula.position.z=-100;this.scene.add(this.nebula);
    this.planet=new THREE.Mesh(new THREE.SphereGeometry(11,48,32),new THREE.MeshStandardMaterial({color:0x263549,roughness:.86,metalness:.1}));this.planet.position.set(25,-5,-45);this.scene.add(this.planet);
    const atmosphere=new THREE.Mesh(new THREE.SphereGeometry(11.25,32,24),new THREE.MeshBasicMaterial({color:0x428bba,transparent:true,opacity:.07,side:THREE.BackSide,blending:THREE.AdditiveBlending,depthWrite:false}));this.planet.add(atmosphere);
  }
  /** 装甲の継ぎ目・リベット・擦り傷を持つ繰り返し可能な表面材質を作る。 */
  makeSurfaceTextures() {
    const random=rng(4921),canvas=document.createElement('canvas');canvas.width=1024;canvas.height=1024;const ctx=canvas.getContext('2d');
    ctx.fillStyle='#78858b';ctx.fillRect(0,0,1024,1024);
    for(let y=0;y<1024;y+=128)for(let x=0;x<1024;x+=256){
      const g=Math.floor(98+random()*38);ctx.fillStyle=`rgb(${g},${g+10},${g+15})`;ctx.fillRect(x+3,y+3,250,122);
      ctx.strokeStyle='#2b383f';ctx.lineWidth=3;ctx.strokeRect(x+3,y+3,250,122);ctx.strokeStyle='#bac6c8';ctx.lineWidth=1;ctx.strokeRect(x+6,y+6,244,116);
      for(const dx of [13,241])for(const dy of [13,113]){ctx.fillStyle='#35464f';ctx.beginPath();ctx.arc(x+dx,y+dy,3,0,Math.PI*2);ctx.fill();ctx.fillStyle='#acb5b5';ctx.fillRect(x+dx-1,y+dy-1,2,1);}
      if(random()>.55){ctx.fillStyle='#39474e';for(let i=0;i<8;i++)ctx.fillRect(x+85+i*8,y+45,4,30);}
      if(random()>.75){ctx.fillStyle='#b5a47c';ctx.fillRect(x+20,y+80,30,5);ctx.font='7px monospace';ctx.fillText('R9 / 0'+Math.floor(random()*10),x+20,y+95);}
    }
    for(let i=0;i<1800;i++){const x=random()*1024,y=random()*1024;ctx.strokeStyle=random()>.5?'#ffffff10':'#00000018';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+random()*23,y+random()*4);ctx.stroke();}
    const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;map.wrapS=map.wrapT=THREE.RepeatWrapping;map.repeat.set(2,1);map.anisotropy=4;
    this.materials.steel.map=map;this.materials.steel.color.set(0x516775);this.materials.steel.bumpMap=map;this.materials.steel.bumpScale=.065;
    this.materials.edge.map=map;this.materials.edge.color.set(0x61747c);this.materials.edge.bumpMap=map;this.materials.edge.bumpScale=.035;
  }
  /** 小型メッシュを大量に再利用する粒子プール。 */
  makeParticleSystem() {
    this.particleMesh=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(.08,0),new THREE.MeshBasicMaterial({transparent:true,opacity:.86,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}),1100);
    this.particleMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.particleMesh.frustumCulled=false;this.particleMesh.count=0;this.scene.add(this.particleMesh);
  }
  /** 敵弾と自弾をインスタンシングで描く。 */
  makeProjectiles() {
    this.projectileMesh=new THREE.InstancedMesh(new THREE.SphereGeometry(1,8,6),new THREE.MeshBasicMaterial({toneMapped:false}),850);
    this.projectileMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.projectileMesh.frustumCulled=false;this.projectileMesh.count=0;this.scene.add(this.projectileMesh);
    this.trailMesh=new THREE.InstancedMesh(new THREE.SphereGeometry(1,8,6),new THREE.MeshBasicMaterial({transparent:true,opacity:.3,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}),850);
    this.trailMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.trailMesh.frustumCulled=false;this.trailMesh.count=0;this.scene.add(this.trailMesh);
  }
  /** フォースを、プラズマ球と回転する三重ジンバルで描く。 */
  makeForce() {
    this.forceGroup=new THREE.Group();this.world.add(this.forceGroup);
    const plasma=new THREE.MeshStandardMaterial({color:0xff6a10,emissive:0xff4c03,emissiveIntensity:2.2,metalness:.5,roughness:.18});
    this.forceCore=new THREE.Mesh(new THREE.SphereGeometry(.44,24,16),plasma);this.forceGroup.add(this.forceCore);
    this.forceRings=[];
    for(let i=0;i<3;i++) {
      const ring=new THREE.Mesh(new THREE.TorusGeometry(.59+i*.04,.04,8,40),this.materials.edge);ring.rotation.set(i*.7,i*1.1,.4);this.forceGroup.add(ring);this.forceRings.push(ring);
      for(let j=0;j<3;j++){const fin=new THREE.Mesh(new THREE.BoxGeometry(.24,.11,.1),this.materials.edge);fin.position.set(Math.cos(j*Math.PI*2/3)*.65,Math.sin(j*Math.PI*2/3)*.65,0);ring.add(fin);}
    }
    const canvas=document.createElement('canvas');canvas.width=128;canvas.height=128;const ctx=canvas.getContext('2d'),g=ctx.createRadialGradient(64,64,0,64,64,64);
    g.addColorStop(0,'rgba(255,149,36,.6)');g.addColorStop(.2,'rgba(255,92,8,.23)');g.addColorStop(1,'rgba(255,52,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,128,128);
    this.glowTexture=new THREE.CanvasTexture(canvas);
    const aura=new THREE.Sprite(new THREE.SpriteMaterial({map:this.glowTexture,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));aura.scale.set(3.5,3.5,1);this.forceGroup.add(aura);
    this.forceLight=new THREE.PointLight(0xff5e15,11,5,2);this.forceGroup.add(this.forceLight);
  }
  /** 推進器の青白い排気を作る。 */
  makeExhaust(group) {
    const main=new THREE.Mesh(new THREE.ConeGeometry(.22,1.7,16),new THREE.MeshBasicMaterial({color:0x32aaf9,transparent:true,opacity:.5,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));
    main.rotation.z=Math.PI/2;main.position.x=-1.5;group.add(main);
    const core=new THREE.Mesh(new THREE.ConeGeometry(.09,1.0,12),new THREE.MeshBasicMaterial({color:new THREE.Color(2,4,6),transparent:true,opacity:.8,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));core.rotation.z=Math.PI/2;core.position.x=-1.15;group.add(core);
    group.userData.exhaust=[main,core];
  }
  /** 上下を防御するビットを作る。 */
  makeBits() {
    this.bits=[];for(let i=0;i<2;i++){
      const g=new THREE.Group(),ball=new THREE.Mesh(new THREE.IcosahedronGeometry(.2,1),this.materials.edge),ring=new THREE.Mesh(new THREE.TorusGeometry(.23,.028,6,24),this.materials.cyan);g.add(ball,ring);this.world.add(g);this.bits.push(g);
    }
  }
  /** ステージ固有の背景、壁面、構造物を組み立てる。 */
  setStage(index) {
    for(const obj of this.obstacleMeshes||[])this.world.remove(obj);
    if(this.scenery){this.scene.remove(this.scenery);this.scenery.traverse(o=>{if(o.userData.ownGeometry)o.geometry.dispose();});}
    this.stage=index;this.lastScroll=-99;
    this.scenery=new THREE.Group();this.scene.add(this.scenery);this.decor=[];this.obstacleMeshes=[];
    const stage=STAGES[index],organic=['organic','neural','heart','bones'].includes(stage.theme),rand=rng(300+index);
    this.scene.background.set(stage.bg);this.scene.fog.color.set(stage.fog);this.rim.color.set(stage.color);this.planet.material.color.set(stage.color).multiplyScalar(.17);
    this.planet.visible=!organic;this.stars.material.opacity=organic?.2:.8;
    this.wallMaterial=organic?this.materials.flesh:this.materials.steel;
    this.wallMeshes=[];
    for(const side of [-1,1]) {
      const g=new THREE.BufferGeometry(),verts=new Float32Array(65*4*3),indices=[];
      for(let i=0;i<64;i++)for(const [a,b,c,d] of [[0,1,5,4],[0,4,6,2],[1,3,7,5]]){const n=i*4;indices.push(n+a,n+b,n+c,n+a,n+c,n+d);}
      g.setAttribute('position',new THREE.BufferAttribute(verts,3));g.setIndex(indices);
      g.setAttribute('uv',new THREE.BufferAttribute(new Float32Array(65*4*2),2));
      const mesh=new THREE.Mesh(g,this.wallMaterial);mesh.userData.ownGeometry=true;mesh.userData.side=side;mesh.frustumCulled=false;this.scenery.add(mesh);this.wallMeshes.push(mesh);
    }
    for(let i=0;i<26;i++) {
      const g=new THREE.Group();g.userData.wx=i*4-50;g.userData.side=i%2?1:-1;g.userData.depth=-3-rand()*4;
      if(organic) {
        for(let j=0;j<3;j++){
          const rib=new THREE.Mesh(new THREE.TorusGeometry(2.2+j*.2,.12,6,28,Math.PI*1.2),stage.theme==='bones'?this.materials.bone:this.materials.edge);rib.rotation.set(.2,Math.PI/2,.0);rib.position.set(j*.24,0,-j*.65);rib.userData.ownGeometry=true;g.add(rib);
        }
        for(let j=0;j<4;j++){
          const bulb=new THREE.Mesh(this.geometry.sphere,this.materials.flesh);bulb.scale.set(.5+rand(),.5+rand(),.5+rand());bulb.position.set(rand()*2-1,rand()*.7,-rand()*2);g.add(bulb);
          const glow=new THREE.Mesh(this.geometry.sphere,new THREE.MeshBasicMaterial({color:stage.theme==='heart'?0xff573b:stage.theme==='neural'?0x6364df:0x3aa575,toneMapped:false}));glow.scale.setScalar(.065);glow.position.copy(bulb.position).add(new THREE.Vector3(.1,.5,.6));g.add(glow);
        }
      } else {
        const brace=new THREE.Mesh(this.geometry.box,this.materials.edge);brace.scale.set(.28,4.8,2.6);brace.rotation.z=(i%2?.18:-.18);g.add(brace);
        for(let j=0;j<3;j++){
          const panel=new THREE.Mesh(this.geometry.box,this.materials.dark);panel.position.set(j*.63-1,.3,-.3);panel.scale.set(.52,2.7,1.5);g.add(panel);
          const strip=new THREE.Mesh(this.geometry.box,j===1?this.materials.glow:this.materials.cyan);strip.position.set(j*.63-1,-1.1,.5);strip.scale.set(.35,.055,.05);g.add(strip);
        }
        const pipe=new THREE.Mesh(new THREE.CylinderGeometry(.12,.12,4,8),this.materials.edge);pipe.rotation.z=Math.PI/2;pipe.position.set(0,.8,1);pipe.userData.ownGeometry=true;g.add(pipe);
      }
      this.scenery.add(g);this.decor.push(g);
    }
    // 奥の構造物はプレイ平面から離し、パララックスで奥行きを見せる。
    for(let i=0;i<16;i++) {
      const frame=new THREE.Group();frame.position.set((rand()-.5)*130,(rand()-.5)*20,-16-rand()*22);
      if(organic) {
        const ring=new THREE.Mesh(new THREE.TorusGeometry(6+rand()*5,.3,8,48),stage.theme==='bones'?this.materials.bone:this.materials.flesh);ring.rotation.y=Math.PI/2;frame.add(ring);ring.userData.ownGeometry=true;
      } else {
        for(let j=0;j<5;j++){const segment=new THREE.Mesh(this.geometry.box,this.materials.distant);segment.position.set(j*3,Math.sin(j)*2,0);segment.rotation.z=.5;segment.scale.set(1.3,12+rand()*7,2);frame.add(segment);}
        const light=new THREE.Mesh(this.geometry.box,this.materials.cyan);light.scale.set(8,.024,.1);light.position.y=-2;frame.add(light);
      }
      frame.rotation.z=(rand()-.5)*.5;frame.userData.wx=frame.position.x;this.scenery.add(frame);this.decor.push(frame);frame.userData.distant=true;
    }
    this.removeBoss();
    this.clearEntities();
  }
  /** メニュー用に遠景の軌道リングを配置する。 */
  makeTitleBackdrop() {
    if(this.titleRing)return;
    const g=new THREE.Group();g.position.set(13,1,-21);g.rotation.set(.35,.8,-.2);this.scene.add(g);this.titleRing=g;
    const r=new THREE.Mesh(new THREE.TorusGeometry(14,.32,12,96),this.materials.steel);g.add(r);
    const inner=new THREE.Mesh(new THREE.TorusGeometry(13.4,.035,6,96),this.materials.cyan);g.add(inner);
    for(let i=0;i<48;i++){
      const a=i*Math.PI*2/48,seg=new THREE.Mesh(this.geometry.box,this.materials.edge);seg.position.set(Math.cos(a)*14,Math.sin(a)*14,0);seg.rotation.z=a;seg.scale.set(.6,1.1,1.9);g.add(seg);
      if(i%3===0){const light=new THREE.Mesh(this.geometry.box,this.materials.glow);light.position.copy(seg.position);light.position.z=1;light.rotation.z=a;light.scale.set(.08,.7,.05);g.add(light);}
    }
  }
  /** 状態を持つ敵・アイテムの描画参照をクリアする。 */
  clearEntities() {for(const o of this.enemyMeshes.values())this.releaseEnemy(o);for(const o of this.itemMeshes.values())this.world.remove(o);this.enemyMeshes.clear();this.itemMeshes.clear();}
  /** 敵の描画と、専用の被弾発光用材質を解放する。@param {THREE.Object3D} object 対象の敵 */
  releaseEnemy(object){this.world.remove(object);object.userData.hitMaterial?.dispose();}
  /** ボスと独立した予兆ビームを同時に片付ける。 */
  removeBoss(){
    if(!this.bossGroup)return;
    this.bossVisuals.dispose();this.bossVisuals=null;this.bossGroup=null;
  }
  /** ボスの装甲、開閉する外殻、独立した砲台を作る。 */
  makeBoss(b) {
    this.removeBoss();
    this.bossVisuals=new BossVisuals(this.world,this.clone('boss_'+b.type),b);
    this.bossGroup=this.bossVisuals.group;this.bossId=b.id;
  }
  /** スパーク・破片を生成する。@param {number} x 横位置 @param {number} y 縦位置 @param {number} count 個数 @param {number} color 色 @param {number} size 規模 */
  burst(x,y,count=18,color=0xffa04e,size=1) {
    const n=this.quality==='low'?Math.ceil(count*.45):count;
    for(let i=0;i<n&&this.particles.length<1100;i++){
      const a=Math.random()*Math.PI*2,v=(1+Math.random()*8)*size;
      this.particles.push({x,y,z:(Math.random()-.5)*.6,vx:Math.cos(a)*v,vy:Math.sin(a)*v,vz:(Math.random()-.5)*v,age:0,life:(.25+Math.random()*.65)*(size>2?1.5:1),scale:.3+Math.random()*1.8,color});
    }
  }
  /** ゲームイベントを画面効果へ変換する。 */
  event(e) {
    if(e.type==='stage'||e.type==='respawn')this.combatFX.reset();
    if(e.type==='explosion'){this.combatFX.explode(e);this.burst(e.x,e.y,32,0xffb15c,e.size||1);this.shake=Math.max(this.shake,.12);}
    if(e.type==='playerDeath'){this.burst(e.x,e.y,110,0x72c8ff,1.8);this.burst(e.x,e.y,80,0xff8b30,2);this.shake=.8;this.impact=1;}
    if(e.type==='bossDeath'){this.combatFX.explode(e,true);this.burst(e.x,e.y,260,0xffb660,3.8);this.burst(e.x-1,e.y,160,0x88caff,2.2);this.shake=1.2;this.impact=1.5;this.removeBoss();}
    if(e.type==='partBreak'){this.combatFX.explode({...e,size:1.5});this.burst(e.x,e.y,70,0xffa03a,1.5);this.shake=.3;}
    if(e.type==='shieldBreak'){this.burst(e.x,e.y,75,0x8baeff,1.5);this.shake=.25;this.impact=.35;}
    if(e.type==='bossPhase'){this.burst(e.x,e.y,60,0xff6852,1.4);this.shake=.3;this.impact=.3;}
    if(e.type==='wave'){this.waveFX.fire(e);this.burst(e.x+1,e.y,48,0x67d4ff,1.1);this.shake=Math.max(this.shake,.16+e.power*.16);this.impact=.35+e.power*.15;}
    if(e.type==='hit'){this.combatFX.hit(e);this.burst(e.x,e.y,8,0xffc77b,.4);}
    if(e.type==='armour')this.burst(e.x,e.y,3,0x9fd7ff,.25);
    if(e.type==='block')this.burst(e.x,e.y,3,0xff913d,.25);
    if(e.type==='pickup')this.burst(this.playerGroup.position.x,this.playerGroup.position.y,40,0x77d5ff,1.1);
    if(e.type==='drive'){this.burst(this.playerGroup.position.x,this.playerGroup.position.y,100,0x63d7ff,2);this.impact=1;}
  }
  /** 進行位置に合わせて壁と遠景を流す。 */
  updateEnvironment(game) {
    if(this.stage!==game.stage)this.setStage(game.stage);
    const scroll=game.scroll;
    if(Math.abs(scroll-this.lastScroll)>.18) {
      for(const mesh of this.wallMeshes) {
        const side=mesh.userData.side,arr=mesh.geometry.attributes.position.array,uv=mesh.geometry.attributes.uv.array;
        for(let i=0;i<65;i++) {
          const x=-29+i*58/64,lim=terrainAt(game.stage,scroll+x),y=side>0?lim.top:lim.bottom;
          const coords=[x,y,1.2,x,y+side*.3,-4.5,x,side*16,1.5,x,side*16,-4.5];
          arr.set(coords,i*12);
          const u=(scroll+x)*.09;uv.set([u,y*.13,u,y*.13+.7,u,side*16*.13,u,side*16*.13+.7],i*8);
        }
        mesh.geometry.attributes.position.needsUpdate=true;mesh.geometry.attributes.uv.needsUpdate=true;mesh.geometry.computeVertexNormals();
      }
      this.lastScroll=scroll;
    }
    for(const obj of this.decor) {
      if(obj.userData.distant){obj.position.x=((obj.userData.wx-scroll*.32+80)%160+160)%160-80;continue;}
      const x=((obj.userData.wx-scroll+52)%104+104)%104-52,lim=terrainAt(game.stage,scroll+x),side=obj.userData.side;
      obj.position.set(x,(side>0?lim.top:lim.bottom)+side*.25,obj.userData.depth);obj.rotation.z=side>0?Math.PI:0;
    }
    if(this.obstacleMeshes.length!==game.obstacles.length) {
      for(const obj of this.obstacleMeshes)this.world.remove(obj);this.obstacleMeshes=[];
      for(const o of game.obstacles) {
        const g=new THREE.Group(),body=new THREE.Mesh(this.geometry.box,this.materials.steel);body.scale.set(o.w,o.h,3.2);g.add(body);
        const border=new THREE.Mesh(this.geometry.box,this.materials.edge);border.scale.set(o.w+.15,.16,3.5);border.position.y=o.y>0?-o.h/2:o.h/2;g.add(border);
        for(let i=0;i<Math.min(12,Math.floor(o.w/.7));i++) {
          const stripe=new THREE.Mesh(this.geometry.box,i%2?this.materials.dark:this.materials.glow);stripe.position.set((i-(Math.min(12,Math.floor(o.w/.7))-1)/2)*.32,o.y>0?-o.h/2+.18:o.h/2-.18,1.64);stripe.scale.set(.22,.24,.04);stripe.rotation.z=-.35;g.add(stripe);
        }
        this.world.add(g);this.obstacleMeshes.push(g);
      }
    }
    this.obstacleMeshes.forEach((obj,i)=>obj.position.set(game.obstacles[i].wx-scroll,game.obstacles[i].y,-.4));
  }
  /** 毎フレームのゲーム状態を3Dオブジェクトへ反映する。 */
  syncGame(game,dt) {
    const p=game.player,f=game.force;
    this.updateEnvironment(game);this.heroGroup.visible=false;this.world.visible=true;if(this.titleRing)this.titleRing.visible=false;
    this.playerGroup.position.set(p.x,p.y,.45);this.playerGroup.visible=game.mode!=='dying'&&game.mode!=='over';
    if(p.invuln>0)this.ship.visible=Math.floor(this.time*18)%3!==0;else this.ship.visible=true;
    this.ship.rotation.set(lerp(this.ship.rotation.x,-p.vy*.028,dt*8),-.06,lerp(this.ship.rotation.z,p.vy*.012,dt*8));
    this.playerGroup.userData.exhaust.forEach((o,i)=>{o.scale.y=.8+Math.sin(this.time*64+i)*.18+(game.driveTime>0?.8:0);});
    this.forceGroup.visible=f.mode!=='none';this.forceGroup.position.set(f.x,f.y,.45);this.forceGroup.scale.setScalar(.8+p.level*.07);
    this.forceRings.forEach((o,i)=>{o.rotation.x+=dt*(i+1)*.7;o.rotation.z+=dt*(i+1);});
    this.bits.forEach((obj,i)=>{obj.visible=p.bits>i;obj.position.set(p.x,p.y+(i===0?1.05:-1.05),.5);obj.rotation.set(this.time,0,this.time*2);});
    const live=new Set();
    for(const e of game.enemies) {
      if(e.dead)continue;
      live.add(e.id);let obj=this.enemyMeshes.get(e.id);
      if(!obj){
        obj=this.clone(e.type);const overlay=obj.clone(true),hitMaterial=new THREE.MeshBasicMaterial({color:0xffe7bd,transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1});
        overlay.traverse(part=>{if(part.isMesh)part.material=hitMaterial;});overlay.scale.setScalar(1.01);overlay.visible=false;obj.add(overlay);obj.userData.hitOverlay=overlay;obj.userData.hitMaterial=hitMaterial;
        obj.scale.setScalar(e.type==='carrier'?.85:e.type==='turret'?.85:.83);this.enemyMeshes.set(e.id,obj);this.world.add(obj);
      }
      obj.position.set(e.x,e.y,.3);
      if(e.type==='turret'){obj.rotation.z=0;obj.scale.y=e.top?-.85:.85;}
      else {obj.rotation.x=Math.sin(e.age*2)*.18;obj.rotation.z=Math.sin(e.age*2)*.07;}
      const flash=this.combatFX.flashStrength(e.id);obj.userData.hitOverlay.visible=flash>0;obj.userData.hitMaterial.opacity=flash*.82;
    }
    for(const [id,obj]of this.enemyMeshes)if(!live.has(id)){this.releaseEnemy(obj);this.enemyMeshes.delete(id);}
    const itemLive=new Set();
    for(const item of game.items) {
      itemLive.add(item.id);let obj=this.itemMeshes.get(item.id);
      if(!obj){
        const g=new THREE.Group();const core=new THREE.Mesh(new THREE.OctahedronGeometry(.34),new THREE.MeshStandardMaterial({color:0xffffff,emissive:WEAPONS[item.type]?.color||0x73d9ba,emissiveIntensity:2.5,metalness:.5,roughness:.2}));const ring=new THREE.Mesh(new THREE.TorusGeometry(.6,.024,6,32),this.materials.edge);g.add(core,ring);
        if(!WEAPONS[item.type]){const c=document.createElement('canvas');c.width=64;c.height=64;const ctx=c.getContext('2d');ctx.font='bold 42px monospace';ctx.textAlign='center';ctx.fillStyle='#e7f8ee';ctx.fillText(item.type==='missile'?'M':item.type==='bit'?'B':'S',32,48);const label=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),depthTest:false}));label.scale.set(.65,.65,1);label.position.set(0,0,1);g.add(label);}
        obj=g;this.itemMeshes.set(item.id,obj);this.world.add(obj);obj.userData.ownGeometry=true;
      }
      obj.position.set(item.x,item.y,.65);obj.rotation.y=this.time*2;obj.rotation.z=this.time*.7;obj.children[0].material.emissive.set(WEAPONS[item.type]?.color||0x73d9ba);
    }
    for(const [id,obj]of this.itemMeshes)if(!itemLive.has(id)){this.world.remove(obj);obj.children[0].geometry.dispose();obj.children[0].material.dispose();obj.children[1].geometry.dispose();this.itemMeshes.delete(id);}
    if(game.boss) {
      const b=game.boss;if(this.bossId!==b.id||!this.bossGroup)this.makeBoss(b);
      this.bossVisuals.update(b,dt);
    } else if(this.bossGroup){this.removeBoss();}
    this.syncProjectiles(game);
    if(this.playerGroup.visible&&Math.random()<.6)this.particles.push({x:p.x-.9,y:p.y,z:.4,vx:-5,vy:0,vz:0,age:0,life:.25,scale:.5,color:0x339eff});
  }
  /** 弾とトレイルの描画行列・色をまとめて転送する。 */
  syncProjectiles(game) {
    let i=0;
    for(const s of [...game.shots,...game.bullets]) {
      if(s.type==='wave')continue;
      if(i>=850)break;
      const enemy=!!s.grazed||s.grazed===false;
      const color=enemy?(s.type==='heavy'?0xff2b76:0xff6839):s.type==='helix'?0xff5f39:s.type==='reflect'?0x3caeff:s.type==='crawler'?0xffb32e:s.type==='missile'?0xffaa52:0x91e1ff;
      dummy.position.set(s.x,s.y,1.05);dummy.rotation.set(0,0,Math.atan2(s.vy||0,s.vx||1));
      dummy.scale.set(enemy?s.r*.8:s.type==='missile'?.31:.32,enemy?s.r*.8:s.r*.65,enemy?s.r*.8:.09);dummy.updateMatrix();this.projectileMesh.setMatrixAt(i,dummy.matrix);this.projectileMesh.setColorAt(i,col.set(color).multiplyScalar(enemy?1.7:2.2));
      dummy.position.x-=enemy?s.vx*.015:s.vx*.019;dummy.position.y-=enemy?s.vy*.015:(s.vy||0)*.019;dummy.scale.multiplyScalar(1.8);if(!enemy)dummy.scale.x*=1.8;dummy.updateMatrix();this.trailMesh.setMatrixAt(i,dummy.matrix);this.trailMesh.setColorAt(i,col.set(color).multiplyScalar(1.1));i++;
    }
    this.projectileMesh.count=i;this.trailMesh.count=i;
    this.projectileMesh.instanceMatrix.needsUpdate=true;this.trailMesh.instanceMatrix.needsUpdate=true;
    if(i){this.projectileMesh.instanceColor.needsUpdate=true;this.trailMesh.instanceColor.needsUpdate=true;}
  }
  /** メニューでは機体を大きく見せる格納庫カメラを使う。 */
  syncTitle(dt,view) {
    this.makeTitleBackdrop();this.world.visible=false;this.heroGroup.visible=true;this.titleRing.visible=true;
    if(this.scenery)this.scenery.visible=false;
    this.projectileMesh.count=0;this.trailMesh.count=0;
    this.scene.background.set(0x03070c);this.scene.fog.color.set(0x08121b);this.planet.visible=true;this.stars.material.opacity=.65;
    const hangar=view==='hangar';this.heroGroup.position.set(hangar?3.8:7.6,hangar?.3:.3+Math.sin(this.time*.35)*.25,hangar?3:1.8);
    this.heroGroup.rotation.set(-.15+Math.sin(this.time*.2)*.045,hangar?this.heroAngle+this.time*.075:-.42+Math.sin(this.time*.17)*.12,-.1+Math.sin(this.time*.23)*.02);
    this.heroGroup.scale.setScalar(hangar?1.3:1.15);
    this.heroGroup.userData.exhaust.forEach((o,i)=>{o.position.x=i===0?-4.5:-4;o.scale.set(3,2.5+Math.sin(this.time*35)*.3,3);});
    this.fill.position.set(9,2,6);this.fill.intensity=30;this.rim.color.set(0x69a9e1);
    this.titleRing.rotation.z+=dt*.004;
  }
  /** 描画フレームを進める。@param {Game|null} game ゲーム状態 @param {number} dt 秒 @param {string} view メニュー種別 */
  render(game,dt,view='title') {
    if(this.contextLost)return;
    this.time+=dt;this.shake=Math.max(0,this.shake-dt*1.9);this.impact=Math.max(0,this.impact-dt*1.6);
    this.stars.rotation.y=Math.sin(this.time*.02)*.03;
    if(game){if(this.scenery)this.scenery.visible=true;this.syncGame(game,dt);this.fill.position.set(game.player.x+3,3,8);this.fill.intensity=35;}
    else this.syncTitle(dt,view);
    this.waveFX.update(game,dt);
    this.combatFX.update(game,dt);
    const shake=this.settings.shake===false?0:this.shake;
    this.camera.position.set((Math.random()-.5)*shake*.35,(Math.random()-.5)*shake*.3,34);
    this.particles=this.particles.filter(p=>p.age<p.life);
    let i=0;
    for(const p of this.particles){p.age+=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.z+=p.vz*dt;p.vx*=1-dt*1.5;p.vy*=1-dt*1.5;dummy.position.set(p.x,p.y,p.z);dummy.rotation.set(p.age*3,p.age*2,0);dummy.scale.setScalar(p.scale*Math.max(0,1-p.age/p.life));dummy.updateMatrix();this.particleMesh.setMatrixAt(i,dummy.matrix);this.particleMesh.setColorAt(i,col.set(p.color).multiplyScalar(2));i++;}
    this.particleMesh.count=i;this.particleMesh.instanceMatrix.needsUpdate=true;if(i)this.particleMesh.instanceColor.needsUpdate=true;
    this.grade.uniforms.time.value=this.time;this.grade.uniforms.impact.value=this.impact;this.grade.uniforms.drive.value=game?.driveTime>0?1:0;this.grade.uniforms.crt.value=this.settings.crt?1:0;
    this.bloom.strength=game?.driveTime>0?.5:.3+this.waveFX.flash*.04;
    this.webgl.info.reset();this.composer.render();this.drawCalls=this.webgl.info.render.calls;
  }
}
