var _t=[{name:"DERELICT GATE",ja:"\u5EC3\u589F\u306E\u5411\u3053\u3046\u3078",theme:"station",boss:"DOORKEEPER",bossJa:"\u88C5\u7532\u6BBB\u30FB\u30C9\u30A2\u30AD\u30FC\u30D1\u30FC",duration:82,color:7519187,fog:463899,bg:133134,track:0,bossType:"sentinel"},{name:"LIVING ABYSS",ja:"\u8108\u6253\u3064\u6DF1\u6DF5",theme:"organic",boss:"GORGON",bossJa:"\u751F\u4F53\u5175\u5668\u30FB\u30B4\u30EB\u30B4\u30F3",duration:88,color:9550979,fog:1120526,bg:330503,track:1,bossType:"leviathan"},{name:"SILENT COLOSSUS",ja:"\u6C88\u9ED9\u306E\u5DE8\u5927\u6226\u8266",theme:"battleship",boss:"COLOSSUS CORE",bossJa:"\u5DE8\u5927\u6226\u8266\u30FB\u4E2D\u67A2\u7089",duration:92,color:10926540,fog:594974,bg:132878,track:2,bossType:"dreadnought"},{name:"IRON CATHEDRAL",ja:"\u9244\u306E\u5927\u8056\u5802",theme:"foundry",boss:"JUDGEMENT",bossJa:"\u6A5F\u52D5\u8981\u585E\u30FB\u30B8\u30E3\u30C3\u30B8\u30E1\u30F3\u30C8",duration:88,color:14984307,fog:1773580,bg:722179,track:3,bossType:"sentinel"},{name:"OSSUARY",ja:"\u661F\u306E\u5893\u6A19",theme:"bones",boss:"OUROBOROS",bossJa:"\u9AA8\u7ADC\u30FB\u30A6\u30ED\u30DC\u30ED\u30B9",duration:90,color:11968969,fog:1379358,bg:459534,track:4,bossType:"serpent"},{name:"NEURAL STORM",ja:"\u8A18\u61B6\u306E\u8FF7\u5BAE",theme:"neural",boss:"MNEMOSYNE",bossJa:"\u795E\u7D4C\u7DB2\u30FB\u30E0\u30CD\u30E2\u30B7\u30E5\u30CD",duration:90,color:8687844,fog:920355,bg:262668,track:5,bossType:"leviathan"},{name:"EVENT HORIZON",ja:"\u9084\u3089\u3056\u308B\u5883\u754C",theme:"citadel",boss:"THE ARBITER",bossJa:"\u6700\u7D42\u9632\u885B\u6A5F\u30FB\u30A2\u30FC\u30D3\u30BF\u30FC",duration:95,color:8509392,fog:530711,bg:133384,track:6,bossType:"sentinel"},{name:"REQUIEM",ja:"\u6700\u5F8C\u306E\u9F13\u52D5",theme:"heart",boss:"ORIGIN",bossJa:"\u59CB\u539F\u6838\u30FB\u30AA\u30EA\u30B8\u30F3",duration:90,color:15113097,fog:2165778,bg:721413,track:7,bossType:"heart"}],bi={red:{name:"HELIX",ja:"\u5BFE\u7A7A\u30EC\u30FC\u30B6\u30FC",color:16736571},blue:{name:"REFLECT",ja:"\u53CD\u5C04\u30EC\u30FC\u30B6\u30FC",color:5425407},yellow:{name:"CRAWLER",ja:"\u5BFE\u5730\u30EC\u30FC\u30B6\u30FC",color:16763986}},Er={cadet:{name:"CADET",ja:"\u8A13\u7DF4\u5175",lives:5,bullet:.73,rate:.85,keep:!0},arcade:{name:"ARCADE",ja:"\u30A2\u30FC\u30B1\u30FC\u30C9",lives:3,bullet:1,rate:1,keep:!1},ace:{name:"ACE",ja:"\u30A8\u30FC\u30B9",lives:3,bullet:1.23,rate:1.2,keep:!1}},Et=(s,e,t)=>Math.max(e,Math.min(t,s)),ui=(s,e,t)=>s+(e-s)*t,Tu=Math.PI*2;function Zn(s=1987){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Kn(s,e){let t=_t[s%8].theme,i=7.9,n=-7.9;if(["organic","neural","heart","bones"].includes(t)){let r=t==="heart"?1.6:t==="bones"?1.1:1.4;i=7.25+Math.sin(e*.075+s)*r+Math.sin(e*.21)*.43,n=-7.25+Math.sin(e*.067+1+s)*r+Math.sin(e*.18)*.48}else{let r=Math.sin(e*.057+s);i=7.7-Math.max(0,r)*1.65,n=-7.7+Math.max(0,Math.sin(e*.065+2))*1.8}return{top:i,bottom:n}}function tp(s){let e=_t[s].theme,t=[];if(e==="battleship"){t.push({wx:138,y:-6.3,w:210,h:4.3,type:"hull"});for(let i=0;i<7;i++)t.push({wx:43+i*25,y:-2.8,w:5,h:3,type:"tower"})}else for(let i=0;i<9;i++){let n=i%2===0;t.push({wx:46+i*24,y:n?6.8:-6.8,w:3.6+i%3,h:3.8+(i+s)%3*.65,type:e==="foundry"?"press":"column"})}return t}var Xa=class{constructor(e={}){this.options={difficulty:"arcade",stage:0,practice:!1,classic:!1,...e},this.diff=Er[this.options.difficulty]||Er.arcade,this.random=Zn(1987+this.options.stage*79),this.stage=this.options.stage,this.score=0,this.kills=0,this.shotsFired=0,this.hits=0,this.deaths=0,this.totalTime=0,this.continues=0,this.lives=this.diff.lives,this.extends=0,this.events=[],this.nextId=1,this.combo=0,this.comboTimer=0,this.bestCombo=0,this.drive=35,this.driveTime=0,this.mode="playing",this.modeTime=0,this.paused=!1,this.debugInvincible=!1,this.startStage(this.stage)}emit(e,t={}){this.events.push({type:e,...t})}drainEvents(){let e=this.events;return this.events=[],e}startStage(e){this.stage=e,this.time=0,this.scroll=0,this.checkpoint=0,this.wave=0,this.turretWave=0,this.nextCarrier=2,this.carrierCount=0,this.enemies=[],this.shots=[],this.bullets=[],this.items=[],this.effects=[],this.boss=null,this.bossDefeated=!1,this.obstacles=tp(e),this.player={x:-9,y:0,vy:0,charge:0,fireWas:!1,cooldown:0,missileCd:0,invuln:3.4,speed:2,maxSpeed:2,weapon:"red",level:0,missiles:0,bits:0},this.force={mode:"none",x:-11,y:0,side:1,level:0,age:0,cooldown:0},this.mode="playing",this.modeTime=0,this.emit("stage",{index:e,name:_t[e].name,ja:_t[e].ja})}nextStage(){if(this.stage>=7){this.mode="victory",this.emit("victory");return}let e={...this.player},t=this.force.mode!=="none";this.startStage(this.stage+1),Object.assign(this.player,{level:e.level,weapon:e.weapon,missiles:e.missiles,bits:e.bits,speed:e.speed,maxSpeed:e.maxSpeed}),t&&Object.assign(this.force,{mode:"front",level:this.player.level,x:this.player.x+1.7,y:0})}respawn(){let e=this.checkpoint,t={...this.player},i=this.force.mode!=="none";this.time=e,this.scroll=e*3.2,this.wave=Math.floor(e/2.85),this.turretWave=Math.floor(e/6.3),this.enemies=[],this.shots=[],this.bullets=[],this.items=[],this.boss=null,this.bossDefeated=!1,this.nextCarrier=e+1.5,this.player={x:-9,y:0,vy:0,charge:0,fireWas:!1,cooldown:0,missileCd:0,invuln:3.6,speed:2,maxSpeed:2,weapon:"red",level:0,missiles:0,bits:0},this.force={mode:"none",x:-10,y:0,side:1,level:0,age:0,cooldown:0},this.diff.keep&&i&&(Object.assign(this.player,{level:Math.max(1,t.level),weapon:t.weapon,bits:t.bits,missiles:t.missiles,maxSpeed:t.maxSpeed,speed:t.speed}),Object.assign(this.force,{mode:"front",level:this.player.level,x:-7.3,y:0})),this.mode="playing",this.modeTime=0,this.driveTime=0,this.emit("respawn")}continueGame(){this.continues++,this.lives=this.diff.lives,this.score=Math.floor(this.score/10)*10+Math.min(9,this.continues),this.respawn()}toggleForce(){let e=this.force;e.mode!=="none"&&(e.mode==="front"||e.mode==="rear"?(e.side=e.mode==="front"?1:-1,e.mode="launch",e.age=0,this.emit("forceLaunch")):(e.mode="return",e.age=0,this.emit("forceRecall")))}activateDrive(){return this.options.classic||this.drive<100||this.driveTime>0||this.mode!=="playing"?!1:(this.drive=0,this.driveTime=4.5,this.player.invuln=Math.max(.8,this.player.invuln),this.emit("drive"),!0)}collect(e){let t=this.player;bi[e]?(t.weapon=e,t.level=Math.min(3,t.level+1),this.force.level=t.level,this.force.mode==="none"&&Object.assign(this.force,{mode:"return",x:17,y:t.y})):e==="speed"?(t.maxSpeed=Math.min(4,t.maxSpeed+1),t.speed=t.maxSpeed):e==="bit"?t.bits=Math.min(2,t.bits+1):e==="missile"&&(t.missiles=Math.min(2,t.missiles+1)),this.addScore(300),this.emit("pickup",{item:e})}addScore(e){this.score+=e;let t=this.extends===0?5e4:15e4*this.extends;this.score>=t&&(this.extends++,this.lives++,this.emit("extend"))}spawn(e,t,i,n={}){let r=e==="carrier"?5:e==="turret"?7:e==="organism"?5:e==="interceptor"?3:2,a={id:this.nextId++,type:e,x:t,y:i,baseY:i,hp:r,maxHp:r,r:e==="carrier"?.65:e==="turret"?.57:.48,age:0,cooldown:1.5+this.random(),vx:-3.1-this.random(),...n};return this.enemies.push(a),a}shoot(e=!1){let t=this.player,i=this.force;if(e){let n=t.charge>=.98?2:t.charge>=.52?1:.5;this.shots.push({id:this.nextId++,type:"wave",x:t.x+1,y:t.y,vx:29,vy:0,age:0,life:1.7,r:.25+n*.22,damage:n===2?24:n===1?12:6,pierce:!0,hit:new Set,power:n}),this.emit("wave",{power:n,x:t.x,y:t.y}),this.shotsFired++;return}if(this.shotsFired++,this.shots.push({id:this.nextId++,type:"shot",x:t.x+.8,y:t.y,vx:31,vy:0,age:0,life:1.5,r:.12,damage:1}),i.mode!=="none"){let n=i.mode==="rear"?-1:1,r=i.x+n*.5,a=i.y;if(i.mode==="front"||i.mode==="rear")for(let o=0;o<Math.max(1,t.level);o++){let l=o-(t.level-1)/2;if(t.weapon==="red"&&this.shots.push({id:this.nextId++,type:"helix",x:r,y:a,baseY:a,vx:n*29,vy:0,age:0,phase:o*Math.PI,amp:.2+o*.13,life:1.6,r:.19,damage:1.2,pierce:!0,hit:new Set}),t.weapon==="blue")for(let c of[-1,1])this.shots.push({id:this.nextId++,type:"reflect",x:r,y:a,vx:n*(20+Math.abs(l)*2),vy:c*(12+l*3),age:0,life:2.2,r:.15,damage:1.1,bounces:0});if(t.weapon==="yellow")for(let c of[-1,1])this.shots.push({id:this.nextId++,type:"crawler",x:r,y:a,vx:n*22,vy:c*17,sign:c,grounded:!1,age:0,life:2.4,r:.2,damage:1.4,pierce:!0,hit:new Set})}else for(let o of[-1,0,1])this.shots.push({id:this.nextId++,type:"forceShot",x:r,y:a,vx:n*24,vy:o*7,age:0,life:1.5,r:.14,damage:1.2})}for(let n=0;n<t.bits;n++)this.shots.push({id:this.nextId++,type:"bitShot",x:t.x+.05,y:t.y+(n===0?1.05:-1.05),vx:29,vy:0,age:0,life:1.5,r:.09,damage:.6});this.emit("shot",{x:t.x,y:t.y})}enemyBullet(e,t,i,n=5,r="orb"){if(this.bullets.length>240)return;let a=n*this.diff.bullet;this.bullets.push({id:this.nextId++,x:e,y:t,vx:Math.cos(i)*a,vy:Math.sin(i)*a,r:r==="heavy"?.24:.14,type:r,age:0,grazed:!1})}aimed(e,t,i=1,n=.18,r=5){let a=Math.atan2(this.player.y-t,this.player.x-e);for(let o=0;o<i;o++)this.enemyBullet(e,t,a+(o-(i-1)/2)*n,r)}kill(e,t=!1){if(e.dead)return;e.dead=!0,this.kills++,this.combo++,this.comboTimer=2.4,this.bestCombo=Math.max(this.combo,this.bestCombo);let i=e.type==="carrier"?500:e.type==="turret"?350:150;this.addScore(i+(t?Math.min(this.combo,12)*30:0)),this.drive=Math.min(100,this.drive+2.6),this.emit("explosion",{x:e.x,y:e.y,size:e.type==="carrier"?1.2:.8,type:e.type}),e.type==="carrier"&&this.items.push({id:this.nextId++,type:e.drop||"red",x:e.x,y:e.y,age:0}),this.options.difficulty==="ace"&&e.type!=="carrier"&&this.aimed(e.x,e.y,1,.1,5.5)}die(){this.player.invuln>0||this.debugInvincible||this.mode!=="playing"||(this.deaths++,this.options.practice||this.lives--,this.mode="dying",this.modeTime=0,this.combo=0,this.emit("playerDeath",{x:this.player.x,y:this.player.y}))}spawnBoss(){let e=this.stage,t=_t[e].bossType,i=100+e*25;this.boss={id:this.nextId++,type:t,x:21,y:0,age:0,hp:i,maxHp:i,open:!1,cooldown:2,specialCd:5.8,hazards:[],phase:0,flash:0,parts:[{id:0,ox:-.3,oy:2.6,hp:22+e*3,maxHp:22+e*3},{id:1,ox:-.3,oy:-2.6,hp:22+e*3,maxHp:22+e*3}]},this.enemies=this.enemies.filter(n=>n.type==="carrier"),this.bullets=[],this.emit("boss",{name:_t[e].boss,ja:_t[e].bossJa})}updateBoss(e){let t=this.boss;if(!t)return;t.age+=e,t.x=ui(t.x,10.3,Math.min(1,e*.9)),t.y=Math.sin(t.age*.55)*1.4,t.phase=t.hp/t.maxHp<.45?1:0,t.flash=Math.max(0,t.flash-e);let i=t.phase?5.3:7.3;if(t.open=t.age>3&&t.age%i>i*.39,t.cooldown-=e,t.cooldown<=0&&t.age>3){t.cooldown=(t.phase?.65:1.15)/this.diff.rate;let r=3+this.stage%3+(t.phase?2:0);if(this.aimed(t.x-2,t.y,r,.22,4.5+this.stage*.15),t.phase)for(let a=0;a<8;a++)this.enemyBullet(t.x-1,t.y,t.age*.5+a*Tu/8,3.5,"heavy");for(let a of t.parts)a.hp>0&&this.aimed(t.x+a.ox-1,t.y+a.oy,2,.14,5.4);this.emit("bossFire")}if(t.specialCd-=e,t.specialCd<=0&&t.age>4)if(t.specialCd=t.phase?3.8:5.6,this.stage===0)for(let r=0;r<9;r++)this.enemyBullet(t.x-1,t.y,Math.PI-.85+r*.21,3.3,"heavy");else if(this.stage===1)for(let r of[-1,1])this.spawn("organism",t.x-1,t.y+r*1.8,{hp:4,vx:-4.1,cooldown:2.5});else if([2,3,6].includes(this.stage)){let r=Et(this.player.y,-4.9,4.9),a=this.stage===3?[r-1.8,r+1.8]:this.stage===6?[r,r>0?r-3.5:r+3.5]:[r];for(let o of a)t.hazards.push({id:this.nextId++,y:o,age:0,warn:1.15,duration:1.75,r:.3});this.emit("telegraph")}else if(this.stage===4)for(let r=0;r<13;r++)this.enemyBullet(t.x-2,t.y,Math.PI+(r-6)*.13,3.2+r*.12,"heavy");else if(this.stage===5)for(let r=0;r<18;r++)this.enemyBullet(t.x-1,t.y,t.age*.5+r*Tu/18,3.8,"heavy");else{for(let r=0;r<12;r++)this.enemyBullet(t.x-1,t.y,Math.PI-.9+r*.16,2.7,"heavy");this.emit("heartbeat")}for(let r of t.hazards)r.age+=e,r.age>r.warn&&r.age<r.duration&&this.player.x<t.x-1&&Math.abs(this.player.y-r.y)<r.r+.16&&this.die();if(t.hazards=t.hazards.filter(r=>r.age<r.duration),t.type==="serpent")for(let r=1;r<16;r++){let a=t.x+1.2-r*.46,o=t.y+Math.sin(t.age*1.7-r*.45)*(1+r*.13);Math.hypot(this.player.x-a,this.player.y-o)<.42&&this.die()}let n=this.force;t.open&&n.mode!=="none"&&Math.hypot(n.x-(t.x-1.65),n.y-t.y)<1.3&&(t.hp-=e*(this.stage===7?32:16),t.flash=.06,(n.mode==="launch"||n.mode==="free")&&(n.mode="free",n.x=t.x-1.65,n.y=ui(n.y,t.y,e*5))),Math.hypot(this.player.x-t.x,this.player.y-t.y)<2.5&&this.die(),t.hp<=0&&this.defeatBoss()}defeatBoss(){let e=this.boss;e&&(this.addScore(12e3+(this.stage+1)*2e3+this.bullets.length*30),this.emit("bossDeath",{x:e.x,y:e.y}),this.boss=null,this.bullets=[],this.enemies=[],this.shots=[],this.bossDefeated=!0,this.mode="stageclear",this.modeTime=0)}update(e,t={}){if(this.paused||this.mode==="over"||this.mode==="victory")return;if(this.totalTime+=e,this.modeTime+=e,this.mode==="dying"){this.modeTime>1.5&&(this.lives>0||this.options.practice?this.respawn():(this.mode="over",this.emit("gameover")));return}if(this.mode==="stageclear"){this.modeTime>5.8&&this.nextStage();return}let i=this.driveTime>0?.43:1,n=e*i;this.time+=n,this.scroll+=this.boss?0:n*3.2,this.driveTime=Math.max(0,this.driveTime-e),this.boss||(this.checkpoint=Math.min(Math.floor(this.time/24)*24,Math.floor((_t[this.stage].duration-12)/24)*24));let r=this.player,a=this.force;r.invuln=Math.max(0,r.invuln-e),r.cooldown=Math.max(0,r.cooldown-e),r.missileCd-=e;let o=Et(t.x||0,-1,1),l=Et(t.y||0,-1,1),c=Math.max(1,Math.hypot(o,l)),h=4.5+r.speed*1.5;if(r.x=Et(r.x+o/c*h*e,-15.2,15.2),r.y=Et(r.y+l/c*h*e,-8.5,8.5),r.vy=l*h,t.speed&&(r.speed=r.speed%r.maxSpeed+1),t.force&&this.toggleForce(),t.drive&&this.activateDrive(),t.fire){!r.fireWas&&r.cooldown<=0&&(this.shoot(),r.cooldown=.14);let u=r.charge;r.charge=Math.min(1,r.charge+e/(this.driveTime>0?.6:1.65)),u<1&&r.charge===1&&this.emit("charged")}else r.fireWas&&r.charge>.18&&this.shoot(!0),r.charge=0,t.rapid&&r.cooldown<=0&&(this.shoot(),r.cooldown=.125);if(r.fireWas=!!t.fire,r.missiles>0&&r.missileCd<=0&&(t.fire||t.rapid)){r.missileCd=.8;for(let u=0;u<r.missiles;u++)this.shots.push({id:this.nextId++,type:"missile",x:r.x-.2,y:r.y-.4-u*.18,vx:9,vy:-3,age:0,life:4,r:.18,damage:4});this.emit("missile")}if(a.age+=e,a.mode==="front"||a.mode==="rear")a.x=ui(a.x,r.x+(a.mode==="front"?1.6:-1.6),Math.min(1,e*18)),a.y=ui(a.y,r.y,Math.min(1,e*18));else if(a.mode==="launch")a.x+=a.side*23*e,(a.x>13||a.x<-13)&&(a.x=Et(a.x,-13,13),a.mode="free");else if(a.mode==="free")a.y=ui(a.y,r.y,e*.55),a.x-=n*.25;else if(a.mode==="return"){let u=Math.hypot(r.x-a.x,r.y-a.y),f=e*15;a.x+=(r.x-a.x)/Math.max(.01,u)*Math.min(f,u),a.y+=(r.y-a.y)/Math.max(.01,u)*Math.min(f,u),u<1.65&&(a.mode=a.x<r.x?"rear":"front",a.side=a.mode==="front"?1:-1,this.emit("forceDock"))}if(a.mode==="free"&&Math.hypot(a.x-r.x,a.y-r.y)<1.55&&(a.mode=a.x<r.x?"rear":"front",this.emit("forceDock")),this.schedule(),this.updateEnemies(n),this.updateBoss(n),this.updateShots(n),this.updateBullets(n),this.updateItems(n),this.mode!=="playing")return;let d=Kn(this.stage,this.scroll+r.x);(r.y+.27>d.top||r.y-.27<d.bottom)&&this.die();for(let u of this.obstacles)Math.abs(r.x-(u.wx-this.scroll))<u.w/2+.5&&Math.abs(r.y-u.y)<u.h/2+.23&&this.die();this.comboTimer=Math.max(0,this.comboTimer-e),this.comboTimer===0&&(this.combo=0)}schedule(){if(this.boss||this.bossDefeated)return;let e=_t[this.stage].duration;if(this.time>=e){this.spawnBoss();return}let t=Math.floor(this.time/2.85);if(t>this.wave){this.wave=t;let n=Math.sin(t*2.19+this.stage)*4.2,r=t%5===3?"interceptor":["organic","heart","neural"].includes(_t[this.stage].theme)?"organism":"scout",a=3+t%3;for(let o=0;o<a;o++)this.spawn(r,18+o*1.6,n+Math.sin(o*.8)*1,{vx:-4-this.stage*.1,formation:t%4})}let i=Math.floor(this.time/6.3);if(i>this.turretWave){this.turretWave=i;let n=i%2===0,r=Kn(this.stage,this.scroll+19);this.spawn("turret",19,n?r.top-.35:r.bottom+.35,{top:n,vx:-3.2,cooldown:1.6})}if(this.time>=this.nextCarrier){let n=["red","speed","blue","missile","bit","yellow","red","bit","missile","blue"],r=this.force.mode==="none"?"red":n[this.carrierCount%n.length];this.spawn("carrier",18,this.force.mode==="none"?0:Math.sin(this.carrierCount*2.4)*3.4,{drop:r,vx:-3.7,hp:4,cooldown:99}),this.nextCarrier=this.time+10,this.carrierCount++}}updateEnemies(e){let t=this.force,i=this.player;for(let n of this.enemies){if(n.age+=e,n.x+=n.vx*e,n.cooldown-=e,n.type==="scout"&&(n.y=n.baseY+Math.sin(n.age*2.2)*.85),n.type==="organism"&&(n.y=n.baseY+Math.sin(n.age*2.5)*1.3),n.type==="interceptor"&&n.age>1.2&&(n.y=ui(n.y,i.y,e*.7),n.x-=e*1.5),n.type==="carrier"&&(n.y=n.baseY+Math.sin(n.age*2)*.35),n.type==="turret"){let r=Kn(this.stage,this.scroll+n.x);n.y=n.top?r.top-.35:r.bottom+.35}n.cooldown<=0&&n.x>-12&&n.x<16&&n.type!=="carrier"&&(n.type==="turret"?this.aimed(n.x,n.y,1+(this.stage>2?1:0),.22,5.5):n.type==="organism"?this.aimed(n.x,n.y,3,.32,3.5):this.aimed(n.x,n.y,1,.1,4.3),n.cooldown=(n.type==="turret"?2.3:3.6)/this.diff.rate),t.mode!=="none"&&Math.hypot(n.x-t.x,n.y-t.y)<n.r+.6&&(n.hp-=e*30,n.hp<=0&&this.kill(n)),!n.dead&&Math.hypot(n.x-i.x,n.y-i.y)<n.r+.26&&this.die()}this.enemies=this.enemies.filter(n=>!n.dead&&n.x>-20)}updateShots(e){for(let t of this.shots){if(t.age+=e,t.type==="missile"){let r=this.enemies.find(a=>a.x>t.x-.5)||this.boss;if(r){let a=Math.atan2(r.y-t.y,r.x-t.x);t.vx=ui(t.vx,Math.cos(a)*18,e*5),t.vy=ui(t.vy,Math.sin(a)*18,e*5)}else t.vy=ui(t.vy,0,e*3)}t.x+=t.vx*e,t.y+=t.vy*e,t.type==="helix"&&(t.y=t.baseY+Math.sin(t.age*27+t.phase)*t.amp);let i=Kn(this.stage,this.scroll+t.x);t.type==="reflect"&&(t.y>i.top-.2||t.y<i.bottom+.2)?(t.vy*=-1,t.y=Et(t.y,i.bottom+.21,i.top-.21),t.bounces++):t.type==="crawler"?(t.y>=i.top-.18||t.y<=i.bottom+.18||t.grounded)&&(t.grounded=!0,t.vy=0,t.y=t.sign>0?i.top-.19:i.bottom+.19):t.type!=="wave"&&(t.y>i.top||t.y<i.bottom)&&(t.dead=!0);for(let r of this.obstacles)Math.abs(t.x-(r.wx-this.scroll))<r.w/2&&Math.abs(t.y-r.y)<r.h/2&&t.type!=="wave"&&t.type!=="crawler"&&(t.type==="reflect"?(t.vy*=-1,t.vx*=-1):t.dead=!0);if(t.dead)continue;for(let r of this.enemies)if(!(r.dead||t.hit?.has(r.id))&&Math.abs(t.x-r.x)<r.r+t.r+(t.type==="wave"?.7:0)&&Math.abs(t.y-r.y)<r.r+t.r&&(r.hp-=t.damage,this.hits++,t.hit?.add(r.id),r.hp<=0?this.kill(r,t.type==="wave"):this.emit("hit",{x:r.x,y:r.y}),!t.pierce)){t.dead=!0;break}let n=this.boss;if(n&&!t.dead){let r=!1;for(let a of n.parts)if(a.hp>0&&Math.hypot(t.x-(n.x+a.ox-.5),t.y-(n.y+a.oy))<.8+t.r){if(t.hit?.has("p"+a.id))continue;a.hp-=t.damage,t.hit?.add("p"+a.id),t.pierce||(t.dead=!0),r=!0,this.emit("hit",{x:n.x+a.ox-.5,y:n.y+a.oy}),a.hp<=0&&(this.emit("partBreak",{x:n.x+a.ox,y:n.y+a.oy}),this.addScore(2e3))}!r&&!t.hit?.has("boss")&&Math.abs(t.x-(n.x-1.65))<1.1+t.r&&Math.abs(t.y-n.y)<.9+t.r&&(n.open&&this.stage!==7?(n.hp-=t.damage,t.hit?.add("boss"),n.flash=.08,this.hits++,this.emit("hit",{x:n.x-1.65,y:n.y})):this.emit("armour",{x:t.x,y:t.y}),(!t.pierce||!n.open||this.stage===7)&&(t.dead=!0))}}this.shots=this.shots.filter(t=>!t.dead&&t.age<t.life&&t.x>-21&&t.x<23&&Math.abs(t.y)<12),this.boss&&this.boss.hp<=0&&this.defeatBoss()}updateBullets(e){let t=this.player,i=this.force;for(let n of this.bullets){if(n.age+=e,n.x+=n.vx*e,n.y+=n.vy*e,i.mode!=="none"&&Math.hypot(n.x-i.x,n.y-i.y)<.66+n.r){n.dead=!0,this.emit("block",{x:n.x,y:n.y});continue}let r=!1;for(let o=0;o<t.bits;o++)Math.hypot(n.x-t.x,n.y-(t.y+(o===0?1.05:-1.05)))<.23+n.r&&(r=!0);if(r){n.dead=!0,this.emit("block",{x:n.x,y:n.y});continue}let a=Math.hypot(n.x-t.x,n.y-t.y);a<.16+n.r?(this.die(),n.dead=!0):a<.8&&!n.grazed&&(n.grazed=!0,this.drive=Math.min(100,this.drive+1.5),this.addScore(10),this.emit("graze",{x:n.x,y:n.y}))}this.bullets=this.bullets.filter(n=>!n.dead&&n.age<10&&n.x>-19&&n.x<21&&Math.abs(n.y)<12)}updateItems(e){for(let t of this.items)t.x-=2.6*e,t.age+=e,Math.hypot(t.x-this.player.x,t.y-this.player.y)<1.02&&(this.collect(t.type),t.dead=!0);this.items=this.items.filter(t=>!t.dead&&t.x>-19&&t.age<16)}};var fd=0,kc=1,pd=2;var da=1,md=2,or=3,Zi=0,Dt=1,Ri=2,bn=0,lr=1,li=2,Hc=3,Gc=4,gd=5;var ms=100,xd=101,_d=102,vd=103,yd=104,Md=200,Sd=201,bd=202,Td=203,Vc=204,Wc=205,Ed=206,wd=207,Ad=208,Rd=209,Cd=210,Id=211,Pd=212,Ld=213,Nd=214,bo=0,To=1,Eo=2,Xs=3,wo=4,Ao=5,Ro=6,Co=7,qo=0,Dd=1,Ud=2,Ji=0,fa=1,pa=2,ma=3,gs=4,ga=5,xa=6,_a=7,Rc="attached",Od="detached",Xc=300,xs=301,cr=302,Yo=303,$o=304,Wi=1e3,Ei=1001,qs=1002,Mt=1003,Ko=1004;var _s=1005;var Pt=1006,hr=1007;var Ci=1008;var ci=1009,qc=1010,Yc=1011,ur=1012,Zo=1013,ki=1014,xi=1015,Xt=1016,Jo=1017,jo=1018,vs=1020,$c=35902,Kc=35899,Zc=1021,Jc=1022,Ii=1023,pn=1026,Tn=1027,Qo=1028,el=1029,Gn=1030,tl=1031;var il=1033,va=33776,ya=33777,Ma=33778,Sa=33779,nl=35840,sl=35841,rl=35842,al=35843,ol=36196,ll=37492,cl=37496,hl=37488,ul=37489,ba=37490,dl=37491,fl=37808,pl=37809,ml=37810,gl=37811,xl=37812,_l=37813,vl=37814,yl=37815,Ml=37816,Sl=37817,bl=37818,Tl=37819,El=37820,wl=37821,Al=36492,Rl=36494,Cl=36495,Il=36283,Pl=36284,Ta=36285,Ll=36286;var is=2300,ns=2301,Mo=2302,Cc=2303,Ic=2400,Pc=2401,Lc=2402,Fd=2500;var jc=0,Ea=1,dr=2,Bd=3200;var wa=0,zd=1,En="",yt="srgb",ti="srgb-linear",kr="linear",et="srgb";var So=7680;var kd=519,Hd=512,Gd=513,Vd=514,Qc=515,Wd=516,Xd=517,eh=518,th=519,ih=35044,Aa=35048;var nh="300 es",wi=2e3,Ys=2001;function ip(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function np(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function $s(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qd(){let s=$s("canvas");return s.style.display="block",s}var Eu={},Ks=null;function Hr(...s){let e="THREE."+s.shift();Ks?Ks("log",e,...s):console.log(e,...s)}function Yd(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ae(...s){s=Yd(s);let e="THREE."+s.shift();if(Ks)Ks("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ne(...s){s=Yd(s);let e="THREE."+s.shift();if(Ks)Ks("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ts(...s){let e=s.join(" ");e in Eu||(Eu[e]=!0,Ae(...s))}function $d(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Kd={[bo]:bo,[Eo]:Ro,[wo]:wo,[Xs]:Ao,[To]:To,[Ro]:Eo,[Co]:Co,[Ao]:Xs},Xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=1234567,Br=Math.PI/180,ss=180/Math.PI;function ji(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Ye(s,e,t){return Math.max(e,Math.min(t,s))}function sh(s,e){return(s%e+e)%e}function sp(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function rp(s,e,t){return s!==e?(t-s)/(e-s):0}function zr(s,e,t){return(1-t)*s+t*e}function ap(s,e,t,i){return zr(s,e,1-Math.exp(-t*i))}function op(s,e=1){return e-Math.abs(sh(s,e*2)-e)}function lp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function cp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function hp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function up(s,e){return s+Math.random()*(e-s)}function dp(s){return s*(.5-Math.random())}function fp(s){s!==void 0&&(wu=s);let e=wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pp(s){return s*Br}function mp(s){return s*ss}function gp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function xp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function rh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _p(s,e,t,i,n){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Nl(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ah(s,e){if(e.constructor===Float32Array)return s;let t=Nl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function oh(s,e){if(e.constructor===Float32Array)return s;let t=Nl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Dl={DEG2RAD:Br,RAD2DEG:ss,generateUUID:ji,clamp:Ye,euclideanModulo:sh,mapLinear:sp,inverseLerp:rp,lerp:zr,damp:ap,pingpong:op,smoothstep:lp,smootherstep:cp,randInt:hp,randFloat:up,randFloatSpread:dp,seededRandom:fp,degToRad:pp,radToDeg:mp,isPowerOfTwo:gp,ceilPowerOfTwo:xp,floorPowerOfTwo:rh,setQuaternionFromProperEuler:_p,normalize:oh,denormalize:ah},ve=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),T=Math.sin(y);p=Math.sin(p*y)/T,o=Math.sin(o*y)/T,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+_*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+_*o;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(r/2),u=l(i/2),f=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Au.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=n+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nc.copy(this).projectOnVector(e),this.sub(nc)}reflect(e){return this.sub(nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nc=new L,Au=new pi,De=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=n[0],m=n[3],p=n[6],y=n[1],T=n[4],S=n[7],w=n[2],E=n[5],x=n[8];return r[0]=a*_+o*y+l*w,r[3]=a*m+o*T+l*E,r[6]=a*p+o*S+l*x,r[1]=c*_+h*y+d*w,r[4]=c*m+h*T+d*E,r[7]=c*p+h*S+d*x,r[2]=u*_+f*y+g*w,r[5]=u*m+f*T+g*E,r[8]=u*p+f*S+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*a)*_,e[3]=u*_,e[4]=(h*t-n*l)*_,e[5]=(n*r-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sc.makeScale(e,t)),this}rotate(e){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sc.makeRotation(-e)),this}translate(e,t){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sc=new De,Ru=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vp(){let s={enabled:!0,workingColorSpace:ti,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(n.r=fn(n.r),n.g=fn(n.g),n.b=fn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(n.r=Ws(n.r),n.g=Ws(n.g),n.b=Ws(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===En?kr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[ti]:{primaries:e,whitePoint:i,transfer:kr,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),s}var He=vp();function fn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ws,Io=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ws===void 0&&(ws=$s("canvas")),ws.width=e.width,ws.height=e.height;let n=ws.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=ws}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$s("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=fn(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fn(t[i]/255)*255):t[i]=fn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yp=0,Zs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(rc(n[a].image)):r.push(rc(n[a]))}else r=rc(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function rc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Io.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var Mp=0,ac=new L,Lt=class s extends Xi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=Ei,n=Ei,r=Pt,a=Ci,o=Ii,l=ci,c=s.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=ji(),this.name="",this.source=new Zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ac).x}get height(){return this.source.getSize(ac).y}get depth(){return this.source.getSize(ac).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wi:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wi:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Xc;Lt.DEFAULT_ANISOTROPY=1;var st=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,S=(f+1)/2,w=(p+1)/2,E=(h+u)/4,x=(d+_)/4,b=(g+m)/4;return T>S&&T>w?T<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(T),n=E/i,r=x/i):S>w?S<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(S),i=E/n,r=b/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=x/r,n=b/r),this.set(i,n,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Po=class extends Xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Lt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Zs(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nt=class extends Po{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Gr=class extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lo=class extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Be=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,i,n,r,a,o,l,c,h,d,u,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,d,u,f,g,_,m)}set(e,t,i,n,r,a,o,l,c,h,d,u,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sp,e,bp)}lookAt(e,t,i){let n=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),In.crossVectors(i,di),In.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),In.crossVectors(i,di)),In.normalize(),qa.crossVectors(di,In),n[0]=In.x,n[4]=qa.x,n[8]=di.x,n[1]=In.y,n[5]=qa.y,n[9]=di.y,n[2]=In.z,n[6]=qa.z,n[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],T=i[7],S=i[11],w=i[15],E=n[0],x=n[4],b=n[8],N=n[12],R=n[1],D=n[5],O=n[9],V=n[13],I=n[2],G=n[6],q=n[10],H=n[14],te=n[3],X=n[7],j=n[11],Q=n[15];return r[0]=a*E+o*R+l*I+c*te,r[4]=a*x+o*D+l*G+c*X,r[8]=a*b+o*O+l*q+c*j,r[12]=a*N+o*V+l*H+c*Q,r[1]=h*E+d*R+u*I+f*te,r[5]=h*x+d*D+u*G+f*X,r[9]=h*b+d*O+u*q+f*j,r[13]=h*N+d*V+u*H+f*Q,r[2]=g*E+_*R+m*I+p*te,r[6]=g*x+_*D+m*G+p*X,r[10]=g*b+_*O+m*q+p*j,r[14]=g*N+_*V+m*H+p*Q,r[3]=y*E+T*R+S*I+w*te,r[7]=y*x+T*D+S*G+w*X,r[11]=y*b+T*O+S*q+w*j,r[15]=y*N+T*V+S*H+w*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=l*f-c*u,T=o*f-c*d,S=o*u-l*d,w=a*f-c*h,E=a*u-l*h,x=a*d-o*h;return t*(_*y-m*T+p*S)-i*(g*y-m*w+p*E)+n*(g*T-_*w+p*x)-r*(g*S-_*E+m*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=t*o-i*a,T=t*l-n*a,S=t*c-r*a,w=i*l-n*o,E=i*c-r*o,x=n*c-r*l,b=h*_-d*g,N=h*m-u*g,R=h*p-f*g,D=d*m-u*_,O=d*p-f*_,V=u*p-f*m,I=y*V-T*O+S*D+w*R-E*N+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return e[0]=(o*V-l*O+c*D)*G,e[1]=(n*O-i*V-r*D)*G,e[2]=(_*x-m*E+p*w)*G,e[3]=(u*E-d*x-f*w)*G,e[4]=(l*R-a*V-c*N)*G,e[5]=(t*V-n*R+r*N)*G,e[6]=(m*S-g*x-p*T)*G,e[7]=(h*x-u*S+f*T)*G,e[8]=(a*O-o*R+c*b)*G,e[9]=(i*R-t*O-r*b)*G,e[10]=(g*E-_*S+p*y)*G,e[11]=(d*S-h*E-f*y)*G,e[12]=(o*N-a*D-l*b)*G,e[13]=(t*D-i*N+n*b)*G,e[14]=(_*T-g*w-m*y)*G,e[15]=(h*w-d*T+u*y)*G,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,y=l*c,T=l*h,S=l*d,w=i.x,E=i.y,x=i.z;return n[0]=(1-(_+p))*w,n[1]=(f+S)*w,n[2]=(g-T)*w,n[3]=0,n[4]=(f-S)*E,n[5]=(1-(u+p))*E,n[6]=(m+y)*E,n[7]=0,n[8]=(g+T)*x,n[9]=(m-y)*x,n[10]=(1-(u+_))*x,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=As.set(n[0],n[1],n[2]).length(),o=As.set(n[4],n[5],n[6]).length(),l=As.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Di.copy(this);let c=1/a,h=1/o,d=1/l;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=d,Di.elements[9]*=d,Di.elements[10]*=d,t.setFromRotationMatrix(Di),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,r,a,o=wi,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===wi)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ys)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=wi,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===wi)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ys)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},As=new L,Di=new Be,Sp=new L(0,0,0),bp=new L(1,1,1),In=new L,qa=new L,di=new L,Iu=new Be,Pu=new pi,qi=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qi.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tp=0,Lu=new L,Rs=new pi,an=new Be,Ya=new L,wr=new L,Ep=new L,wp=new pi,Nu=new L(1,0,0),Du=new L(0,1,0),Uu=new L(0,0,1),Ou={type:"added"},Ap={type:"removed"},Cs={type:"childadded",child:null},oc={type:"childremoved",child:null},rt=class s extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new qi,i=new pi,n=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Be},normalMatrix:{value:new De}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Nu,e)}rotateY(e){return this.rotateOnAxis(Du,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Lu.copy(e).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nu,e)}translateY(e){return this.translateOnAxis(Du,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ya.copy(e):Ya.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(wr,Ya,this.up):an.lookAt(Ya,wr,this.up),this.quaternion.setFromRotationMatrix(an),n&&(an.extractRotation(n.matrixWorld),Rs.setFromRotationMatrix(an),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ou),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ap),oc.child=e,this.dispatchEvent(oc),oc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ou),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rt.DEFAULT_UP=new L(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ct=class extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rp={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},$a={h:0,s:0,l:0};function lc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var _e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=He.workingColorSpace){if(e=sh(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=lc(a,r,e+1/3),this.g=lc(a,r,e),this.b=lc(a,r,e-1/3)}return He.colorSpaceToWorking(this,n),this}setStyle(e,t=yt){function i(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let i=Zd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return He.workingToColorSpace(Kt.copy(this),e),Math.round(Ye(Kt.r*255,0,255))*65536+Math.round(Ye(Kt.g*255,0,255))*256+Math.round(Ye(Kt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(Kt.copy(this),t);let i=Kt.r,n=Kt.g,r=Kt.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=yt){He.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,n=Kt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL($a);let i=zr(Pn.h,$a.h,t),n=zr(Pn.s,$a.s,t),r=zr(Pn.l,$a.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new _e;_e.NAMES=Zd;var Wr=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var rs=class extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ui=new L,on=new L,cc=new L,ln=new L,Is=new L,Ps=new L,Fu=new L,hc=new L,uc=new L,dc=new L,fc=new st,pc=new st,mc=new st,dn=class s{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ui.subVectors(e,t),n.cross(Ui);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Ui.subVectors(n,t),on.subVectors(i,t),cc.subVectors(e,t);let a=Ui.dot(Ui),o=Ui.dot(on),l=Ui.dot(cc),c=on.dot(on),h=on.dot(cc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ln.x),l.addScaledVector(a,ln.y),l.addScaledVector(o,ln.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return fc.setScalar(0),pc.setScalar(0),mc.setScalar(0),fc.fromBufferAttribute(e,t),pc.fromBufferAttribute(e,i),mc.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(fc,r.x),a.addScaledVector(pc,r.y),a.addScaledVector(mc,r.z),a}static isFrontFacing(e,t,i,n){return Ui.subVectors(i,t),on.subVectors(e,t),Ui.cross(on).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Ui.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;Is.subVectors(n,i),Ps.subVectors(r,i),hc.subVectors(e,i);let l=Is.dot(hc),c=Ps.dot(hc);if(l<=0&&c<=0)return t.copy(i);uc.subVectors(e,n);let h=Is.dot(uc),d=Ps.dot(uc);if(h>=0&&d<=h)return t.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(Is,a);dc.subVectors(e,r);let f=Is.dot(dc),g=Ps.dot(dc);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ps,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Fu.subVectors(r,n),o=(d-h)/(d-h+(f-g)),t.copy(n).addScaledVector(Fu,o);let p=1/(m+_+u);return a=_*p,o=u*p,t.copy(i).addScaledVector(Is,a).addScaledVector(Ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Oi):Oi.fromBufferAttribute(r,a),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ka.copy(i.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Za.subVectors(this.max,Ar),Ls.subVectors(e.a,Ar),Ns.subVectors(e.b,Ar),Ds.subVectors(e.c,Ar),Ln.subVectors(Ns,Ls),Nn.subVectors(Ds,Ns),Jn.subVectors(Ls,Ds);let t=[0,-Ln.z,Ln.y,0,-Nn.z,Nn.y,0,-Jn.z,Jn.y,Ln.z,0,-Ln.x,Nn.z,0,-Nn.x,Jn.z,0,-Jn.x,-Ln.y,Ln.x,0,-Nn.y,Nn.x,0,-Jn.y,Jn.x,0];return!gc(t,Ls,Ns,Ds,Za)||(t=[1,0,0,0,1,0,0,0,1],!gc(t,Ls,Ns,Ds,Za))?!1:(Ja.crossVectors(Ln,Nn),t=[Ja.x,Ja.y,Ja.z],gc(t,Ls,Ns,Ds,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},cn=[new L,new L,new L,new L,new L,new L,new L,new L],Oi=new L,Ka=new mi,Ls=new L,Ns=new L,Ds=new L,Ln=new L,Nn=new L,Jn=new L,Ar=new L,Za=new L,Ja=new L,jn=new L;function gc(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){jn.fromArray(s,r);let o=n.x*Math.abs(jn.x)+n.y*Math.abs(jn.y)+n.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),h=i.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var wt=new L,ja=new ve,Cp=0,At=class extends Xi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ih,this.updateRanges=[],this.gpuType=xi,this.version=0,this._normalizationScale=e!==void 0?Nl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ah(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):oh(e,this.array)}};var Xr=class extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var qr=class extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var je=class extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ip=new mi,Rr=new L,xc=new L,ai=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ip.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Rr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(xc)),this.expandByPoint(Rr.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pp=0,Ti=new Be,_c=new rt,Us=new L,fi=new mi,Cr=new mi,Ht=new L,dt=class s extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ip(e)?qr:Xr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new De().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,i){return Ti.makeTranslation(e,t,i),this.applyMatrix4(Ti),this}scale(e,t,i){return Ti.makeScale(e,t,i),this.applyMatrix4(Ti),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new je(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(fi.min,Cr.min),fi.expandByPoint(Ht),Ht.addVectors(fi.max,Cr.max),fi.expandByPoint(Ht)):(fi.expandByPoint(Cr.min),fi.expandByPoint(Cr.max))}fi.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(Us.fromBufferAttribute(e,c),Ht.add(Us)),n=Math.max(n,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new At(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new L,l[N]=new L;let h=new L,d=new L,u=new L,f=new ve,g=new ve,_=new ve,m=new L,p=new L;function y(N,R,D){c[N]=c[R]=c[D]=1,h.fromBufferAttribute(i,N),d.fromBufferAttribute(i,R),u.fromBufferAttribute(i,D),f.fromBufferAttribute(r,N),g.fromBufferAttribute(r,R),_.fromBufferAttribute(r,D),d.sub(h),u.sub(h),g.sub(f),_.sub(f);let O=1/(g.x*_.y-_.x*g.y);isFinite(O)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(O),p.copy(u).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(O),o[N].add(m),o[R].add(m),o[D].add(m),l[N].add(p),l[R].add(p),l[D].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,R=T.length;N<R;++N){let D=T[N],O=D.start,V=D.count;for(let I=O,G=O+V;I<G;I+=3)y(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let S=new L,w=new L,E=new L,x=new L;function b(N){E.fromBufferAttribute(n,N),x.copy(E);let R=o[N];S.copy(R),S.sub(E.multiplyScalar(E.dot(R))).normalize(),w.crossVectors(x,R);let O=w.dot(l[N])<0?-1:1;a.setXYZW(N,S.x,S.y,S.z,O)}for(let N=0,R=i.count;N<R;++N)c[N]&&b(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new At(u,h,d)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},as=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ih,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Bu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Bu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Bu(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=ji()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var ei=new L,On=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?Nl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix4(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyNormalMatrix(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.transformDirection(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ah(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):oh(e,this.data.array)}},vc=new L,Lp=new L,Np=new De,Fi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=vc.subVectors(i,t).cross(Lp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(vc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Np.getNormalMatrix(e),n=this.coplanarPoint(vc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Dp=0,Zt=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=lr,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Wc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Fi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},os=class extends Zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Os,Ir=new L,Fs=new L,Bs=new L,zs=new ve,Pr=new ve,Jd=new Be,Qa=new L,Lr=new L,eo=new L,zu=new ve,yc=new ve,ku=new ve,js=class extends rt{constructor(e=new os){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new as(t,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new On(i,3,0,!1)),Os.setAttribute("uv",new On(i,2,3,!1))}this.geometry=Os,this.material=e,this.center=new ve(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),Jd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Bs.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;to(Qa.set(-.5,-.5,0),Bs,a,Fs,n,r),to(Lr.set(.5,-.5,0),Bs,a,Fs,n,r),to(eo.set(.5,.5,0),Bs,a,Fs,n,r),zu.set(0,0),yc.set(1,0),ku.set(1,1);let o=e.ray.intersectTriangle(Qa,Lr,eo,!1,Ir);if(o===null&&(to(Lr.set(-.5,.5,0),Bs,a,Fs,n,r),yc.set(0,1),o=e.ray.intersectTriangle(Qa,eo,Lr,!1,Ir),o===null))return;let l=e.ray.origin.distanceTo(Ir);l<e.near||l>e.far||t.push({distance:l,point:Ir.clone(),uv:dn.getInterpolation(Ir,Qa,Lr,eo,zu,yc,ku,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function to(s,e,t,i,n,r){zs.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(Pr.x=r*zs.x-n*zs.y,Pr.y=n*zs.x+r*zs.y):Pr.copy(zs),s.copy(e),s.x+=Pr.x,s.y+=Pr.y,s.applyMatrix4(Jd)}var hn=new L,Mc=new L,io=new L,no=new L,ls=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Mc.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),no.copy(this.origin).sub(Mc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(io),o=no.dot(this.direction),l=-no.dot(io),c=no.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Mc).addScaledVector(io,u),f}intersectSphere(e,t){if(e.radius<0)return null;hn.subVectors(e.center,this.origin);let i=hn.dot(this.direction),n=hn.dot(hn)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,i,n,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=i.x-a.x,y=i.y-a.y,T=i.z-a.z,S=Math.abs(l),w=Math.abs(c),E=Math.abs(h),x,b,N,R,D,O,V,I,G,q,H,te;if(S>=w&&S>=E?(N=l,O=d,G=g,te=p,l>=0?(x=c,b=h,R=u,D=f,V=_,I=m,q=y,H=T):(x=h,b=c,R=f,D=u,V=m,I=_,q=T,H=y)):w>=E?(N=c,O=u,G=_,te=y,c>=0?(x=h,b=l,R=f,D=d,V=m,I=g,q=T,H=p):(x=l,b=h,R=d,D=f,V=g,I=m,q=p,H=T)):(N=h,O=f,G=m,te=T,h>=0?(x=l,b=c,R=d,D=u,V=g,I=_,q=p,H=y):(x=c,b=l,R=u,D=d,V=_,I=g,q=y,H=p)),N===0)return null;let X=x/N,j=b/N,Q=1/N,Ee=R-X*O,Oe=D-j*O,K=V-X*G,me=I-j*G,Se=q-X*te,Ie=H-j*te,ge=Se*me-Ie*K,ze=Ee*Ie-Oe*Se,bt=K*Oe-me*Ee;if(n){if(ge<0||ze<0||bt<0)return null}else if((ge<0||ze<0||bt<0)&&(ge>0||ze>0||bt>0))return null;let Le=ge+ze+bt;if(Le===0)return null;let it=Q*(ge*O+ze*G+bt*te);return(Le>0?it<0:it>0)?null:this.at(it/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class extends Zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hu=new Be,Qn=new ls,so=new ai,Gu=new L,ro=new L,ao=new L,oo=new L,Sc=new L,lo=new L,Vu=new L,co=new L,Me=class extends rt{constructor(e=new dt,t=new ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Sc.fromBufferAttribute(d,e),a?lo.addScaledVector(Sc,h):lo.addScaledVector(Sc.sub(t),h))}t.add(lo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(so.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(so,Gu)===null||Qn.origin.distanceToSquared(Gu)>(e.far-e.near)**2))&&(Hu.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(Hu),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,w=T;S<w;S+=3){let E=o.getX(S),x=o.getX(S+1),b=o.getX(S+2);n=ho(this,p,e,i,c,h,d,E,x,b),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);n=ho(this,a,e,i,c,h,d,y,T,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,w=T;S<w;S+=3){let E=S,x=S+1,b=S+2;n=ho(this,p,e,i,c,h,d,E,x,b),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=m,T=m+1,S=m+2;n=ho(this,a,e,i,c,h,d,y,T,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function Up(s,e,t,i,n,r,a,o){let l;if(e.side===Dt?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Zi,o),l===null)return null;co.copy(o),co.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(co);return c<t.near||c>t.far?null:{distance:c,point:co.clone(),object:s}}function ho(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,ro),s.getVertexPosition(l,ao),s.getVertexPosition(c,oo);let h=Up(s,e,t,i,ro,ao,oo,Vu);if(h){let d=new L;dn.getBarycoord(Vu,ro,ao,oo,d),n&&(h.uv=dn.getInterpolatedAttribute(n,o,l,c,d,new ve)),r&&(h.uv1=dn.getInterpolatedAttribute(r,o,l,c,d,new ve)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};dn.getNormal(ro,ao,oo,u.normal),h.face=u,h.barycoord=d}return h}var Nr=new st,Wu=new st,Xu=new st,Op=new st,qu=new Be,uo=new L,bc=new ai,Yu=new Be,Tc=new ls,Yr=class extends Me{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rc,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,uo),this.boundingBox.expandByPoint(uo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,uo),this.boundingSphere.expandByPoint(uo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bc.copy(this.boundingSphere),bc.applyMatrix4(n),e.ray.intersectsSphere(bc)!==!1&&(Yu.copy(n).invert(),Tc.copy(e.ray).applyMatrix4(Yu),!(this.boundingBox!==null&&Tc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Tc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new st,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Od?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;Wu.fromBufferAttribute(n.attributes.skinIndex,e),Xu.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(Nr.copy(t),t.set(0,0,0,0)):(Nr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Nr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Xu.getComponent(r);if(a!==0){let o=Wu.getComponent(r);qu.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Op.copy(Nr).applyMatrix4(qu),a)}}return t.isVector4&&(t.w=Nr.w),t.applyMatrix4(this.bindMatrixInverse)}},Qs=class extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},er=class extends Lt{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Mt,h=Mt,d,u){super(null,a,o,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$u=new Be,Fp=new Be,$r=class s{constructor(e=[],t=[]){this.uuid=ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Fp;$u.multiplyMatrices(o,t[r]),$u.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new er(t,e,e,Ii,xi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],a=t[r];a===void 0&&(Ae("Skeleton: No bone found with UUID:",r),a=new Qs),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},mn=class extends At{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ks=new Be,Ku=new Be,fo=[],Zu=new mi,Bp=new Be,Dr=new Me,Ur=new ai,Bi=class extends Me{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Bp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ks),Zu.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(Zu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ks),Ur.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(i),e.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,ks),Ku.multiplyMatrices(i,ks),Dr.matrixWorld=Ku,Dr.raycast(e,fo);for(let a=0,o=fo.length;a<o;a++){let l=fo[a];l.instanceId=r,l.object=this,t.push(l)}fo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new er(new Float32Array(n*this.count),n,this.count,Qo,xi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},es=new ai,zp=new ve(.5,.5),po=new L,Fn=class{constructor(e=new Fi,t=new Fi,i=new Fi,n=new Fi,r=new Fi,a=new Fi){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wi,i=!1){let n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],T=r[13],S=r[14],w=r[15];if(n[0].setComponents(c-a,f-h,p-g,w-y).normalize(),n[1].setComponents(c+a,f+h,p+g,w+y).normalize(),n[2].setComponents(c+o,f+d,p+_,w+T).normalize(),n[3].setComponents(c-o,f-d,p-_,w-T).normalize(),i)n[4].setComponents(l,u,m,S).normalize(),n[5].setComponents(c-l,f-u,p-m,w-S).normalize();else if(n[4].setComponents(c-l,f-u,p-m,w-S).normalize(),t===wi)n[5].setComponents(c+l,f+u,p+m,w+S).normalize();else if(t===Ys)n[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);let t=zp.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(po.x=n.normal.x>0?e.max.x:e.min.x,po.y=n.normal.y>0?e.max.y:e.min.y,po.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ju=new Be,No=class s{constructor(){this.coordinateSystem=wi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];Ju.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Fn),i[n].setFromProjectionMatrix(Ju,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new Fn),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new s().copy(this)}};var tr=class extends Zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Do=new L,Uo=new L,ju=new Be,Or=new ls,mo=new ai,Ec=new L,Qu=new L,cs=class extends rt{constructor(e=new dt,t=new tr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Do.fromBufferAttribute(t,n-1),Uo.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Do.distanceTo(Uo);e.setAttribute("lineDistance",new je(i,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(n),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;ju.copy(n).invert(),Or.copy(e.ray).applyMatrix4(ju);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=h.getX(_),y=h.getX(_+1),T=go(this,e,Or,l,p,y,_);T&&t.push(T)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=go(this,e,Or,l,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=go(this,e,Or,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=go(this,e,Or,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function go(s,e,t,i,n,r,a){let o=s.geometry.attributes.position;if(Do.fromBufferAttribute(o,n),Uo.fromBufferAttribute(o,r),t.distanceSqToSegment(Do,Uo,Ec,Qu)>i)return;Ec.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ec);if(!(c<e.near||c>e.far))return{distance:c,point:Qu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var ed=new L,td=new L,Kr=class extends cs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)ed.fromBufferAttribute(t,n),td.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+ed.distanceTo(td);e.setAttribute("lineDistance",new je(i,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Zr=class extends cs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Bn=class extends Zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},id=new Be,Nc=new ls,xo=new ai,_o=new L,hs=class extends rt{constructor(e=new dt,t=new Bn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(n),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;id.copy(n).invert(),Nc.copy(e.ray).applyMatrix4(id);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,_=f;g<_;g++){let m=c.getX(g);_o.fromBufferAttribute(d,m),nd(_o,m,l,n,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)_o.fromBufferAttribute(d,g),nd(_o,g,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function nd(s,e,t,i,n,r,a){let o=Nc.distanceSqToPoint(s);if(o<t){let l=new L;Nc.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Jr=class extends Lt{constructor(e=[],t=xs,i,n,r,a,o,l,c,h){super(e,t,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zn=class extends Lt{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gn=class extends Lt{constructor(e,t,i=ki,n,r,a,o=Mt,l=Mt,c,h=pn,d=1){if(h!==pn&&h!==Tn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},jr=class extends gn{constructor(e,t=ki,i=xs,n,r,a=Mt,o=Mt,l,c=pn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qr=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zi=class s extends dt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(d,2));function g(_,m,p,y,T,S,w,E,x,b,N){let R=S/x,D=w/b,O=S/2,V=w/2,I=E/2,G=x+1,q=b+1,H=0,te=0,X=new L;for(let j=0;j<q;j++){let Q=j*D-V;for(let Ee=0;Ee<G;Ee++){let Oe=Ee*R-O;X[_]=Oe*y,X[m]=Q*T,X[p]=I,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(Ee/x),d.push(1-j/b),H+=1}}for(let j=0;j<b;j++)for(let Q=0;Q<x;Q++){let Ee=u+Q+G*j,Oe=u+Q+G*(j+1),K=u+(Q+1)+G*(j+1),me=u+(Q+1)+G*j;l.push(Ee,Oe,me),l.push(Oe,K,me),te+=6}o.addGroup(f,te,N),f+=te,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ir=class s extends dt{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,_=[],m=i/2,p=0;y(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(f,2));function y(){let S=new L,w=new L,E=0,x=(t-e)/i;for(let b=0;b<=r;b++){let N=[],R=b/r,D=R*(t-e)+e;for(let O=0;O<=n;O++){let V=O/n,I=V*l+o,G=Math.sin(I),q=Math.cos(I);w.x=D*G,w.y=-R*i+m,w.z=D*q,d.push(w.x,w.y,w.z),S.set(G,x,q).normalize(),u.push(S.x,S.y,S.z),f.push(V,1-R),N.push(g++)}_.push(N)}for(let b=0;b<n;b++)for(let N=0;N<r;N++){let R=_[N][b],D=_[N+1][b],O=_[N+1][b+1],V=_[N][b+1];(e>0||N!==0)&&(h.push(R,D,V),E+=3),(t>0||N!==r-1)&&(h.push(D,O,V),E+=3)}c.addGroup(p,E,0),p+=E}function T(S){let w=g,E=new ve,x=new L,b=0,N=S===!0?e:t,R=S===!0?1:-1;for(let O=1;O<=n;O++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;let D=g;for(let O=0;O<=n;O++){let I=O/n*l+o,G=Math.cos(I),q=Math.sin(I);x.x=N*q,x.y=m*R,x.z=N*G,d.push(x.x,x.y,x.z),u.push(0,R,0),E.x=G*.5+.5,E.y=q*.5*R+.5,f.push(E.x,E.y),g++}for(let O=0;O<n;O++){let V=w+O,I=D+O;S===!0?h.push(I,I+1,V):h.push(I+1,I,V),b+=3}c.addGroup(p,b,S===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},us=class s extends ir{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ea=class s extends dt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let T=new L,S=new L,w=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],T),f(t[E+1],S),f(t[E+2],w),l(T,S,w,y)}function l(y,T,S,w){let E=w+1,x=[];for(let b=0;b<=E;b++){x[b]=[];let N=y.clone().lerp(S,b/E),R=T.clone().lerp(S,b/E),D=E-b;for(let O=0;O<=D;O++)O===0&&b===E?x[b][O]=N:x[b][O]=N.clone().lerp(R,O/D)}for(let b=0;b<E;b++)for(let N=0;N<2*(E-b)-1;N++){let R=Math.floor(N/2);N%2===0?(u(x[b][R+1]),u(x[b+1][R]),u(x[b][R])):(u(x[b][R+1]),u(x[b+1][R+1]),u(x[b+1][R]))}}function c(y){let T=new L;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(y),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function h(){let y=new L;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];let S=m(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;a.push(S,1-w)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){let T=a[y+0],S=a[y+2],w=a[y+4],E=Math.max(T,S,w),x=Math.min(T,S,w);E>.9&&x<.1&&(T<.2&&(a[y+0]+=1),S<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,T){let S=y*3;T.x=e[S+0],T.y=e[S+1],T.z=e[S+2]}function g(){let y=new L,T=new L,S=new L,w=new L,E=new ve,x=new ve,b=new ve;for(let N=0,R=0;N<r.length;N+=9,R+=6){y.set(r[N+0],r[N+1],r[N+2]),T.set(r[N+3],r[N+4],r[N+5]),S.set(r[N+6],r[N+7],r[N+8]),E.set(a[R+0],a[R+1]),x.set(a[R+2],a[R+3]),b.set(a[R+4],a[R+5]),w.copy(y).add(T).add(S).divideScalar(3);let D=m(w);_(E,R+0,y,D),_(x,R+2,T,D),_(b,R+4,S,D)}}function _(y,T,S,w){w<0&&y.x===1&&(a[T]=y.x-1),S.x===0&&S.z===0&&(a[T]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var ds=class s extends ea{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var ta=class s extends ea{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},fs=class s extends dt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*u-a;for(let T=0;T<c;T++){let S=T*d-r;g.push(S,-y,0),_.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let T=y+c*p,S=y+c*(p+1),w=y+1+c*(p+1),E=y+1+c*p;f.push(T,S,E),f.push(S,w,E)}this.setIndex(f),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ai=class s extends dt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new L,u=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let y=[],T=p/i,S=a+T*o,w=e*Math.cos(S),E=Math.sqrt(e*e-w*w),x=0;p===0&&a===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let N=b/t,R=n+N*r;d.x=-E*Math.cos(R),d.y=w,d.z=E*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(N+x,1-T),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let T=h[p][y+1],S=h[p][y],w=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&f.push(T,S,E),(p!==i-1||l<Math.PI)&&f.push(S,w,E)}this.setIndex(f),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var gi=class s extends dt{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],d=[],u=new L,f=new L,g=new L;for(let _=0;_<=i;_++){let m=a+_/i*o;for(let p=0;p<=n;p++){let y=p/n*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/n),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=n;m++){let p=(n+1)*_+m-1,y=(n+1)*(_-1)+m-1,T=(n+1)*(_-1)+m,S=(n+1)*_+m;l.push(p,y,S),l.push(y,T,S)}this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},ia=class s extends dt{constructor(e=1,t=.4,i=64,n=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],d=new L,u=new L,f=new L,g=new L,_=new L,m=new L,p=new L;for(let T=0;T<=i;++T){let S=T/i*r*Math.PI*2;y(S,r,a,e,f),y(S+.01,r,a,e,g),m.subVectors(g,f),p.addVectors(g,f),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let w=0;w<=n;++w){let E=w/n*Math.PI*2,x=-t*Math.cos(E),b=t*Math.sin(E);d.x=f.x+(x*p.x+b*_.x),d.y=f.y+(x*p.y+b*_.y),d.z=f.z+(x*p.z+b*_.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(T/i),h.push(w/n)}}for(let T=1;T<=i;T++)for(let S=1;S<=n;S++){let w=(n+1)*(T-1)+(S-1),E=(n+1)*T+(S-1),x=(n+1)*T+S,b=(n+1)*(T-1)+S;o.push(w,E,b),o.push(E,x,b)}this.setIndex(o),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(h,2));function y(T,S,w,E,x){let b=Math.cos(T),N=Math.sin(T),R=w/S*T,D=Math.cos(R);x.x=E*(2+D)*.5*b,x.y=E*(2+D)*N*.5,x.z=E*Math.sin(R)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}};function ys(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(sd(n))n.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(sd(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Jt(s){let e={};for(let t=0;t<s.length;t++){let i=ys(s[t]);for(let n in i)e[n]=i[n]}return e}function sd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function kp(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function lh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var wn={clone:ys,merge:Jt},Hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gt=class extends Zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new _e().setHex(n.value);break;case"v2":this.uniforms[i].value=new ve().fromArray(n.value);break;case"v3":this.uniforms[i].value=new L().fromArray(n.value);break;case"v4":this.uniforms[i].value=new st().fromArray(n.value);break;case"m3":this.uniforms[i].value=new De().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Be().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},nr=class extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},St=class extends Zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ii=class extends St{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ts('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ts('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var na=class extends Zt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=qo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Oo=class extends Zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fo=class extends Zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Un(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Fr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Vp(s){function e(n,r){return s[n]-s[r]}let t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function rd(s,e,t){let i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function Wp(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}var Yi=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bo=class extends Yi{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ic,endingEnd:Ic}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pc:r=e,o=2*t-i;break;case Lc:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pc:a=e,l=2*i-t;break;case Lc:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,y=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,T=(-1-f)*m+(1.5+f)*_+.5*g,S=f*m-f*_;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+y*a[c+w]+T*a[l+w]+S*a[d+w];return r}},zo=class extends Yi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},ko=class extends Yi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Ho=class extends Yi{interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-t)/(n-t),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],p=f*u+g*2,y=d[p],T=d[p+1],S=e*u+g*2,w=h[S],E=h[S+1],x=qp(i,t,y,w,n);r[g]=jd(x,_,T,E,m)}return r}};function jd(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function Xp(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function qp(s,e,t,i,n){let r=(s-e)/(n-e);for(let a=0;a<8;a++){let o=jd(r,e,t,i,n)-s;if(Math.abs(o)<1e-10)break;let l=Xp(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var oi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Un(t,this.TimeBufferType),this.values=Un(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Un(e.times,Array),values:Un(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),Fr(e.settings)&&(i.settings={inTangents:Un(e.settings.inTangents,Array),outTangents:Un(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ho(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case is:t=this.InterpolantFactoryMethodDiscrete;break;case ns:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth;break;case Cc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ae("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return ns;case this.InterpolantFactoryMethodSmooth:return Mo;case this.InterpolantFactoryMethodBezier:return Cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;Fr(this.settings)&&(ad(this.settings.inTangents,e),ad(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;Fr(this.settings)&&(od(this.settings.inTangents,e),od(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&np(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Mo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,Fr(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function ad(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]+=e}function od(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=ns;var xn=class extends oi{constructor(e,t,i){super(e,t,i)}};xn.prototype.ValueTypeName="bool";xn.prototype.ValueBufferType=Array;xn.prototype.DefaultInterpolation=is;xn.prototype.InterpolantFactoryMethodLinear=void 0;xn.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends oi{constructor(e,t,i,n){super(e,t,i,n)}};sa.prototype.ValueTypeName="color";var _n=class extends oi{constructor(e,t,i,n){super(e,t,i,n)}};_n.prototype.ValueTypeName="number";var Go=class extends Yi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)pi.slerpFlat(r,0,a,c-o,a,c,l);return r}},vn=class extends oi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}};vn.prototype.ValueTypeName="quaternion";vn.prototype.InterpolantFactoryMethodSmooth=void 0;var yn=class extends oi{constructor(e,t,i){super(e,t,i)}};yn.prototype.ValueTypeName="string";yn.prototype.ValueBufferType=Array;yn.prototype.DefaultInterpolation=is;yn.prototype.InterpolantFactoryMethodLinear=void 0;yn.prototype.InterpolantFactoryMethodSmooth=void 0;var kn=class extends oi{constructor(e,t,i,n){super(e,t,i,n)}};kn.prototype.ValueTypeName="vector";var ra=class{constructor(e="",t=-1,i=[],n=Fd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=ji(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push($p(i[a]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(oi.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Vp(l);l=rd(l,1,h),c=rd(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new _n(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=n[d];u||(n[d]=u=[]),u.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Yp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _n;case"vector":case"vector2":case"vector3":case"vector4":return kn;case"color":return sa;case"quaternion":return vn;case"bool":case"boolean":return xn;case"string":return yn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function $p(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Yp(s.type);if(s.times===void 0){let i=[],n=[];Wp(s.keys,i,n,"value"),s.times=i,s.values=n}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Fr(s.settings)&&(t.settings={inTangents:Un(s.settings.inTangents,Float32Array),outTangents:Un(s.settings.outTangents,Float32Array)}),t}var Vi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(ld(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!ld(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function ld(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Vo=class{constructor(e,t,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qd=new Vo,$i=class{constructor(e){this.manager=e!==void 0?e:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};$i.DEFAULT_MATERIAL_NAME="__DEFAULT";var un={},Dc=class extends Error{constructor(e,t){super(e),this.response=t}},sr=class extends $i{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Vi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(un[e]!==void 0){un[e].push({onLoad:t,onProgress:i,onError:n});return}un[e]=[],un[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=un[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,_=0,m=new ReadableStream({start(p){y();function y(){d.read().then(({done:T,value:S})=>{if(T)p.close();else{_+=S.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,x=h.length;E<x;E++){let b=h[E];b.onProgress&&b.onProgress(w)}p.enqueue(S),y()}},T=>{p.error(T)})}}});return new Response(m)}else throw new Dc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Vi.add(`file:${e}`,c);let h=un[e];delete un[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=un[e];if(h===void 0)throw this.manager.itemError(e),c;delete un[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hs=new WeakMap,Wo=class extends $i{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Hs.get(a);d===void 0&&(d=[],Hs.set(a,d)),d.push({onLoad:t,onError:n})}return a}let o=$s("img");function l(){h(),t&&t(this);let d=Hs.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Hs.delete(this),r.manager.itemEnd(e)}function c(d){h(),n&&n(d),Vi.remove(`image:${e}`);let u=Hs.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Vi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var aa=class extends $i{constructor(e){super(e)}load(e,t,i,n){let r=new Lt,a=new Wo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},ps=class extends rt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},oa=class extends ps{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},wc=new Be,cd=new L,hd=new L,rr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fn,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(cd),hd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(wc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===Ys||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vo=new L,yo=new pi,Gi=new L,la=class extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vo,yo,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(vo,yo,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Dn=new L,ud=new ve,dd=new ve,It=class extends la{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,ud,dd),t.subVectors(dd,ud)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Br*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Uc=class extends rr{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ss*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ca=class extends ps{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Uc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Oc=class extends rr{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0}},Ki=class extends ps{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Oc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Mn=class extends la{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fc=class extends rr{constructor(){super(new Mn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hn=class extends ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new Fc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Sn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ac=new WeakMap,ha=class extends $i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Ac.has(a)===!0?(n&&n(Ac.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Ac.set(l,c),Vi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Vi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Gs=-90,Vs=1,ar=class extends rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new It(Gs,Vs,e,t);n.layers=this.layers,this.add(n);let r=new It(Gs,Vs,e,t);r.layers=this.layers,this.add(r);let a=new It(Gs,Vs,e,t);a.layers=this.layers,this.add(a);let o=new It(Gs,Vs,e,t);o.layers=this.layers,this.add(o);let l=new It(Gs,Vs,e,t);l.layers=this.layers,this.add(l);let c=new It(Gs,Vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Xo=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ua=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Kp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Kp(){this._document.hidden===!1&&this.reset()}var ch="\\[\\]\\.:\\/",Zp=new RegExp("["+ch+"]","g"),hh="[^"+ch+"]",Jp="[^"+ch.replace("\\.","")+"]",jp=/((?:WC+[\/:])*)/.source.replace("WC",hh),Qp=/(WCOD+)?/.source.replace("WCOD",Jp),em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),tm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),im=new RegExp("^"+jp+Qp+em+tm+"$"),nm=["material","materials","bones","map"],Bc=class{constructor(e,t,i){let n=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zp,"")}static parseTrackName(e){let t=im.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);nm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Bc;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vv=new Float32Array(1);var zc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};function uh(s,e,t,i){let n=sm(i);switch(t){case Zc:return s*e;case Qo:return s*e/n.components*n.byteLength;case el:return s*e/n.components*n.byteLength;case Gn:return s*e*2/n.components*n.byteLength;case tl:return s*e*2/n.components*n.byteLength;case Jc:return s*e*3/n.components*n.byteLength;case Ii:return s*e*4/n.components*n.byteLength;case il:return s*e*4/n.components*n.byteLength;case va:case ya:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ma:case Sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sl:case al:return Math.max(s,16)*Math.max(e,8)/4;case nl:case rl:return Math.max(s,8)*Math.max(e,8)/2;case ol:case ll:case hl:case ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cl:case ba:case dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _l:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Al:case Rl:case Cl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Il:case Pl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ta:case Ll:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sm(s){switch(s){case ci:case qc:return{byteLength:1,components:1};case ur:case Yc:case Xt:return{byteLength:2,components:1};case Jo:case jo:return{byteLength:2,components:4};case ki:case Zo:case xi:return{byteLength:4,components:1};case $c:case Kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Sf(){let s=null,e=!1,t=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function am(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ym=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Im=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Om="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,km=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ym=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ng=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,og=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ug=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,f0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,m0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,E0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,P0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:om,alphahash_pars_fragment:lm,alphamap_fragment:cm,alphamap_pars_fragment:hm,alphatest_fragment:um,alphatest_pars_fragment:dm,aomap_fragment:fm,aomap_pars_fragment:pm,batching_pars_vertex:mm,batching_vertex:gm,begin_vertex:xm,beginnormal_vertex:_m,bsdfs:vm,iridescence_fragment:ym,bumpmap_pars_fragment:Mm,clipping_planes_fragment:Sm,clipping_planes_pars_fragment:bm,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Em,color_fragment:wm,color_pars_fragment:Am,color_pars_vertex:Rm,color_vertex:Cm,common:Im,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Lm,displacementmap_vertex:Nm,emissivemap_fragment:Dm,emissivemap_pars_fragment:Um,colorspace_fragment:Om,colorspace_pars_fragment:Fm,envmap_fragment:Bm,envmap_common_pars_fragment:zm,envmap_pars_fragment:km,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:jm,envmap_vertex:Gm,fog_vertex:Vm,fog_pars_vertex:Wm,fog_fragment:Xm,fog_pars_fragment:qm,gradientmap_pars_fragment:Ym,lightmap_pars_fragment:$m,lights_lambert_fragment:Km,lights_lambert_pars_fragment:Zm,lights_pars_begin:Jm,lights_toon_fragment:Qm,lights_toon_pars_fragment:eg,lights_phong_fragment:tg,lights_phong_pars_fragment:ig,lights_physical_fragment:ng,lights_physical_pars_fragment:sg,lights_fragment_begin:rg,lights_fragment_maps:ag,lights_fragment_end:og,lightprobes_pars_fragment:lg,logdepthbuf_fragment:cg,logdepthbuf_pars_fragment:hg,logdepthbuf_pars_vertex:ug,logdepthbuf_vertex:dg,map_fragment:fg,map_pars_fragment:pg,map_particle_fragment:mg,map_particle_pars_fragment:gg,metalnessmap_fragment:xg,metalnessmap_pars_fragment:_g,morphinstance_vertex:vg,morphcolor_vertex:yg,morphnormal_vertex:Mg,morphtarget_pars_vertex:Sg,morphtarget_vertex:bg,normal_fragment_begin:Tg,normal_fragment_maps:Eg,normal_pars_fragment:wg,normal_pars_vertex:Ag,normal_vertex:Rg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Pg,clearcoat_pars_fragment:Lg,iridescence_pars_fragment:Ng,opaque_fragment:Dg,packing:Ug,premultiplied_alpha_fragment:Og,project_vertex:Fg,dithering_fragment:Bg,dithering_pars_fragment:zg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Vg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Xg,skinbase_vertex:qg,skinning_pars_vertex:Yg,skinning_vertex:$g,skinnormal_vertex:Kg,specularmap_fragment:Zg,specularmap_pars_fragment:Jg,tonemapping_fragment:jg,tonemapping_pars_fragment:Qg,transmission_fragment:e0,transmission_pars_fragment:t0,uv_pars_fragment:i0,uv_pars_vertex:n0,uv_vertex:s0,worldpos_vertex:r0,background_vert:a0,background_frag:o0,backgroundCube_vert:l0,backgroundCube_frag:c0,cube_vert:h0,cube_frag:u0,depth_vert:d0,depth_frag:f0,distance_vert:p0,distance_frag:m0,equirect_vert:g0,equirect_frag:x0,linedashed_vert:_0,linedashed_frag:v0,meshbasic_vert:y0,meshbasic_frag:M0,meshlambert_vert:S0,meshlambert_frag:b0,meshmatcap_vert:T0,meshmatcap_frag:E0,meshnormal_vert:w0,meshnormal_frag:A0,meshphong_vert:R0,meshphong_frag:C0,meshphysical_vert:I0,meshphysical_frag:P0,meshtoon_vert:L0,meshtoon_frag:N0,points_vert:D0,points_frag:U0,shadow_vert:O0,shadow_frag:F0,sprite_vert:B0,sprite_frag:z0},pe={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},en={basic:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Jt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Jt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Jt([pe.points,pe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Jt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Jt([pe.common,pe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Jt([pe.sprite,pe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Jt([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Jt([pe.lights,pe.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};en.physical={uniforms:Jt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Ul={r:0,b:0,g:0},k0=new Be,bf=new De;bf.set(-1,0,0,0,1,0,0,0,1);function H0(s,e,t,i,n,r){let a=new _e(0),o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let S=y.backgroundBlurriness>0;T=e.get(T,S)}return T}function g(y){let T=!1,S=f(y);S===null?m(a,o):S&&S.isColor&&(m(S,1),T=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(y,T){let S=f(T);S&&S.isCubeTexture?(c===void 0&&(c=new Me(new zi(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:ys(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bf),c.material.toneMapped=He.getTransfer(S.colorSpace)!==et,(h!==S||d!==S.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Me(new fs(2,2),new Gt({name:"BackgroundMaterial",uniforms:ys(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=He.getTransfer(S.colorSpace)!==et,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,T){y.getRGB(Ul,lh(s)),t.buffers.color.setClear(Ul.r,Ul.g,Ul.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:_,dispose:p}}function G0(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null),r=n,a=!1;function o(D,O,V,I,G){let q=!1,H=d(D,I,V,O);r!==H&&(r=H,c(r.object)),q=f(D,I,V,G),q&&g(D,I,V,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(D,O,V,I),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,O,V,I){let G=I.wireframe===!0,q=i[O.id];q===void 0&&(q={},i[O.id]=q);let H=D.isInstancedMesh===!0?D.id:0,te=q[H];te===void 0&&(te={},q[H]=te);let X=te[V.id];X===void 0&&(X={},te[V.id]=X);let j=X[G];return j===void 0&&(j=u(l()),X[G]=j),j}function u(D){let O=[],V=[],I=[];for(let G=0;G<t;G++)O[G]=0,V[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,O,V,I){let G=r.attributes,q=O.attributes,H=0,te=V.getAttributes();for(let X in te)if(te[X].location>=0){let Q=G[X],Ee=q[X];if(Ee===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Ee=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Ee=D.instanceColor)),Q===void 0||Q.attribute!==Ee||Ee&&Q.data!==Ee.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function g(D,O,V,I){let G={},q=O.attributes,H=0,te=V.getAttributes();for(let X in te)if(te[X].location>=0){let Q=q[X];Q===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let Ee={};Ee.attribute=Q,Q&&Q.data&&(Ee.data=Q.data),G[X]=Ee,H++}r.attributes=G,r.attributesNum=H,r.index=I}function _(){let D=r.newAttributes;for(let O=0,V=D.length;O<V;O++)D[O]=0}function m(D){p(D,0)}function p(D,O){let V=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;V[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),G[D]!==O&&(s.vertexAttribDivisor(D,O),G[D]=O)}function y(){let D=r.newAttributes,O=r.enabledAttributes;for(let V=0,I=O.length;V<I;V++)O[V]!==D[V]&&(s.disableVertexAttribArray(V),O[V]=0)}function T(D,O,V,I,G,q,H){H===!0?s.vertexAttribIPointer(D,O,V,G,q):s.vertexAttribPointer(D,O,V,I,G,q)}function S(D,O,V,I){_();let G=I.attributes,q=V.getAttributes(),H=O.defaultAttributeValues;for(let te in q){let X=q[te];if(X.location>=0){let j=G[te];if(j===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let Q=j.normalized,Ee=j.itemSize,Oe=e.get(j);if(Oe===void 0)continue;let K=Oe.buffer,me=Oe.type,Se=Oe.bytesPerElement,Ie=me===s.INT||me===s.UNSIGNED_INT||j.gpuType===Zo;if(j.isInterleavedBufferAttribute){let ge=j.data,ze=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,bt=j.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Le=0;Le<X.locationSize;Le++)p(X.location+Le,ge.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Le=0;Le<X.locationSize;Le++)m(X.location+Le);s.bindBuffer(s.ARRAY_BUFFER,K);for(let Le=0;Le<X.locationSize;Le++)T(X.location+Le,Ee/X.locationSize,me,Q,ze*Se,(bt+Ee/X.locationSize*Le)*Se,Ie)}else{if(j.isInstancedBufferAttribute){for(let ge=0;ge<X.locationSize;ge++)p(X.location+ge,j.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<X.locationSize;ge++)m(X.location+ge);s.bindBuffer(s.ARRAY_BUFFER,K);for(let ge=0;ge<X.locationSize;ge++)T(X.location+ge,Ee/X.locationSize,me,Q,Ee*Se,Ee/X.locationSize*ge*Se,Ie)}}else if(H!==void 0){let Q=H[te];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(X.location,Q);break;case 3:s.vertexAttrib3fv(X.location,Q);break;case 4:s.vertexAttrib4fv(X.location,Q);break;default:s.vertexAttrib1fv(X.location,Q)}}}}y()}function w(){N();for(let D in i){let O=i[D];for(let V in O){let I=O[V];for(let G in I){let q=I[G];for(let H in q)h(q[H].object),delete q[H];delete I[G]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let O=i[D.id];for(let V in O){let I=O[V];for(let G in I){let q=I[G];for(let H in q)h(q[H].object),delete q[H];delete I[G]}}delete i[D.id]}function x(D){for(let O in i){let V=i[O];for(let I in V){let G=V[I];if(G[D.id]===void 0)continue;let q=G[D.id];for(let H in q)h(q[H].object),delete q[H];delete G[D.id]}}}function b(D){for(let O in i){let V=i[O],I=D.isInstancedMesh===!0?D.id:0,G=V[I];if(G!==void 0){for(let q in G){let H=G[q];for(let te in H)h(H[te].object),delete H[te];delete G[q]}delete V[I],Object.keys(V).length===0&&delete i[O]}}}function N(){R(),a=!0,r!==n&&(r=n,c(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:N,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function V0(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function W0(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(x){return!(x!==Ii&&i.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===Xt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==ci&&x!==xi&&!b&&i.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ae("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:S,maxSamples:w,samples:E}}function X0(s){let e=this,t=null,i=0,n=!1,r=!1,a=new Fi,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,T=y*4,S=p.clippingState||null;l.value=S,S=h(g,u,T,f);for(let w=0;w!==T;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,S=f;T!==_;++T,S+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Ia=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Jr(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new zi(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:bn});r.uniforms.tEquirect.value=t;let a=new Me(n,r),o=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Pt),new ar(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},ef=256,q0=3,Y0=20,Tf=256,Ef=16,$0=3,K0=new L,Z0=new _e,pr=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ar(1,10,null),this._boxMesh=new Me(new zi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:a=256,position:o=K0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Z0));let m=new ar(i,n,h);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ef,rh(e))}_fromTexture(e,t){e.mapping===xs||e.mapping===cr?this._setSize(e.image.length===0?ef:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=tf(e,!1,!1),i=Math.log2(e)-q0;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=tf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===xs||e.mapping===cr?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=nf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=J0(),this._integrationMaterial=j0());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ef);for(let a=0;a<=i;a++){let o=s.lodToRoughness(a,i);if(a>i-$0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Tf*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Q0());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}};function tf(s,e,t){return new Ia(s,{minFilter:Ci,generateMipmaps:e,type:Xt,colorSpace:ti,depthBuffer:t})}function Pa(s,e,t){return new Gt({name:s,uniforms:e,vertexShader:Ve.cube_vert,fragmentShader:t,side:Dt,blending:bn,depthTest:!1,depthWrite:!1})}function J0(){return Pa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Tf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function j0(){return Pa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ef}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Q0(){return Pa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Y0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function nf(){return Pa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function sf(){return Pa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ex(s){let e=new WeakMap,t=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Yo||f===$o)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new Ia(g.height);return _.fromEquirectangularTexture(s,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===Yo||f===$o,_=f===xs||f===cr;if(g||_){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new pr(s)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return g&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new pr(s)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Yo?u.mapping=xs:f===$o&&(u.mapping=cr),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function tx(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&ts("WebGLRenderer: "+i+" extension not supported."),n}}}function ix(s,e,t,i){let n={},r=new WeakMap,a=new FinalizationRegistry(g=>delete n[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete n[g.id],a.unregister(g);let _=r.get(g);_&&(e.remove(_),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,_){return n[_.id]!==void 0||(_.addEventListener("dispose",o),n[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(g){let _=g.attributes;for(let m in _)e.update(_[m],s.ARRAY_BUFFER)}function d(g){let _=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,T=m.count>=65535?qr:Xr,S=new T(Math.ceil(y/3)*6,1),w=S.array;if(_!==null){let x=_.array;p=_.version;for(let b=0,N=0;b<y;b+=3){let R=x[b+0],D=x[b+1],O=x[b+2];w[N++]=R,w[N++]=D,w[N++]=D,w[N++]=O,w[N++]=O,w[N++]=R}}else{p=m.version;for(let x=0,b=0;x<y;x+=3){let N=x+0,R=x+1,D=x+2;w[b++]=N,w[b++]=R,w[b++]=R,w[b++]=D,w[b++]=D,w[b++]=N}}S.version=p;let E=r.get(g);E&&e.remove(E),r.set(g,S)}function u(g){let _=r.get(g);if(_){let m=g.index;m!==null&&_.version<m.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in n){let _=n[g].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function nx(s,e,t){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(i,u,r,d*a),t.update(u,i,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(i,u,r,d*a,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];t.update(_,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function sx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function rx(s,e,t){let i=new WeakMap,n=new st;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let N=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let S=o.attributes.position.count*T,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let E=new Float32Array(S*w*4*d),x=new Gr(E,S,w,d);x.type=xi,x.needsUpdate=!0;let b=T*4;for(let R=0;R<d;R++){let D=m[R],O=p[R],V=y[R],I=S*w*4*R;for(let G=0;G<D.count;G++){let q=G*b;f===!0&&(n.fromBufferAttribute(D,G),E[I+q+0]=n.x,E[I+q+1]=n.y,E[I+q+2]=n.z,E[I+q+3]=0),g===!0&&(n.fromBufferAttribute(O,G),E[I+q+4]=n.x,E[I+q+5]=n.y,E[I+q+6]=n.z,E[I+q+7]=0),_===!0&&(n.fromBufferAttribute(V,G),E[I+q+8]=n.x,E[I+q+9]=n.y,E[I+q+10]=n.z,E[I+q+11]=V.itemSize===4?n.w:1)}}u={count:d,texture:x,size:new ve(S,w)},i.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function ax(s,e,t,i,n){let r=new WeakMap;function a(c){let h=n.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var ox={[fa]:"LINEAR_TONE_MAPPING",[pa]:"REINHARD_TONE_MAPPING",[ma]:"CINEON_TONE_MAPPING",[gs]:"ACES_FILMIC_TONE_MAPPING",[xa]:"AGX_TONE_MAPPING",[_a]:"NEUTRAL_TONE_MAPPING",[ga]:"CUSTOM_TONE_MAPPING"};function lx(s,e,t,i,n,r){let a=new Nt(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new dt;h.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new je([0,2,0,0,2,0],2));let d=new nr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Me(h,d),f=new Mn(-1,1,1,-1,0,1),g=null,_=null,m=!1,p,y=null,T=[],S=!1;this.setSize=function(w,E){a.setSize(w,E),o!==null&&o.setSize(w,E),l!==null&&l.setSize(w,E);for(let x=0;x<T.length;x++){let b=T[x];b.setSize&&b.setSize(w,E)}},this.setEffects=function(w){T=w,S=T.length>0&&T[0].isRenderPass===!0;let E=a.width,x=a.height;T.length>0&&o===null&&(o=new Nt(E,x,{type:Xt,depthBuffer:!1,stencilBuffer:!1}),l=new Nt(E,x,{type:Xt,depthBuffer:!1,stencilBuffer:!1}));let b=n===!0&&T.some(N=>N.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new gn(E,x),r===!0&&(c.format=Tn,c.type=vs)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let N=0;N<T.length;N++){let R=T[N];R.setSize&&R.setSize(E,x),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,E){if(m||w.toneMapping===Ji&&T.length===0)return!1;if(y=E,E!==null){let x=E.width,b=E.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return S===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=Ji,!0},this.hasRenderPass=function(){return S},this.end=function(w,E){w.toneMapping=p,m=!0;let x=a,b=o;for(let N=0;N<T.length;N++){let R=T[N];R.enabled!==!1&&(R.render(w,b,x,E),R.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(g!==w.outputColorSpace||_!==w.toneMapping){g=w.outputColorSpace,_=w.toneMapping,d.defines={},He.getTransfer(g)===et&&(d.defines.SRGB_TRANSFER="");let N=ox[_];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(y),w.render(u,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var wf=new Lt,Af=new gn(1,1),Rf=new jr(1),Cf=new Gr,If=new Lo,Pf=new Jr,rf=[],af=[],of=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);function mr(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=rf[n];if(r===void 0&&(r=new Float32Array(n),rf[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ut(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Bl(s,e){let t=af[e];t===void 0&&(t=new Int32Array(e),af[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function cx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function hx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function dx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function fx(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;cf.set(i),s.uniformMatrix2fv(this.addr,!1,cf),Ot(t,i)}}function px(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;lf.set(i),s.uniformMatrix3fv(this.addr,!1,lf),Ot(t,i)}}function mx(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;of.set(i),s.uniformMatrix4fv(this.addr,!1,of),Ot(t,i)}}function gx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function _x(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function vx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function yx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Mx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function Sx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function bx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function zl(s){return s.version===0&&(s.compareFunction=th,s.needsUpdate=!0),s}function Tx(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=zl(Af):r=wf,t.setTexture2D(e||r,n)}function Ex(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||If,n)}function wx(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=zl(Rf):r=Pf,t.setTextureCube(e||r,n)}function Ax(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Cf,n)}function Rx(s){switch(s){case 5126:return cx;case 35664:return hx;case 35665:return ux;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return xx;case 35668:case 35672:return _x;case 35669:case 35673:return vx;case 5125:return yx;case 36294:return Mx;case 36295:return Sx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Ax}}function Cx(s,e){s.uniform1fv(this.addr,e)}function Ix(s,e){let t=mr(e,this.size,2);s.uniform2fv(this.addr,t)}function Px(s,e){let t=mr(e,this.size,3);s.uniform3fv(this.addr,t)}function Lx(s,e){let t=mr(e,this.size,4);s.uniform4fv(this.addr,t)}function Nx(s,e){let t=mr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Dx(s,e){let t=mr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ux(s,e){let t=mr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ox(s,e){s.uniform1iv(this.addr,e)}function Fx(s,e){s.uniform2iv(this.addr,e)}function Bx(s,e){s.uniform3iv(this.addr,e)}function zx(s,e){s.uniform4iv(this.addr,e)}function kx(s,e){s.uniform1uiv(this.addr,e)}function Hx(s,e){s.uniform2uiv(this.addr,e)}function Gx(s,e){s.uniform3uiv(this.addr,e)}function Vx(s,e){s.uniform4uiv(this.addr,e)}function Wx(s,e,t){let i=this.cache,n=e.length,r=Bl(t,n);Ut(i,r)||(s.uniform1iv(this.addr,r),Ot(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=zl(Af):a=wf;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function Xx(s,e,t){let i=this.cache,n=e.length,r=Bl(t,n);Ut(i,r)||(s.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||If,r[a])}function qx(s,e,t){let i=this.cache,n=e.length,r=Bl(t,n);Ut(i,r)||(s.uniform1iv(this.addr,r),Ot(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=zl(Rf):a=Pf;for(let o=0;o!==n;++o)t.setTextureCube(e[o]||a,r[o])}function Yx(s,e,t){let i=this.cache,n=e.length,r=Bl(t,n);Ut(i,r)||(s.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Cf,r[a])}function $x(s){switch(s){case 5126:return Cx;case 35664:return Ix;case 35665:return Px;case 35666:return Lx;case 35674:return Nx;case 35675:return Dx;case 35676:return Ux;case 5124:case 35670:return Ox;case 35667:case 35671:return Fx;case 35668:case 35672:return Bx;case 35669:case 35673:return zx;case 5125:return kx;case 36294:return Hx;case 36295:return Gx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return Yx}}var ph=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rx(t.type)}},mh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$x(t.type)}},gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},dh=/(\w+)(\])?(\[|\.)?/g;function hf(s,e){s.seq.push(e),s.map[e.id]=e}function Kx(s,e,t){let i=s.name,n=i.length;for(dh.lastIndex=0;;){let r=dh.exec(i),a=dh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){hf(t,c===void 0?new ph(o,s,e):new mh(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new gh(o),hf(t,d)),t=d}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Kx(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function uf(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var Zx=37297,Jx=0;function jx(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var df=new De;function Qx(s){He._getMatrix(df,He.workingColorSpace,s);let e=`mat3( ${df.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(s)){case kr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ff(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+jx(s.getShaderSource(e),o)}else return r}function e_(s,e){let t=Qx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var t_={[fa]:"Linear",[pa]:"Reinhard",[ma]:"Cineon",[gs]:"ACESFilmic",[xa]:"AgX",[_a]:"Neutral",[ga]:"Custom"};function i_(s,e){let t=t_[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ol=new L;function n_(){He.getLuminanceCoefficients(Ol);let s=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function r_(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function a_(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ca(s){return s!==""}function pf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function mf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(s){return s.replace(o_,l_)}function l_(s,e){let t=Ve[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xh(t)}var c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(s){return s.replace(c_,h_)}function h_(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function xf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var u_={[da]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function d_(s){return u_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var f_={[cr]:"ENVMAP_MODE_REFRACTION"};function p_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":f_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var m_={[qo]:"ENVMAP_BLENDING_MULTIPLY",[Dd]:"ENVMAP_BLENDING_MIX",[Ud]:"ENVMAP_BLENDING_ADD"};function g_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":m_[s.combine]||"ENVMAP_BLENDING_NONE"}function x_(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=d_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=p_(t),d=g_(t),u=s_(t),f=r_(r),g=n.createProgram(),_,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ca).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ca).join(`
`),m.length>0&&(m+=`
`)):(_=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),m=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Ji?i_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,e_("linearToOutputTexel",t.outputColorSpace),n_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ca).join(`
`)),a=xh(a),a=pf(a,t),a=mf(a,t),o=xh(o),o=pf(o,t),o=mf(o,t),a=gf(a),o=gf(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=p+_+a,T=p+m+o,S=uf(n,n.VERTEX_SHADER,y),w=uf(n,n.FRAGMENT_SHADER,T);n.attachShader(g,S),n.attachShader(g,w),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function E(R){if(s.debug.checkShaderErrors){let D=n.getProgramInfoLog(g)||"",O=n.getShaderInfoLog(S)||"",V=n.getShaderInfoLog(w)||"",I=D.trim(),G=O.trim(),q=V.trim(),H=!0,te=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,S,w);else{let X=ff(n,S,"vertex"),j=ff(n,w,"fragment");Ne("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+X+`
`+j)}else I!==""?Ae("WebGLProgram: Program Info Log:",I):(G===""||q==="")&&(te=!1);te&&(R.diagnostics={runnable:H,programLog:I,vertexShader:{log:G,prefix:_},fragmentShader:{log:q,prefix:m}})}n.deleteShader(S),n.deleteShader(w),x=new fr(n,g),b=a_(n,g)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=n.getProgramParameter(g,Zx)),N},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=w,this}var __=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new vh(e),t.set(e,i)),i}},vh=class{constructor(e){this.id=__++,this.code=e,this.usedTimes=0}};function v_(s){return s===Gn||s===ba||s===Ta}function y_(s,e,t,i,n,r){let a=new Vr,o=new _h,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,N,R,D,O){let V=R.fog,I=D.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||G,q),te=u[x.type],X=i.precision;x.precision!==null&&(X=i.getMaxPrecision(x.precision),X!==x.precision&&Ae("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));let j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=j!==void 0?j.length:0,Ee=0;I.morphAttributes.position!==void 0&&(Ee=1),I.morphAttributes.normal!==void 0&&(Ee=2),I.morphAttributes.color!==void 0&&(Ee=3);let Oe,K,me,Se;if(te){let fe=en[te];Oe=fe.vertexShader,K=fe.fragmentShader}else{Oe=x.vertexShader,K=x.fragmentShader;let fe=o.getVertexShaderStage(x),nt=o.getFragmentShaderStage(x);o.update(x,fe,nt),me=fe.id,Se=nt.id}let Ie=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),ze=D.isInstancedMesh===!0,bt=D.isBatchedMesh===!0,Le=!!x.map,it=!!x.matcap,at=!!H,Ke=at&&H.isPMREMTexture===!0,Vt=!!x.aoMap,Rt=!!x.lightMap,ri=!!x.bumpMap&&x.wireframe===!1,gt=!!x.normalMap,Hi=!!x.displacementMap,Bt=!!x.emissiveMap,vi=!!x.metalnessMap,yi=!!x.roughnessMap,Mi=x.anisotropy>0,U=x.clearcoat>0,Si=x.diffuseRoughness>0,pt=x.dispersion>0,mt=x.retroreflectivity>0,de=x.iridescence>0,Ct=x.sheen>0,Pe=x.transmission>0,Ue=Mi&&!!x.anisotropyMap,A=U&&!!x.clearcoatMap,v=U&&!!x.clearcoatNormalMap,B=U&&!!x.clearcoatRoughnessMap,ee=Si&&!!x.diffuseRoughnessMap,J=de&&!!x.iridescenceMap,re=de&&!!x.iridescenceThicknessMap,he=Ct&&!!x.sheenColorMap,Y=Ct&&!!x.sheenRoughnessMap,$=!!x.specularMap,oe=!!x.specularColorMap,C=!!x.specularIntensityMap,Z=Pe&&!!x.transmissionMap,W=Pe&&!!x.thicknessMap,le=!!x.gradientMap,ne=!!x.alphaMap,ae=x.alphaTest>0,Re=!!x.alphaHash,Ge=!!x.extensions,ie=Ji;x.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(ie=s.toneMapping);let Ce=Ke?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,ke={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:Oe,fragmentShader:K,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:Se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:bt,batchingColor:bt&&D._colorsTexture!==null,instancing:ze,instancingColor:ze&&D.instanceColor!==null,instancingMorph:ze&&D.morphTexture!==null,outputColorSpace:Ie===null?s.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:it,envMap:at,envMapMode:at&&H.mapping,envMapPMREM:Ke,envMapMaxLod:Ke?Ce.length-1:null,envMapSize:Ke?Ce[0].width:null,aoMap:Vt,lightMap:Rt,bumpMap:ri,normalMap:gt,displacementMap:Hi,emissiveMap:Bt,normalMapObjectSpace:gt&&x.normalMapType===zd,normalMapTangentSpace:gt&&x.normalMapType===wa,packedNormalMap:gt&&x.normalMapType===wa&&v_(x.normalMap.format),metalnessMap:vi,roughnessMap:yi,anisotropy:Mi,anisotropyMap:Ue,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:v,clearcoatRoughnessMap:B,diffuseRoughness:Si,diffuseRoughnessMap:ee,dispersion:pt,retroreflection:mt,iridescence:de,iridescenceMap:J,iridescenceThicknessMap:re,sheen:Ct,sheenColorMap:he,sheenRoughnessMap:Y,specularMap:$,specularColorMap:oe,specularIntensityMap:C,transmission:Pe,transmissionMap:Z,thicknessMap:W,gradientMap:le,opaque:x.transparent===!1&&x.blending===lr&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:ae,alphaHash:Re,combine:x.combine,mapUv:Le&&f(x.map.channel),aoMapUv:Vt&&f(x.aoMap.channel),lightMapUv:Rt&&f(x.lightMap.channel),bumpMapUv:ri&&f(x.bumpMap.channel),normalMapUv:gt&&f(x.normalMap.channel),displacementMapUv:Hi&&f(x.displacementMap.channel),emissiveMapUv:Bt&&f(x.emissiveMap.channel),metalnessMapUv:vi&&f(x.metalnessMap.channel),roughnessMapUv:yi&&f(x.roughnessMap.channel),anisotropyMapUv:Ue&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:J&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(x.sheenRoughnessMap.channel),specularMapUv:$&&f(x.specularMap.channel),specularColorMapUv:oe&&f(x.specularColorMap.channel),specularIntensityMapUv:C&&f(x.specularIntensityMap.channel),transmissionMapUv:Z&&f(x.transmissionMap.channel),thicknessMapUv:W&&f(x.thicknessMap.channel),alphaMapUv:ne&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(gt||Mi),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Le||ne),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&gt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Ee,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(fe=>fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&He.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:Bt&&x.emissiveMap.isVideoTexture===!0&&He.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ri,flipSided:x.side===Dt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ge&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&x.extensions.multiDraw===!0||bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function _(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)b.push(N),b.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(m(b,x),p(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function p(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let b=u[x.type],N;if(b){let R=en[b];N=wn.clone(R.uniforms)}else N=x.uniforms;return N}function T(x,b){let N=h.get(b);return N!==void 0?++N.usedTimes:(N=new x_(s,b,x,n),c.push(N),h.set(b,N)),N}function S(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:y,acquireProgram:T,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:E}}function M_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function S_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function _f(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function vf(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,m,p){let y=s[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},s[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=a(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=m,y.group=p),e++,y}function l(u,f,g,_,m,p,y){y.reversedDepth===!0&&(m=-m);let T=o(u,f,g,_,m,p);g.transmission>0?i.push(T):g.transparent===!0?n.push(T):t.push(T)}function c(u,f,g,_,m,p){let y=o(u,f,g,_,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?n.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||S_),i.length>1&&i.sort(f||_f),n.length>1&&n.sort(f||_f)}function d(){for(let u=e,f=s.length;u<f;u++){let g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function b_(){let s=new WeakMap;function e(i,n){let r=s.get(i),a;return r===void 0?(a=new vf,s.set(i,[a])):n>=r.length?(a=new vf,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function T_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new _e};break;case"SpotLight":t={position:new L,direction:new L,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function E_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var w_=0;function A_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function R_(s){let e=new T_,t=E_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let n=new L,r=new Be,a=new Be;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,T=0,S=0,w=0,E=0,x=0,b=0,N=0,R=0;c.sort(A_);for(let O=0,V=c.length;O<V;O++){let I=c[O],G=I.color,q=I.intensity,H=I.distance,te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Gn?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*q,d+=G.g*q,u+=G.b*q;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],q);R++}else if(I.isSunLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,Q=t.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[g]=Q,i.sunShadowMap[g]=te;let Ee=j.getViewportCount();for(let Oe=0;Oe<Ee;Oe++)i.sunShadowMatrix[_+Oe]=j.getMatrix(Oe),i.sunShadowCascade[_+Oe]=j._cascadeData[Oe];_+=Ee,g++}i.sun[f]=X,f++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,Q=t.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=I.shadow.matrix,w++}i.directional[m]=X,m++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(G).multiplyScalar(q),X.distance=H,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[y]=X;let j=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,j.updateMatrices(I),I.castShadow&&N++),i.spotLightMatrix[y]=j.matrix,I.castShadow){let Q=t.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,i.spotShadow[y]=Q,i.spotShadowMap[y]=te,x++}y++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(G).multiplyScalar(q),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=X,T++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let j=I.shadow,Q=t.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,Q.shadowCameraNear=j.camera.near,Q.shadowCameraFar=j.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=te,i.pointShadowMatrix[p]=I.shadow.matrix,E++}i.point[p]=X,p++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(q),X.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[S]=X,S++}}T>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==y||D.rectAreaLength!==T||D.hemiLength!==S||D.numSunShadows!==g||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==x||D.numSpotMaps!==b||D.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=T,i.point.length=p,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-N,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=y,D.rectAreaLength=T,D.hemiLength=S,D.numSunShadows=g,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=x,D.numSpotMaps=b,D.numLightProbes=R,i.version=w_++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){let S=c[y];if(S.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),d++}else if(S.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),u++}else if(S.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let w=i.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function yf(s){let e=new R_(s),t=[],i=[],n=[];function r(d){h.camera=d,t.length=0,i.length=0,n.length=0}function a(d){d.isLightProbeGrid?n.push(d):t.push(d)}function o(d){i.push(d)}function l(){e.setup(t),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function C_(s){let e=new WeakMap;function t(n,r=0){let a=e.get(n),o;return a===void 0?(o=new yf(s),e.set(n,[o])):r>=a.length?(o=new yf(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var I_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,L_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],N_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Mf=new Be,Ra=new L,fh=new L;function D_(s,e,t){let i=new Fn,n=new ve,r=new ve,a=new st,o=new Oo,l=new Fo,c={},h=t.maxTextureSize,d={[Zi]:Dt,[Dt]:Zi,[Ri]:Ri},u=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:I_,fragmentShader:P_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new dt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Me(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=da;let p=this.type;this.render=function(E,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===md&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=da);let N=s.getRenderTarget(),R=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),O=s.state;O.setBlending(bn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=p!==this.type;V&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=E.length;I<G;I++){let q=E[I],H=q.shadow;if(H===void 0){Ae("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);let te=H.getFrameExtents();n.multiply(te),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/te.x),n.x=r.x*te.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/te.y),n.y=r.y*te.y,H.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===or){if(q.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Nt(n.x,n.y,{format:Gn,type:Xt,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new gn(n.x,n.y,xi),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=pn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Mt,H.map.depthTexture.magFilter=Mt}else q.isPointLight?(H.map=new Ia(n.x),H.map.depthTexture=new jr(n.x,ki)):(H.map=new Nt(n.x,n.y),H.map.depthTexture=new gn(n.x,n.y,ki)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=pn,this.type===da?(H.map.depthTexture.compareFunction=X?eh:Qc,H.map.depthTexture.minFilter=Pt,H.map.depthTexture.magFilter=Pt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Mt,H.map.depthTexture.magFilter=Mt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==n.x||H.map.height!==n.y)&&H.map.setSize(n.x,n.y);let j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();q.isPointLight!==!0&&H.updateMatrices(q,b);let Q=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:b.layers;for(let Ee=0;Ee<j;Ee++){let Oe=H.getCamera(Ee);if(q.isPointLight){let K=H.camera,me=H.matrix,Se=q.distance||K.far;Se!==K.far&&(K.far=Se,K.updateProjectionMatrix()),Ra.setFromMatrixPosition(q.matrixWorld),K.position.copy(Ra),fh.copy(K.position),fh.add(L_[Ee]),K.up.copy(N_[Ee]),K.lookAt(fh),K.updateMatrixWorld(),me.makeTranslation(-Ra.x,-Ra.y,-Ra.z),Mf.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Mf,K.coordinateSystem,K.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,Ee),s.clear();else{Ee===0&&(s.setRenderTarget(H.map),s.clear());let K=H.getViewport(Ee);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),O.viewport(a)}i=H.getFrustum(Ee),S(x,b,Oe,q,Q,this.type)}H.isPointLightShadow!==!0&&this.type===or&&y(H,b),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(N,R,D)};function y(E,x){let b=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Nt(n.x,n.y,{format:Gn,type:Xt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,b,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,b,f,_,null)}function T(E,x,b,N){let R=null,D=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=b.isPointLight===!0?l:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=R.uuid,V=x.uuid,I=c[O];I===void 0&&(I={},c[O]=I);let G=I[V];G===void 0&&(G=R.clone(),I[V]=G,x.addEventListener("dispose",w)),R=G}if(R.visible=x.visible,R.wireframe=x.wireframe,N===or?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:d[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=s.properties.get(R);O.light=b}return R}function S(E,x,b,N,R,D){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===or)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let I=e.update(E),G=E.material;if(Array.isArray(G)){let q=I.groups;for(let H=0,te=q.length;H<te;H++){let X=q[H],j=G[X.materialIndex];if(j&&j.visible){let Q=T(E,j,N,D);E.onBeforeShadow(s,E,x,b,I,Q,X),s.renderBufferDirect(b,null,I,Q,E,X),E.onAfterShadow(s,E,x,b,I,Q,X)}}}else if(G.visible){let q=T(E,G,N,D);E.onBeforeShadow(s,E,x,b,I,q,null),s.renderBufferDirect(b,null,I,q,E,null),E.onAfterShadow(s,E,x,b,I,q,null)}}let V=E.children;for(let I=0,G=V.length;I<G;I++)S(V[I],x,b,N,R,D)}function w(E){E.target.removeEventListener("dispose",w);for(let b in c){let N=c[b],R=E.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}function U_(s,e){function t(){let C=!1,Z=new st,W=null,le=new st(0,0,0,0);return{setMask:function(ne){W!==ne&&!C&&(s.colorMask(ne,ne,ne,ne),W=ne)},setLocked:function(ne){C=ne},setClear:function(ne,ae,Re,Ge,ie){ie===!0&&(ne*=Ge,ae*=Ge,Re*=Ge),Z.set(ne,ae,Re,Ge),le.equals(Z)===!1&&(s.clearColor(ne,ae,Re,Ge),le.copy(Z))},reset:function(){C=!1,W=null,le.set(-1,0,0,0)}}}function i(){let C=!1,Z=!1,W=null,le=null,ne=null;return{setReversed:function(ae){if(Z!==ae){let Re=e.get("EXT_clip_control");ae?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Z=ae;let Ge=ne;ne=null,this.setClear(Ge)}},getReversed:function(){return Z},setTest:function(ae){ae?ge(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(ae){W!==ae&&!C&&(s.depthMask(ae),W=ae)},setFunc:function(ae){if(Z&&(ae=Kd[ae]),le!==ae){switch(ae){case bo:s.depthFunc(s.NEVER);break;case To:s.depthFunc(s.ALWAYS);break;case Eo:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case wo:s.depthFunc(s.EQUAL);break;case Ao:s.depthFunc(s.GEQUAL);break;case Ro:s.depthFunc(s.GREATER);break;case Co:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=ae}},setLocked:function(ae){C=ae},setClear:function(ae){ne!==ae&&(ne=ae,Z&&(ae=1-ae),s.clearDepth(ae))},reset:function(){C=!1,W=null,le=null,ne=null,Z=!1}}}function n(){let C=!1,Z=null,W=null,le=null,ne=null,ae=null,Re=null,Ge=null,ie=null;return{setTest:function(Ce){C||(Ce?ge(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(Ce){Z!==Ce&&!C&&(s.stencilMask(Ce),Z=Ce)},setFunc:function(Ce,ke,fe){(W!==Ce||le!==ke||ne!==fe)&&(s.stencilFunc(Ce,ke,fe),W=Ce,le=ke,ne=fe)},setOp:function(Ce,ke,fe){(ae!==Ce||Re!==ke||Ge!==fe)&&(s.stencilOp(Ce,ke,fe),ae=Ce,Re=ke,Ge=fe)},setLocked:function(Ce){C=Ce},setClear:function(Ce){ie!==Ce&&(s.clearStencil(Ce),ie=Ce)},reset:function(){C=!1,Z=null,W=null,le=null,ne=null,ae=null,Re=null,Ge=null,ie=null}}}let r=new t,a=new i,o=new n,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,T=null,S=null,w=null,E=null,x=null,b=new _e(0,0,0),N=0,R=!1,D=null,O=null,V=null,I=null,G=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,te=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=te>=2);let j=null,Q={},Ee=s.getParameter(s.SCISSOR_BOX),Oe=s.getParameter(s.VIEWPORT),K=new st().fromArray(Ee),me=new st().fromArray(Oe);function Se(C,Z,W,le){let ne=new Uint8Array(4),ae=s.createTexture();s.bindTexture(C,ae),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<W;Re++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(Z,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,ne):s.texImage2D(Z+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ne);return ae}let Ie={};Ie[s.TEXTURE_2D]=Se(s.TEXTURE_2D,s.TEXTURE_2D,1),Ie[s.TEXTURE_CUBE_MAP]=Se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[s.TEXTURE_2D_ARRAY]=Se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ie[s.TEXTURE_3D]=Se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(s.DEPTH_TEST),a.setFunc(Xs),ri(!1),gt(kc),ge(s.CULL_FACE),Vt(bn);function ge(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function ze(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function bt(C,Z){return u[C]!==Z?(s.bindFramebuffer(C,Z),u[C]=Z,C===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Z),C===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Z),!0):!1}function Le(C,Z){let W=g,le=!1;if(C){W=f.get(Z),W===void 0&&(W=[],f.set(Z,W));let ne=C.textures;if(W.length!==ne.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,Re=ne.length;ae<Re;ae++)W[ae]=s.COLOR_ATTACHMENT0+ae;W.length=ne.length,le=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,le=!0);le&&s.drawBuffers(W)}function it(C){return _!==C?(s.useProgram(C),_=C,!0):!1}let at={[ms]:s.FUNC_ADD,[xd]:s.FUNC_SUBTRACT,[_d]:s.FUNC_REVERSE_SUBTRACT};at[vd]=s.MIN,at[yd]=s.MAX;let Ke={[Md]:s.ZERO,[Sd]:s.ONE,[bd]:s.SRC_COLOR,[Vc]:s.SRC_ALPHA,[Cd]:s.SRC_ALPHA_SATURATE,[Ad]:s.DST_COLOR,[Ed]:s.DST_ALPHA,[Td]:s.ONE_MINUS_SRC_COLOR,[Wc]:s.ONE_MINUS_SRC_ALPHA,[Rd]:s.ONE_MINUS_DST_COLOR,[wd]:s.ONE_MINUS_DST_ALPHA,[Id]:s.CONSTANT_COLOR,[Pd]:s.ONE_MINUS_CONSTANT_COLOR,[Ld]:s.CONSTANT_ALPHA,[Nd]:s.ONE_MINUS_CONSTANT_ALPHA};function Vt(C,Z,W,le,ne,ae,Re,Ge,ie,Ce){if(C===bn){m===!0&&(ze(s.BLEND),m=!1);return}if(m===!1&&(ge(s.BLEND),m=!0),C!==gd){if(C!==p||Ce!==R){if((y!==ms||w!==ms)&&(s.blendEquation(s.FUNC_ADD),y=ms,w=ms),Ce)switch(C){case lr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case li:s.blendFunc(s.ONE,s.ONE);break;case Hc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ne("WebGLState: Invalid blending: ",C);break}else switch(C){case lr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case li:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hc:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",C);break}T=null,S=null,E=null,x=null,b.set(0,0,0),N=0,p=C,R=Ce}return}ne=ne||Z,ae=ae||W,Re=Re||le,(Z!==y||ne!==w)&&(s.blendEquationSeparate(at[Z],at[ne]),y=Z,w=ne),(W!==T||le!==S||ae!==E||Re!==x)&&(s.blendFuncSeparate(Ke[W],Ke[le],Ke[ae],Ke[Re]),T=W,S=le,E=ae,x=Re),(Ge.equals(b)===!1||ie!==N)&&(s.blendColor(Ge.r,Ge.g,Ge.b,ie),b.copy(Ge),N=ie),p=C,R=!1}function Rt(C,Z){C.side===Ri?ze(s.CULL_FACE):ge(s.CULL_FACE);let W=C.side===Dt;Z&&(W=!W),ri(W),C.blending===lr&&C.transparent===!1?Vt(bn):Vt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let le=C.stencilWrite;o.setTest(le),le&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Bt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function ri(C){D!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),D=C)}function gt(C){C!==fd?(ge(s.CULL_FACE),C!==O&&(C===kc?s.cullFace(s.BACK):C===pd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),O=C}function Hi(C){C!==V&&(H&&s.lineWidth(C),V=C)}function Bt(C,Z,W){C?(ge(s.POLYGON_OFFSET_FILL),(I!==Z||G!==W)&&(I=Z,G=W,a.getReversed()&&(Z=-Z,W=-W),s.polygonOffset(Z,W))):ze(s.POLYGON_OFFSET_FILL)}function vi(C){C?ge(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function yi(C){C===void 0&&(C=s.TEXTURE0+q-1),j!==C&&(s.activeTexture(C),j=C)}function Mi(C,Z,W){W===void 0&&(j===null?W=s.TEXTURE0+q-1:W=j);let le=Q[W];le===void 0&&(le={type:void 0,texture:void 0},Q[W]=le),(le.type!==C||le.texture!==Z)&&(j!==W&&(s.activeTexture(W),j=W),s.bindTexture(C,Z||Ie[C]),le.type=C,le.texture=Z)}function U(){let C=Q[j];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Si(){try{s.compressedTexImage2D(...arguments)}catch(C){Ne("WebGLState:",C)}}function pt(){try{s.compressedTexImage3D(...arguments)}catch(C){Ne("WebGLState:",C)}}function mt(){try{s.texSubImage2D(...arguments)}catch(C){Ne("WebGLState:",C)}}function de(){try{s.texSubImage3D(...arguments)}catch(C){Ne("WebGLState:",C)}}function Ct(){try{s.compressedTexSubImage2D(...arguments)}catch(C){Ne("WebGLState:",C)}}function Pe(){try{s.compressedTexSubImage3D(...arguments)}catch(C){Ne("WebGLState:",C)}}function Ue(){try{s.texStorage2D(...arguments)}catch(C){Ne("WebGLState:",C)}}function A(){try{s.texStorage3D(...arguments)}catch(C){Ne("WebGLState:",C)}}function v(){try{s.texImage2D(...arguments)}catch(C){Ne("WebGLState:",C)}}function B(){try{s.texImage3D(...arguments)}catch(C){Ne("WebGLState:",C)}}function ee(C){return d[C]!==void 0?d[C]:s.getParameter(C)}function J(C,Z){d[C]!==Z&&(s.pixelStorei(C,Z),d[C]=Z)}function re(C){K.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),K.copy(C))}function he(C){me.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),me.copy(C))}function Y(C,Z){let W=c.get(Z);W===void 0&&(W=new WeakMap,c.set(Z,W));let le=W.get(C);le===void 0&&(le=s.getUniformBlockIndex(Z,C.name),s.uniformBlockBinding(Z,le,le),W.set(C,le))}function $(C,Z,W){let ne=c.get(Z).get(C);l[ne]!==W&&(s.bindBufferBase(s.UNIFORM_BUFFER,ne,W),l[ne]=W)}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,Q={},u={},l={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,T=null,S=null,w=null,E=null,x=null,b=new _e(0,0,0),N=0,R=!1,D=null,O=null,V=null,I=null,G=null,K.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ge,disable:ze,bindFramebuffer:bt,drawBuffers:Le,useProgram:it,setBlending:Vt,setMaterial:Rt,setFlipSided:ri,setCullFace:gt,setLineWidth:Hi,setPolygonOffset:Bt,setScissorTest:vi,activeTexture:yi,bindTexture:Mi,unbindTexture:U,compressedTexImage2D:Si,compressedTexImage3D:pt,texImage2D:v,texImage3D:B,pixelStorei:J,getParameter:ee,updateUBOMapping:Y,uniformBlockBinding:$,texStorage2D:Ue,texStorage3D:A,texSubImage2D:mt,texSubImage3D:de,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Pe,scissor:re,viewport:he,reset:oe}}function O_(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,_=new FinalizationRegistry(A=>g.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,v){return m?new OffscreenCanvas(A,v):$s("canvas")}function y(A,v,B){let ee=1,J=Ue(A);if((J.width>B||J.height>B)&&(ee=B/Math.max(J.width,J.height)),ee<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let re=Math.floor(ee*J.width),he=Math.floor(ee*J.height);u===void 0&&(u=p(re,he));let Y=v?p(re,he):u;return Y.width=re,Y.height=he,Y.getContext("2d").drawImage(A,0,0,re,he),Ae("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+re+"x"+he+")."),Y}else return"data"in A&&Ae("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function T(A){return A.generateMipmaps}function S(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(A,v,B,ee,J,re=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let he;ee&&(he=e.get("EXT_texture_norm16"),he||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===s.RED&&(B===s.FLOAT&&(Y=s.R32F),B===s.HALF_FLOAT&&(Y=s.R16F),B===s.UNSIGNED_BYTE&&(Y=s.R8),B===s.UNSIGNED_SHORT&&he&&(Y=he.R16_EXT),B===s.SHORT&&he&&(Y=he.R16_SNORM_EXT)),v===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.R8UI),B===s.UNSIGNED_SHORT&&(Y=s.R16UI),B===s.UNSIGNED_INT&&(Y=s.R32UI),B===s.BYTE&&(Y=s.R8I),B===s.SHORT&&(Y=s.R16I),B===s.INT&&(Y=s.R32I)),v===s.RG&&(B===s.FLOAT&&(Y=s.RG32F),B===s.HALF_FLOAT&&(Y=s.RG16F),B===s.UNSIGNED_BYTE&&(Y=s.RG8),B===s.UNSIGNED_SHORT&&he&&(Y=he.RG16_EXT),B===s.SHORT&&he&&(Y=he.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RG8UI),B===s.UNSIGNED_SHORT&&(Y=s.RG16UI),B===s.UNSIGNED_INT&&(Y=s.RG32UI),B===s.BYTE&&(Y=s.RG8I),B===s.SHORT&&(Y=s.RG16I),B===s.INT&&(Y=s.RG32I)),v===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),B===s.UNSIGNED_INT&&(Y=s.RGB32UI),B===s.BYTE&&(Y=s.RGB8I),B===s.SHORT&&(Y=s.RGB16I),B===s.INT&&(Y=s.RGB32I)),v===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),B===s.UNSIGNED_INT&&(Y=s.RGBA32UI),B===s.BYTE&&(Y=s.RGBA8I),B===s.SHORT&&(Y=s.RGBA16I),B===s.INT&&(Y=s.RGBA32I)),v===s.RGB&&(B===s.UNSIGNED_SHORT&&he&&(Y=he.RGB16_EXT),B===s.SHORT&&he&&(Y=he.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),v===s.RGBA){let $=re?kr:He.getTransfer(J);B===s.FLOAT&&(Y=s.RGBA32F),B===s.HALF_FLOAT&&(Y=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Y=$===et?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&he&&(Y=he.RGBA16_EXT),B===s.SHORT&&he&&(Y=he.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(A,v){let B;return A?v===null||v===ki||v===vs?B=s.DEPTH24_STENCIL8:v===xi?B=s.DEPTH32F_STENCIL8:v===ur&&(B=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ki||v===vs?B=s.DEPTH_COMPONENT24:v===xi?B=s.DEPTH_COMPONENT32F:v===ur&&(B=s.DEPTH_COMPONENT16),B}function b(A,v){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==Mt&&A.minFilter!==Pt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function N(A){let v=new WeakRef(A);i.get(A).__ref=v,g.add(v),_.register(A,v,v)}function R(A){let v=i.get(A).__ref;v!==void 0&&(g.delete(v),_.unregister(v))}function D(A){V(A.target)}function O(A){I(A.target)}function V(A){A.removeEventListener("dispose",D),R(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",O),R(A),te(A)}function G(){for(let A of g){let v=A.deref();v!==void 0&&(v.isRenderTarget===!0?I(v):V(v))}g.clear(),d.clear()}function q(A){let v=i.get(A);if(v.__webglInit===void 0)return;let B=A.source,ee=f.get(B);if(ee){let J=ee[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&H(A),Object.keys(ee).length===0&&f.delete(B)}i.remove(A)}function H(A){let v=i.get(A);s.deleteTexture(v.__webglTexture);let B=A.source,ee=f.get(B);delete ee[v.__cacheKey],a.memory.textures--}function te(A){let v=i.get(A);v.__depthDisposeCallback&&v.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&V(B),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let re=0;re<v.__webglFramebuffer[J].length;re++)s.deleteFramebuffer(v.__webglFramebuffer[J][re]);else s.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)s.deleteFramebuffer(v.__webglFramebuffer[J]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ee=A.textures;for(let J=0,re=ee.length;J<re;J++){let he=i.get(ee[J]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(ee[J])}i.remove(A)}let X=0;function j(){X=0}function Q(){return X}function Ee(A){X=A}function Oe(){let A=X;return A>=n.maxTextures&&Ae("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),X+=1,A}function K(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.mipmapsAutoUpdate),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function me(A,v){let B=i.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let ee=A.image;if(ee===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(B,A,v);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+v)}function Se(A,v){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Rt(B,A,v);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+v)}function Ie(A,v){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Rt(B,A,v);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+v)}function ge(A,v){let B=i.get(A);if(A.version>0&&B.__version!==A.version){ri(B,A,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+v)}let ze={[Wi]:s.REPEAT,[Ei]:s.CLAMP_TO_EDGE,[qs]:s.MIRRORED_REPEAT},bt={[Mt]:s.NEAREST,[Ko]:s.NEAREST_MIPMAP_NEAREST,[_s]:s.NEAREST_MIPMAP_LINEAR,[Pt]:s.LINEAR,[hr]:s.LINEAR_MIPMAP_NEAREST,[Ci]:s.LINEAR_MIPMAP_LINEAR},Le={[Hd]:s.NEVER,[th]:s.ALWAYS,[Gd]:s.LESS,[Qc]:s.LEQUAL,[Vd]:s.EQUAL,[eh]:s.GEQUAL,[Wd]:s.GREATER,[Xd]:s.NOTEQUAL};function it(A,v){if(v.type===xi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Pt||v.magFilter===hr||v.magFilter===_s||v.magFilter===Ci||v.minFilter===Pt||v.minFilter===hr||v.minFilter===_s||v.minFilter===Ci)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,ze[v.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,ze[v.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,ze[v.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,bt[v.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,bt[v.minFilter]),v.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Mt||v.minFilter!==_s&&v.minFilter!==Ci||v.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function at(A,v){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",D),N(v));let ee=v.source,J=f.get(ee);J===void 0&&(J={},f.set(ee,J));let re=K(v);if(re!==A.__cacheKey){J[re]===void 0&&(J[re]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[re].usedTimes++;let he=J[A.__cacheKey];he!==void 0&&(J[A.__cacheKey].usedTimes--,he.usedTimes===0&&H(v)),A.__cacheKey=re,A.__webglTexture=J[re].texture}return B}function Ke(A,v,B){return Math.floor(Math.floor(A/B)/v)}function Vt(A,v,B,ee){let re=A.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,B,ee,v.data);else{re.sort((C,Z)=>C.start-Z.start);let he=0;for(let C=1;C<re.length;C++){let Z=re[he],W=re[C],le=Z.start+Z.count,ne=Ke(W.start,v.width,4),ae=Ke(Z.start,v.width,4);W.start<=le+1&&ne===ae&&Ke(W.start+W.count-1,v.width,4)===ne?Z.count=Math.max(Z.count,W.start+W.count-Z.start):(++he,re[he]=W)}re.length=he+1;let Y=t.getParameter(s.UNPACK_ROW_LENGTH),$=t.getParameter(s.UNPACK_SKIP_PIXELS),oe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let C=0,Z=re.length;C<Z;C++){let W=re[C],le=Math.floor(W.start/4),ne=Math.ceil(W.count/4),ae=le%v.width,Re=Math.floor(le/v.width),Ge=ne,ie=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(s.UNPACK_SKIP_ROWS,Re),t.texSubImage2D(s.TEXTURE_2D,0,ae,Re,Ge,ie,B,ee,v.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Y),t.pixelStorei(s.UNPACK_SKIP_PIXELS,$),t.pixelStorei(s.UNPACK_SKIP_ROWS,oe)}}function Rt(A,v,B){let ee=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=s.TEXTURE_3D);let J=at(A,v),re=v.source;t.bindTexture(ee,A.__webglTexture,s.TEXTURE0+B);let he=i.get(re);if(re.version!==he.__version||J===!0){if(t.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ie=He.getPrimaries(He.workingColorSpace),Ce=v.colorSpace===En?null:He.getPrimaries(v.colorSpace),ke=v.colorSpace===En||ie===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let $=y(v.image,!1,n.maxTextureSize);$=Pe(v,$);let oe=r.convert(v.format,v.colorSpace),C=r.convert(v.type),Z=E(v.internalFormat,oe,C,v.normalized,v.colorSpace,v.isVideoTexture);it(ee,v);let W,le=v.mipmaps,ne=v.isVideoTexture!==!0,ae=he.__version===void 0||J===!0,Re=re.dataReady,Ge=b(v,$);if(v.isDepthTexture)Z=x(v.format===Tn,v.type),ae&&(ne?t.texStorage2D(s.TEXTURE_2D,1,Z,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,Z,$.width,$.height,0,oe,C,null));else if(v.isDataTexture)if(le.length>0){ne&&ae&&t.texStorage2D(s.TEXTURE_2D,Ge,Z,le[0].width,le[0].height);for(let ie=0,Ce=le.length;ie<Ce;ie++)W=le[ie],ne?Re&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,W.width,W.height,oe,C,W.data):t.texImage2D(s.TEXTURE_2D,ie,Z,W.width,W.height,0,oe,C,W.data);v.generateMipmaps=!1}else ne?(ae&&t.texStorage2D(s.TEXTURE_2D,Ge,Z,$.width,$.height),Re&&Vt(v,$,oe,C)):t.texImage2D(s.TEXTURE_2D,0,Z,$.width,$.height,0,oe,C,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ne&&ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,Z,le[0].width,le[0].height,$.depth);for(let ie=0,Ce=le.length;ie<Ce;ie++)if(W=le[ie],v.format!==Ii)if(oe!==null)if(ne){if(Re)if(v.layerUpdates.size>0){let ke=uh(W.width,W.height,v.format,v.type);for(let fe of v.layerUpdates){let nt=W.data.subarray(fe*ke/W.data.BYTES_PER_ELEMENT,(fe+1)*ke/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,fe,W.width,W.height,1,oe,nt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,W.width,W.height,$.depth,oe,W.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Z,W.width,W.height,$.depth,0,W.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?Re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,W.width,W.height,$.depth,oe,C,W.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Z,W.width,W.height,$.depth,0,oe,C,W.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ne&&ae&&t.texStorage2D(s.TEXTURE_2D,Ge,Z,le[0].width,le[0].height);for(let ie=0,Ce=le.length;ie<Ce;ie++)W=le[ie],v.format!==Ii?oe!==null?ne?Re&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,W.width,W.height,oe,W.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Z,W.width,W.height,0,W.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?Re&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,W.width,W.height,oe,C,W.data):t.texImage2D(s.TEXTURE_2D,ie,Z,W.width,W.height,0,oe,C,W.data)}else if(v.isDataArrayTexture)if(ne){if(ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,Z,$.width,$.height,$.depth),Re)if(v.layerUpdates.size>0){let ie=uh($.width,$.height,v.format,v.type);for(let Ce of v.layerUpdates){let ke=$.data.subarray(Ce*ie/$.data.BYTES_PER_ELEMENT,(Ce+1)*ie/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ce,$.width,$.height,1,oe,C,ke)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,oe,C,$.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Z,$.width,$.height,$.depth,0,oe,C,$.data);else if(v.isData3DTexture)ne?(ae&&t.texStorage3D(s.TEXTURE_3D,Ge,Z,$.width,$.height,$.depth),Re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,oe,C,$.data)):t.texImage3D(s.TEXTURE_3D,0,Z,$.width,$.height,$.depth,0,oe,C,$.data);else if(v.isFramebufferTexture){if(ae)if(ne)t.texStorage2D(s.TEXTURE_2D,Ge,Z,$.width,$.height);else{let ie=$.width,Ce=$.height;for(let ke=0;ke<Ge;ke++)t.texImage2D(s.TEXTURE_2D,ke,Z,ie,Ce,0,oe,C,null),ie>>=1,Ce>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let ie=s.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),$.parentNode!==ie){ie.appendChild($),d.add(v),ie.onpaint=Ce=>{let ke=Ce.changedElements;for(let fe of d)ke.includes(fe.image)&&(fe.needsUpdate=!0)},ie.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{let ke=s.RGBA,fe=s.RGBA,nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ke,fe,nt,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(le.length>0){if(ne&&ae){let ie=Ue(le[0]);t.texStorage2D(s.TEXTURE_2D,Ge,Z,ie.width,ie.height)}for(let ie=0,Ce=le.length;ie<Ce;ie++)W=le[ie],ne?Re&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,oe,C,W):t.texImage2D(s.TEXTURE_2D,ie,Z,oe,C,W);v.generateMipmaps=!1}else if(ne){if(ae){let ie=Ue($);t.texStorage2D(s.TEXTURE_2D,Ge,Z,ie.width,ie.height)}Re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,C,$)}else t.texImage2D(s.TEXTURE_2D,0,Z,oe,C,$);T(v)&&v.mipmapsAutoUpdate===!0&&S(ee),he.__version=re.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ri(A,v,B){if(v.image.length!==6)return;let ee=at(A,v),J=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);let re=i.get(J);if(J.version!==re.__version||ee===!0){t.activeTexture(s.TEXTURE0+B);let he=He.getPrimaries(He.workingColorSpace),Y=v.colorSpace===En?null:He.getPrimaries(v.colorSpace),$=v.colorSpace===En||he===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let oe=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let fe=0;fe<6;fe++)!oe&&!C?Z[fe]=y(v.image[fe],!0,n.maxCubemapSize):Z[fe]=C?v.image[fe].image:v.image[fe],Z[fe]=Pe(v,Z[fe]);let W=Z[0],le=r.convert(v.format,v.colorSpace),ne=r.convert(v.type),ae=E(v.internalFormat,le,ne,v.normalized,v.colorSpace),Re=v.isVideoTexture!==!0,Ge=re.__version===void 0||ee===!0,ie=J.dataReady,Ce=b(v,W);it(s.TEXTURE_CUBE_MAP,v);let ke;if(v.isDepthTexture){if(ae=x(v.format===Tn,v.type),Ge)if(Re)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ae,W.width,W.height);else for(let fe=0;fe<6;fe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ae,W.width,W.height,0,le,ne,null)}else if(oe){Re&&Ge&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ae,W.width,W.height);for(let fe=0;fe<6;fe++){ke=Z[fe].mipmaps;for(let nt=0;nt<ke.length;nt++){let zt=ke[nt];v.format!==Ii?le!==null?Re?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,nt,0,0,zt.width,zt.height,le,zt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,nt,ae,zt.width,zt.height,0,zt.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,nt,0,0,zt.width,zt.height,le,ne,zt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,nt,ae,zt.width,zt.height,0,le,ne,zt.data)}}}else{if(ke=v.mipmaps,Re&&Ge){ke.length>0&&Ce++;let fe=Ue(Z[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ae,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(C){Re?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Z[fe].width,Z[fe].height,le,ne,Z[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ae,Z[fe].width,Z[fe].height,0,le,ne,Z[fe].data);for(let nt=0;nt<ke.length;nt++){let Rn=ke[nt].image[fe].image;Re?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,nt+1,0,0,Rn.width,Rn.height,le,ne,Rn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,nt+1,ae,Rn.width,Rn.height,0,le,ne,Rn.data)}}else{Re?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,le,ne,Z[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ae,le,ne,Z[fe]);for(let nt=0;nt<ke.length;nt++){let zt=ke[nt];Re?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,nt+1,0,0,le,ne,zt.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,nt+1,ae,le,ne,zt.image[fe])}}}T(v)&&v.mipmapsAutoUpdate===!0&&S(s.TEXTURE_CUBE_MAP),re.__version=J.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function gt(A,v,B,ee,J,re){let he=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),$=E(B.internalFormat,he,Y,B.normalized,B.colorSpace),oe=i.get(v),C=i.get(B);if(C.__renderTarget=v,!oe.__hasExternalTextures){let Z=Math.max(1,v.width>>re),W=Math.max(1,v.height>>re);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,re,$,Z,W,v.depth,0,he,Y,null):t.texImage2D(J,re,$,Z,W,0,he,Y,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),de(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,J,C.__webglTexture,0,mt(v)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,J,C.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Hi(A,v,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),v.depthBuffer){let ee=v.depthTexture,J=ee&&ee.isDepthTexture?ee.type:null,re=x(v.stencilBuffer,J),he=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;de(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt(v),re,v.width,v.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt(v),re,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,re,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,A)}else{let ee=v.textures;for(let J=0;J<ee.length;J++){let re=ee[J],he=r.convert(re.format,re.colorSpace),Y=r.convert(re.type),$=E(re.internalFormat,he,Y,re.normalized,re.colorSpace);de(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt(v),$,v.width,v.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt(v),$,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,$,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Bt(A,v,B){let ee=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(v.depthTexture);J.__renderTarget=v;let re=ee?v.depthTexture.image[0]:v.depthTexture.image;(!J.__webglTexture||re.width!==v.width||re.height!==v.height)&&(re.width=v.width,re.height=v.height,v.depthTexture.needsUpdate=!0),ee?ge(v.depthTexture,0):me(v.depthTexture,0);let he=J.__webglTexture,Y=mt(v),$=ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,oe=v.depthTexture.format===Tn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===pn)de(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,$,he,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,oe,$,he,0);else if(v.depthTexture.format===Tn)de(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,$,he,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,oe,$,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vi(A){let v=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let ee=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ee){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ee.removeEventListener("dispose",J)};ee.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=ee}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let ee=0;ee<6;ee++)Bt(v.__webglFramebuffer[ee],A,ee);else A.texture.mipmaps.length>0?Bt(v.__webglFramebuffer[0],A,0):Bt(v.__webglFramebuffer,A,0);else if(B){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]===void 0)v.__webglDepthbuffer[ee]=s.createRenderbuffer(),Hi(v.__webglDepthbuffer[ee],A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,re)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Hi(v.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function yi(A,v,B){let ee=i.get(A);v!==void 0&&gt(ee.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&vi(A)}function Mi(A){let v=A.texture,B=i.get(A),ee=i.get(v);A.addEventListener("dispose",O),N(A);let J=A.textures,re=A.isWebGLCubeRenderTarget===!0,he=J.length>1;if(he||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=v.version,a.memory.textures++),re){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let $=0;$<v.mipmaps.length;$++)B.__webglFramebuffer[Y][$]=s.createFramebuffer()}else B.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(v.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)B.__webglFramebuffer[Y]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(he)for(let Y=0,$=J.length;Y<$;Y++){let oe=i.get(J[Y]);oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&de(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<J.length;Y++){let $=J[Y];B.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let oe=r.convert($.format,$.colorSpace),C=r.convert($.type),Z=E($.internalFormat,oe,C,$.normalized,$.colorSpace,A.isXRRenderTarget===!0),W=mt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,W,Z,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Hi(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),it(s.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)gt(B.__webglFramebuffer[Y][$],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else gt(B.__webglFramebuffer[Y],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);T(v)?S(s.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(he){for(let Y=0,$=J.length;Y<$;Y++){let oe=J[Y],C=i.get(oe),Z=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,C.__webglTexture),it(Z,oe),gt(B.__webglFramebuffer,A,oe,s.COLOR_ATTACHMENT0+Y,Z,0),T(oe)&&S(Z)}t.unbindTexture()}else{let Y=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Y,ee.__webglTexture),it(Y,v),v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)gt(B.__webglFramebuffer[$],A,v,s.COLOR_ATTACHMENT0,Y,$);else gt(B.__webglFramebuffer,A,v,s.COLOR_ATTACHMENT0,Y,0);T(v)?S(Y):v.mipmaps.length>0&&s.texParameteri(Y,s.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&vi(A)}function U(A){let v=A.textures;for(let B=0,ee=v.length;B<ee;B++){let J=v[B];if(T(J)&&J.mipmapsAutoUpdate===!0){let re=w(A),he=i.get(J).__webglTexture;t.bindTexture(re,he),S(re),t.unbindTexture()}}}let Si=[];function pt(A){if(A.samples>0){if(de(A)===!1){let v=A.textures,B=A.width,ee=A.height,J=s.COLOR_BUFFER_BIT,re=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=i.get(A),Y=v.length>1;if(Y)for(let oe=0;oe<v.length;oe++)t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let oe=0;oe<v.length;oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);let C=i.get(v[oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,C,0)}s.blitFramebuffer(0,0,B,ee,0,0,B,ee,J,s.NEAREST),l===!0&&(Si.length=0,Si.push(s.COLOR_ATTACHMENT0+oe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Si.push(re),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Si))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let oe=0;oe<v.length;oe++){t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);let C=i.get(v[oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,C,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let v=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function mt(A){return Math.min(n.maxSamples,A.samples)}function de(A){let v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ct(A){let v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function Pe(A,v){let B=A.colorSpace,ee=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==ti&&B!==En&&(He.getTransfer(B)===et?(ee!==Ii||J!==ci)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",B)),v}function Ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Oe,this.resetTextureUnits=j,this.getTextureUnits=Q,this.setTextureUnits=Ee,this.setTexture2D=me,this.setTexture2DArray=Se,this.setTexture3D=Ie,this.setTextureCube=ge,this.rebindTextures=yi,this.setupRenderTarget=Mi,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=vi,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=de,this.dispose=G}function F_(s,e){function t(i,n=En){let r,a=He.getTransfer(n);if(i===ci)return s.UNSIGNED_BYTE;if(i===Jo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===jo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===$c)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Kc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===qc)return s.BYTE;if(i===Yc)return s.SHORT;if(i===ur)return s.UNSIGNED_SHORT;if(i===Zo)return s.INT;if(i===ki)return s.UNSIGNED_INT;if(i===xi)return s.FLOAT;if(i===Xt)return s.HALF_FLOAT;if(i===Zc)return s.ALPHA;if(i===Jc)return s.RGB;if(i===Ii)return s.RGBA;if(i===pn)return s.DEPTH_COMPONENT;if(i===Tn)return s.DEPTH_STENCIL;if(i===Qo)return s.RED;if(i===el)return s.RED_INTEGER;if(i===Gn)return s.RG;if(i===tl)return s.RG_INTEGER;if(i===il)return s.RGBA_INTEGER;if(i===va||i===ya||i===Ma||i===Sa)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nl||i===sl||i===rl||i===al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ol||i===ll||i===cl||i===hl||i===ul||i===ba||i===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ol||i===ll)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===hl)return r.COMPRESSED_R11_EAC;if(i===ul)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ba)return r.COMPRESSED_RG11_EAC;if(i===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fl||i===pl||i===ml||i===gl||i===xl||i===_l||i===vl||i===yl||i===Ml||i===Sl||i===bl||i===Tl||i===El||i===wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ml)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_l)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ml)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===El)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===Rl||i===Cl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Al)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Il||i===Pl||i===Ta||i===Ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var B_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Qr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Gt({vertexShader:B_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Me(new fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends Xi{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new yh,p={},y=t.getContextAttributes(),T=null,S=null,w=[],E=[],x=new ve,b=null,N=null,R=new It;R.viewport=new st;let D=new It;D.viewport=new st;let O=[R,D],V=new Xo,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let me=w[K];return me===void 0&&(me=new Js,w[K]=me),me.getTargetRaySpace()},this.getControllerGrip=function(K){let me=w[K];return me===void 0&&(me=new Js,w[K]=me),me.getGripSpace()},this.getHand=function(K){let me=w[K];return me===void 0&&(me=new Js,w[K]=me),me.getHandSpace()};function q(K){let me=E.indexOf(K.inputSource);if(me===-1)return;let Se=w[me];Se!==void 0&&(Se.update(K.inputSource,K.frame,c||a),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){n.removeEventListener("select",q),n.removeEventListener("selectstart",q),n.removeEventListener("selectend",q),n.removeEventListener("squeeze",q),n.removeEventListener("squeezestart",q),n.removeEventListener("squeezeend",q),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",te);for(let K=0;K<w.length;K++){let me=E[K];me!==null&&(E[K]=null,w[K].disconnect(me))}I=null,G=null,m.reset();for(let K in p)delete p[K];if(e.setRenderTarget(T),f=null,u=null,d=null,n=null,S=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),N!==null){let K=N.camera;K.fov=N.fov,K.zoom=N.zoom,K.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(T=e.getRenderTarget(),n.addEventListener("select",q),n.addEventListener("selectstart",q),n.addEventListener("selectend",q),n.addEventListener("squeeze",q),n.addEventListener("squeezestart",q),n.addEventListener("squeezeend",q),n.addEventListener("end",H),n.addEventListener("inputsourceschange",te),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ie=null,ge=null;y.depth&&(ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=y.stencil?Tn:pn,Ie=y.stencil?vs:ki);let ze={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ze),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Nt(u.textureWidth,u.textureHeight,{format:Ii,type:ci,depthTexture:new gn(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,Se),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Nt(f.framebufferWidth,f.framebufferHeight,{format:Ii,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Oe.setContext(n),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(K){for(let me=0;me<K.removed.length;me++){let Se=K.removed[me],Ie=E.indexOf(Se);Ie>=0&&(E[Ie]=null,w[Ie].disconnect(Se))}for(let me=0;me<K.added.length;me++){let Se=K.added[me],Ie=E.indexOf(Se);if(Ie===-1){for(let ze=0;ze<w.length;ze++)if(ze>=E.length){E.push(Se),Ie=ze;break}else if(E[ze]===null){E[ze]=Se,Ie=ze;break}if(Ie===-1)break}let ge=w[Ie];ge&&ge.connect(Se)}}function X(K,me){me===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(me.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let me=K.near,Se=K.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),V.near=D.near=R.near=me,V.far=D.far=R.far=Se,(I!==V.near||G!==V.far)&&(n.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,G=V.far),V.layers.mask=K.layers.mask|6,R.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;let Ie=K.parent,ge=V.cameras;X(V,Ie);for(let ze=0;ze<ge.length;ze++)X(ge[ze],Ie);V.projectionMatrix.copy(R.projectionMatrix),V.projectionMatrixInverse.copy(R.projectionMatrixInverse),N===null&&K.isPerspectiveCamera&&(N={camera:K,fov:K.fov,zoom:K.zoom}),j(K,V,Ie)};function j(K,me,Se){Se===null?K.matrix.copy(me.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(me.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(me.projectionMatrix),K.projectionMatrixInverse.copy(me.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ss*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(K){return p[K]};let Q=null;function Ee(K,me){if(h=me.getViewerPose(c||a),g=me,h!==null){let Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ie=!1;Se.length!==V.cameras.length&&(V.cameras.length=0,Ie=!0);for(let Le=0;Le<Se.length;Le++){let it=Se[Le],at=null;if(f!==null)at=f.getViewport(it);else{let Vt=d.getViewSubImage(u,it);at=Vt.viewport,Le===0&&(e.setRenderTargetTextures(S,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(S))}let Ke=O[Le];Ke===void 0&&(Ke=new It,Ke.layers.enable(Le),Ke.viewport=new st,O[Le]=Ke),Ke.matrix.fromArray(it.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(it.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(at.x,at.y,at.width,at.height),Le===0&&(V.matrix.copy(Ke.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ie===!0&&V.cameras.push(Ke)}let ge=n.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let Le=d.getDepthInformation(Se[0]);Le&&Le.isValid&&Le.texture&&m.init(Le,n.renderState)}if(ge&&ge.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let Le=0;Le<Se.length;Le++){let it=Se[Le].camera;if(it){let at=p[it];at||(at=new Qr,p[it]=at);let Ke=d.getCameraImage(it);at.sourceTexture=Ke}}}}for(let Se=0;Se<w.length;Se++){let Ie=E[Se],ge=w[Se];Ie!==null&&ge!==void 0&&ge.update(Ie,me,c||a)}Q&&Q(K,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),g=null}let Oe=new Sf;Oe.setAnimationLoop(Ee),this.setAnimationLoop=function(K){Q=K},this.dispose=function(){}}},k_=new Be,Lf=new De;Lf.set(-1,0,0,0,1,0,0,0,1);function H_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,lh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,T,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),T=y.envMap,S=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Lf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function G_(s,e,t,i){let n={},r={};function a(y,T){let S=T.program;i.uniformBlockBinding(y,S,n[y.id])}function o(y,T){let S=n[y.id];S===void 0&&(g(y),S=l(y),n[y.id]=S,y.addEventListener("dispose",m));let w=T.program;i.updateUBOMapping(y,w);let E=e.render.frame;r[y.id]!==E&&(c(y),r[y.id]=E)}function l(y){let T=s.createBuffer(),S=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,S,w),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(y){let T=n[y.id],S=y.uniforms,w=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let E=0,x=S.length;E<x;E++){let b=S[E];if(Array.isArray(b))for(let N=0,R=b.length;N<R;N++)h(b[N],E,N,w);else h(b,E,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,T,S,w){if(u(y,T,S,w)===!0){let E=y.__offset,x=y.value;if(Array.isArray(x)){let b=0;for(let N=0;N<x.length;N++){let R=x[N],D=_(R,!0);d(R,y.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,y.__data)}}function d(y,T,S){typeof y=="number"||typeof y=="boolean"?T[S]=y:y.isMatrix3?(T[S]=y.elements[0],T[S+1]=y.elements[1],T[S+2]=y.elements[2],T[S+3]=0,T[S+4]=y.elements[3],T[S+5]=y.elements[4],T[S+6]=y.elements[5],T[S+7]=0,T[S+8]=y.elements[6],T[S+9]=y.elements[7],T[S+10]=y.elements[8],T[S+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-S),S):y.toArray(T,S)}function u(y,T,S,w){let E=y.value,x=T+"_"+S;if(Array.isArray(E)){w[x]===void 0&&(w[x]=[]);let b=w[x],N=!1;for(let R=0;R<E.length;R++)f(E[R],b,R)===!0&&(N=!0);return N}return f(E,w,x)}function f(y,T,S){if(T[S]===void 0)return typeof y=="number"||typeof y=="boolean"?T[S]=y:ArrayBuffer.isView(y)?T[S]=y.slice():T[S]=y.clone(),!0;{let w=T[S];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return T[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function g(y){let T=y.uniforms,S=0,w=16;for(let x=0,b=T.length;x<b;x++){let N=Array.isArray(T[x])?T[x]:[T[x]];for(let R=0,D=N.length;R<D;R++){let O=N[R],V=Array.isArray(O.value)?O.value:[O.value],I=Array.isArray(T[x])||Array.isArray(O.value),G=S;for(let H=0,te=V.length;H<te;H++){let X=V[H],j=_(X,I),Q=S%w,Ee=Q%j.boundary,Oe=Q+Ee;S+=Ee,Oe!==0&&w-Oe<j.storage&&(S+=w-Oe),H===0&&(G=S),S+=j.storage}let q=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new q((S-G)/Float32Array.BYTES_PER_ELEMENT),O.__offset=G}}let E=S%w;return E>0&&(S+=w-E),y.__size=S,y.__cache={},this}function _(y,T){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=16,S.storage=48):y.isMatrix4?(S.boundary=16,S.storage=64):y.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(y){let T=y.target;T.removeEventListener("dispose",m),s.deleteBuffer(n[T.id]),delete n[T.id],delete r[T.id]}function p(){for(let y in n)s.deleteBuffer(n[y]);n={},r={}}return{bind:a,update:o,dispose:p}}var V_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qi=null;function W_(){return Qi===null&&(Qi=new er(V_,16,16,Gn,Xt),Qi.name="DFG_LUT",Qi.minFilter=Pt,Qi.magFilter=Pt,Qi.wrapS=Ei,Qi.wrapT=Ei,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}var Fl=class{constructor(e={}){let{canvas:t=qd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ci}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=f,m=new Set([il,tl,el]),p=new Set([ci,ki,ur,vs,Jo,jo]),y=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},w=null,E=null,x=[],b=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,O=null,V=null,I=null,G=null;this._outputColorSpace=yt;let q=0,H=0,te=null,X=-1,j=null,Q=new st,Ee=new st,Oe=null,K=new _e(0),me=0,Se=t.width,Ie=t.height,ge=1,ze=null,bt=null,Le=new st(0,0,Se,Ie),it=new st(0,0,Se,Ie),at=!1,Ke=new Fn,Vt=new No,Rt=!1,ri=!1,gt=new Be,Hi=new L,Bt=new st,vi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yi=!1;function Mi(){return te===null?ge:1}let U=i;function Si(M,P){return t.getContext(M,P)}let pt,mt,de,Ct,Pe,Ue,A,v,B,ee,J,re,he,Y,$,oe,C,Z,W,le,ne,ae,Re;try{let M={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",fe,!1),U===null){let P="webgl2";if(U=Si(P,M),U===null)throw Si(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(M){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ne("WebGLRenderer: "+M.message),M}function Ge(){pt=new tx(U),pt.init(),ne=new F_(U,pt),mt=new W0(U,pt,e,ne),de=new U_(U,pt),mt.reversedDepthBuffer&&u&&de.buffers.depth.setReversed(!0),V=U.createFramebuffer(),I=U.createFramebuffer(),G=U.createFramebuffer(),Ct=new sx(U),Pe=new M_,Ue=new O_(U,pt,de,Pe,mt,ne,Ct),A=new ex(R),v=new am(U),ae=new G0(U,v),B=new ix(U,v,Ct,ae),ee=new ax(U,B,v,ae,Ct),Z=new rx(U,mt,Ue),$=new X0(Pe),J=new y_(R,A,pt,mt,ae,$),re=new H_(R,Pe),he=new b_,Y=new C_(pt),C=new H0(R,A,de,ee,g,l),oe=new D_(R,ee,mt),Re=new G_(U,Ct,mt,de),W=new V0(U,pt,Ct),le=new nx(U,pt,Ct),Ct.programs=J.programs,R.capabilities=mt,R.extensions=pt,R.properties=Pe,R.renderLists=he,R.shadowMap=oe,R.state=de,R.info=Ct}_!==ci&&(N=new lx(_,t.width,t.height,o,n,r));let ie=new Mh(R,U);this.xr=ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=pt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=pt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(M){M!==void 0&&(ge=M,this.setSize(Se,Ie,!1))},this.getSize=function(M){return M.set(Se,Ie)},this.setSize=function(M,P,k=!0){if(ie.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=M,Ie=P,t.width=Math.floor(M*ge),t.height=Math.floor(P*ge),k===!0&&(t.style.width=M+"px",t.style.height=P+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(Se*ge,Ie*ge).floor()},this.setDrawingBufferSize=function(M,P,k){Se=M,Ie=P,ge=k,t.width=Math.floor(M*k),t.height=Math.floor(P*k),this.setViewport(0,0,M,P)},this.setEffects=function(M){if(_===ci){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let P=0;P<M.length;P++)if(M[P].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(Le)},this.setViewport=function(M,P,k,F){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,P,k,F),de.viewport(Q.copy(Le).multiplyScalar(Mi()).round())},this.getScissor=function(M){return M.copy(it)},this.setScissor=function(M,P,k,F){M.isVector4?it.set(M.x,M.y,M.z,M.w):it.set(M,P,k,F),de.scissor(Ee.copy(it).multiplyScalar(Mi()).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(M){de.setScissorTest(at=M)},this.setOpaqueSort=function(M){ze=M},this.setTransparentSort=function(M){bt=M},this.getClearColor=function(M){return M.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(M=!0,P=!0,k=!0){let F=0;if(M){let z=!1;if(te!==null){let ue=te.texture.format;z=m.has(ue)}if(z){let ue=te.texture.type,ye=p.has(ue),ce=C.getClearColor(),xe=C.getClearAlpha(),we=ce.r,Fe=ce.g,Ze=ce.b;ye?(y[0]=we,y[1]=Fe,y[2]=Ze,y[3]=xe,U.clearBufferuiv(U.COLOR,0,y)):(T[0]=we,T[1]=Fe,T[2]=Ze,T[3]=xe,U.clearBufferiv(U.COLOR,0,T))}else F|=U.COLOR_BUFFER_BIT}P&&(F|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(F|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),C.dispose(),he.dispose(),Y.dispose(),Ue.dispose(),Pe.dispose(),A.dispose(),ee.dispose(),B.dispose(),ae.dispose(),Re.dispose(),J.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",pu),ie.removeEventListener("sessionend",mu),qn.stop()};function Ce(M){M.preventDefault(),Hr("WebGLRenderer: Context Lost."),D=!0}function ke(){Hr("WebGLRenderer: Context Restored."),D=!1;let M=Ct.autoReset,P=oe.enabled,k=oe.autoUpdate,F=oe.needsUpdate,z=oe.type;Ge(),Ct.autoReset=M,oe.enabled=P,oe.autoUpdate=k,oe.needsUpdate=F,oe.type=z}function fe(M){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function nt(M){let P=M.target;P.removeEventListener("dispose",nt),zt(P)}function zt(M){Rn(M),Pe.remove(M)}function Rn(M){let P=Pe.get(M).programs;P!==void 0&&(P.forEach(function(k){J.releaseProgram(k)}),M.isShaderMaterial&&J.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,k,F,z,ue){P===null&&(P=vi);let ye=z.isMesh&&z.matrixWorld.determinantAffine()<0,ce=jf(M,P,k,F,z);de.setMaterial(F,ye);let xe=k.index,we=1;if(F.wireframe===!0){if(xe=B.getWireframeAttribute(k),xe===void 0)return;we=2}let Fe=k.drawRange,Ze=k.attributes.position,be=Fe.start*we,Je=(Fe.start+Fe.count)*we;ue!==null&&(be=Math.max(be,ue.start*we),Je=Math.min(Je,(ue.start+ue.count)*we)),xe!==null?(be=Math.max(be,0),Je=Math.min(Je,xe.count)):Ze!=null&&(be=Math.max(be,0),Je=Math.min(Je,Ze.count));let Tt=Je-be;if(Tt<0||Tt===1/0)return;ae.setup(z,F,ce,k,xe);let ut,ot=W;if(xe!==null&&(ut=v.get(xe),ot=le,ot.setIndex(ut)),z.isMesh)F.wireframe===!0?(de.setLineWidth(F.wireframeLinewidth*Mi()),ot.setMode(U.LINES)):ot.setMode(U.TRIANGLES);else if(z.isLine){let qt=F.linewidth;qt===void 0&&(qt=1),de.setLineWidth(qt*Mi()),z.isLineSegments?ot.setMode(U.LINES):z.isLineLoop?ot.setMode(U.LINE_LOOP):ot.setMode(U.LINE_STRIP)}else z.isPoints?ot.setMode(U.POINTS):z.isSprite&&ot.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))ot.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let qt=z._multiDrawStarts,Te=z._multiDrawCounts,Qt=z._multiDrawCount,tt=xe?v.get(xe).bytesPerElement:1,Yn=Pe.get(F).currentProgram.getUniforms();for(let Yt=0;Yt<Qt;Yt++)Yn.setValue(U,"_gl_DrawID",Yt),ot.render(qt[Yt]/tt,Te[Yt])}else if(z.isInstancedMesh)ot.renderInstances(be,Tt,z.count);else if(k.isInstancedBufferGeometry){let qt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Te=Math.min(k.instanceCount,qt);ot.renderInstances(be,Tt,Te)}else ot.render(be,Tt)};function fu(M,P,k,F){O!==null&&M.isNodeMaterial&&O.setObject(F,M),Rt===!0&&$.setState(M,k,!1),M.transparent===!0&&M.side===Ri&&M.forceSinglePass===!1?(M.side=Dt,M.needsUpdate=!0,Tr(M,P,F),M.side=Zi,M.needsUpdate=!0,Tr(M,P,F),M.side=Ri):Tr(M,P,F)}this.compile=function(M,P,k=null){k===null&&(k=M),O!==null&&O.renderStart(M,P,k),E=Y.get(k),E.init(P),b.push(E),k.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),M!==k&&M.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),ri=this.localClippingEnabled,Rt=$.init(this.clippingPlanes,ri),Rt===!0&&$.setGlobalState(this.clippingPlanes,P),O!==null&&oe.render(E.state.shadowsArray,k,P);let F=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ue=z.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){let ce=ue[ye];fu(ce,k,P,z),F.add(ce)}else fu(ue,k,P,z),F.add(ue)}),E=b.pop(),O!==null&&O.renderEnd(),F},this.compileAsync=function(M,P,k=null){let F=this.compile(M,P,k);return new Promise(z=>{function ue(){if(F.forEach(function(ye){let xe=Pe.get(ye).currentProgram;(xe===void 0||xe.isReady())&&F.delete(ye)}),F.size===0){z(M);return}setTimeout(ue,10)}pt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let tc=null;function Zf(M){tc&&tc(M)}function pu(){qn.stop()}function mu(){qn.start()}let qn=new Sf;qn.setAnimationLoop(Zf),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(M){tc=M,ie.setAnimationLoop(M),M===null?qn.stop():qn.start()},ie.addEventListener("sessionstart",pu),ie.addEventListener("sessionend",mu),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(M,P);let k=ie.enabled===!0&&ie.isPresenting===!0,F=N!==null&&(te===null||k)&&N.begin(R,te);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(P),P=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,P,te),E=Y.get(M,b.length),E.init(P),E.state.textureUnits=Ue.getTextureUnits(),b.push(E),gt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Vt.setFromArrayCamera(P):Ke.setFromProjectionMatrix(gt,wi,P.reversedDepth),ri=this.localClippingEnabled,Rt=$.init(this.clippingPlanes,ri),w=he.get(M,x.length),w.init(),x.push(w),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let ye=R.xr.getDepthSensingMesh();ye!==null&&ic(ye,P,-1/0,R.sortObjects)}ic(M,P,0,R.sortObjects),w.finish(),O!==null&&O.updateLights(E.state.lightsArray),R.sortObjects===!0&&w.sort(ze,bt),yi=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,yi&&C.addToRenderList(w,M),this.info.autoReset===!0&&this.info.reset(),Rt===!0&&$.beginShadows();let z=E.state.shadowsArray;if(oe.render(z,M,P),Rt===!0&&$.endShadows(),(F&&N.hasRenderPass())===!1){let ye=w.opaque,ce=w.transmissive;if(E.setupLights(),P.isArrayCamera){let xe=P.cameras;if(ce.length>0)for(let we=0,Fe=xe.length;we<Fe;we++){let Ze=xe[we];xu(ye,ce,M,Ze)}yi&&C.render(M);for(let we=0,Fe=xe.length;we<Fe;we++){let Ze=xe[we];gu(w,M,Ze,Ze.viewport)}}else ce.length>0&&xu(ye,ce,M,P),yi&&C.render(M),gu(w,M,P)}te!==null&&H===0&&(Ue.updateMultisampleRenderTarget(te),Ue.updateRenderTargetMipmap(te)),F&&N.end(R),M.isScene===!0&&M.onAfterRender(R,M,P),ae.resetDefaultState(),X=-1,j=null,b.pop(),b.length>0?(E=b[b.length-1],Ue.setTextureUnits(E.state.textureUnits),Rt===!0&&$.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,O!==null&&O.renderEnd()};function ic(M,P,k,F){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let ye=P.isArrayCamera?Vt:Ke;if(!M.frustumCulled||M.intersectsFrustum(ye)){F&&Bt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(gt);let ce=ee.update(M),xe=M.material;xe.visible&&w.push(M,ce,xe,k,Bt.z,null,P)}}else if(M.isMesh||M.isLine||M.isPoints){let ye=P.isArrayCamera?Vt:Ke;if(!M.frustumCulled||M.intersectsFrustum(ye)){let ce=ee.update(M),xe=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Bt.copy(M.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Bt.copy(ce.boundingSphere.center)),Bt.applyMatrix4(M.matrixWorld).applyMatrix4(gt)),Array.isArray(xe)){let we=ce.groups;for(let Fe=0,Ze=we.length;Fe<Ze;Fe++){let be=we[Fe],Je=xe[be.materialIndex];Je&&Je.visible&&w.push(M,ce,Je,k,Bt.z,be,P)}}else xe.visible&&w.push(M,ce,xe,k,Bt.z,null,P)}}}let ue=M.children;for(let ye=0,ce=ue.length;ye<ce;ye++)ic(ue[ye],P,k,F)}function gu(M,P,k,F){let{opaque:z,transmissive:ue,transparent:ye}=M;E.setupLightsView(k),Rt===!0&&$.setGlobalState(R.clippingPlanes,k),F&&de.viewport(Q.copy(F)),z.length>0&&Va(z,P,k),ue.length>0&&Va(ue,P,k),ye.length>0&&Va(ye,P,k),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function xu(M,P,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[F.id]===void 0){let be=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[F.id]=new Nt(1,1,{generateMipmaps:!0,type:be?Xt:ci,minFilter:Ci,samples:Math.max(4,mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:He.workingColorSpace})}let ue=E.state.transmissionRenderTarget[F.id],ye=F.viewport||Q;ue.setSize(ye.z*R.transmissionResolutionScale,ye.w*R.transmissionResolutionScale);let ce=R.getRenderTarget(),xe=R.getActiveCubeFace(),we=R.getActiveMipmapLevel();R.setRenderTarget(ue),R.getClearColor(K),me=R.getClearAlpha(),me<1&&R.setClearColor(16777215,.5),R.clear(),yi&&C.render(k);let Fe=R.toneMapping;R.toneMapping=Ji;let Ze=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),E.setupLightsView(F),Rt===!0&&$.setGlobalState(R.clippingPlanes,F),Va(M,k,F),Ue.updateMultisampleRenderTarget(ue),Ue.updateRenderTargetMipmap(ue),pt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Je=0,Tt=P.length;Je<Tt;Je++){let ut=P[Je],{object:ot,geometry:qt,material:Te,group:Qt}=ut;if(Te.side===Ri&&ot.layers.test(F.layers)){let tt=Te.side;Te.side=Dt,Te.needsUpdate=!0,_u(ot,k,F,qt,Te,Qt),Te.side=tt,Te.needsUpdate=!0,be=!0}}be===!0&&(Ue.updateMultisampleRenderTarget(ue),Ue.updateRenderTargetMipmap(ue))}R.setRenderTarget(ce,xe,we),R.setClearColor(K,me),Ze!==void 0&&(F.viewport=Ze),R.toneMapping=Fe}function Va(M,P,k){let F=P.isScene===!0?P.overrideMaterial:null;for(let z=0,ue=M.length;z<ue;z++){let ye=M[z],{object:ce,geometry:xe,group:we}=ye,Fe=ye.material;Fe.allowOverride===!0&&F!==null&&(Fe=F),ce.layers.test(k.layers)&&_u(ce,P,k,xe,Fe,we)}}function _u(M,P,k,F,z,ue){O!==null&&z.isNodeMaterial&&O.setObject(M,z),M.onBeforeRender(R,P,k,F,z,ue),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(R,P,k,F,M,ue),z.transparent===!0&&z.side===Ri&&z.forceSinglePass===!1?(z.side=Dt,z.needsUpdate=!0,R.renderBufferDirect(k,P,F,z,M,ue),z.side=Zi,z.needsUpdate=!0,R.renderBufferDirect(k,P,F,z,M,ue),z.side=Ri):R.renderBufferDirect(k,P,F,z,M,ue),M.onAfterRender(R,P,k,F,z,ue)}function vu(M){let P=0;for(let k of M)k.texture!==null&&P++;return P}function Tr(M,P,k){P.isScene!==!0&&(P=vi);let F=Pe.get(M),z=E.state.lights,ue=E.state.shadowsArray,ye=z.state.version,ce=J.getParameters(M,z.state,ue,P,k,E.state.lightProbeGridArray),xe=J.getProgramCacheKey(ce),we=F.programs;F.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,F.fog=P.fog;let Fe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;F.envMap=A.get(M.envMap||F.environment,Fe),F.envMapRotation=F.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,we===void 0&&(M.addEventListener("dispose",nt),we=new Map,F.programs=we,F.programVariants=new Map);let Ze=we.get(xe);if(Ze!==void 0){if(F.currentProgram===Ze&&F.lightsStateVersion===ye)return Mu(M,ce),Ze}else ce.uniforms=J.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,k,ce),M.onBeforeCompile(ce,R),Ze=J.acquireProgram(ce,xe),we.set(xe,Ze),F.uniforms=ce.uniforms;let be=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(be.clippingPlanes=$.uniform),Mu(M,ce),F.needsLights=ep(M),F.lightsStateVersion=ye,F.needsLights&&(be.ambientLightColor.value=z.state.ambient,be.lightProbe.value=z.state.probe,be.sunLights.value=z.state.sun,be.sunLightShadows.value=z.state.sunShadow,be.directionalLights.value=z.state.directional,be.directionalLightShadows.value=z.state.directionalShadow,be.spotLights.value=z.state.spot,be.spotLightShadows.value=z.state.spotShadow,be.rectAreaLights.value=z.state.rectArea,be.ltc_1.value=z.state.rectAreaLTC1,be.ltc_2.value=z.state.rectAreaLTC2,be.pointLights.value=z.state.point,be.pointLightShadows.value=z.state.pointShadow,be.hemisphereLights.value=z.state.hemi,be.sunShadowMatrix.value=z.state.sunShadowMatrix,be.sunShadowCascade.value=z.state.sunShadowCascade,be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,be.spotLightMatrix.value=z.state.spotLightMatrix,be.spotLightMap.value=z.state.spotLightMap,be.pointShadowMatrix.value=z.state.pointShadowMatrix),F.numLightProbeGrids=vu(E.state.lightProbeGridArray),F.currentProgram=Ze,F.uniformsList=null,Ze}function Jf(M,P,k,F,z){let ue=Pe.get(M),ye=ue.currentProgram.id+","+F+","+z,ce=ue.programVariants.get(ye);return ce===void 0?(ce=Tr(M,P,k),ue.programVariants.set(ye,ce)):(ue.currentProgram=ce,ue.uniformsList=null,ue.outputColorSpace=F,ue.toneMapping=z),ce}function yu(M){if(M.uniformsList===null){let P=M.currentProgram.getUniforms();M.uniformsList=fr.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function Mu(M,P){let k=Pe.get(M);k.outputColorSpace=P.outputColorSpace,k.batching=P.batching,k.batchingColor=P.batchingColor,k.instancing=P.instancing,k.instancingColor=P.instancingColor,k.instancingMorph=P.instancingMorph,k.skinning=P.skinning,k.morphTargets=P.morphTargets,k.morphNormals=P.morphNormals,k.morphColors=P.morphColors,k.morphTargetsCount=P.morphTargetsCount,k.numClippingPlanes=P.numClippingPlanes,k.numIntersection=P.numClipIntersection,k.vertexAlphas=P.vertexAlphas,k.vertexTangents=P.vertexTangents,k.toneMapping=P.toneMapping}function jf(M,P,k,F,z){P.isScene!==!0&&(P=vi),Ue.resetTextureUnits();let ue=P.fog,ye=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?P.environment:null,ce=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:He.workingColorSpace,xe=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,we=A.get(F.envMap||ye,xe),Fe=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ze=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),be=!!k.morphAttributes.position,Je=!!k.morphAttributes.normal,Tt=!!k.morphAttributes.color,ut=Ji;F.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ut=R.toneMapping);let ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,qt=ot!==void 0?ot.length:0,Te=Pe.get(F),Qt=E.state.lights;if(Rt===!0&&(ri===!0||M!==j)){let xt=M===j&&F.id===X;$.setState(F,M,xt)}let tt=!1,Yn=!1;F.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==Qt.state.version||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==we||F.fog===!0&&Te.fog!==ue||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==$.numPlanes||Te.numIntersection!==$.numIntersection)||Te.vertexAlphas!==Fe||Te.vertexTangents!==Ze||Te.morphTargets!==be||Te.morphNormals!==Je||Te.morphColors!==Tt||Te.morphTargetsCount!==qt||Te.numLightProbeGrids!==vu(E.state.lightProbeGridArray)?tt=!0:(Te.outputColorSpace!==ce||Te.toneMapping!==ut)&&(Yn=!0):(tt=!0,Te.__version=F.version);let Yt=Te.currentProgram;(tt===!0||Yn===!0)&&(Yt=Yn===!0?Jf(F,P,z,ce,ut):Tr(F,P,z),O&&F.isNodeMaterial&&O.onUpdateProgram(F,Yt,Te));let Wa=!1,Cn=!1,$n=!1,Qe=Yt.getUniforms(),Wt=Te.uniforms;if(de.useProgram(Yt.program)&&(Wa=!0,Cn=!0,$n=!0),F.id!==X&&(X=F.id,Cn=!0),Wa||j!==M){de.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Qe.setValue(U,"projectionMatrix",M.projectionMatrix),Qe.setValue(U,"viewMatrix",M.matrixWorldInverse);let kt=Qe.map.cameraPosition;kt!==void 0&&kt.setValue(U,Hi.setFromMatrixPosition(M.matrixWorld)),mt.logarithmicDepthBuffer&&Qe.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Qe.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Cn=!0,$n=!0)}if(Te.needsLights&&(Qt.state.sunShadowMap.length>0&&Qe.setValue(U,"sunShadowMap",Qt.state.sunShadowMap,Ue),Qt.state.directionalShadowMap.length>0&&Qe.setValue(U,"directionalShadowMap",Qt.state.directionalShadowMap,Ue),Qt.state.spotShadowMap.length>0&&Qe.setValue(U,"spotShadowMap",Qt.state.spotShadowMap,Ue),Qt.state.pointShadowMap.length>0&&Qe.setValue(U,"pointShadowMap",Qt.state.pointShadowMap,Ue)),z.isSkinnedMesh){Qe.setOptional(U,z,"bindMatrix"),Qe.setOptional(U,z,"bindMatrixInverse");let xt=z.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),Qe.setValue(U,"boneTexture",xt.boneTexture,Ue))}z.isBatchedMesh&&(Qe.setOptional(U,z,"batchingTexture"),Qe.setValue(U,"batchingTexture",z._matricesTexture,Ue),Qe.setOptional(U,z,"batchingIdTexture"),Qe.setValue(U,"batchingIdTexture",z._indirectTexture,Ue),Qe.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&Qe.setValue(U,"batchingColorTexture",z._colorsTexture,Ue));let Ni=k.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Z.update(z,k,Yt),(Cn||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,Qe.setValue(U,"receiveShadow",z.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&P.environment!==null&&(Wt.envMapIntensity.value=P.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=W_()),Cn){if(Qe.setValue(U,"toneMappingExposure",R.toneMappingExposure),Te.needsLights&&Qf(Wt,$n),ue&&F.fog===!0&&re.refreshFogUniforms(Wt,ue),re.refreshMaterialUniforms(Wt,F,ge,Ie,E.state.transmissionRenderTarget[M.id]),Te.needsLights&&Te.numLightProbeGrids>0){let xt=S,kt=0;for(let rn of E.state.lightProbeGridArray)rn.texture!==null&&(xt.textures[kt]=rn.texture,xt.min[kt]=rn.boundingBox.min,xt.max[kt]=rn.boundingBox.max,xt.resolution[kt]=rn.resolution,kt++);for(let rn in xt)xt[rn].length=kt;Wt.probesSH.value=xt.textures,Wt.probesMin.value=xt.min,Wt.probesMax.value=xt.max,Wt.probesResolution.value=xt.resolution}fr.upload(U,yu(Te),Wt,Ue)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(fr.upload(U,yu(Te),Wt,Ue),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Qe.setValue(U,"center",z.center),Qe.setValue(U,"modelViewMatrix",z.modelViewMatrix),Qe.setValue(U,"normalMatrix",z.normalMatrix),Qe.setValue(U,"modelMatrix",z.matrixWorld),F.uniformsGroups!==void 0){let xt=F.uniformsGroups;for(let kt=0,rn=xt.length;kt<rn;kt++){let bu=xt[kt];Re.update(bu,Yt),Re.bind(bu,Yt)}}return Yt}function Qf(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.sunLights.needsUpdate=P,M.sunLightShadows.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function ep(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(M,P,k){let F=Pe.get(M);F.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Pe.get(M.texture).__webglTexture=P,Pe.get(M.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:k,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,P){let k=Pe.get(M);k.__webglFramebuffer=P,k.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,k=0){te=M,q=P,H=k;let F=null,z=!1,ue=!1;if(M){let ce=Pe.get(M);if(ce.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(U.FRAMEBUFFER,ce.__webglFramebuffer),Q.copy(M.viewport),Ee.copy(M.scissor),Oe=M.scissorTest,de.viewport(Q),de.scissor(Ee),de.setScissorTest(Oe),X=-1;return}else if(ce.__webglFramebuffer===void 0)Ue.setupRenderTarget(M);else if(ce.__hasExternalTextures)Ue.rebindTextures(M,Pe.get(M.texture).__webglTexture,Pe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Fe=M.depthTexture;if(ce.__boundDepthTexture!==Fe){if(Fe!==null&&Pe.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(M)}}let xe=M.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ue=!0);let we=Pe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[P])?F=we[P][k]:F=we[P],z=!0):M.samples>0&&Ue.useMultisampledRTT(M)===!1?F=Pe.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?F=we[k]:F=we,Q.copy(M.viewport),Ee.copy(M.scissor),Oe=M.scissorTest}else Q.copy(Le).multiplyScalar(ge).floor(),Ee.copy(it).multiplyScalar(ge).floor(),Oe=at;if(k!==0&&(F=V),de.bindFramebuffer(U.FRAMEBUFFER,F)&&de.drawBuffers(M,F),de.viewport(Q),de.scissor(Ee),de.setScissorTest(Oe),z){let ce=Pe.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,ce.__webglTexture,k)}else if(ue){let ce=P;for(let xe=0;xe<M.textures.length;xe++){let we=Pe.get(M.textures[xe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+xe,we.__webglTexture,k,ce)}}else if(M!==null&&k!==0){let ce=Pe.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ce.__webglTexture,k)}X=-1};function Su(M){let P=Pe.get(M);return(P.__readFormat!==M.format||P.__readType!==M.type)&&(P.__readFormat=M.format,P.__readType=M.type,P.__formatReadable=mt.textureFormatReadable(M.format),P.__typeReadable=mt.textureTypeReadable(M.type)),P}this.readRenderTargetPixels=function(M,P,k,F,z,ue,ye,ce=0){if(!(M&&M.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(xe=xe[ye],Array.isArray(xe)&&(xe=xe[0])),xe){de.bindFramebuffer(U.FRAMEBUFFER,xe);try{let we=M.textures[ce],Fe=we.format,Ze=we.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ce);let be=Su(we);if(be.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-F&&k>=0&&k<=M.height-z&&U.readPixels(P,k,F,z,ne.convert(Fe),ne.convert(Ze),ue)}finally{let we=te!==null?Pe.get(te).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,P,k,F,z,ue,ye,ce=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(xe=xe[ye],Array.isArray(xe)&&(xe=xe[0])),xe)if(P>=0&&P<=M.width-F&&k>=0&&k<=M.height-z){de.bindFramebuffer(U.FRAMEBUFFER,xe);let we=M.textures[ce],Fe=we.format,Ze=we.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ce);let be=Su(we);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.bufferData(U.PIXEL_PACK_BUFFER,ue.byteLength,U.STREAM_READ),U.readPixels(P,k,F,z,ne.convert(Fe),ne.convert(Ze),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Tt=te!==null?Pe.get(te).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,Tt);let ut=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await $d(U,ut,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ue),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Je),U.deleteSync(ut),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,P=null,k=0){let F=Math.pow(2,-k),z=Math.floor(M.image.width*F),ue=Math.floor(M.image.height*F),ye=P!==null?P.x:0,ce=P!==null?P.y:0;Ue.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,ye,ce,z,ue),de.unbindTexture()},this.copyTextureToTexture=function(M,P,k=null,F=null,z=0,ue=0){let ye,ce,xe,we,Fe,Ze,be,Je,Tt,ut=M.isCompressedTexture?M.mipmaps[ue]:M.image;if(k!==null)ye=k.max.x-k.min.x,ce=k.max.y-k.min.y,xe=k.isBox3?k.max.z-k.min.z:1,we=k.min.x,Fe=k.min.y,Ze=k.isBox3?k.min.z:0;else{let Qe=Math.pow(2,-z);ye=Math.floor(ut.width*Qe),ce=Math.floor(ut.height*Qe),M.isDataArrayTexture?xe=ut.depth:M.isData3DTexture?xe=Math.floor(ut.depth*Qe):xe=1,we=0,Fe=0,Ze=0}F!==null?(be=F.x,Je=F.y,Tt=F.z):(be=0,Je=0,Tt=0);let ot=ne.convert(P.format),qt=ne.convert(P.type),Te;P.isData3DTexture?(Ue.setTexture3D(P,0),Te=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Ue.setTexture2DArray(P,0),Te=U.TEXTURE_2D_ARRAY):(Ue.setTexture2D(P,0),Te=U.TEXTURE_2D),de.activeTexture(U.TEXTURE0),de.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),de.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),de.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);let Qt=de.getParameter(U.UNPACK_ROW_LENGTH),tt=de.getParameter(U.UNPACK_IMAGE_HEIGHT),Yn=de.getParameter(U.UNPACK_SKIP_PIXELS),Yt=de.getParameter(U.UNPACK_SKIP_ROWS),Wa=de.getParameter(U.UNPACK_SKIP_IMAGES);de.pixelStorei(U.UNPACK_ROW_LENGTH,ut.width),de.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut.height),de.pixelStorei(U.UNPACK_SKIP_PIXELS,we),de.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),de.pixelStorei(U.UNPACK_SKIP_IMAGES,Ze);let Cn=M.isDataArrayTexture||M.isData3DTexture,$n=P.isDataArrayTexture||P.isData3DTexture;if(M.isDepthTexture){let Qe=Pe.get(M),Wt=Pe.get(P),Ni=Pe.get(Qe.__renderTarget),xt=Pe.get(Wt.__renderTarget);de.bindFramebuffer(U.READ_FRAMEBUFFER,Ni.__webglFramebuffer),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let kt=0;kt<xe;kt++)Cn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.get(M).__webglTexture,z,Ze+kt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.get(P).__webglTexture,ue,Tt+kt)),U.blitFramebuffer(we,Fe,we+ye,Fe+ce,be,Je,be+ye,Je+ce,U.DEPTH_BUFFER_BIT,U.NEAREST);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||Pe.has(M)){let Qe=Pe.get(M),Wt=Pe.get(P);de.bindFramebuffer(U.READ_FRAMEBUFFER,I),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let Ni=0;Ni<xe;Ni++)Cn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qe.__webglTexture,z,Ze+Ni):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Qe.__webglTexture,z),$n?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wt.__webglTexture,ue,Tt+Ni):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Wt.__webglTexture,ue),z!==0?U.blitFramebuffer(we,Fe,we+ye,Fe+ce,be,Je,be+ye,Je+ce,U.COLOR_BUFFER_BIT,U.NEAREST):$n?U.copyTexSubImage3D(Te,ue,be,Je,Tt+Ni,we,Fe,ye,ce):U.copyTexSubImage2D(Te,ue,be,Je,we,Fe,ye,ce);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else $n?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Te,ue,be,Je,Tt,ye,ce,xe,ot,qt,ut.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,ue,be,Je,Tt,ye,ce,xe,ot,ut.data):U.texSubImage3D(Te,ue,be,Je,Tt,ye,ce,xe,ot,qt,ut):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ue,be,Je,ye,ce,ot,qt,ut.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ue,be,Je,ut.width,ut.height,ot,ut.data):U.texSubImage2D(U.TEXTURE_2D,ue,be,Je,ye,ce,ot,qt,ut);de.pixelStorei(U.UNPACK_ROW_LENGTH,Qt),de.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt),de.pixelStorei(U.UNPACK_SKIP_PIXELS,Yn),de.pixelStorei(U.UNPACK_SKIP_ROWS,Yt),de.pixelStorei(U.UNPACK_SKIP_IMAGES,Wa),ue===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&U.generateMipmap(Te),de.unbindTexture()},this.initRenderTarget=function(M){Pe.get(M).__webglFramebuffer===void 0&&Ue.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ue.setTextureCube(M,0):M.isData3DTexture?Ue.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ue.setTexture2DArray(M,0):Ue.setTexture2D(M,0),de.unbindTexture()},this.resetState=function(){q=0,H=0,te=null,de.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};function Sh(s,e){if(e===jc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===dr||e===Ea){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let i=t.count-2,n=[];if(e===dr)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Nf(s){let e=new Map,t=new Map,i=s.clone();return Df(s,i,function(n,r){e.set(r,n),t.set(n,r)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let r=n,a=e.get(n),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Df(s,e,t){t(s,e);for(let i=0;i<s.children.length;i++)Df(s.children[i],e.children[i],t)}var kl=class extends $i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ch(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Hl(t,Xe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hl(t,Xe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Vh(t)})}load(e,t,i,n){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Sn.extractUrlBase(e);a=Sn.resolveURL(c,this.path)}else a=Sn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new sr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zf){try{a[Xe.KHR_BINARY_GLTF]=new Wh(e)}catch(d){n&&n(d);return}r=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Jh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Xe.KHR_MATERIALS_UNLIT:a[d]=new Ah;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[d]=new Xh(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[d]=new qh;break;case Xe.KHR_MESH_QUANTIZATION:a[d]=new Yh;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}};function q_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function vt(s,e,t){let i=s.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},wh=class{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new _e(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ti);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ki(h),c.distance=d;break;case"spot":c=new ca(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),tn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},Ah=class{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return ft}extendParams(e,t,i){let n=[];e.color=new _e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ti),e.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(n)}},Rh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=vt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Ch=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return vt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){let i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ve(r,r)}return Promise.all(n)}},Ih=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return vt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){let i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(n)}},Ph=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return vt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){let i=vt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Lh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return vt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){let i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},Nh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){return vt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){let i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],ti)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,yt)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},Dh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return vt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){let i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},Uh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){return vt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){let i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(r[0],r[1],r[2],ti),Promise.all(n)}},Oh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){return vt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){let i=vt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Fh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return vt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){let i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(r[0],r[1],r[2],ti),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,yt)),Promise.all(n)}},Bh=class{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){return vt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){let i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}},zh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return vt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){let i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},kh=class{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Hh=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Gh=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Hl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,d=n.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,n.mode,n.filter),f})})}else return null}},Vh=class{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==Pi.TRIANGLES&&c.mode!==Pi.TRIANGLE_STRIP&&c.mode!==Pi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(let g of d){let _=new Be,m=new L,p=new pi,y=new L(1,1,1),T=new Bi(g.geometry,g.material,u);for(let w=0;w<u;w++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,w),l.SCALE&&y.fromBufferAttribute(l.SCALE,w),T.setMatrixAt(w,_.compose(m,p,y));let S=null;for(let w in l)if(w==="_COLOR_0"){let E=l[w];T.instanceColor=new mn(E.array,E.itemSize,E.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(S===null){let x=T.geometry;S=new dt,S.name=x.name;for(let b in x.attributes)S.setAttribute(b,x.attributes[b]);for(let b in x.morphAttributes)S.morphAttributes[b]=x.morphAttributes[b];x.index!==null&&S.setIndex(x.index),S.morphTargetsRelative=x.morphTargetsRelative;for(let b of x.groups)S.addGroup(b.start,b.count,b.materialIndex);x.boundingBox!==null&&(S.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(S.boundingSphere=x.boundingSphere.clone()),S.drawRange.start=x.drawRange.start,S.drawRange.count=x.drawRange.count,S.userData=Object.assign({},x.userData),T.geometry=S}let E=l[w];S.setAttribute(w,new mn(E.array,E.itemSize,E.normalized))}rt.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),f.push(T)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},zf="glTF",La=12,Uf={JSON:1313821514,BIN:5130562},Wh=class{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,La),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-La,r=new DataView(e,La),a=0;for(;a<n;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Uf.JSON){let c=new Uint8Array(e,La+a,o);this.content=i.decode(c)}else if(l===Uf.BIN){let c=La+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Xh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let d=Kh[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=Kh[h]||h.toLowerCase();if(a[h]!==void 0){let u=i.accessors[e.attributes[h]],f=gr[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){n.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(f)},o,c,ti,u)})})}},qh=class{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Yh=class{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}},Gl=class extends Yi{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,d=(i-t)/h,u=d*d,f=u*d,g=e*c,_=g-c,m=-2*f+3*u,p=f-u,y=1-m,T=p-u+d;for(let S=0;S!==o;S++){let w=a[_+S+o],E=a[_+S+l]*h,x=a[g+S+o],b=a[g+S]*h;r[S]=y*w+T*E+m*x+p*b}return r}},Y_=new pi,$h=class extends Gl{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return Y_.fromArray(r).normalize().toArray(r),r}},Pi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Of={9728:Mt,9729:Pt,9984:Ko,9985:hr,9986:_s,9987:Ci},Ff={33071:Ei,33648:qs,10497:Wi},bh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$_={CUBICSPLINE:void 0,LINEAR:ns,STEP:is},Th={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function K_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new St({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zi})),s.DefaultMaterial}function Ms(s,e,t){for(let i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function tn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Z_(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(n=!0),d.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(i){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(n){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function J_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function j_(s){let e,t=s.extensions&&s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Eh(t.attributes):e=s.indices+":"+Eh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+Eh(s.targets[i]);return e}function Eh(s){let e="",t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function Zh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Q_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ev=new Be,Jh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new q_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&a<98?(this.textureLoader=new aa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ha(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return Ms(r,o,n),tn(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,a){i.load(Sn.resolveURL(t.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let a=bh[n.type],o=gr[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new At(c,a,l))}let r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=bh[n.type],c=gr[n.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0,_,m;if(f&&f!==d){let p=Math.floor(u/f),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,T=t.cache.get(y);T||(_=new c(o,p*f,n.count*f/h),T=new as(_,f/h),t.cache.add(y,T)),m=new On(T,l,u%f/h,g)}else o===null?_=new c(n.count*l):_=new c(o,u,n.count*l),m=new At(_,l,g);if(n.sparse!==void 0){let p=bh.SCALAR,y=gr[n.sparse.indices.componentType],T=n.sparse.indices.byteOffset||0,S=n.sparse.values.byteOffset||0,w=new y(a[1],T,n.sparse.count*p),E=new c(a[2],S,n.sparse.count*l);o!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,b=w.length;x<b;x++){let N=w[x];if(m.setX(N,E[x*l]),l>=2&&m.setY(N,E[x*l+1]),l>=3&&m.setZ(N,E[x*l+2]),l>=4&&m.setW(N,E[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let n=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Of[u.magFilter]||Pt,h.minFilter=Of[u.minFilter]||Ci,h.wrapS=Ff[u.wrapS]||Wi,h.wrapT=Ff[u.wrapT]||Wi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Mt&&h.minFilter!==Pt,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=n.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=i.getDependency("bufferView",a.bufferView).then(function(u){return new Promise(function(f,g){t.parse(u,f,g)})});else{if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(u){return new Promise(function(f,g){let _=f;t.isImageBitmapLoader===!0&&(_=function(m){let p=new Lt(m);p.needsUpdate=!0,f(p)}),t.load(Sn.resolveURL(u,r.path),_,void 0,g)})})}let d=h.then(function(u){return c===!0&&o.revokeObjectURL(l),tn(u,a),u.userData.mimeType=a.mimeType||Q_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Bn,Zt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new tr,Zt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return St}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){let d=n[Xe.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new _e(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],ti),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,yt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ri);let h=r.alphaMode||Th.OPAQUE;if(h===Th.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Th.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ft&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ve(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==ft&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ft){let d=r.emissiveFactor;o.emissive=new _e().setRGB(d[0],d[1],d[2],ti)}return r.emissiveTexture!==void 0&&a!==ft&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,yt)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),tn(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ms(n,d,r),d})}createUniqueName(e){let t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Bf(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=j_(c),d=n[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Bf(new dt,c,t),c.mode===Pi.TRIANGLE_STRIP?u=u.then(f=>Sh(f,Ea)):c.mode===Pi.TRIANGLE_FAN&&(u=u.then(f=>Sh(f,dr))),n[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?K_(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],m=a[f],p,y=c[f];if(m.mode===Pi.TRIANGLES||m.mode===Pi.TRIANGLE_STRIP||m.mode===Pi.TRIANGLE_FAN||m.mode===void 0){let T=r.isSkinnedMesh===!0,S=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");T&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=T&&S?new Yr(_,y):new Me(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Pi.LINES)p=new Kr(_,y);else if(m.mode===Pi.LINE_STRIP)p=new cs(_,y);else if(m.mode===Pi.LINE_LOOP)p=new Zr(_,y);else if(m.mode===Pi.POINTS)p=new hs(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&J_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),tn(p,r),m.extensions&&Ms(n,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Ms(n,d[0],r),d[0];let u=new ct;r.extensions&&Ms(n,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new It(Dl.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Mn(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),tn(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let r=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let d=a[c];if(d){o.push(d);let u=new Be;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new $r(o,l)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=n.channels.length;d<u;d++){let f=n.channels[d],g=n.samplers[f.sampler],_=f.target,m=_.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,y=n.parameters!==void 0?n.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let T=0,S=u.length;T<S;T++){let w=u[T],E=f[T],x=g[T],b=_[T],N=m[T];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let R=i._createAnimationTracks(w,E,x,b,N);if(R)for(let D=0;D<R.length;D++)p.push(R[D])}let y=new ra(r,void 0,p);return tn(y,n),y})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,ev)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,g=d[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Qs:c.length>1?h=new ct:c.length===1?h=c[0]:h=new rt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),tn(h,r),r.extensions&&Ms(i,h,r),r.matrix!==void 0){let d=new Be;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){let d=n.associations.get(h);n.associations.set(h,{...d})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new ct;i.name&&(r.name=n.createUniqueName(i.name)),tn(r,i),i.extensions&&Ms(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){let u=l[h];u.parent!==null?r.add(Nf(u)):r.add(u)}let c=h=>{let d=new Map;for(let[u,f]of n.associations)(u instanceof Zt||u instanceof Lt)&&d.set(u,f);return h.traverse(u=>{let f=n.associations.get(u);f!=null&&d.set(u,f)}),d};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Vn[r.path]===Vn.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Vn[r.path]){case Vn.weights:h=_n;break;case Vn.rotation:h=vn;break;case Vn.translation:case Vn.scale:h=kn;break;default:switch(i.itemSize){case 1:h=_n;break;case 2:case 3:default:h=kn;break}break}let d=n.interpolation!==void 0?$_[n.interpolation]:ns,u=this._getArrayFromAccessor(i);for(let f=0,g=l.length;f<g;f++){let _=new h(l[f]+"."+Vn[r.path],t.array,u,d);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Zh(t.constructor),n=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof vn?$h:Gl;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function tv(s,e,t){let i=e.attributes,n=new mi;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){let h=Zh(gr[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let d=r[c];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){let _=Zh(gr[u.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;let a=new ai;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function Bf(s,e,t){let i=e.attributes,n=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in i){let o=Kh[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(a)}return He.workingColorSpace!==ti&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${He.workingColorSpace}" not supported.`),tn(s,e),tv(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Z_(s,e.targets,t):s})}var Vl=class extends rs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new zi;e.deleteAttribute("uv");let t=new St({side:Dt}),i=new St,n=new Ki(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new Me(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Bi(e,i,6),o=new rt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Me(e,xr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Me(e,xr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Me(e,xr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Me(e,xr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Me(e,xr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Me(e,xr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function xr(s){return new na({color:0,emissive:16777215,emissiveIntensity:s})}var _r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var _i=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},iv=new Mn(-1,1,1,-1,0,1),jh=class extends dt{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},nv=new jh,Wn=class{constructor(e){this._mesh=new Me(nv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var vr=class extends _i{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wn.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Wn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Na=class extends _i{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Wl=class extends _i{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Xl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ve);this._width=i.width,this._height=i.height,t=new Nt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vr(_r),this.copyPass.material.blending=bn,this.timer=new ua}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Na!==void 0&&(a instanceof Na?i=!0:a instanceof Wl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ql=class extends _i{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new _e}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}};var kf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var yr=class s extends _i{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new ve(e.x,e.y):new ve(256,256),this.clearColor=new _e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Nt(r,a,{type:Xt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Nt(r,a,{type:Xt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Nt(r,a,{type:Xt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=kf;this.highPassUniforms=wn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ve(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=wn.clone(_r.uniforms),this.blendMaterial=new Gt({uniforms:this.copyUniforms,vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,premultipliedAlpha:!0,blending:li,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _e,this._oldClearAlpha=1,this._basic=new ft,this._fsQuad=new Wn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new ve(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let n=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),r.push(c)}return new Gt({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new ve(.5,.5)},direction:{value:new ve(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};yr.BlurDirectionX=new ve(1,0);yr.BlurDirectionY=new ve(0,1);var Da={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Yl=class extends _i{constructor(){super(),this.isOutputPass=!0,this.uniforms=wn.clone(Da.uniforms),this.material=new nr({name:Da.name,uniforms:this.uniforms,vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader}),this._fsQuad=new Wn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},He.getTransfer(this._outputColorSpace)===et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ma?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_a?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ga&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var jt=new rt,Qh=new _e,rb=new L,sv={uniforms:{tDiffuse:{value:null},time:{value:0},impact:{value:0},drive:{value:0},crt:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float time,impact,drive,crt;varying vec2 vUv;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    void main(){vec2 uv=vUv;vec2 c=uv-.5;float dist=length(c);uv+=normalize(c+.001)*sin(dist*36.-time*22.)*impact*.002;
      float ab=.00035+impact*.0015+drive*.0008;vec3 color=vec3(texture2D(tDiffuse,uv+vec2(ab,0.)).r,texture2D(tDiffuse,uv).g,texture2D(tDiffuse,uv-vec2(ab,0.)).b);
      color*=1.-smoothstep(.34,.77,dist)*.34; color+= (hash(uv+fract(time))-.5)*.006;
      color=mix(color,vec3(color.r*.75,color.g*.98,color.b*1.17),drive*.27);
      if(crt>.5){color*=.91+.09*sin(uv.y*950.);color*=vec3(.98,1.,.98);}
      gl_FragColor=vec4(color,1.);
    }`},$l=class{constructor(e,t={}){this.canvas=e,this.settings=t,this.time=0,this.stage=-1,this.lastScroll=0,this.shake=0,this.impact=0,this.particles=[],this.enemyMeshes=new Map,this.itemMeshes=new Map,this.quality=t.quality||"high",this.webgl=new Fl({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.webgl.info.autoReset=!1,this.drawCalls=0;let i=this.webgl.getContext(),n=i.getExtension("WEBGL_debug_renderer_info");this.gpu=n?i.getParameter(n.UNMASKED_RENDERER_WEBGL):"WebGL 2",this.webgl.setClearColor(198412),this.webgl.toneMapping=gs,this.webgl.toneMappingExposure=.94,this.scene=new rs,this.scene.background=new _e(198412),this.scene.fog=new Wr(528923,.016),this.camera=new It(31.5,16/9,.1,200),this.camera.position.set(0,0,34),this.camera.lookAt(0,0,0),this.world=new ct,this.scene.add(this.world),this.ambient=new oa(11917799,1384490,.8),this.scene.add(this.ambient),this.key=new Hn(16115151,2.3),this.key.position.set(-7,12,17),this.scene.add(this.key),this.rim=new Hn(4492497,2.1),this.rim.position.set(3,-4,-8),this.scene.add(this.rim),this.fill=new Ki(16739368,70,32,2),this.fill.position.set(7,3,8),this.scene.add(this.fill);let r=new pr(this.webgl),a=new Vl;this.env=r.fromScene(a,.06),this.scene.environment=this.env.texture,this.scene.environmentIntensity=.6,a.dispose(),r.dispose(),this.composer=new Xl(this.webgl),this.composer.addPass(new ql(this.scene,this.camera)),this.bloom=new yr(new ve(1280,720),.3,.45,3.2),this.composer.addPass(this.bloom),this.grade=new vr(sv),this.composer.addPass(this.grade),this.composer.addPass(new Yl),this.geometry={sphere:new Ai(1,16,12),box:new zi(1,1,1),ico:new ds(1,0),torus:new gi(1,.045,8,48)},this.materials={steel:new St({color:1911347,metalness:.86,roughness:.43}),edge:new St({color:4804954,metalness:.84,roughness:.33}),dark:new St({color:593427,metalness:.65,roughness:.5}),flesh:new St({color:2495003,metalness:.32,roughness:.4}),bone:new St({color:7563607,metalness:.37,roughness:.46}),glow:new ft({color:16736028,toneMapped:!1}),cyan:new ft({color:new _e(2729959).multiplyScalar(2),toneMapped:!1}),distant:new St({color:529437,metalness:.5,roughness:.75})},this.makeSurfaceTextures(),this.makeStars(),this.makeParticleSystem(),this.makeProjectiles(),this.makeForce(),this.playerGroup=new ct,this.world.add(this.playerGroup),this.heroGroup=new ct,this.scene.add(this.heroGroup),this.heroAngle=0,this.makeExhaust(this.playerGroup),this.makeExhaust(this.heroGroup),this.resize(),window.addEventListener("resize",()=>this.resize()),this.contextLost=!1,e.addEventListener("webglcontextlost",o=>{o.preventDefault(),this.contextLost=!0,window.dispatchEvent(new CustomEvent("renderer-lost"))}),e.addEventListener("webglcontextrestored",()=>location.reload())}async load(e=()=>{}){let i=await new kl().loadAsync(new URL("models/requiem.glb",document.baseURI).href,n=>e(n.total?n.loaded/n.total:.5));this.templates={};for(let n of["r9","scout","interceptor","carrier","turret","organism","sentinel","leviathan","dreadnought"]){let r=i.scene.getObjectByName(n);if(!r)throw new Error("Missing Blender asset: "+n);this.templates[n]=r,r.traverse(a=>{a.isMesh&&(a.castShadow=!1,a.receiveShadow=!1,a.frustumCulled=!0)})}this.templates.leviathan.traverse(n=>{if(n.isMesh)for(let r of Array.isArray(n.material)?n.material:[n.material])r.name==="Alien muscular tissue"&&this.materials.flesh.copy(r),r.name==="Calcified exoskeleton"&&this.materials.bone.copy(r)}),this.ship=this.clone("r9"),this.ship.scale.setScalar(.49),this.playerGroup.add(this.ship),this.hero=this.clone("r9"),this.hero.scale.setScalar(2.05),this.heroGroup.add(this.hero),this.makeBits(),e(1)}clone(e){let t=this.templates[e].clone(!0);return t.position.set(0,0,0),t}resize(){let e=window.innerWidth,t=window.innerHeight;this.portrait=e/t<1.25;let i=this.portrait?e*9/16:t;this.canvas.style.height=i+"px",this.canvas.style.top=this.portrait?(t-i)/2+"px":"0px";let n=this.quality==="ultra"?2560:this.quality==="high"?1920:this.quality==="low"?1e3:1440,r=Math.min(devicePixelRatio,this.quality==="ultra"?1.7:this.quality==="high"?1.25:this.quality==="low"?.7:1,n/e);this.webgl.setPixelRatio(r),this.webgl.setSize(e,i,!1),this.composer.setPixelRatio(r),this.composer.setSize(e,i),this.camera.aspect=e/i,this.camera.fov=this.camera.aspect<16/9?2*Math.atan(17/this.camera.aspect/34)*180/Math.PI:31.5,this.camera.updateProjectionMatrix(),this.bloom.enabled=this.quality!=="low"}makeStars(){let e=Zn(3456),t=[],i=[];for(let c=0;c<1600;c++){t.push((e()-.5)*180,(e()-.5)*90,-10-e()*110);let h=.3+e()*.7;i.push(h*.75,h*.86,h)}let n=new dt;n.setAttribute("position",new je(t,3)),n.setAttribute("color",new je(i,3)),this.stars=new hs(n,new Bn({size:.1,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.8,depthWrite:!1})),this.scene.add(this.stars);let r=document.createElement("canvas");r.width=1024,r.height=512;let a=r.getContext("2d");a.fillStyle="#020711",a.fillRect(0,0,1024,512);for(let c=0;c<35;c++){let h=e()*1024,d=e()*512,u=60+e()*240,f=a.createRadialGradient(h,d,0,h,d,u);f.addColorStop(0,c%3===0?"rgba(56,39,71,.11)":"rgba(18,73,91,.14)"),f.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=f,a.fillRect(0,0,1024,512)}let o=new zn(r);o.colorSpace=yt,this.nebula=new Me(new fs(190,95),new ft({map:o,depthWrite:!1})),this.nebula.position.z=-100,this.scene.add(this.nebula),this.planet=new Me(new Ai(11,48,32),new St({color:2504009,roughness:.86,metalness:.1})),this.planet.position.set(25,-5,-45),this.scene.add(this.planet);let l=new Me(new Ai(11.25,32,24),new ft({color:4361146,transparent:!0,opacity:.07,side:Dt,blending:li,depthWrite:!1}));this.planet.add(l)}makeSurfaceTextures(){let e=Zn(4921),t=document.createElement("canvas");t.width=1024,t.height=1024;let i=t.getContext("2d");i.fillStyle="#78858b",i.fillRect(0,0,1024,1024);for(let r=0;r<1024;r+=128)for(let a=0;a<1024;a+=256){let o=Math.floor(98+e()*38);i.fillStyle=`rgb(${o},${o+10},${o+15})`,i.fillRect(a+3,r+3,250,122),i.strokeStyle="#2b383f",i.lineWidth=3,i.strokeRect(a+3,r+3,250,122),i.strokeStyle="#bac6c8",i.lineWidth=1,i.strokeRect(a+6,r+6,244,116);for(let l of[13,241])for(let c of[13,113])i.fillStyle="#35464f",i.beginPath(),i.arc(a+l,r+c,3,0,Math.PI*2),i.fill(),i.fillStyle="#acb5b5",i.fillRect(a+l-1,r+c-1,2,1);if(e()>.55){i.fillStyle="#39474e";for(let l=0;l<8;l++)i.fillRect(a+85+l*8,r+45,4,30)}e()>.75&&(i.fillStyle="#b5a47c",i.fillRect(a+20,r+80,30,5),i.font="7px monospace",i.fillText("R9 / 0"+Math.floor(e()*10),a+20,r+95))}for(let r=0;r<1800;r++){let a=e()*1024,o=e()*1024;i.strokeStyle=e()>.5?"#ffffff10":"#00000018",i.lineWidth=1,i.beginPath(),i.moveTo(a,o),i.lineTo(a+e()*23,o+e()*4),i.stroke()}let n=new zn(t);n.colorSpace=yt,n.wrapS=n.wrapT=Wi,n.repeat.set(2,1),n.anisotropy=4,this.materials.steel.map=n,this.materials.steel.color.set(5334901),this.materials.steel.bumpMap=n,this.materials.steel.bumpScale=.065,this.materials.edge.map=n,this.materials.edge.color.set(6386812),this.materials.edge.bumpMap=n,this.materials.edge.bumpScale=.035}makeParticleSystem(){this.particleMesh=new Bi(new ds(.08,0),new ft({transparent:!0,opacity:.86,blending:li,depthWrite:!1,toneMapped:!1}),1100),this.particleMesh.instanceMatrix.setUsage(Aa),this.particleMesh.frustumCulled=!1,this.particleMesh.count=0,this.scene.add(this.particleMesh)}makeProjectiles(){this.projectileMesh=new Bi(new Ai(1,8,6),new ft({toneMapped:!1}),850),this.projectileMesh.instanceMatrix.setUsage(Aa),this.projectileMesh.frustumCulled=!1,this.projectileMesh.count=0,this.scene.add(this.projectileMesh),this.trailMesh=new Bi(new Ai(1,8,6),new ft({transparent:!0,opacity:.3,blending:li,depthWrite:!1,toneMapped:!1}),850),this.trailMesh.instanceMatrix.setUsage(Aa),this.trailMesh.frustumCulled=!1,this.trailMesh.count=0,this.scene.add(this.trailMesh)}makeForce(){this.forceGroup=new ct,this.world.add(this.forceGroup);let e=new St({color:16738832,emissive:16731139,emissiveIntensity:2.2,metalness:.5,roughness:.18});this.forceCore=new Me(new Ai(.44,24,16),e),this.forceGroup.add(this.forceCore),this.forceRings=[];for(let a=0;a<3;a++){let o=new Me(new gi(.59+a*.04,.04,8,40),this.materials.edge);o.rotation.set(a*.7,a*1.1,.4),this.forceGroup.add(o),this.forceRings.push(o);for(let l=0;l<3;l++){let c=new Me(new zi(.24,.11,.1),this.materials.edge);c.position.set(Math.cos(l*Math.PI*2/3)*.65,Math.sin(l*Math.PI*2/3)*.65,0),o.add(c)}}let t=document.createElement("canvas");t.width=128,t.height=128;let i=t.getContext("2d"),n=i.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255,149,36,.6)"),n.addColorStop(.2,"rgba(255,92,8,.23)"),n.addColorStop(1,"rgba(255,52,0,0)"),i.fillStyle=n,i.fillRect(0,0,128,128),this.glowTexture=new zn(t);let r=new js(new os({map:this.glowTexture,transparent:!0,blending:li,depthWrite:!1,toneMapped:!1}));r.scale.set(3.5,3.5,1),this.forceGroup.add(r),this.forceLight=new Ki(16735765,11,5,2),this.forceGroup.add(this.forceLight)}makeExhaust(e){let t=new Me(new us(.22,1.7,16),new ft({color:3320569,transparent:!0,opacity:.5,blending:li,depthWrite:!1,toneMapped:!1}));t.rotation.z=Math.PI/2,t.position.x=-1.5,e.add(t);let i=new Me(new us(.09,1,12),new ft({color:new _e(2,4,6),transparent:!0,opacity:.8,blending:li,depthWrite:!1,toneMapped:!1}));i.rotation.z=Math.PI/2,i.position.x=-1.15,e.add(i),e.userData.exhaust=[t,i]}makeBits(){this.bits=[];for(let t=0;t<2;t++){let i=new ct,n=new Me(new ds(.2,1),this.materials.edge),r=new Me(new gi(.23,.028,6,24),this.materials.cyan);i.add(n,r),this.world.add(i),this.bits.push(i)}this.charge=new ct,this.world.add(this.charge);let e=new ft({color:new _e(.8,2,3),transparent:!0,opacity:.6,blending:li,depthWrite:!1,toneMapped:!1});this.chargeBall=new Me(new Ai(.25,16,12),e),this.charge.add(this.chargeBall),this.chargeRing=new Me(new gi(.5,.012,6,48),e),this.chargeRing.rotation.y=Math.PI/2,this.charge.add(this.chargeRing)}setStage(e){for(let r of this.obstacleMeshes||[])this.world.remove(r);this.scenery&&(this.scene.remove(this.scenery),this.scenery.traverse(r=>{r.userData.ownGeometry&&r.geometry.dispose()})),this.stage=e,this.lastScroll=-99,this.scenery=new ct,this.scene.add(this.scenery),this.decor=[],this.obstacleMeshes=[];let t=_t[e],i=["organic","neural","heart","bones"].includes(t.theme),n=Zn(300+e);this.scene.background.set(t.bg),this.scene.fog.color.set(t.fog),this.rim.color.set(t.color),this.planet.material.color.set(t.color).multiplyScalar(.17),this.planet.visible=!i,this.stars.material.opacity=i?.2:.8,this.wallMaterial=i?this.materials.flesh:this.materials.steel,this.wallMeshes=[];for(let r of[-1,1]){let a=new dt,o=new Float32Array(260*3),l=[];for(let h=0;h<64;h++)for(let[d,u,f,g]of[[0,1,5,4],[0,4,6,2],[1,3,7,5]]){let _=h*4;l.push(_+d,_+u,_+f,_+d,_+f,_+g)}a.setAttribute("position",new At(o,3)),a.setIndex(l),a.setAttribute("uv",new At(new Float32Array(260*2),2));let c=new Me(a,this.wallMaterial);c.userData.ownGeometry=!0,c.userData.side=r,c.frustumCulled=!1,this.scenery.add(c),this.wallMeshes.push(c)}for(let r=0;r<26;r++){let a=new ct;if(a.userData.wx=r*4-50,a.userData.side=r%2?1:-1,a.userData.depth=-3-n()*4,i){for(let o=0;o<3;o++){let l=new Me(new gi(2.2+o*.2,.12,6,28,Math.PI*1.2),t.theme==="bones"?this.materials.bone:this.materials.edge);l.rotation.set(.2,Math.PI/2,0),l.position.set(o*.24,0,-o*.65),l.userData.ownGeometry=!0,a.add(l)}for(let o=0;o<4;o++){let l=new Me(this.geometry.sphere,this.materials.flesh);l.scale.set(.5+n(),.5+n(),.5+n()),l.position.set(n()*2-1,n()*.7,-n()*2),a.add(l);let c=new Me(this.geometry.sphere,new ft({color:t.theme==="heart"?16734011:t.theme==="neural"?6513887:3843445,toneMapped:!1}));c.scale.setScalar(.065),c.position.copy(l.position).add(new L(.1,.5,.6)),a.add(c)}}else{let o=new Me(this.geometry.box,this.materials.edge);o.scale.set(.28,4.8,2.6),o.rotation.z=r%2?.18:-.18,a.add(o);for(let c=0;c<3;c++){let h=new Me(this.geometry.box,this.materials.dark);h.position.set(c*.63-1,.3,-.3),h.scale.set(.52,2.7,1.5),a.add(h);let d=new Me(this.geometry.box,c===1?this.materials.glow:this.materials.cyan);d.position.set(c*.63-1,-1.1,.5),d.scale.set(.35,.055,.05),a.add(d)}let l=new Me(new ir(.12,.12,4,8),this.materials.edge);l.rotation.z=Math.PI/2,l.position.set(0,.8,1),l.userData.ownGeometry=!0,a.add(l)}this.scenery.add(a),this.decor.push(a)}for(let r=0;r<16;r++){let a=new ct;if(a.position.set((n()-.5)*130,(n()-.5)*20,-16-n()*22),i){let o=new Me(new gi(6+n()*5,.3,8,48),t.theme==="bones"?this.materials.bone:this.materials.flesh);o.rotation.y=Math.PI/2,a.add(o),o.userData.ownGeometry=!0}else{for(let l=0;l<5;l++){let c=new Me(this.geometry.box,this.materials.distant);c.position.set(l*3,Math.sin(l)*2,0),c.rotation.z=.5,c.scale.set(1.3,12+n()*7,2),a.add(c)}let o=new Me(this.geometry.box,this.materials.cyan);o.scale.set(8,.024,.1),o.position.y=-2,a.add(o)}a.rotation.z=(n()-.5)*.5,a.userData.wx=a.position.x,this.scenery.add(a),this.decor.push(a),a.userData.distant=!0}this.removeBoss(),this.clearEntities()}makeTitleBackdrop(){if(this.titleRing)return;let e=new ct;e.position.set(13,1,-21),e.rotation.set(.35,.8,-.2),this.scene.add(e),this.titleRing=e;let t=new Me(new gi(14,.32,12,96),this.materials.steel);e.add(t);let i=new Me(new gi(13.4,.035,6,96),this.materials.cyan);e.add(i);for(let n=0;n<48;n++){let r=n*Math.PI*2/48,a=new Me(this.geometry.box,this.materials.edge);if(a.position.set(Math.cos(r)*14,Math.sin(r)*14,0),a.rotation.z=r,a.scale.set(.6,1.1,1.9),e.add(a),n%3===0){let o=new Me(this.geometry.box,this.materials.glow);o.position.copy(a.position),o.position.z=1,o.rotation.z=r,o.scale.set(.08,.7,.05),e.add(o)}}}clearEntities(){for(let e of this.enemyMeshes.values())this.world.remove(e);for(let e of this.itemMeshes.values())this.world.remove(e);this.enemyMeshes.clear(),this.itemMeshes.clear()}removeBoss(){if(this.bossGroup){for(let e of this.bossGroup.userData.beams||[])this.world.remove(e),e.material.dispose();this.world.remove(this.bossGroup),this.bossGroup=null}}makeBoss(e){this.removeBoss();let t=new ct;this.world.add(t),this.bossGroup=t,this.bossId=e.id;let i=e.type==="serpent"||e.type==="heart"?"leviathan":e.type,n=this.clone(i);n.scale.setScalar(i==="dreadnought"?1.6:1.25),t.add(n),t.userData.body=n,e.type==="heart"&&n.scale.set(1.3,1.8,1.4);let r=new Me(new Ai(.65,24,16),new St({color:16751714,emissive:16721426,emissiveIntensity:2.4,metalness:.2,roughness:.25}));r.position.set(-1.65,0,.6),t.add(r),t.userData.core=r;let a=new Me(new ia(.5,.06,64,6,2,3),this.materials.bone);r.add(a),a.userData.ownGeometry=!0,t.userData.shutters=[];for(let o of[-1,1]){let l=new ct;l.position.set(-1.65,0,.65);let c=new Me(this.geometry.sphere,e.type==="sentinel"||e.type==="dreadnought"?this.materials.edge:this.materials.flesh);c.position.y=o*.48,c.scale.set(.85,.55,.44),l.add(c),t.add(l),t.userData.shutters.push({panel:l,side:o})}t.userData.parts=[];for(let o of e.parts){let l=this.clone("turret");l.scale.set(.95,o.oy>0?-.95:.95,.95),l.position.set(o.ox-.5,o.oy,.5),t.add(l),t.userData.parts.push(l)}if(t.userData.tail=[],["leviathan","serpent","heart"].includes(e.type))for(let o=0;o<16;o++){let l=new ct,c=new Me(this.geometry.sphere,o%2?this.materials.flesh:this.materials.bone);c.scale.set(.4,.55,.45),l.add(c),t.add(l),t.userData.tail.push(l);let h=new Me(new us(.17,.7,6),this.materials.bone);h.position.y=.65,h.userData.ownGeometry=!0,l.add(h)}t.userData.beams=[];for(let o=0;o<3;o++){let l=new Me(this.geometry.box,new ft({color:16734517,transparent:!0,opacity:.3,blending:li,depthWrite:!1,toneMapped:!1}));l.visible=!1,this.world.add(l),t.userData.beams.push(l)}}burst(e,t,i=18,n=16752718,r=1){let a=this.quality==="low"?Math.ceil(i*.45):i;for(let o=0;o<a&&this.particles.length<1100;o++){let l=Math.random()*Math.PI*2,c=(1+Math.random()*8)*r;this.particles.push({x:e,y:t,z:(Math.random()-.5)*.6,vx:Math.cos(l)*c,vy:Math.sin(l)*c,vz:(Math.random()-.5)*c,age:0,life:(.25+Math.random()*.65)*(r>2?1.5:1),scale:.3+Math.random()*1.8,color:n})}}event(e){e.type==="explosion"&&(this.burst(e.x,e.y,32,16757084,e.size||1),this.shake=Math.max(this.shake,.12)),e.type==="playerDeath"&&(this.burst(e.x,e.y,110,7522559,1.8),this.burst(e.x,e.y,80,16747312,2),this.shake=.8,this.impact=1),e.type==="bossDeath"&&(this.burst(e.x,e.y,260,16758368,3.8),this.burst(e.x-1,e.y,160,8964863,2.2),this.shake=1.2,this.impact=1.5,this.removeBoss()),e.type==="partBreak"&&(this.burst(e.x,e.y,70,16752698,1.5),this.shake=.3),e.type==="wave"&&(this.burst(e.x+1,e.y,25,6077439,1),this.shake=Math.max(this.shake,.12+e.power*.07),this.impact=.3),e.type==="hit"&&this.burst(e.x,e.y,4,16762747,.3),e.type==="armour"&&this.burst(e.x,e.y,3,10475519,.25),e.type==="block"&&this.burst(e.x,e.y,3,16748861,.25),e.type==="pickup"&&this.burst(this.playerGroup.position.x,this.playerGroup.position.y,40,7853567,1.1),e.type==="drive"&&(this.burst(this.playerGroup.position.x,this.playerGroup.position.y,100,6543359,2),this.impact=1)}updateEnvironment(e){this.stage!==e.stage&&this.setStage(e.stage);let t=e.scroll;if(Math.abs(t-this.lastScroll)>.18){for(let i of this.wallMeshes){let n=i.userData.side,r=i.geometry.attributes.position.array,a=i.geometry.attributes.uv.array;for(let o=0;o<65;o++){let l=-29+o*58/64,c=Kn(e.stage,t+l),h=n>0?c.top:c.bottom,d=[l,h,1.2,l,h+n*.3,-4.5,l,n*16,1.5,l,n*16,-4.5];r.set(d,o*12);let u=(t+l)*.09;a.set([u,h*.13,u,h*.13+.7,u,n*16*.13,u,n*16*.13+.7],o*8)}i.geometry.attributes.position.needsUpdate=!0,i.geometry.attributes.uv.needsUpdate=!0,i.geometry.computeVertexNormals()}this.lastScroll=t}for(let i of this.decor){if(i.userData.distant){i.position.x=((i.userData.wx-t*.32+80)%160+160)%160-80;continue}let n=((i.userData.wx-t+52)%104+104)%104-52,r=Kn(e.stage,t+n),a=i.userData.side;i.position.set(n,(a>0?r.top:r.bottom)+a*.25,i.userData.depth),i.rotation.z=a>0?Math.PI:0}if(this.obstacleMeshes.length!==e.obstacles.length){for(let i of this.obstacleMeshes)this.world.remove(i);this.obstacleMeshes=[];for(let i of e.obstacles){let n=new ct,r=new Me(this.geometry.box,this.materials.steel);r.scale.set(i.w,i.h,3.2),n.add(r);let a=new Me(this.geometry.box,this.materials.edge);a.scale.set(i.w+.15,.16,3.5),a.position.y=i.y>0?-i.h/2:i.h/2,n.add(a);for(let o=0;o<Math.min(12,Math.floor(i.w/.7));o++){let l=new Me(this.geometry.box,o%2?this.materials.dark:this.materials.glow);l.position.set((o-(Math.min(12,Math.floor(i.w/.7))-1)/2)*.32,i.y>0?-i.h/2+.18:i.h/2-.18,1.64),l.scale.set(.22,.24,.04),l.rotation.z=-.35,n.add(l)}this.world.add(n),this.obstacleMeshes.push(n)}}this.obstacleMeshes.forEach((i,n)=>i.position.set(e.obstacles[n].wx-t,e.obstacles[n].y,-.4))}syncGame(e,t){let i=e.player,n=e.force;this.updateEnvironment(e),this.heroGroup.visible=!1,this.world.visible=!0,this.titleRing&&(this.titleRing.visible=!1),this.playerGroup.position.set(i.x,i.y,.45),this.playerGroup.visible=e.mode!=="dying"&&e.mode!=="over",i.invuln>0?this.ship.visible=Math.floor(this.time*18)%3!==0:this.ship.visible=!0,this.ship.rotation.set(ui(this.ship.rotation.x,-i.vy*.028,t*8),-.06,ui(this.ship.rotation.z,i.vy*.012,t*8)),this.playerGroup.userData.exhaust.forEach((o,l)=>{o.scale.y=.8+Math.sin(this.time*64+l)*.18+(e.driveTime>0?.8:0)}),this.forceGroup.visible=n.mode!=="none",this.forceGroup.position.set(n.x,n.y,.45),this.forceGroup.scale.setScalar(.8+i.level*.07),this.forceRings.forEach((o,l)=>{o.rotation.x+=t*(l+1)*.7,o.rotation.z+=t*(l+1)}),this.bits.forEach((o,l)=>{o.visible=i.bits>l,o.position.set(i.x,i.y+(l===0?1.05:-1.05),.5),o.rotation.set(this.time,0,this.time*2)}),this.charge.visible=i.charge>.08&&this.playerGroup.visible,this.charge.position.set(i.x+.9,i.y,.6),this.charge.scale.setScalar(.2+i.charge*1.3),this.chargeRing.rotation.x=this.time*8,this.chargeRing.rotation.z=this.time*3,this.chargeBall.material.opacity=.3+i.charge*.6;let r=new Set;for(let o of e.enemies){r.add(o.id);let l=this.enemyMeshes.get(o.id);l||(l=this.clone(o.type),l.scale.setScalar(o.type==="carrier"||o.type==="turret"?.85:.83),this.enemyMeshes.set(o.id,l),this.world.add(l)),l.position.set(o.x,o.y,.3),o.type==="turret"?(l.rotation.z=0,l.scale.y=o.top?-.85:.85):(l.rotation.x=Math.sin(o.age*2)*.18,l.rotation.z=Math.sin(o.age*2)*.07)}for(let[o,l]of this.enemyMeshes)r.has(o)||(this.world.remove(l),this.enemyMeshes.delete(o));let a=new Set;for(let o of e.items){a.add(o.id);let l=this.itemMeshes.get(o.id);if(!l){let c=new ct,h=new Me(new ta(.34),new St({color:16777215,emissive:bi[o.type]?.color||7592378,emissiveIntensity:2.5,metalness:.5,roughness:.2})),d=new Me(new gi(.6,.024,6,32),this.materials.edge);if(c.add(h,d),!bi[o.type]){let u=document.createElement("canvas");u.width=64,u.height=64;let f=u.getContext("2d");f.font="bold 42px monospace",f.textAlign="center",f.fillStyle="#e7f8ee",f.fillText(o.type==="missile"?"M":o.type==="bit"?"B":"S",32,48);let g=new js(new os({map:new zn(u),depthTest:!1}));g.scale.set(.65,.65,1),g.position.set(0,0,1),c.add(g)}l=c,this.itemMeshes.set(o.id,l),this.world.add(l),l.userData.ownGeometry=!0}l.position.set(o.x,o.y,.65),l.rotation.y=this.time*2,l.rotation.z=this.time*.7,l.children[0].material.emissive.set(bi[o.type]?.color||7592378)}for(let[o,l]of this.itemMeshes)a.has(o)||(this.world.remove(l),l.children[0].geometry.dispose(),l.children[0].material.dispose(),l.children[1].geometry.dispose(),this.itemMeshes.delete(o));if(e.boss){let o=e.boss;(this.bossId!==o.id||!this.bossGroup)&&this.makeBoss(o);let l=this.bossGroup;l.position.set(o.x,o.y,-.1),l.userData.body.rotation.x=Math.sin(o.age*.6)*.06,l.userData.core.scale.setScalar(1+Math.sin(o.age*7)*.045),l.userData.core.material.emissiveIntensity=o.flash>0?7:o.open?3:.5;for(let{panel:c,side:h}of l.userData.shutters)c.position.y=ui(c.position.y,o.open?h*1:0,t*5);l.userData.parts.forEach((c,h)=>c.visible=o.parts[h].hp>0),l.userData.tail.forEach((c,h)=>{c.position.set(1.2+(o.type==="serpent"?-1:1)*h*.46,Math.sin(o.age*1.7-h*.45)*(1+h*.13),-.3),c.scale.setScalar(1.5-h*.062),c.rotation.z=Math.cos(o.age*1.7-h*.45)*.4}),l.userData.beams.forEach((c,h)=>{let d=o.hazards[h];if(c.visible=!!d,d){let u=d.age>d.warn;c.position.set((o.x-2-18)/2,d.y,1.2),c.scale.set(o.x-2+18,u?d.r*2:.025,.06),c.material.opacity=u?.85:.25+Math.sin(this.time*18)*.14}})}else this.bossGroup&&this.removeBoss();this.syncProjectiles(e),this.playerGroup.visible&&Math.random()<.6&&this.particles.push({x:i.x-.9,y:i.y,z:.4,vx:-5,vy:0,vz:0,age:0,life:.25,scale:.5,color:3383039})}syncProjectiles(e){let t=0;for(let i of[...e.shots,...e.bullets]){if(t>=850)break;let n=!!i.grazed||i.grazed===!1,r=i.type==="wave",a=n?i.type==="heavy"?16722806:16738361:r?8900607:i.type==="helix"?16736057:i.type==="reflect"?3976959:i.type==="crawler"?16757550:i.type==="missile"?16755282:9560575;jt.position.set(i.x,i.y,1.05),jt.rotation.set(0,0,Math.atan2(i.vy||0,i.vx||1)),jt.scale.set(n?i.r*.8:r?.95+(i.power||1)*.4:i.type==="missile"?.31:.32,n?i.r*.8:r?i.r*.7:i.r*.65,n?i.r*.8:r?i.r*.45:.09),jt.updateMatrix(),this.projectileMesh.setMatrixAt(t,jt.matrix),this.projectileMesh.setColorAt(t,Qh.set(a).multiplyScalar(n?1.7:2.2)),jt.position.x-=n?i.vx*.015:i.vx*.019,jt.position.y-=n?i.vy*.015:(i.vy||0)*.019,jt.scale.multiplyScalar(r?1.5:1.8),n||(jt.scale.x*=1.8),jt.updateMatrix(),this.trailMesh.setMatrixAt(t,jt.matrix),this.trailMesh.setColorAt(t,Qh.set(a).multiplyScalar(1.1)),t++}this.projectileMesh.count=t,this.trailMesh.count=t,this.projectileMesh.instanceMatrix.needsUpdate=!0,this.trailMesh.instanceMatrix.needsUpdate=!0,t&&(this.projectileMesh.instanceColor.needsUpdate=!0,this.trailMesh.instanceColor.needsUpdate=!0)}syncTitle(e,t){this.makeTitleBackdrop(),this.world.visible=!1,this.heroGroup.visible=!0,this.titleRing.visible=!0,this.scenery&&(this.scenery.visible=!1),this.projectileMesh.count=0,this.trailMesh.count=0,this.scene.background.set(198412),this.scene.fog.color.set(528923),this.planet.visible=!0,this.stars.material.opacity=.65;let i=t==="hangar";this.heroGroup.position.set(i?3.8:7.6,i?.3:.3+Math.sin(this.time*.35)*.25,i?3:1.8),this.heroGroup.rotation.set(-.15+Math.sin(this.time*.2)*.045,i?this.heroAngle+this.time*.075:-.42+Math.sin(this.time*.17)*.12,-.1+Math.sin(this.time*.23)*.02),this.heroGroup.scale.setScalar(i?1.3:1.15),this.heroGroup.userData.exhaust.forEach((n,r)=>{n.position.x=r===0?-4.5:-4,n.scale.set(3,2.5+Math.sin(this.time*35)*.3,3)}),this.fill.position.set(9,2,6),this.fill.intensity=30,this.rim.color.set(6924769),this.charge&&(this.charge.visible=!1),this.titleRing.rotation.z+=e*.004}render(e,t,i="title"){if(this.contextLost)return;this.time+=t,this.shake=Math.max(0,this.shake-t*1.9),this.impact=Math.max(0,this.impact-t*1.6),this.stars.rotation.y=Math.sin(this.time*.02)*.03,e?(this.scenery&&(this.scenery.visible=!0),this.syncGame(e,t),this.fill.position.set(e.player.x+3,3,8),this.fill.intensity=35):this.syncTitle(t,i);let n=this.settings.shake===!1?0:this.shake;this.camera.position.set((Math.random()-.5)*n*.35,(Math.random()-.5)*n*.3,34),this.particles=this.particles.filter(a=>a.age<a.life);let r=0;for(let a of this.particles)a.age+=t,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.vx*=1-t*1.5,a.vy*=1-t*1.5,jt.position.set(a.x,a.y,a.z),jt.rotation.set(a.age*3,a.age*2,0),jt.scale.setScalar(a.scale*Math.max(0,1-a.age/a.life)),jt.updateMatrix(),this.particleMesh.setMatrixAt(r,jt.matrix),this.particleMesh.setColorAt(r,Qh.set(a.color).multiplyScalar(2)),r++;this.particleMesh.count=r,this.particleMesh.instanceMatrix.needsUpdate=!0,r&&(this.particleMesh.instanceColor.needsUpdate=!0),this.grade.uniforms.time.value=this.time,this.grade.uniforms.impact.value=this.impact,this.grade.uniforms.drive.value=e?.driveTime>0?1:0,this.grade.uniforms.crt.value=this.settings.crt?1:0,this.bloom.strength=e?.driveTime>0?.5:.3,this.webgl.info.reset(),this.composer.render(),this.drawCalls=this.webgl.info.render.calls}};var Ss=[{title:"Beyond the Derelict",ja:"\u5EC3\u589F\u306E\u5411\u3053\u3046\u3078",bpm:132,root:38,lead:[0,7,12,10,7,3,5,7,0,7,14,12,10,7,5,3],chords:[0,-3,5,-5],flavor:"metal"},{title:"A Heart That Is Not Yours",ja:"\u8AB0\u3067\u3082\u306A\u3044\u9F13\u52D5",bpm:124,root:40,lead:[0,1,7,8,7,3,1,-2,0,7,12,13,10,8,7,1],chords:[0,1,-4,-2],flavor:"organic"},{title:"Steel Has a Memory",ja:"\u92FC\u306F\u8A18\u61B6\u3059\u308B",bpm:142,root:36,lead:[0,3,7,12,10,7,3,5,7,10,14,12,7,5,3,-2],chords:[0,5,-3,7],flavor:"metal"},{title:"Cathedral of Sparks",ja:"\u706B\u82B1\u306E\u5927\u8056\u5802",bpm:140,root:37,lead:[0,7,10,12,7,10,15,14,12,10,7,5,3,7,5,2],chords:[0,-5,3,-2],flavor:"metal"},{title:"Where the Stars Go to Die",ja:"\u661F\u306E\u7720\u308B\u5834\u6240",bpm:116,root:39,lead:[0,7,12,15,14,10,7,3,5,10,12,14,10,7,3,0],chords:[0,-3,-5,-2],flavor:"ether"},{title:"Anatomy of a Dream",ja:"\u5922\u306E\u89E3\u5256",bpm:136,root:35,lead:[0,1,5,7,8,12,13,7,5,1,0,-2,5,7,8,1],chords:[0,1,-2,-4],flavor:"organic"},{title:"Nothing Left Behind",ja:"\u3053\u306E\u5148\u306B\u6B8B\u3059\u3082\u306E",bpm:148,root:38,lead:[0,7,12,14,15,14,12,7,10,14,17,15,14,10,7,5],chords:[0,5,-3,-5],flavor:"metal"},{title:"Requiem for the Living",ja:"\u751F\u304D\u3066\u9084\u308B\u8005\u306E\u305F\u3081\u306E\u93AE\u9B42\u6B4C",bpm:128,root:38,lead:[0,7,10,12,15,14,12,10,7,5,3,5,7,10,7,0],chords:[0,-5,-3,5],flavor:"ether"},{title:"The Shape of Fear",ja:"\u6050\u6016\u306E\u8F2A\u90ED",bpm:154,root:35,lead:[0,1,0,7,6,7,12,13,12,7,6,1,0,7,6,1],chords:[0,1,0,-2],flavor:"boss"},{title:"A Small Light in the Void",ja:"\u865A\u7A7A\u306B\u706F\u3059",bpm:92,root:38,lead:[0,7,12,14,10,7,5,3,0,7,15,14,12,10,7,5],chords:[0,-3,5,-5],flavor:"title"},{title:"Homeward",ja:"\u5E30\u9084",bpm:108,root:41,lead:[0,4,7,12,11,7,4,2,4,7,12,14,12,11,7,4],chords:[0,5,7,0],flavor:"ending"}],rv=s=>440*2**((s-69)/12),Kl=class s{constructor(e={}){this.volume=e.volume??.65,this.musicVolume=e.music??.65,this.sfxVolume=e.sfx??.8,this.mode=e.soundMode||"modern",this.muted=!1,this.track=9,this.step=0,this.next=0,this.started=!1,this.paused=!1,this.lastShot=0}async start(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e({latencyHint:"interactive"}),this.buildGraph()}this.ctx.state==="suspended"&&await this.ctx.resume(),this.started||(this.next=this.ctx.currentTime+.05,this.started=!0)}buildGraph(){let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.volume*.7;let t=e.createDynamicsCompressor();t.threshold.value=-12,t.knee.value=12,t.ratio.value=5,t.attack.value=.003,t.release.value=.16,this.master.connect(t),t.connect(e.destination),this.music=e.createGain(),this.music.gain.value=this.musicVolume*.5,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=this.sfxVolume,this.sfx.connect(this.master);let i=Zn(9001),n=e.sampleRate*2;this.noise=e.createBuffer(1,n,e.sampleRate);let r=this.noise.getChannelData(0);for(let h=0;h<n;h++)r[h]=i()*2-1;let a=e.createBuffer(2,e.sampleRate*2.1,e.sampleRate);for(let h=0;h<2;h++){let d=a.getChannelData(h);for(let u=0;u<d.length;u++)d[u]=(i()*2-1)*Math.pow(1-u/d.length,3.3)}this.reverb=e.createConvolver(),this.reverb.buffer=a;let o=e.createGain();o.gain.value=.22,this.reverb.connect(o),o.connect(this.music),this.delay=e.createDelay(.8),this.delay.delayTime.value=.24;let l=e.createGain();l.gain.value=.28;let c=e.createGain();c.gain.value=.17,this.delay.connect(l),l.connect(this.delay),this.delay.connect(c),c.connect(this.music)}async renderTrack(e,t=32){let n=new s({volume:.85,music:.85,sfx:.75,soundMode:this.mode});n.ctx=new OfflineAudioContext(2,Math.ceil(t*44100),44100),n.buildGraph(),n.track=e;let r=60/Ss[e].bpm/4;for(let g=0,_=.02;_<t-1.2;_+=r,g++)n.sequence(g,_,r);n.master.gain.setValueAtTime(.85*.7,t-1.2),n.master.gain.linearRampToValueAtTime(0,t-.03);let a=await n.ctx.startRendering(),o=a.getChannelData(0),l=a.getChannelData(1),c=0,h=0,d=new ArrayBuffer(44+o.length*4),u=new DataView(d),f=(g,_)=>{for(let m=0;m<_.length;m++)u.setUint8(g+m,_.charCodeAt(m))};f(0,"RIFF"),u.setUint32(4,36+o.length*4,!0),f(8,"WAVE"),f(12,"fmt "),u.setUint32(16,16,!0),u.setUint16(20,1,!0),u.setUint16(22,2,!0),u.setUint32(24,44100,!0),u.setUint32(28,44100*4,!0),u.setUint16(32,4,!0),u.setUint16(34,16,!0),f(36,"data"),u.setUint32(40,o.length*4,!0);for(let g=0;g<o.length;g++){let _=o[g],m=l[g];c=Math.max(c,Math.abs(_),Math.abs(m)),h+=_*_+m*m,u.setInt16(44+g*4,Et(_,-1,1)*32767,!0),u.setInt16(46+g*4,Et(m,-1,1)*32767,!0)}return{blob:new Blob([d],{type:"audio/wav"}),peak:c,rms:Math.sqrt(h/(o.length*2)),seconds:t,rate:44100}}play(e){this.track!==e&&(this.track=e,this.step=0,this.ctx&&(this.next=this.ctx.currentTime+.08))}apply(){if(!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.muted?0:this.volume*.7,e,.05),this.music.gain.setTargetAtTime(this.paused?this.musicVolume*.17:this.musicVolume*.5,e,.12),this.sfx.gain.setTargetAtTime(this.sfxVolume,e,.04)}tick(){if(!this.ctx||!this.started||this.ctx.state!=="running")return;let e=60/Ss[this.track].bpm/4;for(this.next<this.ctx.currentTime-.2&&(this.next=this.ctx.currentTime+.03);this.next<this.ctx.currentTime+.18;)this.sequence(this.step++,this.next,e),this.next+=e}tone(e,t,i,n,r="lead",a=0){let o=this.ctx,l=o.createOscillator(),c=o.createGain(),h=o.createBiquadFilter(),d=o.createStereoPanner(),u=rv(e);l.frequency.value=u,d.pan.value=a,l.type=r==="pad"||r==="bass"?"sawtooth":this.mode==="fm"?"sine":"sawtooth",h.type="lowpass",h.frequency.setValueAtTime(r==="bass"?1800:r==="pad"?1e3:4400,t),h.frequency.exponentialRampToValueAtTime(r==="bass"?130:r==="pad"?500:1e3,t+i),h.Q.value=r==="bass"?3.4:.7;let f=r==="pad"?.14:.008;if(c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(n,t+f),c.gain.exponentialRampToValueAtTime(.001,t+Math.max(f+.04,i)),l.connect(h),h.connect(c),c.connect(d),d.connect(this.music),r!=="bass"&&(d.connect(this.reverb),r==="lead"&&d.connect(this.delay)),this.mode==="fm"&&r!=="pad"){let g=o.createOscillator(),_=o.createGain();g.frequency.value=u*2,_.gain.setValueAtTime(u*2.3,t),_.gain.exponentialRampToValueAtTime(1,t+i),g.connect(_),_.connect(l.frequency),g.start(t),g.stop(t+i+.04)}else if(r==="lead"||r==="pad"){let g=o.createOscillator();g.type="sawtooth",g.frequency.value=u,g.detune.value=r==="pad"?-11:7,g.connect(h),g.start(t),g.stop(t+i+.04)}l.start(t),l.stop(t+i+.04)}drum(e,t,i=1){let n=this.ctx,r=n.createGain();if(r.connect(this.music),e==="kick"){let a=n.createOscillator();a.frequency.setValueAtTime(145,t),a.frequency.exponentialRampToValueAtTime(39,t+.14),r.gain.setValueAtTime(.62*i,t),r.gain.exponentialRampToValueAtTime(.001,t+.28),a.connect(r),a.start(t),a.stop(t+.3)}else{let a=n.createBufferSource();a.buffer=this.noise;let o=n.createBiquadFilter();o.type="highpass",o.frequency.value=e==="hat"?8500:1400,a.connect(o),o.connect(r),r.gain.setValueAtTime((e==="hat"?.075:.22)*i,t),r.gain.exponentialRampToValueAtTime(.001,t+(e==="hat"?.055:.17)),a.start(t),a.stop(t+.2),e==="snare"&&this.tone(50,t,.1,.035,"bass")}}sequence(e,t,i){let n=Ss[this.track],r=Math.floor(e/16),a=e%16,o=Math.floor(r/8)%4,l=n.chords[Math.floor(r/2)%4],c=n.root+l,h=n.flavor==="title"||n.flavor==="ending";if(a===0){let d=n.flavor==="ending";for(let u of[0,d?4:3,7,14])this.tone(c+12+u,t,i*17,.028,"pad",(u-7)/12)}if(a%2===0){let d=[0,0,12,7,0,12,10,7];this.tone(c+d[a/2],t,i*1.35,h?.09:.18,"bass")}if(a%2===0||!h&&a===15){let d=(Math.floor(a/2)+r%2*8)%16,u=n.root+24+n.lead[(d+o*4)%16];o===2&&(u+=12),this.tone(u,t,i*(a%4===0?2.7:1.3),h?.035:.06,"lead",Math.sin(e*.21)*.32)}if((!h||r%4>1)&&([0,6,8,14].includes(a)&&this.drum("kick",t,h?.55:1),(a===4||a===12)&&this.drum("snare",t,h?.6:1),(a%2===0||o===3)&&this.drum("hat",t,a%4===0?1:.65),r%8===7&&a>=12&&this.drum("snare",t,.35+(a-12)*.12)),!h&&a%2===1){let d=[0,7,12,15,19,15,12,7];this.tone(c+24+d[Math.floor(a/2)],t,i*.7,.018,"lead",a%4===1?-.65:.65)}}effect(e,t={}){if(!this.ctx||!this.started)return;let i=this.ctx,n=i.currentTime;if(e==="shot"&&n-this.lastShot<.095)return;e==="shot"&&(this.lastShot=n);let r={shot:[950,290,.09,.045,"square"],wave:[130,38,.65,.3,"sawtooth"],charged:[500,1100,.22,.1,"sine"],forceLaunch:[240,70,.34,.17,"sawtooth"],forceRecall:[120,630,.3,.1,"sine"],forceDock:[600,1200,.14,.1,"sine"],pickup:[650,1600,.24,.17,"sine"],extend:[550,1800,.45,.2,"sine"],drive:[55,260,.8,.26,"sawtooth"],hit:[180,55,.065,.06,"square"],armour:[1800,450,.045,.028,"triangle"],block:[1400,600,.04,.025,"sine"],graze:[1e3,1400,.04,.02,"sine"],missile:[180,80,.18,.07,"sawtooth"],ui:[800,1050,.055,.04,"sine"]}[e];if(r){let[a,o,l,c,h]=r,d=i.createOscillator(),u=i.createGain(),f=i.createStereoPanner();d.type=h,d.frequency.setValueAtTime(a,n),d.frequency.exponentialRampToValueAtTime(o,n+l),u.gain.setValueAtTime(c,n),u.gain.exponentialRampToValueAtTime(.001,n+l),f.pan.value=Et((t.x||0)/24,-.8,.8),d.connect(u),u.connect(f),f.connect(this.sfx),d.start(n),d.stop(n+l+.02)}if(["explosion","playerDeath","bossDeath","partBreak","wave"].includes(e)){let a=e==="bossDeath"?3:e==="playerDeath"?1.5:1,o=e==="wave"?.5:.55*a,l=i.createBufferSource(),c=i.createBiquadFilter(),h=i.createGain();l.buffer=this.noise,l.loop=!0,c.type="lowpass",c.frequency.setValueAtTime(3200,n),c.frequency.exponentialRampToValueAtTime(70,n+o),h.gain.setValueAtTime((e==="wave"?.16:.29)*Math.min(a,1.6),n),h.gain.exponentialRampToValueAtTime(.001,n+o),l.connect(c),c.connect(h),h.connect(this.sfx),l.start(n),l.stop(n+o+.02);let d=i.createOscillator(),u=i.createGain();d.frequency.setValueAtTime(e==="bossDeath"?85:115,n),d.frequency.exponentialRampToValueAtTime(24,n+o),u.gain.setValueAtTime(.35,n),u.gain.exponentialRampToValueAtTime(.001,n+o),d.connect(u),u.connect(this.sfx),d.start(n),d.stop(n+o+.03)}}};var qe=s=>document.querySelector(s),Ft=qe("#ui"),lu=qe("#game"),av={volume:.65,music:.65,sfx:.75,quality:"high",soundMode:"modern",shake:!0,crt:!1,classic:!1,autoFire:!1};function Vf(s,e){try{return JSON.parse(localStorage.getItem(s))??e}catch{return e}}var ht={...av,...Vf("requiem-settings-v1",{})},nn=Vf("requiem-records-v1",[]);Array.isArray(nn)||(nn=[]);var su=nn.reduce((s,e)=>Math.max(s,Number(e.score)||0),0),si,We=new Kl(ht),se=null,$e="title",Ga="title",za="arcade",ka=1,cu="red",ec=!1,eu=0,Oa=0,tu=0,ru=60,Zl=0,au=0,jl=!1,Es=ht.autoFire,sn=null,Ql=0,Wf="",Mr=0,iu=[],Hf=0,nu=!1,hu=!1,Sr=new Set,Li=new Set,hi={x:0,y:0,fire:!1,rapid:!1},Xn=new URLSearchParams(location.search),uu=Xn.get("qa")==="1";["ultra","high","medium","low"].includes(Xn.get("quality"))&&(ht.quality=Xn.get("quality"));var Ua=0,Jl=0;function Ts(){try{localStorage.setItem("requiem-settings-v1",JSON.stringify(ht))}catch{}}function Fa(s){return String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Ba(s){return Math.max(0,Math.floor(s)).toString().padStart(8,"0")}function An(s,e=3){Wf=s,Ql=e}async function Xf(){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{An("\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3\u306F\u3053\u306E\u74B0\u5883\u3067\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093")}}function qf(){We.muted=!We.muted,We.apply();let s=qe('[data-action="mute"]');s&&(s.textContent=We.muted?"SOUND OFF":"SOUND ON")}function ni(s){if(!hu)return;se&&s!=="play"&&s!=="pause"&&(se.paused=!0),$e=s,Sr.clear(),Li.clear(),document.body.classList.toggle("in-game",!!se&&["play","pause","settings","help"].includes(s)),qe("#touch").hidden=!($e==="play"&&matchMedia("(pointer:coarse)").matches),Ha(),We.paused=$e==="pause",We.apply(),!se&&$e!=="music"&&We.play(9);let e=Ft.querySelector("button:not(.back):not(.sound-toggle)");e&&$e!=="play"&&e.focus({preventScroll:!0})}function du(s=0,e=!1){if(We.start(),se=new Xa({stage:s,difficulty:za,practice:e,classic:ht.classic}),e){for(let t=0;t<ka;t++)se.collect(cu);ka&&(se.collect("missile"),se.collect("bit"),se.collect("bit"),se.force.mode="front",se.force.x=se.player.x+1.6,se.force.y=se.player.y),se.debugInvincible=ec}jl=!1,sn=null,Mr=0,Oa=0,Es=ht.autoFire,ni("play"),lu.focus({preventScroll:!0}),We.play(_t[s].track)}function ov(){se=null,sn=null,Mr=0,Ga="title",si.clearEntities(),ni("title"),We.play(9)}function lv(s){Ga=se?"pause":"title",ni(s)}function br(){!se||!["play","pause"].includes($e)||["over","victory"].includes(se.mode)||(se.paused=$e==="play",ni(se.paused?"pause":"play"),se.paused||lu.focus({preventScroll:!0}))}function cv(){return`<div class="topbar"><div class="wordmark">R-TYPE<span>//</span>REQUIEM</div><div class="top-meta mono"><span class="desktop-only"><i class="status-dot"></i>FLIGHT SYSTEM ONLINE</span><span class="desktop-only">WEBGL 2 \xB7 3D</span><button data-action="mute" class="sound-toggle">${We.muted?"SOUND OFF":"SOUND ON"}</button></div></div>`}function bs(s,e,t=""){return`<button class="back" data-action="back">\u2190 BACK</button><div class="overlay-head"><div><div class="eyebrow">${s}</div><h1>${e}</h1></div><p>${t}</p></div>`}function Ha(){$e==="title"?Ft.innerHTML=`${cv()}<div class="title-content"><div class="eyebrow title-kicker">A TRIBUTE TO THE LEGEND \xB7 REBUILT IN 3D</div><h1 class="game-title">R<span class="hyphen">-</span>TYPE</h1><div class="subtitle">REQUIEM</div><p class="title-copy"><strong>\u6700\u5F8C\u306E\u4E00\u6A5F\u3067\u3001\u305D\u306E\u5148\u3078\u3002</strong><br>\u4EBA\u985E\u306E\u5883\u754C\u7DDA\u3092\u8D8A\u3048\u308B\u30018\u3064\u306E\u6226\u5834\u3002</p><nav class="main-nav" aria-label="\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC"><button class="nav-btn primary" data-action="sortie"><span>01</span><b>SORTIE</b><small>\u51FA\u6483\u3059\u308B</small><span class="arrow">\u2197</span></button><button class="nav-btn" data-action="practice"><span>02</span><b>FLIGHT TRAINING</b><small>\u30B9\u30C6\u30FC\u30B8\u9078\u629E</small><span class="arrow">\u203A</span></button><button class="nav-btn" data-action="hangar"><span>03</span><b>HANGAR</b><small>\u6A5F\u4F53\u3092\u898B\u308B</small><span class="arrow">\u203A</span></button><button class="nav-btn" data-action="music"><span>04</span><b>SOUND ARCHIVE</b><small>\u97F3\u697D\u3092\u8074\u304F</small><span class="arrow">\u203A</span></button><button class="nav-btn" data-action="settings"><span>05</span><b>SYSTEM</b><small>\u8A2D\u5B9A\u30FB\u64CD\u4F5C</small><span class="arrow">\u203A</span></button></nav></div><div class="signal" aria-hidden="true"></div><aside class="title-aside"><div class="eyebrow">TACTICAL FIGHTER</div><p class="ship-name">R-9 / ARROWHEAD</p><div class="tech">CERAMIC ARMOUR \xB7 WAVE CANNON<br>DETACHABLE FORCE SYSTEM<br>BLENDER MODEL / REAL-TIME PBR</div></aside><footer class="title-footer"><small>UNOFFICIAL FAN TRIBUTE \xB7 ORIGINAL 3D ASSETS & MUSIC</small><span class="footer-controls"><kbd>\u2191\u2193</kbd> SELECT &nbsp; <kbd>ENTER</kbd> CONFIRM &nbsp; <kbd>F</kbd> FULLSCREEN</span><button class="sound-toggle" data-action="credits">ABOUT / CREDITS</button></footer>`:$e==="sortie"?Ft.innerHTML=`<section class="overlay">${bs("01 / MISSION PREPARATION","SORTIE","\u8FCE\u6483\u6A5F\u3001\u5F85\u6A5F\u5B8C\u4E86\u3002<br>\u96E3\u6613\u5EA6\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002")}<div class="launch-layout"><div><p class="section-label">ENGAGEMENT LEVEL / \u96E3\u6613\u5EA6</p><div class="difficulty-list">${Object.entries(Er).map(([s,e])=>`<button class="difficulty ${za===s?"selected":""}" data-difficulty="${s}"><span class="diff-name">${e.name}</span><span class="jp">${e.ja}</span><p>${s==="cadet"?"\u6B8B\u6A5F5\u30FB\u9045\u3044\u6575\u5F3E\u30FB\u88C5\u5099\u3092\u4FDD\u6301\u3057\u3066\u5FA9\u5E30":s==="arcade"?"\u6B8B\u6A5F3\u30FB\u4E00\u6483\u6B7B\u30FB\u5730\u5F62\u63A5\u89E6\u6B7B\u30FB\u88C5\u5099\u3092\u5931\u3063\u3066\u5FA9\u5E30":"\u6B8B\u6A5F3\u30FB\u9AD8\u901F\u5F3E\u30FB\u9AD8\u5BC6\u5EA6\u306E\u653B\u6483\u30FB\u6483\u3061\u8FD4\u3057\u5F3E"}</p></button>`).join("")}</div></div><div><p class="section-label">FIRST CONTACT</p><div class="mission"><div class="eyebrow">SECTOR 01 / 08</div><h2>DERELICT GATE</h2><p>\u5EC3\u68C4\u3055\u308C\u305F\u8ECC\u9053\u65BD\u8A2D\u304B\u3089\u3001\u53CD\u5FDC\u304C\u623B\u3063\u305F\u3002<br>\u305D\u306E\u5965\u3067\u5F85\u3064\u3082\u306E\u3092\u3001\u78BA\u304B\u3081\u306B\u884C\u304F\u3002</p><div class="weapon-legend"><span style="--c:#de8f55">FORCE</span><span style="--c:#76b8d0">WAVE CANNON</span></div></div><label class="check-line"><input id="classic" type="checkbox" ${ht.classic?"checked":""}>\u30AF\u30E9\u30B7\u30C3\u30AF\u30EB\u30FC\u30EB\uFF08\u6642\u9593\u6E1B\u901F\u3092\u7121\u52B9\u5316\uFF09</label><button class="launch-button" data-action="launch">LAUNCH / \u767A\u9032\u3059\u308B <span>\u2192</span></button><p class="settings-note"><kbd>\u77E2\u5370 / WASD</kbd> \u79FB\u52D5\u3000<kbd>C</kbd> \u9023\u5C04<br><kbd>Z / Space</kbd> \u9577\u62BC\u3057\u3057\u3066\u96E2\u3059\uFF1A\u6CE2\u52D5\u7832<br><kbd>X</kbd> \u30D5\u30A9\u30FC\u30B9\u5C04\u51FA\uFF0F\u56DE\u53CE</p></div></div></section>`:$e==="practice"?Ft.innerHTML=`<section class="overlay">${bs("02 / FLIGHT TRAINING","SECTOR SELECT","\u5168\u30B9\u30C6\u30FC\u30B8\u3092\u81EA\u7531\u306B\u7DF4\u7FD2\u3067\u304D\u307E\u3059\u3002<br>\u7DF4\u7FD2\u4E2D\u306E\u5F97\u70B9\u306F\u30E9\u30F3\u30AD\u30F3\u30B0\u306B\u8A18\u9332\u3055\u308C\u307E\u305B\u3093\u3002")}<div class="stages">${_t.map((s,e)=>`<button class="stage-button" data-stage="${e}" style="--stage-color:#${s.color.toString(16).padStart(6,"0")}"><span class="stage-no">0${e+1} / 08</span><strong>${s.name}</strong><small>${s.ja}</small></button>`).join("")}</div><div class="practice-options"><label>\u958B\u59CB\u88C5\u5099 <select id="practice-level">${[0,1,2,3].map(s=>`<option value="${s}" ${ka===s?"selected":""}>${s===0?"\u88C5\u5099\u306A\u3057":"FORCE LV."+s}</option>`).join("")}</select></label><label>\u30EC\u30FC\u30B6\u30FC <select id="practice-weapon">${Object.entries(bi).map(([s,e])=>`<option value="${s}" ${cu===s?"selected":""}>${e.name}</option>`).join("")}</select></label><label class="check-line"><input id="practice-invincible" type="checkbox" ${ec?"checked":""}>\u30D5\u30EA\u30FC\u30D5\u30E9\u30A4\u30C8\uFF08\u88AB\u5F3E\u30FB\u63A5\u89E6\u3067\u30DF\u30B9\u3057\u306A\u3044\uFF09</label><label>\u96E3\u6613\u5EA6 <select id="practice-difficulty">${Object.entries(Er).map(([s,e])=>`<option value="${s}" ${za===s?"selected":""}>${e.name}</option>`).join("")}</select></label></div><p class="settings-note">\u8A13\u7DF4\u3067\u306F\u6B8B\u6A5F\u306E\u5236\u9650\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6700\u7D42\u30B9\u30C6\u30FC\u30B8\u306E\u6838\u306F\u3001\u958B\u3044\u305F\u9699\u306B\u30D5\u30A9\u30FC\u30B9\u3092\u76F4\u63A5\u9001\u308A\u8FBC\u3093\u3067\u7834\u58CA\u3057\u307E\u3059\u3002</p></section>`:$e==="hangar"?Ft.innerHTML='<section class="overlay narrow" style="background:linear-gradient(90deg,#03080cf5,transparent 75%)"><button class="back" data-action="back">\u2190 BACK</button><div class="hangar-content"><div class="eyebrow">03 / TACTICAL FIGHTER HANGAR</div><h1>R-9</h1><div class="eyebrow" style="color:#92adb9">ARROWHEAD / REQUIEM SPEC.</div><p>\u767D\u3044\u30BB\u30E9\u30DF\u30C3\u30AF\u88C5\u7532\u3002\u9752\u3044\u30AD\u30E3\u30CE\u30D4\u30FC\u3002<br>\u5C0F\u3055\u306A\u6A5F\u4F53\u306B\u3001\u4EBA\u985E\u306E\u6700\u5F8C\u306E\u5207\u308A\u672D\u3092\u3002</p><div class="specs"><div class="spec"><span>PRIMARY</span><b>\u4E8C\u6BB5\u968E\u30C1\u30E3\u30FC\u30B8\u6CE2\u52D5\u7832</b></div><div class="spec"><span>FORCE</span><b>\u524D\u5F8C\u5408\u4F53 / \u5C04\u51FA / \u56DE\u53CE</b></div><div class="spec"><span>LASER SYSTEM</span><b>HELIX / REFLECT / CRAWLER</b></div><div class="spec"><span>SUPPORT</span><b>\u30D3\u30C3\u30C8 \xD7 2 / \u8FFD\u5C3E\u30DF\u30B5\u30A4\u30EB</b></div><div class="spec"><span>BUILD</span><b>Blender 5.2 / glTF 2.0</b></div></div><div class="hangar-actions"><button class="plain-btn" data-action="rotate-left">\u21B6 ROTATE</button><button class="plain-btn" data-action="rotate-right">ROTATE \u21B7</button></div><p>\u6A5F\u4F53\u30FB\u88C5\u7532\u30FB\u5404\u90E8\u306E\u91D1\u5C5E\u53CD\u5C04\u3092\u3001<br>\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u306E3D\u63CF\u753B\u3067\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002</p></div><div class="hangar-hint">PBR MATERIALS / REAL-TIME LIGHTING / ORIGINAL MESH</div></section>':$e==="settings"?Ft.innerHTML=`<section class="overlay settings">${bs("05 / SYSTEM CONFIGURATION","SYSTEM","\u8A2D\u5B9A\u306F\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002")}<div class="settings-grid"><div><p class="section-label">DISPLAY / \u8868\u793A</p><div class="setting-row"><label for="quality">\u63CF\u753B\u54C1\u8CEA<small>RENDER RESOLUTION / BLOOM</small></label><select id="quality">${[["ultra","ULTRA"],["high","HIGH"],["medium","BALANCED"],["low","PERFORMANCE"]].map(([s,e])=>`<option value="${s}" ${ht.quality===s?"selected":""}>${e}</option>`).join("")}</select></div><div class="setting-row"><label for="shake">\u753B\u9762\u306E\u63FA\u308C<small>CAMERA IMPACT</small></label><input type="checkbox" id="shake" ${ht.shake?"checked":""}></div><div class="setting-row"><label for="crt">\u8D70\u67FB\u7DDA<small>CRT OVERLAY</small></label><input type="checkbox" id="crt" ${ht.crt?"checked":""}></div><div class="setting-row"><label for="autofire">\u81EA\u52D5\u9023\u5C04<small>CHARGE HAS PRIORITY</small></label><input type="checkbox" id="autofire" ${ht.autoFire?"checked":""}></div><div class="setting-row"><span>\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3</span><button class="plain-btn" data-action="fullscreen">\u5207\u308A\u66FF\u3048\u308B \u2197</button></div></div><div><p class="section-label">AUDIO / \u97F3\u97FF</p><div class="setting-row"><label for="volume">\u5168\u4F53\u97F3\u91CF<small>MASTER</small></label><input id="volume" type="range" min="0" max="1" step=".01" value="${ht.volume}"></div><div class="setting-row"><label for="music">\u97F3\u697D<small>MUSIC</small></label><input id="music" type="range" min="0" max="1" step=".01" value="${ht.music}"></div><div class="setting-row"><label for="sfx">\u52B9\u679C\u97F3<small>SOUND EFFECTS</small></label><input id="sfx" type="range" min="0" max="1" step=".01" value="${ht.sfx}"></div><div class="setting-row"><label for="sound-mode">\u97F3\u6E90<small>SYNTHESIS ENGINE</small></label><select id="sound-mode"><option value="modern" ${ht.soundMode==="modern"?"selected":""}>MODERN / \u30B7\u30F3\u30BB</option><option value="fm" ${ht.soundMode==="fm"?"selected":""}>ARCADE / FM</option></select></div><p class="settings-note">\u516811\u66F2\u306E\u72EC\u81EA\u697D\u66F2\u3068\u52B9\u679C\u97F3\u3092\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u5408\u6210\u3002<br>\u97F3\u306F\u6700\u521D\u306E\u30DC\u30BF\u30F3\u64CD\u4F5C\u5F8C\u306B\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002</p></div></div><div style="display:flex;gap:12px;margin-top:28px"><button class="plain-btn" data-action="help">\u64CD\u4F5C\u30FB\u30EB\u30FC\u30EB \u2192</button><button class="plain-btn" data-action="records">FLIGHT RECORDS \u2192</button></div></section>`:$e==="help"?Ft.innerHTML=`<section class="overlay">${bs("PILOT MANUAL / FLIGHT SYSTEM","HOW TO PLAY","\u6B66\u5668\u3092\u4F7F\u3044\u5206\u3051\u3001\u5730\u5F62\u3092\u8AAD\u307F\u3001\u9699\u3092\u5F85\u3064\u3002")}<div class="help-grid"><article class="help-block"><div class="eyebrow">01 / MOVE & FIRE</div><h2>\u6483\u3061\u7D9A\u3051\u308B\u304B\u3001\u4E00\u767A\u306B\u8CED\u3051\u308B\u304B\u3002</h2><p><kbd>\u2191\u2193\u2190\u2192</kbd> / <kbd>WASD</kbd> \u3067\u79FB\u52D5\u3002<kbd>C</kbd> \u3092\u62BC\u3057\u7D9A\u3051\u308B\u3068\u9023\u5C04\u3002<kbd>Z</kbd> / <kbd>Space</kbd> \u3092\u9577\u62BC\u3057\u3059\u308B\u3068\u30C1\u30E3\u30FC\u30B8\u3002\u96E2\u3059\u3068\u3001\u6575\u3092\u8CAB\u901A\u3059\u308B\u6CE2\u52D5\u7832\u3092\u767A\u5C04\u3057\u307E\u3059\u3002\u7D041.65\u79D2\u3067\u6700\u5927\u51FA\u529B\u3002\u6E9C\u3081\u3066\u3044\u308B\u9593\u306F\u9023\u5C04\u304C\u6B62\u307E\u308A\u307E\u3059\u3002</p><p><kbd>Shift</kbd> \u30B9\u30D4\u30FC\u30C9\u5207\u66FF\uFF08S\u30A2\u30A4\u30C6\u30E0\u3067\u4E0A\u9650\u4E0A\u6607\uFF09\u3002<kbd>T</kbd> \u81EA\u52D5\u9023\u5C04\u3002<kbd>P / Esc</kbd> \u30DD\u30FC\u30BA\u3002</p></article><article class="help-block"><div class="eyebrow">02 / FORCE SYSTEM</div><h2>\u76FE\u306B\u3082\u3001\u77DB\u306B\u3082\u306A\u308B\u30D5\u30A9\u30FC\u30B9\u3002</h2><div class="force-diagram"><span class="fighter">\u27A4</span><span class="force-dot"></span><span>\u21C4</span><span class="force-dot"></span><span class="fighter">\u27A4</span></div><p><kbd>X</kbd> \u3067\u5C04\u51FA\u3001\u3082\u3046\u4E00\u5EA6\u3067\u56DE\u53CE\u3002\u6A5F\u4F53\u306E\u524D\u306B\u89E6\u308C\u308B\u3068\u524D\u65B9\u5408\u4F53\u3001\u5F8C\u308D\u306A\u3089\u5F8C\u65B9\u5408\u4F53\u3002\u901A\u5E38\u5F3E\u3092\u5438\u53CE\u3057\u3001\u63A5\u89E6\u3057\u305F\u6575\u306B\u30C0\u30E1\u30FC\u30B8\u3092\u4E0E\u3048\u307E\u3059\u3002\u5730\u5F62\u3092\u901A\u904E\u3067\u304D\u308B\u305F\u3081\u3001\u5371\u967A\u306A\u5834\u6240\u3078\u5148\u884C\u3055\u305B\u3089\u308C\u307E\u3059\u3002</p></article><article class="help-block"><div class="eyebrow">03 / POWER-UP</div><h2>\u6226\u5834\u306B\u5408\u308F\u305B\u3066\u3001\u30EC\u30FC\u30B6\u30FC\u3092\u9078\u3076\u3002</h2><p>\u767D\u3044\u88DC\u7D66\u6A5F\u3092\u58CA\u3057\u3066\u30A2\u30A4\u30C6\u30E0\u3092\u53D6\u5F97\u3002\u8D64\u306F\u87BA\u65CB\u72B6\u306E\u5BFE\u7A7A\u30EC\u30FC\u30B6\u30FC\u3001\u9752\u306F\u4E0A\u4E0B\u306E\u58C1\u3067\u53CD\u5C04\u3059\u308B\u30EC\u30FC\u30B6\u30FC\u3001\u9EC4\u306F\u5E8A\u3084\u5929\u4E95\u3092\u9019\u3046\u5BFE\u5730\u30EC\u30FC\u30B6\u30FC\u3002\u30AF\u30EA\u30B9\u30BF\u30EB3\u500B\u3067\u6700\u5927\u30EC\u30D9\u30EB\u3002\u7DD1\u306E\u88C5\u5099\u306F\u30DF\u30B5\u30A4\u30EB\u3001\u30D3\u30C3\u30C8\u3001\u30B9\u30D4\u30FC\u30C9\u3092\u5F37\u5316\u3057\u307E\u3059\u3002</p><div class="weapon-legend"><span style="--c:#ff6742">HELIX</span><span style="--c:#54b9f3">REFLECT</span><span style="--c:#eec852">CRAWLER</span></div></article><article class="help-block"><div class="eyebrow">04 / SURVIVE</div><h2>\u5C0F\u3055\u306A\u5224\u5B9A\u3002\u5927\u304D\u306A\u6C7A\u65AD\u3002</h2><p>\u88AB\u5F3E\u5224\u5B9A\u306F\u6A5F\u4F53\u4E2D\u592E\u306E\u5C0F\u3055\u306A\u9818\u57DF\u3002\u6575\u30FB\u5730\u5F62\u3068\u306E\u63A5\u89E6\u3082\u4E00\u6483\u3067\u30DF\u30B9\u3057\u3001\u76F4\u524D\u306E\u30C1\u30A7\u30C3\u30AF\u30DD\u30A4\u30F3\u30C8\u3078\u623B\u308A\u307E\u3059\u3002ARCADE\u3068ACE\u3067\u306F\u88C5\u5099\u3092\u5931\u3044\u307E\u3059\u3002\u6B8B\u6A5F\u304C\u306A\u304F\u306A\u3063\u3066\u3082\u30B3\u30F3\u30C6\u30A3\u30CB\u30E5\u30FC\u3067\u304D\u307E\u3059\u3002</p><p>\u30DC\u30B9\u306E\u88C5\u7532\u306F\u653B\u6483\u3092\u9632\u304E\u307E\u3059\u3002\u4E0A\u4E0B\u306E\u7832\u53F0\u3092\u58CA\u3059\u3068\u653B\u6483\u304C\u6E1B\u308A\u307E\u3059\u3002\u5149\u308B\u6838\u304C\u958B\u3044\u305F\u77AC\u9593\u3092\u72D9\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u6700\u5F8C\u306E\u6838\u306F\u30D5\u30A9\u30FC\u30B9\u306B\u3088\u308B\u76F4\u63A5\u653B\u6483\u3060\u3051\u304C\u6709\u52B9\u3067\u3059\u3002</p></article><article class="help-block"><div class="eyebrow">05 / REQUIEM DRIVE</div><h2>\u4E00\u77AC\u3092\u3001\u5207\u308A\u62D3\u304F\u3002</h2><p>\u6575\u306E\u6483\u7834\u3068\u6575\u5F3E\u3059\u308C\u3059\u308C\u306E\u56DE\u907F\u3067DRIVE\u304C\u84C4\u7A4D\u3002100%\u3067 <kbd>Q</kbd> \u3092\u62BC\u3059\u3068\u3001\u7D044.5\u79D2\u9593\u3001\u6575\u3068\u6575\u5F3E\u306E\u6642\u9593\u304C\u6E1B\u901F\u3057\u3001\u6CE2\u52D5\u7832\u306E\u30C1\u30E3\u30FC\u30B8\u304C\u901F\u304F\u306A\u308A\u307E\u3059\u3002\u30AF\u30E9\u30B7\u30C3\u30AF\u30EB\u30FC\u30EB\u3067\u306F\u7121\u52B9\u3067\u3059\u3002</p></article><article class="help-block"><div class="eyebrow">06 / OTHER CONTROLS</div><h2>\u30AD\u30FC\u30DC\u30FC\u30C9\u3001\u30D1\u30C3\u30C9\u3001\u30BF\u30C3\u30C1\u3002</h2><p>\u30B2\u30FC\u30E0\u30D1\u30C3\u30C9\uFF1A\u5DE6\u30B9\u30C6\u30A3\u30C3\u30AF / \u5341\u5B57\u30AD\u30FC\u3067\u79FB\u52D5\u3001A\u3067\u6E9C\u3081\u6483\u3061\u3001B\u3067\u30D5\u30A9\u30FC\u30B9\u3001X\u3067\u9023\u5C04\u3001Y\u3067DRIVE\u3001RB\u3067\u901F\u5EA6\u3001START\u3067\u30DD\u30FC\u30BA\u3002\u30BF\u30C3\u30C1\uFF1A\u5DE6\u5074\u306E\u30B9\u30C6\u30A3\u30C3\u30AF\u3067\u79FB\u52D5\u3001\u53F3\u306EWAVE\u3092\u9577\u62BC\u3057\u3001RAPID\u3067\u9023\u5C04\u3001FORCE\u3067\u5C04\u51FA\uFF0F\u56DE\u53CE\u3002</p><p><kbd>F</kbd> \u5168\u753B\u9762\u3001<kbd>M</kbd> \u30DF\u30E5\u30FC\u30C8\u3002\u5225\u30BF\u30D6\u3078\u79FB\u308B\u3068\u81EA\u52D5\u3067\u4E00\u6642\u505C\u6B62\u3057\u307E\u3059\u3002\u30BF\u30C3\u30C1\u7AEF\u672B\u306F\u6A2A\u5411\u304D\u304C\u304A\u3059\u3059\u3081\u3067\u3059\u3002</p></article></div></section>`:$e==="music"?Ft.innerHTML=`<section class="overlay">${bs("04 / ORIGINAL SOUND ARCHIVE","SOUND ARCHIVE","11 compositions \xB7 real-time synthesis<br>MODERN ANALOG / ARCADE FM")}<div class="music-layout"><div class="track-list">${Ss.map((s,e)=>`<button class="track ${We.track===e?"selected":""}" data-track="${e}"><span>${String(e+1).padStart(2,"0")}</span><strong>${s.title}</strong><small>${s.bpm} BPM</small></button>`).join("")}</div><div><div class="record" aria-hidden="true"></div><div class="now-playing">${Fa(Ss[We.track].title)}<small>${Fa(Ss[We.track].ja)}</small></div><p class="music-disclaimer">\u672C\u4F5C\u306E\u305F\u3081\u306E\u30AA\u30EA\u30B8\u30CA\u30EB\u697D\u66F2\u3002<br>\u30B7\u30F3\u30BB\u30B5\u30A4\u30B6\u30FC\u3001FM\u97F3\u6E90\u3001\u30C9\u30E9\u30E0\u3001\u6B8B\u97FF\u3092<br>\u30D6\u30E9\u30A6\u30B6\u30FC\u5185\u3067\u5408\u6210\u3057\u3066\u3044\u307E\u3059\u3002</p><div style="text-align:center"><button class="plain-btn" data-action="export-audio" style="margin:0 8px 12px">EXPORT / WAV</button><button class="plain-btn" data-action="sound-mode">\u97F3\u6E90\uFF1A${We.mode==="fm"?"ARCADE FM":"MODERN"}</button></div></div></div></section>`:$e==="records"?Ft.innerHTML=`<section class="overlay">${bs("PERSONAL FLIGHT LOG","FLIGHT RECORDS","\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u30FC\u306E\u4E0A\u4F4D10\u8A18\u9332\u3002<br>\u7DF4\u7FD2\u30E2\u30FC\u30C9\u306F\u8A18\u9332\u5BFE\u8C61\u5916\u3067\u3059\u3002")}${nn.length?nn.map((s,e)=>`<div class="record-row"><span class="rank">${String(e+1).padStart(2,"0")}</span><strong>${Ba(s.score)}</strong><small>${Fa(s.difficulty.toUpperCase())} \xB7 ${s.clear?"CLEAR":"ST "+(s.stage+1)}</small><small class="record-date">${Fa(s.date)}</small></div>`).join(""):'<p class="empty-records">\u307E\u3060\u30D5\u30E9\u30A4\u30C8\u8A18\u9332\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6700\u521D\u306E\u51FA\u6483\u3092\u3002</p>'}</section>`:$e==="credits"?Ft.innerHTML=`<section class="overlay">${bs("REQUIEM / PROJECT NOTES","ABOUT THIS FLIGHT")}<div class="credits"><p><strong>R-TYPE // REQUIEM</strong><br>\u6A2A\u30B9\u30AF\u30ED\u30FC\u30EBSTG\u306E\u540D\u4F5C\u306B\u656C\u610F\u3092\u8868\u3057\u305F\u3001\u975E\u516C\u5F0F\u306E\u30D5\u30A1\u30F3\u4F5C\u54C1\u3067\u3059\u3002\u7740\u8131\u5F0F\u30D5\u30A9\u30FC\u30B9\u3001\u6E9C\u3081\u6483\u3061\u30013\u8272\u30EC\u30FC\u30B6\u30FC\u3001\u5730\u5F62\u653B\u7565\u3068\u30C1\u30A7\u30C3\u30AF\u30DD\u30A4\u30F3\u30C8\u5FA9\u5E30\u3092\u57FA\u790E\u306B\u30018\u3064\u306E\u72EC\u81EA\u6226\u5834\u3092\u5236\u4F5C\u3057\u307E\u3057\u305F\u3002</p><p>\u6A5F\u4F53\u30FB\u6575\u306E3D\u30E2\u30C7\u30EB\u306FBlender 5.2\u3067\u65B0\u898F\u5236\u4F5C\u3002PBR\u6750\u8CEA\u3001\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u7167\u660E\u3001\u30D6\u30EB\u30FC\u30E0\u3001\u5965\u884C\u304D\u306E\u3042\u308B\u69CB\u9020\u7269\u3001\u7C92\u5B50\u6F14\u51FA\u3092Three.js\u3067\u63CF\u753B\u3057\u3066\u3044\u307E\u3059\u3002\u7DE8\u96C6\u7528.blend\u3068\u5236\u4F5C\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u30BD\u30FC\u30B9\u306B\u542B\u3081\u3066\u3044\u307E\u3059\u3002</p><p>\u516811\u66F2\u306E\u65CB\u5F8B\u30FB\u4F34\u594F\u3068\u52B9\u679C\u97F3\u306F\u672C\u4F5C\u7528\u306B\u5236\u4F5C\u3057\u3001Web Audio\u3067\u5408\u6210\u3057\u3066\u3044\u307E\u3059\u3002\u65E2\u5B58\u30B2\u30FC\u30E0\u306E\u9332\u97F3\u30FB\u753B\u50CF\u30FB\u30E2\u30C7\u30EB\u30FB\u30B3\u30FC\u30C9\u3092\u53D6\u308A\u8FBC\u3093\u3067\u3044\u307E\u305B\u3093\u3002</p><p><strong>DEVELOPED WITH CODEX</strong><br>3D MODELLING \xB7 BLENDER<br>RENDERING \xB7 THREE.JS / WEBGL 2<br>AUDIO \xB7 WEB AUDIO API<br>DESIGN \xB7 A TRIBUTE TO THE ARCADE SPIRIT</p><p class="attribution">\u300CR-TYPE\u300D\u304A\u3088\u3073\u539F\u4F5C\u306B\u95A2\u3059\u308B\u6A29\u5229\u306F\u5404\u6A29\u5229\u8005\u306B\u5E30\u5C5E\u3057\u307E\u3059\u3002\u672C\u4F5C\u306F\u6A29\u5229\u8005\u306B\u3088\u308B\u516C\u5F0F\u4F5C\u54C1\u3067\u306F\u306A\u304F\u3001\u95A2\u4FC2\u30FB\u63D0\u643A\u30FB\u627F\u8A8D\u3092\u793A\u3059\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u539F\u4F5C\u306E\u5B8C\u5168\u79FB\u690D\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002Three.js: MIT License\u3002\u8A73\u7D30\u306F\u914D\u5E03\u30BD\u30FC\u30B9\u306Edocs\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002</p></div></section>`:$e==="play"?hv():$e==="pause"?Ft.innerHTML=`<div class="pause-overlay"><div class="pause-panel"><div class="eyebrow">FLIGHT SUSPENDED / SECTOR 0${se.stage+1}</div><h1>PAUSED</h1><p>${_t[se.stage].name} / ${_t[se.stage].ja}<br>\u5C11\u3057\u606F\u3092\u6574\u3048\u3066\u3001\u3082\u3046\u4E00\u5EA6\u3002</p><div class="pause-nav"><button class="solid-btn" data-action="resume">RESUME / \u6226\u95D8\u518D\u958B</button><button class="plain-btn" data-action="settings">SYSTEM / \u8A2D\u5B9A</button><button class="plain-btn" data-action="help">PILOT MANUAL / \u64CD\u4F5C\u65B9\u6CD5</button><button class="plain-btn" data-action="retry">RETRY CHECKPOINT / \u518D\u51FA\u6483</button><button class="plain-btn" data-action="title">RETURN TO TITLE</button></div><div class="pause-foot">ESC / P TO RESUME</div></div></div>`:$e==="gameover"?Ft.innerHTML=`<div class="pause-overlay"><div class="pause-panel"><div class="eyebrow">SIGNAL LOST / SECTOR 0${se.stage+1}</div><h1>LOST.</h1><p>\u305D\u306E\u822A\u8DE1\u306F\u3001\u307E\u3060\u6D88\u3048\u3066\u3044\u306A\u3044\u3002<br>SCORE ${Ba(se.score)} / ${se.kills} KILLS<br>\u30C1\u30A7\u30C3\u30AF\u30DD\u30A4\u30F3\u30C8\u304B\u3089\u3001\u3082\u3046\u4E00\u5EA6\u3002</p><div class="pause-nav"><button class="solid-btn" data-action="continue">CONTINUE / \u7D9A\u3051\u308B</button><button class="plain-btn" data-action="title">RETURN TO TITLE</button></div></div></div>`:$e==="ending"&&(Ft.innerHTML=`<section class="overlay ending"><div class="eyebrow">ALL SECTORS CLEAR / FLIGHT COMPLETE</div><h1>HOMEWARD.</h1><p>\u5411\u3053\u3046\u5074\u306B\u3001\u671D\u304C\u3042\u3063\u305F\u3002<br>\u6700\u5F8C\u306E\u4E00\u6A5F\u304C\u3001\u3044\u307E\u5E30\u9084\u3059\u308B\u3002</p><div class="result-stats"><div><span>FINAL SCORE</span><strong>${Ba(se.score)}</strong></div><div><span>DESTROYED</span><strong>${se.kills}</strong></div><div><span>BEST CHAIN</span><strong>${se.bestCombo}</strong></div></div><p style="font-size:10px;letter-spacing:3px;color:#758f9d">DESIGN & DEVELOPMENT WITH CODEX<br>BLENDER / THREE.JS / WEB AUDIO<br>THANK YOU FOR FLYING.</p><button class="solid-btn" data-action="title">RETURN TO TITLE</button><button class="plain-btn" data-action="music">SOUND ARCHIVE</button></section>`)}function hv(){Ft.innerHTML=`<div class="hud"><div class="hud-top"><div><div class="score-label">SCORE</div><div class="score-value" id="score">00000000</div></div><div class="hud-center"><div class="sector-name" id="sector-name"></div><div class="stage-progress"><i id="progress"></i></div></div><div class="hud-right"><div class="score-label">HI ${Ba(su)}</div><div class="life-icons" id="lives"></div><div class="hud-actions"><button class="hud-btn" data-action="autofire" id="auto-btn">AUTO OFF [T]</button><button class="hud-btn" data-action="pause">\u2161 PAUSE</button></div></div></div><div class="boss-hud" id="boss-hud" hidden><div class="boss-label"><span id="boss-name"></span><span id="boss-hp"></span></div><div class="boss-health"><i id="boss-bar"></i></div><div class="boss-window" id="boss-window"></div></div><div class="combo" id="combo"></div><div class="hud-bottom"><div class="equipment"><div><b id="weapon"></b> <span id="weapon-level"></span></div><div id="support"></div><div class="force-indicator" id="force-status"></div></div><div><div class="charge-label"><span>WAVE CANNON</span><span id="charge-label">STANDBY</span></div><div class="charge-meter" id="charge-meter"><i id="charge-bar"></i></div><div class="charge-help">HOLD [Z / SPACE] \u2192 RELEASE &nbsp; \xB7 &nbsp; RAPID [C] &nbsp; \xB7 &nbsp; FORCE [X]</div></div><div class="drive-box"><div class="drive-value" id="drive-value"></div><div class="drive-help" id="drive-help"></div></div></div><div class="toast" id="toast"></div><div id="announcement"></div><div id="special-message"></div>${se.options.practice?`<div class="practice-badge">FLIGHT TRAINING ${se.debugInvincible?" / FREE FLIGHT":""}</div>`:""}<div class="rotate-hint">\u6A2A\u5411\u304D\u306B\u3059\u308B\u3068\u3001\u6226\u5834\u3092\u3088\u308A\u5927\u304D\u304F\u8868\u793A\u3067\u304D\u307E\u3059</div>${uu?'<output id="telemetry" class="telemetry" aria-live="off"></output>':""}</div>`,au=0,Yf()}function Yf(){if($e!=="play"||!se)return;let s=se.player,e=_t[se.stage];qe("#score").textContent=Ba(se.score),qe("#sector-name").textContent=`0${se.stage+1} / 08 \u2014 ${e.name}`,qe("#progress").style.width=Et(se.time/e.duration*100,0,100)+"%",qe("#lives").innerHTML=se.options.practice?"<span>\u221E</span>":Array.from({length:Math.max(0,Math.min(7,se.lives))},()=>"<i></i>").join(""),qe("#weapon").textContent=s.level?bi[s.weapon].name:"VULCAN",qe("#weapon").style.color=s.level?"#"+bi[s.weapon].color.toString(16):"#bbd5db",qe("#weapon-level").textContent="LV."+s.level,qe("#support").textContent=`SPD ${s.speed}/${s.maxSpeed} \xB7 BIT ${s.bits} \xB7 MSL ${s.missiles}`,qe("#force-status").textContent="FORCE / "+{none:"OFFLINE",front:"FRONT DOCK",rear:"REAR DOCK",launch:"LAUNCH",free:"FREE FLIGHT",return:"RECALL"}[se.force.mode],qe("#charge-bar").style.width=s.charge*100+"%",qe("#charge-meter").classList.toggle("full",s.charge>=.99),qe("#charge-label").textContent=s.charge>=.99?"MAXIMUM":s.charge>0?Math.floor(s.charge*100)+"%":"STANDBY",qe("#drive-value").textContent=se.options.classic?"CLASSIC":se.driveTime>0?"DRIVE ACTIVE":`DRIVE ${Math.floor(se.drive)}%`,qe("#drive-value").classList.toggle("ready",se.drive>=100),qe("#drive-help").textContent=se.options.classic?"ORIGINAL RULES":se.drive>=100?"[Q] REQUIEM DRIVE":"DESTROY / GRAZE TO CHARGE",qe("#auto-btn").textContent=Es?"AUTO ON [T]":"AUTO OFF [T]";let t=se.boss;qe("#boss-hud").hidden=!t,t&&(qe("#boss-name").textContent=e.boss,qe("#boss-hp").textContent=Math.ceil(t.hp/t.maxHp*100)+"%",qe("#boss-bar").style.width=Et(t.hp/t.maxHp*100,0,100)+"%",qe("#boss-window").textContent=se.stage===7?"FORCE CONTACT ONLY":t.open?"CORE EXPOSED / FIRE":"ARMOUR CLOSED");let i=qe("#combo");i.style.opacity=se.combo>2?"1":"0",i.innerHTML=`${se.combo} CHAIN <span>PRECISION ELIMINATION</span>`,qe("#toast").textContent=Ql>0?Wf:"";let n=qe("#announcement");sn?n.innerHTML=sn.html:n.innerHTML="";let r=qe("#special-message");r.innerHTML=Mr>0?`<div class="boss-warning"><small>WARNING / MASSIVE HOSTILE SIGNATURE</small><h2>${e.boss}</h2><small>${e.bossJa}</small></div>`:se.mode==="stageclear"?`<div class="clear-text"><div class="eyebrow">HOSTILE SIGNATURE ELIMINATED</div><h2>SECTOR CLEAR</h2><p>${e.name} / NEXT COORDINATES ACQUIRED</p></div>`:"",uu&&(qe("#telemetry").textContent=`FPS ${Math.round(ru)} | DRAW ${si.drawCalls} | ${si.quality}
ST ${se.stage+1} T ${se.time.toFixed(1)} | ${se.mode}
ENEMY ${se.enemies.length} BULLET ${se.bullets.length}
KILLS ${se.kills} DEATHS ${se.deaths}
FORCE ${se.force.mode} | BOSS ${t?Math.round(t.hp):"\u2014"}
${document.visibilityState} / ${We.ctx?.state||"audio waiting"}
${si.gpu}`)}function Gf(s=!1){if(!(jl||se.options.practice)){jl=!0,nn.push({score:se.score,difficulty:se.options.difficulty,stage:se.stage,clear:s,kills:se.kills,date:new Date().toLocaleDateString("ja-JP")}),nn.sort((e,t)=>t.score-e.score),nn=nn.slice(0,10),su=Math.max(su,se.score);try{localStorage.setItem("requiem-records-v1",JSON.stringify(nn))}catch{}}}function $f(s){We.start(),We.effect("ui"),s==="sortie"?ni("sortie"):s==="launch"?du():["practice","hangar","credits"].includes(s)?(se&&(se=null),ni(s)):s==="settings"||s==="help"||s==="records"?lv(s):s==="music"?(se=null,ni("music"),We.play(0),Ha()):s==="back"?ni(Ga==="pause"&&se?"pause":"title"):s==="title"?ov():s==="pause"||s==="resume"?br():s==="retry"?(se.respawn(),se.paused=!1,ni("play")):s==="continue"?(se.continueGame(),jl=!1,ni("play"),We.play(_t[se.stage].track)):s==="mute"?qf():s==="fullscreen"?Xf():s==="rotate-left"?si.heroAngle-=.45:s==="rotate-right"?si.heroAngle+=.45:s==="sound-mode"?(ht.soundMode=ht.soundMode==="modern"?"fm":"modern",We.mode=ht.soundMode,Ts(),Ha()):s==="export-audio"?uv():s==="autofire"&&(Es=!Es,An(Es?"AUTO FIRE / ON":"AUTO FIRE / OFF",1.5))}async function uv(){let s=qe('[data-action="export-audio"]');if(!(!s||s.disabled)){s.disabled=!0,s.textContent="RENDERING\u2026";try{let e=await We.renderTrack(We.track),t=URL.createObjectURL(e.blob),i=document.createElement("a");if(i.href=t,i.download=`REQUIEM-${String(We.track+1).padStart(2,"0")}-${We.mode}.wav`,i.click(),setTimeout(()=>URL.revokeObjectURL(t),1e4),s.textContent="WAV SAVED / 32 SEC",uu){let n=document.createElement("output");n.id="audio-result",n.textContent=`AUDIO CHECK / PEAK ${e.peak.toFixed(4)} / RMS ${e.rms.toFixed(4)} / ${e.rate} HZ STEREO`,s.after(n)}}catch(e){s.textContent="EXPORT FAILED / \u518D\u8A66\u884C",console.error("Audio export:",e)}finally{s.disabled=!1}}}Ft.addEventListener("click",s=>{let e=s.target.closest("button");e&&(e.dataset.action&&$f(e.dataset.action),e.dataset.difficulty&&(za=e.dataset.difficulty,Ha(),We.effect("ui")),e.dataset.stage!==void 0&&du(Number(e.dataset.stage),!0),e.dataset.track!==void 0&&(We.start(),We.play(Number(e.dataset.track)),Ha()))});Ft.addEventListener("input",s=>{let e=s.target.id;if(["volume","music","sfx"].includes(e)){let t=Et(Number(s.target.value),0,1);ht[e]=t,We[e==="music"?"musicVolume":e==="sfx"?"sfxVolume":"volume"]=t,We.apply(),Ts()}});Ft.addEventListener("change",s=>{let e=s.target.id,t=s.target.value;e==="classic"&&(ht.classic=s.target.checked,Ts()),e==="practice-level"&&(ka=Number(t)),e==="practice-weapon"&&(cu=t),e==="practice-invincible"&&(ec=s.target.checked),e==="practice-difficulty"&&(za=t),e==="quality"&&(ht.quality=t,si.quality=t,si.resize(),Ts()),e==="sound-mode"&&(ht.soundMode=t,We.mode=t,Ts()),["shake","crt"].includes(e)&&(ht[e]=s.target.checked,Ts()),e==="autofire"&&(ht.autoFire=s.target.checked,Es=ht.autoFire,Ts())});function ou(s){let e=[...Ft.querySelectorAll("button")].filter(i=>!i.disabled&&i.offsetParent!==null);if(!e.length)return;let t=e.indexOf(document.activeElement);e[(t+s+e.length)%e.length].focus({preventScroll:!0})}window.addEventListener("keydown",s=>{if(hu&&!(s.target.matches("input,select")&&s.code!=="Escape")&&(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","Tab"].includes(s.code)&&$e==="play"&&s.preventDefault(),["ArrowUp","ArrowDown","Space"].includes(s.code)&&$e!=="play"&&s.preventDefault(),Sr.has(s.code)||Li.add(s.code),Sr.add(s.code),!s.repeat)){if(We.start(),s.code==="KeyM"){qf();return}if(s.code==="KeyF"){Xf();return}if(s.code==="Escape"||s.code==="KeyP"){$e==="play"||$e==="pause"?br():$e!=="title"&&ni(Ga==="pause"&&se?"pause":"title");return}$e==="play"?s.code==="KeyT"&&$f("autofire"):(s.code==="ArrowDown"&&ou(1),s.code==="ArrowUp"&&ou(-1),s.code==="Space"&&(s.preventDefault(),document.activeElement?.click()))}});window.addEventListener("keyup",s=>Sr.delete(s.code));window.addEventListener("blur",()=>{Sr.clear(),Li.clear(),hi.fire=!1,hi.rapid=!1});document.addEventListener("visibilitychange",()=>{document.hidden&&$e==="play"?(nu=!0,br()):!document.hidden&&nu&&(nu=!1,An("\u5B89\u5168\u306E\u305F\u3081\u4E00\u6642\u505C\u6B62\u3057\u307E\u3057\u305F\u3002\u518D\u958B\u30DC\u30BF\u30F3\u3067\u623B\u308C\u307E\u3059\u3002"))});function dv(s){let e=navigator.getGamepads?.(),t=e&&Array.from(e).find(Boolean);if(!t)return iu=[],{};let i=t.buttons.map(l=>l.pressed),n=l=>i[l]&&!iu[l],r=Math.abs(t.axes[0]||0)>.16?t.axes[0]:0,a=Math.abs(t.axes[1]||0)>.16?-t.axes[1]:0;$e==="play"&&n(9)||$e==="pause"&&n(9)?br():$e!=="play"&&$e!=="pause"&&(s-Hf>.2&&(i[12]||i[13]||Math.abs(a)>.5)&&(ou(i[12]||a>.5?-1:1),Hf=s),n(0)&&document.activeElement?.click(),n(1)&&$e!=="title"&&ni(Ga==="pause"&&se?"pause":"title"));let o={x:r+(i[15]?1:0)-(i[14]?1:0),y:a+(i[12]?1:0)-(i[13]?1:0),fire:i[0],rapid:i[2],force:n(1),drive:n(3),speed:n(5)};return iu=i,o}function fv(s){let e=(...t)=>t.some(i=>Sr.has(i));return{x:Et((e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0)+hi.x+(s.x||0),-1,1),y:Et((e("ArrowUp","KeyW")?1:0)-(e("ArrowDown","KeyS")?1:0)+hi.y+(s.y||0),-1,1),fire:e("KeyZ","Space","KeyJ")||hi.fire||s.fire,rapid:Es||e("KeyC","KeyL")||hi.rapid||s.rapid,force:Li.has("KeyX")||Li.has("KeyK")||Li.has("TouchForce")||s.force,drive:Li.has("KeyQ")||s.drive,speed:Li.has("ShiftLeft")||Li.has("ShiftRight")||s.speed}}function pv(){let s=qe("#stick"),e=s.querySelector("i"),t=null,i=r=>{let a=s.getBoundingClientRect(),o=(r.clientX-a.left-a.width/2)/44,l=(r.clientY-a.top-a.height/2)/44,c=Math.max(1,Math.hypot(o,l));hi.x=o/c,hi.y=-l/c,e.style.transform=`translate(${hi.x*37}px,${-hi.y*37}px)`};s.addEventListener("pointerdown",r=>{t=r.pointerId,s.setPointerCapture(t),i(r),We.start()}),s.addEventListener("pointermove",r=>{r.pointerId===t&&i(r)});let n=()=>{t=null,hi.x=0,hi.y=0,e.style.transform=""};s.addEventListener("pointerup",n),s.addEventListener("pointercancel",n),document.querySelectorAll("[data-touch]").forEach(r=>{let a=r.dataset.touch;r.addEventListener("pointerdown",l=>{r.setPointerCapture(l.pointerId),r.classList.add("active"),a==="force"?Li.add("TouchForce"):hi[a]=!0,We.start()});let o=()=>{r.classList.remove("active"),a!=="force"&&(hi[a]=!1)};r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o)})}function mv(){for(let s of se.drainEvents())si.event(s),We.effect(s.type,s),s.type==="stage"&&(We.play(_t[s.index].track),sn={time:4.5,html:`<div class="stage-announcement"><div class="sector">SECTOR 0${s.index+1} / 08</div><h2>${s.name}</h2><p>${s.ja}</p></div>`},s.index===0&&An(`C\uFF1A\u9023\u5C04\u3000Z\u9577\u62BC\u3057\u2192\u96E2\u3059\uFF1A\u6CE2\u52D5\u7832\u3000X\uFF1A\u30D5\u30A9\u30FC\u30B9
\u88DC\u7D66\u6A5F\u3092\u7834\u58CA\u3057\u3066\u30AF\u30EA\u30B9\u30BF\u30EB\u3092\u53D6\u5F97`,7)),s.type==="pickup"&&An(bi[s.item]?`${bi[s.item].name} / ${bi[s.item].ja}`:s.item==="bit"?"BIT SYSTEM ONLINE":s.item==="speed"?"SPEED UPGRADE":"HOMING MISSILE ONLINE",2),s.type==="boss"&&(Mr=3,sn=null,We.play(8)),s.type==="respawn"&&(We.play(_t[se.stage].track),An("CHECKPOINT RESTORED / \u88DC\u7D66\u6A5F\u3092\u6355\u6349",3)),s.type==="extend"&&An("EXTEND / \u6B8B\u6A5F +1",3),s.type==="drive"&&An("REQUIEM DRIVE / \u6642\u9593\u6E1B\u901F",2),s.type==="gameover"&&(Gf(),ni("gameover")),s.type==="victory"&&(Gf(!0),ni("ending"),We.play(10))}function Kf(s){requestAnimationFrame(Kf);let e=s*.001,t=eu?e-eu:1/60,i=Et(t,0,.1);if(eu=e,tu++,Zl+=t,Zl>.6&&(ru=tu/Zl,tu=0,Zl=0),Jl=Math.max(0,Jl-i),t<.2&&document.visibilityState==="visible"&&Jl===0&&(Ua=ru<40?Ua+i:Math.max(0,Ua-i*2),Ua>3)){let a=["ultra","high","medium","low"],o=a.indexOf(si.quality);o<3&&(si.quality=a[o+1],si.resize()),Ua=0,Jl=7}let n=dv(e);if($e==="play"&&se){Oa+=i;let a=!0;for(;Oa>=1/60;){let o=fv(a?n:{...n,force:!1,drive:!1,speed:!1});se.update(1/60,o),Oa-=1/60,a=!1,Li.clear(),mv()}}else Li.clear(),Oa=0;Ql=Math.max(0,Ql-i),Mr=Math.max(0,Mr-i),sn&&(sn.time-=i,sn.time<=0&&(sn=null)),We.tick();let r=se&&["play","pause","gameover","ending","settings","help","records"].includes($e);si.render(r?se:null,i,$e),e-au>.08&&(Yf(),au=e)}function gv(s){qe("#loading").style.display="none",Ft.innerHTML=`<div class="error-panel"><div><div class="eyebrow">FLIGHT SYSTEM / INITIALIZATION FAILED</div><h1>\u63CF\u753B\u30B7\u30B9\u30C6\u30E0\u3092\u8D77\u52D5\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002</h1><p>WebGL 2\u3092\u4F7F\u7528\u3067\u304D\u308BChrome\u30FBEdge\u30FBFirefox\u3067\u958B\u304D\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30D6\u30E9\u30A6\u30B6\u30FC\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u3082\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><p>${Fa(s?.message||s)}</p><button class="solid-btn" id="reload">\u518D\u8AAD\u307F\u8FBC\u307F</button></div></div>`,qe("#reload").onclick=()=>location.reload()}window.addEventListener("renderer-lost",()=>{$e==="play"&&br(),An("\u63CF\u753B\u306E\u5FA9\u65E7\u3092\u5F85\u3063\u3066\u3044\u307E\u3059\u3002\u5FA9\u65E7\u5F8C\u306B\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u307E\u3059\u3002",20)});async function xv(){try{if(si=new $l(lu,ht),await si.load(s=>{qe("#load-bar").style.width=15+s*85+"%",qe("#load-label").textContent=`BLENDER ASSETS / ${Math.floor(s*100)}%`}),hu=!0,pv(),ni("title"),qe("#loading").style.opacity="0",setTimeout(()=>qe("#loading").style.display="none",750),Xn.has("stage")){let s=Et(Number(Xn.get("stage"))-1,0,7);ka=Et(Number(Xn.get("loadout")||2),0,3),ec=Xn.get("free")==="1",du(s,!0),Xn.get("encounter")==="boss"&&(se.time=_t[s].duration,se.scroll=_t[s].duration*3.2,se.spawnBoss(),se.boss.x=10.3,se.boss.age=3.2)}requestAnimationFrame(Kf)}catch(s){console.error("Flight system:",s),gv(s)}}xv();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
