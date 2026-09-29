(()=>{
const {Photo,Button,Icon,Badge,DifficultyBadge}=window.DS;
const IMG='../../assets/photos/';
function Hero(){const {book,go}=useApp();const ev=window.HP_DATA.events[0];
 return <div style={{position:'relative',minHeight:'min(80vh,700px)',display:'flex',alignItems:'flex-end',background:'var(--black-900)'}}>
  <Photo src={hpAsset('hillside-traffic.jpg')} alt="A line of side-by-sides and buggies climbing a dirt hill through the trees" position="50% 35%" ratio="auto" style={{position:'absolute',inset:0,aspectRatio:'auto',borderRadius:0}}/>
  <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(13,13,11,.94) 0%, rgba(13,13,11,.6) 50%, rgba(13,13,11,.2) 100%), linear-gradient(to right, rgba(13,13,11,.6) 0%, rgba(13,13,11,0) 65%)',pointerEvents:'none'}}/>
  <div style={{position:'relative',width:'100%',maxWidth:'var(--container-max)',margin:'0 auto',padding:'120px var(--container-pad) 48px',display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:32,flexWrap:'wrap'}}>
   <div style={{maxWidth:780}}>
    <div className="hp-eyebrow" style={{color:'var(--gold-400)'}}>Tuscumbia, Alabama · Open Fri – Sun</div>
    <span className="hp-rule" style={{width:48,margin:'10px 0 14px'}}/>
    <h1 className="hp-display" style={{margin:0,color:'var(--stone-50)',fontSize:'var(--fs-display-xl)',lineHeight:.92}}>Go conquer something.</h1>
    <p style={{color:'var(--stone-200)',fontSize:19,maxWidth:520,margin:'16px 0 26px',lineHeight:1.5}}>Easy trails. Hard climbs. Long weekends. Over 1,000 acres of real off-road on one mountain in Northwest Alabama.</p>
    <div className="hp-on-dark" style={{display:'flex',gap:12,flexWrap:'wrap'}}><Button size="lg" onClick={()=>book()}>Book Now</Button><Button size="lg" variant="outline" onClick={()=>go('trails')}>See the trails</Button></div>
   </div>
   <button onClick={()=>go('events/'+ev.id)} className="hp-on-dark" style={{background:'rgba(13,13,11,.72)',border:'1px solid var(--border-inverse)',borderLeft:'3px solid var(--gold-400)',color:'var(--stone-50)',padding:'14px 18px',textAlign:'left',font:'inherit',cursor:'pointer',maxWidth:300,display:'flex',flexDirection:'column',gap:4}}>
    <span className="hp-eyebrow" style={{color:'var(--gold-400)'}}>Next big weekend</span><span className="hp-display" style={{fontSize:26,lineHeight:1}}>{ev.title}</span><span style={{fontSize:14,color:'var(--stone-200)'}}>{HP.range(ev.start,ev.end)} · View event →</span></button>
  </div></div>}
function Pathways(){const {go}=useApp();
 const P=[['Trail riding','From wooded loops to serious rock.','trails',hpAsset('pavilion-jeeps.jpg'),'Jeeps on an easy trail by the pavilion'],['Events','Race weekends, club rides and holiday crowds.','events',hpAsset('event-crawl-crowd.jpg'),'Crowd watching a rock crawl'],['Cabins & camping','Ride all day. Stay all weekend.','cabins',null,'Cabin porch at dusk'],['Group rides','Bring the club. We’ll save you a weekend.','groups',hpAsset('hillside-traffic.jpg'),'A group of rigs climbing together']];
 return <Section eyebrow="Find your weekend" title="There’s a Hawk Pride for the way you ride.">
  <div className="g4">{P.map(([t,d,to,img,alt],i)=><a key={t} href={'#/'+to} onClick={e=>{e.preventDefault();go(to)}} style={{position:'relative',display:'block',color:'var(--stone-50)',textDecoration:'none',borderRadius:'var(--radius-md)',overflow:'hidden',aspectRatio:i%2?'3/4.2':'3/4',marginTop:i%2?32:0,background:'var(--black-900)'}}>
   <Photo src={img||undefined} caption={img?undefined:alt} alt={alt} ratio="auto" style={{position:'absolute',inset:0,aspectRatio:'auto',borderRadius:0}}/>
   <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(13,13,11,.92) 0%, rgba(13,13,11,.1) 60%)'}}/>
   <div style={{position:'absolute',left:18,right:18,bottom:18}}><h3 className="hp-display" style={{margin:0,fontSize:30,lineHeight:1,color:'var(--stone-50)'}}>{t}</h3><p style={{margin:'6px 0 0',fontSize:15,color:'var(--stone-200)'}}>{d}</p><span style={{display:'inline-flex',alignItems:'center',gap:6,marginTop:10,color:'var(--gold-400)',fontWeight:700,fontSize:14}}>Explore <Icon name="arrow-right" size={16}/></span></div>
  </a>)}</div></Section>}
function Proof(){const {go}=useApp();
 const pts=[['Easy to extreme','Wooded loops for the family, ledges for the buggy.'],['Signature rock','Technical crawling and named obstacles.'],['Uphill Both Ways','A Jeep Badge of Honor trail.','trails/uphill-both-ways'],[HP.count('cabin')+' cabins · '+(HP.count('powered')+HP.count('dry'))+' RV pads','Plus primitive sites and open camping.'],['Big event weekends','Hillclimbs, rock crawls and club rides.'],['Groups welcome','Clubs, families and friends.','groups']];
 return <section className="hp-on-dark" style={{background:'var(--black-950)',color:'var(--stone-50)',overflow:'hidden'}}>
  <div className="split" style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--container-pad)',alignItems:'stretch'}}>
   <div style={{position:'relative',minHeight:460,marginLeft:'calc(-1 * var(--container-pad))'}}><Photo src={hpAsset('rock-ledge-buggies.jpg')} alt="Buggies working up a rock ledge" ratio="auto" style={{position:'absolute',inset:0,aspectRatio:'auto',borderRadius:0}}/></div>
   <div style={{padding:'64px 0'}}>
    <div className="hp-eyebrow" style={{color:'var(--gold-400)'}}>The mountain</div><span className="hp-rule" style={{margin:'8px 0 12px'}}/>
    <h2 className="hp-display" style={{margin:0,fontSize:'var(--fs-display-l)',lineHeight:.95}}>One mountain. Every kind of ride.</h2>
    <p style={{fontSize:17,lineHeight:1.55,color:'var(--stone-200)',margin:'16px 0 28px',maxWidth:520}}>Over 1,000 acres and 120+ rock trails, with creeks, climbs, mud and woods in between. Pick your line and bring whatever you drive.</p>
    <div className="g2" style={{gap:'18px 28px'}}>{pts.map(([t,d,to])=><div key={t} style={{borderTop:'1px solid var(--border-inverse)',paddingTop:12}}>
     <div style={{fontWeight:700,fontSize:17}}>{to?<TextLink to={to} dark>{t}</TextLink>:t}</div><div style={{fontSize:15,color:'var(--text-inverse-muted)',marginTop:4}}>{d}</div></div>)}</div>
   </div></div></section>}
function Upcoming(){const {go}=useApp();const E=window.HP_DATA.events.slice(0,3);
 return <Section eyebrow="Coming up" title="Something’s always happening." action={<Button variant="outline" iconRight="arrow-right" onClick={()=>go('events')}>All events</Button>}>
  <div className="g3">{E.map(e=><a key={e.id} href={'#/events/'+e.id} onClick={ev=>{ev.preventDefault();go('events/'+e.id)}} className="hp-card hp-card--interactive" style={{textDecoration:'none',color:'inherit'}}>
   <Photo src={e.image||undefined} caption={e.image?undefined:'Event photo'} alt={e.title} ratio="16/10" topLeft={<div className="hp-on-dark" style={{background:'var(--black-950)',color:'var(--stone-50)',padding:'6px 10px',textAlign:'center',lineHeight:1}}><div className="hp-eyebrow" style={{color:'var(--gold-400)',fontSize:11}}>{HP.M[HP.p(e.start).getMonth()]}</div><div className="hp-display" style={{fontSize:28}}>{HP.p(e.start).getDate()}</div></div>}/>
   <div className="hp-card__body"><div style={{display:'flex',gap:8,alignItems:'center'}}><span className="hp-eyebrow" style={{color:'var(--text-muted)'}}>{e.type} · {HP.range(e.start,e.end)}</span>{e.status==='few'&&<Badge tone="warning">Few sites left</Badge>}</div>
    <h3 className="hp-card__title">{e.title}</h3><p style={{margin:0,color:'var(--text-muted)',fontSize:15}}>{e.hook}</p>
    <span style={{display:'inline-flex',alignItems:'center',gap:6,fontWeight:700,fontSize:14,marginTop:4}}>View event <Icon name="arrow-right" size={16}/></span></div></a>)}</div></Section>}
function Stay(){const {go,book}=useApp();const C=window.HP_DATA.categories;
 const S=[['Cabins',HP.priceLabel('cabin'),'Beds, A/C and a porch.','cabins','cabin'],['RV sites',HP.money(HP.rate('powered'))+' powered · '+HP.money(HP.rate('dry'))+' dry','Level pads close to the trails.','camping','powered'],['Camping','From '+HP.priceLabel('anywhere'),'Primitive sites or camp anywhere.','camping','primitive']];
 return <Section sunken eyebrow="Stay the weekend" title="Ride all day. Stay all weekend.">
  <div className="g3">{S.map(([t,p,d,to,stay])=><div key={t} className="hp-card"><Photo caption={t} ratio="4/3"/><div className="hp-card__body">
   <h3 className="hp-card__title">{t}</h3><div style={{fontWeight:700}}>{p}</div><p style={{margin:0,color:'var(--text-muted)',fontSize:15}}>{d}</p>
   <div style={{display:'flex',gap:10,marginTop:6,flexWrap:'wrap'}}><Button size="sm" onClick={()=>book({stay})}>Check availability</Button><Button size="sm" variant="ghost" onClick={()=>go(to)}>Details</Button></div></div></div>)}</div></Section>}
function Life(){const T=[[hpAsset('buggy-airborne.jpg'),'Buggy catching air on the hill','2/1'],[null,'Family at the overlook','1/1'],[hpAsset('pavilion-jeeps.jpg'),'Rigs lined up at the pavilion','1/1'],[null,'Campfire at the RV pads','1/1'],[hpAsset('event-crawl-crowd.jpg'),'Event crowd at the rock pit','1/1'],[null,'View across the property','2/1']];
 return <Section eyebrow="Life at Hawk Pride" title="Real dirt. Real people.">
  <div style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gridAutoRows:'minmax(160px,22vw)',gap:10,maxHeight:720}} className="proto-life">
   {T.map(([s,a,r],i)=><div key={i} style={{gridColumn:r==='2/1'?'span 2':'span 1',position:'relative',borderRadius:'var(--radius-md)',overflow:'hidden'}}><Photo src={s||undefined} caption={s?undefined:a} alt={a} ratio="auto" style={{position:'absolute',inset:0,aspectRatio:'auto',borderRadius:0}}/></div>)}
  </div></Section>}
function Final(){const {book}=useApp();
 return <section style={{background:'var(--gold-400)',color:'var(--black-950)'}}><div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'56px var(--container-pad)',display:'flex',justifyContent:'space-between',alignItems:'center',gap:24,flexWrap:'wrap'}}>
  <h2 className="hp-display" style={{margin:0,fontSize:'var(--fs-display-l)',lineHeight:.95,color:'var(--black-950)'}}>Pick your dates. We’ll handle the rest.</h2>
  <button onClick={()=>book()} className="hp-btn hp-btn--lg" style={{background:'var(--black-950)',color:'var(--gold-400)',borderColor:'var(--black-950)'}}>Book Now <Icon name="arrow-right" size={18}/></button></div></section>}
function Home(){return <><Hero/><Pathways/><Proof/><Upcoming/><Stay/><Life/><Final/></>}
window.Home=Home;
})();
