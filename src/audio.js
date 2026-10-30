/** 全曲・効果音を独自に合成する。外部音源や原作の録音は使用しない。 */
import {clamp,rng} from './core.js';

export const TRACKS = [
  {title:'Beyond the Derelict',ja:'廃墟の向こうへ',bpm:132,root:38,lead:[0,7,12,10,7,3,5,7,0,7,14,12,10,7,5,3],chords:[0,-3,5,-5],flavor:'metal'},
  {title:'A Heart That Is Not Yours',ja:'誰でもない鼓動',bpm:124,root:40,lead:[0,1,7,8,7,3,1,-2,0,7,12,13,10,8,7,1],chords:[0,1,-4,-2],flavor:'organic'},
  {title:'Steel Has a Memory',ja:'鋼は記憶する',bpm:142,root:36,lead:[0,3,7,12,10,7,3,5,7,10,14,12,7,5,3,-2],chords:[0,5,-3,7],flavor:'metal'},
  {title:'Cathedral of Sparks',ja:'火花の大聖堂',bpm:140,root:37,lead:[0,7,10,12,7,10,15,14,12,10,7,5,3,7,5,2],chords:[0,-5,3,-2],flavor:'metal'},
  {title:'Where the Stars Go to Die',ja:'星の眠る場所',bpm:116,root:39,lead:[0,7,12,15,14,10,7,3,5,10,12,14,10,7,3,0],chords:[0,-3,-5,-2],flavor:'ether'},
  {title:'Anatomy of a Dream',ja:'夢の解剖',bpm:136,root:35,lead:[0,1,5,7,8,12,13,7,5,1,0,-2,5,7,8,1],chords:[0,1,-2,-4],flavor:'organic'},
  {title:'Nothing Left Behind',ja:'この先に残すもの',bpm:148,root:38,lead:[0,7,12,14,15,14,12,7,10,14,17,15,14,10,7,5],chords:[0,5,-3,-5],flavor:'metal'},
  {title:'Requiem for the Living',ja:'生きて還る者のための鎮魂歌',bpm:128,root:38,lead:[0,7,10,12,15,14,12,10,7,5,3,5,7,10,7,0],chords:[0,-5,-3,5],flavor:'ether'},
  {title:'The Shape of Fear',ja:'恐怖の輪郭',bpm:154,root:35,lead:[0,1,0,7,6,7,12,13,12,7,6,1,0,7,6,1],chords:[0,1,0,-2],flavor:'boss'},
  {title:'A Small Light in the Void',ja:'虚空に灯す',bpm:92,root:38,lead:[0,7,12,14,10,7,5,3,0,7,15,14,12,10,7,5],chords:[0,-3,5,-5],flavor:'title'},
  {title:'Homeward',ja:'帰還',bpm:108,root:41,lead:[0,4,7,12,11,7,4,2,4,7,12,14,12,11,7,4],chords:[0,5,7,0],flavor:'ending'},
];
const hz = n => 440*2**((n-69)/12);

/** 音楽の先読みスケジューラーとSFX用バスを管理する。 */
export class AudioEngine {
  constructor(settings={}) {
    this.volume=settings.volume??.65;this.musicVolume=settings.music??.65;this.sfxVolume=settings.sfx??.8;
    this.mode=settings.soundMode||'modern';this.muted=false;this.track=9;this.step=0;this.next=0;this.started=false;this.paused=false;this.lastShot=0;
  }
  /** 初回のユーザー操作内でAudioContextを初期化・再開する。 */
  async start() {
    if(!this.ctx) {
      const Ctx=window.AudioContext||window.webkitAudioContext;
      if(!Ctx) return;
      this.ctx=new Ctx({latencyHint:'interactive'});this.buildGraph();
    }
    if(this.ctx.state==='suspended')await this.ctx.resume();
    if(!this.started){this.next=this.ctx.currentTime+.05;this.started=true;}
  }
  /** 再生・オフライン書き出しに共通の音響グラフを作る。 */
  buildGraph() {
      const c=this.ctx;
      this.master=c.createGain();this.master.gain.value=this.volume*.7;
      const limiter=c.createDynamicsCompressor();limiter.threshold.value=-12;limiter.knee.value=12;limiter.ratio.value=5;limiter.attack.value=.003;limiter.release.value=.16;
      this.master.connect(limiter);limiter.connect(c.destination);
      this.music=c.createGain();this.music.gain.value=this.musicVolume*.5;this.music.connect(this.master);
      this.sfx=c.createGain();this.sfx.gain.value=this.sfxVolume;this.sfx.connect(this.master);
      const rand=rng(9001),size=c.sampleRate*2;
      this.noise=c.createBuffer(1,size,c.sampleRate);const d=this.noise.getChannelData(0);for(let i=0;i<size;i++)d[i]=rand()*2-1;
      const ir=c.createBuffer(2,c.sampleRate*2.1,c.sampleRate);
      for(let ch=0;ch<2;ch++){const a=ir.getChannelData(ch);for(let i=0;i<a.length;i++)a[i]=(rand()*2-1)*Math.pow(1-i/a.length,3.3);}
      this.reverb=c.createConvolver();this.reverb.buffer=ir;
      const wet=c.createGain();wet.gain.value=.22;this.reverb.connect(wet);wet.connect(this.music);
      this.delay=c.createDelay(.8);this.delay.delayTime.value=.24;const feedback=c.createGain();feedback.gain.value=.28;
      const delayWet=c.createGain();delayWet.gain.value=.17;this.delay.connect(feedback);feedback.connect(this.delay);this.delay.connect(delayWet);delayWet.connect(this.music);
  }
  /** 選択曲をWAVへ合成する。@param {number} index 曲番号 @param {number} seconds 長さ @returns {Promise<object>} WAVと音量の検証値 */
  async renderTrack(index,seconds=32) {
    const rate=44100,offline=new AudioEngine({volume:.85,music:.85,sfx:.75,soundMode:this.mode});
    offline.ctx=new OfflineAudioContext(2,Math.ceil(seconds*rate),rate);offline.buildGraph();offline.track=index;
    const dur=60/TRACKS[index].bpm/4;
    for(let step=0,t=.02;t<seconds-1.2;t+=dur,step++)offline.sequence(step,t,dur);
    offline.master.gain.setValueAtTime(.85*.7,seconds-1.2);offline.master.gain.linearRampToValueAtTime(0,seconds-.03);
    const buffer=await offline.ctx.startRendering(),left=buffer.getChannelData(0),right=buffer.getChannelData(1);
    let peak=0,sum=0;
    const data=new ArrayBuffer(44+left.length*4),view=new DataView(data),write=(offset,text)=>{for(let i=0;i<text.length;i++)view.setUint8(offset+i,text.charCodeAt(i));};
    write(0,'RIFF');view.setUint32(4,36+left.length*4,true);write(8,'WAVE');write(12,'fmt ');view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,2,true);view.setUint32(24,rate,true);view.setUint32(28,rate*4,true);view.setUint16(32,4,true);view.setUint16(34,16,true);write(36,'data');view.setUint32(40,left.length*4,true);
    for(let i=0;i<left.length;i++){const l=left[i],r=right[i];peak=Math.max(peak,Math.abs(l),Math.abs(r));sum+=l*l+r*r;view.setInt16(44+i*4,clamp(l,-1,1)*32767,true);view.setInt16(46+i*4,clamp(r,-1,1)*32767,true);}
    return {blob:new Blob([data],{type:'audio/wav'}),peak,rms:Math.sqrt(sum/(left.length*2)),seconds,rate};
  }
  /** 曲を変更する。再選択時は再生位置を維持する。@param {number} index 曲番号 */
  play(index) {if(this.track===index)return;this.track=index;this.step=0;if(this.ctx)this.next=this.ctx.currentTime+.08;}
  /** 設定音量を反映する。 */
  apply() {
    if(!this.ctx)return;const t=this.ctx.currentTime;
    this.master.gain.setTargetAtTime(this.muted?0:this.volume*.7,t,.05);
    this.music.gain.setTargetAtTime(this.paused?this.musicVolume*.17:this.musicVolume*.5,t,.12);
    this.sfx.gain.setTargetAtTime(this.sfxVolume,t,.04);
  }
  /** 発音時刻を先読みして曲の16分音符を予約する。 */
  tick() {
    if(!this.ctx||!this.started||this.ctx.state!=='running')return;
    const dur=60/TRACKS[this.track].bpm/4;
    if(this.next<this.ctx.currentTime-.2)this.next=this.ctx.currentTime+.03;
    while(this.next<this.ctx.currentTime+.18){this.sequence(this.step++,this.next,dur);this.next+=dur;}
  }
  /** 単音を合成する。@param {number} note MIDI音高 @param {number} time 発音時刻 @param {number} duration 秒 @param {number} volume 音量 @param {string} kind 音色 */
  tone(note,time,duration,volume,kind='lead',pan=0) {
    const c=this.ctx,o=c.createOscillator(),g=c.createGain(),filter=c.createBiquadFilter(),st=c.createStereoPanner();
    const freq=hz(note);o.frequency.value=freq;st.pan.value=pan;
    o.type=kind==='pad'?'sawtooth':kind==='bass'?'sawtooth':this.mode==='fm'?'sine':'sawtooth';
    filter.type='lowpass';filter.frequency.setValueAtTime(kind==='bass'?1800:kind==='pad'?1000:4400,time);
    filter.frequency.exponentialRampToValueAtTime(kind==='bass'?130:kind==='pad'?500:1000,time+duration);
    filter.Q.value=kind==='bass'?3.4:.7;
    const attack=kind==='pad'?.14:.008;
    g.gain.setValueAtTime(0,time);g.gain.linearRampToValueAtTime(volume,time+attack);g.gain.exponentialRampToValueAtTime(.001,time+Math.max(attack+.04,duration));
    o.connect(filter);filter.connect(g);g.connect(st);st.connect(this.music);
    if(kind!=='bass'){st.connect(this.reverb);if(kind==='lead')st.connect(this.delay);}
    if(this.mode==='fm'&&kind!=='pad'){
      const mod=c.createOscillator(),mg=c.createGain();mod.frequency.value=freq*2;mg.gain.setValueAtTime(freq*2.3,time);mg.gain.exponentialRampToValueAtTime(1,time+duration);mod.connect(mg);mg.connect(o.frequency);mod.start(time);mod.stop(time+duration+.04);
    } else if(kind==='lead'||kind==='pad') {
      const second=c.createOscillator();second.type='sawtooth';second.frequency.value=freq;second.detune.value=kind==='pad'?-11:7;second.connect(filter);second.start(time);second.stop(time+duration+.04);
    }
    o.start(time);o.stop(time+duration+.04);
  }
  /** ドラムを合成する。@param {string} kind kick/snare/hat */
  drum(kind,t,volume=1) {
    const c=this.ctx,g=c.createGain();g.connect(this.music);
    if(kind==='kick') {
      const o=c.createOscillator();o.frequency.setValueAtTime(145,t);o.frequency.exponentialRampToValueAtTime(39,t+.14);g.gain.setValueAtTime(.62*volume,t);g.gain.exponentialRampToValueAtTime(.001,t+.28);o.connect(g);o.start(t);o.stop(t+.3);
    } else {
      const n=c.createBufferSource();n.buffer=this.noise;const f=c.createBiquadFilter();f.type='highpass';f.frequency.value=kind==='hat'?8500:1400;
      n.connect(f);f.connect(g);g.gain.setValueAtTime((kind==='hat'?.075:.22)*volume,t);g.gain.exponentialRampToValueAtTime(.001,t+(kind==='hat'?.055:.17));n.start(t);n.stop(t+.2);
      if(kind==='snare')this.tone(50,t,.1,.035,'bass');
    }
  }
  /** 曲ごとの旋律・和声・ベース・ドラムを組み立てる。 */
  sequence(step,t,d) {
    const tr=TRACKS[this.track],bar=Math.floor(step/16),s=step%16,phrase=Math.floor(bar/8)%4;
    const chord=tr.chords[Math.floor(bar/2)%4],root=tr.root+chord;
    const ambient=tr.flavor==='title'||tr.flavor==='ending';
    if(s===0) {
      const major=tr.flavor==='ending';
      for(const n of [0,major?4:3,7,14])this.tone(root+12+n,t,d*17,.028,'pad',(n-7)/12);
    }
    if(s%2===0) {
      const pattern=[0,0,12,7,0,12,10,7];
      this.tone(root+pattern[s/2],t,d*1.35,ambient?.09:.18,'bass');
    }
    if(s%2===0||(!ambient&&s===15)) {
      const idx=(Math.floor(s/2)+(bar%2)*8)%16;
      let note=tr.root+24+tr.lead[(idx+phrase*4)%16];
      if(phrase===2)note+=12;
      this.tone(note,t,d*(s%4===0?2.7:1.3),ambient?.035:.06,'lead',Math.sin(step*.21)*.32);
    }
    if(!ambient||bar%4>1) {
      if([0,6,8,14].includes(s))this.drum('kick',t,ambient?.55:1);
      if(s===4||s===12)this.drum('snare',t,ambient?.6:1);
      if(s%2===0||phrase===3)this.drum('hat',t,s%4===0?1:.65);
      if(bar%8===7&&s>=12)this.drum('snare',t,.35+(s-12)*.12);
    }
    if(!ambient&&s%2===1) {
      const arps=[0,7,12,15,19,15,12,7];this.tone(root+24+arps[Math.floor(s/2)],t,d*.7,.018,'lead',s%4===1?-.65:.65);
    }
  }
  /** 周波数スイープとノイズを組み合わせた効果音。 */
  effect(type,data={}) {
    if(!this.ctx||!this.started)return;
    const c=this.ctx,t=c.currentTime;
    if(type==='shot'&&t-this.lastShot<.095)return;
    if(type==='shot')this.lastShot=t;
    const spec={shot:[950,290,.09,.045,'square'],wave:[130,38,.65,.3,'sawtooth'],charged:[500,1100,.22,.1,'sine'],forceLaunch:[240,70,.34,.17,'sawtooth'],forceRecall:[120,630,.3,.1,'sine'],forceDock:[600,1200,.14,.1,'sine'],pickup:[650,1600,.24,.17,'sine'],extend:[550,1800,.45,.2,'sine'],drive:[55,260,.8,.26,'sawtooth'],hit:[180,55,.065,.06,'square'],armour:[1800,450,.045,.028,'triangle'],block:[1400,600,.04,.025,'sine'],graze:[1000,1400,.04,.02,'sine'],missile:[180,80,.18,.07,'sawtooth'],ui:[800,1050,.055,.04,'sine']}[type];
    if(spec) {
      const [a,b,d,v,shape]=spec,o=c.createOscillator(),g=c.createGain(),p=c.createStereoPanner();
      o.type=shape;o.frequency.setValueAtTime(a,t);o.frequency.exponentialRampToValueAtTime(b,t+d);
      g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);p.pan.value=clamp((data.x||0)/24,-.8,.8);
      o.connect(g);g.connect(p);p.connect(this.sfx);o.start(t);o.stop(t+d+.02);
    }
    if(['explosion','playerDeath','bossDeath','partBreak','wave'].includes(type)) {
      const big=type==='bossDeath'?3:type==='playerDeath'?1.5:1,duration=type==='wave'?.5:.55*big;
      const n=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();n.buffer=this.noise;n.loop=true;f.type='lowpass';f.frequency.setValueAtTime(3200,t);f.frequency.exponentialRampToValueAtTime(70,t+duration);
      g.gain.setValueAtTime((type==='wave'?.16:.29)*Math.min(big,1.6),t);g.gain.exponentialRampToValueAtTime(.001,t+duration);n.connect(f);f.connect(g);g.connect(this.sfx);n.start(t);n.stop(t+duration+.02);
      const o=c.createOscillator(),og=c.createGain();o.frequency.setValueAtTime(type==='bossDeath'?85:115,t);o.frequency.exponentialRampToValueAtTime(24,t+duration);og.gain.setValueAtTime(.35,t);og.gain.exponentialRampToValueAtTime(.001,t+duration);o.connect(og);og.connect(this.sfx);o.start(t);o.stop(t+duration+.03);
    }
  }
}
