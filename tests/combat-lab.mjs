import {Game} from '../src/core.js';
import {Renderer} from '../src/renderer.js';
import {AudioEngine} from '../src/audio.js';

const renderer=new Renderer(document.querySelector('canvas'),{quality:'high',shake:false});
const audio=new AudioEngine({music:0}),result=document.querySelector('#result');
let game,enemy;
await renderer.load();
/** 対象を配置し、前の敵や演出を残さない。 */
function reset(hp=2){
  game=new Game({practice:true});game.debugInvincible=true;game.player.invuln=0;game.drainEvents();
  renderer.clearEntities();renderer.combatFX.reset();renderer.particles=[];
  enemy=game.spawn(document.querySelector('#enemy').value,1.5,0,{hp,vx:0,cooldown:99});renderer.render(game,0);
  result.textContent='READY / 敵の種類：'+enemy.type;
}
/** 通常弾の実際の命中処理を通して描画・音声を確認する。 */
async function fire(lethal){
  await audio.start();reset(lethal?1:2);game.shoot();let hits=[];
  for(let frame=0;frame<40;frame++){
    game.updateShots(1/60);const events=game.drainEvents();for(const e of events){renderer.event(e);audio.effect(e.type,e);}
    hits.push(...events);if(hits.some(e=>e.type==='hit'||e.type==='explosion'))break;
  }
  renderer.render(game,lethal?.13:.025);
  const explosion=hits.filter(e=>e.type==='explosion');
  result.textContent=`${lethal?'KILL':'HIT'} / HP ${enemy.hp} / 撃破数 ${game.kills}\n通知：${hits.map(e=>e.type).join(', ')}\n爆発：${explosion.length} / 敵モデル削除：${!renderer.enemyMeshes.has(enemy.id)}`;
  if(lethal&&explosion.length!==1)throw new Error('撃破が爆発へ接続されていません');
}
document.querySelector('#hit').onclick=()=>fire(false);
document.querySelector('#kill').onclick=()=>fire(true);
document.querySelector('#smoke').onclick=()=>{renderer.render(game,.5);result.textContent+='\nSMOKE / 敵を消した後の爆煙と装甲片';};
document.querySelector('#boss').onclick=async()=>{
  await audio.start();reset();game.spawnBoss();game.boss.x=2;game.boss.y=0;game.defeatBoss();
  for(const e of game.drainEvents()){renderer.event(e);audio.effect(e.type,e);}renderer.render(game,.22);result.textContent='BOSS / 段階的な連鎖爆発';
};
document.querySelector('#reset').onclick=()=>reset();
document.querySelector('#enemy').onchange=()=>reset();
window.addEventListener('error',e=>result.textContent+='\nERROR: '+e.message);
reset();
