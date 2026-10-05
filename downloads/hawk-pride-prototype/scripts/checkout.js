(()=>{
const {Button,Icon,Badge,Alert,Input,Checkbox,Dialog}=window.DS;
function NextSteps({at}){const S=[['review','Review your trip'],['pay','Pay securely'],['waivers','Sign waivers'],['pass','Get your gate pass']];const i=S.findIndex(s=>s[0]===at);
 return <div className="hp-card" style={{padding:22,gap:14,background:'var(--bg-sunken)',border:0}}><div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>How it works</div>
  {S.map(([k,l],j)=><div key={k} style={{display:'flex',gap:12,alignItems:'center',fontWeight:j===i?700:400,color:j<i?'var(--text-muted)':'inherit'}}><span style={{width:26,height:26,borderRadius:'50%',display:'grid',placeItems:'center',fontSize:13,fontWeight:700,background:j===i?'var(--black-950)':j<i?'var(--stone-200)':'var(--surface-card)',color:j===i?'var(--gold-400)':'inherit',border:j>i?'1.5px solid var(--border-default)':0}}>{j<i?<Icon name="check" size={14}/>:j+1}</span>{l}</div>)}</div>}
function Checkout(){const {trip:t,update,go}=useApp();const c=t.contact||{};const [pm,setPm]=React.useState('card');const [card,setCard]=React.useState({n:'4242 4242 4242 4242',e:'08 / 28',v:'123',z:'35674'});const [agree,setAgree]=React.useState(false);const [busy,setBusy]=React.useState(false);const [tried,setTried]=React.useState(false);const [decline,setDecline]=React.useState(false);const [failed,setFailed]=React.useState(false);
 React.useEffect(()=>{if(!t.arrive||!t.stay)go('book/dates');else if(t.paid)go('confirmation')},[]);
 const setC=(k,v)=>update(s=>({contact:{...s.contact,[k]:v}}));
 const err={first:!c.first&&'Required',last:!c.last&&'Required',email:!/^\S+@\S+\.\S+$/.test(c.email||'')&&'Enter a valid email',phone:(c.phone||'').replace(/\D/g,'').length<10&&'Enter a 10-digit phone number'};
 const ok=!Object.values(err).some(Boolean)&&agree;
 const pay=()=>{setTried(true);if(!ok)return;setBusy(true);setFailed(false);if(decline){setTimeout(()=>{setBusy(false);setFailed(true);setDecline(false)},1200);return}setTimeout(()=>{const code='HP-'+String(Math.floor(10000+Math.random()*90000));update({paid:true,code,paidAt:Date.now()});go('waivers')},1400)};
 const e=k=>tried?err[k]||undefined:undefined;
 return <BkFrame done="Checkout" aside={<div style={{display:'flex',flexDirection:'column',gap:14}}><TripSummary editable={false}/><NextSteps at="pay"/></div>}>
  <StepHead eyebrow="Checkout" title="Almost there." sub="We’ll send your confirmation and waiver links to this email and phone."/>
  <h2 className="hp-card__title" style={{fontSize:22,margin:'0 0 12px'}}>Contact</h2>
  <div className="g2" style={{gap:14}}><Input label="First name" value={c.first||''} error={e('first')} onChange={x=>setC('first',x.target.value)}/><Input label="Last name" value={c.last||''} error={e('last')} onChange={x=>setC('last',x.target.value)}/>
   <Input label="Email" type="email" icon="mail" placeholder="you@example.com" value={c.email||''} error={e('email')} onChange={x=>setC('email',x.target.value)}/><Input label="Mobile phone" type="tel" icon="phone" placeholder="(256) 555-0100" value={c.phone||''} error={e('phone')} hint="For your gate pass by text" onChange={x=>setC('phone',x.target.value)}/></div>
  <h2 className="hp-card__title" style={{fontSize:22,margin:'32px 0 12px'}}>Payment</h2>
  {failed&&<div style={{marginBottom:14}}><Alert tone="danger" title="Payment didn’t go through">Your card was declined and nothing was charged. Your trip, site and riders are still saved. Try again or use another payment method.</Alert></div>}
  <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:14}}>{[['card','Card','credit-card'],['apple','Apple Pay','phone'],['google','Google Pay','phone']].map(([id,l,i])=><button key={id} className="opt" aria-pressed={pm===id} onClick={()=>setPm(id)} style={{width:'auto',flex:'1 1 150px',padding:'14px 16px',justifyContent:'center'}}><Icon name={i} size={20}/><span style={{fontWeight:700}}>{l}</span></button>)}</div>
  {pm==='card'?<div className="hp-card" style={{padding:20,gap:14}}><Input label="Card number" icon="credit-card" value={card.n} onChange={x=>setCard({...card,n:x.target.value})}/>
   <div className="g3" style={{gap:14}}><Input label="Expiry" value={card.e} onChange={x=>setCard({...card,e:x.target.value})}/><Input label="CVC" value={card.v} onChange={x=>setCard({...card,v:x.target.value})}/><Input label="ZIP" value={card.z} onChange={x=>setCard({...card,z:x.target.value})}/></div></div>
   :<div className="hp-card" style={{padding:20,background:'var(--bg-sunken)',border:0}}><Callout>You’ll confirm with {pm==='apple'?'Apple Pay':'Google Pay'} when you tap Pay.</Callout></div>}
  <div style={{margin:'20px 0 0',display:'flex',flexDirection:'column',gap:10}}>
   <Checkbox label={<span>I’ve read the <TextLink to="rules">park rules</TextLink> and the refund policy.</span>} checked={agree} onChange={x=>setAgree(x.target.checked)}/>
   {tried&&!agree&&<span style={{color:'var(--danger-600, #b42318)',fontSize:14}}>Please agree to the park rules to continue.</span>}
   <div style={{display:'flex',gap:8,alignItems:'center',fontSize:13,color:'var(--text-muted)'}}><Icon name="lock" size={14}/>Demo only. No card is charged and nothing is sent.</div>
   <label style={{display:'flex',gap:8,alignItems:'center',fontSize:13,color:'var(--text-muted)',cursor:'pointer'}}><input type="checkbox" checked={decline} onChange={x=>setDecline(x.target.checked)}/>Demo: decline the next payment</label></div>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,marginTop:32,paddingTop:24,borderTop:'1px solid var(--border-subtle)',flexWrap:'wrap'}}>
   <Button variant="ghost" icon="arrow-left" onClick={()=>go('book/review')}>Back to review</Button>
   <Button size="lg" icon={busy?undefined:'lock'} disabled={busy} onClick={pay}>{busy?'Processing…':'Pay '+HP.money(HP.total(t))}</Button></div>
 </BkFrame>}
function WaiverDialog({name,minor,onClose,onSigned}){const [sig,setSig]=React.useState(minor?'':(name||''));const [g,setG]=React.useState('');const [a,setA]=React.useState(false);const [b,setB]=React.useState(false);const ok=sig.trim().length>2&&a&&b&&(!minor||g.trim().length>2);
 return <Dialog open title={name?'Waiver · '+name:'Release of liability'} onClose={onClose} footer={<><Button variant="ghost" onClick={onClose}>Cancel</Button><Button disabled={!ok} icon="file-text" onClick={()=>{onSigned(sig);onClose()}}>Sign waiver</Button></>}>
  <div style={{display:'flex',flexDirection:'column',gap:14}}>
   <div style={{maxHeight:180,overflowY:'auto',padding:14,background:'var(--bg-sunken)',borderRadius:4,fontSize:14,lineHeight:1.55}}><strong>Sample waiver text.</strong> Off-road riding carries real risk, including serious injury. I agree to follow the park rules, wear required safety gear, ride within my ability and stay on marked trails. I release Hawk Pride from liability for injury or damage, except where the law does not allow it. The owner’s legal waiver text goes here.</div>
   <Checkbox label="I understand off-road riding is dangerous." checked={a} onChange={e=>setA(e.target.checked)}/>
   <Checkbox label="I agree to the park rules and this release." checked={b} onChange={e=>setB(e.target.checked)}/>
   {minor&&<Input label="Parent or guardian name" hint="Required for riders under 18" value={g} onChange={e=>setG(e.target.value)}/>}
   <Input label={minor?'Guardian signature (type full name)':'Signature (type full name)'} icon="file-text" value={sig} onChange={e=>setSig(e.target.value)}/>
  </div></Dialog>}
function Waivers(){const {trip:t,update,go}=useApp();const [open,setOpen]=React.useState(null);const P=HP.participants(t).filter(p=>p.waiver);const done=P.filter(p=>t.waivers[p.key]).length;
 React.useEffect(()=>{if(!t.paid)go('checkout')},[]);
 return <BkFrame done="Paid" aside={<div style={{display:'flex',flexDirection:'column',gap:14}}><TripSummary editable={false}/><NextSteps at="waivers"/></div>}>
  <Alert tone="success" title={'Payment received · '+(t.code||'')}>Your trip is booked. One more step.</Alert>
  <div style={{height:24}}/>
  <StepHead eyebrow="Waivers" title="Almost ready to ride." sub="Every rider needs a signed waiver. Parents sign for kids. Do it now and you’ll go straight through the gate."/>
  <div style={{display:'flex',flexDirection:'column',gap:10}}>{P.map(p=>{const s=t.waivers[p.key];return <div key={p.key} className="hp-card" style={{padding:'14px 18px',flexDirection:'row',alignItems:'center',gap:14}}>
   <Icon name={s?'badge-check':'file-text'} size={24} style={{color:s?'var(--success-600, #2f7d32)':'inherit'}}/><div style={{flex:1}}><div style={{fontWeight:700,fontSize:17}}>{p.name}</div><div style={{fontSize:14,color:'var(--text-muted)'}}>{p.type}{p.minor?' · guardian signs':''}</div></div>
   {s?<Badge tone="success" icon="check">Complete</Badge>:<><Badge tone="warning">Required</Badge><Button size="sm" onClick={()=>setOpen(p)}>Complete waiver</Button></>}</div>})}</div>
  <div style={{marginTop:14,fontSize:15,color:'var(--text-muted)'}}>{done} of {P.length} signed. Non-riding guests don’t need a waiver.</div>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,marginTop:32,paddingTop:24,borderTop:'1px solid var(--border-subtle)',flexWrap:'wrap'}}>
   <Button variant="ghost" onClick={()=>go('confirmation')}>I’ll sign later</Button>
   <Button size="lg" iconRight="arrow-right" disabled={done<P.length} onClick={()=>go('confirmation')}>Get my gate pass</Button></div>
  {open&&<WaiverDialog name={open.name} minor={open.minor} onClose={()=>setOpen(null)} onSigned={()=>update(s=>({waivers:{...s.waivers,[open.key]:true}}))}/>}
 </BkFrame>}
function QR({code}){const N=25;let h=0;for(const ch of code)h=(h*31+ch.charCodeAt(0))>>>0;const rnd=()=>{h^=h<<13;h>>>=0;h^=h>>17;h^=h<<5;h>>>=0;return h/4294967296};
 const finder=(r,c)=>{for(const [R,C] of [[0,0],[0,N-7],[N-7,0]]){const y=r-R,x=c-C;if(y>=0&&y<7&&x>=0&&x<7)return (y===0||y===6||x===0||x===6||(y>=2&&y<=4&&x>=2&&x<=4))?1:0;if(y>=-1&&y<=7&&x>=-1&&x<=7)return 0}return null};
 const cells=[];for(let r=0;r<N;r++)for(let c=0;c<N;c++){const f=finder(r,c);cells.push(<i key={r*N+c} data-on={(f===null?(rnd()>.52?1:0):f)}/>)}
 return <div className="qr" role="img" aria-label={'Gate pass code '+code}>{cells}</div>}
function Confirmation(){const {trip:t,go,book}=useApp();const P=window.HP_DATA.park;const [look,setLook]=React.useState('');
 if(!t.paid)return <Section eyebrow="Find my trip" title="Look up a booking." intro="Enter the confirmation code from your email. (Demo: book a trip first to see a confirmation.)">
  <div style={{display:'flex',gap:12,alignItems:'flex-end',maxWidth:520,flexWrap:'wrap'}}><div style={{flex:1,minWidth:220}}><Input label="Confirmation code" placeholder="HP-28437" value={look} onChange={e=>setLook(e.target.value)}/></div><Button onClick={()=>book()}>Book a trip</Button></div></Section>;
 const c=HP.cat(t.stay),u=HP.unit(t.unit),ev=HP.eventFor(t.arrive,t.depart),W=HP.participants(t).filter(p=>p.waiver),signed=W.filter(p=>t.waivers[p.key]).length;
 return <>
  <div className="hp-on-dark" style={{background:'var(--black-950)',color:'var(--stone-50)'}}><div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'56px var(--container-pad)',display:'grid',gridTemplateColumns:'minmax(0,1fr) 280px',gap:48,alignItems:'center'}} className="proto-conf">
   <div><Badge tone="gold" icon="check">Booked</Badge>
    <h1 className="hp-display" style={{margin:'14px 0 0',fontSize:'var(--fs-display-xl)',lineHeight:.92}}>You’re going to Hawk Pride.</h1>
    <p style={{fontSize:19,color:'var(--stone-200)',margin:'14px 0 0',maxWidth:560}}>{HP.fmtLong(t.arrive)}{t.depart!==t.arrive?' to '+HP.fmtLong(t.depart):''}. We sent the details to {t.contact.email}.</p>
    <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:24}}><Button icon="calendar-check">Add to calendar</Button><a className="hp-btn hp-btn--outline" style={{textDecoration:'none'}} href={'https://maps.google.com/?q='+encodeURIComponent(P.address)} target="_blank" rel="noreferrer"><Icon name="navigation" size={18}/>Directions</a></div></div>
   <div style={{background:'var(--stone-50)',color:'var(--black-950)',borderRadius:'var(--radius-md)',padding:18,textAlign:'center'}}><QR code={t.code}/><div className="hp-eyebrow" style={{marginTop:10,color:'var(--text-muted)'}}>Gate pass</div><div className="hp-display" style={{fontSize:28}}>{t.code}</div><div style={{fontSize:13,color:'var(--text-muted)'}}>Show this at the gate</div></div>
  </div></div>
  <Section>
   <div className="split" style={{alignItems:'start'}}>
    <div style={{display:'flex',flexDirection:'column',gap:16}}>
     {signed<W.length?<Alert tone="warning" title={(W.length-signed)+' waiver'+(W.length-signed>1?'s':'')+' still to sign'}>Everyone who rides needs one before the gate. <TextLink to="waivers">Sign now</TextLink></Alert>:<Alert tone="success" title="All waivers signed">You’re set for express check-in.</Alert>}
     <div className="hp-card" style={{padding:22,gap:10}}><div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>Reservation {t.code}</div>
      <Row l="Dates" v={HP.range(t.arrive,t.depart)}/>{ev&&<Row l="Event" v={ev.title}/>}<Row l="Stay" v={c?c.name+(u?' · '+u.name:''):'No overnight stay'}/>{HP.wantsAdmission(t)&&t.days>0&&<Row l="Riding admission" v={t.adults+' adult'+(t.adults>1?'s':'')+' × '+t.days+' day'+(t.days>1?'s':'')}/>}
      <div style={{borderTop:'1px solid var(--border-subtle)',paddingTop:10,display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={{fontWeight:700,fontSize:17}}>Payment</span><span style={{display:'flex',gap:10,alignItems:'center'}}><Badge tone="success" icon="check">Paid</Badge><strong>{HP.money(HP.total(t))}</strong></span></div></div>
     <div className="hp-card" style={{padding:22,gap:0}}><div className="hp-eyebrow" style={{color:'var(--gold-700)',marginBottom:6}}>Who’s coming</div>
      {HP.participants(t).map(p=><div key={p.key} style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) auto auto',gap:12,alignItems:'center',padding:'10px 0',borderTop:'1px solid var(--border-subtle)'}}><div><div style={{fontWeight:600}}>{p.name}</div><div style={{fontSize:13,color:'var(--text-muted)'}}>{p.type}</div></div>
       <span style={{fontSize:13}}>{p.type==='Adult rider'?(HP.wantsAdmission(t)?'Admission ✓':'Pay at gate'):p.type==='Child rider'?'Rides free':'Not riding'}</span>
       {p.waiver?(t.waivers[p.key]?<Badge tone="success" icon="check">Waiver</Badge>:<Badge tone="warning">Waiver required</Badge>):<Badge tone="neutral">No waiver needed</Badge>}</div>)}</div>
    </div>
    <div style={{display:'flex',flexDirection:'column',gap:18}}><h2 className="hp-display" style={{fontSize:'var(--fs-h2)',margin:0}}>Before you come</h2>
     {[['clock','Check-in from '+P.checkin,'Gates open at 8 AM for riders. Cabins and sites are ready from '+P.checkin+'.'],['map-pin',P.address,'Follow the signs from Hester Porter Road.'],['shield-check','Bring your gear','Helmets for ATVs and open side-by-sides. Flags on event weekends.'],['phone','Questions? '+P.phone,'We pick up during park hours.']].map(([i,tl,d])=><div key={tl} style={{display:'flex',gap:14}}><Icon name={i} size={24} style={{flex:'none'}}/><div><div style={{fontWeight:700,fontSize:17}}>{tl}</div><div style={{color:'var(--text-muted)'}}>{d}</div></div></div>)}
     <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:6}}><Button variant="outline" onClick={()=>go('rules')}>Park rules</Button><Button variant="ghost" onClick={()=>go('trails')}>Trail map</Button><Button variant="ghost" icon="camera" onClick={()=>go('gate')}>See the gate view</Button></div></div>
   </div></Section></>}
Object.assign(window,{Checkout,Waivers,WaiverDialog,Confirmation,NextSteps});
})();
