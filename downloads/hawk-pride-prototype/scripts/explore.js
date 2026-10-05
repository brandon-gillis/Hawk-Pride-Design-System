(()=>{
const {Photo,Button,Icon,Badge,Alert,Tabs,TrailRow,Dialog,DifficultyBadge}=window.DS;
const IMG='./assets/photos/';
function EventsIndex(){const {go,book}=useApp();const E=window.HP_DATA.events;
 return <><PageHead eyebrow="Events" title="Big weekends on the mountain." intro="Rock crawls, hillclimbs, club rides and holiday weekends. Every event page has dates, what’s included and a way to book." image={hpAsset('event-crawl-crowd.jpg')} imageAlt="Crowd at a rock crawl"/>
  <Section>
   <div style={{display:'flex',flexDirection:'column',gap:16}}>{E.map(e=><div key={e.id} className="hp-card" style={{display:'grid',gridTemplateColumns:'minmax(0,300px) minmax(0,1fr)',overflow:'hidden'}}>
    <div style={{position:'relative',minHeight:190}}><Photo src={e.image||undefined} caption={e.image?undefined:'Event photo'} alt={e.title} ratio="auto" style={{position:'absolute',inset:0,aspectRatio:'auto',borderRadius:0}}/></div>
    <div style={{padding:'22px 24px',display:'flex',gap:24,alignItems:'center',flexWrap:'wrap'}}>
     <div style={{textAlign:'center',minWidth:64}}><div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>{HP.M[HP.p(e.start).getMonth()]}</div><div className="hp-display" style={{fontSize:48,lineHeight:1}}>{HP.p(e.start).getDate()}</div></div>
     <div style={{flex:'1 1 280px'}}><div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}><span className="hp-eyebrow" style={{color:'var(--text-muted)'}}>{e.type} · {HP.range(e.start,e.end)}, {HP.p(e.start).getFullYear()}</span>{e.status==='few'&&<Badge tone="warning">Few sites left</Badge>}{e.status==='soldout'&&<Badge tone="danger">Registration full</Badge>}{e.status==='featured'&&<Badge tone="gold">Featured</Badge>}</div>
      <h2 className="hp-display" style={{fontSize:'var(--fs-h2)',margin:'6px 0'}}>{e.title}</h2><p style={{margin:0,color:'var(--text-muted)'}}>{e.hook}</p></div>
     <div style={{display:'flex',gap:10}}><Button variant="outline" onClick={()=>go('events/'+e.id)}>View Event</Button>{e.status!=='soldout'&&<Button onClick={()=>book({event:e.id})}>Register</Button>}</div>
    </div></div>)}</div>
   <p style={{marginTop:24,color:'var(--text-muted)'}}>Regular open weekends aren’t listed here. The park is open every Friday to Sunday. <TextLink to="rates">See rates</TextLink>.</p></Section></>}
function EventPage({id}){const {book,go}=useApp();const e=window.HP_DATA.events.find(x=>x.id===id)||window.HP_DATA.events[0];const closed=e.status==='soldout';
 return <>
  <div style={{position:'relative',minHeight:'min(70vh,600px)',display:'flex',alignItems:'flex-end',background:'var(--black-900)'}}>
   <Photo src={e.image||undefined} caption={e.image?undefined:'Event hero photo'} alt={e.title} ratio="auto" style={{position:'absolute',inset:0,aspectRatio:'auto',borderRadius:0}}/>
   <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(13,13,11,.94), rgba(13,13,11,.25) 70%)'}}/>
   <div className="hp-on-dark" style={{position:'relative',width:'100%',maxWidth:'var(--container-max)',margin:'0 auto',padding:'120px var(--container-pad) 44px',color:'var(--stone-50)'}}>
    <button onClick={()=>go('events')} className="hp-btn hp-btn--ghost hp-btn--sm" style={{marginLeft:-10,color:'var(--stone-200)'}}><Icon name="arrow-left" size={16}/>All events</button>
    <div className="hp-eyebrow" style={{color:'var(--gold-400)',marginTop:10}}>{e.type} · {HP.fmtLong(e.start)} – {HP.fmtLong(e.end)}, {HP.p(e.start).getFullYear()}</div>
    <h1 className="hp-display" style={{margin:'10px 0 0',fontSize:'var(--fs-display-xl)',lineHeight:.92}}>{e.title}</h1>
    <p style={{fontSize:19,maxWidth:560,color:'var(--stone-200)',margin:'14px 0 24px'}}>{e.hook}</p>
    <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>{closed?<Badge tone="danger">Registration full</Badge>:<Button size="lg" onClick={()=>book({event:e.id})}>Register & Book</Button>}<Button size="lg" variant="outline" onClick={()=>{const el=document.getElementById('schedule');el&&window.scrollTo({top:el.offsetTop-80,behavior:'smooth'})}}>Schedule</Button></div>
   </div></div>
  <Section>
   <div className="split split--wide" style={{alignItems:'start'}}>
    <div><p style={{fontSize:20,lineHeight:1.5,margin:0,textWrap:'pretty'}}>{e.desc}</p>
     <div className="g4" style={{marginTop:28,gap:0,border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-md)',overflow:'hidden'}}>{e.facts.map(([l,v])=><div key={l} style={{padding:'14px 16px',background:'var(--surface-card)',borderRight:'1px solid var(--border-subtle)'}}><div className="hp-eyebrow" style={{color:'var(--text-muted)'}}>{l}</div><div style={{fontWeight:700,fontSize:17,marginTop:4}}>{v}</div></div>)}</div>
     {e.jeep&&<div style={{marginTop:24,display:'flex',gap:12,alignItems:'center'}}><Icon name="trophy" size={22}/><span>Bringing a Jeep? Run <TextLink to="trails/uphill-both-ways">Uphill Both Ways</TextLink>, our Jeep Badge of Honor trail.</span></div>}
    </div>
    <div className="hp-card hp-card--raised" style={{padding:24,gap:14,position:'sticky',top:96}}>
     <div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>Pricing</div>
     <Row l="Riding admission" v={'$'+window.HP_DATA.pricing.day+' / day'}/><Row l="Day 3 and beyond" v={'$'+window.HP_DATA.pricing.dayLater+' / day'}/><Row l="Kids 12 and under" v="Free"/><Row l="Spectators" v="To be confirmed"/>
     <Callout>Cabins and RV sites go fast on event weekends.</Callout>
     {closed?<Alert tone="danger" title="Registration is full">Watch this page for next year.</Alert>:<Button block size="lg" onClick={()=>book({event:e.id})}>Register & Book</Button>}
    </div></div></Section>
  <Section sunken id="schedule" eyebrow="Schedule" title="How the weekend runs.">
   <div style={{display:'flex',flexDirection:'column'}}>{e.schedule.map(([d,t])=><div key={d} style={{display:'grid',gridTemplateColumns:'160px minmax(0,1fr)',gap:20,padding:'16px 0',borderTop:'1px solid var(--border-default)',fontSize:17}}><div className="hp-display" style={{fontSize:24}}>{d}</div><div>{t}</div></div>)}</div></Section>
  <Section eyebrow="Stay for the weekend" title="Where to stay.">
   <div className="g3">{[['Cabins',HP.priceLabel('cabin'),'cabin'],['RV sites',HP.money(HP.rate('powered'))+' powered · '+HP.money(HP.rate('dry'))+' dry','powered'],['Camping','From '+HP.priceLabel('anywhere'),'primitive']].map(([t,p,s])=><div key={t} className="hp-card" style={{padding:20,gap:8}}><div style={{fontWeight:700,fontSize:18}}>{t}</div><div style={{color:'var(--text-muted)'}}>{p}</div>{!closed&&<div><Button size="sm" variant="secondary" onClick={()=>book({event:e.id})}>Book with this event</Button></div>}</div>)}</div></Section>
  <Section sunken eyebrow="Before you come" title="Rules & FAQ.">
   <div className="g2" style={{gap:'24px 40px'}}>{[['Do I need a waiver?','Yes, every rider. You’ll sign online right after you book.'],['Can I come just to watch?','Yes, spectators are welcome. Spectator pricing is still being set.'],['Are park rules different?','Standard park rules apply. Flags on whips are required.'],['Can I pay at the gate?','Yes, but booking ahead gets you through the gate faster.']].map(([q,a])=><div key={q}><div style={{fontWeight:700,fontSize:17}}>{q}</div><div style={{color:'var(--text-muted)',marginTop:4}}>{a}</div></div>)}</div>
   <div style={{marginTop:28,paddingTop:20,borderTop:'1px solid var(--border-default)',display:'flex',gap:16,alignItems:'center',flexWrap:'wrap'}}><span className="hp-eyebrow" style={{color:'var(--text-muted)'}}>Event sponsors</span>{[1,2,3].map(i=><span key={i} style={{width:120,height:44,border:'1px dashed var(--border-default)',borderRadius:4,display:'grid',placeItems:'center',fontSize:12,color:'var(--text-subtle)'}}>Sponsor logo</span>)}</div></Section></>}
function Trails(){const {go,book}=useApp();const [f,setF]=React.useState('all');const [t,setT]=React.useState(null);const D=window.HP_DATA.trails;const list=f==='all'?D:D.filter(x=>x.level===f);
 return <><PageHead eyebrow="Trails" title="From wooded trails to serious rock." intro="Over 1,000 acres and 120+ rock trails. Every trail is marked by difficulty so you can pick the ride that fits you and your rig." actions={[<Button key="d" size="lg" icon="download">Download trail map</Button>]} image={hpAsset('rock-ledge-buggies.jpg')} imageAlt="Buggies on a rock ledge"/>
  <Section>
   <div className="split" style={{alignItems:'start',gridTemplateColumns:'minmax(0,1fr) minmax(0,1.1fr)'}}>
    <div style={{display:'flex',flexDirection:'column',gap:14}}>
     {HP.notices('trails').map(n=><Alert key={n.title} tone={n.tone} title={n.title}>{n.text}</Alert>)}
     <Tabs variant="pill" value={f} onChange={setF} items={[{id:'all',label:'All'},{id:'easy',label:'Easy'},{id:'moderate',label:'Moderate'},{id:'difficult',label:'Difficult'},{id:'extreme',label:'Extreme'}]}/>
     <div style={{background:'var(--surface-card)',border:'1px solid var(--border-subtle)',borderRadius:6,padding:'0 12px'}}>{list.map(x=><TrailRow key={x.number} {...x} onClick={()=>x.signature?go('trails/uphill-both-ways'):setT(x)}/>)}</div>
    </div>
    <div style={{position:'sticky',top:96}}><div className="hp-card"><Photo caption="Park trail map" ratio="4/3.6"/><div className="hp-card__body" style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}><div style={{display:'flex',gap:12,flexWrap:'wrap'}}>{['easy','moderate','difficult','extreme'].map(l=><DifficultyBadge key={l} level={l}/>)}</div><Button size="sm" variant="outline" icon="download">PDF · works offline</Button></div></div></div>
   </div></Section>
  <section className="hp-on-dark" style={{background:'var(--black-950)',color:'var(--stone-50)',overflow:'hidden'}}><div className="split" style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--container-pad)',alignItems:'stretch'}}>
   <div style={{padding:'64px 0'}}><div className="hp-eyebrow" style={{color:'var(--gold-400)'}}>Signature trail</div><span className="hp-rule" style={{margin:'8px 0 12px'}}/>
    <h2 className="hp-display" style={{margin:0,fontSize:'var(--fs-display-l)',lineHeight:.95}}>Uphill Both Ways</h2>
    <p style={{fontSize:18,color:'var(--stone-200)',margin:'14px 0 24px',maxWidth:480}}>A Jeep Badge of Honor trail, right here at Hawk Pride. One of the toughest runs on the mountain.</p>
    <Button size="lg" iconRight="arrow-right" onClick={()=>go('trails/uphill-both-ways')}>About the trail</Button></div>
   <div style={{position:'relative',minHeight:380,marginRight:'calc(-1 * var(--container-pad))'}}><Photo caption="Jeep on Uphill Both Ways" ratio="auto" style={{position:'absolute',inset:0,aspectRatio:'auto',borderRadius:0}}/></div></div></section>
  <Section eyebrow="Ride smart" title="Terrain, vehicles and safety.">
   <div className="g3" style={{gap:'28px 36px'}}>{[['mountain','Terrain','Rock ledges, loose climbs, creek crossings, mud and wooded two-track.'],['car-front','Vehicles','ATVs, side-by-sides, Jeeps, trucks and buggies. Check each trail’s rating.'],['signpost','Navigation','Trails are numbered at every junction. Grab a paper map at the gate.'],['shield-check','Safety','Helmets on ATVs and open SxS. Ride difficult trails with a buddy.'],['users','Families','Start on the easy loops. Kids 12 and under ride free.'],['file-text','Rules','Read the park rules before you ride.','rules']].map(([i,t,d,to])=><div key={t} style={{display:'flex',gap:14}}><Icon name={i} size={26} style={{flex:'none'}}/><div><div style={{fontWeight:700,fontSize:18}}>{to?<TextLink to={to}>{t}</TextLink>:t}</div><div style={{color:'var(--text-muted)',marginTop:4}}>{d}</div></div></div>)}</div></Section>
  <Dialog open={!!t} title={t?t.number+' · '+t.name:''} onClose={()=>setT(null)} footer={<Button onClick={()=>setT(null)}>Close</Button>}>
   {t&&<div style={{display:'flex',flexDirection:'column',gap:14}}><Photo caption="Trail photo" ratio="16/9"/><div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center'}}><DifficultyBadge level={t.level}/>{t.status==='closed'?<Badge tone="danger">Closed</Badge>:<Badge tone="success">Open</Badge>}</div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,fontSize:15}}><div><div style={{color:'var(--text-muted)',fontSize:13}}>Vehicles</div>{t.vehicles}</div><div><div style={{color:'var(--text-muted)',fontSize:13}}>Length</div>{t.length}</div></div></div>}
  </Dialog></>}
function UphillBothWays(){const {go,book}=useApp();
 return <>
  <div style={{position:'relative',minHeight:'min(78vh,660px)',display:'flex',alignItems:'flex-end',background:'var(--black-900)'}}>
   <Photo caption="Hero · Jeep climbing Uphill Both Ways" ratio="auto" style={{position:'absolute',inset:0,aspectRatio:'auto',borderRadius:0}}/>
   <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(13,13,11,.94), rgba(13,13,11,.2) 70%)'}}/>
   <div className="hp-on-dark" style={{position:'relative',width:'100%',maxWidth:'var(--container-max)',margin:'0 auto',padding:'120px var(--container-pad) 48px',color:'var(--stone-50)'}}>
    <button onClick={()=>go('trails')} className="hp-btn hp-btn--ghost hp-btn--sm" style={{marginLeft:-10,color:'var(--stone-200)'}}><Icon name="arrow-left" size={16}/>Trails</button>
    <div className="hp-eyebrow" style={{color:'var(--gold-400)',marginTop:10}}>Signature trail · Jeep Badge of Honor</div>
    <h1 className="hp-display" style={{margin:'10px 0 0',fontSize:'var(--fs-display-xl)',lineHeight:.92}}>Uphill Both Ways</h1>
    <p style={{fontSize:19,maxWidth:560,color:'var(--stone-200)',margin:'14px 0 24px'}}>Hawk Pride’s Badge of Honor trail. Bring a capable rig, a spotter and some patience.</p>
    <div style={{display:'flex',gap:12,flexWrap:'wrap'}}><Button size="lg" onClick={()=>book()}>Plan your run</Button><Button size="lg" variant="outline" icon="download">Trail map</Button></div>
   </div></div>
  <Section>
   <div className="split split--wide" style={{alignItems:'start'}}>
    <div><h2 className="hp-display" style={{fontSize:'var(--fs-h1)',margin:'0 0 14px'}}>Part of the Badge of Honor program.</h2>
     <p style={{fontSize:18,lineHeight:1.55,margin:0}}>Uphill Both Ways is a Jeep Badge of Honor trail, and it’s here at Hawk Pride. It’s built for capable rigs and patient drivers. The rest of the mountain is open to every kind of rig.</p>
     <h3 className="hp-card__title" style={{margin:'32px 0 12px',fontSize:22}}>What to expect</h3>
     <ul style={{margin:0,paddingLeft:20,display:'flex',flexDirection:'column',gap:8,fontSize:17,lineHeight:1.5}}><li>Rock steps and off-camber climbs with a few committing lines.</li><li>Tight trees in places. Mind your mirrors.</li><li>Give yourself time. Groups move slowly on the hard sections.</li></ul>
     <h3 className="hp-card__title" style={{margin:'32px 0 12px',fontSize:22}}>Before you drop in</h3>
     <ul style={{margin:0,paddingLeft:20,display:'flex',flexDirection:'column',gap:8,fontSize:17,lineHeight:1.5}}><li>Air down and bring recovery gear.</li><li>Ride with at least one other vehicle.</li><li>Trailhead is signed from the main loop. See the trail map.</li></ul>
    </div>
    <div className="hp-card hp-card--raised" style={{padding:24,gap:14,position:'sticky',top:96}}>
     <div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>Trail facts</div>
     <div style={{display:'flex',gap:10,alignItems:'center'}}><DifficultyBadge level="difficult"/></div>
     <Row l="Best for" v="Jeeps and built 4x4s"/><Row l="Driver" v="Some off-road experience"/><Row l="Location" v="Off the main loop"/>
     <Button block onClick={()=>book()}>Book your trip</Button>
    </div></div></Section>
  <Section sunken eyebrow="The community" title="Made it to the top.">
   <div className="g3">{['Trailhead sign','Group at the top','Completion photo'].map(c=><Photo key={c} caption={c} ratio="4/3"/>)}</div></Section>
  <Section eyebrow="Keep going" title="More to ride nearby.">
   <div className="g3">{window.HP_DATA.trails.filter(t=>!t.signature&&t.level!=='easy').slice(0,3).map(t=><div key={t.number} className="hp-card" style={{padding:20,gap:8}}><DifficultyBadge level={t.level}/><div style={{fontWeight:700,fontSize:18}}>{t.number} · {t.name}</div><div style={{color:'var(--text-muted)'}}>{t.vehicles} · {t.length}</div></div>)}</div></Section></>}
Object.assign(window,{EventsIndex,EventPage,Trails,UphillBothWays});
})();
