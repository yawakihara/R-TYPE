import {bossPartPosition,bossCorePosition} from '../src/bosses.js';
const clamp=n=>Math.max(-1,Math.min(1,n));

/** 正規操作だけで部位→露出した核を狙う進行検証用パイロット。無敵指定は呼出元の責任。 */
export function pilotInput(g,frame){
  const b=g.boss,p=g.player;
  let targetY=0;
  if(b){
    const alive=b.parts.filter(part=>part.hp>0);
    const target=(!b.open||b.stage===7)&&alive.length?alive.reduce((a,c)=>Math.abs(bossPartPosition(b,a).y-p.y)<Math.abs(bossPartPosition(b,c).y-p.y)?a:c):null;
    targetY=target?bossPartPosition(b,target).y:bossCorePosition(b).y;
  }else{
    const item=g.items.find(i=>i.x<p.x+6&&i.x>p.x-2);if(item)targetY=item.y;
  }
  return {x:p.x<-8?.4:p.x>-7.6?-.4:0,y:clamp((targetY-p.y)*3),rapid:!b||b.stage===7,fire:!!b&&b.stage!==7&&frame%115<103,force:!!b&&b.stage===7&&(g.force.mode==='front'||g.force.mode==='rear')&&b.open&&b.parts.every(part=>part.hp<=0)};
}
