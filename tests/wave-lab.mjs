import {Renderer} from '../src/renderer.js';
import {AudioEngine} from '../src/audio.js';
import {Game} from '../src/core.js';

const state=document.querySelector('#state'),output=document.querySelector('#result'),audio=new AudioEngine({music:0});
const renderer=new Renderer(document.querySelector('canvas'),{quality:'high',shake:false});
const game=new Game({practice:true});game.debugInvincible=true;game.player.invuln=0;
await renderer.load();renderer.render(game,1/60);state.textContent='READY';
document.querySelector('#charge').onclick=()=>{
  audio.start().then(()=>audio.syncCharge(1,true,-9));game.player.charge=1;game.player.fireWas=true;game.shots=[];renderer.render(game,0);state.textContent='CHARGE / 最大チャージの電場・収束粒子';
};
document.querySelector('#fire').onclick=()=>{
  audio.start().then(()=>audio.waveShot(2,-9));game.player.charge=1;game.shoot(true);game.player.charge=0;game.player.fireWas=false;
  const shot=game.shots.at(-1);shot.x=-1;shot.age=.18;
  renderer.event({type:'wave',x:-9,y:0,power:2});renderer.render(game,.055);state.textContent='FIRE / 白い核・螺旋プラズマ・発射余波';
};
document.querySelector('#cancel').onclick=()=>{
  audio.stopCharge();game.player.charge=0;game.player.fireWas=false;game.shots=[];renderer.waveFX.reset();renderer.render(game,0);state.textContent='STOPPED';
};
document.querySelector('#flight').onclick=()=>{renderer.render(game,.2);state.textContent='FLIGHT / 螺旋プラズマと余波の減衰';};
document.querySelector('#audio-test').onclick=async()=>{
  const button=document.querySelector('#audio-test');button.disabled=true;output.textContent='RENDERING';
  try{
    const results=[];
    for(const mode of ['modern','fm'])for(const power of [.5,1,2]){
      audio.mode=mode;const result=await audio.renderWeaponDemo(power);
      if(!(result.peak>.02&&result.peak<.98&&result.rms>.003))throw new Error(`音量範囲外: ${mode}/${power} ${result.peak}/${result.rms}`);
      results.push({mode,power,peak:result.peak,rms:result.rms,seconds:result.seconds});
      if(mode==='modern'&&power===2){const a=document.createElement('a');a.href=URL.createObjectURL(result.blob);a.download='REQUIEM-wave-cannon-modern.wav';a.textContent='波動砲の試聴WAV';document.querySelector('aside').append(a);a.click();}
    }
    // 蓄積だけを停止し、残響も消えた末尾が無音へ戻るかを独立に確認する。
    const stopped=new AudioEngine({music:0});stopped.ctx=new OfflineAudioContext(2,44100*3,44100);stopped.buildGraph();stopped.started=true;
    stopped.syncCharge(.8,true,0,.05);stopped.stopCharge(.5);
    if(stopped.chargeVoice!==null)throw new Error('停止後に蓄積音の参照が残っています');
    const buffer=await stopped.ctx.startRendering();let tail=0;
    for(const sample of buffer.getChannelData(0).subarray(44100*2.8))tail=Math.max(tail,Math.abs(sample));
    if(tail>.0001)throw new Error('停止後に音が残っています: '+tail);
    output.textContent='PASS / 3段階 × 2音源 / 停止後の無音復帰\n'+JSON.stringify({results,stoppedTailPeak:tail},null,2);state.textContent='AUDIO PASS';
  }catch(error){output.textContent='FAIL: '+error.stack;state.textContent='AUDIO FAIL';}finally{button.disabled=false;}
};
window.addEventListener('error',e=>{output.textContent='ERROR: '+e.message;});
