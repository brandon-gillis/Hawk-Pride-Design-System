(()=>{
const {Button,Icon,Badge,Alert,Input,Checkbox,Dialog}=window.DS;
function NextSteps({at}){const S=[['review','Review your trip'],['pay','Pay securely'],['waivers','Sign waivers'],['pass','Get your gate pass']];const i=S.findIndex(s=>s[0]===at);
 return <div className="hp-card hp-card--padded hp-card--flat"><div className="hp-eyebrow hp-eyebrow--accent">How it works</div>
  <ol className="hp-stack hp-stack--3 howto">{S.map(([k,l],j)=><li key={k} className="howto__row" data-s={j===i?'cur':j<i?'past':'next'} aria-current={j===i?'step':undefined}><span className="howto__n">{j<i?<Icon name="check" size={14}/>:j+1}</span>{l}</li>)}</ol></div>}
function Aside({at}){return <div className="hp-stack hp-stack--3"><TripSummary editable={false}/><NextSteps at={at}/></div>}
function Checkout(){const {trip:t,update,go}=useApp();const c=t.contact||{};const [pm,setPm]=React.useState('card');const [card,setCard]=React.useState({n:'4242 4242 4242 4242',e:'08 / 28',v:'123',z:'35674'});const [agree,setAgree]=React.useState(false);const [busy,setBusy]=React.useState(false);const [tried,setTried]=React.useState(false);const [decline,setDecline]=React.useState(false);const [failed,setFailed]=React.useState(false);
 React.useEffect(()=>{if(!t.arrive||!t.stay)go('book/dates');else if(t.paid)go('confirmation')},[]);
 const setC=(k,v)=>update(s=>({contact:{...s.contact,[k]:v}}));
 const err={first:!c.first&&'Required',last:!c.last&&'Required',email:!/^\S+@\S+\.\S+$/.test(c.email||'')&&'Enter a valid email',phone:(c.phone||'').replace(/\D/g,'').length<10&&'Enter a 10-digit phone number'};
 const ok=!Object.values(err).some(Boolean)&&agree;
 const pay=()=>{setTried(true);if(!ok)return;setBusy(true);setFailed(false);if(decline){setTimeout(()=>{setBusy(false);setFailed(true);setDecline(false)},1200);return}setTimeout(()=>{const code='HP-'+String(Math.floor(10000+Math.random()*90000));update({paid:true,code,paidAt:Date.now()});go('waivers')},1400)};
 const e=k=>tried?err[k]||undefined:undefined;
 return <BkFrame done="Checkout" aside={<Aside at="pay"/>}>
  <StepHead eyebrow="Checkout" title="Almost there." sub="We’ll send your confirmation and waiver links to this email and phone."/>
  {t.unit&&<div className="bk-block"><YourSpot title="You’re booking"/></div>}
  <h2 className="hp-card__title bk-subhead bk-subhead--first">Contact</h2>
  <div className="hp-grid hp-grid--2 hp-grid--form"><Input label="First name" autoComplete="given-name" value={c.first||''} error={e('first')} onChange={x=>setC('first',x.target.value)}/><Input label="Last name" autoComplete="family-name" value={c.last||''} error={e('last')} onChange={x=>setC('last',x.target.value)}/>
   <Input label="Email" type="email" inputMode="email" autoComplete="email" icon="mail" placeholder="you@example.com" value={c.email||''} error={e('email')} onChange={x=>setC('email',x.target.value)}/><Input label="Mobile phone" type="tel" inputMode="tel" autoComplete="tel" icon="phone" placeholder="(256) 555-0100" value={c.phone||''} error={e('phone')} hint="For your gate pass by text" onChange={x=>setC('phone',x.target.value)}/></div>
  <h2 className="hp-card__title bk-subhead">Payment</h2>
  {failed&&<div className="bk-block"><Alert tone="danger" title="Payment didn’t go through">Your card was declined and nothing was charged. Your trip, site and riders are still saved. Try again or use another payment method.</Alert></div>}
  <div className="paym" role="group" aria-label="Payment method">{[['card','Card','credit-card'],['apple','Apple Pay','phone'],['google','Google Pay','phone']].map(([id,l,i])=><button key={id} type="button" className="opt opt--pay" aria-pressed={pm===id} onClick={()=>setPm(id)}><Icon name={i} size={20}/><span className="hp-strong">{l}</span></button>)}</div>
  {pm==='card'?<div className="hp-card hp-card--padded"><Input label="Card number" inputMode="numeric" autoComplete="cc-number" icon="credit-card" value={card.n} onChange={x=>setCard({...card,n:x.target.value})}/>
   <div className="pay-row"><Input label="Expiry" autoComplete="cc-exp" value={card.e} onChange={x=>setCard({...card,e:x.target.value})}/><Input label="CVC" inputMode="numeric" autoComplete="cc-csc" value={card.v} onChange={x=>setCard({...card,v:x.target.value})}/><Input label="ZIP" inputMode="numeric" autoComplete="postal-code" value={card.z} onChange={x=>setCard({...card,z:x.target.value})}/></div></div>
   :<div className="hp-card hp-card--padded hp-card--flat"><Callout>You’ll confirm with {pm==='apple'?'Apple Pay':'Google Pay'} when you tap Pay.</Callout></div>}
  <div className="hp-stack hp-stack--3 bk-agree">
   <Checkbox label={<span>I’ve read the <TextLink to="rules">park rules</TextLink>.</span>} checked={agree} onChange={x=>setAgree(x.target.checked)}/>
   {tried&&!agree&&<span className="bk-error" role="alert">Please agree to the park rules to continue.</span>}
   <div className="bk-fine"><Icon name="lock" size={14}/>Demo only. No card is charged and nothing is sent.</div>
   <Checkbox label="Demo: decline the next payment" checked={decline} onChange={x=>setDecline(x.target.checked)}/></div>
  <StepNav back={()=>go('book/review')} backLabel="Review" next={pay} busy={busy} icon={busy?undefined:'lock'} label={busy?'Processing…':'Pay '+HP.money(HP.total(t))}/>
 </BkFrame>}
function Waivers(){const {trip:t,update,go}=useApp();const W=window.HP_DATA.park.waiver;const P=HP.participants(t).filter(p=>p.waiver);const done=P.filter(p=>t.waivers[p.key]).length;const [copied,setCopied]=React.useState(false);
 React.useEffect(()=>{if(!t.paid)go('checkout')},[]);
 const open=p=>{window.open(W,'_blank','noopener');update(s=>({waivers:{...s.waivers,[p.key]:true}}))};
 const copy=()=>{navigator.clipboard&&navigator.clipboard.writeText(W);setCopied(true)};
 return <BkFrame done="Paid" aside={<Aside at="waivers"/>}>
  <div className="bk-block"><Alert tone="success" title={'Payment received · '+(t.code||'')}>Your trip is booked. One more step.</Alert></div>
  <StepHead eyebrow="Waivers" title="Almost ready to ride." sub="Every rider signs a waiver through WaiverForever. Parents sign for kids. Do it now and you’ll go straight through the gate."/>
  <div className="hp-stack hp-stack--3">{P.map(p=>{const s=t.waivers[p.key];return <div key={p.key} className="hp-card person">
   <Icon name={s?'badge-check':'file-text'} size={24} className={s?'person__icon--done':undefined}/><div className="person__main"><div className="hp-title">{p.name}</div><div className="hp-small hp-muted">{p.type}{p.minor?' · guardian signs':''}</div></div>
   <div className="person__actions">{s?<><Badge tone="success" icon="check">Opened</Badge><Button size="sm" variant="ghost" iconRight="external-link" onClick={()=>open(p)}>Open again</Button></>:<Button size="sm" iconRight="external-link" onClick={()=>open(p)}>Sign waiver</Button>}</div></div>})}</div>
  <div className="hp-cluster bk-mt"><Callout>Riders not with you? Send them the link.</Callout><Button size="sm" variant="outline" icon={copied?'check':'link'} onClick={copy}>{copied?'Link copied':'Copy waiver link'}</Button></div>
  <p className="bk-count" aria-live="polite">{done} of {P.length} opened. Non-riding guests don’t need a waiver.</p>
  <StepNav back={()=>go('confirmation')} backLabel="Sign later" next={()=>go('confirmation')} label="Get my gate pass"/>
 </BkFrame>}
function QR({code}){const N=25;let h=0;for(const ch of code)h=(h*31+ch.charCodeAt(0))>>>0;const rnd=()=>{h^=h<<13;h>>>=0;h^=h>>17;h^=h<<5;h>>>=0;return h/4294967296};
 const finder=(r,c)=>{for(const [R,C] of [[0,0],[0,N-7],[N-7,0]]){const y=r-R,x=c-C;if(y>=0&&y<7&&x>=0&&x<7)return (y===0||y===6||x===0||x===6||(y>=2&&y<=4&&x>=2&&x<=4))?1:0;if(y>=-1&&y<=7&&x>=-1&&x<=7)return 0}return null};
 const cells=[];for(let r=0;r<N;r++)for(let c=0;c<N;c++){const f=finder(r,c);cells.push(<i key={r*N+c} data-on={(f===null?(rnd()>.52?1:0):f)}/>)}
 return <div className="qr" role="img" aria-label={'Gate pass code '+code}>{cells}</div>}
function Confirmation(){const {trip:t,go,book}=useApp();const P=window.HP_DATA.park;const [look,setLook]=React.useState('');
 const [miss,setMiss]=React.useState(false);
 if(!t.paid)return <Section eyebrow="Find my trip" title="Look up a booking." intro="Enter the confirmation code from your email. (Demo: book a trip first to see a confirmation.)">
  <form className="hp-stack hp-stack--3" onSubmit={e=>{e.preventDefault();setMiss(true)}} noValidate>
   <div className="lookup"><div className="lookup__field"><Input label="Confirmation code" placeholder="HP-28437" autoCapitalize="characters" value={look} error={miss?'We couldn’t find that code. Check your email or call us.':undefined} onChange={e=>{setLook(e.target.value);setMiss(false)}}/></div><Button type="submit" variant="secondary" icon="search">Find</Button></div>
   <p className="hp-muted">No booking yet? <TextLink onClick={()=>book()}>Book a trip</TextLink></p></form></Section>;
 const c=HP.cat(t.stay),u=HP.unit(t.unit),ev=HP.eventFor(t.arrive,t.depart),W=HP.participants(t).filter(p=>p.waiver),signed=W.filter(p=>t.waivers[p.key]).length,left=W.length-signed;
 return <>
  <div className="hp-section--dark hp-on-dark"><div className="hp-container conf">
   <div><Badge tone="gold" icon="check">Booked</Badge>
    <h1 className="hp-display hp-display-xl">You’re going to Hawk Pride.</h1>
    <p className="hp-hero__lede">{HP.fmtLong(t.arrive)}{t.depart!==t.arrive?' to '+HP.fmtLong(t.depart):''}. We sent the details to {t.contact.email}.</p>
    <div className="hp-actions"><Button icon="calendar-check">Add to calendar</Button><Button href={'https://maps.google.com/?q='+encodeURIComponent(P.address)} target="_blank" rel="noreferrer" variant="outline" icon="navigation">Directions</Button></div></div>
   <div className="pass"><QR code={t.code}/><div className="hp-eyebrow hp-eyebrow--muted">Gate pass</div><div className="hp-display pass__code">{t.code}</div><div className="pass__note">Show this at the gate</div></div>
  </div></div>
  <Section>
   <div className="hp-split">
    <div className="hp-stack">
     {left>0?<Alert tone="warning" title={left+' waiver'+(left>1?'s':'')+' still to sign'}>Everyone who rides needs one before the gate. <TextLink href={P.waiver} target="_blank" rel="noopener">Sign now</TextLink></Alert>:<Alert tone="success" title="All waivers signed">You’re set for express check-in.</Alert>}
     <div className="hp-card hp-card--padded"><div className="hp-eyebrow hp-eyebrow--accent">Reservation {t.code}</div>
      <div className="hp-kv-list"><Row label="Dates" value={HP.range(t.arrive,t.depart)}/>{ev&&<Row label="Event" value={ev.title}/>}<Row label="Stay" value={c?c.name+(u?' · '+u.name:''):'No overnight stay'}/>{HP.wantsAdmission(t)&&t.days>0&&<Row label="Riding admission" value={t.adults+' adult'+(t.adults>1?'s':'')+' × '+t.days+' day'+(t.days>1?'s':'')}/>}</div>
      <div className="conf-pay"><span className="hp-title">Payment</span><span className="hp-cluster"><Badge tone="success" icon="check">Paid</Badge><strong>{HP.money(HP.total(t))}</strong></span></div></div>
     <div className="hp-card hp-card--padded"><div className="hp-eyebrow hp-eyebrow--accent">Who’s coming</div>
      <div>{HP.participants(t).map(p=><div key={p.key} className="who"><div><div className="hp-strong">{p.name}</div><div className="hp-caption hp-muted">{p.type}</div></div>
       <span className="who__adm">{p.type==='Adult rider'?(HP.wantsAdmission(t)?'Admission ✓':'Pay at gate'):p.type==='Child rider'?'Rides free':'Not riding'}</span>
       {p.waiver?(t.waivers[p.key]?<Badge tone="success" icon="check">Waiver</Badge>:<Badge tone="warning">Waiver required</Badge>):<Badge tone="neutral">No waiver needed</Badge>}</div>)}</div></div>
    </div>
    <div className="hp-stack hp-stack--5">{t.unit&&<YourSpot title="Find your spot"/>}<h2 className="hp-display hp-h2">Before you come</h2>
     {[['clock','Check-in from '+P.checkin,'Gates open at 8 AM for riders. Cabins and sites are ready from '+P.checkin+'.'],['map-pin',P.address,'Follow the signs from Hester Porter Road.'],['shield-check','Bring your gear','Helmets for ATVs and open side-by-sides. Flags on event weekends.'],['phone','Questions? '+P.phone,'We pick up during park hours.']].map(([i,tl,d])=><Feature key={tl} icon={i} title={tl}>{d}</Feature>)}
     <div className="hp-cluster"><Button variant="outline" onClick={()=>go('rules')}>Park rules</Button><Button variant="ghost" onClick={()=>go('trails')}>Trail map</Button><Button variant="ghost" icon="camera" onClick={()=>go('gate')}>See the gate view</Button></div></div>
   </div></Section></>}
Object.assign(window,{Checkout,Waivers,Confirmation,NextSteps});
})();
