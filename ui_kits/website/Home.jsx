(()=>{
const {Photo,Button,EventCard,LodgingCard,PriceCard,Input,Select,Icon,DifficultyBadge}=window.DS;
function Hero({go}){
 return <div style={{position:'relative',minHeight:'min(78vh,680px)',display:'flex',alignItems:'flex-end',background:'var(--black-900)'}}>
  <Photo src="../../assets/photos/hillside-traffic.jpg" alt="A line of side-by-sides and buggies climbing a dirt hill through the trees" position="50% 35%" ratio="auto" scrim style={{position:'absolute',inset:0,aspectRatio:'auto'}}/>
  <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(13,13,11,.92) 0%, rgba(13,13,11,.62) 55%, rgba(13,13,11,.28) 100%), linear-gradient(to right, rgba(13,13,11,.55) 0%, rgba(13,13,11,0) 70%)',pointerEvents:'none'}}/>
  <div style={{position:'relative',width:'100%',maxWidth:'var(--container-max)',margin:'0 auto',padding:'96px var(--container-pad) 40px'}}>
   <div className="hp-eyebrow" style={{color:'var(--gold-400)'}}>Tuscumbia, Alabama · Open Fri–Sun</div>
   <span className="hp-rule" style={{width:48,margin:'10px 0 14px'}}/>
   <h1 className="hp-display" style={{margin:0,color:'var(--stone-50)',fontSize:'var(--fs-display-xl)',lineHeight:.92,maxWidth:760}}>Go conquer something.</h1>
   <p style={{color:'var(--stone-200)',fontSize:18,maxWidth:540,margin:'16px 0 24px',lineHeight:1.55}}>A whole mountain of real off-road adventure, your way. Rock, climbs, woods, creeks and mud, packed onto one mountain in Northwest Alabama.</p>
   <div className="hp-on-dark" style={{display:'flex',gap:12,flexWrap:'wrap'}}><Button size="lg" onClick={()=>go('stay')}>Book a stay</Button><Button size="lg" variant="outline" onClick={()=>go('pricing')}>Day passes</Button></div>
  </div></div>}
function PlanBar({go}){
 return <div style={{maxWidth:'var(--container-max)',margin:'-28px auto 0',padding:'0 var(--container-pad)',position:'relative',zIndex:2}}>
  <div style={{background:'var(--surface-card)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-3)',padding:18,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(170px,1fr))',gap:14,alignItems:'end'}}>
   <Select label="Stay" options={['Cabin','RV site','Primitive camping']}/>
   <Input label="Arrive" icon="calendar-days" defaultValue="Fri, Apr 24"/>
   <Input label="Depart" icon="calendar-days" defaultValue="Sun, Apr 26"/>
   <Button size="lg" icon="search" onClick={()=>go('stay')}>Check availability</Button>
  </div></div>}
function Stats(){const s=[['120+','Rock crawling trails'],['8','Cabins'],['13','RV pads'],['1','Mountain']];
 return <div className="kit-stats" style={{gap:1,background:'var(--border-subtle)',border:'1px solid var(--border-subtle)',borderRadius:6,overflow:'hidden'}}>{s.map(([n,l])=><div key={l} style={{background:'var(--surface-card)',padding:'20px 18px'}}><div className="hp-display" style={{fontSize:44,lineHeight:1}}>{n}</div><div style={{fontSize:14,color:'var(--text-muted)',marginTop:4}}>{l}</div></div>)}</div>}
function Home({go,openEvent,openLodging}){const D=window.HP_DATA;
 return <>
  <Hero go={go}/><PlanBar go={go}/>
  <Section eyebrow="The mountain" title="Mild. Wild. And a whole lot in between."><Stats/>
   <div className="kit-g3" style={{marginTop:20}}>
    {[['Rock crawling','Natural rock ledges, climbs and drops. Bring the buggy, or bring the stock Jeep and pick your line.','difficult','rock-ledge-buggies.jpg'],['Trail riding','Wooded trails, creek crossings and overlooks. Good for SxS groups, stock rigs and the kids.','easy','pavilion-jeeps.jpg'],['Hill climbs','Steep, loose and a lot of fun to watch. Park your chair and pick a favorite.','extreme','buggy-airborne.jpg']].map(([t,d,l,img])=><div key={t} className="hp-card hp-card--interactive" role="link" tabIndex={0} aria-label={t+' trails'} onClick={()=>go('trails')} onKeyDown={e=>{if(e.key==='Enter')go('trails')}}><Photo src={'../../assets/photos/'+img} alt={t} position={img==='buggy-airborne.jpg'?'50% 45%':undefined} ratio="16/10"/><div className="hp-card__body"><DifficultyBadge level={l}/><h3 className="hp-card__title">{t}</h3><p style={{margin:0,color:'var(--text-muted)',fontSize:15}}>{d}</p></div></div>)}
   </div></Section>
  <Section dark eyebrow="Calendar" title="Upcoming events" action={<Button variant="outline" iconRight="arrow-right" onClick={()=>go('events')}>All events</Button>}>
   <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>{D.events.slice(0,3).map(e=><EventCard key={e.id} {...e} onClick={()=>openEvent(e)}/>)}</div></Section>
  <Section eyebrow="Stay the weekend" title="Cabins, RV pads & camping" action={<Button variant="outline" iconRight="arrow-right" onClick={()=>go('stay')}>See all</Button>}>
   <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>{D.lodging.slice(0,3).map(l=><LodgingCard key={l.id} {...l} onClick={()=>openLodging(l)}/>)}</div></Section>
  <Section style={{background:'var(--bg-sunken)'}} eyebrow="Admission" title="Day passes" action={<span style={{color:'var(--text-muted)'}}>Children under 10 ride free</span>}>
   <div className="kit-g4 kit-g4--stack">{D.passes.map(p=><PriceCard key={p.id} title={p.title} price={p.price} unit="/ rider" description={p.desc} features={p.features} highlight={p.highlight} badge={p.badge} action={<Button block variant={p.highlight?'primary':'secondary'} onClick={()=>go('pricing')}>Buy passes</Button>}/>)}</div></Section>
 </>}
window.Home=Home;
})();