import {Game,STAGES,WEAPONS,DIFFICULTIES,clamp} from './core.js';
import {Renderer} from './renderer.js';
import {AudioEngine,TRACKS} from './audio.js';

const $=s=>document.querySelector(s),ui=$('#ui'),canvas=$('#game');
const defaults={volume:.65,music:.65,sfx:.75,quality:'high',soundMode:'modern',shake:true,crt:false,classic:false,autoFire:false};
/** 破損した保存データやストレージ禁止時も起動できるよう値を読み込む。 */
function readStorage(key,fallback){try{const v=JSON.parse(localStorage.getItem(key));return v??fallback;}catch{return fallback;}}
const settings={...defaults,...readStorage('requiem-settings-v1',{})};
let records=readStorage('requiem-records-v1',[]);if(!Array.isArray(records))records=[];
let highScore=records.reduce((max,r)=>Math.max(max,Number(r.score)||0),0);
let renderer,audio=new AudioEngine(settings),game=null,screen='title',returnScreen='title',difficulty='arcade',practiceLevel=1,practiceWeapon='red',practiceInvincible=false;
let prevTime=0,accumulator=0,frames=0,fps=60,fpsElapsed=0,lastHud=0,savedResult=false,autoFire=settings.autoFire;
let announcement=null,toastTimer=0,toastText='',bossTimer=0,padButtons=[],padMenuTime=0,visibilityPaused=false,booted=false;
const keys=new Set(),edges=new Set(),touch={x:0,y:0,fire:false,rapid:false},params=new URLSearchParams(location.search),qa=params.get('qa')==='1';
if(['ultra','high','medium','low'].includes(params.get('quality')))settings.quality=params.get('quality');
let qualitySamples=0,qualityCooldown=0;

/** 保存設定を更新する。 */
function persistSettings(){try{localStorage.setItem('requiem-settings-v1',JSON.stringify(settings));}catch{}}
/** 表示する値をHTML文字列へ安全に挿入する。 */
function esc(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
/** スコアを8桁で表示する。 */
function scoreText(n){return Math.max(0,Math.floor(n)).toString().padStart(8,'0');}
/** 一時的な案内を表示する。 */
function toast(text,time=3){toastText=text;toastTimer=time;}
/** フルスクリーンを切り替える。 */
async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{toast('フルスクリーンはこの環境では使用できません');}}
/** ミュートを切り替える。 */
function mute(){audio.muted=!audio.muted;audio.apply();const btn=$('[data-action="mute"]');if(btn)btn.textContent=audio.muted?'SOUND OFF':'SOUND ON';}
/** 画面の種類を変更し、UIを作り直す。 */
function navigate(next){
  if(!booted)return;
  if(game&&next!=='play'&&next!=='pause')game.paused=true;
  screen=next;keys.clear();edges.clear();
  document.body.classList.toggle('in-game',!!game&&['play','pause','settings','help'].includes(next));
  $('#touch').hidden=!(screen==='play'&&matchMedia('(pointer:coarse)').matches);
  renderUI();
  audio.paused=screen==='pause';audio.apply();
  if(!game&&screen!=='music')audio.play(9);
  const first=ui.querySelector('button:not(.back):not(.sound-toggle)');if(first&&screen!=='play')first.focus({preventScroll:true});
}
/** 指定した条件でキャンペーンまたは練習を開始する。 */
function startGame(stage=0,practice=false){
  audio.start();
  game=new Game({stage,difficulty,practice,classic:settings.classic});
  if(practice){
    for(let i=0;i<practiceLevel;i++)game.collect(practiceWeapon);
    if(practiceLevel){game.collect('missile');game.collect('bit');game.collect('bit');game.force.mode='front';game.force.x=game.player.x+1.6;game.force.y=game.player.y;}
    game.debugInvincible=practiceInvincible;
  }
  savedResult=false;announcement=null;bossTimer=0;accumulator=0;autoFire=settings.autoFire;
  navigate('play');canvas.focus({preventScroll:true});audio.play(STAGES[stage].track);
}
/** タイトルへ戻る。進行中のゲームだけを破棄し、設定・記録を保持する。 */
function title(){game=null;announcement=null;bossTimer=0;returnScreen='title';renderer.clearEntities();navigate('title');audio.play(9);}
/** ポーズ中にサブ画面を開く。 */
function openSub(next){returnScreen=game?'pause':'title';navigate(next);}
/** ポーズと再開を切り替える。 */
function pause(){
  if(!game||!['play','pause'].includes(screen)||['over','victory'].includes(game.mode))return;
  game.paused=screen==='play';navigate(game.paused?'pause':'play');if(!game.paused)canvas.focus({preventScroll:true});
}
/** タイトル画面の固定ヘッダー。 */
function topbar(){return `<div class="topbar"><div class="wordmark">R-TYPE<span>//</span>REQUIEM</div><div class="top-meta mono"><span class="desktop-only"><i class="status-dot"></i>FLIGHT SYSTEM ONLINE</span><span class="desktop-only">WEBGL 2 · 3D</span><button data-action="mute" class="sound-toggle">${audio.muted?'SOUND OFF':'SOUND ON'}</button></div></div>`;}
/** 一般メニューの見出し。 */
function header(kicker,titleText,description=''){return `<button class="back" data-action="back">← BACK</button><div class="overlay-head"><div><div class="eyebrow">${kicker}</div><h1>${titleText}</h1></div><p>${description}</p></div>`;}
/** 各メニューをデータから構築する。 */
function renderUI(){
  if(screen==='title')ui.innerHTML=`${topbar()}<div class="title-content"><div class="eyebrow title-kicker">A TRIBUTE TO THE LEGEND · REBUILT IN 3D</div><h1 class="game-title">R<span class="hyphen">-</span>TYPE</h1><div class="subtitle">REQUIEM</div><p class="title-copy"><strong>最後の一機で、その先へ。</strong><br>人類の境界線を越える、8つの戦場。</p><nav class="main-nav" aria-label="メインメニュー"><button class="nav-btn primary" data-action="sortie"><span>01</span><b>SORTIE</b><small>出撃する</small><span class="arrow">↗</span></button><button class="nav-btn" data-action="practice"><span>02</span><b>FLIGHT TRAINING</b><small>ステージ選択</small><span class="arrow">›</span></button><button class="nav-btn" data-action="hangar"><span>03</span><b>HANGAR</b><small>機体を見る</small><span class="arrow">›</span></button><button class="nav-btn" data-action="music"><span>04</span><b>SOUND ARCHIVE</b><small>音楽を聴く</small><span class="arrow">›</span></button><button class="nav-btn" data-action="settings"><span>05</span><b>SYSTEM</b><small>設定・操作</small><span class="arrow">›</span></button></nav></div><div class="signal" aria-hidden="true"></div><aside class="title-aside"><div class="eyebrow">TACTICAL FIGHTER</div><p class="ship-name">R-9 / ARROWHEAD</p><div class="tech">CERAMIC ARMOUR · WAVE CANNON<br>DETACHABLE FORCE SYSTEM<br>BLENDER MODEL / REAL-TIME PBR</div></aside><footer class="title-footer"><small>UNOFFICIAL FAN TRIBUTE · ORIGINAL 3D ASSETS & MUSIC</small><span class="footer-controls"><kbd>↑↓</kbd> SELECT &nbsp; <kbd>ENTER</kbd> CONFIRM &nbsp; <kbd>F</kbd> FULLSCREEN</span><button class="sound-toggle" data-action="credits">ABOUT / CREDITS</button></footer>`;
  else if(screen==='sortie')ui.innerHTML=`<section class="overlay">${header('01 / MISSION PREPARATION','SORTIE','迎撃機、待機完了。<br>難易度を選択してください。')}<div class="launch-layout"><div><p class="section-label">ENGAGEMENT LEVEL / 難易度</p><div class="difficulty-list">${Object.entries(DIFFICULTIES).map(([key,d])=>`<button class="difficulty ${difficulty===key?'selected':''}" data-difficulty="${key}"><span class="diff-name">${d.name}</span><span class="jp">${d.ja}</span><p>${key==='cadet'?'残機5・遅い敵弾・装備を保持して復帰':key==='arcade'?'残機3・一撃死・地形接触死・装備を失って復帰':'残機3・高速弾・高密度の攻撃・撃ち返し弾'}</p></button>`).join('')}</div></div><div><p class="section-label">FIRST CONTACT</p><div class="mission"><div class="eyebrow">SECTOR 01 / 08</div><h2>DERELICT GATE</h2><p>廃棄された軌道施設から、反応が戻った。<br>その奥で待つものを、確かめに行く。</p><div class="weapon-legend"><span style="--c:#de8f55">FORCE</span><span style="--c:#76b8d0">WAVE CANNON</span></div></div><label class="check-line"><input id="classic" type="checkbox" ${settings.classic?'checked':''}>クラシックルール（時間減速を無効化）</label><button class="launch-button" data-action="launch">LAUNCH / 発進する <span>→</span></button><p class="settings-note"><kbd>矢印 / WASD</kbd> 移動　<kbd>C</kbd> 連射<br><kbd>Z / Space</kbd> 長押しして離す：波動砲<br><kbd>X</kbd> フォース射出／回収</p></div></div></section>`;
  else if(screen==='practice')ui.innerHTML=`<section class="overlay">${header('02 / FLIGHT TRAINING','SECTOR SELECT','全ステージを自由に練習できます。<br>練習中の得点はランキングに記録されません。')}<div class="stages">${STAGES.map((s,i)=>`<button class="stage-button" data-stage="${i}" style="--stage-color:#${s.color.toString(16).padStart(6,'0')}"><span class="stage-no">0${i+1} / 08</span><strong>${s.name}</strong><small>${s.ja}</small></button>`).join('')}</div><div class="practice-options"><label>開始装備 <select id="practice-level">${[0,1,2,3].map(n=>`<option value="${n}" ${practiceLevel===n?'selected':''}>${n===0?'装備なし':'FORCE LV.'+n}</option>`).join('')}</select></label><label>レーザー <select id="practice-weapon">${Object.entries(WEAPONS).map(([key,w])=>`<option value="${key}" ${practiceWeapon===key?'selected':''}>${w.name}</option>`).join('')}</select></label><label class="check-line"><input id="practice-invincible" type="checkbox" ${practiceInvincible?'checked':''}>フリーフライト（被弾・接触でミスしない）</label><label>難易度 <select id="practice-difficulty">${Object.entries(DIFFICULTIES).map(([key,d])=>`<option value="${key}" ${difficulty===key?'selected':''}>${d.name}</option>`).join('')}</select></label></div><p class="settings-note">訓練では残機の制限はありません。最終ステージの核は、開いた隙にフォースを直接送り込んで破壊します。</p></section>`;
  else if(screen==='hangar')ui.innerHTML=`<section class="overlay narrow" style="background:linear-gradient(90deg,#03080cf5,transparent 75%)"><button class="back" data-action="back">← BACK</button><div class="hangar-content"><div class="eyebrow">03 / TACTICAL FIGHTER HANGAR</div><h1>R-9</h1><div class="eyebrow" style="color:#92adb9">ARROWHEAD / REQUIEM SPEC.</div><p>白いセラミック装甲。青いキャノピー。<br>小さな機体に、人類の最後の切り札を。</p><div class="specs"><div class="spec"><span>PRIMARY</span><b>二段階チャージ波動砲</b></div><div class="spec"><span>FORCE</span><b>前後合体 / 射出 / 回収</b></div><div class="spec"><span>LASER SYSTEM</span><b>HELIX / REFLECT / CRAWLER</b></div><div class="spec"><span>SUPPORT</span><b>ビット × 2 / 追尾ミサイル</b></div><div class="spec"><span>BUILD</span><b>Blender 5.2 / glTF 2.0</b></div></div><div class="hangar-actions"><button class="plain-btn" data-action="rotate-left">↶ ROTATE</button><button class="plain-btn" data-action="rotate-right">ROTATE ↷</button></div><p>機体・装甲・各部の金属反射を、<br>リアルタイムの3D描画で確認できます。</p></div><div class="hangar-hint">PBR MATERIALS / REAL-TIME LIGHTING / ORIGINAL MESH</div></section>`;
  else if(screen==='settings')ui.innerHTML=`<section class="overlay settings">${header('05 / SYSTEM CONFIGURATION','SYSTEM','設定はこのブラウザーに保存されます。')}<div class="settings-grid"><div><p class="section-label">DISPLAY / 表示</p><div class="setting-row"><label for="quality">描画品質<small>RENDER RESOLUTION / BLOOM</small></label><select id="quality">${[['ultra','ULTRA'],['high','HIGH'],['medium','BALANCED'],['low','PERFORMANCE']].map(([v,t])=>`<option value="${v}" ${settings.quality===v?'selected':''}>${t}</option>`).join('')}</select></div><div class="setting-row"><label for="shake">画面の揺れ<small>CAMERA IMPACT</small></label><input type="checkbox" id="shake" ${settings.shake?'checked':''}></div><div class="setting-row"><label for="crt">走査線<small>CRT OVERLAY</small></label><input type="checkbox" id="crt" ${settings.crt?'checked':''}></div><div class="setting-row"><label for="autofire">自動連射<small>CHARGE HAS PRIORITY</small></label><input type="checkbox" id="autofire" ${settings.autoFire?'checked':''}></div><div class="setting-row"><span>フルスクリーン</span><button class="plain-btn" data-action="fullscreen">切り替える ↗</button></div></div><div><p class="section-label">AUDIO / 音響</p><div class="setting-row"><label for="volume">全体音量<small>MASTER</small></label><input id="volume" type="range" min="0" max="1" step=".01" value="${settings.volume}"></div><div class="setting-row"><label for="music">音楽<small>MUSIC</small></label><input id="music" type="range" min="0" max="1" step=".01" value="${settings.music}"></div><div class="setting-row"><label for="sfx">効果音<small>SOUND EFFECTS</small></label><input id="sfx" type="range" min="0" max="1" step=".01" value="${settings.sfx}"></div><div class="setting-row"><label for="sound-mode">音源<small>SYNTHESIS ENGINE</small></label><select id="sound-mode"><option value="modern" ${settings.soundMode==='modern'?'selected':''}>MODERN / シンセ</option><option value="fm" ${settings.soundMode==='fm'?'selected':''}>ARCADE / FM</option></select></div><p class="settings-note">全11曲の独自楽曲と効果音をリアルタイム合成。<br>音は最初のボタン操作後に有効になります。</p></div></div><div style="display:flex;gap:12px;margin-top:28px"><button class="plain-btn" data-action="help">操作・ルール →</button><button class="plain-btn" data-action="records">FLIGHT RECORDS →</button></div></section>`;
  else if(screen==='help')ui.innerHTML=`<section class="overlay">${header('PILOT MANUAL / FLIGHT SYSTEM','HOW TO PLAY','武器を使い分け、地形を読み、隙を待つ。')}<div class="help-grid"><article class="help-block"><div class="eyebrow">01 / MOVE & FIRE</div><h2>撃ち続けるか、一発に賭けるか。</h2><p><kbd>↑↓←→</kbd> / <kbd>WASD</kbd> で移動。<kbd>C</kbd> を押し続けると連射。<kbd>Z</kbd> / <kbd>Space</kbd> を長押しするとチャージ。離すと、敵を貫通する波動砲を発射します。約1.65秒で最大出力。溜めている間は連射が止まります。</p><p><kbd>Shift</kbd> スピード切替（Sアイテムで上限上昇）。<kbd>T</kbd> 自動連射。<kbd>P / Esc</kbd> ポーズ。</p></article><article class="help-block"><div class="eyebrow">02 / FORCE SYSTEM</div><h2>盾にも、矛にもなるフォース。</h2><div class="force-diagram"><span class="fighter">➤</span><span class="force-dot"></span><span>⇄</span><span class="force-dot"></span><span class="fighter">➤</span></div><p><kbd>X</kbd> で射出、もう一度で回収。機体の前に触れると前方合体、後ろなら後方合体。通常弾を吸収し、接触した敵にダメージを与えます。地形を通過できるため、危険な場所へ先行させられます。</p></article><article class="help-block"><div class="eyebrow">03 / POWER-UP</div><h2>戦場に合わせて、レーザーを選ぶ。</h2><p>白い補給機を壊してアイテムを取得。赤は螺旋状の対空レーザー、青は上下の壁で反射するレーザー、黄は床や天井を這う対地レーザー。クリスタル3個で最大レベル。緑の装備はミサイル、ビット、スピードを強化します。</p><div class="weapon-legend"><span style="--c:#ff6742">HELIX</span><span style="--c:#54b9f3">REFLECT</span><span style="--c:#eec852">CRAWLER</span></div></article><article class="help-block"><div class="eyebrow">04 / SURVIVE</div><h2>小さな判定。大きな決断。</h2><p>被弾判定は機体中央の小さな領域。敵・地形との接触も一撃でミスし、直前のチェックポイントへ戻ります。ARCADEとACEでは装備を失います。残機がなくなってもコンティニューできます。</p><p>ボスの装甲は攻撃を防ぎます。上下の砲台を壊すと攻撃が減ります。光る核が開いた瞬間を狙ってください。最後の核はフォースによる直接攻撃だけが有効です。</p></article><article class="help-block"><div class="eyebrow">05 / REQUIEM DRIVE</div><h2>一瞬を、切り拓く。</h2><p>敵の撃破と敵弾すれすれの回避でDRIVEが蓄積。100%で <kbd>Q</kbd> を押すと、約4.5秒間、敵と敵弾の時間が減速し、波動砲のチャージが速くなります。クラシックルールでは無効です。</p></article><article class="help-block"><div class="eyebrow">06 / OTHER CONTROLS</div><h2>キーボード、パッド、タッチ。</h2><p>ゲームパッド：左スティック / 十字キーで移動、Aで溜め撃ち、Bでフォース、Xで連射、YでDRIVE、RBで速度、STARTでポーズ。タッチ：左側のスティックで移動、右のWAVEを長押し、RAPIDで連射、FORCEで射出／回収。</p><p><kbd>F</kbd> 全画面、<kbd>M</kbd> ミュート。別タブへ移ると自動で一時停止します。タッチ端末は横向きがおすすめです。</p></article></div></section>`;
  else if(screen==='music')ui.innerHTML=`<section class="overlay">${header('04 / ORIGINAL SOUND ARCHIVE','SOUND ARCHIVE','11 compositions · real-time synthesis<br>MODERN ANALOG / ARCADE FM')}<div class="music-layout"><div class="track-list">${TRACKS.map((t,i)=>`<button class="track ${audio.track===i?'selected':''}" data-track="${i}"><span>${String(i+1).padStart(2,'0')}</span><strong>${t.title}</strong><small>${t.bpm} BPM</small></button>`).join('')}</div><div><div class="record" aria-hidden="true"></div><div class="now-playing">${esc(TRACKS[audio.track].title)}<small>${esc(TRACKS[audio.track].ja)}</small></div><p class="music-disclaimer">本作のためのオリジナル楽曲。<br>シンセサイザー、FM音源、ドラム、残響を<br>ブラウザー内で合成しています。</p><div style="text-align:center"><button class="plain-btn" data-action="export-audio" style="margin:0 8px 12px">EXPORT / WAV</button><button class="plain-btn" data-action="sound-mode">音源：${audio.mode==='fm'?'ARCADE FM':'MODERN'}</button></div></div></div></section>`;
  else if(screen==='records')ui.innerHTML=`<section class="overlay">${header('PERSONAL FLIGHT LOG','FLIGHT RECORDS','このブラウザーの上位10記録。<br>練習モードは記録対象外です。')}${records.length?records.map((r,i)=>`<div class="record-row"><span class="rank">${String(i+1).padStart(2,'0')}</span><strong>${scoreText(r.score)}</strong><small>${esc(r.difficulty.toUpperCase())} · ${r.clear?'CLEAR':'ST '+(r.stage+1)}</small><small class="record-date">${esc(r.date)}</small></div>`).join(''):'<p class="empty-records">まだフライト記録はありません。最初の出撃を。</p>'}</section>`;
  else if(screen==='credits')ui.innerHTML=`<section class="overlay">${header('REQUIEM / PROJECT NOTES','ABOUT THIS FLIGHT')}<div class="credits"><p><strong>R-TYPE // REQUIEM</strong><br>横スクロールSTGの名作に敬意を表した、非公式のファン作品です。着脱式フォース、溜め撃ち、3色レーザー、地形攻略とチェックポイント復帰を基礎に、8つの独自戦場を制作しました。</p><p>機体・敵の3DモデルはBlender 5.2で新規制作。PBR材質、リアルタイム照明、ブルーム、奥行きのある構造物、粒子演出をThree.jsで描画しています。編集用.blendと制作スクリプトをソースに含めています。</p><p>全11曲の旋律・伴奏と効果音は本作用に制作し、Web Audioで合成しています。既存ゲームの録音・画像・モデル・コードを取り込んでいません。</p><p><strong>DEVELOPED WITH CODEX</strong><br>3D MODELLING · BLENDER<br>RENDERING · THREE.JS / WEBGL 2<br>AUDIO · WEB AUDIO API<br>DESIGN · A TRIBUTE TO THE ARCADE SPIRIT</p><p class="attribution">「R-TYPE」および原作に関する権利は各権利者に帰属します。本作は権利者による公式作品ではなく、関係・提携・承認を示すものではありません。原作の完全移植ではありません。Three.js: MIT License。詳細は配布ソースのdocsをご覧ください。</p></div></section>`;
  else if(screen==='play'){renderHUD();}
  else if(screen==='pause')ui.innerHTML=`<div class="pause-overlay"><div class="pause-panel"><div class="eyebrow">FLIGHT SUSPENDED / SECTOR 0${game.stage+1}</div><h1>PAUSED</h1><p>${STAGES[game.stage].name} / ${STAGES[game.stage].ja}<br>少し息を整えて、もう一度。</p><div class="pause-nav"><button class="solid-btn" data-action="resume">RESUME / 戦闘再開</button><button class="plain-btn" data-action="settings">SYSTEM / 設定</button><button class="plain-btn" data-action="help">PILOT MANUAL / 操作方法</button><button class="plain-btn" data-action="retry">RETRY CHECKPOINT / 再出撃</button><button class="plain-btn" data-action="title">RETURN TO TITLE</button></div><div class="pause-foot">ESC / P TO RESUME</div></div></div>`;
  else if(screen==='gameover')ui.innerHTML=`<div class="pause-overlay"><div class="pause-panel"><div class="eyebrow">SIGNAL LOST / SECTOR 0${game.stage+1}</div><h1>LOST.</h1><p>その航跡は、まだ消えていない。<br>SCORE ${scoreText(game.score)} / ${game.kills} KILLS<br>チェックポイントから、もう一度。</p><div class="pause-nav"><button class="solid-btn" data-action="continue">CONTINUE / 続ける</button><button class="plain-btn" data-action="title">RETURN TO TITLE</button></div></div></div>`;
  else if(screen==='ending')ui.innerHTML=`<section class="overlay ending"><div class="eyebrow">ALL SECTORS CLEAR / FLIGHT COMPLETE</div><h1>HOMEWARD.</h1><p>向こう側に、朝があった。<br>最後の一機が、いま帰還する。</p><div class="result-stats"><div><span>FINAL SCORE</span><strong>${scoreText(game.score)}</strong></div><div><span>DESTROYED</span><strong>${game.kills}</strong></div><div><span>BEST CHAIN</span><strong>${game.bestCombo}</strong></div></div><p style="font-size:10px;letter-spacing:3px;color:#758f9d">DESIGN & DEVELOPMENT WITH CODEX<br>BLENDER / THREE.JS / WEB AUDIO<br>THANK YOU FOR FLYING.</p><button class="solid-btn" data-action="title">RETURN TO TITLE</button><button class="plain-btn" data-action="music">SOUND ARCHIVE</button></section>`;
}
/** 軽量に差し替えられるゲーム中HUDを初期化する。 */
function renderHUD(){ui.innerHTML=`<div class="hud"><div class="hud-top"><div><div class="score-label">SCORE</div><div class="score-value" id="score">00000000</div></div><div class="hud-center"><div class="sector-name" id="sector-name"></div><div class="stage-progress"><i id="progress"></i></div></div><div class="hud-right"><div class="score-label">HI ${scoreText(highScore)}</div><div class="life-icons" id="lives"></div><div class="hud-actions"><button class="hud-btn" data-action="autofire" id="auto-btn">AUTO OFF [T]</button><button class="hud-btn" data-action="pause">Ⅱ PAUSE</button></div></div></div><div class="boss-hud" id="boss-hud" hidden><div class="boss-label"><span id="boss-name"></span><span id="boss-hp"></span></div><div class="boss-health"><i id="boss-bar"></i></div><div class="boss-window" id="boss-window"></div></div><div class="combo" id="combo"></div><div class="hud-bottom"><div class="equipment"><div><b id="weapon"></b> <span id="weapon-level"></span></div><div id="support"></div><div class="force-indicator" id="force-status"></div></div><div><div class="charge-label"><span>WAVE CANNON</span><span id="charge-label">STANDBY</span></div><div class="charge-meter" id="charge-meter"><i id="charge-bar"></i></div><div class="charge-help">HOLD [Z / SPACE] → RELEASE &nbsp; · &nbsp; RAPID [C] &nbsp; · &nbsp; FORCE [X]</div></div><div class="drive-box"><div class="drive-value" id="drive-value"></div><div class="drive-help" id="drive-help"></div></div></div><div class="toast" id="toast"></div><div id="announcement"></div><div id="special-message"></div>${game.options.practice?`<div class="practice-badge">FLIGHT TRAINING ${game.debugInvincible?' / FREE FLIGHT':''}</div>`:''}<div class="rotate-hint">横向きにすると、戦場をより大きく表示できます</div>${qa?'<output id="telemetry" class="telemetry" aria-live="off"></output>':''}</div>`;lastHud=0;updateHUD();}
/** フレームごとに必要な数値だけをHUDへ反映する。 */
function updateHUD(){
  if(screen!=='play'||!game)return;const p=game.player,s=STAGES[game.stage];
  $('#score').textContent=scoreText(game.score);$('#sector-name').textContent=`0${game.stage+1} / 08 — ${s.name}`;$('#progress').style.width=clamp(game.time/s.duration*100,0,100)+'%';
  $('#lives').innerHTML=game.options.practice?'<span>∞</span>':Array.from({length:Math.max(0,Math.min(7,game.lives))},()=>'<i></i>').join('');
  $('#weapon').textContent=p.level?WEAPONS[p.weapon].name:'VULCAN';$('#weapon').style.color=p.level?'#'+WEAPONS[p.weapon].color.toString(16):'#bbd5db';
  $('#weapon-level').textContent='LV.'+p.level;$('#support').textContent=`SPD ${p.speed}/${p.maxSpeed} · BIT ${p.bits} · MSL ${p.missiles}`;
  $('#force-status').textContent='FORCE / '+({none:'OFFLINE',front:'FRONT DOCK',rear:'REAR DOCK',launch:'LAUNCH',free:'FREE FLIGHT',return:'RECALL'}[game.force.mode]);
  $('#charge-bar').style.width=p.charge*100+'%';$('#charge-meter').classList.toggle('full',p.charge>=.99);$('#charge-label').textContent=p.charge>=.99?'MAXIMUM':p.charge>0?Math.floor(p.charge*100)+'%':'STANDBY';
  $('#drive-value').textContent=game.options.classic?'CLASSIC':game.driveTime>0?'DRIVE ACTIVE':`DRIVE ${Math.floor(game.drive)}%`;
  $('#drive-value').classList.toggle('ready',game.drive>=100);$('#drive-help').textContent=game.options.classic?'ORIGINAL RULES':game.drive>=100?'[Q] REQUIEM DRIVE':'DESTROY / GRAZE TO CHARGE';
  $('#auto-btn').textContent=autoFire?'AUTO ON [T]':'AUTO OFF [T]';
  const b=game.boss;$('#boss-hud').hidden=!b;
  if(b){$('#boss-name').textContent=s.boss;$('#boss-hp').textContent=Math.ceil(b.hp/b.maxHp*100)+'%';$('#boss-bar').style.width=clamp(b.hp/b.maxHp*100,0,100)+'%';$('#boss-window').textContent=game.stage===7?'FORCE CONTACT ONLY':b.open?'CORE EXPOSED / FIRE':'ARMOUR CLOSED';}
  const combo=$('#combo');combo.style.opacity=game.combo>2?'1':'0';combo.innerHTML=`${game.combo} CHAIN <span>PRECISION ELIMINATION</span>`;
  $('#toast').textContent=toastTimer>0?toastText:'';
  const ann=$('#announcement');if(announcement){ann.innerHTML=announcement.html;}else ann.innerHTML='';
  const special=$('#special-message');special.innerHTML=bossTimer>0?`<div class="boss-warning"><small>WARNING / MASSIVE HOSTILE SIGNATURE</small><h2>${s.boss}</h2><small>${s.bossJa}</small></div>`:game.mode==='stageclear'?`<div class="clear-text"><div class="eyebrow">HOSTILE SIGNATURE ELIMINATED</div><h2>SECTOR CLEAR</h2><p>${s.name} / NEXT COORDINATES ACQUIRED</p></div>`:'';
  if(qa)$('#telemetry').textContent=`FPS ${Math.round(fps)} | DRAW ${renderer.drawCalls} | ${renderer.quality}\nST ${game.stage+1} T ${game.time.toFixed(1)} | ${game.mode}\nENEMY ${game.enemies.length} BULLET ${game.bullets.length}\nKILLS ${game.kills} DEATHS ${game.deaths}\nFORCE ${game.force.mode} | BOSS ${b?Math.round(b.hp):'—'}\n${document.visibilityState} / ${audio.ctx?.state||'audio waiting'}\n${renderer.gpu}`;
}
/** 終了時の記録を重複なしで保存する。 */
function saveResult(clear=false){
  if(savedResult||game.options.practice)return;savedResult=true;
  records.push({score:game.score,difficulty:game.options.difficulty,stage:game.stage,clear,kills:game.kills,date:new Date().toLocaleDateString('ja-JP')});
  records.sort((a,b)=>b.score-a.score);records=records.slice(0,10);highScore=Math.max(highScore,game.score);
  try{localStorage.setItem('requiem-records-v1',JSON.stringify(records));}catch{}
}
/** ボタン操作の共通ディスパッチ。 */
function action(name){
  audio.start();audio.effect('ui');
  if(name==='sortie')navigate('sortie');
  else if(name==='launch')startGame();
  else if(['practice','hangar','credits'].includes(name)){if(game)game=null;navigate(name);}
  else if(name==='settings'||name==='help'||name==='records')openSub(name);
  else if(name==='music'){game=null;navigate('music');audio.play(0);renderUI();}
  else if(name==='back')navigate(returnScreen==='pause'&&game?'pause':'title');
  else if(name==='title')title();
  else if(name==='pause'||name==='resume')pause();
  else if(name==='retry'){game.respawn();game.paused=false;navigate('play');}
  else if(name==='continue'){game.continueGame();savedResult=false;navigate('play');audio.play(STAGES[game.stage].track);}
  else if(name==='mute')mute();
  else if(name==='fullscreen')fullscreen();
  else if(name==='rotate-left')renderer.heroAngle-=.45;
  else if(name==='rotate-right')renderer.heroAngle+=.45;
  else if(name==='sound-mode'){settings.soundMode=settings.soundMode==='modern'?'fm':'modern';audio.mode=settings.soundMode;persistSettings();renderUI();}
  else if(name==='export-audio')exportAudio();
  else if(name==='autofire'){autoFire=!autoFire;toast(autoFire?'AUTO FIRE / ON':'AUTO FIRE / OFF',1.5);}
}
/** 選択中の独自BGMを、ステレオWAVとして保存する。 */
async function exportAudio(){
  const button=$('[data-action="export-audio"]');if(!button||button.disabled)return;button.disabled=true;button.textContent='RENDERING…';
  try{const result=await audio.renderTrack(audio.track),url=URL.createObjectURL(result.blob),a=document.createElement('a');a.href=url;a.download=`REQUIEM-${String(audio.track+1).padStart(2,'0')}-${audio.mode}.wav`;a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);button.textContent='WAV SAVED / 32 SEC';if(qa){const output=document.createElement('output');output.id='audio-result';output.textContent=`AUDIO CHECK / PEAK ${result.peak.toFixed(4)} / RMS ${result.rms.toFixed(4)} / ${result.rate} HZ STEREO`;button.after(output);}}
  catch(error){button.textContent='EXPORT FAILED / 再試行';console.error('Audio export:',error);}
  finally{button.disabled=false;}
}

ui.addEventListener('click',e=>{
  const btn=e.target.closest('button');if(!btn)return;
  if(btn.dataset.action)action(btn.dataset.action);
  if(btn.dataset.difficulty){difficulty=btn.dataset.difficulty;renderUI();audio.effect('ui');}
  if(btn.dataset.stage!==undefined)startGame(Number(btn.dataset.stage),true);
  if(btn.dataset.track!==undefined){audio.start();audio.play(Number(btn.dataset.track));renderUI();}
});
ui.addEventListener('input',e=>{
  const id=e.target.id;
  if(['volume','music','sfx'].includes(id)){const value=clamp(Number(e.target.value),0,1);settings[id]=value;audio[id==='music'?'musicVolume':id==='sfx'?'sfxVolume':'volume']=value;audio.apply();persistSettings();}
});
ui.addEventListener('change',e=>{
  const id=e.target.id,value=e.target.value;
  if(id==='classic'){settings.classic=e.target.checked;persistSettings();}
  if(id==='practice-level')practiceLevel=Number(value);
  if(id==='practice-weapon')practiceWeapon=value;
  if(id==='practice-invincible')practiceInvincible=e.target.checked;
  if(id==='practice-difficulty')difficulty=value;
  if(id==='quality'){settings.quality=value;renderer.quality=value;renderer.resize();persistSettings();}
  if(id==='sound-mode'){settings.soundMode=value;audio.mode=value;persistSettings();}
  if(['shake','crt'].includes(id)){settings[id]=e.target.checked;persistSettings();}
  if(id==='autofire'){settings.autoFire=e.target.checked;autoFire=settings.autoFire;persistSettings();}
});

/** キーボード／ゲームパッドのメニュー選択を移動する。 */
function focusMove(direction){const buttons=[...ui.querySelectorAll('button')].filter(b=>!b.disabled&&b.offsetParent!==null);if(!buttons.length)return;const idx=buttons.indexOf(document.activeElement);buttons[(idx+direction+buttons.length)%buttons.length].focus({preventScroll:true});}
window.addEventListener('keydown',e=>{
  if(!booted)return;
  if(e.target.matches('input,select')&&e.code!=='Escape')return;
  if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','Tab'].includes(e.code)&&screen==='play')e.preventDefault();
  if(['ArrowUp','ArrowDown','Space'].includes(e.code)&&screen!=='play')e.preventDefault();
  if(!keys.has(e.code))edges.add(e.code);keys.add(e.code);
  if(e.repeat)return;
  audio.start();
  if(e.code==='KeyM'){mute();return;}
  if(e.code==='KeyF'){fullscreen();return;}
  if(e.code==='Escape'||e.code==='KeyP'){
    if(screen==='play'||screen==='pause')pause();else if(screen!=='title')navigate(returnScreen==='pause'&&game?'pause':'title');return;
  }
  if(screen==='play'){
    if(e.code==='KeyT')action('autofire');
  } else {
    if(e.code==='ArrowDown')focusMove(1);
    if(e.code==='ArrowUp')focusMove(-1);
    if(e.code==='Space'){e.preventDefault();document.activeElement?.click();}
  }
});
window.addEventListener('keyup',e=>keys.delete(e.code));
window.addEventListener('blur',()=>{keys.clear();edges.clear();touch.fire=false;touch.rapid=false;});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&screen==='play'){visibilityPaused=true;pause();}else if(!document.hidden&&visibilityPaused){visibilityPaused=false;toast('安全のため一時停止しました。再開ボタンで戻れます。');}});

/** 標準ゲームパッドからスティック・ボタンを読み込む。 */
function pollGamepad(now){
  const gp=navigator.getGamepads?.();const pad=gp&&Array.from(gp).find(Boolean);if(!pad){padButtons=[];return{};}
  const b=pad.buttons.map(b=>b.pressed),rising=i=>b[i]&&!padButtons[i];
  const x=Math.abs(pad.axes[0]||0)>.16?pad.axes[0]:0,y=Math.abs(pad.axes[1]||0)>.16?-pad.axes[1]:0;
  if(screen==='play'&&rising(9))pause();
  else if(screen==='pause'&&rising(9))pause();
  else if(screen!=='play'&&screen!=='pause'){
    if(now-padMenuTime>.2&&(b[12]||b[13]||Math.abs(y)>.5)){focusMove(b[12]||y>.5?-1:1);padMenuTime=now;}
    if(rising(0))document.activeElement?.click();
    if(rising(1)&&screen!=='title')navigate(returnScreen==='pause'&&game?'pause':'title');
  }
  const out={x:x+(b[15]?1:0)-(b[14]?1:0),y:y+(b[12]?1:0)-(b[13]?1:0),fire:b[0],rapid:b[2],force:rising(1),drive:rising(3),speed:rising(5)};
  padButtons=b;return out;
}
/** すべての入力手段を1つのゲーム入力へ正規化する。 */
function inputSnapshot(pad){
  const has=(...codes)=>codes.some(c=>keys.has(c));
  return {x:clamp((has('ArrowRight','KeyD')?1:0)-(has('ArrowLeft','KeyA')?1:0)+touch.x+(pad.x||0),-1,1),
    y:clamp((has('ArrowUp','KeyW')?1:0)-(has('ArrowDown','KeyS')?1:0)+touch.y+(pad.y||0),-1,1),
    fire:has('KeyZ','Space','KeyJ')||touch.fire||pad.fire,rapid:autoFire||has('KeyC','KeyL')||touch.rapid||pad.rapid,
    force:edges.has('KeyX')||edges.has('KeyK')||edges.has('TouchForce')||pad.force,drive:edges.has('KeyQ')||pad.drive,
    speed:edges.has('ShiftLeft')||edges.has('ShiftRight')||pad.speed};
}
/** タッチ操作をポインターキャプチャで安定させる。 */
function bindTouch(){
  const stick=$('#stick'),knob=stick.querySelector('i');let active=null;
  const move=e=>{const r=stick.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/44,y=(e.clientY-r.top-r.height/2)/44,n=Math.max(1,Math.hypot(x,y));touch.x=x/n;touch.y=-y/n;knob.style.transform=`translate(${touch.x*37}px,${-touch.y*37}px)`;};
  stick.addEventListener('pointerdown',e=>{active=e.pointerId;stick.setPointerCapture(active);move(e);audio.start();});
  stick.addEventListener('pointermove',e=>{if(e.pointerId===active)move(e);});
  const end=()=>{active=null;touch.x=0;touch.y=0;knob.style.transform='';};stick.addEventListener('pointerup',end);stick.addEventListener('pointercancel',end);
  document.querySelectorAll('[data-touch]').forEach(btn=>{const name=btn.dataset.touch;btn.addEventListener('pointerdown',e=>{btn.setPointerCapture(e.pointerId);btn.classList.add('active');if(name==='force')edges.add('TouchForce');else touch[name]=true;audio.start();});const up=()=>{btn.classList.remove('active');if(name!=='force')touch[name]=false;};btn.addEventListener('pointerup',up);btn.addEventListener('pointercancel',up);});
}
/** 本体通知を音・表示・記録へ反映する。 */
function processEvents(){
  for(const e of game.drainEvents()){
    renderer.event(e);audio.effect(e.type,e);
    if(e.type==='stage'){
      audio.play(STAGES[e.index].track);
      announcement={time:4.5,html:`<div class="stage-announcement"><div class="sector">SECTOR 0${e.index+1} / 08</div><h2>${e.name}</h2><p>${e.ja}</p></div>`};
      if(e.index===0)toast('C：連射　Z長押し→離す：波動砲　X：フォース\n補給機を破壊してクリスタルを取得',7);
    }
    if(e.type==='pickup')toast(WEAPONS[e.item]?`${WEAPONS[e.item].name} / ${WEAPONS[e.item].ja}`:e.item==='bit'?'BIT SYSTEM ONLINE':e.item==='speed'?'SPEED UPGRADE':'HOMING MISSILE ONLINE',2);
    if(e.type==='boss'){bossTimer=3;announcement=null;audio.play(8);}
    if(e.type==='respawn'){audio.play(STAGES[game.stage].track);toast('CHECKPOINT RESTORED / 補給機を捕捉',3);}
    if(e.type==='extend')toast('EXTEND / 残機 +1',3);
    if(e.type==='drive')toast('REQUIEM DRIVE / 時間減速',2);
    if(e.type==='gameover'){saveResult();navigate('gameover');}
    if(e.type==='victory'){saveResult(true);navigate('ending');audio.play(10);}
  }
}
/** 固定60Hzの本体と可変フレーム描画を分離する。 */
function frame(ms){
  requestAnimationFrame(frame);
  const now=ms*.001,rawDt=prevTime?now-prevTime:1/60,dt=clamp(rawDt,0,.1);prevTime=now;
  frames++;fpsElapsed+=rawDt;if(fpsElapsed>.6){fps=frames/fpsElapsed;frames=0;fpsElapsed=0;}
  qualityCooldown=Math.max(0,qualityCooldown-dt);
  if(rawDt<.2&&document.visibilityState==='visible'&&qualityCooldown===0){
    qualitySamples=fps<40?qualitySamples+dt:Math.max(0,qualitySamples-dt*2);
    if(qualitySamples>3){const levels=['ultra','high','medium','low'],idx=levels.indexOf(renderer.quality);if(idx<3){renderer.quality=levels[idx+1];renderer.resize();}qualitySamples=0;qualityCooldown=7;}
  }
  const pad=pollGamepad(now);
  if(screen==='play'&&game){
    accumulator+=dt;let first=true;
    while(accumulator>=1/60){const input=inputSnapshot(first?pad:{...pad,force:false,drive:false,speed:false});game.update(1/60,input);accumulator-=1/60;first=false;edges.clear();processEvents();}
  } else {edges.clear();accumulator=0;}
  toastTimer=Math.max(0,toastTimer-dt);bossTimer=Math.max(0,bossTimer-dt);
  if(announcement){announcement.time-=dt;if(announcement.time<=0)announcement=null;}
  audio.tick();
  const showGame=game&&['play','pause','gameover','ending','settings','help','records'].includes(screen);
  renderer.render(showGame?game:null,dt,screen);
  if(now-lastHud>.08){updateHUD();lastHud=now;}
}
/** 読み込みやWebGL不具合を操作可能なエラー表示へ変換する。 */
function showError(error){
  $('#loading').style.display='none';ui.innerHTML=`<div class="error-panel"><div><div class="eyebrow">FLIGHT SYSTEM / INITIALIZATION FAILED</div><h1>描画システムを起動できませんでした。</h1><p>WebGL 2を使用できるChrome・Edge・Firefoxで開き直してください。ブラウザーのハードウェアアクセラレーションも確認してください。</p><p>${esc(error?.message||error)}</p><button class="solid-btn" id="reload">再読み込み</button></div></div>`;$('#reload').onclick=()=>location.reload();
}
window.addEventListener('renderer-lost',()=>{if(screen==='play')pause();toast('描画の復旧を待っています。復旧後に再読み込みします。',20);});

/** 3D素材の読込が完了してから操作と描画を開始する。 */
async function boot(){
  try{
    renderer=new Renderer(canvas,settings);
    await renderer.load(n=>{$('#load-bar').style.width=(15+n*85)+'%';$('#load-label').textContent=`BLENDER ASSETS / ${Math.floor(n*100)}%`;});
    booted=true;bindTouch();navigate('title');
    $('#loading').style.opacity='0';setTimeout(()=>$('#loading').style.display='none',750);
    if(params.has('stage')){
      const stage=clamp(Number(params.get('stage'))-1,0,7);practiceLevel=clamp(Number(params.get('loadout')||2),0,3);practiceInvincible=params.get('free')==='1';
      startGame(stage,true);
      if(params.get('encounter')==='boss'){game.time=STAGES[stage].duration;game.scroll=STAGES[stage].duration*3.2;game.spawnBoss();game.boss.x=10.3;game.boss.age=3.2;}
    }
    requestAnimationFrame(frame);
  }catch(error){console.error('Flight system:',error);showError(error);}
}
boot();
