(()=>{
const {Button,Icon,Badge,Alert,QuantityStepper,Input,Photo,IconButton}=window.DS;
function Dates(){const {trip:t,update,go}=useApp();const ev=HP.eventFor(t.arrive,t.depart),n=HP.nights(t);const W=HP.weekends(HP.today,4);
 const set=(a,d)=>{const nt={...t,arrive:a,depart:d};update({arrive:a,depart:d,days:d?Math.max(HP.openDays(nt),1):0,unit:null})};
 return <><StepHead eyebrow="Step 1" title="When are you coming?" sub="Pick your arrival and departure. Tap one day twice for a day trip."/>
  <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:16}}><span style={{fontSize:14,fontWeight:700,alignSelf:'center',marginRight:4}}>Quick pick:</span>{W.map(w=><button key={w.arrive} className="hp-chip" aria-pressed={t.arrive===w.arrive&&t.depart===w.depart} onClick={()=>set(w.arrive,w.depart)} style={{font:'inherit',fontSize:14,padding:'8px 14px',borderRadius:999,border:'1.5px solid '+(t.arrive===w.arrive&&t.depart===w.depart?'var(--black-950)':'var(--border-default)'),background:t.arrive===w.arrive&&t.depart===w.depart?'var(--black-950)':'var(--surface-card)',color:t.arrive===w.arrive&&t.depart===w.depart?'var(--gold-400)':'inherit',cursor:'pointer',fontWeight:600}}>{HP.range(w.arrive,w.depart)}{HP.eventFor(w.arrive,w.depart)?' · Event':''}</button>)}</div>
  <Calendar arrive={t.arrive} depart={t.depart} onPick={set}/>
  <div style={{display:'flex',flexDirection:'column',gap:12,marginTop:16}}>
   {t.arrive&&!t.depart&&<Alert tone="info" title={'Arriving '+HP.fmtLong(t.arrive)}>Now pick your departure day.</Alert>}
   {ev&&<Alert tone="warning" title={'Your dates include '+ev.title}>It’s an event weekend, so cabins and RV sites go fast. <TextLink to={'events/'+ev.id}>See the event</TextLink></Alert>}
   {t.arrive&&t.depart&&HP.openDays(t)===0&&<Alert tone="closed" title="The park is closed for riding on these dates">You can still camp. Riding is open Friday to Sunday and on event days.</Alert>}
  </div>
  <StepNav next={()=>go('book/stay')} ok={BK.valid('dates',t)} hint="Pick arrival and departure"/></>}
function Stay(){const {trip:t,update,go}=useApp();const av=HP.availability(t),n=HP.nights(t);const C=window.HP_DATA.categories;
 const pick=id=>update({stay:id,unit:t.stay===id?t.unit:null,addAdmission:true});
 const price=c=>HP.priceLabel(c.id);
 return <><StepHead eyebrow="Step 2" title="Where are you staying?" sub={n?n+' night'+(n>1?'s':'')+', '+HP.range(t.arrive,t.depart)+'.':'Day trip on '+HP.fmtLong(t.arrive)+'.'}/>
  <div style={{display:'flex',flexDirection:'column',gap:12}}>
   {C.map(c=>{const a=av[c.id],sold=a.count===0,dis=sold||n===0,sel=t.stay===c.id;
    return <button key={c.id} className="opt" aria-pressed={sel} disabled={dis} onClick={()=>pick(c.id)}>
     <span style={{width:48,height:48,borderRadius:'var(--radius-md)',background:sel?'var(--black-950)':'var(--bg-sunken)',color:sel?'var(--gold-400)':'inherit',display:'grid',placeItems:'center',flex:'none'}}><Icon name={c.icon} size={24}/></span>
     <span style={{flex:1,minWidth:0}}><span style={{display:'flex',gap:10,alignItems:'center',flexWrap:'wrap'}}><span style={{fontWeight:700,fontSize:19}}>{c.name}</span>{sold?<Badge tone="danger">Sold out</Badge>:c.model==='unit'?<Badge tone={a.count<=2?'warning':'success'}>{a.count} available</Badge>:<Badge tone="success">Open</Badge>}</span><span style={{display:'block',fontSize:15,color:'var(--text-muted)',marginTop:2}}>{c.desc}</span></span>
     <span style={{textAlign:'right',fontWeight:700,whiteSpace:'nowrap'}}>{price(c)}</span></button>})}
   <button className="opt" aria-pressed={t.stay==='none'} onClick={()=>update({stay:'none',unit:null,addAdmission:true})}>
    <span style={{width:48,height:48,borderRadius:'var(--radius-md)',background:t.stay==='none'?'var(--black-950)':'var(--bg-sunken)',color:t.stay==='none'?'var(--gold-400)':'inherit',display:'grid',placeItems:'center',flex:'none'}}><Icon name="ticket" size={24}/></span>
    <span style={{flex:1}}><span style={{fontWeight:700,fontSize:19}}>No overnight stay</span><span style={{display:'block',fontSize:15,color:'var(--text-muted)',marginTop:2}}>Just riding admission.</span></span></button>
  </div>
  {n===0&&<div style={{marginTop:14}}><Callout>Overnight options need at least one night. <TextLink to="book/dates">Change dates</TextLink></Callout></div>}
  <StepNav back={()=>go('book/dates')} next={()=>go(BK.needsSite(t)?'book/site':'book/party')} ok={BK.valid('stay',t)} hint="Choose a stay"/></>}
function Site(){const {trip:t,update,go}=useApp();const c=HP.cat(t.stay);const av=HP.availability(t)[t.stay];const U=window.HP_DATA.units.filter(u=>u.cat===t.stay);const [hl,setHl]=React.useState(null);const [view,setView]=React.useState(null);const n=HP.nights(t);
 const free=id=>av.free.includes(id);const sorted=[...U].sort((a,b)=>free(b.id)-free(a.id));
 const state=u=>!free(u.id)?'taken':t.unit===u.id?'sel':hl===u.id?'hl':'free';
 const select=id=>{update({unit:id});setView(null)};
 return <><StepHead eyebrow="Step 3" title={'Pick your '+(t.stay==='cabin'?'cabin':'site')+'.'} sub={av.count+' of '+U.length+' '+c.plural.toLowerCase()+' open for '+HP.range(t.arrive,t.depart)+'. Hover a card to find it on the map.'}/>
  <div className="bk-site">
   <div style={{display:'flex',flexDirection:'column',gap:10,maxHeight:640,overflowY:'auto',paddingRight:4}}>{sorted.map(u=>{const f=free(u.id);
    return <div key={u.id} className="unit" data-hl={hl===u.id?1:0} data-sel={t.unit===u.id?1:0} onMouseEnter={()=>setHl(u.id)} onMouseLeave={()=>setHl(null)} style={{opacity:f?1:.55}}>
     <div style={{position:'relative',borderRadius:4,overflow:'hidden',minHeight:90}}><Photo caption={u.name} ratio="auto" style={{position:'absolute',inset:0,aspectRatio:'auto',borderRadius:0}}/></div>
     <div style={{display:'flex',flexDirection:'column',gap:4,minWidth:0}}>
      <div style={{display:'flex',justifyContent:'space-between',gap:8}}><span style={{fontWeight:700,fontSize:17}}>{u.name}</span><span style={{fontWeight:700}}>{HP.money(u.price)}<span style={{fontWeight:400,fontSize:13,color:'var(--text-muted)'}}> / night</span></span></div>
      <div style={{fontSize:14,color:'var(--text-muted)'}}>Sleeps {u.sleeps}{u.beds?' · '+u.beds:''}</div>
      <div style={{display:'flex',gap:8,marginTop:'auto',paddingTop:6,alignItems:'center'}}>{f?<><Button size="sm" variant={t.unit===u.id?'primary':'secondary'} icon={t.unit===u.id?'check':undefined} onClick={()=>select(u.id)}>{t.unit===u.id?'Selected':'Select'}</Button><Button size="sm" variant="ghost" onClick={()=>setView(u)}>View details</Button></>:<Badge tone="neutral">Booked</Badge>}</div></div></div>})}</div>
   <div className="bk-map" style={{position:'sticky',top:96}}><div className="hp-card" style={{overflow:'hidden'}}>
    <div className="hp-topo" style={{position:'relative',aspectRatio:'4/3.3',background:'var(--stone-100)'}}>
     {window.HP_DATA.landmarks.map(([l,x,y])=><span key={l} style={{position:'absolute',left:x+'%',top:y+'%',transform:'translate(-50%,-50%)',fontSize:11,fontWeight:700,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--text-muted)',background:'rgba(255,255,255,.8)',padding:'2px 6px',borderRadius:3,whiteSpace:'nowrap'}}>{l}</span>)}
     {U.map(u=><button key={u.id} className="map-pin" data-state={state(u)} disabled={!free(u.id)} style={{left:u.x+'%',top:u.y+'%'}} onMouseEnter={()=>setHl(u.id)} onMouseLeave={()=>setHl(null)} onClick={()=>setView(u)} aria-label={u.name+(free(u.id)?'':' (booked)')}>{u.name.replace(/\D+/g,'')}</button>)}
    </div>
    <div style={{display:'flex',gap:16,padding:'10px 14px',fontSize:13,color:'var(--text-muted)',flexWrap:'wrap'}}><span style={{display:'flex',gap:6,alignItems:'center'}}><span style={{width:12,height:12,borderRadius:'50%',background:'var(--gold-400)',border:'1.5px solid var(--black-950)'}}/>Available</span><span style={{display:'flex',gap:6,alignItems:'center'}}><span style={{width:12,height:12,borderRadius:'50%',background:'var(--stone-200)'}}/>Booked</span><span style={{display:'flex',gap:6,alignItems:'center'}}><span style={{width:12,height:12,borderRadius:'50%',background:'var(--black-950)'}}/>Your pick</span><span style={{marginLeft:'auto'}}>Sample map</span></div>
   </div></div></div>
  <StepNav back={()=>go('book/stay')} next={()=>go('book/party')} ok={BK.valid('site',t)} hint="Select a site"/>
  {view&&<><div className="drawer-scrim" onClick={()=>setView(null)}/><div className="drawer" role="dialog" aria-label={view.name}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 20px',borderBottom:'1px solid var(--border-subtle)'}}><span className="hp-display" style={{fontSize:26}}>{view.name}</span><IconButton icon="x" label="Close" onClick={()=>setView(null)}/></div>
   <div style={{flex:1,overflowY:'auto',padding:20,display:'flex',flexDirection:'column',gap:16}}>
    <Photo caption={view.name+' · photo'} ratio="16/10"/><div className="g2" style={{gap:8}}><Photo caption="Interior" ratio="4/3"/><Photo caption="Parking" ratio="4/3"/></div>
    <p style={{margin:0,fontSize:17}}>{view.desc}</p>
    <div style={{display:'flex',flexDirection:'column',gap:8}}><Row l="Sleeps" v={view.sleeps}/>{view.beds&&<Row l="Beds" v={view.beds}/>}<Row l={t.stay==='cabin'?'Climate':'Hookups'} v={t.stay==='cabin'?'A/C and heat':t.stay==='powered'?'50A electric, water':'None · generators OK'}/><Row l="Parking" v="Truck and trailer"/><Row l="Check-in / out" v="2 PM / noon"/></div>
   </div>
   <div style={{padding:20,borderTop:'1px solid var(--border-subtle)',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16}}><div><div className="hp-display" style={{fontSize:26}}>{HP.money(view.price*n)}</div><div style={{fontSize:13,color:'var(--text-muted)'}}>{HP.money(view.price)} × {n} night{n>1?'s':''}</div></div><Button size="lg" onClick={()=>select(view.id)}>Select {view.name}</Button></div>
  </div></>}</>}
function Party(){const {trip:t,update,go}=useApp();const u=HP.unit(t.unit);const over=u&&HP.people(t)>u.sleeps;
 const setN=(k,key,v)=>update(s=>{const names={...s.names};const arr=[...(names[key]||[])];while(arr.length<v)arr.push('');names[key]=arr;return {[k]:v,names}});
 const setName=(key,i,v)=>update(s=>{const names={...s.names};const arr=[...(names[key]||[])];arr[i]=v;names[key]=arr;return {names}});
 const group=(key,count,label)=>Array.from({length:count},(_,i)=><Input key={key+i} label={label+' '+(i+1)} placeholder="First and last name" value={(t.names[key]||[])[i]||''} onChange={e=>setName(key,i,e.target.value)}/>);
 const back=BK.needsSite(t)?'book/site':'book/stay';
 return <><StepHead eyebrow={'Step '+(BK.stepsFor(t).indexOf('party')+1)} title="Who’s coming?" sub="We need a name for everyone so the gate can check you in and waivers go to the right people."/>
  <div className="hp-card" style={{padding:'4px 20px'}}>
   {[['adults','a','Adult riders','Ages 13 and up',1],['kids','k','Child riders','12 and under · ride free',0],['guests','g','Non-riding guests','Staying, not riding',0]].map(([k,key,l,d,min],i)=><div key={k} style={{padding:'14px 0',borderTop:i?'1px solid var(--border-subtle)':0}}><QuantityStepper label={l} description={d} value={t[k]} min={min} max={12} onChange={v=>setN(k,key,v)}/></div>)}</div>
  {over&&<div style={{marginTop:14}}><Alert tone="warning" title={u.name+' sleeps '+u.sleeps}>You have {HP.people(t)} people. Pick a bigger cabin or add a campsite in a second booking.</Alert></div>}
  <h2 className="hp-card__title" style={{margin:'32px 0 12px',fontSize:22}}>Names</h2>
  <div className="g2" style={{gap:14}}>{group('a',t.adults,'Adult rider')}{group('k',t.kids,'Child rider')}{group('g',t.guests,'Guest')}</div>
  <StepNav back={()=>go(back)} next={()=>go('book/admission')} ok={BK.valid('party',t)} hint={over?'Too many people for this cabin':'Add a name for everyone'}/></>}
function Admission(){const {trip:t,update,go}=useApp();const max=BK.maxDays(t);const none=t.stay==='none';
 React.useEffect(()=>{if(!t.days||t.days>max)update({days:max})},[]);
 const days=Math.min(t.days||max,max),want=none||t.addAdmission!==false;const P=window.HP_DATA.pricing;
 return <><StepHead eyebrow={'Step '+(BK.stepsFor(t).indexOf('admission')+1)} title={none?'Riding admission.':'Add riding admission?'} sub={none?'Pay now and go straight through the gate.':'Your stay doesn’t include riding. Add it now and skip the line at the gate.'}/>
  {!none&&<div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:20}}>
   <button className="opt" aria-pressed={want} onClick={()=>update({addAdmission:true})}><Icon name="ticket" size={24}/><span style={{flex:1}}><span style={{fontWeight:700,fontSize:18}}>Yes, add riding admission</span><span style={{display:'block',fontSize:15,color:'var(--text-muted)'}}>For every adult rider in your party.</span></span><span style={{fontWeight:700}}>{HP.money(t.adults*HP.admissionPer(days))}</span></button>
   <button className="opt" aria-pressed={!want} onClick={()=>update({addAdmission:false})}><Icon name="clock" size={24}/><span style={{flex:1}}><span style={{fontWeight:700,fontSize:18}}>No, we’ll pay at the gate</span><span style={{display:'block',fontSize:15,color:'var(--text-muted)'}}>Or we’re not riding this trip.</span></span></button></div>}
  {want&&<div className="hp-card" style={{padding:22,gap:14}}>
   <QuantityStepper label="Riding days" description={max+' open riding day'+(max>1?'s':'')+' on your dates'} value={days} min={1} max={max} onChange={v=>update({days:v})}/>
   <div style={{borderTop:'1px solid var(--border-subtle)',paddingTop:14,display:'flex',flexDirection:'column',gap:8}}>
    <Row l={t.adults+' adult'+(t.adults>1?'s':'')+' × '+Math.min(days,2)+' day'+(Math.min(days,2)>1?'s':'')+' × '+HP.money(P.day)} v={HP.money(t.adults*P.day*Math.min(days,2))}/>
    {days>2&&<Row l={t.adults+' adult'+(t.adults>1?'s':'')+' × '+(days-2)+' more day'+(days>3?'s':'')+' × '+HP.money(P.dayLater)} v={HP.money(t.adults*P.dayLater*(days-2))}/>}
    {t.kids>0&&<Row muted l={t.kids+' child rider'+(t.kids>1?'s':'')+' (12 and under)'} v="Free"/>}
    <Row b l="Admission total" v={HP.money(HP.admission({...t,days}))}/></div>
   {days>2&&<Callout>Multi-day savings applied: {HP.money(P.dayLater)} a day from day 3.</Callout>}</div>}
  <StepNav back={()=>go('book/party')} next={()=>go('book/review')} ok={BK.valid('admission',t)}/></>}
function Review(){const {trip:t,go}=useApp();const P=HP.participants(t);
 return <><StepHead eyebrow="Last step" title="Your Hawk Pride trip." sub="Check everything over. You can edit any part before you pay."/>
  <div style={{display:'flex',flexDirection:'column',gap:14}}>
   <TripSummary/>
   <div className="hp-card" style={{padding:20,gap:10}}><div style={{display:'flex',justifyContent:'space-between'}}><span style={{fontWeight:700,fontSize:17}}>Everyone on this trip</span><TextLink to="book/party">Edit</TextLink></div>
    {P.map(p=><div key={p.key} style={{display:'flex',justifyContent:'space-between',fontSize:15}}><span>{p.name}</span><span style={{color:'var(--text-muted)'}}>{p.type}{p.waiver?' · waiver needed':''}</span></div>)}</div>
   <Callout>After you pay, each rider signs a waiver online. It takes about a minute per person.</Callout></div>
  <StepNav back={()=>go('book/admission')} next={()=>go('checkout')} label="Checkout"/></>}
function Booking({step}){const {trip:t,go}=useApp();const S=BK.stepsFor(t);
 const first=S.find((s,i)=>i<S.indexOf(step)&&!BK.valid(s,t));
 React.useEffect(()=>{if(!S.includes(step))go('book/'+(first||'dates'));else if(first)go('book/'+first)},[step,first]);
 const cur=S.includes(step)?(first||step):'dates';const V={dates:Dates,stay:Stay,site:Site,party:Party,admission:Admission,review:Review}[cur]||Dates;
 return <BkFrame step={cur} aside={cur==='review'?<NextSteps at="review"/>:undefined}><V/></BkFrame>}
window.Booking=Booking;
})();
