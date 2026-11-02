import {Game,STAGES} from '../src/core.js';
import {BOSS_PROFILES,bossPartPosition,hitBoss} from '../src/bosses.js';
import {Renderer} from '../src/renderer.js';
import {AudioEngine} from '../src/audio.js';
import {pilotInput} from './boss-pilot.mjs';

const $=s=>document.querySelector(s),renderer=new Renderer($('#view'),{quality:'high',shake:false}),audio=new AudioEngine({music:0});
let game,stage=0,running=false,frame=0,previous=0,accumulator=0;
$('#stage').innerHTML=STAGES.map((s,i)=>`<option value="${i}">0${i+1} / ${s.boss}</option>`).join('');
for(const control of document.querySelectorAll('button,select'))control.disabled=true;
await renderer.load();
/** 現在の状態と描画負荷を検証ページへ書き出す。 */
function report(){const b=game.boss;$('#result').textContent=`ST ${game.stage+1} / ${b?.type} / ${game.mode}\n${b?.state} / OPEN ${b?.open} / PHASE ${b?.phase}\nHP ${b?.hp.toFixed(1)} / PARTS ${b?.parts.map(p=>p.hp.toFixed(0)).join(',')}\nHAZARDS ${b?.hazards.length} / BULLETS ${game.bullets.length}\nDRAW ${renderer.drawCalls} / GEOMETRY ${renderer.webgl.info.memory.geometries} / TEXTURES ${renderer.webgl.info.memory.textures}\n${renderer.gpu}`;$('#hint').textContent=BOSS_PROFILES[game.stage].hint;$('#badge').textContent=`0${game.stage+1} / ${STAGES[game.stage].boss}`;$('#status').textContent=b?.status||game.mode;}
/** ゲーム本体のボス戦を初期化する。 */
function reset(){running=false;renderer.clearEntities();renderer.removeBoss();renderer.combatFX.reset();renderer.waveFX.update(null,0);renderer.particles=[];renderer.impact=0;renderer.shake=0;game=new Game({stage,practice:true,difficulty:'cadet',bossPractice:true});game.debugInvincible=true;game.player.invuln=0;for(let i=0;i<3;i++)game.collect('red');game.collect('bit');game.collect('bit');game.force.mode='front';game.drainEvents();for(let i=0;i<195;i++)step(false);renderer.render(game,0);report();}
/** 実際のイベント経路を使い、固定1フレームを処理する。 */
function step(pilot=false){game.update(1/60,pilot?pilotInput(game,frame++):{});for(const e of game.drainEvents()){renderer.event(e);audio.effect(e.type,e);}if(!running){renderer.combatFX.update(game,1/60);renderer.waveFX.update(game,1/60);}}
/** 指定状態の実際のフレームまで進める。 */
function pose(mode){
  reset();const b=game.boss;
  if(mode==='phase')b.hp=b.maxHp*.4;
  if(mode==='break'||(mode==='open'&&[2,5].includes(stage)))for(const p of b.parts){const q=bossPartPosition(b,p);hitBoss(game,{...q,r:.1,damage:100,pierce:true,type:'wave',hit:new Set()});}
  for(let i=0;i<1800;i++){
    step();
    if(mode==='guard'||mode==='phase'||mode==='break'){if(i>10)break;}
    else if(mode==='open'&&b.open&&b.openness>.9)break;
    else if(mode==='attack'&&(b.hazards.some(h=>h.age>=h.warn+.2)||['bite','sweep','systole'].includes(b.state)&&b.stateTime>.45||stage===0&&b.state==='barrage'||stage===5&&b.state==='network'&&b.stateTime>2))break;
  }
  if(mode!=='break'&&mode!=='phase')renderer.particles=[];
  renderer.render(game,.04);report();
}
$('#stage').onchange=()=>{stage=Number($('#stage').value);reset();};
$('#next').onclick=()=>{stage=(stage+1)%8;$('#stage').value=String(stage);reset();};
for(const mode of ['guard','open','attack','break','phase'])$('#'+mode).onclick=()=>pose(mode);
$('#pilot').onclick=async()=>{await audio.start();running=true;previous=0;};
$('#freeze').onclick=()=>{running=false;report();};
$('#step').onclick=()=>{for(let i=0;i<30;i++)step();renderer.render(game,.5);report();};
$('#clean').onclick=()=>{$('aside').classList.toggle('hidden');};
window.addEventListener('keydown',e=>{if(e.code==='KeyH')$('aside').classList.toggle('hidden');});
window.addEventListener('error',e=>$('#result').textContent+='\nERROR: '+e.message);
/** 実時間の操作ボット。停止中も最後のGPUフレームを保持する。 */
function tick(now){requestAnimationFrame(tick);if(!running)return;const dt=previous?Math.min(.1,(now-previous)/1000):1/60;previous=now;accumulator+=dt;while(accumulator>=1/60){step(true);accumulator-=1/60;}renderer.render(game,dt);report();}
reset();for(const control of document.querySelectorAll('button,select'))control.disabled=false;requestAnimationFrame(tick);
