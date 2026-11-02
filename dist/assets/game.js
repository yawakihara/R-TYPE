var Sp=Math.PI*2,Dr=(s,e,t)=>Math.max(e,Math.min(t,s)),Ds=(s,e,t)=>s+(e-s)*t,at=(s,e,t,i=!1)=>({key:s,ja:e,seconds:t,open:i}),$t=(s,e,t,i,n)=>({id:s,label:e,ox:t,oy:i,hp:n,maxHp:n,r:.65}),Pi=[{id:"doorkeeper",color:16755545,hp:130,role:"\u88C5\u7532\u9580 / \u9023\u88C5\u7832\u3068\u51B7\u5374\u30B7\u30E3\u30C3\u30BF\u30FC",hint:"\u4E0A\u4E0B\u306E\u7832\u5854\u3092\u7834\u58CA\u3002\u6392\u71B1\u3067\u88C5\u7532\u304C\u958B\u3044\u305F\u3089\u6838\u3092\u6483\u3064\u3002",parts:[$t("top","\u4E0A\u90E8\u7832\u5854",-.8,2.6,20),$t("bottom","\u4E0B\u90E8\u7832\u5854",-.8,-2.6,20)],states:[at("guard","\u88C5\u7532\u9632\u5FA1",[2.2,1.6]),at("barrage","\u9023\u88C5\u7832\u6589\u5C04",[2.4,2.1]),at("vent","\u6392\u71B1 / \u6838\u9732\u51FA",[4.6,4.1],!0)]},{id:"gorgon",color:12314235,hp:160,role:"\u751F\u4F53\u6355\u98DF\u8005 / \u984E\u306E\u7A81\u9032\u3068\u5B75\u5316\u56A2",hint:"\u984E\u306E\u7A81\u9032\u3092\u907F\u3051\u3001\u6355\u98DF\u5F8C\u306E\u53E3\u5185\u3092\u72D9\u3046\u3002\u5B75\u5316\u56A2\u3092\u58CA\u3059\u3068\u5E7C\u4F53\u304C\u6E1B\u308B\u3002",parts:[$t("top","\u4E0A\u90E8\u5B75\u5316\u56A2",-.7,2.3,23),$t("bottom","\u4E0B\u90E8\u5B75\u5316\u56A2",-.7,-2.3,23)],states:[at("stalk","\u6355\u98DF\u6E96\u5099",[3,2.4]),at("bite-warn","\u7A81\u9032\u4E88\u544A / \u984E\u3092\u56DE\u907F",1.35),at("bite","\u6355\u98DF\u7A81\u9032",1.5),at("digest","\u6355\u98DF\u5F8C / \u53E3\u5185\u9732\u51FA",[4.5,4],!0)]},{id:"colossus",color:7983103,hp:200,role:"\u5DE8\u5927\u6226\u8266 / \u51B7\u5374\u88C5\u7F6E\u3068\u4E3B\u7832",hint:"\u4E0A\u4E0B\u306E\u51B7\u5374\u88C5\u7F6E\u3092\u4E21\u65B9\u7834\u58CA\u3057\u3001\u4E3B\u7832\u767A\u5C04\u5F8C\u306E\u4E2D\u67A2\u7089\u3092\u72D9\u3046\u3002",parts:[$t("top","\u4E0A\u90E8\u51B7\u5374\u88C5\u7F6E",-1.8,2.25,28),$t("bottom","\u4E0B\u90E8\u51B7\u5374\u88C5\u7F6E",-1.8,-2.25,28)],states:[at("siege","\u8FCE\u6483\u7832\u4F5C\u52D5",[3.1,2.5]),at("lock","\u4E3B\u7832\u7167\u6E96 / \u5C04\u7DDA\u3092\u56DE\u907F",1.5),at("cannon","\u4E3B\u7832\u653E\u5C04",1.9),at("cool","\u7089\u5FC3\u51B7\u5374",[5.2,4.6],!0)]},{id:"judgement",color:16741701,hp:210,role:"\u5727\u7815\u8981\u585E / \u6CB9\u5727\u30A2\u30FC\u30E0\u3068\u713C\u5374\u67F1",hint:"\u7E26\u306E\u5727\u7815\u4E88\u544A\u304B\u3089\u96E2\u308C\u3001\u30A2\u30FC\u30E0\u304C\u623B\u308B\u9699\u306B\u4E2D\u592E\u6838\u3078\u6CE2\u52D5\u7832\u3002",parts:[$t("top","\u4E0A\u90E8\u6CB9\u5727\u30B5\u30FC\u30DC",-.6,3,26),$t("bottom","\u4E0B\u90E8\u6CB9\u5727\u30B5\u30FC\u30DC",-.6,-3,26)],states:[at("survey","\u5727\u7815\u5EA7\u6A19\u691C\u7D22",[2.7,2.1]),at("press-warn","\u5727\u7815\u4E88\u544A / \u7E26\u306E\u5E2F\u3092\u56DE\u907F",1.4),at("crush","\u6CB9\u5727\u5727\u7815",1.7),at("retract","\u30A2\u30FC\u30E0\u53CE\u7D0D / \u6838\u9732\u51FA",[4.5,4],!0)]},{id:"ouroboros",color:14004735,hp:230,role:"\u9AA8\u7ADC / \u5DFB\u304D\u4ED8\u304D\u3068\u7259\u306E\u7A81\u9032",hint:"\u7A81\u9032\u306E\u4E88\u544A\u3092\u898B\u3066\u8DDD\u96E2\u3092\u53D6\u308A\u3001\u8EAB\u3092\u307B\u3069\u3044\u305F\u6642\u306B\u982D\u90E8\u306E\u6838\u3092\u72D9\u3046\u3002",parts:[$t("top","\u4E0A\u984E\u306E\u9AA8\u68D8",-.2,2.25,26),$t("bottom","\u4E0B\u984E\u306E\u9AA8\u68D8",-.2,-2.25,26)],states:[at("coil","\u9AA8\u74B0\u53CE\u675F",[3.2,2.6]),at("sweep-warn","\u7A81\u9032\u4E88\u544A / \u7259\u306B\u6CE8\u610F",1.35),at("sweep","\u9AA8\u7ADC\u7A81\u9032",[2.6,2.2]),at("uncoil","\u9AA8\u74B0\u5C55\u958B / \u982D\u90E8\u9732\u51FA",[4.8,4.4],!0)]},{id:"mnemosyne",color:10071295,hp:210,role:"\u795E\u7D4C\u4E2D\u67A2 / \u4E09\u91CD\u306E\u518D\u751F\u30B7\u30FC\u30EB\u30C9",hint:"\u524D\u9762\u306E\u795E\u7D4C\u7BC0\u30923\u500B\u7834\u58CA\u3057\u3066\u30B7\u30FC\u30EB\u30C9\u3092\u505C\u6B62\u3002\u518D\u751F\u524D\u306B\u6838\u3078\u96C6\u4E2D\u653B\u6483\u3002",parts:[$t("node0","\u4E0B\u90E8\u795E\u7D4C\u7BC0",-2.8,-2.8,12),$t("node1","\u4E2D\u592E\u795E\u7D4C\u7BC0",-2.8,0,12),$t("node2","\u4E0A\u90E8\u795E\u7D4C\u7BC0",-2.8,2.8,12)],states:[at("network","\u795E\u7D4C\u7BC0\u30923\u500B\u7834\u58CA",1/0),at("overload","\u795E\u7D4C\u906E\u65AD / \u6838\u9732\u51FA",[5.8,5.1],!0),at("reweave","\u795E\u7D4C\u7BC0\u518D\u751F",1.8)]},{id:"arbiter",color:7533020,hp:250,role:"\u56DE\u8EE2\u9632\u885B\u6A5F / \u5149\u7FFC\u3068\u30EC\u30FC\u30B6\u30FC\u683C\u5B50",hint:"\u30EC\u30FC\u30B6\u30FC\u306E\u4E88\u544A\u7DDA\u306E\u9593\u3078\u79FB\u52D5\u3002\u5149\u7FFC\u304C\u505C\u6B62\u3057\u305F\u77AC\u9593\u306B\u6838\u3092\u6483\u3064\u3002",parts:[$t("top","\u4E0A\u90E8\u5149\u7FFC\u5236\u5FA1\u5668",-.3,2.7,30),$t("bottom","\u4E0B\u90E8\u5149\u7FFC\u5236\u5FA1\u5668",-.3,-2.7,30)],states:[at("rotate","\u5149\u7FFC\u56DE\u8EE2 / \u9632\u5FA1",[3.2,2.5]),at("align","\u683C\u5B50\u4E88\u544A / \u7DDA\u306E\u9593\u3078",1.6),at("lattice","\u30EC\u30FC\u30B6\u30FC\u683C\u5B50",1.8),at("stall","\u5149\u7FFC\u505C\u6B62 / \u6838\u9732\u51FA",[4.5,3.9],!0)]},{id:"origin",color:16747677,hp:300,role:"\u59CB\u539F\u6838 / \u53CE\u7E2E\u3059\u308B\u5FC3\u81D3\u3068\u52D5\u8108\u5F01",hint:"\u62E1\u5F35\u3057\u3066\u6838\u304C\u958B\u3044\u305F\u3089 [X] \u3067\u30D5\u30A9\u30FC\u30B9\u3092\u76F4\u63A5\u9001\u308A\u8FBC\u3080\u3002\u5F3E\u306F\u7121\u52B9\u3002",parts:[$t("top","\u4E0A\u90E8\u52D5\u8108\u5F01",-.2,2.5,32),$t("bottom","\u4E0B\u90E8\u52D5\u8108\u5F01",-.2,-2.5,32)],states:[at("heartbeat","\u5FC3\u62CD / \u52D5\u8108\u5F3E\u653E\u51FA",[3,2.4]),at("contract","\u53CE\u7E2E\u4E88\u544A",1.3),at("systole","\u53CE\u7E2E / \u5FC3\u62CD\u885D\u6483",[1.7,1.5]),at("diastole","\u62E1\u5F35 / \u30D5\u30A9\u30FC\u30B9\u3092\u5C04\u51FA",[5,4.5],!0)]}];function ku(s,e){let t=Pi[s];return{id:e,type:t.id,stage:s,x:21,y:0,age:0,hp:t.hp,maxHp:t.hp,open:!1,phase:0,flash:0,state:"arrival",stateIndex:-1,stateTime:0,cycle:0,fireCd:.4,hazards:[],parts:t.parts.map(i=>({...i})),weakX:-1.65,weakY:0,weakR:.83,status:"\u63A5\u8FD1\u4E2D / \u5DE8\u5927\u53CD\u5FDC",hint:t.hint,openness:0,targetY:0,supplyCd:5,forceLatched:!1}}function Ii(s,e){let t=s.stage===5?Math.sin(s.age*.8+Number(e.id.slice(-1))*1.8)*.28:0;return{x:s.x+e.ox,y:s.y+e.oy+t}}function zu(s){return{x:s.x+s.weakX,y:s.y+s.weakY}}function bp(s,e,t){let i=t.x2-t.x1,n=t.y2-t.y1,r=Dr(((s-t.x1)*i+(e-t.y1)*n)/(i*i+n*n||1),0,1);return Math.hypot(s-t.x1-i*r,e-t.y1-n*r)}function Tp(s,e,t){let i=e-s.x,n=t-s.y,r=s.openness,a=(o,l,c,h)=>Math.hypot((i-o)/(c+.16),(n-l)/(h+.16))<1;if(a(s.weakX,s.weakY,.64,.72))return!0;for(let o of s.parts)if(o.hp>0){let l=Ii(s,o);if(Math.hypot(e-l.x,t-l.y)<.7)return!0}if(s.stage===0)return a(2.25,0,.58,3)||a(-.3,1.7+r*.95,2.1,.75)||a(-.3,-1.7-r*.95,2.1,.75);if(s.stage===1||s.stage===4){let o=["bite-warn","sweep-warn"].includes(s.state)?.9:["bite","sweep"].includes(s.state)?.1:r;return a(1.3,0,1.4,2.5)||a(-1,1.4+o*.9,1.8,.48)||a(-1,-1.4-o*.9,1.8,.48)}if(s.stage===2){let o=s.aimAngle||0,l=Math.cos(o),c=Math.sin(o),h=i-.4,u=n-.22,d=h*l+u*c,f=-h*c+u*l;return a(1.1,0,3.7,1.13)||d>-5.5&&d<0&&Math.abs(f)<.47}return s.stage===3?a(2.2,0,.7,2.8)||a(-.5,1.25+r*1.15,2.2,.5)||a(-.5,-1.25-r*1.15,2.2,.5):s.stage===5?a(.4,1.4,2.3,1.7)||a(1,-1.1,.75,1.7):s.stage===6?a(1.1,0,1.5,1.6)||i>-4.3&&i<.4&&Math.abs(n-1)<.42||Math.abs(Math.hypot(i-.1,n)-2.65)<.23:a(.8,0,1.5,2.4)}function Nr(s,e,t,i,n,r,a,o,l=.35,c="beam"){e.hazards.push({id:s.nextId++,kind:c,x1:t,y1:i,x2:n,y2:r,y:i,age:0,warn:a,duration:a+o,r:l})}function mc(s,e,t){let i=Pi[e.stage],n=i.states[t];e.stateIndex=t,e.state=n.key,e.stateTime=0,e.fireCd=.15,e.targetY=Dr(s.player.y,-4.2,4.2);let r=e.parts.filter(a=>a.hp>0).length;if(n.key==="lock"){e.lockY=e.y;let a=Math.atan2(s.player.y-(e.y+.22),s.player.x-(e.x+.4))-Math.PI;e.aimAngle=Dr(Math.atan2(Math.sin(a),Math.cos(a)),-.33,.33);let o=e.x+.4-5.42*Math.cos(e.aimAngle),l=e.y+.22-5.42*Math.sin(e.aimAngle);if(Nr(s,e,o,l,-17.5,l+(-17.5-o)*Math.tan(e.aimAngle),1.5,1.9,.48),e.phase){let c=e.aimAngle+(e.targetY>0?.16:-.16);Nr(s,e,o,l,-17.5,l+(-17.5-o)*Math.tan(c),1.5,1.9,.28)}}if(n.key==="press-warn"){let a=Dr(s.player.x,-12,1);Nr(s,e,a,6.4,a,-6.4,1.4,1.7,.64,"press"),r>0&&Nr(s,e,a+5.3,6.4,a+5.3,-6.4,1.4,1.7,.64,"press")}if(n.key==="align"){e.safeLane=[-2.4,2.4,0][e.cycle%3];let a=[-4.8,-2.4,0,2.4,4.8].filter(o=>o!==e.safeLane);r===0&&(a=a.filter((o,l)=>l%2===0));for(let o of a){let l=e.phase?(o-e.safeLane)*.09:0;Nr(s,e,e.x-2,o,-17.5,o+l,1.6,1.8,.27)}}if(n.key==="digest")for(let a of e.parts)a.hp>0&&s.spawn("organism",e.x-2,e.y+a.oy*.65,{hp:4,vx:-4.3,cooldown:2.8});if(n.key==="overload"&&(s.bullets=[],s.emit("shieldBreak",{x:e.x-1.65,y:e.y})),n.key==="network"&&e.cycle>0)for(let a of e.parts)a.hp=a.maxHp;["lock","press-warn","align","bite-warn","sweep-warn","contract"].includes(n.key)&&s.emit("telegraph",{bossType:e.type}),["contract","systole"].includes(n.key)&&s.emit("heartbeat"),s.emit("bossState",{bossType:e.type,state:n.key})}function Fu(s){let e=Pi[s.stage].states[s.stateIndex],t=Array.isArray(e.seconds)?e.seconds[s.phase]:e.seconds;return s.parts.every(i=>i.hp<=0)&&["vent","diastole","uncoil"].includes(e.key)&&(t+=1.5),t}function Bu(s,e,t,i){for(let n=0;n<t;n++)s.enemyBullet(e.x-1.65,e.y,e.age*.37+n*Sp/t,i,"heavy")}function Ep(s,e,t){if(e.fireCd-=t,e.fireCd>0)return;let i=s.player,n=e.state,r=e.parts.filter(h=>h.hp>0),a=e.phase,o=1.2,l=!1,c=(h,u,d,f,g)=>{s.aimed(h,u,d,f,g),l=!0};if(e.stage===0){if(n==="guard")for(let h of r){let u=Ii(e,h);c(u.x-.5,u.y,1,.1,5.4)}if(n==="barrage"){o=.65;for(let h of r){let u=Ii(e,h);c(u.x-.5,u.y,a?3:2,.16,5.1)}r.length||c(e.x-2,e.y,3,.2,4.2)}n==="vent"&&(o=1.65,c(e.x-2,e.y,a?3:1,.22,3.8))}else if(e.stage===1){if(n==="stalk"&&(o=.9,c(e.x-2,e.y,3+a*2,.2,4.3)),n==="digest"){o=1.7;for(let h of r){let u=Ii(e,h);c(u.x,u.y,1,.1,4.2)}}}else if(e.stage===2){if(n==="siege"){o=a?.7:1;for(let h of r){let u=Ii(e,h);c(u.x,u.y,3,.16,5)}r.length||c(e.x-2,e.y,3,.22,4.4)}n==="cool"&&(o=1.8,c(e.x-2,e.y,1,.1,4.2))}else if(e.stage===3){if(n==="survey"){o=.85;for(let h of r){let u=Ii(e,h);c(u.x,u.y,2+a,.2,4.7)}}n==="retract"&&(o=1.5,c(e.x-2,e.y,3,.3,3.5))}else if(e.stage===4){if(n==="coil"){o=1.05;for(let h=0;h<7+a*2;h++)s.enemyBullet(e.x-2,e.y,Math.PI+(h-(6+a*2)/2)*.17,3.7,"heavy");l=!0}n==="uncoil"&&(o=1.55,c(e.x-2,e.y,3,.26,4.2))}else if(e.stage===5){if(n==="network"){o=a?.65:.9;for(let h of r){let u=Ii(e,h),d=Math.atan2(i.y-u.y,i.x-u.x);for(let f of[-.2,.2])s.enemyBullet(u.x,u.y,d+f,3.9);s.enemyBullet(u.x,u.y,Math.PI+Math.sin(e.age+u.y)*.85,3.1,"heavy")}l=!0}n==="overload"&&(o=2,Bu(s,e,8+a*2,2.9),l=!0)}else if(e.stage===6){if(n==="rotate"){o=.8;for(let h of r){let u=Ii(e,h);c(u.x,u.y,3,.2,4.8)}r.length||c(e.x-2,e.y,3,.26,4.4)}n==="stall"&&(o=1.5,c(e.x-2,e.y,a?3:1,.25,4.4))}else{if(n==="heartbeat"){o=a?.85:1.15;for(let h of r){let u=Ii(e,h);c(u.x,u.y,3,.18,3.5)}r.length||c(e.x-2,e.y,3,.24,3.3)}n==="systole"&&(o=.8,Bu(s,e,a?20:14,a?3.3:2.8),l=!0),n==="diastole"&&r.length&&(o=2.2,c(e.x-2,e.y,a?5:3,.27,3))}e.fireCd=o/s.diff.rate,l&&s.emit("bossFire",{bossType:e.type})}function Hu(s,e){let t=s.boss;if(!t)return;t.age+=e,t.flash=Math.max(0,t.flash-e);let i=t.hp/t.maxHp<.45?1:0;i!==t.phase&&(t.phase=i,s.emit("bossPhase",{x:t.x,y:t.y,bossType:t.type}));let n=Math.sin(t.age*(t.stage===7?.31:.42))*(t.stage===2?.45:t.stage===4?.8:1),r=t.stage===2?10.6:10,a=n;if(t.stateIndex<0)t.x=Ds(t.x,r,Math.min(1,e*1.2)),t.y=n,t.age>=2.8&&mc(s,t,0);else{if(t.stateTime+=e,t.stage===5&&t.state==="network"&&t.parts.every(h=>h.hp<=0))mc(s,t,1);else if(t.stateTime>=Fu(t)){let h=t.stateIndex+1;h>=Pi[t.stage].states.length&&(h=0,t.cycle++),mc(s,t,h)}if(t.state==="bite"||t.state==="sweep"){let h=Dr(t.stateTime/Fu(t),0,1),u=Math.sin(h*Math.PI);r-=u*(t.state==="bite"?14.5:8.8),a=Ds(n,t.targetY,u)}t.stage===2&&(["lock","cannon"].includes(t.state)?a=t.lockY:t.aimAngle=Ds(t.aimAngle||0,0,Math.min(1,e*3))),t.x=Ds(t.x,r,Math.min(1,e*(t.state==="bite"?12:4.2))),t.y=Ds(t.y,a,Math.min(1,e*4)),Ep(s,t,e)}let o=Pi[t.stage].states[t.stateIndex];t.open=!!o?.open&&(t.stage!==2||t.parts.every(h=>h.hp<=0)),t.status=o?.ja||"\u63A5\u8FD1\u4E2D / \u5DE8\u5927\u53CD\u5FDC",t.state==="cool"&&!t.open&&(t.status="\u7089\u5FC3\u5C01\u9396 / \u51B7\u5374\u88C5\u7F6E\u3092\u4E21\u65B9\u7834\u58CA"),t.openness=Ds(t.openness,t.open?1:0,Math.min(1,e*5.5));for(let h of t.hazards)h.age+=e,h.age>=h.warn&&h.age<h.duration&&bp(s.player.x,s.player.y,h)<h.r+.16&&s.die();t.hazards=t.hazards.filter(h=>h.age<h.duration);let l=s.force,c=zu(t);t.forceLatched&&l.mode==="free"?(l.x=c.x,l.y=c.y):t.forceLatched=!1,t.open&&l.mode!=="none"&&Math.hypot(l.x-c.x,l.y-c.y)<1.18&&(t.hp-=e*(t.stage===7?32:16),t.flash=.06,(l.mode==="launch"||l.mode==="free")&&(l.mode="free",l.x=c.x,l.y=c.y,t.stage===7&&(t.forceLatched=!0))),Tp(t,s.player.x,s.player.y)&&s.die(),t.stage===7&&l.mode==="none"&&(t.supplyCd-=e,t.supplyCd<=0&&!s.enemies.some(h=>h.type==="carrier")&&!s.items.some(h=>h.type==="red")&&(s.spawn("carrier",16,0,{drop:"red",vx:-3.4,hp:4,cooldown:99}),t.supplyCd=12)),t.hp<=0&&s.defeatBoss()}function Gu(s,e){let t=s.boss;if(!t||e.dead)return;let i=!1;for(let r of t.parts){if(r.hp<=0||e.hit?.has("p"+r.id))continue;let a=Ii(t,r);if(Math.hypot(e.x-a.x,e.y-a.y)<r.r+e.r&&(r.hp-=e.damage,e.hit?.add("p"+r.id),e.pierce||(e.dead=!0),i=!0,s.hits++,s.emit("hit",{...a,weapon:e.type}),r.hp<=0&&(r.hp=0,s.emit("partBreak",{...a,partId:r.id,bossType:t.type}),s.addScore(2e3)),e.dead))break}let n=zu(t);!i&&!e.hit?.has("boss")&&Math.abs(e.x-n.x)<1+e.r&&Math.abs(e.y-n.y)<t.weakR+e.r&&(t.open&&t.stage!==7?(t.hp-=e.damage,e.hit?.add("boss"),t.flash=.08,s.hits++,s.emit("hit",{...n,weapon:e.type})):s.emit("armour",{x:e.x,y:e.y}),(!e.pierce||!t.open||t.stage===7)&&(e.dead=!0))}var wt=[{name:"DERELICT GATE",ja:"\u5EC3\u589F\u306E\u5411\u3053\u3046\u3078",theme:"station",boss:"DOORKEEPER",bossJa:"\u88C5\u7532\u6BBB\u30FB\u30C9\u30A2\u30AD\u30FC\u30D1\u30FC",duration:82,color:7519187,fog:463899,bg:133134,track:0,bossType:"doorkeeper"},{name:"LIVING ABYSS",ja:"\u8108\u6253\u3064\u6DF1\u6DF5",theme:"organic",boss:"GORGON",bossJa:"\u751F\u4F53\u5175\u5668\u30FB\u30B4\u30EB\u30B4\u30F3",duration:88,color:9550979,fog:1120526,bg:330503,track:1,bossType:"gorgon"},{name:"SILENT COLOSSUS",ja:"\u6C88\u9ED9\u306E\u5DE8\u5927\u6226\u8266",theme:"battleship",boss:"COLOSSUS CORE",bossJa:"\u5DE8\u5927\u6226\u8266\u30FB\u4E2D\u67A2\u7089",duration:92,color:10926540,fog:594974,bg:132878,track:2,bossType:"colossus"},{name:"IRON CATHEDRAL",ja:"\u9244\u306E\u5927\u8056\u5802",theme:"foundry",boss:"JUDGEMENT",bossJa:"\u6A5F\u52D5\u8981\u585E\u30FB\u30B8\u30E3\u30C3\u30B8\u30E1\u30F3\u30C8",duration:88,color:14984307,fog:1773580,bg:722179,track:3,bossType:"judgement"},{name:"OSSUARY",ja:"\u661F\u306E\u5893\u6A19",theme:"bones",boss:"OUROBOROS",bossJa:"\u9AA8\u7ADC\u30FB\u30A6\u30ED\u30DC\u30ED\u30B9",duration:90,color:11968969,fog:1379358,bg:459534,track:4,bossType:"ouroboros"},{name:"NEURAL STORM",ja:"\u8A18\u61B6\u306E\u8FF7\u5BAE",theme:"neural",boss:"MNEMOSYNE",bossJa:"\u795E\u7D4C\u7DB2\u30FB\u30E0\u30CD\u30E2\u30B7\u30E5\u30CD",duration:90,color:8687844,fog:920355,bg:262668,track:5,bossType:"mnemosyne"},{name:"EVENT HORIZON",ja:"\u9084\u3089\u3056\u308B\u5883\u754C",theme:"citadel",boss:"THE ARBITER",bossJa:"\u6700\u7D42\u9632\u885B\u6A5F\u30FB\u30A2\u30FC\u30D3\u30BF\u30FC",duration:95,color:8509392,fog:530711,bg:133384,track:6,bossType:"arbiter"},{name:"REQUIEM",ja:"\u6700\u5F8C\u306E\u9F13\u52D5",theme:"heart",boss:"ORIGIN",bossJa:"\u59CB\u539F\u6838\u30FB\u30AA\u30EA\u30B8\u30F3",duration:90,color:15113097,fog:2165778,bg:721413,track:7,bossType:"origin"}],Li={red:{name:"HELIX",ja:"\u5BFE\u7A7A\u30EC\u30FC\u30B6\u30FC",color:16736571},blue:{name:"REFLECT",ja:"\u53CD\u5C04\u30EC\u30FC\u30B6\u30FC",color:5425407},yellow:{name:"CRAWLER",ja:"\u5BFE\u5730\u30EC\u30FC\u30B6\u30FC",color:16763986}},Ur={cadet:{name:"CADET",ja:"\u8A13\u7DF4\u5175",lives:5,bullet:.73,rate:.85,keep:!0},arcade:{name:"ARCADE",ja:"\u30A2\u30FC\u30B1\u30FC\u30C9",lives:3,bullet:1,rate:1,keep:!1},ace:{name:"ACE",ja:"\u30A8\u30FC\u30B9",lives:3,bullet:1.23,rate:1.2,keep:!1}},nt=(s,e,t)=>Math.max(e,Math.min(t,s)),Zi=(s,e,t)=>s+(e-s)*t;function os(s=1987){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function as(s,e){let t=wt[s%8].theme,i=7.9,n=-7.9;if(["organic","neural","heart","bones"].includes(t)){let r=t==="heart"?1.6:t==="bones"?1.1:1.4;i=7.25+Math.sin(e*.075+s)*r+Math.sin(e*.21)*.43,n=-7.25+Math.sin(e*.067+1+s)*r+Math.sin(e*.18)*.48}else{let r=Math.sin(e*.057+s);i=7.7-Math.max(0,r)*1.65,n=-7.7+Math.max(0,Math.sin(e*.065+2))*1.8}return{top:i,bottom:n}}function wp(s){let e=wt[s].theme,t=[];if(e==="battleship"){t.push({wx:138,y:-6.3,w:210,h:4.3,type:"hull"});for(let i=0;i<7;i++)t.push({wx:43+i*25,y:-2.8,w:5,h:3,type:"tower"})}else for(let i=0;i<9;i++){let n=i%2===0;t.push({wx:46+i*24,y:n?6.8:-6.8,w:3.6+i%3,h:3.8+(i+s)%3*.65,type:e==="foundry"?"press":"column"})}return t}var Qa=class{constructor(e={}){this.options={difficulty:"arcade",stage:0,practice:!1,classic:!1,...e},this.diff=Ur[this.options.difficulty]||Ur.arcade,this.random=os(1987+this.options.stage*79),this.stage=this.options.stage,this.score=0,this.kills=0,this.shotsFired=0,this.hits=0,this.deaths=0,this.totalTime=0,this.continues=0,this.lives=this.diff.lives,this.extends=0,this.events=[],this.nextId=1,this.combo=0,this.comboTimer=0,this.bestCombo=0,this.drive=35,this.driveTime=0,this.mode="playing",this.modeTime=0,this.paused=!1,this.debugInvincible=!1,this.startStage(this.stage),this.options.bossPractice&&this.beginBossPractice()}emit(e,t={}){this.events.push({...t,type:e})}drainEvents(){let e=this.events;return this.events=[],e}startStage(e){this.stage=e,this.time=0,this.scroll=0,this.checkpoint=0,this.wave=0,this.turretWave=0,this.nextCarrier=2,this.carrierCount=0,this.enemies=[],this.shots=[],this.bullets=[],this.items=[],this.effects=[],this.boss=null,this.bossDefeated=!1,this.obstacles=wp(e),this.player={x:-9,y:0,vy:0,charge:0,fireWas:!1,cooldown:0,missileCd:0,invuln:3.4,speed:2,maxSpeed:2,weapon:"red",level:0,missiles:0,bits:0},this.force={mode:"none",x:-11,y:0,side:1,level:0,age:0,cooldown:0},this.mode="playing",this.modeTime=0,this.emit("stage",{index:e,name:wt[e].name,ja:wt[e].ja})}nextStage(){if(this.stage>=7){this.mode="victory",this.emit("victory");return}let e={...this.player},t=this.force.mode!=="none";this.startStage(this.stage+1),Object.assign(this.player,{level:e.level,weapon:e.weapon,missiles:e.missiles,bits:e.bits,speed:e.speed,maxSpeed:e.maxSpeed}),t&&Object.assign(this.force,{mode:"front",level:this.player.level,x:this.player.x+1.7,y:0}),this.options.bossPractice&&this.beginBossPractice()}respawn(){let e=this.checkpoint,t={...this.player},i=this.force.mode!=="none";this.time=e,this.scroll=e*3.2,this.wave=Math.floor(e/2.85),this.turretWave=Math.floor(e/6.3),this.enemies=[],this.shots=[],this.bullets=[],this.items=[],this.boss=null,this.bossDefeated=!1,this.nextCarrier=e+1.5,this.player={x:-9,y:0,vy:0,charge:0,fireWas:!1,cooldown:0,missileCd:0,invuln:3.6,speed:2,maxSpeed:2,weapon:"red",level:0,missiles:0,bits:0},this.force={mode:"none",x:-10,y:0,side:1,level:0,age:0,cooldown:0},this.diff.keep&&i&&(Object.assign(this.player,{level:Math.max(1,t.level),weapon:t.weapon,bits:t.bits,missiles:t.missiles,maxSpeed:t.maxSpeed,speed:t.speed}),Object.assign(this.force,{mode:"front",level:this.player.level,x:-7.3,y:0})),this.mode="playing",this.modeTime=0,this.driveTime=0,this.emit("respawn"),this.options.bossPractice&&this.beginBossPractice()}beginBossPractice(){this.time=wt[this.stage].duration,this.scroll=this.time*3.2,this.spawnBoss(),this.boss.x=this.stage===2?10.6:10}continueGame(){this.continues++,this.lives=this.diff.lives,this.score=Math.floor(this.score/10)*10+Math.min(9,this.continues),this.respawn()}toggleForce(){let e=this.force;e.mode!=="none"&&(e.mode==="front"||e.mode==="rear"?(e.side=e.mode==="front"?1:-1,e.mode="launch",e.age=0,this.emit("forceLaunch")):(e.mode="return",e.age=0,this.emit("forceRecall")))}activateDrive(){return this.options.classic||this.drive<100||this.driveTime>0||this.mode!=="playing"?!1:(this.drive=0,this.driveTime=4.5,this.player.invuln=Math.max(.8,this.player.invuln),this.emit("drive"),!0)}collect(e){let t=this.player;Li[e]?(t.weapon=e,t.level=Math.min(3,t.level+1),this.force.level=t.level,this.force.mode==="none"&&Object.assign(this.force,{mode:"return",x:17,y:t.y})):e==="speed"?(t.maxSpeed=Math.min(4,t.maxSpeed+1),t.speed=t.maxSpeed):e==="bit"?t.bits=Math.min(2,t.bits+1):e==="missile"&&(t.missiles=Math.min(2,t.missiles+1)),this.addScore(300),this.emit("pickup",{item:e})}addScore(e){this.score+=e;let t=this.extends===0?5e4:15e4*this.extends;this.score>=t&&(this.extends++,this.lives++,this.emit("extend"))}spawn(e,t,i,n={}){let r=e==="carrier"?5:e==="turret"?7:e==="organism"?5:e==="interceptor"?3:2,a={id:this.nextId++,type:e,x:t,y:i,baseY:i,hp:r,maxHp:r,r:e==="carrier"?.65:e==="turret"?.57:.48,age:0,cooldown:1.5+this.random(),vx:-3.1-this.random(),...n};return this.enemies.push(a),a}shoot(e=!1){let t=this.player,i=this.force;if(e){let n=t.charge>=.98?2:t.charge>=.52?1:.5;this.shots.push({id:this.nextId++,type:"wave",x:t.x+1,y:t.y,vx:29,vy:0,age:0,life:1.7,r:.25+n*.22,damage:n===2?24:n===1?12:6,pierce:!0,hit:new Set,power:n}),this.emit("wave",{power:n,x:t.x,y:t.y}),this.shotsFired++;return}if(this.shotsFired++,this.shots.push({id:this.nextId++,type:"shot",x:t.x+.8,y:t.y,vx:31,vy:0,age:0,life:1.5,r:.12,damage:1}),i.mode!=="none"){let n=i.mode==="rear"?-1:1,r=i.x+n*.5,a=i.y;if(i.mode==="front"||i.mode==="rear")for(let o=0;o<Math.max(1,t.level);o++){let l=o-(t.level-1)/2;if(t.weapon==="red"&&this.shots.push({id:this.nextId++,type:"helix",x:r,y:a,baseY:a,vx:n*29,vy:0,age:0,phase:o*Math.PI,amp:.2+o*.13,life:1.6,r:.19,damage:1.2,pierce:!0,hit:new Set}),t.weapon==="blue")for(let c of[-1,1])this.shots.push({id:this.nextId++,type:"reflect",x:r,y:a,vx:n*(20+Math.abs(l)*2),vy:c*(12+l*3),age:0,life:2.2,r:.15,damage:1.1,bounces:0});if(t.weapon==="yellow")for(let c of[-1,1])this.shots.push({id:this.nextId++,type:"crawler",x:r,y:a,vx:n*22,vy:c*17,sign:c,grounded:!1,age:0,life:2.4,r:.2,damage:1.4,pierce:!0,hit:new Set})}else for(let o of[-1,0,1])this.shots.push({id:this.nextId++,type:"forceShot",x:r,y:a,vx:n*24,vy:o*7,age:0,life:1.5,r:.14,damage:1.2})}for(let n=0;n<t.bits;n++)this.shots.push({id:this.nextId++,type:"bitShot",x:t.x+.05,y:t.y+(n===0?1.05:-1.05),vx:29,vy:0,age:0,life:1.5,r:.09,damage:.6});this.emit("shot",{x:t.x,y:t.y})}enemyBullet(e,t,i,n=5,r="orb"){if(this.bullets.length>240)return;let a=n*this.diff.bullet;this.bullets.push({id:this.nextId++,x:e,y:t,vx:Math.cos(i)*a,vy:Math.sin(i)*a,r:r==="heavy"?.24:.14,type:r,age:0,grazed:!1})}aimed(e,t,i=1,n=.18,r=5){let a=Math.atan2(this.player.y-t,this.player.x-e);for(let o=0;o<i;o++)this.enemyBullet(e,t,a+(o-(i-1)/2)*n,r)}kill(e,t=!1){if(e.dead)return;e.dead=!0,this.kills++,this.combo++,this.comboTimer=2.4,this.bestCombo=Math.max(this.combo,this.bestCombo);let i=e.type==="carrier"?500:e.type==="turret"?350:150;this.addScore(i+(t?Math.min(this.combo,12)*30:0)),this.drive=Math.min(100,this.drive+2.6),this.emit("explosion",{x:e.x,y:e.y,size:e.type==="carrier"?1.2:.8,enemyType:e.type,enemyId:e.id,vx:e.vx||0,weapon:t?"wave":void 0}),e.type==="carrier"&&this.items.push({id:this.nextId++,type:e.drop||"red",x:e.x,y:e.y,age:0}),this.options.difficulty==="ace"&&e.type!=="carrier"&&this.aimed(e.x,e.y,1,.1,5.5)}die(){this.player.invuln>0||this.debugInvincible||this.mode!=="playing"||(this.deaths++,this.options.practice||this.lives--,this.mode="dying",this.modeTime=0,this.combo=0,this.emit("playerDeath",{x:this.player.x,y:this.player.y}))}spawnBoss(){this.boss=ku(this.stage,this.nextId++),this.enemies=this.enemies.filter(e=>e.type==="carrier"),this.bullets=[],this.emit("boss",{name:wt[this.stage].boss,ja:wt[this.stage].bossJa})}updateBoss(e){Hu(this,e)}defeatBoss(){let e=this.boss;e&&(this.addScore(12e3+(this.stage+1)*2e3+this.bullets.length*30),this.emit("bossDeath",{x:e.x,y:e.y}),this.boss=null,this.bullets=[],this.enemies=[],this.shots=[],this.bossDefeated=!0,this.mode="stageclear",this.modeTime=0)}update(e,t={}){if(this.paused||this.mode==="over"||this.mode==="victory")return;if(this.totalTime+=e,this.modeTime+=e,this.mode==="dying"){this.modeTime>1.5&&(this.lives>0||this.options.practice?this.respawn():(this.mode="over",this.emit("gameover")));return}if(this.mode==="stageclear"){this.modeTime>5.8&&this.nextStage();return}let i=this.driveTime>0?.43:1,n=e*i;this.time+=n,this.scroll+=this.boss?0:n*3.2,this.driveTime=Math.max(0,this.driveTime-e),this.boss||(this.checkpoint=Math.min(Math.floor(this.time/24)*24,Math.floor((wt[this.stage].duration-12)/24)*24));let r=this.player,a=this.force;r.invuln=Math.max(0,r.invuln-e),r.cooldown=Math.max(0,r.cooldown-e),r.missileCd-=e;let o=nt(t.x||0,-1,1),l=nt(t.y||0,-1,1),c=Math.max(1,Math.hypot(o,l)),h=4.5+r.speed*1.5;if(r.x=nt(r.x+o/c*h*e,-15.2,15.2),r.y=nt(r.y+l/c*h*e,-8.5,8.5),r.vy=l*h,t.speed&&(r.speed=r.speed%r.maxSpeed+1),t.force&&this.toggleForce(),t.drive&&this.activateDrive(),t.fire){!r.fireWas&&r.cooldown<=0&&(this.shoot(),r.cooldown=.14);let d=r.charge;r.charge=Math.min(1,r.charge+e/(this.driveTime>0?.6:1.65)),d<1&&r.charge===1&&this.emit("charged")}else r.fireWas&&r.charge>.18&&this.shoot(!0),r.charge=0,t.rapid&&r.cooldown<=0&&(this.shoot(),r.cooldown=.125);if(r.fireWas=!!t.fire,r.missiles>0&&r.missileCd<=0&&(t.fire||t.rapid)){r.missileCd=.8;for(let d=0;d<r.missiles;d++)this.shots.push({id:this.nextId++,type:"missile",x:r.x-.2,y:r.y-.4-d*.18,vx:9,vy:-3,age:0,life:4,r:.18,damage:4});this.emit("missile")}if(a.age+=e,a.mode==="front"||a.mode==="rear")a.x=Zi(a.x,r.x+(a.mode==="front"?1.6:-1.6),Math.min(1,e*18)),a.y=Zi(a.y,r.y,Math.min(1,e*18));else if(a.mode==="launch")a.x+=a.side*23*e,(a.x>13||a.x<-13)&&(a.x=nt(a.x,-13,13),a.mode="free");else if(a.mode==="free")a.y=Zi(a.y,r.y,e*.55),a.x-=n*.25;else if(a.mode==="return"){let d=Math.hypot(r.x-a.x,r.y-a.y),f=e*15;a.x+=(r.x-a.x)/Math.max(.01,d)*Math.min(f,d),a.y+=(r.y-a.y)/Math.max(.01,d)*Math.min(f,d),d<1.65&&(a.mode=a.x<r.x?"rear":"front",a.side=a.mode==="front"?1:-1,this.emit("forceDock"))}if(a.mode==="free"&&Math.hypot(a.x-r.x,a.y-r.y)<1.55&&(a.mode=a.x<r.x?"rear":"front",this.emit("forceDock")),this.schedule(),this.updateEnemies(n),this.updateBoss(n),this.updateShots(n),this.updateBullets(n),this.updateItems(n),this.mode!=="playing")return;let u=as(this.stage,this.scroll+r.x);(r.y+.27>u.top||r.y-.27<u.bottom)&&this.die();for(let d of this.obstacles)Math.abs(r.x-(d.wx-this.scroll))<d.w/2+.5&&Math.abs(r.y-d.y)<d.h/2+.23&&this.die();this.comboTimer=Math.max(0,this.comboTimer-e),this.comboTimer===0&&(this.combo=0)}schedule(){if(this.boss||this.bossDefeated)return;let e=wt[this.stage].duration;if(this.time>=e){this.spawnBoss();return}let t=Math.floor(this.time/2.85);if(t>this.wave){this.wave=t;let n=Math.sin(t*2.19+this.stage)*4.2,r=t%5===3?"interceptor":["organic","heart","neural"].includes(wt[this.stage].theme)?"organism":"scout",a=3+t%3;for(let o=0;o<a;o++)this.spawn(r,18+o*1.6,n+Math.sin(o*.8)*1,{vx:-4-this.stage*.1,formation:t%4})}let i=Math.floor(this.time/6.3);if(i>this.turretWave){this.turretWave=i;let n=i%2===0,r=as(this.stage,this.scroll+19);this.spawn("turret",19,n?r.top-.35:r.bottom+.35,{top:n,vx:-3.2,cooldown:1.6})}if(this.time>=this.nextCarrier){let n=["red","speed","blue","missile","bit","yellow","red","bit","missile","blue"],r=this.force.mode==="none"?"red":n[this.carrierCount%n.length];this.spawn("carrier",18,this.force.mode==="none"?0:Math.sin(this.carrierCount*2.4)*3.4,{drop:r,vx:-3.7,hp:4,cooldown:99}),this.nextCarrier=this.time+10,this.carrierCount++}}updateEnemies(e){let t=this.force,i=this.player;for(let n of this.enemies){if(n.age+=e,n.x+=n.vx*e,n.cooldown-=e,n.type==="scout"&&(n.y=n.baseY+Math.sin(n.age*2.2)*.85),n.type==="organism"&&(n.y=n.baseY+Math.sin(n.age*2.5)*1.3),n.type==="interceptor"&&n.age>1.2&&(n.y=Zi(n.y,i.y,e*.7),n.x-=e*1.5),n.type==="carrier"&&(n.y=n.baseY+Math.sin(n.age*2)*.35),n.type==="turret"){let r=as(this.stage,this.scroll+n.x);n.y=n.top?r.top-.35:r.bottom+.35}n.cooldown<=0&&n.x>-12&&n.x<16&&n.type!=="carrier"&&(n.type==="turret"?this.aimed(n.x,n.y,1+(this.stage>2?1:0),.22,5.5):n.type==="organism"?this.aimed(n.x,n.y,3,.32,3.5):this.aimed(n.x,n.y,1,.1,4.3),n.cooldown=(n.type==="turret"?2.3:3.6)/this.diff.rate),t.mode!=="none"&&Math.hypot(n.x-t.x,n.y-t.y)<n.r+.6&&(n.hp-=e*30,n.hp<=0&&this.kill(n)),!n.dead&&Math.hypot(n.x-i.x,n.y-i.y)<n.r+.26&&this.die()}this.enemies=this.enemies.filter(n=>!n.dead&&n.x>-20)}updateShots(e){for(let t of this.shots){if(t.age+=e,t.type==="missile"){let n=this.enemies.find(r=>r.x>t.x-.5)||this.boss;if(n){let r=Math.atan2(n.y-t.y,n.x-t.x);t.vx=Zi(t.vx,Math.cos(r)*18,e*5),t.vy=Zi(t.vy,Math.sin(r)*18,e*5)}else t.vy=Zi(t.vy,0,e*3)}t.x+=t.vx*e,t.y+=t.vy*e,t.type==="helix"&&(t.y=t.baseY+Math.sin(t.age*27+t.phase)*t.amp);let i=as(this.stage,this.scroll+t.x);t.type==="reflect"&&(t.y>i.top-.2||t.y<i.bottom+.2)?(t.vy*=-1,t.y=nt(t.y,i.bottom+.21,i.top-.21),t.bounces++):t.type==="crawler"?(t.y>=i.top-.18||t.y<=i.bottom+.18||t.grounded)&&(t.grounded=!0,t.vy=0,t.y=t.sign>0?i.top-.19:i.bottom+.19):t.type!=="wave"&&(t.y>i.top||t.y<i.bottom)&&(t.dead=!0);for(let n of this.obstacles)Math.abs(t.x-(n.wx-this.scroll))<n.w/2&&Math.abs(t.y-n.y)<n.h/2&&t.type!=="wave"&&t.type!=="crawler"&&(t.type==="reflect"?(t.vy*=-1,t.vx*=-1):t.dead=!0);if(!t.dead){for(let n of this.enemies)if(!(n.dead||t.hit?.has(n.id))&&Math.abs(t.x-n.x)<n.r+t.r+(t.type==="wave"?.7:0)&&Math.abs(t.y-n.y)<n.r+t.r&&(n.hp-=t.damage,this.hits++,t.hit?.add(n.id),n.hp<=0?this.kill(n,t.type==="wave"):this.emit("hit",{x:n.x,y:n.y,enemyId:n.id,enemyType:n.type,weapon:t.type}),!t.pierce)){t.dead=!0;break}Gu(this,t)}}this.shots=this.shots.filter(t=>!t.dead&&t.age<t.life&&t.x>-21&&t.x<23&&Math.abs(t.y)<12),this.boss&&this.boss.hp<=0&&this.defeatBoss()}updateBullets(e){let t=this.player,i=this.force;for(let n of this.bullets){if(n.age+=e,n.x+=n.vx*e,n.y+=n.vy*e,i.mode!=="none"&&Math.hypot(n.x-i.x,n.y-i.y)<.66+n.r){n.dead=!0,this.emit("block",{x:n.x,y:n.y});continue}let r=!1;for(let o=0;o<t.bits;o++)Math.hypot(n.x-t.x,n.y-(t.y+(o===0?1.05:-1.05)))<.23+n.r&&(r=!0);if(r){n.dead=!0,this.emit("block",{x:n.x,y:n.y});continue}let a=Math.hypot(n.x-t.x,n.y-t.y);a<.16+n.r?(this.die(),n.dead=!0):a<.8&&!n.grazed&&(n.grazed=!0,this.drive=Math.min(100,this.drive+1.5),this.addScore(10),this.emit("graze",{x:n.x,y:n.y}))}this.bullets=this.bullets.filter(n=>!n.dead&&n.age<10&&n.x>-19&&n.x<21&&Math.abs(n.y)<12)}updateItems(e){for(let t of this.items)t.x-=2.6*e,t.age+=e,Math.hypot(t.x-this.player.x,t.y-this.player.y)<1.02&&(this.collect(t.type),t.dead=!0);this.items=this.items.filter(t=>!t.dead&&t.x>-19&&t.age<16)}};var Pd=0,Qc=1,Ld=2;var Sa=1,Nd=2,mr=3,Fi=0,Ft=1,gi=2,In=0,sn=1,ft=2,eh=3,th=4,Dd=5;var bs=100,Ud=101,Od=102,Fd=103,Bd=104,kd=200,zd=201,Hd=202,Gd=203,ih=204,nh=205,Vd=206,Wd=207,Xd=208,qd=209,Yd=210,$d=211,Kd=212,Zd=213,Jd=214,Po=0,Lo=1,No=2,er=3,Do=4,Uo=5,Oo=6,Fo=7,el=0,jd=1,Qd=2,rn=0,ba=1,Ta=2,Ea=3,Ts=4,wa=5,Aa=6,Ra=7,Hc="attached",ef="detached",sh=300,Es=301,gr=302,tl=303,il=304,Oi=1e3,Di=1001,tr=1002,At=1003,nl=1004;var ws=1005;var Et=1006,xr=1007;var Bi=1008;var xi=1009,rh=1010,ah=1011,_r=1012,sl=1013,$i=1014,Ti=1015,Jt=1016,rl=1017,al=1018,As=1020,oh=35902,lh=35899,ch=1021,hh=1022,ki=1023,Mn=1026,Pn=1027,ol=1028,ll=1029,jn=1030,cl=1031;var hl=1033,Ca=33776,Ia=33777,Pa=33778,La=33779,ul=35840,dl=35841,fl=35842,pl=35843,ml=36196,gl=37492,xl=37496,_l=37488,vl=37489,Na=37490,yl=37491,Ml=37808,Sl=37809,bl=37810,Tl=37811,El=37812,wl=37813,Al=37814,Rl=37815,Cl=37816,Il=37817,Pl=37818,Ll=37819,Nl=37820,Dl=37821,Ul=36492,Ol=36494,Fl=36495,Bl=36283,kl=36284,Da=36285,zl=36286;var fs=2300,ps=2301,Co=2302,Gc=2303,Vc=2400,Wc=2401,Xc=2402,tf=2500;var uh=0,Ua=1,vr=2,nf=3200;var Oa=0,sf=1,Ln="",yt="srgb",oi="srgb-linear",Zr="linear",st="srgb";var Io=7680;var rf=519,af=512,of=513,lf=514,dh=515,cf=516,hf=517,fh=518,ph=519,mh=35044,Nn=35048;var gh="300 es",Ui=2e3,ir=2001;function Ap(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Rp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function uf(){let s=nr("canvas");return s.style.display="block",s}var Vu={},sr=null;function Jr(...s){let e="THREE."+s.shift();sr?sr("log",e,...s):console.log(e,...s)}function df(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ae(...s){s=df(s);let e="THREE."+s.shift();if(sr)sr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ne(...s){s=df(s);let e="THREE."+s.shift();if(sr)sr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ds(...s){let e=s.join(" ");e in Vu||(Vu[e]=!0,Ae(...s))}function ff(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var pf={[Po]:Po,[No]:Oo,[Do]:Do,[er]:Uo,[Lo]:Lo,[Oo]:No,[Fo]:Fo,[Uo]:er},Qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=1234567,$r=Math.PI/180,ms=180/Math.PI;function an(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ei[s&255]+ei[s>>8&255]+ei[s>>16&255]+ei[s>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function xh(s,e){return(s%e+e)%e}function Cp(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Ip(s,e,t){return s!==e?(t-s)/(e-s):0}function Kr(s,e,t){return(1-t)*s+t*e}function Pp(s,e,t,i){return Kr(s,e,1-Math.exp(-t*i))}function Lp(s,e=1){return e-Math.abs(xh(s,e*2)-e)}function Np(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Dp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Up(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Op(s,e){return s+Math.random()*(e-s)}function Fp(s){return s*(.5-Math.random())}function Bp(s){s!==void 0&&(Wu=s);let e=Wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kp(s){return s*$r}function zp(s){return s*ms}function Hp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Gp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _h(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vp(s,e,t,i,n){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Hl(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function vh(s,e){if(e.constructor===Float32Array)return s;let t=Hl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function yh(s,e){if(e.constructor===Float32Array)return s;let t=Hl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Gl={DEG2RAD:$r,RAD2DEG:ms,generateUUID:an,clamp:$e,euclideanModulo:xh,mapLinear:Cp,inverseLerp:Ip,lerp:Kr,damp:Pp,pingpong:Lp,smoothstep:Np,smootherstep:Dp,randInt:Up,randFloat:Op,randFloatSpread:Fp,seededRandom:Bp,degToRad:kp,radToDeg:zp,isPowerOfTwo:Hp,ceilPowerOfTwo:Gp,floorPowerOfTwo:_h,setQuaternionFromProperEuler:Vp,normalize:yh,denormalize:vh},ye=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},li=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(u!==_||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);p=Math.sin(p*v)/T,o=Math.sin(o*v)/T,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gc=new D,Xu=new li,De=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=n[0],m=n[3],p=n[6],v=n[1],T=n[4],M=n[7],w=n[2],E=n[5],x=n[8];return r[0]=a*_+o*v+l*w,r[3]=a*m+o*T+l*E,r[6]=a*p+o*M+l*x,r[1]=c*_+h*v+u*w,r[4]=c*m+h*T+u*E,r[7]=c*p+h*M+u*x,r[2]=d*_+f*v+g*w,r[5]=d*m+f*T+g*E,r[8]=d*p+f*M+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*a)*_,e[3]=d*_,e[4]=(h*t-n*l)*_,e[5]=(n*r-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xc.makeScale(e,t)),this}rotate(e){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xc.makeRotation(-e)),this}translate(e,t){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xc=new De,qu=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yu=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wp(){let s={enabled:!0,workingColorSpace:oi,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(n.r=yn(n.r),n.g=yn(n.g),n.b=yn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(n.r=Qs(n.r),n.g=Qs(n.g),n.b=Qs(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ln?Zr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[oi]:{primaries:e,whitePoint:i,transfer:Zr,toXYZ:qu,fromXYZ:Yu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:i,transfer:st,toXYZ:qu,fromXYZ:Yu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),s}var Ge=Wp();function yn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Us,Bo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Us===void 0&&(Us=nr("canvas")),Us.width=e.width,Us.height=e.height;let n=Us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=nr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yn(t[i]/255)*255):t[i]=yn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xp=0,rr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=an(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(_c(n[a].image)):r.push(_c(n[a]))}else r=_c(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function _c(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Bo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var qp=0,vc=new D,Ut=class s extends Qi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=Di,n=Di,r=Et,a=Bi,o=ki,l=xi,c=s.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=an(),this.name="",this.source=new rr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vc).x}get height(){return this.source.getSize(vc).y}get depth(){return this.source.getSize(vc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=sh;Ut.DEFAULT_ANISOTROPY=1;var ct=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,M=(f+1)/2,w=(p+1)/2,E=(h+d)/4,x=(u+_)/4,b=(g+m)/4;return T>M&&T>w?T<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(T),n=E/i,r=x/i):M>w?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=E/n,r=b/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=x/r,n=b/r),this.set(i,n,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ko=class extends Qi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Ut({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new rr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends ko{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},jr=class extends Ut{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=At,this.minFilter=At,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zo=class extends Ut{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=At,this.minFilter=At,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Be=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,i,n,r,a,o,l,c,h,u,d,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,i,n,r,a,o,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),a=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yp,e,$p)}lookAt(e,t,i){let n=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),Bn.crossVectors(i,vi),Bn.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),Bn.crossVectors(i,vi)),Bn.normalize(),eo.crossVectors(vi,Bn),n[0]=Bn.x,n[4]=eo.x,n[8]=vi.x,n[1]=Bn.y,n[5]=eo.y,n[9]=vi.y,n[2]=Bn.z,n[6]=eo.z,n[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],T=i[7],M=i[11],w=i[15],E=n[0],x=n[4],b=n[8],I=n[12],R=n[1],L=n[5],O=n[9],V=n[13],P=n[2],G=n[6],q=n[10],H=n[14],te=n[3],X=n[7],j=n[11],Q=n[15];return r[0]=a*E+o*R+l*P+c*te,r[4]=a*x+o*L+l*G+c*X,r[8]=a*b+o*O+l*q+c*j,r[12]=a*I+o*V+l*H+c*Q,r[1]=h*E+u*R+d*P+f*te,r[5]=h*x+u*L+d*G+f*X,r[9]=h*b+u*O+d*q+f*j,r[13]=h*I+u*V+d*H+f*Q,r[2]=g*E+_*R+m*P+p*te,r[6]=g*x+_*L+m*G+p*X,r[10]=g*b+_*O+m*q+p*j,r[14]=g*I+_*V+m*H+p*Q,r[3]=v*E+T*R+M*P+w*te,r[7]=v*x+T*L+M*G+w*X,r[11]=v*b+T*O+M*q+w*j,r[15]=v*I+T*V+M*H+w*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],v=l*f-c*d,T=o*f-c*u,M=o*d-l*u,w=a*f-c*h,E=a*d-l*h,x=a*u-o*h;return t*(_*v-m*T+p*M)-i*(g*v-m*w+p*E)+n*(g*T-_*w+p*x)-r*(g*M-_*E+m*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=t*o-i*a,T=t*l-n*a,M=t*c-r*a,w=i*l-n*o,E=i*c-r*o,x=n*c-r*l,b=h*_-u*g,I=h*m-d*g,R=h*p-f*g,L=u*m-d*_,O=u*p-f*_,V=d*p-f*m,P=v*V-T*O+M*L+w*R-E*I+x*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/P;return e[0]=(o*V-l*O+c*L)*G,e[1]=(n*O-i*V-r*L)*G,e[2]=(_*x-m*E+p*w)*G,e[3]=(d*E-u*x-f*w)*G,e[4]=(l*R-a*V-c*I)*G,e[5]=(t*V-n*R+r*I)*G,e[6]=(m*M-g*x-p*T)*G,e[7]=(h*x-d*M+f*T)*G,e[8]=(a*O-o*R+c*b)*G,e[9]=(i*R-t*O-r*b)*G,e[10]=(g*E-_*M+p*v)*G,e[11]=(u*M-h*E-f*v)*G,e[12]=(o*I-a*L-l*b)*G,e[13]=(t*L-i*I+n*b)*G,e[14]=(_*T-g*w-m*v)*G,e[15]=(h*w-u*T+d*v)*G,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,v=l*c,T=l*h,M=l*u,w=i.x,E=i.y,x=i.z;return n[0]=(1-(_+p))*w,n[1]=(f+M)*w,n[2]=(g-T)*w,n[3]=0,n[4]=(f-M)*E,n[5]=(1-(d+p))*E,n[6]=(m+v)*E,n[7]=0,n[8]=(g+T)*x,n[9]=(m-v)*x,n[10]=(1-(d+_))*x,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Os.set(n[0],n[1],n[2]).length(),o=Os.set(n[4],n[5],n[6]).length(),l=Os.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Vi.copy(this);let c=1/a,h=1/o,u=1/l;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=u,Vi.elements[9]*=u,Vi.elements[10]*=u,t.setFromRotationMatrix(Vi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,r,a,o=Ui,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Ui)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ir)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=Ui,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Ui)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===ir)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Os=new D,Vi=new Be,Yp=new D(0,0,0),$p=new D(1,1,1),Bn=new D,eo=new D,vi=new D,$u=new Be,Ku=new li,en=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $u.makeRotationFromQuaternion(e),this.setFromRotationMatrix($u,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kp=0,Zu=new D,Fs=new li,fn=new Be,to=new D,Or=new D,Zp=new D,Jp=new li,Ju=new D(1,0,0),ju=new D(0,1,0),Qu=new D(0,0,1),ed={type:"added"},jp={type:"removed"},Bs={type:"childadded",child:null},yc={type:"childremoved",child:null},it=class s extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new en,i=new li,n=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Be},normalMatrix:{value:new De}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Ju,e)}rotateY(e){return this.rotateOnAxis(ju,e)}rotateZ(e){return this.rotateOnAxis(Qu,e)}translateOnAxis(e,t){return Zu.copy(e).applyQuaternion(this.quaternion),this.position.add(Zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ju,e)}translateY(e){return this.translateOnAxis(ju,e)}translateZ(e){return this.translateOnAxis(Qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?to.copy(e):to.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Or,to,this.up):fn.lookAt(to,Or,this.up),this.quaternion.setFromRotationMatrix(fn),n&&(fn.extractRotation(n.matrixWorld),Fs.setFromRotationMatrix(fn),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ed),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jp),yc.child=e,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ed),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,Zp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};it.DEFAULT_UP=new D(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var je=class extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qp={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qp)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new je;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},io={h:0,s:0,l:0};function Mc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ge.workingColorSpace){if(e=xh(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Mc(a,r,e+1/3),this.g=Mc(a,r,e),this.b=Mc(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,n),this}setStyle(e,t=yt){function i(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let i=mf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return Ge.workingToColorSpace(ti.copy(this),e),Math.round($e(ti.r*255,0,255))*65536+Math.round($e(ti.g*255,0,255))*256+Math.round($e(ti.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(ti.copy(this),t);let i=ti.r,n=ti.g,r=ti.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=yt){Ge.workingToColorSpace(ti.copy(this),e);let t=ti.r,i=ti.g,n=ti.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(io);let i=Kr(kn.h,io.h,t),n=Kr(kn.s,io.s,t),r=Kr(kn.l,io.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ti=new fe;fe.NAMES=mf;var ea=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var gs=class extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wi=new D,pn=new D,Sc=new D,mn=new D,ks=new D,zs=new D,td=new D,bc=new D,Tc=new D,Ec=new D,wc=new ct,Ac=new ct,Rc=new ct,vn=class s{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Wi.subVectors(e,t),n.cross(Wi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Wi.subVectors(n,t),pn.subVectors(i,t),Sc.subVectors(e,t);let a=Wi.dot(Wi),o=Wi.dot(pn),l=Wi.dot(Sc),c=pn.dot(pn),h=pn.dot(Sc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return wc.setScalar(0),Ac.setScalar(0),Rc.setScalar(0),wc.fromBufferAttribute(e,t),Ac.fromBufferAttribute(e,i),Rc.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(wc,r.x),a.addScaledVector(Ac,r.y),a.addScaledVector(Rc,r.z),a}static isFrontFacing(e,t,i,n){return Wi.subVectors(i,t),pn.subVectors(e,t),Wi.cross(pn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Wi.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;ks.subVectors(n,i),zs.subVectors(r,i),bc.subVectors(e,i);let l=ks.dot(bc),c=zs.dot(bc);if(l<=0&&c<=0)return t.copy(i);Tc.subVectors(e,n);let h=ks.dot(Tc),u=zs.dot(Tc);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(ks,a);Ec.subVectors(e,r);let f=ks.dot(Ec),g=zs.dot(Ec);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(zs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return td.subVectors(r,n),o=(u-h)/(u-h+(f-g)),t.copy(n).addScaledVector(td,o);let p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(ks,a).addScaledVector(zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xi):Xi.fromBufferAttribute(r,a),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),so.subVectors(this.max,Fr),Hs.subVectors(e.a,Fr),Gs.subVectors(e.b,Fr),Vs.subVectors(e.c,Fr),zn.subVectors(Gs,Hs),Hn.subVectors(Vs,Gs),ls.subVectors(Hs,Vs);let t=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-ls.z,ls.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,ls.z,0,-ls.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-ls.y,ls.x,0];return!Cc(t,Hs,Gs,Vs,so)||(t=[1,0,0,0,1,0,0,0,1],!Cc(t,Hs,Gs,Vs,so))?!1:(ro.crossVectors(zn,Hn),t=[ro.x,ro.y,ro.z],Cc(t,Hs,Gs,Vs,so))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gn=[new D,new D,new D,new D,new D,new D,new D,new D],Xi=new D,no=new Mi,Hs=new D,Gs=new D,Vs=new D,zn=new D,Hn=new D,ls=new D,Fr=new D,so=new D,ro=new D,cs=new D;function Cc(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){cs.fromArray(s,r);let o=n.x*Math.abs(cs.x)+n.y*Math.abs(cs.y)+n.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),h=i.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var It=new D,ao=new ye,em=0,Pt=class extends Qi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:em++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=mh,this.updateRanges=[],this.gpuType=Ti,this.version=0,this._normalizationScale=e!==void 0?Hl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):vh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):yh(e,this.array)}};var ta=class extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ia=class extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Qe=class extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}},tm=new Mi,Br=new D,Ic=new D,pi=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):tm.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);let t=Br.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Br,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(Ic)),this.expandByPoint(Br.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},im=0,Ni=new Be,Pc=new it,Ws=new D,yi=new Mi,kr=new Mi,Wt=new D,xt=class s extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ap(e)?ia:ta)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new De().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,i){return Ni.makeTranslation(e,t,i),this.applyMatrix4(Ni),this}scale(e,t,i){return Ni.makeScale(e,t,i),this.applyMatrix4(Ni),this}lookAt(e){return Pc.lookAt(e),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];yi.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(yi.min,kr.min),yi.expandByPoint(Wt),Wt.addVectors(yi.max,kr.max),yi.expandByPoint(Wt)):(yi.expandByPoint(kr.min),yi.expandByPoint(kr.max))}yi.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(Ws.fromBufferAttribute(e,c),Wt.add(Ws)),n=Math.max(n,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Pt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let I=0;I<i.count;I++)o[I]=new D,l[I]=new D;let h=new D,u=new D,d=new D,f=new ye,g=new ye,_=new ye,m=new D,p=new D;function v(I,R,L){c[I]=c[R]=c[L]=1,h.fromBufferAttribute(i,I),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,L),f.fromBufferAttribute(r,I),g.fromBufferAttribute(r,R),_.fromBufferAttribute(r,L),u.sub(h),d.sub(h),g.sub(f),_.sub(f);let O=1/(g.x*_.y-_.x*g.y);isFinite(O)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(O),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(O),o[I].add(m),o[R].add(m),o[L].add(m),l[I].add(p),l[R].add(p),l[L].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,R=T.length;I<R;++I){let L=T[I],O=L.start,V=L.count;for(let P=O,G=O+V;P<G;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new D,w=new D,E=new D,x=new D;function b(I){E.fromBufferAttribute(n,I),x.copy(E);let R=o[I];M.copy(R),M.sub(E.multiplyScalar(E.dot(R))).normalize(),w.crossVectors(x,R);let O=w.dot(l[I])<0?-1:1;a.setXYZW(I,M.x,M.y,M.z,O)}for(let I=0,R=i.count;I<R;++I)c[I]&&b(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Pt(d,h,u)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},xs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mh,this.updateRanges=[],this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=id(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=id(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function id(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=an()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var ai=new D,Wn=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?Hl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ai.fromBufferAttribute(this,t),ai.applyMatrix4(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ai.fromBufferAttribute(this,t),ai.applyNormalMatrix(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ai.fromBufferAttribute(this,t),ai.transformDirection(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):vh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):yh(e,this.data.array)}},Lc=new D,nm=new D,sm=new De,qi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Lc.subVectors(i,t).cross(nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(Lc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||sm.getNormalMatrix(e),n=this.coplanarPoint(Lc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rm=0,ii=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=an(),this.name="",this.type="Material",this.blending=sn,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=nh,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Io,this.stencilZFail=Io,this.stencilZPass=Io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new qi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},_s=class extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xs,zr=new D,qs=new D,Ys=new D,$s=new ye,Hr=new ye,gf=new Be,oo=new D,Gr=new D,lo=new D,nd=new ye,Nc=new ye,sd=new ye,or=class extends it{constructor(e=new _s){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xs(t,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new Wn(i,3,0,!1)),Xs.setAttribute("uv",new Wn(i,2,3,!1))}this.geometry=Xs,this.material=e,this.center=new ye(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),gf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Ys.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;co(oo.set(-.5,-.5,0),Ys,a,qs,n,r),co(Gr.set(.5,-.5,0),Ys,a,qs,n,r),co(lo.set(.5,.5,0),Ys,a,qs,n,r),nd.set(0,0),Nc.set(1,0),sd.set(1,1);let o=e.ray.intersectTriangle(oo,Gr,lo,!1,zr);if(o===null&&(co(Gr.set(-.5,.5,0),Ys,a,qs,n,r),Nc.set(0,1),o=e.ray.intersectTriangle(oo,lo,Gr,!1,zr),o===null))return;let l=e.ray.origin.distanceTo(zr);l<e.near||l>e.far||t.push({distance:l,point:zr.clone(),uv:vn.getInterpolation(zr,oo,Gr,lo,nd,Nc,sd,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function co(s,e,t,i,n,r){$s.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(Hr.x=r*$s.x-n*$s.y,Hr.y=n*$s.x+r*$s.y):Hr.copy($s),s.copy(e),s.x+=Hr.x,s.y+=Hr.y,s.applyMatrix4(gf)}var xn=new D,Dc=new D,ho=new D,uo=new D,vs=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Dc.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),uo.copy(this.origin).sub(Dc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ho),o=uo.dot(this.direction),l=-uo.dot(ho),c=uo.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Dc).addScaledVector(ho,d),f}intersectSphere(e,t){if(e.radius<0)return null;xn.subVectors(e.center,this.origin);let i=xn.dot(this.direction),n=xn.dot(xn)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,i,n,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=i.x-a.x,v=i.y-a.y,T=i.z-a.z,M=Math.abs(l),w=Math.abs(c),E=Math.abs(h),x,b,I,R,L,O,V,P,G,q,H,te;if(M>=w&&M>=E?(I=l,O=u,G=g,te=p,l>=0?(x=c,b=h,R=d,L=f,V=_,P=m,q=v,H=T):(x=h,b=c,R=f,L=d,V=m,P=_,q=T,H=v)):w>=E?(I=c,O=d,G=_,te=v,c>=0?(x=h,b=l,R=f,L=u,V=m,P=g,q=T,H=p):(x=l,b=h,R=u,L=f,V=g,P=m,q=p,H=T)):(I=h,O=f,G=m,te=T,h>=0?(x=l,b=c,R=u,L=d,V=g,P=_,q=p,H=v):(x=c,b=l,R=d,L=u,V=_,P=g,q=v,H=p)),I===0)return null;let X=x/I,j=b/I,Q=1/I,Ee=R-X*O,Oe=L-j*O,K=V-X*G,xe=P-j*G,Se=q-X*te,Ie=H-j*te,_e=Se*xe-Ie*K,ke=Ee*Ie-Oe*Se,Rt=K*Oe-xe*Ee;if(n){if(_e<0||ke<0||Rt<0)return null}else if((_e<0||ke<0||Rt<0)&&(_e>0||ke>0||Rt>0))return null;let Le=_e+ke+Rt;if(Le===0)return null;let ot=Q*(_e*O+ke*G+Rt*te);return(Le>0?ot<0:ot>0)?null:this.at(ot/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rd=new Be,hs=new vs,fo=new pi,ad=new D,po=new D,mo=new D,go=new D,Uc=new D,xo=new D,od=new D,_o=new D,se=class extends it{constructor(e=new xt,t=new et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Uc.fromBufferAttribute(u,e),a?xo.addScaledVector(Uc,h):xo.addScaledVector(Uc.sub(t),h))}t.add(xo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(fo.containsPoint(hs.origin)===!1&&(hs.intersectSphere(fo,ad)===null||hs.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(rd.copy(r).invert(),hs.copy(e.ray).applyMatrix4(rd),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,w=T;M<w;M+=3){let E=o.getX(M),x=o.getX(M+1),b=o.getX(M+2);n=vo(this,p,e,i,c,h,u,E,x,b),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let v=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);n=vo(this,a,e,i,c,h,u,v,T,M),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,w=T;M<w;M+=3){let E=M,x=M+1,b=M+2;n=vo(this,p,e,i,c,h,u,E,x,b),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let v=m,T=m+1,M=m+2;n=vo(this,a,e,i,c,h,u,v,T,M),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function am(s,e,t,i,n,r,a,o){let l;if(e.side===Ft?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Fi,o),l===null)return null;_o.copy(o),_o.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(_o);return c<t.near||c>t.far?null:{distance:c,point:_o.clone(),object:s}}function vo(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,po),s.getVertexPosition(l,mo),s.getVertexPosition(c,go);let h=am(s,e,t,i,po,mo,go,od);if(h){let u=new D;vn.getBarycoord(od,po,mo,go,u),n&&(h.uv=vn.getInterpolatedAttribute(n,o,l,c,u,new ye)),r&&(h.uv1=vn.getInterpolatedAttribute(r,o,l,c,u,new ye)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};vn.getNormal(po,mo,go,d.normal),h.face=d,h.barycoord=u}return h}var Vr=new ct,ld=new ct,cd=new ct,om=new ct,hd=new Be,yo=new D,Oc=new pi,ud=new Be,Fc=new vs,na=class extends se{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hc,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,yo),this.boundingBox.expandByPoint(yo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,yo),this.boundingSphere.expandByPoint(yo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oc.copy(this.boundingSphere),Oc.applyMatrix4(n),e.ray.intersectsSphere(Oc)!==!1&&(ud.copy(n).invert(),Fc.copy(e.ray).applyMatrix4(ud),!(this.boundingBox!==null&&Fc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ef?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;ld.fromBufferAttribute(n.attributes.skinIndex,e),cd.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(Vr.copy(t),t.set(0,0,0,0)):(Vr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Vr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=cd.getComponent(r);if(a!==0){let o=ld.getComponent(r);hd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(om.copy(Vr).applyMatrix4(hd),a)}}return t.isVector4&&(t.w=Vr.w),t.applyMatrix4(this.bindMatrixInverse)}},lr=class extends it{constructor(){super(),this.isBone=!0,this.type="Bone"}},Xn=class extends Ut{constructor(e=null,t=1,i=1,n,r,a,o,l,c=At,h=At,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},dd=new Be,lm=new Be,sa=class s{constructor(e=[],t=[]){this.uuid=an(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:lm;dd.multiplyMatrices(o,t[r]),dd.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Xn(t,e,e,ki,Ti);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],a=t[r];a===void 0&&(Ae("Skeleton: No bone found with UUID:",r),a=new lr),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},Sn=class extends Pt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ks=new Be,fd=new Be,Mo=[],pd=new Mi,cm=new Be,Wr=new se,Xr=new pi,ci=class extends se{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,cm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ks),pd.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(pd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ks),Xr.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(i),e.ray.intersectsSphere(Xr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Ks),fd.multiplyMatrices(i,Ks),Wr.matrixWorld=fd,Wr.raycast(e,Mo);for(let a=0,o=Mo.length;a<o;a++){let l=Mo[a];l.instanceId=r,l.object=this,t.push(l)}Mo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Sn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xn(new Float32Array(n*this.count),n,this.count,ol,Ti));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},us=new pi,hm=new ye(.5,.5),So=new D,qn=class{constructor(e=new qi,t=new qi,i=new qi,n=new qi,r=new qi,a=new qi){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ui,i=!1){let n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],T=r[13],M=r[14],w=r[15];if(n[0].setComponents(c-a,f-h,p-g,w-v).normalize(),n[1].setComponents(c+a,f+h,p+g,w+v).normalize(),n[2].setComponents(c+o,f+u,p+_,w+T).normalize(),n[3].setComponents(c-o,f-u,p-_,w-T).normalize(),i)n[4].setComponents(l,d,m,M).normalize(),n[5].setComponents(c-l,f-d,p-m,w-M).normalize();else if(n[4].setComponents(c-l,f-d,p-m,w-M).normalize(),t===Ui)n[5].setComponents(c+l,f+d,p+m,w+M).normalize();else if(t===ir)n[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);let t=hm.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(So.x=n.normal.x>0?e.max.x:e.min.x,So.y=n.normal.y>0?e.max.y:e.min.y,So.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},md=new Be,Ho=class s{constructor(){this.coordinateSystem=Ui,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];md.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new qn),i[n].setFromProjectionMatrix(md,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new qn),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new s().copy(this)}};var cr=class extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Go=new D,Vo=new D,gd=new Be,qr=new vs,bo=new pi,Bc=new D,xd=new D,ys=class extends it{constructor(e=new xt,t=new cr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Go.fromBufferAttribute(t,n-1),Vo.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Go.distanceTo(Vo);e.setAttribute("lineDistance",new Qe(i,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(n),bo.radius+=r,e.ray.intersectsSphere(bo)===!1)return;gd.copy(n).invert(),qr.copy(e.ray).applyMatrix4(gd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=h.getX(_),v=h.getX(_+1),T=To(this,e,qr,l,p,v,_);T&&t.push(T)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=To(this,e,qr,l,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=To(this,e,qr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=To(this,e,qr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function To(s,e,t,i,n,r,a){let o=s.geometry.attributes.position;if(Go.fromBufferAttribute(o,n),Vo.fromBufferAttribute(o,r),t.distanceSqToSegment(Go,Vo,Bc,xd)>i)return;Bc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Bc);if(!(c<e.near||c>e.far))return{distance:c,point:xd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var _d=new D,vd=new D,ra=class extends ys{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)_d.fromBufferAttribute(t,n),vd.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+_d.distanceTo(vd);e.setAttribute("lineDistance",new Qe(i,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},aa=class extends ys{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Yn=class extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yd=new Be,qc=new vs,Eo=new pi,wo=new D,Ms=class extends it{constructor(e=new xt,t=new Yn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(n),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;yd.copy(n).invert(),qc.copy(e.ray).applyMatrix4(yd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);wo.fromBufferAttribute(u,m),Md(wo,m,l,n,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)wo.fromBufferAttribute(u,g),Md(wo,g,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Md(s,e,t,i,n,r,a){let o=qc.distanceSqToPoint(s);if(o<t){let l=new D;qc.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var oa=class extends Ut{constructor(e=[],t=Es,i,n,r,a,o,l,c,h){super(e,t,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$n=class extends Ut{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bn=class extends Ut{constructor(e,t,i=$i,n,r,a,o=At,l=At,c,h=Mn,u=1){if(h!==Mn&&h!==Pn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},la=class extends bn{constructor(e,t=$i,i=Es,n,r,a=At,o=At,l,c=Mn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ca=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Si=class s extends xt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function g(_,m,p,v,T,M,w,E,x,b,I){let R=M/x,L=w/b,O=M/2,V=w/2,P=E/2,G=x+1,q=b+1,H=0,te=0,X=new D;for(let j=0;j<q;j++){let Q=j*L-V;for(let Ee=0;Ee<G;Ee++){let Oe=Ee*R-O;X[_]=Oe*v,X[m]=Q*T,X[p]=P,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=E>0?1:-1,h.push(X.x,X.y,X.z),u.push(Ee/x),u.push(1-j/b),H+=1}}for(let j=0;j<b;j++)for(let Q=0;Q<x;Q++){let Ee=d+Q+G*j,Oe=d+Q+G*(j+1),K=d+(Q+1)+G*(j+1),xe=d+(Q+1)+G*j;l.push(Ee,Oe,xe),l.push(Oe,K,xe),te+=6}o.addGroup(f,te,I),f+=te,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var hr=class s extends xt{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=i/2,p=0;v(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function v(){let M=new D,w=new D,E=0,x=(t-e)/i;for(let b=0;b<=r;b++){let I=[],R=b/r,L=R*(t-e)+e;for(let O=0;O<=n;O++){let V=O/n,P=V*l+o,G=Math.sin(P),q=Math.cos(P);w.x=L*G,w.y=-R*i+m,w.z=L*q,u.push(w.x,w.y,w.z),M.set(G,x,q).normalize(),d.push(M.x,M.y,M.z),f.push(V,1-R),I.push(g++)}_.push(I)}for(let b=0;b<n;b++)for(let I=0;I<r;I++){let R=_[I][b],L=_[I+1][b],O=_[I+1][b+1],V=_[I][b+1];(e>0||I!==0)&&(h.push(R,L,V),E+=3),(t>0||I!==r-1)&&(h.push(L,O,V),E+=3)}c.addGroup(p,E,0),p+=E}function T(M){let w=g,E=new ye,x=new D,b=0,I=M===!0?e:t,R=M===!0?1:-1;for(let O=1;O<=n;O++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),g++;let L=g;for(let O=0;O<=n;O++){let P=O/n*l+o,G=Math.cos(P),q=Math.sin(P);x.x=I*q,x.y=m*R,x.z=I*G,u.push(x.x,x.y,x.z),d.push(0,R,0),E.x=G*.5+.5,E.y=q*.5*R+.5,f.push(E.x,E.y),g++}for(let O=0;O<n;O++){let V=w+O,P=L+O;M===!0?h.push(P,P+1,V):h.push(P+1,P,V),b+=3}c.addGroup(p,b,M===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kn=class s extends hr{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ha=class s extends xt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let T=new D,M=new D,w=new D;for(let E=0;E<t.length;E+=3)f(t[E+0],T),f(t[E+1],M),f(t[E+2],w),l(T,M,w,v)}function l(v,T,M,w){let E=w+1,x=[];for(let b=0;b<=E;b++){x[b]=[];let I=v.clone().lerp(M,b/E),R=T.clone().lerp(M,b/E),L=E-b;for(let O=0;O<=L;O++)O===0&&b===E?x[b][O]=I:x[b][O]=I.clone().lerp(R,O/L)}for(let b=0;b<E;b++)for(let I=0;I<2*(E-b)-1;I++){let R=Math.floor(I/2);I%2===0?(d(x[b][R+1]),d(x[b+1][R]),d(x[b][R])):(d(x[b][R+1]),d(x[b+1][R+1]),d(x[b+1][R]))}}function c(v){let T=new D;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(v),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function h(){let v=new D;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let M=m(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;a.push(M,1-w)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let T=a[v+0],M=a[v+2],w=a[v+4],E=Math.max(T,M,w),x=Math.min(T,M,w);E>.9&&x<.1&&(T<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,T){let M=v*3;T.x=e[M+0],T.y=e[M+1],T.z=e[M+2]}function g(){let v=new D,T=new D,M=new D,w=new D,E=new ye,x=new ye,b=new ye;for(let I=0,R=0;I<r.length;I+=9,R+=6){v.set(r[I+0],r[I+1],r[I+2]),T.set(r[I+3],r[I+4],r[I+5]),M.set(r[I+6],r[I+7],r[I+8]),E.set(a[R+0],a[R+1]),x.set(a[R+2],a[R+3]),b.set(a[R+4],a[R+5]),w.copy(v).add(T).add(M).divideScalar(3);let L=m(w);_(E,R+0,v,L),_(x,R+2,T,L),_(b,R+4,M,L)}}function _(v,T,M,w){w<0&&v.x===1&&(a[T]=v.x-1),M.x===0&&M.z===0&&(a[T]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Yi=class s extends ha{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var ua=class s extends ha{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},bi=class s extends xt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let T=0;T<c;T++){let M=T*u-r;g.push(M,-v,0),_.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let T=v+c*p,M=v+c*(p+1),w=v+1+c*(p+1),E=v+1+c*p;f.push(T,M,E),f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var hi=class s extends xt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let v=[],T=p/i,M=a+T*o,w=e*Math.cos(M),E=Math.sqrt(e*e-w*w),x=0;p===0&&a===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let I=b/t,R=n+I*r;u.x=-E*Math.cos(R),u.y=w,u.z=E*Math.sin(R),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(I+x,1-T),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let T=h[p][v+1],M=h[p][v],w=h[p+1][v],E=h[p+1][v+1];(p!==0||a>0)&&f.push(T,M,E),(p!==i-1||l<Math.PI)&&f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xt=class s extends xt{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],d=new D,f=new D,g=new D;for(let _=0;_<=i;_++){let m=a+_/i*o;for(let p=0;p<=n;p++){let v=p/n*r;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/n),u.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=n;m++){let p=(n+1)*_+m-1,v=(n+1)*(_-1)+m-1,T=(n+1)*(_-1)+m,M=(n+1)*_+m;l.push(p,v,M),l.push(v,T,M)}this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},da=class s extends xt{constructor(e=1,t=.4,i=64,n=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],u=new D,d=new D,f=new D,g=new D,_=new D,m=new D,p=new D;for(let T=0;T<=i;++T){let M=T/i*r*Math.PI*2;v(M,r,a,e,f),v(M+.01,r,a,e,g),m.subVectors(g,f),p.addVectors(g,f),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let w=0;w<=n;++w){let E=w/n*Math.PI*2,x=-t*Math.cos(E),b=t*Math.sin(E);u.x=f.x+(x*p.x+b*_.x),u.y=f.y+(x*p.y+b*_.y),u.z=f.z+(x*p.z+b*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(T/i),h.push(w/n)}}for(let T=1;T<=i;T++)for(let M=1;M<=n;M++){let w=(n+1)*(T-1)+(M-1),E=(n+1)*T+(M-1),x=(n+1)*T+M,b=(n+1)*(T-1)+M;o.push(w,E,b),o.push(E,x,b)}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2));function v(T,M,w,E,x){let b=Math.cos(T),I=Math.sin(T),R=w/M*T,L=Math.cos(R);x.x=E*(2+L)*.5*b,x.y=E*(2+L)*I*.5,x.z=E*Math.sin(R)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}};function Rs(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(Sd(n))n.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(Sd(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function ni(s){let e={};for(let t=0;t<s.length;t++){let i=Rs(s[t]);for(let n in i)e[n]=i[n]}return e}function Sd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function um(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Mh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var Dn={clone:Rs,merge:ni},dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mt=class extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dm,this.fragmentShader=fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=um(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new fe().setHex(n.value);break;case"v2":this.uniforms[i].value=new ye().fromArray(n.value);break;case"v3":this.uniforms[i].value=new D().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ct().fromArray(n.value);break;case"m3":this.uniforms[i].value=new De().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Be().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ur=class extends Mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gt=class extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Kt=class extends gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ds('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ds('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var fa=class extends ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=el,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wo=class extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xo=class extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Vn(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Yr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function pm(s){function e(n,r){return s[n]-s[r]}let t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function bd(s,e,t){let i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function mm(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}var tn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qo=class extends tn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wc:r=e,o=2*t-i;break;case Xc:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wc:a=e,l=2*i-t;break;case Xc:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,T=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+v*a[c+w]+T*a[l+w]+M*a[u+w];return r}},Yo=class extends tn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},$o=class extends tn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Ko=class extends tn{interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(n-t),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],p=f*d+g*2,v=u[p],T=u[p+1],M=e*d+g*2,w=h[M],E=h[M+1],x=xm(i,t,v,w,n);r[g]=xf(x,_,T,E,m)}return r}};function xf(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function gm(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function xm(s,e,t,i,n){let r=(s-e)/(n-e);for(let a=0;a<8;a++){let o=xf(r,e,t,i,n)-s;if(Math.abs(o)<1e-10)break;let l=gm(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var mi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vn(t,this.TimeBufferType),this.values=Vn(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vn(e.times,Array),values:Vn(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),Yr(e.settings)&&(i.settings={inTangents:Vn(e.settings.inTangents,Array),outTangents:Vn(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ko(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case fs:t=this.InterpolantFactoryMethodDiscrete;break;case ps:t=this.InterpolantFactoryMethodLinear;break;case Co:t=this.InterpolantFactoryMethodSmooth;break;case Gc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ae("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return ps;case this.InterpolantFactoryMethodSmooth:return Co;case this.InterpolantFactoryMethodBezier:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;Yr(this.settings)&&(Td(this.settings.inTangents,e),Td(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;Yr(this.settings)&&(Ed(this.settings.inTangents,e),Ed(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Rp(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Co,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,Yr(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Td(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]+=e}function Ed(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=ps;var Tn=class extends mi{constructor(e,t,i){super(e,t,i)}};Tn.prototype.ValueTypeName="bool";Tn.prototype.ValueBufferType=Array;Tn.prototype.DefaultInterpolation=fs;Tn.prototype.InterpolantFactoryMethodLinear=void 0;Tn.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends mi{constructor(e,t,i,n){super(e,t,i,n)}};pa.prototype.ValueTypeName="color";var En=class extends mi{constructor(e,t,i,n){super(e,t,i,n)}};En.prototype.ValueTypeName="number";var Zo=class extends tn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)li.slerpFlat(r,0,a,c-o,a,c,l);return r}},wn=class extends mi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Zo(this.times,this.values,this.getValueSize(),e)}};wn.prototype.ValueTypeName="quaternion";wn.prototype.InterpolantFactoryMethodSmooth=void 0;var An=class extends mi{constructor(e,t,i){super(e,t,i)}};An.prototype.ValueTypeName="string";An.prototype.ValueBufferType=Array;An.prototype.DefaultInterpolation=fs;An.prototype.InterpolantFactoryMethodLinear=void 0;An.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends mi{constructor(e,t,i,n){super(e,t,i,n)}};Zn.prototype.ValueTypeName="vector";var ma=class{constructor(e="",t=-1,i=[],n=tf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=an(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(vm(i[a]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(mi.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=pm(l);l=bd(l,1,h),c=bd(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new En(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=n[u];d||(n[u]=d=[]),d.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function _m(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return En;case"vector":case"vector2":case"vector3":case"vector4":return Zn;case"color":return pa;case"quaternion":return wn;case"bool":case"boolean":return Tn;case"string":return An}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function vm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=_m(s.type);if(s.times===void 0){let i=[],n=[];mm(s.keys,i,n,"value"),s.times=i,s.values=n}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Yr(s.settings)&&(t.settings={inTangents:Vn(s.settings.inTangents,Float32Array),outTangents:Vn(s.settings.outTangents,Float32Array)}),t}var ji={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(wd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!wd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function wd(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Jo=class{constructor(e,t,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_f=new Jo,nn=class{constructor(e){this.manager=e!==void 0?e:_f,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};nn.DEFAULT_MATERIAL_NAME="__DEFAULT";var _n={},Yc=class extends Error{constructor(e,t){super(e),this.response=t}},dr=class extends nn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ji.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(_n[e]!==void 0){_n[e].push({onLoad:t,onProgress:i,onError:n});return}_n[e]=[],_n[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=_n[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:T,value:M})=>{if(T)p.close();else{_+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,x=h.length;E<x;E++){let b=h[E];b.onProgress&&b.onProgress(w)}p.enqueue(M),v()}},T=>{p.error(T)})}}});return new Response(m)}else throw new Yc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ji.add(`file:${e}`,c);let h=_n[e];delete _n[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=_n[e];if(h===void 0)throw this.manager.itemError(e),c;delete _n[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Zs=new WeakMap,jo=class extends nn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ji.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Zs.get(a);u===void 0&&(u=[],Zs.set(a,u)),u.push({onLoad:t,onError:n})}return a}let o=nr("img");function l(){h(),t&&t(this);let u=Zs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Zs.delete(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),ji.remove(`image:${e}`);let d=Zs.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Zs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ji.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var ga=class extends nn{constructor(e){super(e)}load(e,t,i,n){let r=new Ut,a=new jo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},Ss=class extends it{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xa=class extends Ss{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},kc=new Be,Ad=new D,Rd=new D,fr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qn,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ad),Rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(kc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===ir||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ao=new D,Ro=new li,Ji=new D,_a=class extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ao,Ro,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Ro,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ao,Ro,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Ro,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gn=new D,Cd=new ye,Id=new ye,Dt=class extends _a{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,Cd,Id),t.subVectors(Id,Cd)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($r*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$c=class extends fr{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ms*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},va=class extends Ss{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new $c}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Kc=class extends fr{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0}},Zt=class extends Ss{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Kc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Rn=class extends _a{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zc=class extends fr{constructor(){super(new Rn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jn=class extends Ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new Zc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Cn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var zc=new WeakMap,ya=class extends nn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ji.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{zc.has(a)===!0?(n&&n(zc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ji.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),zc.set(l,c),ji.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ji.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Js=-90,js=1,pr=class extends it{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Dt(Js,js,e,t);n.layers=this.layers,this.add(n);let r=new Dt(Js,js,e,t);r.layers=this.layers,this.add(r);let a=new Dt(Js,js,e,t);a.layers=this.layers,this.add(a);let o=new Dt(Js,js,e,t);o.layers=this.layers,this.add(o);let l=new Dt(Js,js,e,t);l.layers=this.layers,this.add(l);let c=new Dt(Js,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ir)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Qo=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ma=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ym.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ym(){this._document.hidden===!1&&this.reset()}var Sh="\\[\\]\\.:\\/",Mm=new RegExp("["+Sh+"]","g"),bh="[^"+Sh+"]",Sm="[^"+Sh.replace("\\.","")+"]",bm=/((?:WC+[\/:])*)/.source.replace("WC",bh),Tm=/(WCOD+)?/.source.replace("WCOD",Sm),Em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),Am=new RegExp("^"+bm+Tm+Em+wm+"$"),Rm=["material","materials","bones","map"],Jc=class{constructor(e,t,i){let n=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mm,"")}static parseTrackName(e){let t=Am.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Rm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Jc;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ty=new Float32Array(1);var jc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};function Th(s,e,t,i){let n=Cm(i);switch(t){case ch:return s*e;case ol:return s*e/n.components*n.byteLength;case ll:return s*e/n.components*n.byteLength;case jn:return s*e*2/n.components*n.byteLength;case cl:return s*e*2/n.components*n.byteLength;case hh:return s*e*3/n.components*n.byteLength;case ki:return s*e*4/n.components*n.byteLength;case hl:return s*e*4/n.components*n.byteLength;case Ca:case Ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pa:case La:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dl:case pl:return Math.max(s,16)*Math.max(e,8)/4;case ul:case fl:return Math.max(s,8)*Math.max(e,8)/2;case ml:case gl:case _l:case vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xl:case Na:case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case El:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case wl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Al:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Il:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ul:case Ol:case Fl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Bl:case kl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Da:case zl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cm(s){switch(s){case xi:case rh:return{byteLength:1,components:1};case _r:case ah:case Jt:return{byteLength:2,components:1};case rl:case al:return{byteLength:2,components:4};case $i:case sl:case Ti:return{byteLength:4,components:1};case oh:case lh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function zf(){let s=null,e=!1,t=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Pm(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nm=`#ifdef USE_ALPHAHASH
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
#endif`,Dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bm=`#ifdef USE_AOMAP
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
#endif`,km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zm=`#ifdef USE_BATCHING
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
#endif`,Hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xm=`#ifdef USE_IRIDESCENCE
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
#endif`,qm=`#ifdef USE_BUMPMAP
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tg=`#define PI 3.141592653589793
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
} // validated`,ig=`vec3 transformedNormal = objectNormal;
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
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_g=`#ifdef USE_GRADIENTMAP
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
}`,vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rg=`PhysicalMaterial material;
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
#endif`,Cg=`uniform sampler2D dfgLUT;
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
}`,Ig=`
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
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ng=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hg=`#if defined( USE_POINTS_UV )
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
#endif`,Gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xg=`#if defined( USE_MORPHCOLORS )
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
#endif`,qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`#ifdef USE_MORPHTARGETS
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
#endif`,$g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,e0=`#ifdef USE_NORMALMAP
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
#endif`,t0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,o0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,g0=`float getShadowMask() {
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
}`,x0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,v0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,M0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#ifdef USE_TRANSMISSION
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L0=`uniform sampler2D t2D;
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform float backgroundBlurriness;
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`#include <common>
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
}`,B0=`#if DEPTH_PACKING == 3200
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
}`,k0=`#define DISTANCE
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
}`,z0=`#define DISTANCE
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`uniform float scale;
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#define LAMBERT
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
}`,$0=`#define LAMBERT
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
}`,K0=`#define MATCAP
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
}`,Z0=`#define MATCAP
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
}`,J0=`#define NORMAL
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
}`,j0=`#define NORMAL
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
}`,Q0=`#define PHONG
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
}`,ex=`#define PHONG
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
}`,tx=`#define STANDARD
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
}`,ix=`#define STANDARD
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
}`,nx=`#define TOON
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
}`,sx=`#define TOON
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
}`,rx=`uniform float size;
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
}`,ax=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,lx=`uniform vec3 color;
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
}`,cx=`uniform float rotation;
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
}`,hx=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Lm,alphahash_pars_fragment:Nm,alphamap_fragment:Dm,alphamap_pars_fragment:Um,alphatest_fragment:Om,alphatest_pars_fragment:Fm,aomap_fragment:Bm,aomap_pars_fragment:km,batching_pars_vertex:zm,batching_vertex:Hm,begin_vertex:Gm,beginnormal_vertex:Vm,bsdfs:Wm,iridescence_fragment:Xm,bumpmap_pars_fragment:qm,clipping_planes_fragment:Ym,clipping_planes_pars_fragment:$m,clipping_planes_pars_vertex:Km,clipping_planes_vertex:Zm,color_fragment:Jm,color_pars_fragment:jm,color_pars_vertex:Qm,color_vertex:eg,common:tg,defaultnormal_vertex:ig,displacementmap_pars_vertex:ng,displacementmap_vertex:sg,emissivemap_fragment:rg,emissivemap_pars_fragment:ag,colorspace_fragment:og,colorspace_pars_fragment:lg,envmap_fragment:cg,envmap_common_pars_fragment:hg,envmap_pars_fragment:ug,envmap_pars_vertex:dg,envmap_physical_pars_fragment:bg,envmap_vertex:fg,fog_vertex:pg,fog_pars_vertex:mg,fog_fragment:gg,fog_pars_fragment:xg,gradientmap_pars_fragment:_g,lightmap_pars_fragment:vg,lights_lambert_fragment:yg,lights_lambert_pars_fragment:Mg,lights_pars_begin:Sg,lights_toon_fragment:Tg,lights_toon_pars_fragment:Eg,lights_phong_fragment:wg,lights_phong_pars_fragment:Ag,lights_physical_fragment:Rg,lights_physical_pars_fragment:Cg,lights_fragment_begin:Ig,lights_fragment_maps:Pg,lights_fragment_end:Lg,lightprobes_pars_fragment:Ng,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Ug,logdepthbuf_pars_vertex:Og,logdepthbuf_vertex:Fg,map_fragment:Bg,map_pars_fragment:kg,map_particle_fragment:zg,map_particle_pars_fragment:Hg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Wg,morphcolor_vertex:Xg,morphnormal_vertex:qg,morphtarget_pars_vertex:Yg,morphtarget_vertex:$g,normal_fragment_begin:Kg,normal_fragment_maps:Zg,normal_pars_fragment:Jg,normal_pars_vertex:jg,normal_vertex:Qg,normalmap_pars_fragment:e0,clearcoat_normal_fragment_begin:t0,clearcoat_normal_fragment_maps:i0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:s0,opaque_fragment:r0,packing:a0,premultiplied_alpha_fragment:o0,project_vertex:l0,dithering_fragment:c0,dithering_pars_fragment:h0,roughnessmap_fragment:u0,roughnessmap_pars_fragment:d0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:p0,shadowmap_vertex:m0,shadowmask_pars_fragment:g0,skinbase_vertex:x0,skinning_pars_vertex:_0,skinning_vertex:v0,skinnormal_vertex:y0,specularmap_fragment:M0,specularmap_pars_fragment:S0,tonemapping_fragment:b0,tonemapping_pars_fragment:T0,transmission_fragment:E0,transmission_pars_fragment:w0,uv_pars_fragment:A0,uv_pars_vertex:R0,uv_vertex:C0,worldpos_vertex:I0,background_vert:P0,background_frag:L0,backgroundCube_vert:N0,backgroundCube_frag:D0,cube_vert:U0,cube_frag:O0,depth_vert:F0,depth_frag:B0,distance_vert:k0,distance_frag:z0,equirect_vert:H0,equirect_frag:G0,linedashed_vert:V0,linedashed_frag:W0,meshbasic_vert:X0,meshbasic_frag:q0,meshlambert_vert:Y0,meshlambert_frag:$0,meshmatcap_vert:K0,meshmatcap_frag:Z0,meshnormal_vert:J0,meshnormal_frag:j0,meshphong_vert:Q0,meshphong_frag:ex,meshphysical_vert:tx,meshphysical_frag:ix,meshtoon_vert:nx,meshtoon_frag:sx,points_vert:rx,points_frag:ax,shadow_vert:ox,shadow_frag:lx,sprite_vert:cx,sprite_frag:hx},ge={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},ln={basic:{uniforms:ni([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:ni([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:ni([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:ni([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:ni([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new fe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:ni([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:ni([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:ni([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:ni([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:ni([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:ni([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:ni([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:ni([ge.lights,ge.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ln.physical={uniforms:ni([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Vl={r:0,b:0,g:0},ux=new Be,Hf=new De;Hf.set(-1,0,0,0,1,0,0,0,1);function dx(s,e,t,i,n,r){let a=new fe(0),o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let M=v.backgroundBlurriness>0;T=e.get(T,M)}return T}function g(v){let T=!1,M=f(v);M===null?m(a,o):M&&M.isColor&&(m(M,1),T=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,T){let M=f(T);M&&M.isCubeTexture?(c===void 0&&(c=new se(new Si(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:Rs(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ux.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hf),c.material.toneMapped=Ge.getTransfer(M.colorSpace)!==st,(h!==M||u!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new se(new bi(2,2),new Mt({name:"BackgroundMaterial",uniforms:Rs(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(M.colorSpace)!==st,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,T){v.getRGB(Vl,Mh(s)),t.buffers.color.setClear(Vl.r,Vl.g,Vl.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:_,dispose:p}}function fx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(L,O,V,P,G){let q=!1,H=u(L,P,V,O);r!==H&&(r=H,c(r.object)),q=f(L,P,V,G),q&&g(L,P,V,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(L,O,V,P),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,O,V,P){let G=P.wireframe===!0,q=i[O.id];q===void 0&&(q={},i[O.id]=q);let H=L.isInstancedMesh===!0?L.id:0,te=q[H];te===void 0&&(te={},q[H]=te);let X=te[V.id];X===void 0&&(X={},te[V.id]=X);let j=X[G];return j===void 0&&(j=d(l()),X[G]=j),j}function d(L){let O=[],V=[],P=[];for(let G=0;G<t;G++)O[G]=0,V[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,O,V,P){let G=r.attributes,q=O.attributes,H=0,te=V.getAttributes();for(let X in te)if(te[X].location>=0){let Q=G[X],Ee=q[X];if(Ee===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Ee=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Ee=L.instanceColor)),Q===void 0||Q.attribute!==Ee||Ee&&Q.data!==Ee.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(L,O,V,P){let G={},q=O.attributes,H=0,te=V.getAttributes();for(let X in te)if(te[X].location>=0){let Q=q[X];Q===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));let Ee={};Ee.attribute=Q,Q&&Q.data&&(Ee.data=Q.data),G[X]=Ee,H++}r.attributes=G,r.attributesNum=H,r.index=P}function _(){let L=r.newAttributes;for(let O=0,V=L.length;O<V;O++)L[O]=0}function m(L){p(L,0)}function p(L,O){let V=r.newAttributes,P=r.enabledAttributes,G=r.attributeDivisors;V[L]=1,P[L]===0&&(s.enableVertexAttribArray(L),P[L]=1),G[L]!==O&&(s.vertexAttribDivisor(L,O),G[L]=O)}function v(){let L=r.newAttributes,O=r.enabledAttributes;for(let V=0,P=O.length;V<P;V++)O[V]!==L[V]&&(s.disableVertexAttribArray(V),O[V]=0)}function T(L,O,V,P,G,q,H){H===!0?s.vertexAttribIPointer(L,O,V,G,q):s.vertexAttribPointer(L,O,V,P,G,q)}function M(L,O,V,P){_();let G=P.attributes,q=V.getAttributes(),H=O.defaultAttributeValues;for(let te in q){let X=q[te];if(X.location>=0){let j=G[te];if(j===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){let Q=j.normalized,Ee=j.itemSize,Oe=e.get(j);if(Oe===void 0)continue;let K=Oe.buffer,xe=Oe.type,Se=Oe.bytesPerElement,Ie=xe===s.INT||xe===s.UNSIGNED_INT||j.gpuType===sl;if(j.isInterleavedBufferAttribute){let _e=j.data,ke=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,Rt=j.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Le=0;Le<X.locationSize;Le++)p(X.location+Le,_e.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Le=0;Le<X.locationSize;Le++)m(X.location+Le);s.bindBuffer(s.ARRAY_BUFFER,K);for(let Le=0;Le<X.locationSize;Le++)T(X.location+Le,Ee/X.locationSize,xe,Q,ke*Se,(Rt+Ee/X.locationSize*Le)*Se,Ie)}else{if(j.isInstancedBufferAttribute){for(let _e=0;_e<X.locationSize;_e++)p(X.location+_e,j.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _e=0;_e<X.locationSize;_e++)m(X.location+_e);s.bindBuffer(s.ARRAY_BUFFER,K);for(let _e=0;_e<X.locationSize;_e++)T(X.location+_e,Ee/X.locationSize,xe,Q,Ee*Se,Ee/X.locationSize*_e*Se,Ie)}}else if(H!==void 0){let Q=H[te];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(X.location,Q);break;case 3:s.vertexAttrib3fv(X.location,Q);break;case 4:s.vertexAttrib4fv(X.location,Q);break;default:s.vertexAttrib1fv(X.location,Q)}}}}v()}function w(){I();for(let L in i){let O=i[L];for(let V in O){let P=O[V];for(let G in P){let q=P[G];for(let H in q)h(q[H].object),delete q[H];delete P[G]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;let O=i[L.id];for(let V in O){let P=O[V];for(let G in P){let q=P[G];for(let H in q)h(q[H].object),delete q[H];delete P[G]}}delete i[L.id]}function x(L){for(let O in i){let V=i[O];for(let P in V){let G=V[P];if(G[L.id]===void 0)continue;let q=G[L.id];for(let H in q)h(q[H].object),delete q[H];delete G[L.id]}}}function b(L){for(let O in i){let V=i[O],P=L.isInstancedMesh===!0?L.id:0,G=V[P];if(G!==void 0){for(let q in G){let H=G[q];for(let te in H)h(H[te].object),delete H[te];delete G[q]}delete V[P],Object.keys(V).length===0&&delete i[O]}}}function I(){R(),a=!0,r!==n&&(r=n,c(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:I,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function px(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function mx(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(x){return!(x!==ki&&i.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===Jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==xi&&x!==Ti&&!b&&i.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ae("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:M,maxSamples:w,samples:E}}function gx(s){let e=this,t=null,i=0,n=!1,r=!1,a=new qi,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,T=v*4,M=p.clippingState||null;l.value=M,M=h(g,d,T,f);for(let w=0;w!==T;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=f;T!==_;++T,M+=4)a.copy(u[T]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var ka=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new oa(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Si(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:In});r.uniforms.tEquirect.value=t;let a=new se(n,r),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Et),new pr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},vf=256,xx=3,_x=20,Gf=256,Vf=16,vx=3,yx=new D,Mx=new fe,Mr=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new pr(1,10,null),this._boxMesh=new se(new Si(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:a=256,position:o=yx}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Mx));let m=new pr(i,n,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(vf,_h(e))}_fromTexture(e,t){e.mapping===Es||e.mapping===gr?this._setSize(e.image.length===0?vf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=yf(e,!1,!1),i=Math.log2(e)-xx;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=yf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Es||e.mapping===gr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Mf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Sx(),this._integrationMaterial=bx());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Vf);for(let a=0;a<=i;a++){let o=s.lodToRoughness(a,i);if(a>i-vx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Gf*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Tx());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}};function yf(s,e,t){return new ka(s,{minFilter:Bi,generateMipmaps:e,type:Jt,colorSpace:oi,depthBuffer:t})}function za(s,e,t){return new Mt({name:s,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:t,side:Ft,blending:In,depthTest:!1,depthWrite:!1})}function Sx(){return za("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Gf}u

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
	`)}function bx(){return za("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vf}},`

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
	`)}function Tx(){return za("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_x}
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
	`)}function Mf(){return za("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Sf(){return za("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ex(s){let e=new WeakMap,t=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===tl||f===il)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new ka(g.height);return _.fromEquirectangularTexture(s,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===tl||f===il,_=f===Es||f===gr;if(g||_){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Mr(s)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return g&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new Mr(s)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===tl?d.mapping=Es:f===il&&(d.mapping=gr),d}function l(d){let f=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function wx(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&ds("WebGLRenderer: "+i+" extension not supported."),n}}}function Ax(s,e,t,i){let n={},r=new WeakMap,a=new FinalizationRegistry(g=>delete n[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete n[g.id],a.unregister(g);let _=r.get(g);_&&(e.remove(_),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,_){return n[_.id]!==void 0||(_.addEventListener("dispose",o),n[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(g){let _=g.attributes;for(let m in _)e.update(_[m],s.ARRAY_BUFFER)}function u(g){let _=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let v=_!==null?_.array.length:m.array.length/3-1,T=m.count>=65535?ia:ta,M=new T(Math.ceil(v/3)*6,1),w=M.array;if(_!==null){let x=_.array;p=_.version;for(let b=0,I=0;b<v;b+=3){let R=x[b+0],L=x[b+1],O=x[b+2];w[I++]=R,w[I++]=L,w[I++]=L,w[I++]=O,w[I++]=O,w[I++]=R}}else{p=m.version;for(let x=0,b=0;x<v;x+=3){let I=x+0,R=x+1,L=x+2;w[b++]=I,w[b++]=R,w[b++]=R,w[b++]=L,w[b++]=L,w[b++]=I}}M.version=p;let E=r.get(g);E&&e.remove(E),r.set(g,M)}function d(g){let _=r.get(g);if(_){let m=g.index;m!==null&&_.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in n){let _=n[g].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Rx(s,e,t){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(i,d,r,u*a),t.update(d,i,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Cx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Ix(s,e,t){let i=new WeakMap,n=new ct;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let I=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let M=o.attributes.position.count*T,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*w*4*u),x=new jr(E,M,w,u);x.type=Ti,x.needsUpdate=!0;let b=T*4;for(let R=0;R<u;R++){let L=m[R],O=p[R],V=v[R],P=M*w*4*R;for(let G=0;G<L.count;G++){let q=G*b;f===!0&&(n.fromBufferAttribute(L,G),E[P+q+0]=n.x,E[P+q+1]=n.y,E[P+q+2]=n.z,E[P+q+3]=0),g===!0&&(n.fromBufferAttribute(O,G),E[P+q+4]=n.x,E[P+q+5]=n.y,E[P+q+6]=n.z,E[P+q+7]=0),_===!0&&(n.fromBufferAttribute(V,G),E[P+q+8]=n.x,E[P+q+9]=n.y,E[P+q+10]=n.z,E[P+q+11]=V.itemSize===4?n.w:1)}}d={count:u,texture:x,size:new ye(M,w)},i.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Px(s,e,t,i,n){let r=new WeakMap;function a(c){let h=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Lx={[ba]:"LINEAR_TONE_MAPPING",[Ta]:"REINHARD_TONE_MAPPING",[Ea]:"CINEON_TONE_MAPPING",[Ts]:"ACES_FILMIC_TONE_MAPPING",[Aa]:"AGX_TONE_MAPPING",[Ra]:"NEUTRAL_TONE_MAPPING",[wa]:"CUSTOM_TONE_MAPPING"};function Nx(s,e,t,i,n,r){let a=new Ot(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new xt;h.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let u=new ur({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new se(h,u),f=new Rn(-1,1,1,-1,0,1),g=null,_=null,m=!1,p,v=null,T=[],M=!1;this.setSize=function(w,E){a.setSize(w,E),o!==null&&o.setSize(w,E),l!==null&&l.setSize(w,E);for(let x=0;x<T.length;x++){let b=T[x];b.setSize&&b.setSize(w,E)}},this.setEffects=function(w){T=w,M=T.length>0&&T[0].isRenderPass===!0;let E=a.width,x=a.height;T.length>0&&o===null&&(o=new Ot(E,x,{type:Jt,depthBuffer:!1,stencilBuffer:!1}),l=new Ot(E,x,{type:Jt,depthBuffer:!1,stencilBuffer:!1}));let b=n===!0&&T.some(I=>I.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new bn(E,x),r===!0&&(c.format=Pn,c.type=As)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let I=0;I<T.length;I++){let R=T[I];R.setSize&&R.setSize(E,x),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,E){if(m||w.toneMapping===rn&&T.length===0)return!1;if(v=E,E!==null){let x=E.width,b=E.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return M===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=rn,!0},this.hasRenderPass=function(){return M},this.end=function(w,E){w.toneMapping=p,m=!0;let x=a,b=o;for(let I=0;I<T.length;I++){let R=T[I];R.enabled!==!1&&(R.render(w,b,x,E),R.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(g!==w.outputColorSpace||_!==w.toneMapping){g=w.outputColorSpace,_=w.toneMapping,u.defines={},Ge.getTransfer(g)===st&&(u.defines.SRGB_TRANSFER="");let I=Lx[_];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(v),w.render(d,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Wf=new Ut,Xf=new bn(1,1),qf=new la(1),Yf=new jr,$f=new zo,Kf=new oa,bf=[],Tf=[],Ef=new Float32Array(16),wf=new Float32Array(9),Af=new Float32Array(4);function Sr(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=bf[n];if(r===void 0&&(r=new Float32Array(n),bf[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function kt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function ql(s,e){let t=Tf[e];t===void 0&&(t=new Int32Array(e),Tf[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Dx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),kt(t,e)}}function Ox(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),kt(t,e)}}function Fx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),kt(t,e)}}function Bx(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;Af.set(i),s.uniformMatrix2fv(this.addr,!1,Af),kt(t,i)}}function kx(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;wf.set(i),s.uniformMatrix3fv(this.addr,!1,wf),kt(t,i)}}function zx(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;Ef.set(i),s.uniformMatrix4fv(this.addr,!1,Ef),kt(t,i)}}function Hx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Gx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),kt(t,e)}}function Vx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),kt(t,e)}}function Wx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),kt(t,e)}}function Xx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),kt(t,e)}}function Yx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),kt(t,e)}}function $x(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),kt(t,e)}}function Yl(s){return s.version===0&&(s.compareFunction=ph,s.needsUpdate=!0),s}function Kx(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=Yl(Xf):r=Wf,t.setTexture2D(e||r,n)}function Zx(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||$f,n)}function Jx(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Yl(qf):r=Kf,t.setTextureCube(e||r,n)}function jx(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Yf,n)}function Qx(s){switch(s){case 5126:return Dx;case 35664:return Ux;case 35665:return Ox;case 35666:return Fx;case 35674:return Bx;case 35675:return kx;case 35676:return zx;case 5124:case 35670:return Hx;case 35667:case 35671:return Gx;case 35668:case 35672:return Vx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return qx;case 36295:return Yx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return jx}}function e_(s,e){s.uniform1fv(this.addr,e)}function t_(s,e){let t=Sr(e,this.size,2);s.uniform2fv(this.addr,t)}function i_(s,e){let t=Sr(e,this.size,3);s.uniform3fv(this.addr,t)}function n_(s,e){let t=Sr(e,this.size,4);s.uniform4fv(this.addr,t)}function s_(s,e){let t=Sr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function r_(s,e){let t=Sr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function a_(s,e){let t=Sr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function o_(s,e){s.uniform1iv(this.addr,e)}function l_(s,e){s.uniform2iv(this.addr,e)}function c_(s,e){s.uniform3iv(this.addr,e)}function h_(s,e){s.uniform4iv(this.addr,e)}function u_(s,e){s.uniform1uiv(this.addr,e)}function d_(s,e){s.uniform2uiv(this.addr,e)}function f_(s,e){s.uniform3uiv(this.addr,e)}function p_(s,e){s.uniform4uiv(this.addr,e)}function m_(s,e,t){let i=this.cache,n=e.length,r=ql(t,n);Bt(i,r)||(s.uniform1iv(this.addr,r),kt(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Yl(Xf):a=Wf;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function g_(s,e,t){let i=this.cache,n=e.length,r=ql(t,n);Bt(i,r)||(s.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||$f,r[a])}function x_(s,e,t){let i=this.cache,n=e.length,r=ql(t,n);Bt(i,r)||(s.uniform1iv(this.addr,r),kt(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Yl(qf):a=Kf;for(let o=0;o!==n;++o)t.setTextureCube(e[o]||a,r[o])}function __(s,e,t){let i=this.cache,n=e.length,r=ql(t,n);Bt(i,r)||(s.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Yf,r[a])}function v_(s){switch(s){case 5126:return e_;case 35664:return t_;case 35665:return i_;case 35666:return n_;case 35674:return s_;case 35675:return r_;case 35676:return a_;case 5124:case 35670:return o_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return d_;case 36295:return f_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return __}}var Ah=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qx(t.type)}},Rh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v_(t.type)}},Ch=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},Eh=/(\w+)(\])?(\[|\.)?/g;function Rf(s,e){s.seq.push(e),s.map[e.id]=e}function y_(s,e,t){let i=s.name,n=i.length;for(Eh.lastIndex=0;;){let r=Eh.exec(i),a=Eh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Rf(t,c===void 0?new Ah(o,s,e):new Rh(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Ch(o),Rf(t,u)),t=u}}}var yr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);y_(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Cf(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var M_=37297,S_=0;function b_(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var If=new De;function T_(s){Ge._getMatrix(If,Ge.workingColorSpace,s);let e=`mat3( ${If.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(s)){case Zr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Pf(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+b_(s.getShaderSource(e),o)}else return r}function E_(s,e){let t=T_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var w_={[ba]:"Linear",[Ta]:"Reinhard",[Ea]:"Cineon",[Ts]:"ACESFilmic",[Aa]:"AgX",[Ra]:"Neutral",[wa]:"Custom"};function A_(s,e){let t=w_[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wl=new D;function R_(){Ge.getLuminanceCoefficients(Wl);let s=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function I_(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function P_(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ba(s){return s!==""}function Lf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Nf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var L_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(s){return s.replace(L_,N_)}function N_(s,e){let t=Xe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ih(t)}var D_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(s){return s.replace(D_,U_)}function U_(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Uf(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var O_={[Sa]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function F_(s){return O_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var B_={[gr]:"ENVMAP_MODE_REFRACTION"};function k_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":B_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var z_={[el]:"ENVMAP_BLENDING_MULTIPLY",[jd]:"ENVMAP_BLENDING_MIX",[Qd]:"ENVMAP_BLENDING_ADD"};function H_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":z_[s.combine]||"ENVMAP_BLENDING_NONE"}function G_(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=F_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=k_(t),u=H_(t),d=C_(t),f=I_(r),g=n.createProgram(),_,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ba).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ba).join(`
`),m.length>0&&(m+=`
`)):(_=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),m=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rn?"#define TONE_MAPPING":"",t.toneMapping!==rn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==rn?A_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,E_("linearToOutputTexel",t.outputColorSpace),R_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),a=Ih(a),a=Lf(a,t),a=Nf(a,t),o=Ih(o),o=Lf(o,t),o=Nf(o,t),a=Df(a),o=Df(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=p+_+a,T=p+m+o,M=Cf(n,n.VERTEX_SHADER,v),w=Cf(n,n.FRAGMENT_SHADER,T);n.attachShader(g,M),n.attachShader(g,w),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function E(R){if(s.debug.checkShaderErrors){let L=n.getProgramInfoLog(g)||"",O=n.getShaderInfoLog(M)||"",V=n.getShaderInfoLog(w)||"",P=L.trim(),G=O.trim(),q=V.trim(),H=!0,te=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,M,w);else{let X=Pf(n,M,"vertex"),j=Pf(n,w,"fragment");Ne("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+X+`
`+j)}else P!==""?Ae("WebGLProgram: Program Info Log:",P):(G===""||q==="")&&(te=!1);te&&(R.diagnostics={runnable:H,programLog:P,vertexShader:{log:G,prefix:_},fragmentShader:{log:q,prefix:m}})}n.deleteShader(M),n.deleteShader(w),x=new yr(n,g),b=P_(n,g)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=n.getProgramParameter(g,M_)),I},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=w,this}var V_=0,Ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Lh(e),t.set(e,i)),i}},Lh=class{constructor(e){this.id=V_++,this.code=e,this.usedTimes=0}};function W_(s){return s===jn||s===Na||s===Da}function X_(s,e,t,i,n,r){let a=new Qr,o=new Ph,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,I,R,L,O){let V=R.fog,P=L.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||G,q),te=d[x.type],X=i.precision;x.precision!==null&&(X=i.getMaxPrecision(x.precision),X!==x.precision&&Ae("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));let j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Q=j!==void 0?j.length:0,Ee=0;P.morphAttributes.position!==void 0&&(Ee=1),P.morphAttributes.normal!==void 0&&(Ee=2),P.morphAttributes.color!==void 0&&(Ee=3);let Oe,K,xe,Se;if(te){let me=ln[te];Oe=me.vertexShader,K=me.fragmentShader}else{Oe=x.vertexShader,K=x.fragmentShader;let me=o.getVertexShaderStage(x),lt=o.getFragmentShaderStage(x);o.update(x,me,lt),xe=me.id,Se=lt.id}let Ie=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),ke=L.isInstancedMesh===!0,Rt=L.isBatchedMesh===!0,Le=!!x.map,ot=!!x.matcap,ht=!!H,Ke=ht&&H.isPMREMTexture===!0,qt=!!x.aoMap,Lt=!!x.lightMap,fi=!!x.bumpMap&&x.wireframe===!1,St=!!x.normalMap,Ki=!!x.displacementMap,Ht=!!x.emissiveMap,wi=!!x.metalnessMap,Ai=!!x.roughnessMap,Ri=x.anisotropy>0,U=x.clearcoat>0,Ci=x.diffuseRoughness>0,_t=x.dispersion>0,vt=x.retroreflectivity>0,pe=x.iridescence>0,Nt=x.sheen>0,Pe=x.transmission>0,Ue=Ri&&!!x.anisotropyMap,A=U&&!!x.clearcoatMap,y=U&&!!x.clearcoatNormalMap,B=U&&!!x.clearcoatRoughnessMap,ee=Ci&&!!x.diffuseRoughnessMap,J=pe&&!!x.iridescenceMap,ae=pe&&!!x.iridescenceThicknessMap,ue=Nt&&!!x.sheenColorMap,Y=Nt&&!!x.sheenRoughnessMap,$=!!x.specularMap,le=!!x.specularColorMap,C=!!x.specularIntensityMap,Z=Pe&&!!x.transmissionMap,W=Pe&&!!x.thicknessMap,ce=!!x.gradientMap,ne=!!x.alphaMap,oe=x.alphaTest>0,Re=!!x.alphaHash,We=!!x.extensions,ie=rn;x.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(ie=s.toneMapping);let Ce=Ke?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,He={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:Oe,fragmentShader:K,defines:x.defines,customVertexShaderID:xe,customFragmentShaderID:Se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:Rt,batchingColor:Rt&&L._colorsTexture!==null,instancing:ke,instancingColor:ke&&L.instanceColor!==null,instancingMorph:ke&&L.morphTexture!==null,outputColorSpace:Ie===null?s.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:ot,envMap:ht,envMapMode:ht&&H.mapping,envMapPMREM:Ke,envMapMaxLod:Ke?Ce.length-1:null,envMapSize:Ke?Ce[0].width:null,aoMap:qt,lightMap:Lt,bumpMap:fi,normalMap:St,displacementMap:Ki,emissiveMap:Ht,normalMapObjectSpace:St&&x.normalMapType===sf,normalMapTangentSpace:St&&x.normalMapType===Oa,packedNormalMap:St&&x.normalMapType===Oa&&W_(x.normalMap.format),metalnessMap:wi,roughnessMap:Ai,anisotropy:Ri,anisotropyMap:Ue,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:y,clearcoatRoughnessMap:B,diffuseRoughness:Ci,diffuseRoughnessMap:ee,dispersion:_t,retroreflection:vt,iridescence:pe,iridescenceMap:J,iridescenceThicknessMap:ae,sheen:Nt,sheenColorMap:ue,sheenRoughnessMap:Y,specularMap:$,specularColorMap:le,specularIntensityMap:C,transmission:Pe,transmissionMap:Z,thicknessMap:W,gradientMap:ce,opaque:x.transparent===!1&&x.blending===sn&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:oe,alphaHash:Re,combine:x.combine,mapUv:Le&&f(x.map.channel),aoMapUv:qt&&f(x.aoMap.channel),lightMapUv:Lt&&f(x.lightMap.channel),bumpMapUv:fi&&f(x.bumpMap.channel),normalMapUv:St&&f(x.normalMap.channel),displacementMapUv:Ki&&f(x.displacementMap.channel),emissiveMapUv:Ht&&f(x.emissiveMap.channel),metalnessMapUv:wi&&f(x.metalnessMap.channel),roughnessMapUv:Ai&&f(x.roughnessMap.channel),anisotropyMapUv:Ue&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:J&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(x.sheenRoughnessMap.channel),specularMapUv:$&&f(x.specularMap.channel),specularColorMapUv:le&&f(x.specularColorMap.channel),specularIntensityMapUv:C&&f(x.specularIntensityMap.channel),transmissionMapUv:Z&&f(x.transmissionMap.channel),thicknessMapUv:W&&f(x.thicknessMap.channel),alphaMapUv:ne&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(St||Ri),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(Le||ne),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&St===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Ee,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&Ge.getTransfer(x.map.colorSpace)===st,decodeVideoTextureEmissive:Ht&&x.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(x.emissiveMap.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gi,flipSided:x.side===Ft,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:We&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&x.extensions.multiDraw===!0||Rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function _(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)b.push(I),b.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(b,x),p(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function p(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let b=d[x.type],I;if(b){let R=ln[b];I=Dn.clone(R.uniforms)}else I=x.uniforms;return I}function T(x,b){let I=h.get(b);return I!==void 0?++I.usedTimes:(I=new G_(s,b,x,n),c.push(I),h.set(b,I)),I}function M(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:T,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:E}}function q_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function Y_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Of(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ff(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,_,m,p){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},s[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function l(d,f,g,_,m,p,v){v.reversedDepth===!0&&(m=-m);let T=o(d,f,g,_,m,p);g.transmission>0?i.push(T):g.transparent===!0?n.push(T):t.push(T)}function c(d,f,g,_,m,p){let v=o(d,f,g,_,m,p);g.transmission>0?i.unshift(v):g.transparent===!0?n.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||Y_),i.length>1&&i.sort(f||Of),n.length>1&&n.sort(f||Of)}function u(){for(let d=e,f=s.length;d<f;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function $_(){let s=new WeakMap;function e(i,n){let r=s.get(i),a;return r===void 0?(a=new Ff,s.set(i,[a])):n>=r.length?(a=new Ff,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function K_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new fe};break;case"SpotLight":t={position:new D,direction:new D,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Z_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var J_=0;function j_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Q_(s){let e=new K_,t=Z_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let n=new D,r=new Be,a=new Be;function o(c){let h=0,u=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,T=0,M=0,w=0,E=0,x=0,b=0,I=0,R=0;c.sort(j_);for(let O=0,V=c.length;O<V;O++){let P=c[O],G=P.color,q=P.intensity,H=P.distance,te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===jn?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=G.r*q,u+=G.g*q,d+=G.b*q;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],q);R++}else if(P.isSunLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,Q=t.get(P);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[g]=Q,i.sunShadowMap[g]=te;let Ee=j.getViewportCount();for(let Oe=0;Oe<Ee;Oe++)i.sunShadowMatrix[_+Oe]=j.getMatrix(Oe),i.sunShadowCascade[_+Oe]=j._cascadeData[Oe];_+=Ee,g++}i.sun[f]=X,f++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,Q=t.get(P);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=P.shadow.matrix,w++}i.directional[m]=X,m++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(G).multiplyScalar(q),X.distance=H,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[v]=X;let j=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,j.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[v]=j.matrix,P.castShadow){let Q=t.get(P);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=te,x++}v++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(G).multiplyScalar(q),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[T]=X,T++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let j=P.shadow,Q=t.get(P);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,Q.shadowCameraNear=j.camera.near,Q.shadowCameraFar=j.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=te,i.pointShadowMatrix[p]=P.shadow.matrix,E++}i.point[p]=X,p++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(q),X.groundColor.copy(P.groundColor).multiplyScalar(q),i.hemi[M]=X,M++}}T>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==T||L.hemiLength!==M||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==E||L.numSpotShadows!==x||L.numSpotMaps!==b||L.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=T,i.point.length=p,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-I,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=v,L.rectAreaLength=T,L.hemiLength=M,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=E,L.numSpotShadows=x,L.numSpotMaps=b,L.numLightProbes=R,i.version=J_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let M=c[v];if(M.isSunLight){let w=i.sun[u];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),u++}else if(M.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),d++}else if(M.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let w=i.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Bf(s){let e=new Q_(s),t=[],i=[],n=[];function r(u){h.camera=u,t.length=0,i.length=0,n.length=0}function a(u){u.isLightProbeGrid?n.push(u):t.push(u)}function o(u){i.push(u)}function l(){e.setup(t),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ev(s){let e=new WeakMap;function t(n,r=0){let a=e.get(n),o;return a===void 0?(o=new Bf(s),e.set(n,[o])):r>=a.length?(o=new Bf(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iv=`uniform sampler2D shadow_pass;
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
}`,nv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],sv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],kf=new Be,Fa=new D,wh=new D;function rv(s,e,t){let i=new qn,n=new ye,r=new ye,a=new ct,o=new Wo,l=new Xo,c={},h=t.maxTextureSize,u={[Fi]:Ft,[Ft]:Fi,[gi]:gi},d=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:tv,fragmentShader:iv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new se(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sa;let p=this.type;this.render=function(E,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Nd&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sa);let I=s.getRenderTarget(),R=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),O=s.state;O.setBlending(In),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=p!==this.type;V&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(G=>G.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,G=E.length;P<G;P++){let q=E[P],H=q.shadow;if(H===void 0){Ae("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);let te=H.getFrameExtents();n.multiply(te),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/te.x),n.x=r.x*te.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/te.y),n.y=r.y*te.y,H.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===mr){if(q.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ot(n.x,n.y,{format:jn,type:Jt,minFilter:Et,magFilter:Et,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new bn(n.x,n.y,Ti),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=Mn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=At,H.map.depthTexture.magFilter=At}else q.isPointLight?(H.map=new ka(n.x),H.map.depthTexture=new la(n.x,$i)):(H.map=new Ot(n.x,n.y),H.map.depthTexture=new bn(n.x,n.y,$i)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=Mn,this.type===Sa?(H.map.depthTexture.compareFunction=X?fh:dh,H.map.depthTexture.minFilter=Et,H.map.depthTexture.magFilter=Et):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=At,H.map.depthTexture.magFilter=At);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==n.x||H.map.height!==n.y)&&H.map.setSize(n.x,n.y);let j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();q.isPointLight!==!0&&H.updateMatrices(q,b);let Q=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:b.layers;for(let Ee=0;Ee<j;Ee++){let Oe=H.getCamera(Ee);if(q.isPointLight){let K=H.camera,xe=H.matrix,Se=q.distance||K.far;Se!==K.far&&(K.far=Se,K.updateProjectionMatrix()),Fa.setFromMatrixPosition(q.matrixWorld),K.position.copy(Fa),wh.copy(K.position),wh.add(nv[Ee]),K.up.copy(sv[Ee]),K.lookAt(wh),K.updateMatrixWorld(),xe.makeTranslation(-Fa.x,-Fa.y,-Fa.z),kf.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(kf,K.coordinateSystem,K.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,Ee),s.clear();else{Ee===0&&(s.setRenderTarget(H.map),s.clear());let K=H.getViewport(Ee);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),O.viewport(a)}i=H.getFrustum(Ee),M(x,b,Oe,q,Q,this.type)}H.isPointLightShadow!==!0&&this.type===mr&&v(H,b),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(I,R,L)};function v(E,x){let b=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ot(n.x,n.y,{format:jn,type:Jt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,b,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,b,f,_,null)}function T(E,x,b,I){let R=null,L=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)R=L;else if(R=b.isPointLight===!0?l:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=R.uuid,V=x.uuid,P=c[O];P===void 0&&(P={},c[O]=P);let G=P[V];G===void 0&&(G=R.clone(),P[V]=G,x.addEventListener("dispose",w)),R=G}if(R.visible=x.visible,R.wireframe=x.wireframe,I===mr?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:u[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=s.properties.get(R);O.light=b}return R}function M(E,x,b,I,R,L){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===mr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let P=e.update(E),G=E.material;if(Array.isArray(G)){let q=P.groups;for(let H=0,te=q.length;H<te;H++){let X=q[H],j=G[X.materialIndex];if(j&&j.visible){let Q=T(E,j,I,L);E.onBeforeShadow(s,E,x,b,P,Q,X),s.renderBufferDirect(b,null,P,Q,E,X),E.onAfterShadow(s,E,x,b,P,Q,X)}}}else if(G.visible){let q=T(E,G,I,L);E.onBeforeShadow(s,E,x,b,P,q,null),s.renderBufferDirect(b,null,P,q,E,null),E.onAfterShadow(s,E,x,b,P,q,null)}}let V=E.children;for(let P=0,G=V.length;P<G;P++)M(V[P],x,b,I,R,L)}function w(E){E.target.removeEventListener("dispose",w);for(let b in c){let I=c[b],R=E.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function av(s,e){function t(){let C=!1,Z=new ct,W=null,ce=new ct(0,0,0,0);return{setMask:function(ne){W!==ne&&!C&&(s.colorMask(ne,ne,ne,ne),W=ne)},setLocked:function(ne){C=ne},setClear:function(ne,oe,Re,We,ie){ie===!0&&(ne*=We,oe*=We,Re*=We),Z.set(ne,oe,Re,We),ce.equals(Z)===!1&&(s.clearColor(ne,oe,Re,We),ce.copy(Z))},reset:function(){C=!1,W=null,ce.set(-1,0,0,0)}}}function i(){let C=!1,Z=!1,W=null,ce=null,ne=null;return{setReversed:function(oe){if(Z!==oe){let Re=e.get("EXT_clip_control");oe?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Z=oe;let We=ne;ne=null,this.setClear(We)}},getReversed:function(){return Z},setTest:function(oe){oe?_e(s.DEPTH_TEST):ke(s.DEPTH_TEST)},setMask:function(oe){W!==oe&&!C&&(s.depthMask(oe),W=oe)},setFunc:function(oe){if(Z&&(oe=pf[oe]),ce!==oe){switch(oe){case Po:s.depthFunc(s.NEVER);break;case Lo:s.depthFunc(s.ALWAYS);break;case No:s.depthFunc(s.LESS);break;case er:s.depthFunc(s.LEQUAL);break;case Do:s.depthFunc(s.EQUAL);break;case Uo:s.depthFunc(s.GEQUAL);break;case Oo:s.depthFunc(s.GREATER);break;case Fo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=oe}},setLocked:function(oe){C=oe},setClear:function(oe){ne!==oe&&(ne=oe,Z&&(oe=1-oe),s.clearDepth(oe))},reset:function(){C=!1,W=null,ce=null,ne=null,Z=!1}}}function n(){let C=!1,Z=null,W=null,ce=null,ne=null,oe=null,Re=null,We=null,ie=null;return{setTest:function(Ce){C||(Ce?_e(s.STENCIL_TEST):ke(s.STENCIL_TEST))},setMask:function(Ce){Z!==Ce&&!C&&(s.stencilMask(Ce),Z=Ce)},setFunc:function(Ce,He,me){(W!==Ce||ce!==He||ne!==me)&&(s.stencilFunc(Ce,He,me),W=Ce,ce=He,ne=me)},setOp:function(Ce,He,me){(oe!==Ce||Re!==He||We!==me)&&(s.stencilOp(Ce,He,me),oe=Ce,Re=He,We=me)},setLocked:function(Ce){C=Ce},setClear:function(Ce){ie!==Ce&&(s.clearStencil(Ce),ie=Ce)},reset:function(){C=!1,Z=null,W=null,ce=null,ne=null,oe=null,Re=null,We=null,ie=null}}}let r=new t,a=new i,o=new n,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,v=null,T=null,M=null,w=null,E=null,x=null,b=new fe(0,0,0),I=0,R=!1,L=null,O=null,V=null,P=null,G=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,te=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=te>=2);let j=null,Q={},Ee=s.getParameter(s.SCISSOR_BOX),Oe=s.getParameter(s.VIEWPORT),K=new ct().fromArray(Ee),xe=new ct().fromArray(Oe);function Se(C,Z,W,ce){let ne=new Uint8Array(4),oe=s.createTexture();s.bindTexture(C,oe),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<W;Re++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(Z,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,ne):s.texImage2D(Z+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ne);return oe}let Ie={};Ie[s.TEXTURE_2D]=Se(s.TEXTURE_2D,s.TEXTURE_2D,1),Ie[s.TEXTURE_CUBE_MAP]=Se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[s.TEXTURE_2D_ARRAY]=Se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ie[s.TEXTURE_3D]=Se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(s.DEPTH_TEST),a.setFunc(er),fi(!1),St(Qc),_e(s.CULL_FACE),qt(In);function _e(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function ke(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function Rt(C,Z){return d[C]!==Z?(s.bindFramebuffer(C,Z),d[C]=Z,C===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Z),C===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Z),!0):!1}function Le(C,Z){let W=g,ce=!1;if(C){W=f.get(Z),W===void 0&&(W=[],f.set(Z,W));let ne=C.textures;if(W.length!==ne.length||W[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,Re=ne.length;oe<Re;oe++)W[oe]=s.COLOR_ATTACHMENT0+oe;W.length=ne.length,ce=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,ce=!0);ce&&s.drawBuffers(W)}function ot(C){return _!==C?(s.useProgram(C),_=C,!0):!1}let ht={[bs]:s.FUNC_ADD,[Ud]:s.FUNC_SUBTRACT,[Od]:s.FUNC_REVERSE_SUBTRACT};ht[Fd]=s.MIN,ht[Bd]=s.MAX;let Ke={[kd]:s.ZERO,[zd]:s.ONE,[Hd]:s.SRC_COLOR,[ih]:s.SRC_ALPHA,[Yd]:s.SRC_ALPHA_SATURATE,[Xd]:s.DST_COLOR,[Vd]:s.DST_ALPHA,[Gd]:s.ONE_MINUS_SRC_COLOR,[nh]:s.ONE_MINUS_SRC_ALPHA,[qd]:s.ONE_MINUS_DST_COLOR,[Wd]:s.ONE_MINUS_DST_ALPHA,[$d]:s.CONSTANT_COLOR,[Kd]:s.ONE_MINUS_CONSTANT_COLOR,[Zd]:s.CONSTANT_ALPHA,[Jd]:s.ONE_MINUS_CONSTANT_ALPHA};function qt(C,Z,W,ce,ne,oe,Re,We,ie,Ce){if(C===In){m===!0&&(ke(s.BLEND),m=!1);return}if(m===!1&&(_e(s.BLEND),m=!0),C!==Dd){if(C!==p||Ce!==R){if((v!==bs||w!==bs)&&(s.blendEquation(s.FUNC_ADD),v=bs,w=bs),Ce)switch(C){case sn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ft:s.blendFunc(s.ONE,s.ONE);break;case eh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case th:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ne("WebGLState: Invalid blending: ",C);break}else switch(C){case sn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ft:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case eh:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case th:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",C);break}T=null,M=null,E=null,x=null,b.set(0,0,0),I=0,p=C,R=Ce}return}ne=ne||Z,oe=oe||W,Re=Re||ce,(Z!==v||ne!==w)&&(s.blendEquationSeparate(ht[Z],ht[ne]),v=Z,w=ne),(W!==T||ce!==M||oe!==E||Re!==x)&&(s.blendFuncSeparate(Ke[W],Ke[ce],Ke[oe],Ke[Re]),T=W,M=ce,E=oe,x=Re),(We.equals(b)===!1||ie!==I)&&(s.blendColor(We.r,We.g,We.b,ie),b.copy(We),I=ie),p=C,R=!1}function Lt(C,Z){C.side===gi?ke(s.CULL_FACE):_e(s.CULL_FACE);let W=C.side===Ft;Z&&(W=!W),fi(W),C.blending===sn&&C.transparent===!1?qt(In):qt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let ce=C.stencilWrite;o.setTest(ce),ce&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ht(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function fi(C){L!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),L=C)}function St(C){C!==Pd?(_e(s.CULL_FACE),C!==O&&(C===Qc?s.cullFace(s.BACK):C===Ld?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ke(s.CULL_FACE),O=C}function Ki(C){C!==V&&(H&&s.lineWidth(C),V=C)}function Ht(C,Z,W){C?(_e(s.POLYGON_OFFSET_FILL),(P!==Z||G!==W)&&(P=Z,G=W,a.getReversed()&&(Z=-Z,W=-W),s.polygonOffset(Z,W))):ke(s.POLYGON_OFFSET_FILL)}function wi(C){C?_e(s.SCISSOR_TEST):ke(s.SCISSOR_TEST)}function Ai(C){C===void 0&&(C=s.TEXTURE0+q-1),j!==C&&(s.activeTexture(C),j=C)}function Ri(C,Z,W){W===void 0&&(j===null?W=s.TEXTURE0+q-1:W=j);let ce=Q[W];ce===void 0&&(ce={type:void 0,texture:void 0},Q[W]=ce),(ce.type!==C||ce.texture!==Z)&&(j!==W&&(s.activeTexture(W),j=W),s.bindTexture(C,Z||Ie[C]),ce.type=C,ce.texture=Z)}function U(){let C=Q[j];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Ci(){try{s.compressedTexImage2D(...arguments)}catch(C){Ne("WebGLState:",C)}}function _t(){try{s.compressedTexImage3D(...arguments)}catch(C){Ne("WebGLState:",C)}}function vt(){try{s.texSubImage2D(...arguments)}catch(C){Ne("WebGLState:",C)}}function pe(){try{s.texSubImage3D(...arguments)}catch(C){Ne("WebGLState:",C)}}function Nt(){try{s.compressedTexSubImage2D(...arguments)}catch(C){Ne("WebGLState:",C)}}function Pe(){try{s.compressedTexSubImage3D(...arguments)}catch(C){Ne("WebGLState:",C)}}function Ue(){try{s.texStorage2D(...arguments)}catch(C){Ne("WebGLState:",C)}}function A(){try{s.texStorage3D(...arguments)}catch(C){Ne("WebGLState:",C)}}function y(){try{s.texImage2D(...arguments)}catch(C){Ne("WebGLState:",C)}}function B(){try{s.texImage3D(...arguments)}catch(C){Ne("WebGLState:",C)}}function ee(C){return u[C]!==void 0?u[C]:s.getParameter(C)}function J(C,Z){u[C]!==Z&&(s.pixelStorei(C,Z),u[C]=Z)}function ae(C){K.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),K.copy(C))}function ue(C){xe.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),xe.copy(C))}function Y(C,Z){let W=c.get(Z);W===void 0&&(W=new WeakMap,c.set(Z,W));let ce=W.get(C);ce===void 0&&(ce=s.getUniformBlockIndex(Z,C.name),s.uniformBlockBinding(Z,ce,ce),W.set(C,ce))}function $(C,Z,W){let ne=c.get(Z).get(C);l[ne]!==W&&(s.bindBufferBase(s.UNIFORM_BUFFER,ne,W),l[ne]=W)}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,Q={},d={},l={},f=new WeakMap,g=[],_=null,m=!1,p=null,v=null,T=null,M=null,w=null,E=null,x=null,b=new fe(0,0,0),I=0,R=!1,L=null,O=null,V=null,P=null,G=null,K.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:ke,bindFramebuffer:Rt,drawBuffers:Le,useProgram:ot,setBlending:qt,setMaterial:Lt,setFlipSided:fi,setCullFace:St,setLineWidth:Ki,setPolygonOffset:Ht,setScissorTest:wi,activeTexture:Ai,bindTexture:Ri,unbindTexture:U,compressedTexImage2D:Ci,compressedTexImage3D:_t,texImage2D:y,texImage3D:B,pixelStorei:J,getParameter:ee,updateUBOMapping:Y,uniformBlockBinding:$,texStorage2D:Ue,texStorage3D:A,texSubImage2D:vt,texSubImage3D:pe,compressedTexSubImage2D:Nt,compressedTexSubImage3D:Pe,scissor:ae,viewport:ue,reset:le}}function ov(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,_=new FinalizationRegistry(A=>g.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,y){return m?new OffscreenCanvas(A,y):nr("canvas")}function v(A,y,B){let ee=1,J=Ue(A);if((J.width>B||J.height>B)&&(ee=B/Math.max(J.width,J.height)),ee<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ae=Math.floor(ee*J.width),ue=Math.floor(ee*J.height);d===void 0&&(d=p(ae,ue));let Y=y?p(ae,ue):d;return Y.width=ae,Y.height=ue,Y.getContext("2d").drawImage(A,0,0,ae,ue),Ae("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ae+"x"+ue+")."),Y}else return"data"in A&&Ae("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function T(A){return A.generateMipmaps}function M(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(A,y,B,ee,J,ae=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue;ee&&(ue=e.get("EXT_texture_norm16"),ue||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===s.RED&&(B===s.FLOAT&&(Y=s.R32F),B===s.HALF_FLOAT&&(Y=s.R16F),B===s.UNSIGNED_BYTE&&(Y=s.R8),B===s.UNSIGNED_SHORT&&ue&&(Y=ue.R16_EXT),B===s.SHORT&&ue&&(Y=ue.R16_SNORM_EXT)),y===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.R8UI),B===s.UNSIGNED_SHORT&&(Y=s.R16UI),B===s.UNSIGNED_INT&&(Y=s.R32UI),B===s.BYTE&&(Y=s.R8I),B===s.SHORT&&(Y=s.R16I),B===s.INT&&(Y=s.R32I)),y===s.RG&&(B===s.FLOAT&&(Y=s.RG32F),B===s.HALF_FLOAT&&(Y=s.RG16F),B===s.UNSIGNED_BYTE&&(Y=s.RG8),B===s.UNSIGNED_SHORT&&ue&&(Y=ue.RG16_EXT),B===s.SHORT&&ue&&(Y=ue.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RG8UI),B===s.UNSIGNED_SHORT&&(Y=s.RG16UI),B===s.UNSIGNED_INT&&(Y=s.RG32UI),B===s.BYTE&&(Y=s.RG8I),B===s.SHORT&&(Y=s.RG16I),B===s.INT&&(Y=s.RG32I)),y===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),B===s.UNSIGNED_INT&&(Y=s.RGB32UI),B===s.BYTE&&(Y=s.RGB8I),B===s.SHORT&&(Y=s.RGB16I),B===s.INT&&(Y=s.RGB32I)),y===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),B===s.UNSIGNED_INT&&(Y=s.RGBA32UI),B===s.BYTE&&(Y=s.RGBA8I),B===s.SHORT&&(Y=s.RGBA16I),B===s.INT&&(Y=s.RGBA32I)),y===s.RGB&&(B===s.UNSIGNED_SHORT&&ue&&(Y=ue.RGB16_EXT),B===s.SHORT&&ue&&(Y=ue.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),y===s.RGBA){let $=ae?Zr:Ge.getTransfer(J);B===s.FLOAT&&(Y=s.RGBA32F),B===s.HALF_FLOAT&&(Y=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Y=$===st?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&ue&&(Y=ue.RGBA16_EXT),B===s.SHORT&&ue&&(Y=ue.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(A,y){let B;return A?y===null||y===$i||y===As?B=s.DEPTH24_STENCIL8:y===Ti?B=s.DEPTH32F_STENCIL8:y===_r&&(B=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===$i||y===As?B=s.DEPTH_COMPONENT24:y===Ti?B=s.DEPTH_COMPONENT32F:y===_r&&(B=s.DEPTH_COMPONENT16),B}function b(A,y){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==At&&A.minFilter!==Et?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function I(A){let y=new WeakRef(A);i.get(A).__ref=y,g.add(y),_.register(A,y,y)}function R(A){let y=i.get(A).__ref;y!==void 0&&(g.delete(y),_.unregister(y))}function L(A){V(A.target)}function O(A){P(A.target)}function V(A){A.removeEventListener("dispose",L),R(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function P(A){A.removeEventListener("dispose",O),R(A),te(A)}function G(){for(let A of g){let y=A.deref();y!==void 0&&(y.isRenderTarget===!0?P(y):V(y))}g.clear(),u.clear()}function q(A){let y=i.get(A);if(y.__webglInit===void 0)return;let B=A.source,ee=f.get(B);if(ee){let J=ee[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&H(A),Object.keys(ee).length===0&&f.delete(B)}i.remove(A)}function H(A){let y=i.get(A);s.deleteTexture(y.__webglTexture);let B=A.source,ee=f.get(B);delete ee[y.__cacheKey],a.memory.textures--}function te(A){let y=i.get(A);y.__depthDisposeCallback&&y.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&V(B),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let ae=0;ae<y.__webglFramebuffer[J].length;ae++)s.deleteFramebuffer(y.__webglFramebuffer[J][ae]);else s.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)s.deleteFramebuffer(y.__webglFramebuffer[J]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let ee=A.textures;for(let J=0,ae=ee.length;J<ae;J++){let ue=i.get(ee[J]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(ee[J])}i.remove(A)}let X=0;function j(){X=0}function Q(){return X}function Ee(A){X=A}function Oe(){let A=X;return A>=n.maxTextures&&Ae("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),X+=1,A}function K(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.mipmapsAutoUpdate),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function xe(A,y){let B=i.get(A);if(A.isVideoTexture&&Nt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let ee=A.image;if(ee===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(B,A,y);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+y)}function Se(A,y){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Lt(B,A,y);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+y)}function Ie(A,y){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Lt(B,A,y);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+y)}function _e(A,y){let B=i.get(A);if(A.version>0&&B.__version!==A.version){fi(B,A,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+y)}let ke={[Oi]:s.REPEAT,[Di]:s.CLAMP_TO_EDGE,[tr]:s.MIRRORED_REPEAT},Rt={[At]:s.NEAREST,[nl]:s.NEAREST_MIPMAP_NEAREST,[ws]:s.NEAREST_MIPMAP_LINEAR,[Et]:s.LINEAR,[xr]:s.LINEAR_MIPMAP_NEAREST,[Bi]:s.LINEAR_MIPMAP_LINEAR},Le={[af]:s.NEVER,[ph]:s.ALWAYS,[of]:s.LESS,[dh]:s.LEQUAL,[lf]:s.EQUAL,[fh]:s.GEQUAL,[cf]:s.GREATER,[hf]:s.NOTEQUAL};function ot(A,y){if(y.type===Ti&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Et||y.magFilter===xr||y.magFilter===ws||y.magFilter===Bi||y.minFilter===Et||y.minFilter===xr||y.minFilter===ws||y.minFilter===Bi)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,ke[y.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,ke[y.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,ke[y.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Rt[y.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Rt[y.minFilter]),y.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Le[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===At||y.minFilter!==ws&&y.minFilter!==Bi||y.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ht(A,y){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",L),I(y));let ee=y.source,J=f.get(ee);J===void 0&&(J={},f.set(ee,J));let ae=K(y);if(ae!==A.__cacheKey){J[ae]===void 0&&(J[ae]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[ae].usedTimes++;let ue=J[A.__cacheKey];ue!==void 0&&(J[A.__cacheKey].usedTimes--,ue.usedTimes===0&&H(y)),A.__cacheKey=ae,A.__webglTexture=J[ae].texture}return B}function Ke(A,y,B){return Math.floor(Math.floor(A/B)/y)}function qt(A,y,B,ee){let ae=A.updateRanges;if(ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,B,ee,y.data);else{ae.sort((C,Z)=>C.start-Z.start);let ue=0;for(let C=1;C<ae.length;C++){let Z=ae[ue],W=ae[C],ce=Z.start+Z.count,ne=Ke(W.start,y.width,4),oe=Ke(Z.start,y.width,4);W.start<=ce+1&&ne===oe&&Ke(W.start+W.count-1,y.width,4)===ne?Z.count=Math.max(Z.count,W.start+W.count-Z.start):(++ue,ae[ue]=W)}ae.length=ue+1;let Y=t.getParameter(s.UNPACK_ROW_LENGTH),$=t.getParameter(s.UNPACK_SKIP_PIXELS),le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let C=0,Z=ae.length;C<Z;C++){let W=ae[C],ce=Math.floor(W.start/4),ne=Math.ceil(W.count/4),oe=ce%y.width,Re=Math.floor(ce/y.width),We=ne,ie=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Re),t.texSubImage2D(s.TEXTURE_2D,0,oe,Re,We,ie,B,ee,y.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Y),t.pixelStorei(s.UNPACK_SKIP_PIXELS,$),t.pixelStorei(s.UNPACK_SKIP_ROWS,le)}}function Lt(A,y,B){let ee=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=s.TEXTURE_3D);let J=ht(A,y),ae=y.source;t.bindTexture(ee,A.__webglTexture,s.TEXTURE0+B);let ue=i.get(ae);if(ae.version!==ue.__version||J===!0){if(t.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ie=Ge.getPrimaries(Ge.workingColorSpace),Ce=y.colorSpace===Ln?null:Ge.getPrimaries(y.colorSpace),He=y.colorSpace===Ln||ie===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let $=v(y.image,!1,n.maxTextureSize);$=Pe(y,$);let le=r.convert(y.format,y.colorSpace),C=r.convert(y.type),Z=E(y.internalFormat,le,C,y.normalized,y.colorSpace,y.isVideoTexture);ot(ee,y);let W,ce=y.mipmaps,ne=y.isVideoTexture!==!0,oe=ue.__version===void 0||J===!0,Re=ae.dataReady,We=b(y,$);if(y.isDepthTexture)Z=x(y.format===Pn,y.type),oe&&(ne?t.texStorage2D(s.TEXTURE_2D,1,Z,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,Z,$.width,$.height,0,le,C,null));else if(y.isDataTexture)if(ce.length>0){ne&&oe&&t.texStorage2D(s.TEXTURE_2D,We,Z,ce[0].width,ce[0].height);for(let ie=0,Ce=ce.length;ie<Ce;ie++)W=ce[ie],ne?Re&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,W.width,W.height,le,C,W.data):t.texImage2D(s.TEXTURE_2D,ie,Z,W.width,W.height,0,le,C,W.data);y.generateMipmaps=!1}else ne?(oe&&t.texStorage2D(s.TEXTURE_2D,We,Z,$.width,$.height),Re&&qt(y,$,le,C)):t.texImage2D(s.TEXTURE_2D,0,Z,$.width,$.height,0,le,C,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ne&&oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,We,Z,ce[0].width,ce[0].height,$.depth);for(let ie=0,Ce=ce.length;ie<Ce;ie++)if(W=ce[ie],y.format!==ki)if(le!==null)if(ne){if(Re)if(y.layerUpdates.size>0){let He=Th(W.width,W.height,y.format,y.type);for(let me of y.layerUpdates){let lt=W.data.subarray(me*He/W.data.BYTES_PER_ELEMENT,(me+1)*He/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,me,W.width,W.height,1,le,lt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,W.width,W.height,$.depth,le,W.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Z,W.width,W.height,$.depth,0,W.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?Re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,W.width,W.height,$.depth,le,C,W.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Z,W.width,W.height,$.depth,0,le,C,W.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ne&&oe&&t.texStorage2D(s.TEXTURE_2D,We,Z,ce[0].width,ce[0].height);for(let ie=0,Ce=ce.length;ie<Ce;ie++)W=ce[ie],y.format!==ki?le!==null?ne?Re&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,W.width,W.height,le,W.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Z,W.width,W.height,0,W.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?Re&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,W.width,W.height,le,C,W.data):t.texImage2D(s.TEXTURE_2D,ie,Z,W.width,W.height,0,le,C,W.data)}else if(y.isDataArrayTexture)if(ne){if(oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,We,Z,$.width,$.height,$.depth),Re)if(y.layerUpdates.size>0){let ie=Th($.width,$.height,y.format,y.type);for(let Ce of y.layerUpdates){let He=$.data.subarray(Ce*ie/$.data.BYTES_PER_ELEMENT,(Ce+1)*ie/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ce,$.width,$.height,1,le,C,He)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,le,C,$.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Z,$.width,$.height,$.depth,0,le,C,$.data);else if(y.isData3DTexture)ne?(oe&&t.texStorage3D(s.TEXTURE_3D,We,Z,$.width,$.height,$.depth),Re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,le,C,$.data)):t.texImage3D(s.TEXTURE_3D,0,Z,$.width,$.height,$.depth,0,le,C,$.data);else if(y.isFramebufferTexture){if(oe)if(ne)t.texStorage2D(s.TEXTURE_2D,We,Z,$.width,$.height);else{let ie=$.width,Ce=$.height;for(let He=0;He<We;He++)t.texImage2D(s.TEXTURE_2D,He,Z,ie,Ce,0,le,C,null),ie>>=1,Ce>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let ie=s.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),$.parentNode!==ie){ie.appendChild($),u.add(y),ie.onpaint=Ce=>{let He=Ce.changedElements;for(let me of u)He.includes(me.image)&&(me.needsUpdate=!0)},ie.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{let He=s.RGBA,me=s.RGBA,lt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,He,me,lt,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ce.length>0){if(ne&&oe){let ie=Ue(ce[0]);t.texStorage2D(s.TEXTURE_2D,We,Z,ie.width,ie.height)}for(let ie=0,Ce=ce.length;ie<Ce;ie++)W=ce[ie],ne?Re&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,le,C,W):t.texImage2D(s.TEXTURE_2D,ie,Z,le,C,W);y.generateMipmaps=!1}else if(ne){if(oe){let ie=Ue($);t.texStorage2D(s.TEXTURE_2D,We,Z,ie.width,ie.height)}Re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,C,$)}else t.texImage2D(s.TEXTURE_2D,0,Z,le,C,$);T(y)&&y.mipmapsAutoUpdate===!0&&M(ee),ue.__version=ae.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function fi(A,y,B){if(y.image.length!==6)return;let ee=ht(A,y),J=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);let ae=i.get(J);if(J.version!==ae.__version||ee===!0){t.activeTexture(s.TEXTURE0+B);let ue=Ge.getPrimaries(Ge.workingColorSpace),Y=y.colorSpace===Ln?null:Ge.getPrimaries(y.colorSpace),$=y.colorSpace===Ln||ue===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let le=y.isCompressedTexture||y.image[0].isCompressedTexture,C=y.image[0]&&y.image[0].isDataTexture,Z=[];for(let me=0;me<6;me++)!le&&!C?Z[me]=v(y.image[me],!0,n.maxCubemapSize):Z[me]=C?y.image[me].image:y.image[me],Z[me]=Pe(y,Z[me]);let W=Z[0],ce=r.convert(y.format,y.colorSpace),ne=r.convert(y.type),oe=E(y.internalFormat,ce,ne,y.normalized,y.colorSpace),Re=y.isVideoTexture!==!0,We=ae.__version===void 0||ee===!0,ie=J.dataReady,Ce=b(y,W);ot(s.TEXTURE_CUBE_MAP,y);let He;if(y.isDepthTexture){if(oe=x(y.format===Pn,y.type),We)if(Re)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,oe,W.width,W.height);else for(let me=0;me<6;me++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,oe,W.width,W.height,0,ce,ne,null)}else if(le){Re&&We&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,oe,W.width,W.height);for(let me=0;me<6;me++){He=Z[me].mipmaps;for(let lt=0;lt<He.length;lt++){let Gt=He[lt];y.format!==ki?ce!==null?Re?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,0,0,Gt.width,Gt.height,ce,Gt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,oe,Gt.width,Gt.height,0,Gt.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,0,0,Gt.width,Gt.height,ce,ne,Gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,oe,Gt.width,Gt.height,0,ce,ne,Gt.data)}}}else{if(He=y.mipmaps,Re&&We){He.length>0&&Ce++;let me=Ue(Z[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,oe,me.width,me.height)}for(let me=0;me<6;me++)if(C){Re?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Z[me].width,Z[me].height,ce,ne,Z[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,oe,Z[me].width,Z[me].height,0,ce,ne,Z[me].data);for(let lt=0;lt<He.length;lt++){let On=He[lt].image[me].image;Re?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,0,0,On.width,On.height,ce,ne,On.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,oe,On.width,On.height,0,ce,ne,On.data)}}else{Re?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ce,ne,Z[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,oe,ce,ne,Z[me]);for(let lt=0;lt<He.length;lt++){let Gt=He[lt];Re?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,0,0,ce,ne,Gt.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,oe,ce,ne,Gt.image[me])}}}T(y)&&y.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),ae.__version=J.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function St(A,y,B,ee,J,ae){let ue=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),$=E(B.internalFormat,ue,Y,B.normalized,B.colorSpace),le=i.get(y),C=i.get(B);if(C.__renderTarget=y,!le.__hasExternalTextures){let Z=Math.max(1,y.width>>ae),W=Math.max(1,y.height>>ae);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,ae,$,Z,W,y.depth,0,ue,Y,null):t.texImage2D(J,ae,$,Z,W,0,ue,Y,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),pe(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,J,C.__webglTexture,0,vt(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,J,C.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ki(A,y,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),y.depthBuffer){let ee=y.depthTexture,J=ee&&ee.isDepthTexture?ee.type:null,ae=x(y.stencilBuffer,J),ue=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pe(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt(y),ae,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt(y),ae,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ae,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,A)}else{let ee=y.textures;for(let J=0;J<ee.length;J++){let ae=ee[J],ue=r.convert(ae.format,ae.colorSpace),Y=r.convert(ae.type),$=E(ae.internalFormat,ue,Y,ae.normalized,ae.colorSpace);pe(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt(y),$,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt(y),$,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,$,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ht(A,y,B){let ee=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(y.depthTexture);J.__renderTarget=y;let ae=ee?y.depthTexture.image[0]:y.depthTexture.image;(!J.__webglTexture||ae.width!==y.width||ae.height!==y.height)&&(ae.width=y.width,ae.height=y.height,y.depthTexture.needsUpdate=!0),ee?_e(y.depthTexture,0):xe(y.depthTexture,0);let ue=J.__webglTexture,Y=vt(y),$=ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,le=y.depthTexture.format===Pn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Mn)pe(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,$,ue,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,le,$,ue,0);else if(y.depthTexture.format===Pn)pe(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,$,ue,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,le,$,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wi(A){let y=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let ee=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ee){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ee.removeEventListener("dispose",J)};ee.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=ee}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let ee=0;ee<6;ee++)Ht(y.__webglFramebuffer[ee],A,ee);else A.texture.mipmaps.length>0?Ht(y.__webglFramebuffer[0],A,0):Ht(y.__webglFramebuffer,A,0);else if(B){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]===void 0)y.__webglDepthbuffer[ee]=s.createRenderbuffer(),Ki(y.__webglDepthbuffer[ee],A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,ae)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Ki(y.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,ae)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ai(A,y,B){let ee=i.get(A);y!==void 0&&St(ee.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&wi(A)}function Ri(A){let y=A.texture,B=i.get(A),ee=i.get(y);A.addEventListener("dispose",O),I(A);let J=A.textures,ae=A.isWebGLCubeRenderTarget===!0,ue=J.length>1;if(ue||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=y.version,a.memory.textures++),ae){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let $=0;$<y.mipmaps.length;$++)B.__webglFramebuffer[Y][$]=s.createFramebuffer()}else B.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(y.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)B.__webglFramebuffer[Y]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ue)for(let Y=0,$=J.length;Y<$;Y++){let le=i.get(J[Y]);le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&pe(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<J.length;Y++){let $=J[Y];B.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let le=r.convert($.format,$.colorSpace),C=r.convert($.type),Z=E($.internalFormat,le,C,$.normalized,$.colorSpace,A.isXRRenderTarget===!0),W=vt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,W,Z,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Ki(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),ot(s.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)St(B.__webglFramebuffer[Y][$],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else St(B.__webglFramebuffer[Y],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);T(y)?M(s.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let Y=0,$=J.length;Y<$;Y++){let le=J[Y],C=i.get(le),Z=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,C.__webglTexture),ot(Z,le),St(B.__webglFramebuffer,A,le,s.COLOR_ATTACHMENT0+Y,Z,0),T(le)&&M(Z)}t.unbindTexture()}else{let Y=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Y,ee.__webglTexture),ot(Y,y),y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)St(B.__webglFramebuffer[$],A,y,s.COLOR_ATTACHMENT0,Y,$);else St(B.__webglFramebuffer,A,y,s.COLOR_ATTACHMENT0,Y,0);T(y)?M(Y):y.mipmaps.length>0&&s.texParameteri(Y,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&wi(A)}function U(A){let y=A.textures;for(let B=0,ee=y.length;B<ee;B++){let J=y[B];if(T(J)&&J.mipmapsAutoUpdate===!0){let ae=w(A),ue=i.get(J).__webglTexture;t.bindTexture(ae,ue),M(ae),t.unbindTexture()}}}let Ci=[];function _t(A){if(A.samples>0){if(pe(A)===!1){let y=A.textures,B=A.width,ee=A.height,J=s.COLOR_BUFFER_BIT,ae=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=i.get(A),Y=y.length>1;if(Y)for(let le=0;le<y.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<y.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);let C=i.get(y[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,C,0)}s.blitFramebuffer(0,0,B,ee,0,0,B,ee,J,s.NEAREST),l===!0&&(Ci.length=0,Ci.push(s.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Ci.push(ae),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ci))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let le=0;le<y.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);let C=i.get(y[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,C,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function vt(A){return Math.min(n.maxSamples,A.samples)}function pe(A){let y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Nt(A){let y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Pe(A,y){let B=A.colorSpace,ee=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==oi&&B!==Ln&&(Ge.getTransfer(B)===st?(ee!==ki||J!==xi)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",B)),y}function Ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Oe,this.resetTextureUnits=j,this.getTextureUnits=Q,this.setTextureUnits=Ee,this.setTexture2D=xe,this.setTexture2DArray=Se,this.setTexture3D=Ie,this.setTextureCube=_e,this.rebindTextures=Ai,this.setupRenderTarget=Ri,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=wi,this.setupFrameBufferTexture=St,this.useMultisampledRTT=pe,this.dispose=G}function lv(s,e){function t(i,n=Ln){let r,a=Ge.getTransfer(n);if(i===xi)return s.UNSIGNED_BYTE;if(i===rl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===al)return s.UNSIGNED_SHORT_5_5_5_1;if(i===oh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===lh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===rh)return s.BYTE;if(i===ah)return s.SHORT;if(i===_r)return s.UNSIGNED_SHORT;if(i===sl)return s.INT;if(i===$i)return s.UNSIGNED_INT;if(i===Ti)return s.FLOAT;if(i===Jt)return s.HALF_FLOAT;if(i===ch)return s.ALPHA;if(i===hh)return s.RGB;if(i===ki)return s.RGBA;if(i===Mn)return s.DEPTH_COMPONENT;if(i===Pn)return s.DEPTH_STENCIL;if(i===ol)return s.RED;if(i===ll)return s.RED_INTEGER;if(i===jn)return s.RG;if(i===cl)return s.RG_INTEGER;if(i===hl)return s.RGBA_INTEGER;if(i===Ca||i===Ia||i===Pa||i===La)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ul||i===dl||i===fl||i===pl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ml||i===gl||i===xl||i===_l||i===vl||i===Na||i===yl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ml||i===gl)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===_l)return r.COMPRESSED_R11_EAC;if(i===vl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Na)return r.COMPRESSED_RG11_EAC;if(i===yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ml||i===Sl||i===bl||i===Tl||i===El||i===wl||i===Al||i===Rl||i===Cl||i===Il||i===Pl||i===Ll||i===Nl||i===Dl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ml)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Al)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Il)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ll)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ul||i===Ol||i===Fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ul)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bl||i===kl||i===Da||i===zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Bl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
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

}`,Nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ca(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mt({vertexShader:cv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new se(new bi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends Qi{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Nh,p={},v=t.getContextAttributes(),T=null,M=null,w=[],E=[],x=new ye,b=null,I=null,R=new Dt;R.viewport=new ct;let L=new Dt;L.viewport=new ct;let O=[R,L],V=new Qo,P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let xe=w[K];return xe===void 0&&(xe=new ar,w[K]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(K){let xe=w[K];return xe===void 0&&(xe=new ar,w[K]=xe),xe.getGripSpace()},this.getHand=function(K){let xe=w[K];return xe===void 0&&(xe=new ar,w[K]=xe),xe.getHandSpace()};function q(K){let xe=E.indexOf(K.inputSource);if(xe===-1)return;let Se=w[xe];Se!==void 0&&(Se.update(K.inputSource,K.frame,c||a),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){n.removeEventListener("select",q),n.removeEventListener("selectstart",q),n.removeEventListener("selectend",q),n.removeEventListener("squeeze",q),n.removeEventListener("squeezestart",q),n.removeEventListener("squeezeend",q),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",te);for(let K=0;K<w.length;K++){let xe=E[K];xe!==null&&(E[K]=null,w[K].disconnect(xe))}P=null,G=null,m.reset();for(let K in p)delete p[K];if(e.setRenderTarget(T),f=null,d=null,u=null,n=null,M=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),I!==null){let K=I.camera;K.fov=I.fov,K.zoom=I.zoom,K.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(T=e.getRenderTarget(),n.addEventListener("select",q),n.addEventListener("selectstart",q),n.addEventListener("selectend",q),n.addEventListener("squeeze",q),n.addEventListener("squeezestart",q),n.addEventListener("squeezeend",q),n.addEventListener("end",H),n.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ie=null,_e=null;v.depth&&(_e=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=v.stencil?Pn:Mn,Ie=v.stencil?As:$i);let ke={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ke),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Ot(d.textureWidth,d.textureHeight,{format:ki,type:xi,depthTexture:new bn(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,Se),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ot(f.framebufferWidth,f.framebufferHeight,{format:ki,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Oe.setContext(n),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(K){for(let xe=0;xe<K.removed.length;xe++){let Se=K.removed[xe],Ie=E.indexOf(Se);Ie>=0&&(E[Ie]=null,w[Ie].disconnect(Se))}for(let xe=0;xe<K.added.length;xe++){let Se=K.added[xe],Ie=E.indexOf(Se);if(Ie===-1){for(let ke=0;ke<w.length;ke++)if(ke>=E.length){E.push(Se),Ie=ke;break}else if(E[ke]===null){E[ke]=Se,Ie=ke;break}if(Ie===-1)break}let _e=w[Ie];_e&&_e.connect(Se)}}function X(K,xe){xe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(xe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let xe=K.near,Se=K.far;m.texture!==null&&(m.depthNear>0&&(xe=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),V.near=L.near=R.near=xe,V.far=L.far=R.far=Se,(P!==V.near||G!==V.far)&&(n.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,G=V.far),V.layers.mask=K.layers.mask|6,R.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let Ie=K.parent,_e=V.cameras;X(V,Ie);for(let ke=0;ke<_e.length;ke++)X(_e[ke],Ie);V.projectionMatrix.copy(R.projectionMatrix),V.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&K.isPerspectiveCamera&&(I={camera:K,fov:K.fov,zoom:K.zoom}),j(K,V,Ie)};function j(K,xe,Se){Se===null?K.matrix.copy(xe.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(xe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(xe.projectionMatrix),K.projectionMatrixInverse.copy(xe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ms*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(K){return p[K]};let Q=null;function Ee(K,xe){if(h=xe.getViewerPose(c||a),g=xe,h!==null){let Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ie=!1;Se.length!==V.cameras.length&&(V.cameras.length=0,Ie=!0);for(let Le=0;Le<Se.length;Le++){let ot=Se[Le],ht=null;if(f!==null)ht=f.getViewport(ot);else{let qt=u.getViewSubImage(d,ot);ht=qt.viewport,Le===0&&(e.setRenderTargetTextures(M,qt.colorTexture,qt.depthStencilTexture),e.setRenderTarget(M))}let Ke=O[Le];Ke===void 0&&(Ke=new Dt,Ke.layers.enable(Le),Ke.viewport=new ct,O[Le]=Ke),Ke.matrix.fromArray(ot.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ot.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(ht.x,ht.y,ht.width,ht.height),Le===0&&(V.matrix.copy(Ke.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ie===!0&&V.cameras.push(Ke)}let _e=n.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let Le=u.getDepthInformation(Se[0]);Le&&Le.isValid&&Le.texture&&m.init(Le,n.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let Le=0;Le<Se.length;Le++){let ot=Se[Le].camera;if(ot){let ht=p[ot];ht||(ht=new ca,p[ot]=ht);let Ke=u.getCameraImage(ot);ht.sourceTexture=Ke}}}}for(let Se=0;Se<w.length;Se++){let Ie=E[Se],_e=w[Se];Ie!==null&&_e!==void 0&&_e.update(Ie,xe,c||a)}Q&&Q(K,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),g=null}let Oe=new zf;Oe.setAnimationLoop(Ee),this.setAnimationLoop=function(K){Q=K},this.dispose=function(){}}},uv=new Be,Zf=new De;Zf.set(-1,0,0,0,1,0,0,0,1);function dv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,T,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ft&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ft&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),T=v.envMap,M=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(uv.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function fv(s,e,t,i){let n={},r={};function a(v,T){let M=T.program;i.uniformBlockBinding(v,M,n[v.id])}function o(v,T){let M=n[v.id];M===void 0&&(g(v),M=l(v),n[v.id]=M,v.addEventListener("dispose",m));let w=T.program;i.updateUBOMapping(v,w);let E=e.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let T=s.createBuffer(),M=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,M,w),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(v){let T=n[v.id],M=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let E=0,x=M.length;E<x;E++){let b=M[E];if(Array.isArray(b))for(let I=0,R=b.length;I<R;I++)h(b[I],E,I,w);else h(b,E,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,T,M,w){if(d(v,T,M,w)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let I=0;I<x.length;I++){let R=x[I],L=_(R,!0);u(R,v.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}function u(v,T,M){typeof v=="number"||typeof v=="boolean"?T[M]=v:v.isMatrix3?(T[M]=v.elements[0],T[M+1]=v.elements[1],T[M+2]=v.elements[2],T[M+3]=0,T[M+4]=v.elements[3],T[M+5]=v.elements[4],T[M+6]=v.elements[5],T[M+7]=0,T[M+8]=v.elements[6],T[M+9]=v.elements[7],T[M+10]=v.elements[8],T[M+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-M),M):v.toArray(T,M)}function d(v,T,M,w){let E=v.value,x=T+"_"+M;if(Array.isArray(E)){w[x]===void 0&&(w[x]=[]);let b=w[x],I=!1;for(let R=0;R<E.length;R++)f(E[R],b,R)===!0&&(I=!0);return I}return f(E,w,x)}function f(v,T,M){if(T[M]===void 0)return typeof v=="number"||typeof v=="boolean"?T[M]=v:ArrayBuffer.isView(v)?T[M]=v.slice():T[M]=v.clone(),!0;{let w=T[M];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return T[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function g(v){let T=v.uniforms,M=0,w=16;for(let x=0,b=T.length;x<b;x++){let I=Array.isArray(T[x])?T[x]:[T[x]];for(let R=0,L=I.length;R<L;R++){let O=I[R],V=Array.isArray(O.value)?O.value:[O.value],P=Array.isArray(T[x])||Array.isArray(O.value),G=M;for(let H=0,te=V.length;H<te;H++){let X=V[H],j=_(X,P),Q=M%w,Ee=Q%j.boundary,Oe=Q+Ee;M+=Ee,Oe!==0&&w-Oe<j.storage&&(M+=w-Oe),H===0&&(G=M),M+=j.storage}let q=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new q((M-G)/Float32Array.BYTES_PER_ELEMENT),O.__offset=G}}let E=M%w;return E>0&&(M+=w-E),v.__size=M,v.__cache={},this}function _(v,T){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(v){let T=v.target;T.removeEventListener("dispose",m),s.deleteBuffer(n[T.id]),delete n[T.id],delete r[T.id]}function p(){for(let v in n)s.deleteBuffer(n[v]);n={},r={}}return{bind:a,update:o,dispose:p}}var pv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),on=null;function mv(){return on===null&&(on=new Xn(pv,16,16,jn,Jt),on.name="DFG_LUT",on.minFilter=Et,on.magFilter=Et,on.wrapS=Di,on.wrapT=Di,on.generateMipmaps=!1,on.needsUpdate=!0),on}var Xl=class{constructor(e={}){let{canvas:t=uf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=xi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=f,m=new Set([hl,cl,ll]),p=new Set([xi,$i,_r,As,rl,al]),v=new Uint32Array(4),T=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},w=null,E=null,x=[],b=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,O=null,V=null,P=null,G=null;this._outputColorSpace=yt;let q=0,H=0,te=null,X=-1,j=null,Q=new ct,Ee=new ct,Oe=null,K=new fe(0),xe=0,Se=t.width,Ie=t.height,_e=1,ke=null,Rt=null,Le=new ct(0,0,Se,Ie),ot=new ct(0,0,Se,Ie),ht=!1,Ke=new qn,qt=new Ho,Lt=!1,fi=!1,St=new Be,Ki=new D,Ht=new ct,wi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ai=!1;function Ri(){return te===null?_e:1}let U=i;function Ci(S,N){return t.getContext(S,N)}let _t,vt,pe,Nt,Pe,Ue,A,y,B,ee,J,ae,ue,Y,$,le,C,Z,W,ce,ne,oe,Re;try{let S={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",me,!1),U===null){let N="webgl2";if(U=Ci(N,S),U===null)throw Ci(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(S){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ne("WebGLRenderer: "+S.message),S}function We(){_t=new wx(U),_t.init(),ne=new lv(U,_t),vt=new mx(U,_t,e,ne),pe=new av(U,_t),vt.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),V=U.createFramebuffer(),P=U.createFramebuffer(),G=U.createFramebuffer(),Nt=new Cx(U),Pe=new q_,Ue=new ov(U,_t,pe,Pe,vt,ne,Nt),A=new Ex(R),y=new Pm(U),oe=new fx(U,y),B=new Ax(U,y,Nt,oe),ee=new Px(U,B,y,oe,Nt),Z=new Ix(U,vt,Ue),$=new gx(Pe),J=new X_(R,A,_t,vt,oe,$),ae=new dv(R,Pe),ue=new $_,Y=new ev(_t),C=new dx(R,A,pe,ee,g,l),le=new rv(R,ee,vt),Re=new fv(U,Nt,vt,pe),W=new px(U,_t,Nt),ce=new Rx(U,_t,Nt),Nt.programs=J.programs,R.capabilities=vt,R.extensions=_t,R.properties=Pe,R.renderLists=ue,R.shadowMap=le,R.state=pe,R.info=Nt}_!==xi&&(I=new Nx(_,t.width,t.height,o,n,r));let ie=new Dh(R,U);this.xr=ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=_t.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=_t.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(S){S!==void 0&&(_e=S,this.setSize(Se,Ie,!1))},this.getSize=function(S){return S.set(Se,Ie)},this.setSize=function(S,N,z=!0){if(ie.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=S,Ie=N,t.width=Math.floor(S*_e),t.height=Math.floor(N*_e),z===!0&&(t.style.width=S+"px",t.style.height=N+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Se*_e,Ie*_e).floor()},this.setDrawingBufferSize=function(S,N,z){Se=S,Ie=N,_e=z,t.width=Math.floor(S*z),t.height=Math.floor(N*z),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(_===xi){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Q)},this.getViewport=function(S){return S.copy(Le)},this.setViewport=function(S,N,z,F){S.isVector4?Le.set(S.x,S.y,S.z,S.w):Le.set(S,N,z,F),pe.viewport(Q.copy(Le).multiplyScalar(Ri()).round())},this.getScissor=function(S){return S.copy(ot)},this.setScissor=function(S,N,z,F){S.isVector4?ot.set(S.x,S.y,S.z,S.w):ot.set(S,N,z,F),pe.scissor(Ee.copy(ot).multiplyScalar(Ri()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(S){pe.setScissorTest(ht=S)},this.setOpaqueSort=function(S){ke=S},this.setTransparentSort=function(S){Rt=S},this.getClearColor=function(S){return S.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,z=!0){let F=0;if(S){let k=!1;if(te!==null){let de=te.texture.format;k=m.has(de)}if(k){let de=te.texture.type,Me=p.has(de),he=C.getClearColor(),ve=C.getClearAlpha(),we=he.r,Fe=he.g,Ze=he.b;Me?(v[0]=we,v[1]=Fe,v[2]=Ze,v[3]=ve,U.clearBufferuiv(U.COLOR,0,v)):(T[0]=we,T[1]=Fe,T[2]=Ze,T[3]=ve,U.clearBufferiv(U.COLOR,0,T))}else F|=U.COLOR_BUFFER_BIT}N&&(F|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(F|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",me,!1),C.dispose(),ue.dispose(),Y.dispose(),Ue.dispose(),Pe.dispose(),A.dispose(),ee.dispose(),B.dispose(),oe.dispose(),Re.dispose(),J.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Au),ie.removeEventListener("sessionend",Ru),ns.stop()};function Ce(S){S.preventDefault(),Jr("WebGLRenderer: Context Lost."),L=!0}function He(){Jr("WebGLRenderer: Context Restored."),L=!1;let S=Nt.autoReset,N=le.enabled,z=le.autoUpdate,F=le.needsUpdate,k=le.type;We(),Nt.autoReset=S,le.enabled=N,le.autoUpdate=z,le.needsUpdate=F,le.type=k}function me(S){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function lt(S){let N=S.target;N.removeEventListener("dispose",lt),Gt(N)}function Gt(S){On(S),Pe.remove(S)}function On(S){let N=Pe.get(S).programs;N!==void 0&&(N.forEach(function(z){J.releaseProgram(z)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,z,F,k,de){N===null&&(N=wi);let Me=k.isMesh&&k.matrixWorld.determinantAffine()<0,he=vp(S,N,z,F,k);pe.setMaterial(F,Me);let ve=z.index,we=1;if(F.wireframe===!0){if(ve=B.getWireframeAttribute(z),ve===void 0)return;we=2}let Fe=z.drawRange,Ze=z.attributes.position,be=Fe.start*we,Je=(Fe.start+Fe.count)*we;de!==null&&(be=Math.max(be,de.start*we),Je=Math.min(Je,(de.start+de.count)*we)),ve!==null?(be=Math.max(be,0),Je=Math.min(Je,ve.count)):Ze!=null&&(be=Math.max(be,0),Je=Math.min(Je,Ze.count));let Ct=Je-be;if(Ct<0||Ct===1/0)return;oe.setup(k,F,he,z,ve);let mt,ut=W;if(ve!==null&&(mt=y.get(ve),ut=ce,ut.setIndex(mt)),k.isMesh)F.wireframe===!0?(pe.setLineWidth(F.wireframeLinewidth*Ri()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(k.isLine){let jt=F.linewidth;jt===void 0&&(jt=1),pe.setLineWidth(jt*Ri()),k.isLineSegments?ut.setMode(U.LINES):k.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else k.isPoints?ut.setMode(U.POINTS):k.isSprite&&ut.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))ut.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let jt=k._multiDrawStarts,Te=k._multiDrawCounts,ri=k._multiDrawCount,rt=ve?y.get(ve).bytesPerElement:1,ss=Pe.get(F).currentProgram.getUniforms();for(let Qt=0;Qt<ri;Qt++)ss.setValue(U,"_gl_DrawID",Qt),ut.render(jt[Qt]/rt,Te[Qt])}else if(k.isInstancedMesh)ut.renderInstances(be,Ct,k.count);else if(z.isInstancedBufferGeometry){let jt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Te=Math.min(z.instanceCount,jt);ut.renderInstances(be,Ct,Te)}else ut.render(be,Ct)};function wu(S,N,z,F){O!==null&&S.isNodeMaterial&&O.setObject(F,S),Lt===!0&&$.setState(S,z,!1),S.transparent===!0&&S.side===gi&&S.forceSinglePass===!1?(S.side=Ft,S.needsUpdate=!0,Lr(S,N,F),S.side=Fi,S.needsUpdate=!0,Lr(S,N,F),S.side=gi):Lr(S,N,F)}this.compile=function(S,N,z=null){z===null&&(z=S),O!==null&&O.renderStart(S,N,z),E=Y.get(z),E.init(N),b.push(E),z.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),S!==z&&S.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),fi=this.localClippingEnabled,Lt=$.init(this.clippingPlanes,fi),Lt===!0&&$.setGlobalState(this.clippingPlanes,N),O!==null&&le.render(E.state.shadowsArray,z,N);let F=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let de=k.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){let he=de[Me];wu(he,z,N,k),F.add(he)}else wu(de,z,N,k),F.add(de)}),E=b.pop(),O!==null&&O.renderEnd(),F},this.compileAsync=function(S,N,z=null){let F=this.compile(S,N,z);return new Promise(k=>{function de(){if(F.forEach(function(Me){let ve=Pe.get(Me).currentProgram;(ve===void 0||ve.isReady())&&F.delete(Me)}),F.size===0){k(S);return}setTimeout(de,10)}_t.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let fc=null;function xp(S){fc&&fc(S)}function Au(){ns.stop()}function Ru(){ns.start()}let ns=new zf;ns.setAnimationLoop(xp),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(S){fc=S,ie.setAnimationLoop(S),S===null?ns.stop():ns.start()},ie.addEventListener("sessionstart",Au),ie.addEventListener("sessionend",Ru),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(S,N);let z=ie.enabled===!0&&ie.isPresenting===!0,F=I!==null&&(te===null||z)&&I.begin(R,te);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(N),N=ie.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,N,te),E=Y.get(S,b.length),E.init(N),E.state.textureUnits=Ue.getTextureUnits(),b.push(E),St.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?qt.setFromArrayCamera(N):Ke.setFromProjectionMatrix(St,Ui,N.reversedDepth),fi=this.localClippingEnabled,Lt=$.init(this.clippingPlanes,fi),w=ue.get(S,x.length),w.init(),x.push(w),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let Me=R.xr.getDepthSensingMesh();Me!==null&&pc(Me,N,-1/0,R.sortObjects)}pc(S,N,0,R.sortObjects),w.finish(),O!==null&&O.updateLights(E.state.lightsArray),R.sortObjects===!0&&w.sort(ke,Rt),Ai=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ai&&C.addToRenderList(w,S),this.info.autoReset===!0&&this.info.reset(),Lt===!0&&$.beginShadows();let k=E.state.shadowsArray;if(le.render(k,S,N),Lt===!0&&$.endShadows(),(F&&I.hasRenderPass())===!1){let Me=w.opaque,he=w.transmissive;if(E.setupLights(),N.isArrayCamera){let ve=N.cameras;if(he.length>0)for(let we=0,Fe=ve.length;we<Fe;we++){let Ze=ve[we];Iu(Me,he,S,Ze)}Ai&&C.render(S);for(let we=0,Fe=ve.length;we<Fe;we++){let Ze=ve[we];Cu(w,S,Ze,Ze.viewport)}}else he.length>0&&Iu(Me,he,S,N),Ai&&C.render(S),Cu(w,S,N)}te!==null&&H===0&&(Ue.updateMultisampleRenderTarget(te),Ue.updateRenderTargetMipmap(te)),F&&I.end(R),S.isScene===!0&&S.onAfterRender(R,S,N),oe.resetDefaultState(),X=-1,j=null,b.pop(),b.length>0?(E=b[b.length-1],Ue.setTextureUnits(E.state.textureUnits),Lt===!0&&$.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,O!==null&&O.renderEnd()};function pc(S,N,z,F){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){let Me=N.isArrayCamera?qt:Ke;if(!S.frustumCulled||S.intersectsFrustum(Me)){F&&Ht.setFromMatrixPosition(S.matrixWorld).applyMatrix4(St);let he=ee.update(S),ve=S.material;ve.visible&&w.push(S,he,ve,z,Ht.z,null,N)}}else if(S.isMesh||S.isLine||S.isPoints){let Me=N.isArrayCamera?qt:Ke;if(!S.frustumCulled||S.intersectsFrustum(Me)){let he=ee.update(S),ve=S.material;if(F&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ht.copy(S.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ht.copy(he.boundingSphere.center)),Ht.applyMatrix4(S.matrixWorld).applyMatrix4(St)),Array.isArray(ve)){let we=he.groups;for(let Fe=0,Ze=we.length;Fe<Ze;Fe++){let be=we[Fe],Je=ve[be.materialIndex];Je&&Je.visible&&w.push(S,he,Je,z,Ht.z,be,N)}}else ve.visible&&w.push(S,he,ve,z,Ht.z,null,N)}}}let de=S.children;for(let Me=0,he=de.length;Me<he;Me++)pc(de[Me],N,z,F)}function Cu(S,N,z,F){let{opaque:k,transmissive:de,transparent:Me}=S;E.setupLightsView(z),Lt===!0&&$.setGlobalState(R.clippingPlanes,z),F&&pe.viewport(Q.copy(F)),k.length>0&&Ja(k,N,z),de.length>0&&Ja(de,N,z),Me.length>0&&Ja(Me,N,z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Iu(S,N,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[F.id]===void 0){let be=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[F.id]=new Ot(1,1,{generateMipmaps:!0,type:be?Jt:xi,minFilter:Bi,samples:Math.max(4,vt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}let de=E.state.transmissionRenderTarget[F.id],Me=F.viewport||Q;de.setSize(Me.z*R.transmissionResolutionScale,Me.w*R.transmissionResolutionScale);let he=R.getRenderTarget(),ve=R.getActiveCubeFace(),we=R.getActiveMipmapLevel();R.setRenderTarget(de),R.getClearColor(K),xe=R.getClearAlpha(),xe<1&&R.setClearColor(16777215,.5),R.clear(),Ai&&C.render(z);let Fe=R.toneMapping;R.toneMapping=rn;let Ze=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),E.setupLightsView(F),Lt===!0&&$.setGlobalState(R.clippingPlanes,F),Ja(S,z,F),Ue.updateMultisampleRenderTarget(de),Ue.updateRenderTargetMipmap(de),_t.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Je=0,Ct=N.length;Je<Ct;Je++){let mt=N[Je],{object:ut,geometry:jt,material:Te,group:ri}=mt;if(Te.side===gi&&ut.layers.test(F.layers)){let rt=Te.side;Te.side=Ft,Te.needsUpdate=!0,Pu(ut,z,F,jt,Te,ri),Te.side=rt,Te.needsUpdate=!0,be=!0}}be===!0&&(Ue.updateMultisampleRenderTarget(de),Ue.updateRenderTargetMipmap(de))}R.setRenderTarget(he,ve,we),R.setClearColor(K,xe),Ze!==void 0&&(F.viewport=Ze),R.toneMapping=Fe}function Ja(S,N,z){let F=N.isScene===!0?N.overrideMaterial:null;for(let k=0,de=S.length;k<de;k++){let Me=S[k],{object:he,geometry:ve,group:we}=Me,Fe=Me.material;Fe.allowOverride===!0&&F!==null&&(Fe=F),he.layers.test(z.layers)&&Pu(he,N,z,ve,Fe,we)}}function Pu(S,N,z,F,k,de){O!==null&&k.isNodeMaterial&&O.setObject(S,k),S.onBeforeRender(R,N,z,F,k,de),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(R,N,z,F,S,de),k.transparent===!0&&k.side===gi&&k.forceSinglePass===!1?(k.side=Ft,k.needsUpdate=!0,R.renderBufferDirect(z,N,F,k,S,de),k.side=Fi,k.needsUpdate=!0,R.renderBufferDirect(z,N,F,k,S,de),k.side=gi):R.renderBufferDirect(z,N,F,k,S,de),S.onAfterRender(R,N,z,F,k,de)}function Lu(S){let N=0;for(let z of S)z.texture!==null&&N++;return N}function Lr(S,N,z){N.isScene!==!0&&(N=wi);let F=Pe.get(S),k=E.state.lights,de=E.state.shadowsArray,Me=k.state.version,he=J.getParameters(S,k.state,de,N,z,E.state.lightProbeGridArray),ve=J.getProgramCacheKey(he),we=F.programs;F.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,F.fog=N.fog;let Fe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;F.envMap=A.get(S.envMap||F.environment,Fe),F.envMapRotation=F.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,we===void 0&&(S.addEventListener("dispose",lt),we=new Map,F.programs=we,F.programVariants=new Map);let Ze=we.get(ve);if(Ze!==void 0){if(F.currentProgram===Ze&&F.lightsStateVersion===Me)return Du(S,he),Ze}else he.uniforms=J.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,z,he),S.onBeforeCompile(he,R),Ze=J.acquireProgram(he,ve),we.set(ve,Ze),F.uniforms=he.uniforms;let be=F.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(be.clippingPlanes=$.uniform),Du(S,he),F.needsLights=Mp(S),F.lightsStateVersion=Me,F.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.sunLights.value=k.state.sun,be.sunLightShadows.value=k.state.sunShadow,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.sunShadowMatrix.value=k.state.sunShadowMatrix,be.sunShadowCascade.value=k.state.sunShadowCascade,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),F.numLightProbeGrids=Lu(E.state.lightProbeGridArray),F.currentProgram=Ze,F.uniformsList=null,Ze}function _p(S,N,z,F,k){let de=Pe.get(S),Me=de.currentProgram.id+","+F+","+k,he=de.programVariants.get(Me);return he===void 0?(he=Lr(S,N,z),de.programVariants.set(Me,he)):(de.currentProgram=he,de.uniformsList=null,de.outputColorSpace=F,de.toneMapping=k),he}function Nu(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=yr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Du(S,N){let z=Pe.get(S);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function vp(S,N,z,F,k){N.isScene!==!0&&(N=wi),Ue.resetTextureUnits();let de=N.fog,Me=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?N.environment:null,he=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ge.workingColorSpace,ve=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,we=A.get(F.envMap||Me,ve),Fe=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ze=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),be=!!z.morphAttributes.position,Je=!!z.morphAttributes.normal,Ct=!!z.morphAttributes.color,mt=rn;F.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(mt=R.toneMapping);let ut=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,jt=ut!==void 0?ut.length:0,Te=Pe.get(F),ri=E.state.lights;if(Lt===!0&&(fi===!0||S!==j)){let bt=S===j&&F.id===X;$.setState(F,S,bt)}let rt=!1,ss=!1;F.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==ri.state.version||k.isBatchedMesh&&Te.batching===!1||!k.isBatchedMesh&&Te.batching===!0||k.isBatchedMesh&&Te.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Te.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Te.instancing===!1||!k.isInstancedMesh&&Te.instancing===!0||k.isSkinnedMesh&&Te.skinning===!1||!k.isSkinnedMesh&&Te.skinning===!0||k.isInstancedMesh&&Te.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Te.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Te.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Te.instancingMorph===!1&&k.morphTexture!==null||Te.envMap!==we||F.fog===!0&&Te.fog!==de||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==$.numPlanes||Te.numIntersection!==$.numIntersection)||Te.vertexAlphas!==Fe||Te.vertexTangents!==Ze||Te.morphTargets!==be||Te.morphNormals!==Je||Te.morphColors!==Ct||Te.morphTargetsCount!==jt||Te.numLightProbeGrids!==Lu(E.state.lightProbeGridArray)?rt=!0:(Te.outputColorSpace!==he||Te.toneMapping!==mt)&&(ss=!0):(rt=!0,Te.__version=F.version);let Qt=Te.currentProgram;(rt===!0||ss===!0)&&(Qt=ss===!0?_p(F,N,k,he,mt):Lr(F,N,k),O&&F.isNodeMaterial&&O.onUpdateProgram(F,Qt,Te));let ja=!1,Fn=!1,rs=!1,tt=Qt.getUniforms(),Yt=Te.uniforms;if(pe.useProgram(Qt.program)&&(ja=!0,Fn=!0,rs=!0),F.id!==X&&(X=F.id,Fn=!0),ja||j!==S){pe.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),tt.setValue(U,"projectionMatrix",S.projectionMatrix),tt.setValue(U,"viewMatrix",S.matrixWorldInverse);let Vt=tt.map.cameraPosition;Vt!==void 0&&Vt.setValue(U,Ki.setFromMatrixPosition(S.matrixWorld)),vt.logarithmicDepthBuffer&&tt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&tt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,Fn=!0,rs=!0)}if(Te.needsLights&&(ri.state.sunShadowMap.length>0&&tt.setValue(U,"sunShadowMap",ri.state.sunShadowMap,Ue),ri.state.directionalShadowMap.length>0&&tt.setValue(U,"directionalShadowMap",ri.state.directionalShadowMap,Ue),ri.state.spotShadowMap.length>0&&tt.setValue(U,"spotShadowMap",ri.state.spotShadowMap,Ue),ri.state.pointShadowMap.length>0&&tt.setValue(U,"pointShadowMap",ri.state.pointShadowMap,Ue)),k.isSkinnedMesh){tt.setOptional(U,k,"bindMatrix"),tt.setOptional(U,k,"bindMatrixInverse");let bt=k.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),tt.setValue(U,"boneTexture",bt.boneTexture,Ue))}k.isBatchedMesh&&(tt.setOptional(U,k,"batchingTexture"),tt.setValue(U,"batchingTexture",k._matricesTexture,Ue),tt.setOptional(U,k,"batchingIdTexture"),tt.setValue(U,"batchingIdTexture",k._indirectTexture,Ue),tt.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&tt.setValue(U,"batchingColorTexture",k._colorsTexture,Ue));let Gi=z.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Z.update(k,z,Qt),(Fn||Te.receiveShadow!==k.receiveShadow)&&(Te.receiveShadow=k.receiveShadow,tt.setValue(U,"receiveShadow",k.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&N.environment!==null&&(Yt.envMapIntensity.value=N.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=mv()),Fn){if(tt.setValue(U,"toneMappingExposure",R.toneMappingExposure),Te.needsLights&&yp(Yt,rs),de&&F.fog===!0&&ae.refreshFogUniforms(Yt,de),ae.refreshMaterialUniforms(Yt,F,_e,Ie,E.state.transmissionRenderTarget[S.id]),Te.needsLights&&Te.numLightProbeGrids>0){let bt=M,Vt=0;for(let dn of E.state.lightProbeGridArray)dn.texture!==null&&(bt.textures[Vt]=dn.texture,bt.min[Vt]=dn.boundingBox.min,bt.max[Vt]=dn.boundingBox.max,bt.resolution[Vt]=dn.resolution,Vt++);for(let dn in bt)bt[dn].length=Vt;Yt.probesSH.value=bt.textures,Yt.probesMin.value=bt.min,Yt.probesMax.value=bt.max,Yt.probesResolution.value=bt.resolution}yr.upload(U,Nu(Te),Yt,Ue)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(yr.upload(U,Nu(Te),Yt,Ue),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&tt.setValue(U,"center",k.center),tt.setValue(U,"modelViewMatrix",k.modelViewMatrix),tt.setValue(U,"normalMatrix",k.normalMatrix),tt.setValue(U,"modelMatrix",k.matrixWorld),F.uniformsGroups!==void 0){let bt=F.uniformsGroups;for(let Vt=0,dn=bt.length;Vt<dn;Vt++){let Ou=bt[Vt];Re.update(Ou,Qt),Re.bind(Ou,Qt)}}return Qt}function yp(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Mp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(S,N,z){let F=Pe.get(S);F.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Pe.get(S.texture).__webglTexture=N,Pe.get(S.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:z,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let z=Pe.get(S);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,z=0){te=S,q=N,H=z;let F=null,k=!1,de=!1;if(S){let he=Pe.get(S);if(he.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(U.FRAMEBUFFER,he.__webglFramebuffer),Q.copy(S.viewport),Ee.copy(S.scissor),Oe=S.scissorTest,pe.viewport(Q),pe.scissor(Ee),pe.setScissorTest(Oe),X=-1;return}else if(he.__webglFramebuffer===void 0)Ue.setupRenderTarget(S);else if(he.__hasExternalTextures)Ue.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Fe=S.depthTexture;if(he.__boundDepthTexture!==Fe){if(Fe!==null&&Pe.has(Fe)&&(S.width!==Fe.image.width||S.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(S)}}let ve=S.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(de=!0);let we=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[N])?F=we[N][z]:F=we[N],k=!0):S.samples>0&&Ue.useMultisampledRTT(S)===!1?F=Pe.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?F=we[z]:F=we,Q.copy(S.viewport),Ee.copy(S.scissor),Oe=S.scissorTest}else Q.copy(Le).multiplyScalar(_e).floor(),Ee.copy(ot).multiplyScalar(_e).floor(),Oe=ht;if(z!==0&&(F=V),pe.bindFramebuffer(U.FRAMEBUFFER,F)&&pe.drawBuffers(S,F),pe.viewport(Q),pe.scissor(Ee),pe.setScissorTest(Oe),k){let he=Pe.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,he.__webglTexture,z)}else if(de){let he=N;for(let ve=0;ve<S.textures.length;ve++){let we=Pe.get(S.textures[ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ve,we.__webglTexture,z,he)}}else if(S!==null&&z!==0){let he=Pe.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,he.__webglTexture,z)}X=-1};function Uu(S){let N=Pe.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=vt.textureFormatReadable(S.format),N.__typeReadable=vt.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,z,F,k,de,Me,he=0){if(!(S&&S.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(ve=ve[Me],Array.isArray(ve)&&(ve=ve[0])),ve){pe.bindFramebuffer(U.FRAMEBUFFER,ve);try{let we=S.textures[he],Fe=we.format,Ze=we.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he);let be=Uu(we);if(be.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-F&&z>=0&&z<=S.height-k&&U.readPixels(N,z,F,k,ne.convert(Fe),ne.convert(Ze),de)}finally{let we=te!==null?Pe.get(te).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(S,N,z,F,k,de,Me,he=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(ve=ve[Me],Array.isArray(ve)&&(ve=ve[0])),ve)if(N>=0&&N<=S.width-F&&z>=0&&z<=S.height-k){pe.bindFramebuffer(U.FRAMEBUFFER,ve);let we=S.textures[he],Fe=we.format,Ze=we.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he);let be=Uu(we);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.bufferData(U.PIXEL_PACK_BUFFER,de.byteLength,U.STREAM_READ),U.readPixels(N,z,F,k,ne.convert(Fe),ne.convert(Ze),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ct=te!==null?Pe.get(te).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Ct);let mt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ff(U,mt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,de),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Je),U.deleteSync(mt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,z=0){let F=Math.pow(2,-z),k=Math.floor(S.image.width*F),de=Math.floor(S.image.height*F),Me=N!==null?N.x:0,he=N!==null?N.y:0;Ue.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,Me,he,k,de),pe.unbindTexture()},this.copyTextureToTexture=function(S,N,z=null,F=null,k=0,de=0){let Me,he,ve,we,Fe,Ze,be,Je,Ct,mt=S.isCompressedTexture?S.mipmaps[de]:S.image;if(z!==null)Me=z.max.x-z.min.x,he=z.max.y-z.min.y,ve=z.isBox3?z.max.z-z.min.z:1,we=z.min.x,Fe=z.min.y,Ze=z.isBox3?z.min.z:0;else{let tt=Math.pow(2,-k);Me=Math.floor(mt.width*tt),he=Math.floor(mt.height*tt),S.isDataArrayTexture?ve=mt.depth:S.isData3DTexture?ve=Math.floor(mt.depth*tt):ve=1,we=0,Fe=0,Ze=0}F!==null?(be=F.x,Je=F.y,Ct=F.z):(be=0,Je=0,Ct=0);let ut=ne.convert(N.format),jt=ne.convert(N.type),Te;N.isData3DTexture?(Ue.setTexture3D(N,0),Te=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ue.setTexture2DArray(N,0),Te=U.TEXTURE_2D_ARRAY):(Ue.setTexture2D(N,0),Te=U.TEXTURE_2D),pe.activeTexture(U.TEXTURE0),pe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),pe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),pe.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let ri=pe.getParameter(U.UNPACK_ROW_LENGTH),rt=pe.getParameter(U.UNPACK_IMAGE_HEIGHT),ss=pe.getParameter(U.UNPACK_SKIP_PIXELS),Qt=pe.getParameter(U.UNPACK_SKIP_ROWS),ja=pe.getParameter(U.UNPACK_SKIP_IMAGES);pe.pixelStorei(U.UNPACK_ROW_LENGTH,mt.width),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt.height),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,we),pe.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,Ze);let Fn=S.isDataArrayTexture||S.isData3DTexture,rs=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let tt=Pe.get(S),Yt=Pe.get(N),Gi=Pe.get(tt.__renderTarget),bt=Pe.get(Yt.__renderTarget);pe.bindFramebuffer(U.READ_FRAMEBUFFER,Gi.__webglFramebuffer),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Vt=0;Vt<ve;Vt++)Fn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.get(S).__webglTexture,k,Ze+Vt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.get(N).__webglTexture,de,Ct+Vt)),U.blitFramebuffer(we,Fe,we+Me,Fe+he,be,Je,be+Me,Je+he,U.DEPTH_BUFFER_BIT,U.NEAREST);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||Pe.has(S)){let tt=Pe.get(S),Yt=Pe.get(N);pe.bindFramebuffer(U.READ_FRAMEBUFFER,P),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let Gi=0;Gi<ve;Gi++)Fn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,tt.__webglTexture,k,Ze+Gi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,tt.__webglTexture,k),rs?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Yt.__webglTexture,de,Ct+Gi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Yt.__webglTexture,de),k!==0?U.blitFramebuffer(we,Fe,we+Me,Fe+he,be,Je,be+Me,Je+he,U.COLOR_BUFFER_BIT,U.NEAREST):rs?U.copyTexSubImage3D(Te,de,be,Je,Ct+Gi,we,Fe,Me,he):U.copyTexSubImage2D(Te,de,be,Je,we,Fe,Me,he);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else rs?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Te,de,be,Je,Ct,Me,he,ve,ut,jt,mt.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,de,be,Je,Ct,Me,he,ve,ut,mt.data):U.texSubImage3D(Te,de,be,Je,Ct,Me,he,ve,ut,jt,mt):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,de,be,Je,Me,he,ut,jt,mt.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,de,be,Je,mt.width,mt.height,ut,mt.data):U.texSubImage2D(U.TEXTURE_2D,de,be,Je,Me,he,ut,jt,mt);pe.pixelStorei(U.UNPACK_ROW_LENGTH,ri),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,ss),pe.pixelStorei(U.UNPACK_SKIP_ROWS,Qt),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,ja),de===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&U.generateMipmap(Te),pe.unbindTexture()},this.initRenderTarget=function(S){Pe.get(S).__webglFramebuffer===void 0&&Ue.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ue.setTextureCube(S,0):S.isData3DTexture?Ue.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ue.setTexture2DArray(S,0):Ue.setTexture2D(S,0),pe.unbindTexture()},this.resetState=function(){q=0,H=0,te=null,pe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};function Uh(s,e){if(e===uh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===vr||e===Ua){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let i=t.count-2,n=[];if(e===vr)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Jf(s){let e=new Map,t=new Map,i=s.clone();return jf(s,i,function(n,r){e.set(r,n),t.set(n,r)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let r=n,a=e.get(n),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function jf(s,e,t){t(s,e);for(let i=0;i<s.children.length;i++)jf(s.children[i],e.children[i],t)}var Kl=class extends nn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Zl(t,qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zl(t,qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new iu(t)})}load(e,t,i,n){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Cn.extractUrlBase(e);a=Cn.resolveURL(c,this.path)}else a=Cn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new dr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===np){try{a[qe.KHR_BINARY_GLTF]=new nu(e)}catch(u){n&&n(u);return}r=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new hu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:a[u]=new zh;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new su(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[u]=new ru;break;case qe.KHR_MESH_QUANTIZATION:a[u]=new au;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}};function gv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Tt(s,e,t){let i=s.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kh=class{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new fe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],oi);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Jn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zt(h),c.distance=u;break;case"spot":c=new va(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),cn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},zh=class{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return et}extendParams(e,t,i){let n=[];e.color=new fe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],oi),e.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(n)}},Hh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Tt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Gh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Tt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let i=Tt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(r,r)}return Promise.all(n)}},Vh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Tt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let i=Tt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(n)}},Wh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Tt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let i=Tt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Xh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Tt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let i=Tt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},qh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Tt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let i=Tt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],oi)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,yt)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},Yh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Tt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let i=Tt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},$h=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Tt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let i=Tt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(r[0],r[1],r[2],oi),Promise.all(n)}},Kh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){return Tt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let i=Tt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Zh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Tt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let i=Tt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(r[0],r[1],r[2],oi),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,yt)),Promise.all(n)}},Jh=class{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){return Tt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let i=Tt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}},jh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Tt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let i=Tt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},Qh=class{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},eu=class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},tu=class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Zl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}},iu=class{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==zi.TRIANGLES&&c.mode!==zi.TRIANGLE_STRIP&&c.mode!==zi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let _=new Be,m=new D,p=new li,v=new D(1,1,1),T=new ci(g.geometry,g.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,w),l.SCALE&&v.fromBufferAttribute(l.SCALE,w),T.setMatrixAt(w,_.compose(m,p,v));let M=null;for(let w in l)if(w==="_COLOR_0"){let E=l[w];T.instanceColor=new Sn(E.array,E.itemSize,E.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(M===null){let x=T.geometry;M=new xt,M.name=x.name;for(let b in x.attributes)M.setAttribute(b,x.attributes[b]);for(let b in x.morphAttributes)M.morphAttributes[b]=x.morphAttributes[b];x.index!==null&&M.setIndex(x.index),M.morphTargetsRelative=x.morphTargetsRelative;for(let b of x.groups)M.addGroup(b.start,b.count,b.materialIndex);x.boundingBox!==null&&(M.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(M.boundingSphere=x.boundingSphere.clone()),M.drawRange.start=x.drawRange.start,M.drawRange.count=x.drawRange.count,M.userData=Object.assign({},x.userData),T.geometry=M}let E=l[w];M.setAttribute(w,new Sn(E.array,E.itemSize,E.normalized))}it.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),f.push(T)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},np="glTF",Ha=12,Qf={JSON:1313821514,BIN:5130562},nu=class{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ha),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==np)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-Ha,r=new DataView(e,Ha),a=0;for(;a<n;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Qf.JSON){let c=new Uint8Array(e,Ha+a,o);this.content=i.decode(c)}else if(l===Qf.BIN){let c=Ha+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},su=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=lu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=lu[h]||h.toLowerCase();if(a[h]!==void 0){let d=i.accessors[e.attributes[h]],f=br[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},o,c,oi,d)})})}},ru=class{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},au=class{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}},Jl=class extends tn{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,v=1-m,T=p-d+u;for(let M=0;M!==o;M++){let w=a[_+M+o],E=a[_+M+l]*h,x=a[g+M+o],b=a[g+M]*h;r[M]=v*w+T*E+m*x+p*b}return r}},xv=new li,ou=class extends Jl{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return xv.fromArray(r).normalize().toArray(r),r}},zi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},br={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ep={9728:At,9729:Et,9984:nl,9985:xr,9986:ws,9987:Bi},tp={33071:Di,33648:tr,10497:Oi},Oh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_v={CUBICSPLINE:void 0,LINEAR:ps,STEP:fs},Fh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new gt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fi})),s.DefaultMaterial}function Cs(s,e,t){for(let i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function cn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yv(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(n){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Mv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Sv(s){let e,t=s.extensions&&s.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bh(t.attributes):e=s.indices+":"+Bh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+Bh(s.targets[i]);return e}function Bh(s){let e="",t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function cu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Tv=new Be,hu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&a<98?(this.textureLoader=new ga(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ya(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return Cs(r,o,n),cn(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,a){i.load(Cn.resolveURL(t.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let a=Oh[n.type],o=br[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new Pt(c,a,l))}let r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Oh[n.type],c=br[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0,_,m;if(f&&f!==u){let p=Math.floor(d/f),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,T=t.cache.get(v);T||(_=new c(o,p*f,n.count*f/h),T=new xs(_,f/h),t.cache.add(v,T)),m=new Wn(T,l,d%f/h,g)}else o===null?_=new c(n.count*l):_=new c(o,d,n.count*l),m=new Pt(_,l,g);if(n.sparse!==void 0){let p=Oh.SCALAR,v=br[n.sparse.indices.componentType],T=n.sparse.indices.byteOffset||0,M=n.sparse.values.byteOffset||0,w=new v(a[1],T,n.sparse.count*p),E=new c(a[2],M,n.sparse.count*l);o!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,b=w.length;x<b;x++){let I=w[x];if(m.setX(I,E[x*l]),l>=2&&m.setY(I,E[x*l+1]),l>=3&&m.setZ(I,E[x*l+2]),l>=4&&m.setW(I,E[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let n=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=ep[d.magFilter]||Et,h.minFilter=ep[d.minFilter]||Bi,h.wrapS=tp[d.wrapS]||Oi,h.wrapT=tp[d.wrapT]||Oi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==At&&h.minFilter!==Et,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=n.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=i.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let _=f;t.isImageBitmapLoader===!0&&(_=function(m){let p=new Ut(m);p.needsUpdate=!0,f(p)}),t.load(Cn.resolveURL(d,r.path),_,void 0,g)})})}let u=h.then(function(d){return c===!0&&o.revokeObjectURL(l),cn(d,a),d.userData.mimeType=a.mimeType||bv(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Yn,ii.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new cr,ii.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return gt}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){let u=n[qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new fe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],oi),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,yt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=gi);let h=r.alphaMode||Fh.OPAQUE;if(h===Fh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Fh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==et&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==et&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==et){let u=r.emissiveFactor;o.emissive=new fe().setRGB(u[0],u[1],u[2],oi)}return r.emissiveTexture!==void 0&&a!==et&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,yt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),cn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Cs(n,u,r),u})}createUniqueName(e){let t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ip(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Sv(c),u=n[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=ip(new xt,c,t),c.mode===zi.TRIANGLE_STRIP?d=d.then(f=>Uh(f,Ua)):c.mode===zi.TRIANGLE_FAN&&(d=d.then(f=>Uh(f,vr))),n[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?vv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],m=a[f],p,v=c[f];if(m.mode===zi.TRIANGLES||m.mode===zi.TRIANGLE_STRIP||m.mode===zi.TRIANGLE_FAN||m.mode===void 0){let T=r.isSkinnedMesh===!0,M=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");T&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=T&&M?new na(_,v):new se(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===zi.LINES)p=new ra(_,v);else if(m.mode===zi.LINE_STRIP)p=new ys(_,v);else if(m.mode===zi.LINE_LOOP)p=new aa(_,v);else if(m.mode===zi.POINTS)p=new Ms(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Mv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),cn(p,r),m.extensions&&Cs(n,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Cs(n,u[0],r),u[0];let d=new je;r.extensions&&Cs(n,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Dt(Gl.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Rn(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),cn(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let r=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Be;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new sa(o,l)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){let f=n.channels[u],g=n.samplers[f.sampler],_=f.target,m=_.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,v=n.parameters!==void 0?n.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let T=0,M=d.length;T<M;T++){let w=d[T],E=f[T],x=g[T],b=_[T],I=m[T];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let R=i._createAnimationTracks(w,E,x,b,I);if(R)for(let L=0;L<R.length;L++)p.push(R[L])}let v=new ma(r,void 0,p);return cn(v,n),v})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Tv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new lr:c.length>1?h=new je:c.length===1?h=c[0]:h=new it,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),cn(h,r),r.extensions&&Cs(i,h,r),r.matrix!==void 0){let u=new Be;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){let u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new je;i.name&&(r.name=n.createUniqueName(i.name)),cn(r,i),i.extensions&&Cs(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Jf(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of n.associations)(d instanceof ii||d instanceof Ut)&&u.set(d,f);return h.traverse(d=>{let f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Qn[r.path]===Qn.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Qn[r.path]){case Qn.weights:h=En;break;case Qn.rotation:h=wn;break;case Qn.translation:case Qn.scale:h=Zn;break;default:switch(i.itemSize){case 1:h=En;break;case 2:case 3:default:h=Zn;break}break}let u=n.interpolation!==void 0?_v[n.interpolation]:ps,d=this._getArrayFromAccessor(i);for(let f=0,g=l.length;f<g;f++){let _=new h(l[f]+"."+Qn[r.path],t.array,d,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=cu(t.constructor),n=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof wn?ou:Jl;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ev(s,e,t){let i=e.attributes,n=new Mi;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let h=cu(br[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=cu(br[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;let a=new pi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function ip(s,e,t){let i=e.attributes,n=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in i){let o=lu[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(a)}return Ge.workingColorSpace!==oi&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ge.workingColorSpace}" not supported.`),cn(s,e),Ev(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?yv(s,e.targets,t):s})}var jl=class extends gs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Si;e.deleteAttribute("uv");let t=new gt({side:Ft}),i=new gt,n=new Zt(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new se(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ci(e,i,6),o=new it;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new se(e,Tr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new se(e,Tr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new se(e,Tr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new se(e,Tr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new se(e,Tr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new se(e,Tr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Tr(s){return new fa({color:0,emissive:16777215,emissiveIntensity:s})}var Er={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wv=new Rn(-1,1,1,-1,0,1),uu=class extends xt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},Av=new uu,es=class{constructor(e){this._mesh=new se(Av,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var wr=class extends Ei{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Dn.clone(e.uniforms),this.material=new Mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new es(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ga=class extends Ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Ql=class extends Ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ec=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ye);this._width=i.width,this._height=i.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wr(Er),this.copyPass.material.blending=In,this.timer=new Ma}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ga!==void 0&&(a instanceof Ga?i=!0:a instanceof Ql&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var tc=class extends Ei{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new fe}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}};var sp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ar=class s extends Ei{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new ye(e.x,e.y):new ye(256,256),this.clearColor=new fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,a,{type:Jt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ot(r,a,{type:Jt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Ot(r,a,{type:Jt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=sp;this.highPassUniforms=Dn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ye(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Dn.clone(Er.uniforms),this.blendMaterial=new Mt({uniforms:this.copyUniforms,vertexShader:Er.vertexShader,fragmentShader:Er.fragmentShader,premultipliedAlpha:!0,blending:ft,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new fe,this._oldClearAlpha=1,this._basic=new et,this._fsQuad=new es(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new ye(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let n=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),r.push(c)}return new Mt({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new ye(.5,.5)},direction:{value:new ye(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ar.BlurDirectionX=new ye(1,0);Ar.BlurDirectionY=new ye(0,1);var Va={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ic=class extends Ei{constructor(){super(),this.isOutputPass=!0,this.uniforms=Dn.clone(Va.uniforms),this.material=new ur({name:Va.name,uniforms:this.uniforms,vertexShader:Va.vertexShader,fragmentShader:Va.fragmentShader}),this._fsQuad=new es(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ge.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ba?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ta?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ea?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ts?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Aa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ra?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===wa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Rv="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",Cv=`
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
  }`,rp=`
  varying vec2 vUv;uniform float time,energy,fade;
  void main(){
    vec2 p=(vUv-.5)*2.;float r=length(p);
    float hot=exp(-r*r*32.);float aura=exp(-r*r*4.6);
    float cross=exp(-abs(p.y)*65.)*exp(-abs(p.x)*1.8)+exp(-abs(p.x)*90.)*exp(-abs(p.y)*5.);
    float ray=pow(abs(cos(atan(p.y,p.x)*3.+time*2.)),16.)*exp(-r*4.)*.23;
    vec3 rgb=vec3(3.3,4.7,5.4)*hot+vec3(.04,.7,1.65)*(aura*.65+ray)+vec3(.3,1.6,2.5)*cross*.7;
    gl_FragColor=vec4(rgb,clamp(hot+aura*.28+cross*.45+ray,0.,1.)*fade);
  }`,nc=class{constructor(e){this.root=new je,this.root.name="wave-cannon-effects",e.add(this.root),this.clock=0,this.flash=0,this.bolts=new Map,this.pool=[],this.muzzles=[],this.plane=new bi(1,1),this.sphere=new hi(1,20,12),this.ring=new Xt(1,.018,6,56),this.white=new et({color:new fe(3.2,4.5,5),transparent:!0,opacity:.9,blending:ft,depthWrite:!1,toneMapped:!1}),this.charge=new je,this.root.add(this.charge),this.chargeMaterial=this.shader(rp),this.chargeHalo=new se(this.plane,this.chargeMaterial),this.chargeHalo.scale.set(2.8,2.8,1),this.charge.add(this.chargeHalo),this.chargeCore=new se(this.sphere,this.white),this.charge.add(this.chargeCore),this.chargeRings=[];for(let t=0;t<3;t++){let i=new et({color:new fe(.15,.85,1.6),transparent:!0,opacity:.6,blending:ft,depthWrite:!1,toneMapped:!1}),n=new se(this.ring,i);this.charge.add(n),this.chargeRings.push(n)}this.moteGeometry=new hi(.035,6,4),this.motes=new ci(this.moteGeometry,new et({color:new fe(.35,1.3,2),transparent:!0,opacity:.7,blending:ft,depthWrite:!1,toneMapped:!1}),48),this.motes.instanceMatrix.setUsage(Nn),this.motes.frustumCulled=!1,this.charge.add(this.motes),this.matrixHelper=new it,this.chargeLight=new Zt(5160959,0,7,2),this.charge.add(this.chargeLight),this.flashLight=new Zt(7265535,0,15,2),this.root.add(this.flashLight);for(let t=0;t<4;t++){let i=new je,n=this.shader(rp),r=new se(this.plane,n);i.visible=!1,i.add(r);let a=[];for(let o=0;o<2;o++){let l=new se(this.ring,new et({color:new fe(.22,1.2,2.1),transparent:!0,opacity:0,blending:ft,depthWrite:!1,toneMapped:!1}));i.add(l),a.push(l)}this.root.add(i),this.muzzles.push({group:i,flare:r,material:n,rings:a,age:99,power:2})}}shader(e){return new Mt({vertexShader:Rv,fragmentShader:e,uniforms:{time:{value:0},energy:{value:1},fade:{value:1}},transparent:!0,blending:ft,depthWrite:!1,toneMapped:!1,side:gi})}acquireBolt(){let e=this.pool.find(t=>!t.userData.active);if(!e&&this.pool.length<8){e=new je;let t=this.shader(Cv),i=new se(this.plane,t),n=new se(this.plane,t);n.rotation.x=.55,n.position.z=-.08,e.add(i,n);let r=new se(this.sphere,this.white);r.scale.set(.55,.19,.19),e.add(r);let a=[];for(let o=0;o<3;o++){let l=new se(this.ring,new et({color:new fe(.1,.95,1.6),transparent:!0,opacity:.4,blending:ft,depthWrite:!1,toneMapped:!1}));e.add(l),a.push(l)}e.userData={material:t,body:i,volume:n,core:r,rings:a,active:!1},this.root.add(e),this.pool.push(e)}return e&&(e.userData.active=!0,e.visible=!0),e||null}fire(e){let t=this.muzzles.reduce((i,n)=>n.age>i.age?n:i,this.muzzles[0]);t.age=0,t.power=e.power||2,t.group.position.set(e.x+1,e.y,1.6),t.group.visible=!0,this.flash=Math.max(this.flash,.65+t.power*.18),this.flashLight.position.copy(t.group.position)}reset(){this.charge.visible=!1,this.chargeLight.intensity=0,this.flash=0,this.flashLight.intensity=0;for(let e of this.pool)e.visible=!1,e.userData.active=!1;this.bolts.clear();for(let e of this.muzzles)e.age=99,e.group.visible=!1}updateCharge(e,t){let i=e.charge||0;if(this.charge.visible=t&&i>.025,!this.charge.visible){this.chargeLight.intensity=0;return}this.charge.position.set(e.x+1,e.y,1.25);let n=i>.98?1+Math.sin(this.clock*32)*.06:1;this.chargeCore.scale.setScalar((.05+i*.25)*n),this.chargeHalo.scale.setScalar(.55+i*2.7),this.chargeMaterial.uniforms.time.value=this.clock,this.chargeMaterial.uniforms.energy.value=i,this.chargeMaterial.uniforms.fade.value=.3+i*.65,this.chargeLight.intensity=i*i*8,this.chargeRings.forEach((a,o)=>{a.rotation.set(Math.PI*.2+Math.sin(this.clock*1.7+o)*.55,this.clock*(o%2?2:-2)+o,Math.sin(this.clock*1.2+o)*.5),a.scale.setScalar((.85-i*.42+o*.11)*n),a.material.opacity=(.18+i*.5)*(o===2?.6:1),a.material.color.setRGB(.08+i*.25,.5+i*.65,1.2+i*.7)});let r=12+Math.floor(i*36);this.motes.count=r;for(let a=0;a<r;a++){let o=(a*.6180339+this.clock*(.35+i*.4))%1,l=a*2.39996+this.clock*(1+i*2),c=(1-o)*(.65+i*.9),h=this.matrixHelper;h.position.set(Math.cos(l)*c,Math.sin(l)*c,Math.sin(l*1.7)*c*.35),h.scale.setScalar(.2+o*1.5),h.updateMatrix(),this.motes.setMatrixAt(a,h.matrix)}this.motes.instanceMatrix.needsUpdate=!0}update(e,t){if(!e){this.root.visible=!1,this.reset();return}this.root.visible=!0,e.paused||(this.clock+=t),this.updateCharge(e.player,e.mode==="playing"&&!e.paused&&e.player.fireWas);let i=new Set;if(e.mode==="playing")for(let n of e.shots){if(n.type!=="wave")continue;i.add(n.id);let r=this.bolts.get(n.id);if(!r){if(r=this.acquireBolt(),!r)continue;this.bolts.set(n.id,r)}let a=nt(n.power/2,.25,1),o=3.5+a*2.8,l=.65+a*.65,c=r.userData;r.position.set(n.x,n.y,1.4),c.material.uniforms.time.value=this.clock,c.material.uniforms.energy.value=a,c.material.uniforms.fade.value=nt((n.life-n.age)*6,0,1);for(let h of[c.body,c.volume])h.scale.set(o,l,1),h.position.x=-o*.32;c.core.scale.set(.32+a*.32,.12+a*.1,.12+a*.1),c.rings.forEach((h,u)=>{let d=(n.age*2.9+u*.29)%1;h.position.set(-.4-d*2.5,0,0),h.rotation.set(.15,1+Math.sin(this.clock*4+u)*.12,this.clock*.5),h.scale.setScalar((.25+a*.35)*(1+d*.4)),h.material.opacity=(1-d)*.4})}for(let[n,r]of this.bolts)i.has(n)||(r.visible=!1,r.userData.active=!1,this.bolts.delete(n));this.flash=Math.max(0,this.flash-t*5),this.flashLight.intensity=this.flash*this.flash*65;for(let n of this.muzzles){if(n.age+=t,n.group.visible=n.age<.65,!n.group.visible)continue;let r=nt(n.power/2,.25,1),a=Math.exp(-n.age*13);n.flare.scale.set((3.8+r*4.2)*(1+n.age),2.1+r*2.7,1),n.material.uniforms.fade.value=a,n.material.uniforms.time.value=this.clock,n.rings.forEach((o,l)=>{let c=Math.max(0,n.age-l*.035),h=.12+c*(5+r*3);o.rotation.set(0,l===0?1.05:0,n.age*.4),o.scale.setScalar(h),o.material.opacity=Math.exp(-c*7)*(l===0?.9:.35)})}}};var Iv="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",ap=`
  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+1.),f.x),f.y);}
  float fbm(vec2 p){return noise(p)*.57+noise(p*2.1+3.7)*.28+noise(p*4.3+8.2)*.15;}
`,Pv=`
  varying vec2 vUv;uniform float age,seed;${ap}
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
  }`,Lv=`
  varying vec2 vUv;uniform float age,seed;${ap}
  void main(){
    vec2 p=(vUv-.5)*2.;float n=fbm(p*3.2-vec2(age*.12,age*.65)+seed);
    float shape=1.-smoothstep(.45,.98,length(p)+(n-.5)*.45);
    float opacity=smoothstep(.08,.32,age)*(1.-smoothstep(.55,1.75,age));
    vec3 shade=mix(vec3(.035,.04,.045),vec3(.19,.20,.21),n);
    shade+=vec3(.22,.065,.008)*exp(-age*4.5)*(1.-length(p)*.6);
    gl_FragColor=vec4(shade,shape*opacity*.72);
  }`,Nv=`
  varying vec2 vUv;uniform float age;uniform vec3 tint;
  void main(){
    vec2 p=(vUv-.5)*2.;float r=length(p),a=atan(p.y,p.x);
    float core=exp(-r*r*43.);float rays=pow(abs(cos(a*3.+.35)),18.)*exp(-r*3.6);
    float glow=exp(-r*r*5.);float fade=exp(-age*19.);
    gl_FragColor=vec4(vec3(3.3,2.7,1.6)*core+tint*(rays+glow*.45),clamp(core+rays+glow*.3,0.,1.)*fade);
  }`,sc=class{constructor(e){this.root=new je,this.root.name="combat-effects",e.add(this.root),this.clock=0,this.blasts=[],this.impacts=[],this.fragments=[],this.hitFlashes=new Map,this.plane=new bi(1,1),this.ring=new Xt(1,.018,6,48),this.helper=new it,this.color=new fe,this.fragmentMesh=new ci(new Yi(.09,0),new gt({color:16777215,metalness:.7,roughness:.4,emissive:2691074,emissiveIntensity:.6}),768),this.fragmentMesh.count=0,this.fragmentMesh.frustumCulled=!1,this.fragmentMesh.instanceMatrix.setUsage(Nn),this.root.add(this.fragmentMesh),this.light=new Zt(16746283,0,12,2),this.root.add(this.light)}material(e,t=!0){return new Mt({vertexShader:Iv,fragmentShader:e,uniforms:{age:{value:0},seed:{value:0},tint:{value:new fe(1.6,.65,.12)}},transparent:!0,blending:t?ft:sn,depthWrite:!1,toneMapped:!1})}acquireBlast(){let e=this.blasts.find(t=>!t.active);if(!e&&this.blasts.length<48){let t=new je,i=this.material(Pv),n=this.material(Lv,!1),r=new se(this.plane,i),a=new se(this.plane,n);a.position.z=-.08,t.add(a,r);let o=new se(this.ring,new et({color:new fe(1.7,.65,.13),transparent:!0,blending:ft,depthWrite:!1,toneMapped:!1}));t.add(o),this.root.add(t),e={group:t,fire:r,smoke:a,ring:o,fireMaterial:i,smokeMaterial:n,active:!1,age:0},this.blasts.push(e)}return e||this.blasts.reduce((t,i)=>i.age>t.age?i:t,this.blasts[0])}explode(e,t=!1){let i=nt(e.size||(t?3.1:.8),.4,4),n=t?6:1;for(let a=0;a<n;a++){let o=this.acquireBlast(),l=a*2.39996;o.active=!0,o.age=-a*.075,o.size=a===0?i:i*.46,o.vx=(e.vx||0)*.36,o.seed=Math.random()*60,o.group.position.set(e.x+Math.cos(l)*(a===0?0:i*.72),e.y+Math.sin(l)*(a===0?0:i*.7),1.5),o.group.visible=a===0}let r=t?85:i>1?22:16;for(let a=0;a<r&&this.fragments.length<768;a++){let o=Math.random()*Math.PI*2,l=(1.4+Math.random()*5.2)*Math.sqrt(i);this.fragments.push({x:e.x,y:e.y,z:.7,vx:Math.cos(o)*l+(e.vx||0)*.4,vy:Math.sin(o)*l,vz:(Math.random()-.5)*3,age:0,life:.65+Math.random()*.9,size:.45+Math.random()*1.2,spin:Math.random()*8+2})}}hit(e){Number.isFinite(e.enemyId)&&this.hitFlashes.set(e.enemyId,this.clock+.15);let t=this.impacts.find(i=>!i.active);if(!t&&this.impacts.length<32){let i=this.material(Nv),n=new se(this.plane,i);this.root.add(n),t={mesh:n,material:i,age:0,active:!1},this.impacts.push(t)}t||(t=this.impacts.reduce((i,n)=>n.age>i.age?n:i,this.impacts[0])),t.age=0,t.active=!0,t.mesh.visible=!0,t.mesh.position.set(e.x-.18,e.y,1.65),t.mesh.scale.setScalar(e.weapon==="wave"?1.3:.85),t.material.uniforms.tint.value.set(e.weapon==="wave"||e.weapon==="reflect"?6672383:16755781).multiplyScalar(2)}flashStrength(e){return nt(((this.hitFlashes.get(e)||0)-this.clock)/.15,0,1)}reset(){for(let e of this.blasts)e.active=!1,e.group.visible=!1;for(let e of this.impacts)e.active=!1,e.mesh.visible=!1;this.fragments=[],this.fragmentMesh.count=0,this.hitFlashes.clear(),this.light.intensity=0}update(e,t){if(this.root.visible=!!e,!e){this.reset();return}let i=e.paused?0:t;this.clock+=i;let n=0;for(let a of this.blasts){if(!a.active)continue;a.age+=i;let o=a.age;if(o<0){a.group.visible=!1;continue}if(o>1.85){a.active=!1,a.group.visible=!1;continue}a.group.visible=!0,a.group.position.x+=a.vx*i;let l=a.size*2.8,c=.43+(1-Math.exp(-o*8))*.72;a.fire.scale.setScalar(l*c),a.fireMaterial.uniforms.age.value=o,a.fireMaterial.uniforms.seed.value=a.seed,a.smoke.scale.setScalar(l*(.55+o*.65)),a.smoke.position.y=o*.4,a.smokeMaterial.uniforms.age.value=o,a.smokeMaterial.uniforms.seed.value=a.seed+12,a.ring.scale.setScalar((.18+o*4.2)*a.size),a.ring.material.opacity=Math.exp(-o*9)*.85,a.ring.visible=o<.55;let h=Math.exp(-o*15)*a.size*36;h>n&&(n=h,this.light.position.copy(a.group.position))}this.light.intensity=n;for(let a of this.impacts)a.active&&(a.age+=i,a.material.uniforms.age.value=a.age,a.age>.22&&(a.active=!1,a.mesh.visible=!1));for(let[a,o]of this.hitFlashes)o<=this.clock&&this.hitFlashes.delete(a);this.fragments=this.fragments.filter(a=>a.age<a.life);let r=0;for(let a of this.fragments){a.age+=i,a.x+=a.vx*i,a.y+=a.vy*i,a.z+=a.vz*i,a.vy-=i*2.5,a.vx*=1-i*.6;let o=nt((a.life-a.age)*3,0,1),l=Math.exp(-a.age*5);this.helper.position.set(a.x,a.y,a.z),this.helper.rotation.set(a.age*a.spin,a.age*a.spin*.8,a.age*a.spin*.6),this.helper.scale.set(a.size*o,a.size*.42*o,a.size*.6*o),this.helper.updateMatrix(),this.fragmentMesh.setMatrixAt(r,this.helper.matrix),this.color.setRGB(.17+l*2,.21+l*.75,.25+l*.1),this.fragmentMesh.setColorAt(r,this.color),r++}this.fragmentMesh.count=r,this.fragmentMesh.instanceMatrix.needsUpdate=!0,r&&(this.fragmentMesh.instanceColor.needsUpdate=!0)}};var Dv=new D(0,0,1),op=new li,Uv=new fe(16773333),Ov="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",Fv=`varying vec2 vUv;uniform float time;uniform vec3 tint;
  void main(){float y=abs(vUv.y-.5)*2.;float envelope=pow(max(0.,1.-y*y),2.2);
    float ribbons=pow(.5+.5*sin(vUv.x*92.-time*37.+sin(vUv.x*27.+time*6.)*2.+vUv.y*16.),5.);
    float flow=.75+.18*sin(vUv.x*130.-time*52.)+.14*ribbons;
    float filament=pow(max(0.,1.-y),9.);vec3 c=tint*(.85+ribbons*.65)+vec3(1.8,2.,2.2)*filament;
    gl_FragColor=vec4(c,envelope*flow);}`,rc=class{constructor(e,t,i){this.world=e,this.model=t,this.stage=i.stage,this.profile=Pi[this.stage],this.resources=new Set,this.joints=new Map,this.materialCopies=new Map,this.rotorAngle=0,this.group=new je,this.group.name="boss-encounter-"+i.type,this.group.add(t),e.add(this.group),t.traverse(n=>{let r=n.name.indexOf("__");if(r>=0&&this.joints.set(n.name.slice(r+2),{o:n,position:n.position.clone(),quaternion:n.quaternion.clone(),scale:n.scale.clone()}),n.isMesh){let a=o=>{if(!this.materialCopies.has(o)){let l=this.own(o.clone());l.userData.bossBase={color:l.color?.clone(),emissive:l.emissive?.clone(),intensity:l.emissiveIntensity||0},this.materialCopies.set(o,l)}return this.materialCopies.get(o)};n.material=Array.isArray(n.material)?n.material.map(a):a(n.material)}}),this.sphere=this.own(new hi(1,24,16)),this.box=this.own(new Si(1,1,1)),this.ringGeometry=this.own(new Xt(1,.027,6,64)),this.plane=this.own(new bi(1,1)),this.makeCore(i),this.makeParts(i),this.makeBeams(),this.update(i,0)}own(e){return this.resources.add(e),e}glow(e,t=1){return this.own(new et({color:new fe(e).multiplyScalar(1.5),transparent:t<1,opacity:t,depthWrite:t>=1,blending:t<1?ft:sn,toneMapped:!1}))}metal(e,t=.4){return this.own(new gt({color:e,metalness:.78,roughness:t}))}makeCore(e){this.coreGroup=new je,this.coreGroup.position.set(e.weakX,e.weakY,1.5),this.group.add(this.coreGroup),this.coreMaterial=this.own(new gt({color:16766372,emissive:this.profile.color,emissiveIntensity:1.8,metalness:.38,roughness:.2}));let t=new Uint8Array(16384*4);for(let o=0;o<128;o++)for(let l=0;l<128;l++){let c=l/128*Math.PI*2,h=o/128*Math.PI*2,u=Math.sin(c*7+Math.sin(h*5)*1.5)+Math.cos(h*7+Math.sin(c*3)*2),d=60+195*Math.exp(-Math.abs(u)*3),f=(o*128+l)*4;t.set([d,d,d,255],f)}let i=this.own(new Xn(t,128,128));i.colorSpace=yt,i.wrapS=i.wrapT=Oi,i.magFilter=Et,i.minFilter=Et,i.needsUpdate=!0,this.coreMaterial.emissiveMap=i,this.core=new se(this.sphere,this.coreMaterial),this.core.scale.set(.62,.71,.48),this.coreGroup.add(this.core);let n=new se(this.own(new da(.43,.07,80,8,2,3)),this.metal(this.stage%2?5456220:4480102));this.coreGroup.add(n),this.coil=n,this.coreRings=[];for(let o=0;o<2;o++){let l=new se(this.ringGeometry,this.glow(this.profile.color,.65));l.scale.setScalar(.85+o*.18),l.rotation.x=o*.38,this.coreGroup.add(l),this.coreRings.push(l)}if(this.shield=new se(this.sphere,this.own(new Kt({color:this.profile.color,emissive:this.profile.color,emissiveIntensity:.5,metalness:.3,roughness:.2,transparent:!0,opacity:.17,depthWrite:!1,side:Fi}))),this.shield.scale.set(1.08,1.18,.38),this.shield.position.z=.25,this.coreGroup.add(this.shield),this.stage===5){let o=this.own(new et({color:9546495,transparent:!0,opacity:.08,wireframe:!0,depthWrite:!1,blending:ft}));this.neuralShield=new se(this.own(new Yi(1,2)),o),this.neuralShield.scale.set(2.8,3.15,1.7),this.neuralShield.position.set(.15,0,.5),this.group.add(this.neuralShield)}this.coreLight=new Zt(this.profile.color,14,7,2),this.coreLight.position.z=2,this.coreGroup.add(this.coreLight);let r=this.own(new Kn(.13,.34,5)),a=this.metal(6844535);for(let o=0;o<8;o++){let l=o*Math.PI/4,c=new se(r,a);c.position.set(Math.cos(l)*.96,Math.sin(l)*.96,.08),c.rotation.z=l-Math.PI/2,this.coreGroup.add(c)}}makeParts(e){this.parts=[];let t=this.metal(1252388),i=this.metal(526603,.98),n=this.glow(8773613),r=this.glow(1713968);for(let a of e.parts){let o=new je;this.group.add(o);let l=new se(this.sphere,t);l.scale.set(.51,.55,.28),o.add(l);let c=this.own(new gt({color:14210988,emissive:this.profile.color,emissiveIntensity:1.2,metalness:.4,roughness:.26})),h=new se(this.sphere,c);h.scale.set(.27,.31,.2),h.position.z=.24,o.add(h);let u=new se(this.ringGeometry,this.glow(this.profile.color,.8));u.scale.setScalar(.4),u.position.z=.32,o.add(u);let d=new se(this.box,r);d.position.set(0,-.7,.31),d.scale.set(.86,.05,.02),o.add(d);let f=new se(this.box,n);f.position.set(0,-.7,.33),f.scale.set(.86,.05,.02),o.add(f);let g=new se(this.sphere,i);g.scale.set(.36,.4,.2),g.position.z=.27,g.visible=!1,o.add(g),this.parts.push({group:o,target:h,ring:u,bar:f,background:d,scar:g,material:c,id:a.id})}}makeBeams(){this.beams=[];for(let e=0;e<6;e++){let t=new je;this.world.add(t),t.visible=!1;let i=new se(this.plane,this.glow(16738630,.1)),n=new se(this.plane,this.glow(16751721,.7)),r=this.own(new Mt({uniforms:{time:{value:0},tint:{value:new fe(this.stage===6?7533020:this.stage===2?7457535:16743222)}},vertexShader:Ov,fragmentShader:Fv,transparent:!0,depthWrite:!1,blending:ft,toneMapped:!1})),a=new se(this.plane,r);t.add(i,n,a),this.beams.push({group:t,zone:i,line:n,hot:a})}this.lunge=new se(this.box,this.glow(16752741,.1)),this.world.add(this.lunge),this.lunge.visible=!1}joint(e,t=0,i=0){let n=this.joints.get(e);n&&(n.o.position.copy(n.position),n.o.position.y+=i,op.setFromAxisAngle(Dv,t),n.o.quaternion.copy(n.quaternion).premultiply(op))}animate(e,t){let i=e.age,n=e.openness,r=["bite-warn","sweep-warn"].includes(e.state);if(this.model.rotation.y=Math.sin(i*.6)*.025,(this.stage===0||this.stage===2)&&(this.joint("shell_top",-n*.65,n*.4),this.joint("shell_bottom",n*.65,-n*.4)),this.stage===1||this.stage===4){let a=r?.9:e.state==="bite"||e.state==="sweep"?.1:n;this.joint("jaw_top",-a*.47,a*.2),this.joint("jaw_bottom",a*.58,-a*.24)}if(this.stage===3&&(this.joint("shell_top",-n*.17,n*1.15),this.joint("shell_bottom",n*.17,-n*1.15)),this.stage===5)for(let a=0;a<7;a++)this.joint("tentacle_"+a,Math.sin(i*1.45+a*.83)*(.08+n*.06));if(this.stage===6&&(this.rotorAngle+=t*(1-n)*(e.phase?1.5:.9),this.joint("rotor",this.rotorAngle)),this.stage===7){let a=Math.pow(Math.max(0,Math.sin(i*(e.phase?6.8:5.1))),6);this.model.scale.setScalar(1+a*.025),this.joint("shell_top",-n*.48,n*.64),this.joint("shell_bottom",n*.48,-n*.64),this.core.scale.set(.62*(1+a*.17),.71*(1+a*.11),.48)}(this.stage===0||this.stage===2||this.stage===3)&&(this.joint("cannon_top",Math.sin(i*.75)*.06),this.joint("cannon_bottom",-Math.sin(i*.75)*.06)),this.stage===2&&this.joint("main_cannon",e.aimAngle||0)}update(e,t){this.group.position.set(e.x,e.y,-.1),this.animate(e,t);let i=1+Math.sin(e.age*7)*.04;this.stage!==7&&this.core.scale.set(.62*i,.71*i,.48),this.coreMaterial.emissiveIntensity=e.flash>0?6:e.open?1.8:.35,this.core.rotation.y=e.age*.25,this.coreLight.intensity=e.flash>0?30:e.open?18:3,this.coil.rotation.set(e.age*.45,e.age*.31,e.age*.2),this.coreRings.forEach((n,r)=>{n.rotation.y=e.age*(r?-.5:.4),n.rotation.z=e.age*(r?.3:-.6),n.material.opacity=e.open?.8:.23}),this.shield.visible=!e.open,this.shield.material.opacity=.13+Math.sin(e.age*5)*.035,this.neuralShield&&(this.neuralShield.visible=!e.open,this.neuralShield.rotation.y=Math.sin(e.age*.3)*.15);for(let n of this.materialCopies.values()){let r=n.userData.bossBase;r.color&&n.color.copy(r.color).lerp(Uv,e.flash>0?.5:0),r.emissive&&(n.emissive.copy(r.emissive),n.emissiveIntensity=r.intensity*(e.phase?1.4:1)+(e.flash>0?.4:0))}for(let n=0;n<this.parts.length;n++){let r=this.parts[n],a=e.parts[n],o=Ii(e,a),l=a.hp>0,c=Math.max(0,a.hp/a.maxHp);r.group.position.set(o.x-e.x,o.y-e.y,2),r.target.visible=l,r.ring.visible=l,r.bar.visible=l,r.background.visible=l,r.scar.visible=!l,r.material.emissiveIntensity=.85+Math.sin(e.age*5+n)*.25+(c<.3?.8:0),r.ring.rotation.z=e.age*.6,r.bar.scale.x=.86*c,r.bar.position.x=-.43*(1-c);let h=this.joints.get("part_"+a.id);if(h&&(h.o.visible=l,e.stage===5&&(h.o.position.y=h.position.y+(o.y-e.y-a.oy))),["top","bottom"].includes(a.id)&&[0,2,3].includes(this.stage)){let u=this.joints.get("cannon_"+a.id);u&&(u.o.visible=l)}}if(this.beams.forEach((n,r)=>{let a=e.hazards[r];if(n.group.visible=!!a,!a)return;let o=a.x2-a.x1,l=a.y2-a.y1,c=Math.hypot(o,l),h=a.age>=a.warn;n.line.material.color.set(h?this.stage===6?7533020:this.stage===2?9426431:16747333:16751721).multiplyScalar(1.5),n.group.position.set((a.x1+a.x2)/2,(a.y1+a.y2)/2,2.5),n.group.rotation.z=Math.atan2(l,o),n.zone.scale.set(c,a.r*2,.025),n.zone.material.opacity=h?.32:.06+Math.sin(e.age*14)*.025,n.line.scale.set(c,.026,.04),n.line.material.opacity=.5+Math.sin(e.age*18)*.25,n.line.visible=!h,n.hot.scale.set(c,a.r*2.8,.05),n.hot.visible=h,n.hot.material.uniforms.time.value=e.age}),this.lunge.visible=["bite-warn","sweep-warn"].includes(e.state),this.lunge.visible){let n=e.stage===1?19:12;this.lunge.position.set(e.x-n/2,e.targetY,1.2),this.lunge.scale.set(n,1.6,.025),this.lunge.material.opacity=.07+Math.sin(e.age*18)*.035}}dispose(){this.world.remove(this.group,this.lunge);for(let e of this.beams)this.world.remove(e.group);for(let e of this.resources)e.dispose();this.resources.clear(),this.materialCopies.clear(),this.joints.clear()}};var si=new it,du=new fe,Jb=new D,Bv={uniforms:{tDiffuse:{value:null},time:{value:0},impact:{value:0},drive:{value:0},crt:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float time,impact,drive,crt;varying vec2 vUv;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    void main(){vec2 uv=vUv;vec2 c=uv-.5;float dist=length(c);uv+=normalize(c+.001)*sin(dist*36.-time*22.)*impact*.002;
      float ab=.00035+impact*.0015+drive*.0008;vec3 color=vec3(texture2D(tDiffuse,uv+vec2(ab,0.)).r,texture2D(tDiffuse,uv).g,texture2D(tDiffuse,uv-vec2(ab,0.)).b);
      color*=1.-smoothstep(.34,.77,dist)*.34; color+= (hash(uv+fract(time))-.5)*.006;
      color=mix(color,vec3(color.r*.75,color.g*.98,color.b*1.17),drive*.27);
      if(crt>.5){color*=.91+.09*sin(uv.y*950.);color*=vec3(.98,1.,.98);}
      gl_FragColor=vec4(color,1.);
    }`},ac=class{constructor(e,t={}){this.canvas=e,this.settings=t,this.time=0,this.stage=-1,this.lastScroll=0,this.shake=0,this.impact=0,this.particles=[],this.enemyMeshes=new Map,this.itemMeshes=new Map,this.quality=t.quality||"high",this.webgl=new Xl({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.webgl.info.autoReset=!1,this.drawCalls=0;let i=this.webgl.getContext(),n=i.getExtension("WEBGL_debug_renderer_info");this.gpu=n?i.getParameter(n.UNMASKED_RENDERER_WEBGL):"WebGL 2",this.webgl.setClearColor(198412),this.webgl.toneMapping=Ts,this.webgl.toneMappingExposure=.94,this.scene=new gs,this.scene.background=new fe(198412),this.scene.fog=new ea(528923,.016),this.camera=new Dt(31.5,16/9,.1,200),this.camera.position.set(0,0,34),this.camera.lookAt(0,0,0),this.world=new je,this.scene.add(this.world),this.ambient=new xa(11917799,1384490,.8),this.scene.add(this.ambient),this.key=new Jn(16115151,2.3),this.key.position.set(-7,12,17),this.scene.add(this.key),this.rim=new Jn(4492497,2.1),this.rim.position.set(3,-4,-8),this.scene.add(this.rim),this.fill=new Zt(16739368,70,32,2),this.fill.position.set(7,3,8),this.scene.add(this.fill);let r=new Mr(this.webgl),a=new jl;this.env=r.fromScene(a,.06),this.scene.environment=this.env.texture,this.scene.environmentIntensity=.6,a.dispose(),r.dispose(),this.composer=new ec(this.webgl),this.composer.addPass(new tc(this.scene,this.camera)),this.bloom=new Ar(new ye(1280,720),.3,.45,3.2),this.composer.addPass(this.bloom),this.grade=new wr(Bv),this.composer.addPass(this.grade),this.composer.addPass(new ic),this.geometry={sphere:new hi(1,16,12),box:new Si(1,1,1),ico:new Yi(1,0),torus:new Xt(1,.045,8,48)},this.materials={steel:new gt({color:1911347,metalness:.86,roughness:.43}),edge:new gt({color:4804954,metalness:.84,roughness:.33}),dark:new gt({color:593427,metalness:.65,roughness:.5}),flesh:new gt({color:2495003,metalness:.32,roughness:.4}),bone:new gt({color:7563607,metalness:.37,roughness:.46}),glow:new et({color:16736028,toneMapped:!1}),cyan:new et({color:new fe(2729959).multiplyScalar(2),toneMapped:!1}),distant:new gt({color:529437,metalness:.5,roughness:.75})},this.makeSurfaceTextures(),this.makeStars(),this.makeParticleSystem(),this.makeProjectiles(),this.makeForce(),this.waveFX=new nc(this.world),this.combatFX=new sc(this.world),this.playerGroup=new je,this.world.add(this.playerGroup),this.heroGroup=new je,this.scene.add(this.heroGroup),this.heroAngle=0,this.makeExhaust(this.playerGroup),this.makeExhaust(this.heroGroup),this.resize(),window.addEventListener("resize",()=>this.resize()),this.contextLost=!1,e.addEventListener("webglcontextlost",o=>{o.preventDefault(),this.contextLost=!0,window.dispatchEvent(new CustomEvent("renderer-lost"))}),e.addEventListener("webglcontextrestored",()=>location.reload())}async load(e=()=>{}){let t=new Kl,i=[0,0],n=(o,l)=>{i[o]=l.total?l.loaded/l.total:.5,e(i[0]*.4+i[1]*.6)},[r,a]=await Promise.all([t.loadAsync(new URL("models/requiem.glb",document.baseURI).href,o=>n(0,o)),t.loadAsync(new URL("models/bosses.glb",document.baseURI).href,o=>n(1,o))]);this.templates={};for(let o of["r9","scout","interceptor","carrier","turret","organism","sentinel","leviathan","dreadnought"]){let l=r.scene.getObjectByName(o);if(!l)throw new Error("Missing Blender asset: "+o);this.templates[o]=l,l.traverse(c=>{c.isMesh&&(c.castShadow=!1,c.receiveShadow=!1,c.frustumCulled=!0)})}for(let o of Pi){let l="boss_"+o.id,c=a.scene.getObjectByName(l);if(!c)throw new Error("Missing Blender boss: "+l);this.templates[l]=c}this.templates.leviathan.traverse(o=>{if(o.isMesh)for(let l of Array.isArray(o.material)?o.material:[o.material])l.name==="Alien muscular tissue"&&this.materials.flesh.copy(l),l.name==="Calcified exoskeleton"&&this.materials.bone.copy(l)}),this.ship=this.clone("r9"),this.ship.scale.setScalar(.49),this.playerGroup.add(this.ship),this.hero=this.clone("r9"),this.hero.scale.setScalar(2.05),this.heroGroup.add(this.hero),this.makeBits(),e(1)}clone(e){let t=this.templates[e].clone(!0);return t.position.set(0,0,0),t}resize(){let e=window.innerWidth,t=window.innerHeight;this.portrait=e/t<1.25;let i=this.portrait?e*9/16:t;this.canvas.style.height=i+"px",this.canvas.style.top=this.portrait?(t-i)/2+"px":"0px";let n=this.quality==="ultra"?2560:this.quality==="high"?1920:this.quality==="low"?1e3:1440,r=Math.min(devicePixelRatio,this.quality==="ultra"?1.7:this.quality==="high"?1.25:this.quality==="low"?.7:1,n/e);this.webgl.setPixelRatio(r),this.webgl.setSize(e,i,!1),this.composer.setPixelRatio(r),this.composer.setSize(e,i),this.camera.aspect=e/i,this.camera.fov=this.camera.aspect<16/9?2*Math.atan(17/this.camera.aspect/34)*180/Math.PI:31.5,this.camera.updateProjectionMatrix(),this.bloom.enabled=this.quality!=="low"}makeStars(){let e=os(3456),t=[],i=[];for(let c=0;c<1600;c++){t.push((e()-.5)*180,(e()-.5)*90,-10-e()*110);let h=.3+e()*.7;i.push(h*.75,h*.86,h)}let n=new xt;n.setAttribute("position",new Qe(t,3)),n.setAttribute("color",new Qe(i,3)),this.stars=new Ms(n,new Yn({size:.1,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.8,depthWrite:!1})),this.scene.add(this.stars);let r=document.createElement("canvas");r.width=1024,r.height=512;let a=r.getContext("2d");a.fillStyle="#020711",a.fillRect(0,0,1024,512);for(let c=0;c<35;c++){let h=e()*1024,u=e()*512,d=60+e()*240,f=a.createRadialGradient(h,u,0,h,u,d);f.addColorStop(0,c%3===0?"rgba(56,39,71,.11)":"rgba(18,73,91,.14)"),f.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=f,a.fillRect(0,0,1024,512)}let o=new $n(r);o.colorSpace=yt,this.nebula=new se(new bi(190,95),new et({map:o,depthWrite:!1})),this.nebula.position.z=-100,this.scene.add(this.nebula),this.planet=new se(new hi(11,48,32),new gt({color:2504009,roughness:.86,metalness:.1})),this.planet.position.set(25,-5,-45),this.scene.add(this.planet);let l=new se(new hi(11.25,32,24),new et({color:4361146,transparent:!0,opacity:.07,side:Ft,blending:ft,depthWrite:!1}));this.planet.add(l)}makeSurfaceTextures(){let e=os(4921),t=document.createElement("canvas");t.width=1024,t.height=1024;let i=t.getContext("2d");i.fillStyle="#78858b",i.fillRect(0,0,1024,1024);for(let r=0;r<1024;r+=128)for(let a=0;a<1024;a+=256){let o=Math.floor(98+e()*38);i.fillStyle=`rgb(${o},${o+10},${o+15})`,i.fillRect(a+3,r+3,250,122),i.strokeStyle="#2b383f",i.lineWidth=3,i.strokeRect(a+3,r+3,250,122),i.strokeStyle="#bac6c8",i.lineWidth=1,i.strokeRect(a+6,r+6,244,116);for(let l of[13,241])for(let c of[13,113])i.fillStyle="#35464f",i.beginPath(),i.arc(a+l,r+c,3,0,Math.PI*2),i.fill(),i.fillStyle="#acb5b5",i.fillRect(a+l-1,r+c-1,2,1);if(e()>.55){i.fillStyle="#39474e";for(let l=0;l<8;l++)i.fillRect(a+85+l*8,r+45,4,30)}e()>.75&&(i.fillStyle="#b5a47c",i.fillRect(a+20,r+80,30,5),i.font="7px monospace",i.fillText("R9 / 0"+Math.floor(e()*10),a+20,r+95))}for(let r=0;r<1800;r++){let a=e()*1024,o=e()*1024;i.strokeStyle=e()>.5?"#ffffff10":"#00000018",i.lineWidth=1,i.beginPath(),i.moveTo(a,o),i.lineTo(a+e()*23,o+e()*4),i.stroke()}let n=new $n(t);n.colorSpace=yt,n.wrapS=n.wrapT=Oi,n.repeat.set(2,1),n.anisotropy=4,this.materials.steel.map=n,this.materials.steel.color.set(5334901),this.materials.steel.bumpMap=n,this.materials.steel.bumpScale=.065,this.materials.edge.map=n,this.materials.edge.color.set(6386812),this.materials.edge.bumpMap=n,this.materials.edge.bumpScale=.035}makeParticleSystem(){this.particleMesh=new ci(new Yi(.08,0),new et({transparent:!0,opacity:.86,blending:ft,depthWrite:!1,toneMapped:!1}),1100),this.particleMesh.instanceMatrix.setUsage(Nn),this.particleMesh.frustumCulled=!1,this.particleMesh.count=0,this.scene.add(this.particleMesh)}makeProjectiles(){this.projectileMesh=new ci(new hi(1,8,6),new et({toneMapped:!1}),850),this.projectileMesh.instanceMatrix.setUsage(Nn),this.projectileMesh.frustumCulled=!1,this.projectileMesh.count=0,this.scene.add(this.projectileMesh),this.trailMesh=new ci(new hi(1,8,6),new et({transparent:!0,opacity:.3,blending:ft,depthWrite:!1,toneMapped:!1}),850),this.trailMesh.instanceMatrix.setUsage(Nn),this.trailMesh.frustumCulled=!1,this.trailMesh.count=0,this.scene.add(this.trailMesh)}makeForce(){this.forceGroup=new je,this.world.add(this.forceGroup);let e=new gt({color:16738832,emissive:16731139,emissiveIntensity:2.2,metalness:.5,roughness:.18});this.forceCore=new se(new hi(.44,24,16),e),this.forceGroup.add(this.forceCore),this.forceRings=[];for(let a=0;a<3;a++){let o=new se(new Xt(.59+a*.04,.04,8,40),this.materials.edge);o.rotation.set(a*.7,a*1.1,.4),this.forceGroup.add(o),this.forceRings.push(o);for(let l=0;l<3;l++){let c=new se(new Si(.24,.11,.1),this.materials.edge);c.position.set(Math.cos(l*Math.PI*2/3)*.65,Math.sin(l*Math.PI*2/3)*.65,0),o.add(c)}}let t=document.createElement("canvas");t.width=128,t.height=128;let i=t.getContext("2d"),n=i.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255,149,36,.6)"),n.addColorStop(.2,"rgba(255,92,8,.23)"),n.addColorStop(1,"rgba(255,52,0,0)"),i.fillStyle=n,i.fillRect(0,0,128,128),this.glowTexture=new $n(t);let r=new or(new _s({map:this.glowTexture,transparent:!0,blending:ft,depthWrite:!1,toneMapped:!1}));r.scale.set(3.5,3.5,1),this.forceGroup.add(r),this.forceLight=new Zt(16735765,11,5,2),this.forceGroup.add(this.forceLight)}makeExhaust(e){let t=new se(new Kn(.22,1.7,16),new et({color:3320569,transparent:!0,opacity:.5,blending:ft,depthWrite:!1,toneMapped:!1}));t.rotation.z=Math.PI/2,t.position.x=-1.5,e.add(t);let i=new se(new Kn(.09,1,12),new et({color:new fe(2,4,6),transparent:!0,opacity:.8,blending:ft,depthWrite:!1,toneMapped:!1}));i.rotation.z=Math.PI/2,i.position.x=-1.15,e.add(i),e.userData.exhaust=[t,i]}makeBits(){this.bits=[];for(let e=0;e<2;e++){let t=new je,i=new se(new Yi(.2,1),this.materials.edge),n=new se(new Xt(.23,.028,6,24),this.materials.cyan);t.add(i,n),this.world.add(t),this.bits.push(t)}}setStage(e){for(let r of this.obstacleMeshes||[])this.world.remove(r);this.scenery&&(this.scene.remove(this.scenery),this.scenery.traverse(r=>{r.userData.ownGeometry&&r.geometry.dispose()})),this.stage=e,this.lastScroll=-99,this.scenery=new je,this.scene.add(this.scenery),this.decor=[],this.obstacleMeshes=[];let t=wt[e],i=["organic","neural","heart","bones"].includes(t.theme),n=os(300+e);this.scene.background.set(t.bg),this.scene.fog.color.set(t.fog),this.rim.color.set(t.color),this.planet.material.color.set(t.color).multiplyScalar(.17),this.planet.visible=!i,this.stars.material.opacity=i?.2:.8,this.wallMaterial=i?this.materials.flesh:this.materials.steel,this.wallMeshes=[];for(let r of[-1,1]){let a=new xt,o=new Float32Array(260*3),l=[];for(let h=0;h<64;h++)for(let[u,d,f,g]of[[0,1,5,4],[0,4,6,2],[1,3,7,5]]){let _=h*4;l.push(_+u,_+d,_+f,_+u,_+f,_+g)}a.setAttribute("position",new Pt(o,3)),a.setIndex(l),a.setAttribute("uv",new Pt(new Float32Array(260*2),2));let c=new se(a,this.wallMaterial);c.userData.ownGeometry=!0,c.userData.side=r,c.frustumCulled=!1,this.scenery.add(c),this.wallMeshes.push(c)}for(let r=0;r<26;r++){let a=new je;if(a.userData.wx=r*4-50,a.userData.side=r%2?1:-1,a.userData.depth=-3-n()*4,i){for(let o=0;o<3;o++){let l=new se(new Xt(2.2+o*.2,.12,6,28,Math.PI*1.2),t.theme==="bones"?this.materials.bone:this.materials.edge);l.rotation.set(.2,Math.PI/2,0),l.position.set(o*.24,0,-o*.65),l.userData.ownGeometry=!0,a.add(l)}for(let o=0;o<4;o++){let l=new se(this.geometry.sphere,this.materials.flesh);l.scale.set(.5+n(),.5+n(),.5+n()),l.position.set(n()*2-1,n()*.7,-n()*2),a.add(l);let c=new se(this.geometry.sphere,new et({color:t.theme==="heart"?16734011:t.theme==="neural"?6513887:3843445,toneMapped:!1}));c.scale.setScalar(.065),c.position.copy(l.position).add(new D(.1,.5,.6)),a.add(c)}}else{let o=new se(this.geometry.box,this.materials.edge);o.scale.set(.28,4.8,2.6),o.rotation.z=r%2?.18:-.18,a.add(o);for(let c=0;c<3;c++){let h=new se(this.geometry.box,this.materials.dark);h.position.set(c*.63-1,.3,-.3),h.scale.set(.52,2.7,1.5),a.add(h);let u=new se(this.geometry.box,c===1?this.materials.glow:this.materials.cyan);u.position.set(c*.63-1,-1.1,.5),u.scale.set(.35,.055,.05),a.add(u)}let l=new se(new hr(.12,.12,4,8),this.materials.edge);l.rotation.z=Math.PI/2,l.position.set(0,.8,1),l.userData.ownGeometry=!0,a.add(l)}this.scenery.add(a),this.decor.push(a)}for(let r=0;r<16;r++){let a=new je;if(a.position.set((n()-.5)*130,(n()-.5)*20,-16-n()*22),i){let o=new se(new Xt(6+n()*5,.3,8,48),t.theme==="bones"?this.materials.bone:this.materials.flesh);o.rotation.y=Math.PI/2,a.add(o),o.userData.ownGeometry=!0}else{for(let l=0;l<5;l++){let c=new se(this.geometry.box,this.materials.distant);c.position.set(l*3,Math.sin(l)*2,0),c.rotation.z=.5,c.scale.set(1.3,12+n()*7,2),a.add(c)}let o=new se(this.geometry.box,this.materials.cyan);o.scale.set(8,.024,.1),o.position.y=-2,a.add(o)}a.rotation.z=(n()-.5)*.5,a.userData.wx=a.position.x,this.scenery.add(a),this.decor.push(a),a.userData.distant=!0}this.removeBoss(),this.clearEntities()}makeTitleBackdrop(){if(this.titleRing)return;let e=new je;e.position.set(13,1,-21),e.rotation.set(.35,.8,-.2),this.scene.add(e),this.titleRing=e;let t=new se(new Xt(14,.32,12,96),this.materials.steel);e.add(t);let i=new se(new Xt(13.4,.035,6,96),this.materials.cyan);e.add(i);for(let n=0;n<48;n++){let r=n*Math.PI*2/48,a=new se(this.geometry.box,this.materials.edge);if(a.position.set(Math.cos(r)*14,Math.sin(r)*14,0),a.rotation.z=r,a.scale.set(.6,1.1,1.9),e.add(a),n%3===0){let o=new se(this.geometry.box,this.materials.glow);o.position.copy(a.position),o.position.z=1,o.rotation.z=r,o.scale.set(.08,.7,.05),e.add(o)}}}clearEntities(){for(let e of this.enemyMeshes.values())this.releaseEnemy(e);for(let e of this.itemMeshes.values())this.world.remove(e);this.enemyMeshes.clear(),this.itemMeshes.clear()}releaseEnemy(e){this.world.remove(e),e.userData.hitMaterial?.dispose()}removeBoss(){this.bossGroup&&(this.bossVisuals.dispose(),this.bossVisuals=null,this.bossGroup=null)}makeBoss(e){this.removeBoss(),this.bossVisuals=new rc(this.world,this.clone("boss_"+e.type),e),this.bossGroup=this.bossVisuals.group,this.bossId=e.id}burst(e,t,i=18,n=16752718,r=1){let a=this.quality==="low"?Math.ceil(i*.45):i;for(let o=0;o<a&&this.particles.length<1100;o++){let l=Math.random()*Math.PI*2,c=(1+Math.random()*8)*r;this.particles.push({x:e,y:t,z:(Math.random()-.5)*.6,vx:Math.cos(l)*c,vy:Math.sin(l)*c,vz:(Math.random()-.5)*c,age:0,life:(.25+Math.random()*.65)*(r>2?1.5:1),scale:.3+Math.random()*1.8,color:n})}}event(e){(e.type==="stage"||e.type==="respawn")&&this.combatFX.reset(),e.type==="explosion"&&(this.combatFX.explode(e),this.burst(e.x,e.y,32,16757084,e.size||1),this.shake=Math.max(this.shake,.12)),e.type==="playerDeath"&&(this.burst(e.x,e.y,110,7522559,1.8),this.burst(e.x,e.y,80,16747312,2),this.shake=.8,this.impact=1),e.type==="bossDeath"&&(this.combatFX.explode(e,!0),this.burst(e.x,e.y,260,16758368,3.8),this.burst(e.x-1,e.y,160,8964863,2.2),this.shake=1.2,this.impact=1.5,this.removeBoss()),e.type==="partBreak"&&(this.combatFX.explode({...e,size:1.5}),this.burst(e.x,e.y,70,16752698,1.5),this.shake=.3),e.type==="shieldBreak"&&(this.burst(e.x,e.y,75,9154303,1.5),this.shake=.25,this.impact=.35),e.type==="bossPhase"&&(this.burst(e.x,e.y,60,16738386,1.4),this.shake=.3,this.impact=.3),e.type==="wave"&&(this.waveFX.fire(e),this.burst(e.x+1,e.y,48,6804735,1.1),this.shake=Math.max(this.shake,.16+e.power*.16),this.impact=.35+e.power*.15),e.type==="hit"&&(this.combatFX.hit(e),this.burst(e.x,e.y,8,16762747,.4)),e.type==="armour"&&this.burst(e.x,e.y,3,10475519,.25),e.type==="block"&&this.burst(e.x,e.y,3,16748861,.25),e.type==="pickup"&&this.burst(this.playerGroup.position.x,this.playerGroup.position.y,40,7853567,1.1),e.type==="drive"&&(this.burst(this.playerGroup.position.x,this.playerGroup.position.y,100,6543359,2),this.impact=1)}updateEnvironment(e){this.stage!==e.stage&&this.setStage(e.stage);let t=e.scroll;if(Math.abs(t-this.lastScroll)>.18){for(let i of this.wallMeshes){let n=i.userData.side,r=i.geometry.attributes.position.array,a=i.geometry.attributes.uv.array;for(let o=0;o<65;o++){let l=-29+o*58/64,c=as(e.stage,t+l),h=n>0?c.top:c.bottom,u=[l,h,1.2,l,h+n*.3,-4.5,l,n*16,1.5,l,n*16,-4.5];r.set(u,o*12);let d=(t+l)*.09;a.set([d,h*.13,d,h*.13+.7,d,n*16*.13,d,n*16*.13+.7],o*8)}i.geometry.attributes.position.needsUpdate=!0,i.geometry.attributes.uv.needsUpdate=!0,i.geometry.computeVertexNormals()}this.lastScroll=t}for(let i of this.decor){if(i.userData.distant){i.position.x=((i.userData.wx-t*.32+80)%160+160)%160-80;continue}let n=((i.userData.wx-t+52)%104+104)%104-52,r=as(e.stage,t+n),a=i.userData.side;i.position.set(n,(a>0?r.top:r.bottom)+a*.25,i.userData.depth),i.rotation.z=a>0?Math.PI:0}if(this.obstacleMeshes.length!==e.obstacles.length){for(let i of this.obstacleMeshes)this.world.remove(i);this.obstacleMeshes=[];for(let i of e.obstacles){let n=new je,r=new se(this.geometry.box,this.materials.steel);r.scale.set(i.w,i.h,3.2),n.add(r);let a=new se(this.geometry.box,this.materials.edge);a.scale.set(i.w+.15,.16,3.5),a.position.y=i.y>0?-i.h/2:i.h/2,n.add(a);for(let o=0;o<Math.min(12,Math.floor(i.w/.7));o++){let l=new se(this.geometry.box,o%2?this.materials.dark:this.materials.glow);l.position.set((o-(Math.min(12,Math.floor(i.w/.7))-1)/2)*.32,i.y>0?-i.h/2+.18:i.h/2-.18,1.64),l.scale.set(.22,.24,.04),l.rotation.z=-.35,n.add(l)}this.world.add(n),this.obstacleMeshes.push(n)}}this.obstacleMeshes.forEach((i,n)=>i.position.set(e.obstacles[n].wx-t,e.obstacles[n].y,-.4))}syncGame(e,t){let i=e.player,n=e.force;this.updateEnvironment(e),this.heroGroup.visible=!1,this.world.visible=!0,this.titleRing&&(this.titleRing.visible=!1),this.playerGroup.position.set(i.x,i.y,.45),this.playerGroup.visible=e.mode!=="dying"&&e.mode!=="over",i.invuln>0?this.ship.visible=Math.floor(this.time*18)%3!==0:this.ship.visible=!0,this.ship.rotation.set(Zi(this.ship.rotation.x,-i.vy*.028,t*8),-.06,Zi(this.ship.rotation.z,i.vy*.012,t*8)),this.playerGroup.userData.exhaust.forEach((o,l)=>{o.scale.y=.8+Math.sin(this.time*64+l)*.18+(e.driveTime>0?.8:0)}),this.forceGroup.visible=n.mode!=="none",this.forceGroup.position.set(n.x,n.y,.45),this.forceGroup.scale.setScalar(.8+i.level*.07),this.forceRings.forEach((o,l)=>{o.rotation.x+=t*(l+1)*.7,o.rotation.z+=t*(l+1)}),this.bits.forEach((o,l)=>{o.visible=i.bits>l,o.position.set(i.x,i.y+(l===0?1.05:-1.05),.5),o.rotation.set(this.time,0,this.time*2)});let r=new Set;for(let o of e.enemies){if(o.dead)continue;r.add(o.id);let l=this.enemyMeshes.get(o.id);if(!l){l=this.clone(o.type);let h=l.clone(!0),u=new et({color:16771005,transparent:!0,opacity:0,blending:ft,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});h.traverse(d=>{d.isMesh&&(d.material=u)}),h.scale.setScalar(1.01),h.visible=!1,l.add(h),l.userData.hitOverlay=h,l.userData.hitMaterial=u,l.scale.setScalar(o.type==="carrier"||o.type==="turret"?.85:.83),this.enemyMeshes.set(o.id,l),this.world.add(l)}l.position.set(o.x,o.y,.3),o.type==="turret"?(l.rotation.z=0,l.scale.y=o.top?-.85:.85):(l.rotation.x=Math.sin(o.age*2)*.18,l.rotation.z=Math.sin(o.age*2)*.07);let c=this.combatFX.flashStrength(o.id);l.userData.hitOverlay.visible=c>0,l.userData.hitMaterial.opacity=c*.82}for(let[o,l]of this.enemyMeshes)r.has(o)||(this.releaseEnemy(l),this.enemyMeshes.delete(o));let a=new Set;for(let o of e.items){a.add(o.id);let l=this.itemMeshes.get(o.id);if(!l){let c=new je,h=new se(new ua(.34),new gt({color:16777215,emissive:Li[o.type]?.color||7592378,emissiveIntensity:2.5,metalness:.5,roughness:.2})),u=new se(new Xt(.6,.024,6,32),this.materials.edge);if(c.add(h,u),!Li[o.type]){let d=document.createElement("canvas");d.width=64,d.height=64;let f=d.getContext("2d");f.font="bold 42px monospace",f.textAlign="center",f.fillStyle="#e7f8ee",f.fillText(o.type==="missile"?"M":o.type==="bit"?"B":"S",32,48);let g=new or(new _s({map:new $n(d),depthTest:!1}));g.scale.set(.65,.65,1),g.position.set(0,0,1),c.add(g)}l=c,this.itemMeshes.set(o.id,l),this.world.add(l),l.userData.ownGeometry=!0}l.position.set(o.x,o.y,.65),l.rotation.y=this.time*2,l.rotation.z=this.time*.7,l.children[0].material.emissive.set(Li[o.type]?.color||7592378)}for(let[o,l]of this.itemMeshes)a.has(o)||(this.world.remove(l),l.children[0].geometry.dispose(),l.children[0].material.dispose(),l.children[1].geometry.dispose(),this.itemMeshes.delete(o));if(e.boss){let o=e.boss;(this.bossId!==o.id||!this.bossGroup)&&this.makeBoss(o),this.bossVisuals.update(o,t)}else this.bossGroup&&this.removeBoss();this.syncProjectiles(e),this.playerGroup.visible&&Math.random()<.6&&this.particles.push({x:i.x-.9,y:i.y,z:.4,vx:-5,vy:0,vz:0,age:0,life:.25,scale:.5,color:3383039})}syncProjectiles(e){let t=0;for(let i of[...e.shots,...e.bullets]){if(i.type==="wave")continue;if(t>=850)break;let n=!!i.grazed||i.grazed===!1,r=n?i.type==="heavy"?16722806:16738361:i.type==="helix"?16736057:i.type==="reflect"?3976959:i.type==="crawler"?16757550:i.type==="missile"?16755282:9560575;si.position.set(i.x,i.y,1.05),si.rotation.set(0,0,Math.atan2(i.vy||0,i.vx||1)),si.scale.set(n?i.r*.8:i.type==="missile"?.31:.32,n?i.r*.8:i.r*.65,n?i.r*.8:.09),si.updateMatrix(),this.projectileMesh.setMatrixAt(t,si.matrix),this.projectileMesh.setColorAt(t,du.set(r).multiplyScalar(n?1.7:2.2)),si.position.x-=n?i.vx*.015:i.vx*.019,si.position.y-=n?i.vy*.015:(i.vy||0)*.019,si.scale.multiplyScalar(1.8),n||(si.scale.x*=1.8),si.updateMatrix(),this.trailMesh.setMatrixAt(t,si.matrix),this.trailMesh.setColorAt(t,du.set(r).multiplyScalar(1.1)),t++}this.projectileMesh.count=t,this.trailMesh.count=t,this.projectileMesh.instanceMatrix.needsUpdate=!0,this.trailMesh.instanceMatrix.needsUpdate=!0,t&&(this.projectileMesh.instanceColor.needsUpdate=!0,this.trailMesh.instanceColor.needsUpdate=!0)}syncTitle(e,t){this.makeTitleBackdrop(),this.world.visible=!1,this.heroGroup.visible=!0,this.titleRing.visible=!0,this.scenery&&(this.scenery.visible=!1),this.projectileMesh.count=0,this.trailMesh.count=0,this.scene.background.set(198412),this.scene.fog.color.set(528923),this.planet.visible=!0,this.stars.material.opacity=.65;let i=t==="hangar";this.heroGroup.position.set(i?3.8:7.6,i?.3:.3+Math.sin(this.time*.35)*.25,i?3:1.8),this.heroGroup.rotation.set(-.15+Math.sin(this.time*.2)*.045,i?this.heroAngle+this.time*.075:-.42+Math.sin(this.time*.17)*.12,-.1+Math.sin(this.time*.23)*.02),this.heroGroup.scale.setScalar(i?1.3:1.15),this.heroGroup.userData.exhaust.forEach((n,r)=>{n.position.x=r===0?-4.5:-4,n.scale.set(3,2.5+Math.sin(this.time*35)*.3,3)}),this.fill.position.set(9,2,6),this.fill.intensity=30,this.rim.color.set(6924769),this.titleRing.rotation.z+=e*.004}render(e,t,i="title"){if(this.contextLost)return;this.time+=t,this.shake=Math.max(0,this.shake-t*1.9),this.impact=Math.max(0,this.impact-t*1.6),this.stars.rotation.y=Math.sin(this.time*.02)*.03,e?(this.scenery&&(this.scenery.visible=!0),this.syncGame(e,t),this.fill.position.set(e.player.x+3,3,8),this.fill.intensity=35):this.syncTitle(t,i),this.waveFX.update(e,t),this.combatFX.update(e,t);let n=this.settings.shake===!1?0:this.shake;this.camera.position.set((Math.random()-.5)*n*.35,(Math.random()-.5)*n*.3,34),this.particles=this.particles.filter(a=>a.age<a.life);let r=0;for(let a of this.particles)a.age+=t,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.vx*=1-t*1.5,a.vy*=1-t*1.5,si.position.set(a.x,a.y,a.z),si.rotation.set(a.age*3,a.age*2,0),si.scale.setScalar(a.scale*Math.max(0,1-a.age/a.life)),si.updateMatrix(),this.particleMesh.setMatrixAt(r,si.matrix),this.particleMesh.setColorAt(r,du.set(a.color).multiplyScalar(2)),r++;this.particleMesh.count=r,this.particleMesh.instanceMatrix.needsUpdate=!0,r&&(this.particleMesh.instanceColor.needsUpdate=!0),this.grade.uniforms.time.value=this.time,this.grade.uniforms.impact.value=this.impact,this.grade.uniforms.drive.value=e?.driveTime>0?1:0,this.grade.uniforms.crt.value=this.settings.crt?1:0,this.bloom.strength=e?.driveTime>0?.5:.3+this.waveFX.flash*.04,this.webgl.info.reset(),this.composer.render(),this.drawCalls=this.webgl.info.render.calls}};var Is=[{title:"Beyond the Derelict",ja:"\u5EC3\u589F\u306E\u5411\u3053\u3046\u3078",bpm:132,root:38,lead:[0,7,12,10,7,3,5,7,0,7,14,12,10,7,5,3],chords:[0,-3,5,-5],flavor:"metal"},{title:"A Heart That Is Not Yours",ja:"\u8AB0\u3067\u3082\u306A\u3044\u9F13\u52D5",bpm:124,root:40,lead:[0,1,7,8,7,3,1,-2,0,7,12,13,10,8,7,1],chords:[0,1,-4,-2],flavor:"organic"},{title:"Steel Has a Memory",ja:"\u92FC\u306F\u8A18\u61B6\u3059\u308B",bpm:142,root:36,lead:[0,3,7,12,10,7,3,5,7,10,14,12,7,5,3,-2],chords:[0,5,-3,7],flavor:"metal"},{title:"Cathedral of Sparks",ja:"\u706B\u82B1\u306E\u5927\u8056\u5802",bpm:140,root:37,lead:[0,7,10,12,7,10,15,14,12,10,7,5,3,7,5,2],chords:[0,-5,3,-2],flavor:"metal"},{title:"Where the Stars Go to Die",ja:"\u661F\u306E\u7720\u308B\u5834\u6240",bpm:116,root:39,lead:[0,7,12,15,14,10,7,3,5,10,12,14,10,7,3,0],chords:[0,-3,-5,-2],flavor:"ether"},{title:"Anatomy of a Dream",ja:"\u5922\u306E\u89E3\u5256",bpm:136,root:35,lead:[0,1,5,7,8,12,13,7,5,1,0,-2,5,7,8,1],chords:[0,1,-2,-4],flavor:"organic"},{title:"Nothing Left Behind",ja:"\u3053\u306E\u5148\u306B\u6B8B\u3059\u3082\u306E",bpm:148,root:38,lead:[0,7,12,14,15,14,12,7,10,14,17,15,14,10,7,5],chords:[0,5,-3,-5],flavor:"metal"},{title:"Requiem for the Living",ja:"\u751F\u304D\u3066\u9084\u308B\u8005\u306E\u305F\u3081\u306E\u93AE\u9B42\u6B4C",bpm:128,root:38,lead:[0,7,10,12,15,14,12,10,7,5,3,5,7,10,7,0],chords:[0,-5,-3,5],flavor:"ether"},{title:"The Shape of Fear",ja:"\u6050\u6016\u306E\u8F2A\u90ED",bpm:154,root:35,lead:[0,1,0,7,6,7,12,13,12,7,6,1,0,7,6,1],chords:[0,1,0,-2],flavor:"boss"},{title:"A Small Light in the Void",ja:"\u865A\u7A7A\u306B\u706F\u3059",bpm:92,root:38,lead:[0,7,12,14,10,7,5,3,0,7,15,14,12,10,7,5],chords:[0,-3,5,-5],flavor:"title"},{title:"Homeward",ja:"\u5E30\u9084",bpm:108,root:41,lead:[0,4,7,12,11,7,4,2,4,7,12,14,12,11,7,4],chords:[0,5,7,0],flavor:"ending"}],kv=s=>440*2**((s-69)/12),oc=class s{constructor(e={}){this.volume=e.volume??.65,this.musicVolume=e.music??.65,this.sfxVolume=e.sfx??.8,this.mode=e.soundMode||"modern",this.muted=!1,this.track=9,this.step=0,this.next=0,this.started=!1,this.paused=!1,this.lastShot=0,this.chargeVoice=null}async start(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e({latencyHint:"interactive"}),this.buildGraph()}this.ctx.state==="suspended"&&await this.ctx.resume(),this.started||(this.next=this.ctx.currentTime+.05,this.started=!0)}buildGraph(){let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.volume*.7;let t=e.createDynamicsCompressor();t.threshold.value=-12,t.knee.value=12,t.ratio.value=5,t.attack.value=.003,t.release.value=.16,this.master.connect(t),t.connect(e.destination),this.music=e.createGain(),this.music.gain.value=this.musicVolume*.5,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=this.sfxVolume,this.sfx.connect(this.master);let i=os(9001),n=e.sampleRate*2;this.noise=e.createBuffer(1,n,e.sampleRate);let r=this.noise.getChannelData(0);for(let u=0;u<n;u++)r[u]=i()*2-1;let a=e.createBuffer(2,e.sampleRate*2.1,e.sampleRate);for(let u=0;u<2;u++){let d=a.getChannelData(u);for(let f=0;f<d.length;f++)d[f]=(i()*2-1)*Math.pow(1-f/d.length,3.3)}this.reverb=e.createConvolver(),this.reverb.buffer=a;let o=e.createGain();o.gain.value=.22,this.reverb.connect(o),o.connect(this.music),this.delay=e.createDelay(.8),this.delay.delayTime.value=.24;let l=e.createGain();l.gain.value=.28;let c=e.createGain();c.gain.value=.17,this.delay.connect(l),l.connect(this.delay),this.delay.connect(c),c.connect(this.music),this.sfxSpace=e.createConvolver(),this.sfxSpace.buffer=a;let h=e.createGain();h.gain.value=.24,this.sfxSpace.connect(h),h.connect(this.sfx)}createChargeVoice(e){let t=this.ctx,i=t.createGain(),n=t.createGain(),r=t.createStereoPanner(),a=t.createGain();i.gain.setValueAtTime(0,e),n.gain.value=.78,a.gain.value=.19,n.connect(i),i.connect(r),r.connect(this.sfx),r.connect(a),a.connect(this.sfxSpace);let o=[],l=[i,n,r,a],c=(w,E,x,b=n)=>{let I=t.createOscillator(),R=t.createGain();return I.type=w,I.frequency.setValueAtTime(E,e),R.gain.value=x,I.connect(R),R.connect(b),o.push(I),l.push(I,R),{o:I,g:R}},h=c("sine",53,.13),u=c("triangle",106,.065),d=t.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(320,e),d.Q.value=2,d.connect(n),l.push(d);let f=c(this.mode==="fm"?"sine":"sawtooth",145,.053,d),g=c("sine",147,.055,d);f.o.detune.value=-7,g.o.detune.value=7;let _=c("sine",28,8,f.o.frequency),m=c("sine",4,.17,n.gain),p=c("sine",.8,.05,r.pan),v=t.createBufferSource(),T=t.createBiquadFilter(),M=t.createGain();v.buffer=this.noise,v.loop=!0,T.type="bandpass",T.frequency.setValueAtTime(450,e),T.Q.value=1.1,M.gain.setValueAtTime(.01,e),v.connect(T),T.connect(M),M.connect(n),o.push(v),l.push(v,T,M);for(let w of o)w.start(e);return{amp:i,pan:r,sub:h,lower:u,coil:f,twin:g,fm:_,pulse:m,orbit:p,filter:d,airFilter:T,air:M,sources:o,nodes:l}}syncCharge(e,t,i=0,n=this.ctx?.currentTime){if(!this.ctx||!this.started)return;let r=n,a=nt(e||0,0,1);if(!t||a<.025){this.stopCharge(r);return}this.chargeVoice||(this.chargeVoice=this.createChargeVoice(r));let o=this.chargeVoice,l=a*a,c=(h,u,d=.035)=>h.setTargetAtTime(u,r,d);c(o.amp.gain,.35+a*.65),c(o.pan.pan,nt(i/28,-.65,.65)),c(o.sub.o.frequency,53+l*39),c(o.lower.o.frequency,106+l*78),c(o.coil.o.frequency,145+l*735),c(o.twin.o.frequency,147+l*742),c(o.fm.o.frequency,28+a*108),c(o.fm.g.gain,8+l*95),c(o.filter.frequency,320+l*4700),c(o.filter.Q,2+a*2.8),c(o.pulse.o.frequency,4+l*13),c(o.orbit.o.frequency,.8+a*3.2),c(o.orbit.g.gain,.05+a*.18),c(o.airFilter.frequency,450+l*3400),c(o.air.gain,.01+l*.085),this.music.gain.setTargetAtTime(this.musicVolume*.5*.76,r,.09)}stopCharge(e=this.ctx?.currentTime){if(!this.chargeVoice)return;let t=this.chargeVoice;this.chargeVoice=null,t.amp.gain.cancelScheduledValues(e),t.amp.gain.setTargetAtTime(0,e,.025);for(let i of t.sources)i.stop(e+.16);t.sources[0].onended=()=>{for(let i of t.nodes)i.disconnect()},this.music.gain.setTargetAtTime(this.musicVolume*(this.paused?.17:.5),e,.2)}chargeReady(e=this.ctx.currentTime){let t=this.ctx;for(let[i,n]of[[880,0],[1320,.025],[1760,.05]]){let r=t.createOscillator(),a=t.createGain();r.type="sine",r.frequency.setValueAtTime(i,e+n),a.gain.setValueAtTime(0,e+n),a.gain.linearRampToValueAtTime(.065,e+n+.012),a.gain.exponentialRampToValueAtTime(.001,e+n+.38),r.connect(a),a.connect(this.sfx),a.connect(this.sfxSpace),r.start(e+n),r.stop(e+n+.42),r.onended=()=>{r.disconnect(),a.disconnect()}}}waveShot(e=2,t=0,i=this.ctx.currentTime){let n=this.ctx,r=i,a=nt(e/2,.25,1),o=n.createStereoPanner(),l=n.createGain(),c=n.createGain();this.stopCharge(r),this.music.gain.cancelScheduledValues(r),this.music.gain.setTargetAtTime(this.musicVolume*.5*.48,r,.018),this.music.gain.setTargetAtTime(this.musicVolume*.5,r+.55,.25),o.pan.setValueAtTime(nt(t/26,-.65,.65),r),o.pan.linearRampToValueAtTime(.75,r+.85),c.gain.value=.35+a*.17,l.gain.value=.7+a*.3,l.connect(o),o.connect(this.sfx),o.connect(c),c.connect(this.sfxSpace);let h=[],u=[o,l,c],d=(E,x,b,I,R)=>{let L=n.createOscillator(),O=n.createGain();return L.type=E,L.frequency.setValueAtTime(x,r),L.frequency.exponentialRampToValueAtTime(b,r+R*.76),O.gain.setValueAtTime(.001,r),O.gain.exponentialRampToValueAtTime(I,r+.009),O.gain.exponentialRampToValueAtTime(.001,r+R),L.connect(O),O.connect(l),h.push(L),u.push(L,O),L.start(r),L.stop(r+R+.04),L};d("sine",210+a*100,36+a*10,.28+a*.23,.65+a*.35),d("triangle",110+a*40,28,.1+a*.11,.8+a*.3);let f=d(this.mode==="fm"?"sine":"triangle",920+a*330,120,.09+a*.07,.32),g=n.createOscillator(),_=n.createGain();g.frequency.setValueAtTime(1460,r),g.frequency.exponentialRampToValueAtTime(90,r+.28),_.gain.setValueAtTime(470,r),_.gain.exponentialRampToValueAtTime(1,r+.3),g.connect(_),_.connect(f.frequency),g.start(r),g.stop(r+.36),h.push(g),u.push(g,_);let m=(E,x,b,I)=>{let R=n.createBufferSource(),L=n.createBiquadFilter(),O=n.createGain();R.buffer=this.noise,R.loop=!0,L.type=E,L.Q.value=.75,L.frequency.setValueAtTime(x,r),L.frequency.exponentialRampToValueAtTime(170,r+I),O.gain.setValueAtTime(.001,r),O.gain.exponentialRampToValueAtTime(b,r+.006),O.gain.exponentialRampToValueAtTime(.001,r+I),R.connect(L),L.connect(O),O.connect(l),R.start(r),R.stop(r+I+.04),h.push(R),u.push(R,L,O)};m("highpass",3400,.18+a*.13,.065),m("bandpass",1900+a*1800,.13+a*.12,.7+a*.5);let p=n.createDelay(.5),v=n.createGain(),T=n.createGain();p.delayTime.value=.145,v.gain.value=.23,T.gain.value=.16,l.connect(p),p.connect(v),v.connect(p),p.connect(T),T.connect(this.sfxSpace),u.push(p,v,T);let M=n.createOscillator(),w=n.createGain();w.gain.value=0,M.connect(w),w.connect(this.sfx),M.start(r),M.stop(r+2.3),u.push(M,w),M.onended=()=>{for(let E of u)E.disconnect()}}async renderWeaponDemo(e=2){let n=new s({volume:.85,music:0,sfx:.85,soundMode:this.mode});n.ctx=new OfflineAudioContext(2,5*44100,44100),n.buildGraph(),n.started=!0;let r=1.65*nt(e/2,.25,1),a=.15;for(let o=0;o<=Math.ceil(r*60);o++)n.syncCharge(Math.min(1,o/60/1.65),!0,-9,a+o/60);return e===2&&n.chargeReady(a+r),n.waveShot(e,-9,a+r+.12),this.wavResult(await n.ctx.startRendering())}wavResult(e){let t=e.getChannelData(0),i=e.getChannelData(1),n=e.sampleRate,r=0,a=0,o=new ArrayBuffer(44+t.length*4),l=new DataView(o),c=(h,u)=>{for(let d=0;d<u.length;d++)l.setUint8(h+d,u.charCodeAt(d))};c(0,"RIFF"),l.setUint32(4,36+t.length*4,!0),c(8,"WAVE"),c(12,"fmt "),l.setUint32(16,16,!0),l.setUint16(20,1,!0),l.setUint16(22,2,!0),l.setUint32(24,n,!0),l.setUint32(28,n*4,!0),l.setUint16(32,4,!0),l.setUint16(34,16,!0),c(36,"data"),l.setUint32(40,t.length*4,!0);for(let h=0;h<t.length;h++){let u=t[h],d=i[h];r=Math.max(r,Math.abs(u),Math.abs(d)),a+=u*u+d*d,l.setInt16(44+h*4,nt(u,-1,1)*32767,!0),l.setInt16(46+h*4,nt(d,-1,1)*32767,!0)}return{blob:new Blob([o],{type:"audio/wav"}),peak:r,rms:Math.sqrt(a/(t.length*2)),seconds:e.duration,rate:n}}async renderTrack(e,t=32){let n=new s({volume:.85,music:.85,sfx:.75,soundMode:this.mode});n.ctx=new OfflineAudioContext(2,Math.ceil(t*44100),44100),n.buildGraph(),n.track=e;let r=60/Is[e].bpm/4;for(let a=0,o=.02;o<t-1.2;o+=r,a++)n.sequence(a,o,r);return n.master.gain.setValueAtTime(.85*.7,t-1.2),n.master.gain.linearRampToValueAtTime(0,t-.03),this.wavResult(await n.ctx.startRendering())}play(e){this.track!==e&&(this.track=e,this.step=0,this.ctx&&(this.next=this.ctx.currentTime+.08))}apply(){if(!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.muted?0:this.volume*.7,e,.05),this.music.gain.setTargetAtTime(this.paused?this.musicVolume*.17:this.musicVolume*.5,e,.12),this.sfx.gain.setTargetAtTime(this.sfxVolume,e,.04)}tick(){if(!this.ctx||!this.started||this.ctx.state!=="running")return;let e=60/Is[this.track].bpm/4;for(this.next<this.ctx.currentTime-.2&&(this.next=this.ctx.currentTime+.03);this.next<this.ctx.currentTime+.18;)this.sequence(this.step++,this.next,e),this.next+=e}tone(e,t,i,n,r="lead",a=0){let o=this.ctx,l=o.createOscillator(),c=o.createGain(),h=o.createBiquadFilter(),u=o.createStereoPanner(),d=kv(e);l.frequency.value=d,u.pan.value=a,l.type=r==="pad"||r==="bass"?"sawtooth":this.mode==="fm"?"sine":"sawtooth",h.type="lowpass",h.frequency.setValueAtTime(r==="bass"?1800:r==="pad"?1e3:4400,t),h.frequency.exponentialRampToValueAtTime(r==="bass"?130:r==="pad"?500:1e3,t+i),h.Q.value=r==="bass"?3.4:.7;let f=r==="pad"?.14:.008;if(c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(n,t+f),c.gain.exponentialRampToValueAtTime(.001,t+Math.max(f+.04,i)),l.connect(h),h.connect(c),c.connect(u),u.connect(this.music),r!=="bass"&&(u.connect(this.reverb),r==="lead"&&u.connect(this.delay)),this.mode==="fm"&&r!=="pad"){let g=o.createOscillator(),_=o.createGain();g.frequency.value=d*2,_.gain.setValueAtTime(d*2.3,t),_.gain.exponentialRampToValueAtTime(1,t+i),g.connect(_),_.connect(l.frequency),g.start(t),g.stop(t+i+.04)}else if(r==="lead"||r==="pad"){let g=o.createOscillator();g.type="sawtooth",g.frequency.value=d,g.detune.value=r==="pad"?-11:7,g.connect(h),g.start(t),g.stop(t+i+.04)}l.start(t),l.stop(t+i+.04)}drum(e,t,i=1){let n=this.ctx,r=n.createGain();if(r.connect(this.music),e==="kick"){let a=n.createOscillator();a.frequency.setValueAtTime(145,t),a.frequency.exponentialRampToValueAtTime(39,t+.14),r.gain.setValueAtTime(.62*i,t),r.gain.exponentialRampToValueAtTime(.001,t+.28),a.connect(r),a.start(t),a.stop(t+.3)}else{let a=n.createBufferSource();a.buffer=this.noise;let o=n.createBiquadFilter();o.type="highpass",o.frequency.value=e==="hat"?8500:1400,a.connect(o),o.connect(r),r.gain.setValueAtTime((e==="hat"?.075:.22)*i,t),r.gain.exponentialRampToValueAtTime(.001,t+(e==="hat"?.055:.17)),a.start(t),a.stop(t+.2),e==="snare"&&this.tone(50,t,.1,.035,"bass")}}sequence(e,t,i){let n=Is[this.track],r=Math.floor(e/16),a=e%16,o=Math.floor(r/8)%4,l=n.chords[Math.floor(r/2)%4],c=n.root+l,h=n.flavor==="title"||n.flavor==="ending";if(a===0){let u=n.flavor==="ending";for(let d of[0,u?4:3,7,14])this.tone(c+12+d,t,i*17,.028,"pad",(d-7)/12)}if(a%2===0){let u=[0,0,12,7,0,12,10,7];this.tone(c+u[a/2],t,i*1.35,h?.09:.18,"bass")}if(a%2===0||!h&&a===15){let u=(Math.floor(a/2)+r%2*8)%16,d=n.root+24+n.lead[(u+o*4)%16];o===2&&(d+=12),this.tone(d,t,i*(a%4===0?2.7:1.3),h?.035:.06,"lead",Math.sin(e*.21)*.32)}if((!h||r%4>1)&&([0,6,8,14].includes(a)&&this.drum("kick",t,h?.55:1),(a===4||a===12)&&this.drum("snare",t,h?.6:1),(a%2===0||o===3)&&this.drum("hat",t,a%4===0?1:.65),r%8===7&&a>=12&&this.drum("snare",t,.35+(a-12)*.12)),!h&&a%2===1){let u=[0,7,12,15,19,15,12,7];this.tone(c+24+u[Math.floor(a/2)],t,i*.7,.018,"lead",a%4===1?-.65:.65)}}effect(e,t={}){if(!this.ctx||!this.started)return;let i=this.ctx,n=i.currentTime;if(e==="wave"){this.waveShot(t.power||2,t.x||0,n);return}if(e==="charged"){this.chargeReady(n);return}if((e==="playerDeath"||e==="stage"||e==="gameover"||e==="victory")&&this.stopCharge(n),e==="shot"&&n-this.lastShot<.095)return;e==="shot"&&(this.lastShot=n);let r={telegraph:[720,310,.48,.1,"triangle"],bossPhase:[58,105,.85,.18,"sawtooth"],shieldBreak:[1400,65,.55,.18,"sine"],heartbeat:[58,30,.25,.22,"sine"],bossFire:[92,35,.13,.04,"triangle"]}[e];if(r){let[o,l,c,h,u]=r,d=i.createOscillator(),f=i.createGain();d.type=u,d.frequency.setValueAtTime(o,n),d.frequency.exponentialRampToValueAtTime(l,n+c),f.gain.setValueAtTime(.001,n),f.gain.linearRampToValueAtTime(h,n+.02),f.gain.exponentialRampToValueAtTime(.001,n+c),d.connect(f),f.connect(this.sfx),d.start(n),d.stop(n+c+.03);return}let a={shot:[950,290,.09,.045,"square"],forceLaunch:[240,70,.34,.17,"sawtooth"],forceRecall:[120,630,.3,.1,"sine"],forceDock:[600,1200,.14,.1,"sine"],pickup:[650,1600,.24,.17,"sine"],extend:[550,1800,.45,.2,"sine"],drive:[55,260,.8,.26,"sawtooth"],hit:[180,55,.065,.06,"square"],armour:[1800,450,.045,.028,"triangle"],block:[1400,600,.04,.025,"sine"],graze:[1e3,1400,.04,.02,"sine"],missile:[180,80,.18,.07,"sawtooth"],ui:[800,1050,.055,.04,"sine"]}[e];if(a){let[o,l,c,h,u]=a,d=i.createOscillator(),f=i.createGain(),g=i.createStereoPanner();d.type=u,d.frequency.setValueAtTime(o,n),d.frequency.exponentialRampToValueAtTime(l,n+c),f.gain.setValueAtTime(h,n),f.gain.exponentialRampToValueAtTime(.001,n+c),g.pan.value=nt((t.x||0)/24,-.8,.8),d.connect(f),f.connect(g),g.connect(this.sfx),d.start(n),d.stop(n+c+.02)}if(["explosion","playerDeath","bossDeath","partBreak"].includes(e)){let o=e==="bossDeath"?3:e==="playerDeath"?1.5:1,l=.55*o,c=i.createBufferSource(),h=i.createBiquadFilter(),u=i.createGain();c.buffer=this.noise,c.loop=!0,h.type="lowpass",h.frequency.setValueAtTime(3200,n),h.frequency.exponentialRampToValueAtTime(70,n+l),u.gain.setValueAtTime(.29*Math.min(o,1.6),n),u.gain.exponentialRampToValueAtTime(.001,n+l),c.connect(h),h.connect(u),u.connect(this.sfx),c.start(n),c.stop(n+l+.02);let d=i.createOscillator(),f=i.createGain();d.frequency.setValueAtTime(e==="bossDeath"?85:115,n),d.frequency.exponentialRampToValueAtTime(24,n+l),f.gain.setValueAtTime(.35,n),f.gain.exponentialRampToValueAtTime(.001,n+l),d.connect(f),f.connect(this.sfx),d.start(n),d.stop(n+l+.03)}}};var Ve=s=>document.querySelector(s),zt=Ve("#ui"),Mu=Ve("#game"),zv={volume:.65,music:.65,sfx:.75,quality:"high",soundMode:"modern",shake:!0,crt:!1,classic:!1,autoFire:!1};function hp(s,e){try{return JSON.parse(localStorage.getItem(s))??e}catch{return e}}var pt={...zv,...hp("requiem-settings-v1",{})},hn=hp("requiem-records-v1",[]);Array.isArray(hn)||(hn=[]);var xu=hn.reduce((s,e)=>Math.max(s,Number(e.score)||0),0),di,ze=new oc(pt),re=null,Ye="title",Za="title",$a="arcade",Ka=1,Su="red",dc=!1,fu=0,Xa=0,pu=0,_u=60,lc=0,vu=0,hc=!1,Ns=pt.autoFire,un=null,uc=0,up="",Cr=0,mu=[],lp=0,gu=!1,bu=!1,Ir=new Set,Hi=new Set,_i={x:0,y:0,fire:!1,rapid:!1},is=new URLSearchParams(location.search),Tu=is.get("qa")==="1";["ultra","high","medium","low"].includes(is.get("quality"))&&(pt.quality=is.get("quality"));var Wa=0,cc=0,ts="stage";function Ls(){try{localStorage.setItem("requiem-settings-v1",JSON.stringify(pt))}catch{}}function qa(s){return String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Ya(s){return Math.max(0,Math.floor(s)).toString().padStart(8,"0")}function Un(s,e=3){up=s,uc=e}async function dp(){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Un("\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3\u306F\u3053\u306E\u74B0\u5883\u3067\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093")}}function fp(){ze.muted=!ze.muted,ze.apply();let s=Ve('[data-action="mute"]');s&&(s.textContent=ze.muted?"SOUND OFF":"SOUND ON")}function ui(s){if(!bu)return;ze.stopCharge(),re&&s!=="play"&&s!=="pause"&&(re.paused=!0),Ye=s,Ir.clear(),Hi.clear(),document.body.classList.toggle("in-game",!!re&&["play","pause","settings","help"].includes(s)),Ve("#touch").hidden=!(Ye==="play"&&matchMedia("(pointer:coarse)").matches),Rr(),ze.paused=Ye==="pause",ze.apply(),!re&&Ye!=="music"&&ze.play(9);let e=zt.querySelector("button:not(.back):not(.sound-toggle)");e&&Ye!=="play"&&e.focus({preventScroll:!0})}function Eu(s=0,e=!1,t=!1){if(ze.start(),re=new Qa({stage:s,difficulty:$a,practice:e,bossPractice:e&&t,classic:pt.classic}),e){for(let i=0;i<Ka;i++)re.collect(Su);Ka&&(re.collect("missile"),re.collect("bit"),re.collect("bit"),re.force.mode="front",re.force.x=re.player.x+1.6,re.force.y=re.player.y),re.debugInvincible=dc}hc=!1,un=null,Cr=0,Xa=0,Ns=pt.autoFire,ui("play"),Mu.focus({preventScroll:!0}),ze.play(wt[s].track)}function Hv(){re=null,un=null,Cr=0,Za="title",di.clearEntities(),ui("title"),ze.play(9)}function Gv(s){Za=re?"pause":"title",ui(s)}function Pr(){!re||!["play","pause"].includes(Ye)||["over","victory"].includes(re.mode)||(re.paused=Ye==="play",ui(re.paused?"pause":"play"),re.paused||Mu.focus({preventScroll:!0}))}function Vv(){return`<div class="topbar"><div class="wordmark">R-TYPE<span>//</span>REQUIEM</div><div class="top-meta mono"><span class="desktop-only"><i class="status-dot"></i>FLIGHT SYSTEM ONLINE</span><span class="desktop-only">WEBGL 2 \xB7 3D</span><button data-action="mute" class="sound-toggle">${ze.muted?"SOUND OFF":"SOUND ON"}</button></div></div>`}function Ps(s,e,t=""){return`<button class="back" data-action="back">\u2190 BACK</button><div class="overlay-head"><div><div class="eyebrow">${s}</div><h1>${e}</h1></div><p>${t}</p></div>`}function Rr(){Ye==="title"?zt.innerHTML=`${Vv()}<div class="title-content"><div class="eyebrow title-kicker">A TRIBUTE TO THE LEGEND \xB7 REBUILT IN 3D</div><h1 class="game-title">R<span class="hyphen">-</span>TYPE</h1><div class="subtitle">REQUIEM</div><p class="title-copy"><strong>\u6700\u5F8C\u306E\u4E00\u6A5F\u3067\u3001\u305D\u306E\u5148\u3078\u3002</strong><br>\u4EBA\u985E\u306E\u5883\u754C\u7DDA\u3092\u8D8A\u3048\u308B\u30018\u3064\u306E\u6226\u5834\u3002</p><nav class="main-nav" aria-label="\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC"><button class="nav-btn primary" data-action="sortie"><span>01</span><b>SORTIE</b><small>\u51FA\u6483\u3059\u308B</small><span class="arrow">\u2197</span></button><button class="nav-btn" data-action="practice"><span>02</span><b>FLIGHT TRAINING</b><small>\u30B9\u30C6\u30FC\u30B8\u9078\u629E</small><span class="arrow">\u203A</span></button><button class="nav-btn" data-action="hangar"><span>03</span><b>HANGAR</b><small>\u6A5F\u4F53\u3092\u898B\u308B</small><span class="arrow">\u203A</span></button><button class="nav-btn" data-action="music"><span>04</span><b>SOUND ARCHIVE</b><small>\u97F3\u697D\u3092\u8074\u304F</small><span class="arrow">\u203A</span></button><button class="nav-btn" data-action="settings"><span>05</span><b>SYSTEM</b><small>\u8A2D\u5B9A\u30FB\u64CD\u4F5C</small><span class="arrow">\u203A</span></button></nav></div><div class="signal" aria-hidden="true"></div><aside class="title-aside"><div class="eyebrow">TACTICAL FIGHTER</div><p class="ship-name">R-9 / ARROWHEAD</p><div class="tech">CERAMIC ARMOUR \xB7 WAVE CANNON<br>DETACHABLE FORCE SYSTEM<br>BLENDER MODEL / REAL-TIME PBR</div></aside><footer class="title-footer"><small>UNOFFICIAL FAN TRIBUTE \xB7 ORIGINAL 3D ASSETS & MUSIC</small><span class="footer-controls"><kbd>\u2191\u2193</kbd> SELECT &nbsp; <kbd>ENTER</kbd> CONFIRM &nbsp; <kbd>F</kbd> FULLSCREEN</span><button class="sound-toggle" data-action="credits">ABOUT / CREDITS</button></footer>`:Ye==="sortie"?zt.innerHTML=`<section class="overlay">${Ps("01 / MISSION PREPARATION","SORTIE","\u8FCE\u6483\u6A5F\u3001\u5F85\u6A5F\u5B8C\u4E86\u3002<br>\u96E3\u6613\u5EA6\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002")}<div class="launch-layout"><div><p class="section-label">ENGAGEMENT LEVEL / \u96E3\u6613\u5EA6</p><div class="difficulty-list">${Object.entries(Ur).map(([s,e])=>`<button class="difficulty ${$a===s?"selected":""}" data-difficulty="${s}"><span class="diff-name">${e.name}</span><span class="jp">${e.ja}</span><p>${s==="cadet"?"\u6B8B\u6A5F5\u30FB\u9045\u3044\u6575\u5F3E\u30FB\u88C5\u5099\u3092\u4FDD\u6301\u3057\u3066\u5FA9\u5E30":s==="arcade"?"\u6B8B\u6A5F3\u30FB\u4E00\u6483\u6B7B\u30FB\u5730\u5F62\u63A5\u89E6\u6B7B\u30FB\u88C5\u5099\u3092\u5931\u3063\u3066\u5FA9\u5E30":"\u6B8B\u6A5F3\u30FB\u9AD8\u901F\u5F3E\u30FB\u9AD8\u5BC6\u5EA6\u306E\u653B\u6483\u30FB\u6483\u3061\u8FD4\u3057\u5F3E"}</p></button>`).join("")}</div></div><div><p class="section-label">FIRST CONTACT</p><div class="mission"><div class="eyebrow">SECTOR 01 / 08</div><h2>DERELICT GATE</h2><p>\u5EC3\u68C4\u3055\u308C\u305F\u8ECC\u9053\u65BD\u8A2D\u304B\u3089\u3001\u53CD\u5FDC\u304C\u623B\u3063\u305F\u3002<br>\u305D\u306E\u5965\u3067\u5F85\u3064\u3082\u306E\u3092\u3001\u78BA\u304B\u3081\u306B\u884C\u304F\u3002</p><div class="weapon-legend"><span style="--c:#de8f55">FORCE</span><span style="--c:#76b8d0">WAVE CANNON</span></div></div><label class="check-line"><input id="classic" type="checkbox" ${pt.classic?"checked":""}>\u30AF\u30E9\u30B7\u30C3\u30AF\u30EB\u30FC\u30EB\uFF08\u6642\u9593\u6E1B\u901F\u3092\u7121\u52B9\u5316\uFF09</label><button class="launch-button" data-action="launch">LAUNCH / \u767A\u9032\u3059\u308B <span>\u2192</span></button><p class="settings-note"><kbd>\u77E2\u5370 / WASD</kbd> \u79FB\u52D5\u3000<kbd>C</kbd> \u9023\u5C04<br><kbd>Z / Space</kbd> \u9577\u62BC\u3057\u3057\u3066\u96E2\u3059\uFF1A\u6CE2\u52D5\u7832<br><kbd>X</kbd> \u30D5\u30A9\u30FC\u30B9\u5C04\u51FA\uFF0F\u56DE\u53CE</p></div></div></section>`:Ye==="practice"?zt.innerHTML=`<section class="overlay">${Ps("02 / FLIGHT TRAINING","SECTOR SELECT","\u30B9\u30C6\u30FC\u30B8\u5168\u4F53\u3001\u307E\u305F\u306F\u5404\u9762\u306E\u30DC\u30B9\u3068\u76F4\u63A5\u5BFE\u6226\u3002<br>\u7DF4\u7FD2\u4E2D\u306E\u5F97\u70B9\u306F\u30E9\u30F3\u30AD\u30F3\u30B0\u306B\u8A18\u9332\u3055\u308C\u307E\u305B\u3093\u3002")}
    <div class="encounter-switch" aria-label="\u8A13\u7DF4\u306E\u958B\u59CB\u4F4D\u7F6E"><button class="${ts==="stage"?"selected":""}" data-encounter="stage">STAGE / \u9053\u4E2D\u304B\u3089</button><button class="${ts==="boss"?"selected":""}" data-encounter="boss">BOSS / \u30DC\u30B9\u76F4\u884C</button></div>
    <div class="stages">${wt.map((s,e)=>`<button class="stage-button ${ts==="boss"?"boss-card":""}" data-stage="${e}" style="--stage-color:#${s.color.toString(16).padStart(6,"0")}"><span class="stage-no">0${e+1} / 08</span><strong>${ts==="boss"?s.boss:s.name}</strong><small>${ts==="boss"?Pi[e].role:s.ja}</small>${ts==="boss"?`<span class="boss-card-hint">${Pi[e].hint}</span>`:""}</button>`).join("")}</div>
    <div class="practice-options"><label>\u958B\u59CB\u88C5\u5099 <select id="practice-level">${[0,1,2,3].map(s=>`<option value="${s}" ${Ka===s?"selected":""}>${s===0?"\u88C5\u5099\u306A\u3057":"FORCE LV."+s}</option>`).join("")}</select></label><label>\u30EC\u30FC\u30B6\u30FC <select id="practice-weapon">${Object.entries(Li).map(([s,e])=>`<option value="${s}" ${Su===s?"selected":""}>${e.name}</option>`).join("")}</select></label><label class="check-line"><input id="practice-invincible" type="checkbox" ${dc?"checked":""}>\u30D5\u30EA\u30FC\u30D5\u30E9\u30A4\u30C8\uFF08\u88AB\u5F3E\u30FB\u63A5\u89E6\u3067\u30DF\u30B9\u3057\u306A\u3044\uFF09</label><label>\u96E3\u6613\u5EA6 <select id="practice-difficulty">${Object.entries(Ur).map(([s,e])=>`<option value="${s}" ${$a===s?"selected":""}>${e.name}</option>`).join("")}</select></label></div><p class="settings-note">\u30DC\u30B9\u76F4\u884C\u3067\u306F\u30DF\u30B9\u5F8C\u3082\u30DC\u30B9\u6226\u304B\u3089\u518D\u958B\u3057\u3001\u6483\u7834\u3059\u308B\u3068\u6B21\u306E\u9762\u306E\u30DC\u30B9\u3078\u9032\u307F\u307E\u3059\u3002\u6700\u7D42\u6838\u306F\u958B\u3044\u305F\u9699\u306B [X] \u3067\u30D5\u30A9\u30FC\u30B9\u3092\u76F4\u63A5\u9001\u308A\u8FBC\u3093\u3067\u304F\u3060\u3055\u3044\u3002</p></section>`:Ye==="hangar"?zt.innerHTML='<section class="overlay narrow" style="background:linear-gradient(90deg,#03080cf5,transparent 75%)"><button class="back" data-action="back">\u2190 BACK</button><div class="hangar-content"><div class="eyebrow">03 / TACTICAL FIGHTER HANGAR</div><h1>R-9</h1><div class="eyebrow" style="color:#92adb9">ARROWHEAD / REQUIEM SPEC.</div><p>\u767D\u3044\u30BB\u30E9\u30DF\u30C3\u30AF\u88C5\u7532\u3002\u9752\u3044\u30AD\u30E3\u30CE\u30D4\u30FC\u3002<br>\u5C0F\u3055\u306A\u6A5F\u4F53\u306B\u3001\u4EBA\u985E\u306E\u6700\u5F8C\u306E\u5207\u308A\u672D\u3092\u3002</p><div class="specs"><div class="spec"><span>PRIMARY</span><b>\u4E8C\u6BB5\u968E\u30C1\u30E3\u30FC\u30B8\u6CE2\u52D5\u7832</b></div><div class="spec"><span>FORCE</span><b>\u524D\u5F8C\u5408\u4F53 / \u5C04\u51FA / \u56DE\u53CE</b></div><div class="spec"><span>LASER SYSTEM</span><b>HELIX / REFLECT / CRAWLER</b></div><div class="spec"><span>SUPPORT</span><b>\u30D3\u30C3\u30C8 \xD7 2 / \u8FFD\u5C3E\u30DF\u30B5\u30A4\u30EB</b></div><div class="spec"><span>BUILD</span><b>Blender 5.2 / glTF 2.0</b></div></div><div class="hangar-actions"><button class="plain-btn" data-action="rotate-left">\u21B6 ROTATE</button><button class="plain-btn" data-action="rotate-right">ROTATE \u21B7</button></div><p>\u6A5F\u4F53\u30FB\u88C5\u7532\u30FB\u5404\u90E8\u306E\u91D1\u5C5E\u53CD\u5C04\u3092\u3001<br>\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u306E3D\u63CF\u753B\u3067\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002</p></div><div class="hangar-hint">PBR MATERIALS / REAL-TIME LIGHTING / ORIGINAL MESH</div></section>':Ye==="settings"?zt.innerHTML=`<section class="overlay settings">${Ps("05 / SYSTEM CONFIGURATION","SYSTEM","\u8A2D\u5B9A\u306F\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002")}<div class="settings-grid"><div><p class="section-label">DISPLAY / \u8868\u793A</p><div class="setting-row"><label for="quality">\u63CF\u753B\u54C1\u8CEA<small>RENDER RESOLUTION / BLOOM</small></label><select id="quality">${[["ultra","ULTRA"],["high","HIGH"],["medium","BALANCED"],["low","PERFORMANCE"]].map(([s,e])=>`<option value="${s}" ${pt.quality===s?"selected":""}>${e}</option>`).join("")}</select></div><div class="setting-row"><label for="shake">\u753B\u9762\u306E\u63FA\u308C<small>CAMERA IMPACT</small></label><input type="checkbox" id="shake" ${pt.shake?"checked":""}></div><div class="setting-row"><label for="crt">\u8D70\u67FB\u7DDA<small>CRT OVERLAY</small></label><input type="checkbox" id="crt" ${pt.crt?"checked":""}></div><div class="setting-row"><label for="autofire">\u81EA\u52D5\u9023\u5C04<small>CHARGE HAS PRIORITY</small></label><input type="checkbox" id="autofire" ${pt.autoFire?"checked":""}></div><div class="setting-row"><span>\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3</span><button class="plain-btn" data-action="fullscreen">\u5207\u308A\u66FF\u3048\u308B \u2197</button></div></div><div><p class="section-label">AUDIO / \u97F3\u97FF</p><div class="setting-row"><label for="volume">\u5168\u4F53\u97F3\u91CF<small>MASTER</small></label><input id="volume" type="range" min="0" max="1" step=".01" value="${pt.volume}"></div><div class="setting-row"><label for="music">\u97F3\u697D<small>MUSIC</small></label><input id="music" type="range" min="0" max="1" step=".01" value="${pt.music}"></div><div class="setting-row"><label for="sfx">\u52B9\u679C\u97F3<small>SOUND EFFECTS</small></label><input id="sfx" type="range" min="0" max="1" step=".01" value="${pt.sfx}"></div><div class="setting-row"><label for="sound-mode">\u97F3\u6E90<small>SYNTHESIS ENGINE</small></label><select id="sound-mode"><option value="modern" ${pt.soundMode==="modern"?"selected":""}>MODERN / \u30B7\u30F3\u30BB</option><option value="fm" ${pt.soundMode==="fm"?"selected":""}>ARCADE / FM</option></select></div><p class="settings-note">\u516811\u66F2\u306E\u72EC\u81EA\u697D\u66F2\u3068\u52B9\u679C\u97F3\u3092\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u5408\u6210\u3002<br>\u97F3\u306F\u6700\u521D\u306E\u30DC\u30BF\u30F3\u64CD\u4F5C\u5F8C\u306B\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002</p></div></div><div style="display:flex;gap:12px;margin-top:28px"><button class="plain-btn" data-action="help">\u64CD\u4F5C\u30FB\u30EB\u30FC\u30EB \u2192</button><button class="plain-btn" data-action="records">FLIGHT RECORDS \u2192</button></div></section>`:Ye==="help"?zt.innerHTML=`<section class="overlay">${Ps("PILOT MANUAL / FLIGHT SYSTEM","HOW TO PLAY","\u6B66\u5668\u3092\u4F7F\u3044\u5206\u3051\u3001\u5730\u5F62\u3092\u8AAD\u307F\u3001\u9699\u3092\u5F85\u3064\u3002")}<div class="help-grid"><article class="help-block"><div class="eyebrow">01 / MOVE & FIRE</div><h2>\u6483\u3061\u7D9A\u3051\u308B\u304B\u3001\u4E00\u767A\u306B\u8CED\u3051\u308B\u304B\u3002</h2><p><kbd>\u2191\u2193\u2190\u2192</kbd> / <kbd>WASD</kbd> \u3067\u79FB\u52D5\u3002<kbd>C</kbd> \u3092\u62BC\u3057\u7D9A\u3051\u308B\u3068\u9023\u5C04\u3002<kbd>Z</kbd> / <kbd>Space</kbd> \u3092\u9577\u62BC\u3057\u3059\u308B\u3068\u30C1\u30E3\u30FC\u30B8\u3002\u96E2\u3059\u3068\u3001\u6575\u3092\u8CAB\u901A\u3059\u308B\u6CE2\u52D5\u7832\u3092\u767A\u5C04\u3057\u307E\u3059\u3002\u7D041.65\u79D2\u3067\u6700\u5927\u51FA\u529B\u3002\u6E9C\u3081\u3066\u3044\u308B\u9593\u306F\u9023\u5C04\u304C\u6B62\u307E\u308A\u307E\u3059\u3002</p><p><kbd>Shift</kbd> \u30B9\u30D4\u30FC\u30C9\u5207\u66FF\uFF08S\u30A2\u30A4\u30C6\u30E0\u3067\u4E0A\u9650\u4E0A\u6607\uFF09\u3002<kbd>T</kbd> \u81EA\u52D5\u9023\u5C04\u3002<kbd>P / Esc</kbd> \u30DD\u30FC\u30BA\u3002</p></article><article class="help-block"><div class="eyebrow">02 / FORCE SYSTEM</div><h2>\u76FE\u306B\u3082\u3001\u77DB\u306B\u3082\u306A\u308B\u30D5\u30A9\u30FC\u30B9\u3002</h2><div class="force-diagram"><span class="fighter">\u27A4</span><span class="force-dot"></span><span>\u21C4</span><span class="force-dot"></span><span class="fighter">\u27A4</span></div><p><kbd>X</kbd> \u3067\u5C04\u51FA\u3001\u3082\u3046\u4E00\u5EA6\u3067\u56DE\u53CE\u3002\u6A5F\u4F53\u306E\u524D\u306B\u89E6\u308C\u308B\u3068\u524D\u65B9\u5408\u4F53\u3001\u5F8C\u308D\u306A\u3089\u5F8C\u65B9\u5408\u4F53\u3002\u901A\u5E38\u5F3E\u3092\u5438\u53CE\u3057\u3001\u63A5\u89E6\u3057\u305F\u6575\u306B\u30C0\u30E1\u30FC\u30B8\u3092\u4E0E\u3048\u307E\u3059\u3002\u5730\u5F62\u3092\u901A\u904E\u3067\u304D\u308B\u305F\u3081\u3001\u5371\u967A\u306A\u5834\u6240\u3078\u5148\u884C\u3055\u305B\u3089\u308C\u307E\u3059\u3002</p></article><article class="help-block"><div class="eyebrow">03 / POWER-UP</div><h2>\u6226\u5834\u306B\u5408\u308F\u305B\u3066\u3001\u30EC\u30FC\u30B6\u30FC\u3092\u9078\u3076\u3002</h2><p>\u767D\u3044\u88DC\u7D66\u6A5F\u3092\u58CA\u3057\u3066\u30A2\u30A4\u30C6\u30E0\u3092\u53D6\u5F97\u3002\u8D64\u306F\u87BA\u65CB\u72B6\u306E\u5BFE\u7A7A\u30EC\u30FC\u30B6\u30FC\u3001\u9752\u306F\u4E0A\u4E0B\u306E\u58C1\u3067\u53CD\u5C04\u3059\u308B\u30EC\u30FC\u30B6\u30FC\u3001\u9EC4\u306F\u5E8A\u3084\u5929\u4E95\u3092\u9019\u3046\u5BFE\u5730\u30EC\u30FC\u30B6\u30FC\u3002\u30AF\u30EA\u30B9\u30BF\u30EB3\u500B\u3067\u6700\u5927\u30EC\u30D9\u30EB\u3002\u7DD1\u306E\u88C5\u5099\u306F\u30DF\u30B5\u30A4\u30EB\u3001\u30D3\u30C3\u30C8\u3001\u30B9\u30D4\u30FC\u30C9\u3092\u5F37\u5316\u3057\u307E\u3059\u3002</p><div class="weapon-legend"><span style="--c:#ff6742">HELIX</span><span style="--c:#54b9f3">REFLECT</span><span style="--c:#eec852">CRAWLER</span></div></article><article class="help-block"><div class="eyebrow">04 / SURVIVE</div><h2>\u5C0F\u3055\u306A\u5224\u5B9A\u3002\u5927\u304D\u306A\u6C7A\u65AD\u3002</h2><p>\u88AB\u5F3E\u5224\u5B9A\u306F\u6A5F\u4F53\u4E2D\u592E\u306E\u5C0F\u3055\u306A\u9818\u57DF\u3002\u6575\u30FB\u5730\u5F62\u3068\u306E\u63A5\u89E6\u3082\u4E00\u6483\u3067\u30DF\u30B9\u3057\u3001\u76F4\u524D\u306E\u30C1\u30A7\u30C3\u30AF\u30DD\u30A4\u30F3\u30C8\u3078\u623B\u308A\u307E\u3059\u3002ARCADE\u3068ACE\u3067\u306F\u88C5\u5099\u3092\u5931\u3044\u307E\u3059\u3002\u6B8B\u6A5F\u304C\u306A\u304F\u306A\u3063\u3066\u3082\u30B3\u30F3\u30C6\u30A3\u30CB\u30E5\u30FC\u3067\u304D\u307E\u3059\u3002</p><p>\u30DC\u30B9\u306E\u88C5\u7532\u306F\u653B\u6483\u3092\u9632\u304E\u307E\u3059\u3002\u90E8\u4F4D\u3092\u58CA\u3059\u3068\u653B\u6483\u304C\u6E1B\u308A\u3001\u6226\u8266\u3067\u306F\u51B7\u5374\u88C5\u7F6E\u3001\u795E\u7D4C\u4E2D\u67A2\u3067\u306F3\u3064\u306E\u795E\u7D4C\u7BC0\u306E\u7834\u58CA\u304C\u6838\u3092\u958B\u304F\u6761\u4EF6\u3067\u3059\u3002\u753B\u9762\u4E0A\u90E8\u306E\u4E88\u544A\u3068\u653B\u7565\u30D2\u30F3\u30C8\u3092\u898B\u3066\u3001\u5149\u308B\u6838\u304C\u958B\u3044\u305F\u77AC\u9593\u3092\u72D9\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u6700\u5F8C\u306E\u6838\u306F\u30D5\u30A9\u30FC\u30B9\u306B\u3088\u308B\u76F4\u63A5\u653B\u6483\u3060\u3051\u304C\u6709\u52B9\u3067\u3059\u3002</p></article><article class="help-block"><div class="eyebrow">05 / REQUIEM DRIVE</div><h2>\u4E00\u77AC\u3092\u3001\u5207\u308A\u62D3\u304F\u3002</h2><p>\u6575\u306E\u6483\u7834\u3068\u6575\u5F3E\u3059\u308C\u3059\u308C\u306E\u56DE\u907F\u3067DRIVE\u304C\u84C4\u7A4D\u3002100%\u3067 <kbd>Q</kbd> \u3092\u62BC\u3059\u3068\u3001\u7D044.5\u79D2\u9593\u3001\u6575\u3068\u6575\u5F3E\u306E\u6642\u9593\u304C\u6E1B\u901F\u3057\u3001\u6CE2\u52D5\u7832\u306E\u30C1\u30E3\u30FC\u30B8\u304C\u901F\u304F\u306A\u308A\u307E\u3059\u3002\u30AF\u30E9\u30B7\u30C3\u30AF\u30EB\u30FC\u30EB\u3067\u306F\u7121\u52B9\u3067\u3059\u3002</p></article><article class="help-block"><div class="eyebrow">06 / OTHER CONTROLS</div><h2>\u30AD\u30FC\u30DC\u30FC\u30C9\u3001\u30D1\u30C3\u30C9\u3001\u30BF\u30C3\u30C1\u3002</h2><p>\u30B2\u30FC\u30E0\u30D1\u30C3\u30C9\uFF1A\u5DE6\u30B9\u30C6\u30A3\u30C3\u30AF / \u5341\u5B57\u30AD\u30FC\u3067\u79FB\u52D5\u3001A\u3067\u6E9C\u3081\u6483\u3061\u3001B\u3067\u30D5\u30A9\u30FC\u30B9\u3001X\u3067\u9023\u5C04\u3001Y\u3067DRIVE\u3001RB\u3067\u901F\u5EA6\u3001START\u3067\u30DD\u30FC\u30BA\u3002\u30BF\u30C3\u30C1\uFF1A\u5DE6\u5074\u306E\u30B9\u30C6\u30A3\u30C3\u30AF\u3067\u79FB\u52D5\u3001\u53F3\u306EWAVE\u3092\u9577\u62BC\u3057\u3001RAPID\u3067\u9023\u5C04\u3001FORCE\u3067\u5C04\u51FA\uFF0F\u56DE\u53CE\u3002</p><p><kbd>F</kbd> \u5168\u753B\u9762\u3001<kbd>M</kbd> \u30DF\u30E5\u30FC\u30C8\u3002\u5225\u30BF\u30D6\u3078\u79FB\u308B\u3068\u81EA\u52D5\u3067\u4E00\u6642\u505C\u6B62\u3057\u307E\u3059\u3002\u30BF\u30C3\u30C1\u7AEF\u672B\u306F\u6A2A\u5411\u304D\u304C\u304A\u3059\u3059\u3081\u3067\u3059\u3002</p></article></div></section>`:Ye==="music"?zt.innerHTML=`<section class="overlay">${Ps("04 / ORIGINAL SOUND ARCHIVE","SOUND ARCHIVE","11 compositions \xB7 real-time synthesis<br>MODERN ANALOG / ARCADE FM")}<div class="music-layout"><div class="track-list">${Is.map((s,e)=>`<button class="track ${ze.track===e?"selected":""}" data-track="${e}"><span>${String(e+1).padStart(2,"0")}</span><strong>${s.title}</strong><small>${s.bpm} BPM</small></button>`).join("")}</div><div><div class="record" aria-hidden="true"></div><div class="now-playing">${qa(Is[ze.track].title)}<small>${qa(Is[ze.track].ja)}</small></div><p class="music-disclaimer">\u672C\u4F5C\u306E\u305F\u3081\u306E\u30AA\u30EA\u30B8\u30CA\u30EB\u697D\u66F2\u3002<br>\u30B7\u30F3\u30BB\u30B5\u30A4\u30B6\u30FC\u3001FM\u97F3\u6E90\u3001\u30C9\u30E9\u30E0\u3001\u6B8B\u97FF\u3092<br>\u30D6\u30E9\u30A6\u30B6\u30FC\u5185\u3067\u5408\u6210\u3057\u3066\u3044\u307E\u3059\u3002</p><div style="text-align:center"><button class="plain-btn" data-action="export-audio" style="margin:0 8px 12px">EXPORT / WAV</button><button class="plain-btn" data-action="sound-mode">\u97F3\u6E90\uFF1A${ze.mode==="fm"?"ARCADE FM":"MODERN"}</button></div></div></div></section>`:Ye==="records"?zt.innerHTML=`<section class="overlay">${Ps("PERSONAL FLIGHT LOG","FLIGHT RECORDS","\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u30FC\u306E\u4E0A\u4F4D10\u8A18\u9332\u3002<br>\u7DF4\u7FD2\u30E2\u30FC\u30C9\u306F\u8A18\u9332\u5BFE\u8C61\u5916\u3067\u3059\u3002")}${hn.length?hn.map((s,e)=>`<div class="record-row"><span class="rank">${String(e+1).padStart(2,"0")}</span><strong>${Ya(s.score)}</strong><small>${qa(s.difficulty.toUpperCase())} \xB7 ${s.clear?"CLEAR":"ST "+(s.stage+1)}</small><small class="record-date">${qa(s.date)}</small></div>`).join(""):'<p class="empty-records">\u307E\u3060\u30D5\u30E9\u30A4\u30C8\u8A18\u9332\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6700\u521D\u306E\u51FA\u6483\u3092\u3002</p>'}</section>`:Ye==="credits"?zt.innerHTML=`<section class="overlay">${Ps("REQUIEM / PROJECT NOTES","ABOUT THIS FLIGHT")}<div class="credits"><p><strong>R-TYPE // REQUIEM</strong><br>\u6A2A\u30B9\u30AF\u30ED\u30FC\u30EBSTG\u306E\u540D\u4F5C\u306B\u656C\u610F\u3092\u8868\u3057\u305F\u3001\u975E\u516C\u5F0F\u306E\u30D5\u30A1\u30F3\u4F5C\u54C1\u3067\u3059\u3002\u7740\u8131\u5F0F\u30D5\u30A9\u30FC\u30B9\u3001\u6E9C\u3081\u6483\u3061\u30013\u8272\u30EC\u30FC\u30B6\u30FC\u3001\u5730\u5F62\u653B\u7565\u3068\u30C1\u30A7\u30C3\u30AF\u30DD\u30A4\u30F3\u30C8\u5FA9\u5E30\u3092\u57FA\u790E\u306B\u30018\u3064\u306E\u72EC\u81EA\u6226\u5834\u3092\u5236\u4F5C\u3057\u307E\u3057\u305F\u3002</p><p>\u6A5F\u4F53\u30FB\u6575\u306E3D\u30E2\u30C7\u30EB\u306FBlender 5.2\u3067\u65B0\u898F\u5236\u4F5C\u3002PBR\u6750\u8CEA\u3001\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u7167\u660E\u3001\u30D6\u30EB\u30FC\u30E0\u3001\u5965\u884C\u304D\u306E\u3042\u308B\u69CB\u9020\u7269\u3001\u7C92\u5B50\u6F14\u51FA\u3092Three.js\u3067\u63CF\u753B\u3057\u3066\u3044\u307E\u3059\u3002\u7DE8\u96C6\u7528.blend\u3068\u5236\u4F5C\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u30BD\u30FC\u30B9\u306B\u542B\u3081\u3066\u3044\u307E\u3059\u3002</p><p>\u516811\u66F2\u306E\u65CB\u5F8B\u30FB\u4F34\u594F\u3068\u52B9\u679C\u97F3\u306F\u672C\u4F5C\u7528\u306B\u5236\u4F5C\u3057\u3001Web Audio\u3067\u5408\u6210\u3057\u3066\u3044\u307E\u3059\u3002\u65E2\u5B58\u30B2\u30FC\u30E0\u306E\u9332\u97F3\u30FB\u753B\u50CF\u30FB\u30E2\u30C7\u30EB\u30FB\u30B3\u30FC\u30C9\u3092\u53D6\u308A\u8FBC\u3093\u3067\u3044\u307E\u305B\u3093\u3002</p><p><strong>DEVELOPED WITH CODEX</strong><br>3D MODELLING \xB7 BLENDER<br>RENDERING \xB7 THREE.JS / WEBGL 2<br>AUDIO \xB7 WEB AUDIO API<br>DESIGN \xB7 A TRIBUTE TO THE ARCADE SPIRIT</p><p class="attribution">\u300CR-TYPE\u300D\u304A\u3088\u3073\u539F\u4F5C\u306B\u95A2\u3059\u308B\u6A29\u5229\u306F\u5404\u6A29\u5229\u8005\u306B\u5E30\u5C5E\u3057\u307E\u3059\u3002\u672C\u4F5C\u306F\u6A29\u5229\u8005\u306B\u3088\u308B\u516C\u5F0F\u4F5C\u54C1\u3067\u306F\u306A\u304F\u3001\u95A2\u4FC2\u30FB\u63D0\u643A\u30FB\u627F\u8A8D\u3092\u793A\u3059\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u539F\u4F5C\u306E\u5B8C\u5168\u79FB\u690D\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002Three.js: MIT License\u3002\u8A73\u7D30\u306F\u914D\u5E03\u30BD\u30FC\u30B9\u306Edocs\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002</p></div></section>`:Ye==="play"?Wv():Ye==="pause"?zt.innerHTML=`<div class="pause-overlay"><div class="pause-panel"><div class="eyebrow">FLIGHT SUSPENDED / SECTOR 0${re.stage+1}</div><h1>PAUSED</h1><p>${wt[re.stage].name} / ${wt[re.stage].ja}<br>\u5C11\u3057\u606F\u3092\u6574\u3048\u3066\u3001\u3082\u3046\u4E00\u5EA6\u3002</p><div class="pause-nav"><button class="solid-btn" data-action="resume">RESUME / \u6226\u95D8\u518D\u958B</button><button class="plain-btn" data-action="settings">SYSTEM / \u8A2D\u5B9A</button><button class="plain-btn" data-action="help">PILOT MANUAL / \u64CD\u4F5C\u65B9\u6CD5</button><button class="plain-btn" data-action="retry">RETRY CHECKPOINT / \u518D\u51FA\u6483</button><button class="plain-btn" data-action="title">RETURN TO TITLE</button></div><div class="pause-foot">ESC / P TO RESUME</div></div></div>`:Ye==="gameover"?zt.innerHTML=`<div class="pause-overlay"><div class="pause-panel"><div class="eyebrow">SIGNAL LOST / SECTOR 0${re.stage+1}</div><h1>LOST.</h1><p>\u305D\u306E\u822A\u8DE1\u306F\u3001\u307E\u3060\u6D88\u3048\u3066\u3044\u306A\u3044\u3002<br>SCORE ${Ya(re.score)} / ${re.kills} KILLS<br>\u30C1\u30A7\u30C3\u30AF\u30DD\u30A4\u30F3\u30C8\u304B\u3089\u3001\u3082\u3046\u4E00\u5EA6\u3002</p><div class="pause-nav"><button class="solid-btn" data-action="continue">CONTINUE / \u7D9A\u3051\u308B</button><button class="plain-btn" data-action="title">RETURN TO TITLE</button></div></div></div>`:Ye==="ending"&&(zt.innerHTML=`<section class="overlay ending"><div class="eyebrow">ALL SECTORS CLEAR / FLIGHT COMPLETE</div><h1>HOMEWARD.</h1><p>\u5411\u3053\u3046\u5074\u306B\u3001\u671D\u304C\u3042\u3063\u305F\u3002<br>\u6700\u5F8C\u306E\u4E00\u6A5F\u304C\u3001\u3044\u307E\u5E30\u9084\u3059\u308B\u3002</p><div class="result-stats"><div><span>FINAL SCORE</span><strong>${Ya(re.score)}</strong></div><div><span>DESTROYED</span><strong>${re.kills}</strong></div><div><span>BEST CHAIN</span><strong>${re.bestCombo}</strong></div></div><p style="font-size:10px;letter-spacing:3px;color:#758f9d">DESIGN & DEVELOPMENT WITH CODEX<br>BLENDER / THREE.JS / WEB AUDIO<br>THANK YOU FOR FLYING.</p><button class="solid-btn" data-action="title">RETURN TO TITLE</button><button class="plain-btn" data-action="music">SOUND ARCHIVE</button></section>`)}function Wv(){zt.innerHTML=`<div class="hud"><div class="hud-top"><div><div class="score-label">SCORE</div><div class="score-value" id="score">00000000</div></div><div class="hud-center"><div class="sector-name" id="sector-name"></div><div class="stage-progress"><i id="progress"></i></div></div><div class="hud-right"><div class="score-label">HI ${Ya(xu)}</div><div class="life-icons" id="lives"></div><div class="hud-actions"><button class="hud-btn" data-action="autofire" id="auto-btn">AUTO OFF [T]</button><button class="hud-btn" data-action="pause">\u2161 PAUSE</button></div></div></div><div class="boss-hud" id="boss-hud" hidden><div class="boss-label"><span id="boss-name"></span><span id="boss-hp"></span></div><div class="boss-health"><i id="boss-bar"></i></div><div class="boss-window" id="boss-window"></div><div class="boss-parts" id="boss-parts"></div><div class="boss-hint" id="boss-hint"></div></div><div class="combo" id="combo"></div><div class="hud-bottom"><div class="equipment"><div><b id="weapon"></b> <span id="weapon-level"></span></div><div id="support"></div><div class="force-indicator" id="force-status"></div></div><div><div class="charge-label"><span>WAVE CANNON</span><span id="charge-label">STANDBY</span></div><div class="charge-meter" id="charge-meter"><i id="charge-bar"></i></div><div class="charge-help">HOLD [Z / SPACE] \u2192 RELEASE &nbsp; \xB7 &nbsp; RAPID [C] &nbsp; \xB7 &nbsp; FORCE [X]</div></div><div class="drive-box"><div class="drive-value" id="drive-value"></div><div class="drive-help" id="drive-help"></div></div></div><div class="toast" id="toast"></div><div id="announcement"></div><div id="special-message"></div>${re.options.practice?`<div class="practice-badge">FLIGHT TRAINING ${re.debugInvincible?" / FREE FLIGHT":""}</div>`:""}<div class="rotate-hint">\u6A2A\u5411\u304D\u306B\u3059\u308B\u3068\u3001\u6226\u5834\u3092\u3088\u308A\u5927\u304D\u304F\u8868\u793A\u3067\u304D\u307E\u3059</div>${Tu?'<output id="telemetry" class="telemetry" aria-live="off"></output>':""}</div>`,vu=0,pp()}function pp(){if(Ye!=="play"||!re)return;let s=re.player,e=wt[re.stage];Ve("#score").textContent=Ya(re.score),Ve("#sector-name").textContent=`0${re.stage+1} / 08 \u2014 ${e.name}`,Ve("#progress").style.width=nt(re.time/e.duration*100,0,100)+"%",Ve("#lives").innerHTML=re.options.practice?"<span>\u221E</span>":Array.from({length:Math.max(0,Math.min(7,re.lives))},()=>"<i></i>").join(""),Ve("#weapon").textContent=s.level?Li[s.weapon].name:"VULCAN",Ve("#weapon").style.color=s.level?"#"+Li[s.weapon].color.toString(16):"#bbd5db",Ve("#weapon-level").textContent="LV."+s.level,Ve("#support").textContent=`SPD ${s.speed}/${s.maxSpeed} \xB7 BIT ${s.bits} \xB7 MSL ${s.missiles}`,Ve("#force-status").textContent="FORCE / "+{none:"OFFLINE",front:"FRONT DOCK",rear:"REAR DOCK",launch:"LAUNCH",free:"FREE FLIGHT",return:"RECALL"}[re.force.mode],Ve("#charge-bar").style.width=s.charge*100+"%",Ve("#charge-meter").classList.toggle("full",s.charge>=.99),Ve("#charge-label").textContent=s.charge>=.99?"MAXIMUM":s.charge>0?Math.floor(s.charge*100)+"%":"STANDBY",Ve("#drive-value").textContent=re.options.classic?"CLASSIC":re.driveTime>0?"DRIVE ACTIVE":`DRIVE ${Math.floor(re.drive)}%`,Ve("#drive-value").classList.toggle("ready",re.drive>=100),Ve("#drive-help").textContent=re.options.classic?"ORIGINAL RULES":re.drive>=100?"[Q] REQUIEM DRIVE":"DESTROY / GRAZE TO CHARGE",Ve("#auto-btn").textContent=Ns?"AUTO ON [T]":"AUTO OFF [T]";let t=re.boss;Ve("#boss-hud").hidden=!t,t&&(Ve("#boss-name").textContent=e.boss+(t.phase?" / PHASE 02":""),Ve("#boss-hp").textContent=Math.ceil(t.hp/t.maxHp*100)+"%",Ve("#boss-bar").style.width=nt(t.hp/t.maxHp*100,0,100)+"%",Ve("#boss-hud").dataset.state=t.open?"open":"closed",Ve("#boss-window").textContent=t.status,Ve("#boss-hint").textContent=t.hint,Ve("#boss-parts").textContent=`SUBSYSTEMS ${t.parts.filter(a=>a.hp>0).length} / ${t.parts.length}`);let i=Ve("#combo");i.style.opacity=re.combo>2?"1":"0",i.innerHTML=`${re.combo} CHAIN <span>PRECISION ELIMINATION</span>`,Ve("#toast").textContent=uc>0?up:"";let n=Ve("#announcement");un?n.innerHTML=un.html:n.innerHTML="";let r=Ve("#special-message");r.innerHTML=Cr>0?`<div class="boss-warning"><small>WARNING / MASSIVE HOSTILE SIGNATURE</small><h2>${e.boss}</h2><small>${e.bossJa}</small></div>`:re.mode==="stageclear"?`<div class="clear-text"><div class="eyebrow">HOSTILE SIGNATURE ELIMINATED</div><h2>SECTOR CLEAR</h2><p>${e.name} / NEXT COORDINATES ACQUIRED</p></div>`:"",Tu&&(Ve("#telemetry").textContent=`FPS ${Math.round(_u)} | DRAW ${di.drawCalls} | ${di.quality}
ST ${re.stage+1} T ${re.time.toFixed(1)} | ${re.mode}
ENEMY ${re.enemies.length} BULLET ${re.bullets.length}
KILLS ${re.kills} DEATHS ${re.deaths}
FORCE ${re.force.mode} | BOSS ${t?Math.round(t.hp):"\u2014"}
${document.visibilityState} / ${ze.ctx?.state||"audio waiting"}
${di.gpu}`)}function cp(s=!1){if(!(hc||re.options.practice)){hc=!0,hn.push({score:re.score,difficulty:re.options.difficulty,stage:re.stage,clear:s,kills:re.kills,date:new Date().toLocaleDateString("ja-JP")}),hn.sort((e,t)=>t.score-e.score),hn=hn.slice(0,10),xu=Math.max(xu,re.score);try{localStorage.setItem("requiem-records-v1",JSON.stringify(hn))}catch{}}}function mp(s){ze.start(),ze.effect("ui"),s==="sortie"?ui("sortie"):s==="launch"?Eu():["practice","hangar","credits"].includes(s)?(re&&(re=null),ui(s)):s==="settings"||s==="help"||s==="records"?Gv(s):s==="music"?(re=null,ui("music"),ze.play(0),Rr()):s==="back"?ui(Za==="pause"&&re?"pause":"title"):s==="title"?Hv():s==="pause"||s==="resume"?Pr():s==="retry"?(re.respawn(),re.paused=!1,ui("play")):s==="continue"?(re.continueGame(),hc=!1,ui("play"),ze.play(wt[re.stage].track)):s==="mute"?fp():s==="fullscreen"?dp():s==="rotate-left"?di.heroAngle-=.45:s==="rotate-right"?di.heroAngle+=.45:s==="sound-mode"?(pt.soundMode=pt.soundMode==="modern"?"fm":"modern",ze.mode=pt.soundMode,Ls(),Rr()):s==="export-audio"?Xv():s==="autofire"&&(Ns=!Ns,Un(Ns?"AUTO FIRE / ON":"AUTO FIRE / OFF",1.5))}async function Xv(){let s=Ve('[data-action="export-audio"]');if(!(!s||s.disabled)){s.disabled=!0,s.textContent="RENDERING\u2026";try{let e=await ze.renderTrack(ze.track),t=URL.createObjectURL(e.blob),i=document.createElement("a");if(i.href=t,i.download=`REQUIEM-${String(ze.track+1).padStart(2,"0")}-${ze.mode}.wav`,i.click(),setTimeout(()=>URL.revokeObjectURL(t),1e4),s.textContent="WAV SAVED / 32 SEC",Tu){let n=document.createElement("output");n.id="audio-result",n.textContent=`AUDIO CHECK / PEAK ${e.peak.toFixed(4)} / RMS ${e.rms.toFixed(4)} / ${e.rate} HZ STEREO`,s.after(n)}}catch(e){s.textContent="EXPORT FAILED / \u518D\u8A66\u884C",console.error("Audio export:",e)}finally{s.disabled=!1}}}zt.addEventListener("click",s=>{let e=s.target.closest("button");e&&(e.dataset.action&&mp(e.dataset.action),e.dataset.difficulty&&($a=e.dataset.difficulty,Rr(),ze.effect("ui")),e.dataset.stage!==void 0&&Eu(Number(e.dataset.stage),!0,ts==="boss"),e.dataset.encounter&&(ts=e.dataset.encounter,Rr()),e.dataset.track!==void 0&&(ze.start(),ze.play(Number(e.dataset.track)),Rr()))});zt.addEventListener("input",s=>{let e=s.target.id;if(["volume","music","sfx"].includes(e)){let t=nt(Number(s.target.value),0,1);pt[e]=t,ze[e==="music"?"musicVolume":e==="sfx"?"sfxVolume":"volume"]=t,ze.apply(),Ls()}});zt.addEventListener("change",s=>{let e=s.target.id,t=s.target.value;e==="classic"&&(pt.classic=s.target.checked,Ls()),e==="practice-level"&&(Ka=Number(t)),e==="practice-weapon"&&(Su=t),e==="practice-invincible"&&(dc=s.target.checked),e==="practice-difficulty"&&($a=t),e==="quality"&&(pt.quality=t,di.quality=t,di.resize(),Ls()),e==="sound-mode"&&(pt.soundMode=t,ze.mode=t,Ls()),["shake","crt"].includes(e)&&(pt[e]=s.target.checked,Ls()),e==="autofire"&&(pt.autoFire=s.target.checked,Ns=pt.autoFire,Ls())});function yu(s){let e=[...zt.querySelectorAll("button")].filter(i=>!i.disabled&&i.offsetParent!==null);if(!e.length)return;let t=e.indexOf(document.activeElement);e[(t+s+e.length)%e.length].focus({preventScroll:!0})}window.addEventListener("keydown",s=>{if(bu&&!(s.target.matches("input,select")&&s.code!=="Escape")&&(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","Tab"].includes(s.code)&&Ye==="play"&&s.preventDefault(),["ArrowUp","ArrowDown","Space"].includes(s.code)&&Ye!=="play"&&s.preventDefault(),Ir.has(s.code)||Hi.add(s.code),Ir.add(s.code),!s.repeat)){if(ze.start(),s.code==="KeyM"){fp();return}if(s.code==="KeyF"){dp();return}if(s.code==="Escape"||s.code==="KeyP"){Ye==="play"||Ye==="pause"?Pr():Ye!=="title"&&ui(Za==="pause"&&re?"pause":"title");return}Ye==="play"?s.code==="KeyT"&&mp("autofire"):(s.code==="ArrowDown"&&yu(1),s.code==="ArrowUp"&&yu(-1),s.code==="Space"&&(s.preventDefault(),document.activeElement?.click()))}});window.addEventListener("keyup",s=>Ir.delete(s.code));window.addEventListener("blur",()=>{Ir.clear(),Hi.clear(),_i.fire=!1,_i.rapid=!1,ze.stopCharge()});document.addEventListener("visibilitychange",()=>{document.hidden&&Ye==="play"?(gu=!0,Pr()):!document.hidden&&gu&&(gu=!1,Un("\u5B89\u5168\u306E\u305F\u3081\u4E00\u6642\u505C\u6B62\u3057\u307E\u3057\u305F\u3002\u518D\u958B\u30DC\u30BF\u30F3\u3067\u623B\u308C\u307E\u3059\u3002"))});function qv(s){let e=navigator.getGamepads?.(),t=e&&Array.from(e).find(Boolean);if(!t)return mu=[],{};let i=t.buttons.map(l=>l.pressed),n=l=>i[l]&&!mu[l],r=Math.abs(t.axes[0]||0)>.16?t.axes[0]:0,a=Math.abs(t.axes[1]||0)>.16?-t.axes[1]:0;Ye==="play"&&n(9)||Ye==="pause"&&n(9)?Pr():Ye!=="play"&&Ye!=="pause"&&(s-lp>.2&&(i[12]||i[13]||Math.abs(a)>.5)&&(yu(i[12]||a>.5?-1:1),lp=s),n(0)&&document.activeElement?.click(),n(1)&&Ye!=="title"&&ui(Za==="pause"&&re?"pause":"title"));let o={x:r+(i[15]?1:0)-(i[14]?1:0),y:a+(i[12]?1:0)-(i[13]?1:0),fire:i[0],rapid:i[2],force:n(1),drive:n(3),speed:n(5)};return mu=i,o}function Yv(s){let e=(...t)=>t.some(i=>Ir.has(i));return{x:nt((e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0)+_i.x+(s.x||0),-1,1),y:nt((e("ArrowUp","KeyW")?1:0)-(e("ArrowDown","KeyS")?1:0)+_i.y+(s.y||0),-1,1),fire:e("KeyZ","Space","KeyJ")||_i.fire||s.fire,rapid:Ns||e("KeyC","KeyL")||_i.rapid||s.rapid,force:Hi.has("KeyX")||Hi.has("KeyK")||Hi.has("TouchForce")||s.force,drive:Hi.has("KeyQ")||s.drive,speed:Hi.has("ShiftLeft")||Hi.has("ShiftRight")||s.speed}}function $v(){let s=Ve("#stick"),e=s.querySelector("i"),t=null,i=r=>{let a=s.getBoundingClientRect(),o=(r.clientX-a.left-a.width/2)/44,l=(r.clientY-a.top-a.height/2)/44,c=Math.max(1,Math.hypot(o,l));_i.x=o/c,_i.y=-l/c,e.style.transform=`translate(${_i.x*37}px,${-_i.y*37}px)`};s.addEventListener("pointerdown",r=>{t=r.pointerId,s.setPointerCapture(t),i(r),ze.start()}),s.addEventListener("pointermove",r=>{r.pointerId===t&&i(r)});let n=()=>{t=null,_i.x=0,_i.y=0,e.style.transform=""};s.addEventListener("pointerup",n),s.addEventListener("pointercancel",n),document.querySelectorAll("[data-touch]").forEach(r=>{let a=r.dataset.touch;r.addEventListener("pointerdown",l=>{r.setPointerCapture(l.pointerId),r.classList.add("active"),a==="force"?Hi.add("TouchForce"):_i[a]=!0,ze.start()});let o=()=>{r.classList.remove("active"),a!=="force"&&(_i[a]=!1)};r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o)})}function Kv(){for(let s of re.drainEvents())di.event(s),ze.effect(s.type,s),s.type==="stage"&&(ze.play(wt[s.index].track),un={time:4.5,html:`<div class="stage-announcement"><div class="sector">SECTOR 0${s.index+1} / 08</div><h2>${s.name}</h2><p>${s.ja}</p></div>`},s.index===0&&Un(`C\uFF1A\u9023\u5C04\u3000Z\u9577\u62BC\u3057\u2192\u96E2\u3059\uFF1A\u6CE2\u52D5\u7832\u3000X\uFF1A\u30D5\u30A9\u30FC\u30B9
\u88DC\u7D66\u6A5F\u3092\u7834\u58CA\u3057\u3066\u30AF\u30EA\u30B9\u30BF\u30EB\u3092\u53D6\u5F97`,7)),s.type==="pickup"&&Un(Li[s.item]?`${Li[s.item].name} / ${Li[s.item].ja}`:s.item==="bit"?"BIT SYSTEM ONLINE":s.item==="speed"?"SPEED UPGRADE":"HOMING MISSILE ONLINE",2),s.type==="boss"&&(Cr=3,un=null,ze.play(8)),s.type==="respawn"&&(ze.play(wt[re.stage].track),Un("CHECKPOINT RESTORED / \u88DC\u7D66\u6A5F\u3092\u6355\u6349",3)),s.type==="extend"&&Un("EXTEND / \u6B8B\u6A5F +1",3),s.type==="drive"&&Un("REQUIEM DRIVE / \u6642\u9593\u6E1B\u901F",2),s.type==="gameover"&&(cp(),ui("gameover")),s.type==="victory"&&(cp(!0),ui("ending"),ze.play(10))}function gp(s){requestAnimationFrame(gp);let e=s*.001,t=fu?e-fu:1/60,i=nt(t,0,.1);if(fu=e,pu++,lc+=t,lc>.6&&(_u=pu/lc,pu=0,lc=0),cc=Math.max(0,cc-i),t<.2&&document.visibilityState==="visible"&&cc===0&&(Wa=_u<40?Wa+i:Math.max(0,Wa-i*2),Wa>3)){let o=["ultra","high","medium","low"],l=o.indexOf(di.quality);l<3&&(di.quality=o[l+1],di.resize()),Wa=0,cc=7}let n=qv(e);if(Ye==="play"&&re){Xa+=i;let o=!0;for(;Xa>=1/60;){let l=Yv(o?n:{...n,force:!1,drive:!1,speed:!1});re.update(1/60,l),Xa-=1/60,o=!1,Hi.clear(),Kv()}}else Hi.clear(),Xa=0;uc=Math.max(0,uc-i),Cr=Math.max(0,Cr-i),un&&(un.time-=i,un.time<=0&&(un=null));let r=Ye==="play"&&re?.mode==="playing"&&!re.paused&&re.player.fireWas;ze.syncCharge(r?re.player.charge:0,r,re?.player.x||0),ze.tick();let a=re&&["play","pause","gameover","ending","settings","help","records"].includes(Ye);di.render(a?re:null,i,Ye),e-vu>.08&&(pp(),vu=e)}function Zv(s){Ve("#loading").style.display="none",zt.innerHTML=`<div class="error-panel"><div><div class="eyebrow">FLIGHT SYSTEM / INITIALIZATION FAILED</div><h1>\u63CF\u753B\u30B7\u30B9\u30C6\u30E0\u3092\u8D77\u52D5\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002</h1><p>WebGL 2\u3092\u4F7F\u7528\u3067\u304D\u308BChrome\u30FBEdge\u30FBFirefox\u3067\u958B\u304D\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30D6\u30E9\u30A6\u30B6\u30FC\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u3082\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><p>${qa(s?.message||s)}</p><button class="solid-btn" id="reload">\u518D\u8AAD\u307F\u8FBC\u307F</button></div></div>`,Ve("#reload").onclick=()=>location.reload()}window.addEventListener("renderer-lost",()=>{Ye==="play"&&Pr(),Un("\u63CF\u753B\u306E\u5FA9\u65E7\u3092\u5F85\u3063\u3066\u3044\u307E\u3059\u3002\u5FA9\u65E7\u5F8C\u306B\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u307E\u3059\u3002",20)});async function Jv(){try{if(di=new ac(Mu,pt),await di.load(s=>{Ve("#load-bar").style.width=15+s*85+"%",Ve("#load-label").textContent=`BLENDER ASSETS / ${Math.floor(s*100)}%`}),bu=!0,$v(),ui("title"),Ve("#loading").style.opacity="0",setTimeout(()=>Ve("#loading").style.display="none",750),is.has("stage")){let s=nt(Number(is.get("stage"))-1,0,7);Ka=nt(Number(is.get("loadout")||2),0,3),dc=is.get("free")==="1",Eu(s,!0,is.get("encounter")==="boss")}requestAnimationFrame(gp)}catch(s){console.error("Flight system:",s),Zv(s)}}Jv();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
