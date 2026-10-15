(()=>{
const {Button,Icon,Badge,Alert,QuantityStepper,Input,Photo,IconButton}=window.DS;
function Dates(){const {trip:t,update,go}=useApp();const ev=HP.eventFor(t.arrive,t.depart);const W=HP.weekends(HP.today,4);
 const set=(a,d)=>{const nt={...t,arrive:a,depart:d};update({arrive:a,depart:d,days:d?Math.max(HP.openDays(nt),1):0,unit:null})};
 return <><StepHead eyebrow="Step 1" title="When are you coming?" sub="Pick your arrival and departure. Tap one day twice for a day trip."/>
  <div className="hp-chips bk-quick"><span className="bk-quick__label">Quick pick:</span>{W.map(w=><Chip key={w.arrive} pressed={t.arrive===w.arrive&&t.depart===w.depart} onClick={()=>set(w.arrive,w.depart)}>{HP.range(w.arrive,w.depart)}{HP.eventFor(w.arrive,w.depart)?' · Event':''}</Chip>)}</div>
  <Calendar arrive={t.arrive} depart={t.depart} onPick={set}/>
  <div className="hp-stack hp-stack--3 bk-mt" aria-live="polite">
   {t.arrive&&!t.depart&&<Alert tone="info" title={'Arriving '+HP.fmtLong(t.arrive)}>Now pick your departure day.</Alert>}
   {ev&&<Alert tone="warning" title={'Your dates include '+ev.title}>It’s an event weekend, so cabins and RV sites go fast. <TextLink to={'events/'+ev.id}>See the event</TextLink></Alert>}
   {t.arrive&&t.depart&&HP.openDays(t)===0&&<Alert tone="closed" title="The park is closed for riding on these dates">You can still camp. Riding is open Friday to Sunday and on event days.</Alert>}
  </div>
  <StepNav next={()=>go('book/stay')} ok={BK.valid('dates',t)} hint="Pick arrival and departure"/></>}
function Opt({icon,title,badge,desc,price,pressed,disabled,onClick}){return <button type="button" className="opt" aria-pressed={pressed} disabled={disabled} onClick={onClick}>
 <span className="opt__icon"><Icon name={icon} size={24}/></span>
 <span className="opt__main"><span className="opt__head"><span className="opt__title">{title}</span>{badge}</span>{desc&&<span className="opt__desc">{desc}</span>}</span>
 {price&&<span className="opt__price">{price}</span>}</button>}
function Stay(){const {trip:t,update,go}=useApp();const av=HP.availability(t),n=HP.nights(t);const C=window.HP_DATA.categories.filter(c=>!c.phoneOnly);
 const pick=id=>update({stay:id,unit:t.stay===id?t.unit:null,addAdmission:true});
 return <><StepHead eyebrow="Step 2" title="Where are you staying?" sub={n?n+' night'+(n>1?'s':'')+', '+HP.range(t.arrive,t.depart)+'.':'Day trip on '+HP.fmtLong(t.arrive)+'.'}/>
  <div className="hp-stack hp-stack--3">
   {C.map(c=>{const a=av[c.id],sold=a.count===0;
    return <Opt key={c.id} icon={c.icon} title={c.name} desc={c.desc} price={HP.priceLabel(c.id)} pressed={t.stay===c.id} disabled={sold||n===0} onClick={()=>pick(c.id)}
     badge={sold?<Badge tone="danger">Sold out</Badge>:c.model==='unit'?<Badge tone={a.count<=2?'warning':'success'}>{a.count} available</Badge>:<Badge tone="success">Open</Badge>}/>})}
   <Opt icon="ticket" title="No overnight stay" desc="Just riding admission." pressed={t.stay==='none'} onClick={()=>update({stay:'none',unit:null,addAdmission:true})}/>
  </div>
  {n===0&&<div className="bk-mt"><Callout>Overnight options need at least one night. <TextLink to="book/dates">Change dates</TextLink></Callout></div>}
  <StepNav back={()=>go('book/dates')} next={()=>go(BK.needsSite(t)?'book/site':'book/party')} ok={BK.valid('stay',t)} hint="Choose a stay"/></>}
function Drawer({u,n,stay,onClose,onSelect}){const ref=React.useRef(null);
 React.useEffect(()=>{const k=e=>{if(e.key==='Escape')onClose()};document.addEventListener('keydown',k);const prev=document.activeElement;ref.current&&ref.current.focus();document.body.style.overflow='hidden';return()=>{document.removeEventListener('keydown',k);document.body.style.overflow='';prev&&prev.focus&&prev.focus()}},[]);
 const P=window.HP_DATA.park;
 return <><div className="drawer-scrim" onClick={onClose}/><div className="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-t" ref={ref} tabIndex={-1}>
  <div className="drawer__head"><h2 id="drawer-t" className="hp-display hp-h3">{u.name}</h2><IconButton icon="x" label="Close" variant="ghost" onClick={onClose}/></div>
  <div className="drawer__body">
   <Photo src={u.img?hpAsset(u.img):undefined} caption={u.img?undefined:u.name+' · photo'} alt={u.name} ratio="16/10"/>
   {u.interiors&&<div className="drawer__thumbs">{u.interiors.slice(0,4).map(s=><Photo key={s} src={hpAsset(s)} alt={u.name+' interior'} ratio="4/3"/>)}</div>}
   <p className="hp-body-l">{u.desc}</p>
   <div className="hp-kv-list">{u.sleepsLabel&&<Row label="Sleeps" value={u.sleepsLabel}/>}{u.beds&&<Row label="Beds" value={u.beds}/>}{u.bath&&<Row label="Bathroom" value={u.bath}/>}{u.len&&<Row label="Max length" value={u.len+' ft'+(u.layout?' · '+u.layout:'')}/>}<Row label={stay==='cabin'?'Climate':'Hookups'} value={stay==='cabin'?'A/C and heat':'50A electric, water'}/><Row label="Parking" value="Truck and trailer"/><Row label="Check-in / out" value={P.checkin+' / '+P.checkout}/></div>
  </div>
  <div className="drawer__foot"><div><div className="hp-display drawer__total">{HP.money(u.price*n)}</div><div className="hp-caption hp-muted">{HP.money(u.price)} × {n} night{n>1?'s':''}</div></div><Button size="lg" onClick={()=>onSelect(u.id)}>Select {u.name}</Button></div>
 </div></>}
function Site(){const {trip:t,update,go}=useApp();const c=HP.cat(t.stay);const av=HP.availability(t)[t.stay];const U=window.HP_DATA.units.filter(u=>u.cat===t.stay);const [hl,setHl]=React.useState(null);const [view,setView]=React.useState(null);const [whole,setWhole]=React.useState(false);const n=HP.nights(t);
 const free=id=>av.free.includes(id);const sorted=[...U].sort((a,b)=>free(b.id)-free(a.id));
 const state=u=>!free(u.id)?'taken':t.unit===u.id?'sel':hl===u.id?'hl':'free';
 const select=id=>{update({unit:id});setView(null)};
 return <><StepHead eyebrow="Step 3" title={'Pick your '+(t.stay==='cabin'?'cabin':'site')+'.'} sub={av.count+' of '+U.length+' '+c.plural.toLowerCase()+' open for '+HP.range(t.arrive,t.depart)+'. Pick from the list or tap one on the map.'}/>
  <div className="bk-site">
   <div className="bk-units">{sorted.map(u=>{const f=free(u.id),sel=t.unit===u.id;
    return <div key={u.id} className="unit" data-hl={hl===u.id?1:0} data-sel={sel?1:0} data-taken={f?0:1} onMouseEnter={()=>setHl(u.id)} onMouseLeave={()=>setHl(null)}>
     <div className="unit__media"><Photo src={u.img?hpAsset(u.img):undefined} caption={u.img?undefined:u.name} alt={u.name} ratio="auto" className="hp-photo--fill"/></div>
     <div className="unit__body">
      <div className="unit__head"><span className="hp-title">{u.name}</span><span className="unit__price">{HP.money(u.price)}<span className="unit__per"> / night</span></span></div>
      <div className="hp-small hp-muted">{u.sleepsLabel?'Sleeps '+u.sleepsLabel:u.len?'Up to '+u.len+' ft'+(u.layout?' · '+u.layout:''):''}{u.beds?' · '+u.beds:''}</div>
      <div className="unit__actions">{f?<><Button size="sm" variant={sel?'primary':'secondary'} icon={sel?'check':undefined} aria-pressed={sel} onClick={()=>select(u.id)}>{sel?'Selected':'Select'}</Button><Button size="sm" variant="ghost" onClick={()=>setView(u)}>Details</Button></>:<Badge tone="neutral">Booked</Badge>}</div></div></div>})}</div>
   <div className="bk-map"><div className="hp-card">
    <SiteMap units={U} view={whole?'all':t.stay} state={state} onHover={setHl} onPick={u=>free(u.id)&&setView(u)} label={u=>u.name+' · '+HP.money(u.price)}/>
    <div className="map-legend"><span className="map-legend__i"><span className="map-sw map-sw--free"/>Available</span><span className="map-legend__i"><span className="map-sw map-sw--taken"/>Booked</span><span className="map-legend__i"><span className="map-sw map-sw--sel"/>Your pick</span>
     <span className="map-legend__end"><MapCredit/><Button size="sm" variant="ghost" icon={whole?'map-pin':'map'} onClick={()=>setWhole(w=>!w)}>{whole?'Zoom in':'Whole park'}</Button></span></div>
   </div></div></div>
  <StepNav back={()=>go('book/stay')} next={()=>go('book/party')} ok={BK.valid('site',t)} hint="Select a site"/>
  {view&&<Drawer u={view} n={n} stay={t.stay} onClose={()=>setView(null)} onSelect={select}/>}</>}
function Party(){const {trip:t,update,go}=useApp();const u=HP.unit(t.unit);const over=u&&HP.people(t)>u.sleeps;
 const setN=(k,key,v)=>update(s=>{const names={...s.names};const arr=[...(names[key]||[])];while(arr.length<v)arr.push('');names[key]=arr;return {[k]:v,names}});
 const setName=(key,i,v)=>update(s=>{const names={...s.names};const arr=[...(names[key]||[])];arr[i]=v;names[key]=arr;return {names}});
 const group=(key,count,label)=>Array.from({length:count},(_,i)=><Input key={key+i} label={label+' '+(i+1)} placeholder="First and last name" autoComplete="off" value={(t.names[key]||[])[i]||''} onChange={e=>setName(key,i,e.target.value)}/>);
 const back=BK.needsSite(t)?'book/site':'book/stay';
 return <><StepHead eyebrow={'Step '+(BK.stepsFor(t).indexOf('party')+1)} title="Who’s coming?" sub="We need a name for everyone so the gate can check you in and waivers go to the right people."/>
  <div className="hp-card bk-party">
   {[['adults','a','Adult riders','Ages 13 and up',1],['kids','k','Child riders','12 and under · ride free',0],['guests','g','Non-riding guests','Staying, not riding',0]].map(([k,key,l,d,min])=><div key={k} className="bk-party__row"><QuantityStepper label={l} description={d} value={t[k]} min={min} max={12} onChange={v=>setN(k,key,v)}/></div>)}</div>
  {over&&<div className="bk-mt"><Alert tone="warning" title={u.name+' sleeps '+u.sleeps}>You have {HP.people(t)} people. Pick a bigger cabin or add a campsite in a second booking.</Alert></div>}
  <h2 className="hp-card__title bk-subhead">Names</h2>
  <div className="hp-grid hp-grid--2 hp-grid--form">{group('a',t.adults,'Adult rider')}{group('k',t.kids,'Child rider')}{group('g',t.guests,'Guest')}</div>
  <StepNav back={()=>go(back)} next={()=>go('book/admission')} ok={BK.valid('party',t)} hint={over?'Too many people for this cabin':'Add a name for everyone'}/></>}
function Admission(){const {trip:t,update,go}=useApp();const max=BK.maxDays(t);const none=t.stay==='none';
 React.useEffect(()=>{if(!t.days||t.days>max)update({days:max})},[]);
 const days=Math.min(t.days||max,max),want=none||t.addAdmission!==false;const P=HP.tripRates(t);const pl=(n,w)=>n+' '+w+(n>1?'s':'');
 return <><StepHead eyebrow={'Step '+(BK.stepsFor(t).indexOf('admission')+1)} title={none?'Riding admission.':'Add riding admission?'} sub={none?'Pay now and go straight through the gate.':'Your stay doesn’t include riding. Add it now and skip the line at the gate.'}/>
  {!none&&<div className="hp-stack hp-stack--3 bk-block">
   <Opt icon="ticket" title="Yes, add riding admission" desc="For every adult rider in your party." price={HP.money(t.adults*HP.admissionPer(days,P))} pressed={want} onClick={()=>update({addAdmission:true})}/>
   <Opt icon="clock" title="No, we’ll pay at the gate" desc="Or we’re not riding this trip." pressed={!want} onClick={()=>update({addAdmission:false})}/></div>}
  {want&&<div className="hp-card hp-card--padded">
   <QuantityStepper label="Riding days" description={pl(max,'open riding day')+' on your dates'} value={days} min={1} max={max} onChange={v=>update({days:v})}/>
   <div className="hp-kv-sum">
    {P.mode==='free'?<Row label={pl(t.adults,'adult')+' · group ride, no charge'} value={HP.money(0)}/>:P.mode==='fixed'?<Row label={pl(t.adults,'adult')+' × event fee '+HP.money(P.fixed)} value={HP.money(t.adults*P.fixed)}/>:<Row label={pl(t.adults,'adult')+' × '+pl(Math.min(days,2),'day')+' × '+HP.money(P.day)} value={HP.money(t.adults*P.day*Math.min(days,2))}/>}
    {(P.mode==='standard'||P.mode==='daily')&&days>2&&<Row label={pl(t.adults,'adult')+' × '+pl(days-2,'more day')+' × '+HP.money(P.dayLater)} value={HP.money(t.adults*P.dayLater*(days-2))}/>}
    {t.kids>0&&<Row muted label={pl(t.kids,'child rider')+' ('+P.freeAge+' and under)'} value="Free"/>}
    <Row total label="Admission total" value={HP.money(HP.admission({...t,days}))}/></div>
   {(P.mode==='standard'||P.mode==='daily')&&days>2&&<Callout>Multi-day savings applied: {HP.money(P.dayLater)} a day from day 3.</Callout>}</div>}
  <StepNav back={()=>go('book/party')} next={()=>go('book/review')} ok={BK.valid('admission',t)}/></>}
function Review(){const {trip:t,go}=useApp();const P=HP.participants(t);
 return <><StepHead eyebrow="Last step" title="Your Hawk Pride trip." sub="Check everything over. You can edit any part before you pay."/>
  <div className="hp-stack hp-stack--3">
   <TripSummary/>
   <YourSpot/>
   <div className="hp-card hp-card--padded"><div className="hp-spread"><span className="hp-title">Everyone on this trip</span><TextLink to="book/party">Edit</TextLink></div>
    <div className="hp-kv-list">{P.map(p=><div key={p.key} className="hp-kv"><span>{p.name}</span><span className="hp-kv__v hp-muted">{p.type}{p.waiver?' · waiver needed':''}</span></div>)}</div></div>
   <Callout>After you pay, each rider signs a waiver online. It takes about a minute per person.</Callout></div>
  <StepNav back={()=>go('book/admission')} next={()=>go('checkout')} label="Checkout"/></>}
function Booking({step}){const {trip:t,go}=useApp();const S=BK.stepsFor(t);
 const first=S.find((s,i)=>i<S.indexOf(step)&&!BK.valid(s,t));
 React.useEffect(()=>{if(!S.includes(step))go('book/'+(first||'dates'));else if(first)go('book/'+first)},[step,first]);
 const cur=S.includes(step)?(first||step):'dates';const V={dates:Dates,stay:Stay,site:Site,party:Party,admission:Admission,review:Review}[cur]||Dates;
 return <BkFrame step={cur} aside={cur==='review'?<NextSteps at="review"/>:undefined}><V/></BkFrame>}
window.Booking=Booking;
})();
