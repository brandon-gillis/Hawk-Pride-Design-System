(()=>{
// Downtown map (CartoTracks, Feb 2019), cropped to the park center. Unit x/y live in data.js as % of this image.
// Inline styles here are data-driven geometry only (crop window and spot positions).
const MAP={src:'downtown-map-site.jpg',w:1180,h:940,
 marks:{checkin:[58.6,35.9,'Check In'],entrance:[88.1,85.6,'Main entrance'],bath:[60.2,43.6,'Bath house']},
 views:{cabin:[24,14,86,54],powered:[42,44,76,74],all:[0,0,100,100]}};
const SHAPE={c7:[1.7,3.4,0],c8:[1.7,3.4,0],c2:[2.3,2.9,45],r9:[2.4,1.5,-8],r6:[2.4,1.5,-15],r4:[2.4,1.5,-15],r5:[2.4,1.5,-28],r3:[2.4,1.5,40],r2:[2.4,1.5,25],r1:[2.4,1.5,8],r7:[2.4,1.5,8],r8:[2.4,1.5,12]};
const shape=u=>SHAPE[u.id]||(u.cat==='cabin'?[2.2,2.8,0]:[2.4,1.5,0]);
function fitView(pts,pad=8,minAr=1.4,maxAr=2){const xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]);let a=Math.min(...xs)-pad,b=Math.min(...ys)-pad*1.5,c=Math.max(...xs)+pad,d=Math.max(...ys)+pad;
 const ar=()=>((c-a)*MAP.w)/((d-b)*MAP.h);let n=0;while(ar()<minAr&&n++<200){a-=.5;c+=.5}n=0;while(ar()>maxAr&&n++<200){b-=.5;d+=.5}
 const sx=a<0?-a:c>100?100-c:0,sy=b<0?-b:d>100?100-d:0;a+=sx;c+=sx;b+=sy;d+=sy;return [Math.max(0,a),Math.max(0,b),Math.min(100,c),Math.min(100,d)]}
const pos=(x,y,extra)=>({left:x+'%',top:y+'%',...extra});
function SiteMap({units=[],view='all',state=()=>'free',onHover,onPick,label,steps}){
 const [x0,y0,x1,y1]=Array.isArray(view)?view:(MAP.views[view]||MAP.views.all);const vw=x1-x0,vh=y1-y0;
 const tag=units.filter(u=>['hl','sel'].includes(state(u)));
 return <div className="sm" style={{aspectRatio:String((vw*MAP.w)/(vh*MAP.h))}}>
  <div className="sm__plane" style={{width:(10000/vw)+'%',height:(10000/vh)+'%',left:(-x0/vw*100)+'%',top:(-y0/vh*100)+'%'}}>
   <img src={hpAsset(MAP.src)} alt="Map of the park center with check-in, cabins, bath house and RV sites" className="sm__img"/>
   {units.map(u=>{const s=state(u);const [w,h,r]=shape(u);return <button key={u.id} type="button" className="sm__spot" data-state={s} data-cat={u.cat} disabled={s==='taken'||!onPick} aria-label={u.name+(s==='taken'?' (booked)':'')}
    style={pos(u.x,u.y,{width:w+'%',height:h+'%',transform:'translate(-50%,-50%) rotate('+r+'deg)'})}
    onMouseEnter={()=>onHover&&onHover(u.id)} onMouseLeave={()=>onHover&&onHover(null)} onFocus={()=>onHover&&onHover(u.id)} onBlur={()=>onHover&&onHover(null)} onClick={()=>onPick&&onPick(u)}/>})}
   {(steps||[]).map(([n,x,y,t])=><span key={n} className="sm__step" style={pos(x,y)}><b>{n}</b>{t}</span>)}
   {tag.map(u=><span key={'t'+u.id} className="sm__tag" data-state={state(u)} style={pos(u.x,u.y)}>{label?label(u):u.name}</span>)}
  </div></div>}
function MapCredit(){return <span className="sm-credit">Map © CartoTracks</span>}
function YourSpot({title='Your spot'}){const {trip:t}=useApp();const u=t.unit&&HP.unit(t.unit);if(!u||u.x==null)return null;
 const ck=MAP.marks.checkin;const cabin=u.cat==='cabin';
 return <div className="hp-card">
  <SiteMap units={[u]} view={fitView([[u.x,u.y],[ck[0],ck[1]]],9)} state={()=>'sel'} label={x=>x.name} steps={[[1,ck[0],ck[1],'Check in first']]}/>
  <div className="hp-card__body">
   <div className="hp-spread hp-spread--baseline"><div className="hp-eyebrow hp-eyebrow--accent">{title}</div><MapCredit/></div>
   <div className="hp-card__title">{u.name}</div>
   <ol className="spot-steps">
    <li>Stop at Check In for everyone’s wristbands.</li>
    <li>Head to {u.name}. {cabin?'Park your truck and trailer in the area around the cabin.':'Pull in'+(u.layout?' ('+u.layout.toLowerCase()+')':'')+'. Pads fit up to '+u.len+' ft.'}</li></ol>
  </div></div>}
Object.assign(window,{SiteMap,YourSpot,MapCredit,HP_MAP:MAP});
})();
