(()=>{
const {Button,Icon,Badge,Alert,Input}=window.DS;
const wk=HP.weekends(HP.today,1)[0];
const SAMPLES=[
 {code:'HP-28437',contact:'Brandon Hale',phone:'(256) 555-0142',email:'brandon@example.com',arrive:wk.arrive,depart:wk.depart,stay:'Cabin · Cabin 3',event:null,total:460,
  people:[{key:'a0',name:'Brandon Hale',type:'Adult rider',admission:'Paid',waiver:'done'},{key:'a1',name:'Vann Hale',type:'Adult rider',admission:'Paid',waiver:'done'},{key:'a2',name:'Lyle Hale',type:'Adult rider',admission:'Paid',waiver:'required'}]},
 {code:'HP-31022',contact:'Kayla Moore',phone:'(615) 555-0199',email:'kayla@example.com',arrive:wk.arrive,depart:wk.depart,stay:'Powered RV · RV Site 6',event:null,total:160,
  people:[{key:'a0',name:'Kayla Moore',type:'Adult rider',admission:'Paid',waiver:'done'},{key:'a1',name:'Dre Moore',type:'Adult rider',admission:'Paid',waiver:'done'},{key:'k0',name:'Jo Moore',type:'Child rider',admission:'Free',waiver:'done'},{key:'g0',name:'Pat Moore',type:'Non-riding guest',admission:'—',waiver:'n/a'}]}];
function fromTrip(t){const c=HP.cat(t.stay),u=HP.unit(t.unit),ev=HP.eventFor(t.arrive,t.depart);
 return {code:t.code,contact:[t.contact.first,t.contact.last].filter(Boolean).join(' '),phone:t.contact.phone,email:t.contact.email,arrive:t.arrive,depart:t.depart,stay:c?c.name+(u?' · '+u.name:''):'No overnight stay',event:ev?ev.title:null,total:HP.total(t),live:true,checkedIn:t.checkedIn,
  people:HP.participants(t).map(p=>({key:p.key,name:p.name,type:p.type,admission:p.type==='Adult rider'?(HP.wantsAdmission(t)?'Paid':'Due at gate'):p.type==='Child rider'?'Free':'—',waiver:p.waiver?(t.waivers[p.key]?'done':'required'):'n/a'}))}}
function Tick({ok,label,warn}){return <span className={cx('tick',ok&&'tick--ok',warn&&'tick--warn')}><Icon name={ok?'badge-check':warn?'triangle-alert':'minus'} size={18}/>{label}</span>}
function Gate(){const {trip:t,update,go}=useApp();const [local,setLocal]=React.useState({});const [q,setQ]=React.useState('');const [open,setOpen]=React.useState(null);const [scanning,setScanning]=React.useState(false);const [note,setNote]=React.useState(null);
 const all=[...(t.paid?[fromTrip(t)]:[]),...SAMPLES.map(s=>({...s,...(local[s.code]||{}),people:s.people.map(p=>({...p,...((local[s.code]||{}).w||{})[p.key]?{waiver:'done'}:{}}))}))];
 const res=all.find(r=>r.code===open);
 const digits=x=>(x||'').replace(/\D/g,'');const ql=q.trim().toLowerCase();
 const hits=ql.length<2?[]:all.filter(r=>r.code.toLowerCase().includes(ql)||r.contact.toLowerCase().includes(ql)||(r.email||'').toLowerCase().includes(ql)||(digits(ql).length>2&&digits(r.phone).includes(digits(ql)))||r.people.some(p=>p.name.toLowerCase().includes(ql)));
 const scan=()=>{setScanning(true);setNote(null);setTimeout(()=>{setScanning(false);setOpen(all[0].code)},900)};
 const signAtGate=(r,key)=>{if(r.live)update(s=>({waivers:{...s.waivers,[key]:true}}));else setLocal(l=>({...l,[r.code]:{...(l[r.code]||{}),w:{...((l[r.code]||{}).w||{}),[key]:true}}}))};
 const checkIn=r=>{const at=new Date().toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});if(r.live)update({checkedIn:at});else setLocal(l=>({...l,[r.code]:{...(l[r.code]||{}),checkedIn:at}}));setNote(r.contact+'’s party checked in at '+at+'.')};
 const roster=()=>{const rows=[['Reservation','Contact','Phone','Dates','Stay','Event','Participant','Type','Admission','Waiver','Checked in']];all.forEach(r=>r.people.forEach(p=>rows.push([r.code,r.contact,r.phone,HP.range(r.arrive,r.depart),r.stay,r.event||'',p.name,p.type,p.admission,p.waiver,r.checkedIn||''])));const csv=rows.map(r=>r.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(',')).join('\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='hawk-pride-roster.csv';a.click()};
 const missing=res?res.people.filter(p=>p.waiver==='required'):[];const dueGate=res?res.people.filter(p=>p.admission==='Due at gate'):[];
 return <div className="hp-root gate">
  <header className="gate-head hp-on-dark"><div className="hp-container gate-head__inner">
   <img src={HP_LOGO} alt="" className="gate-head__logo"/><div><div className="hp-display gate-head__title">Gate check-in</div><div className="gate-head__sub">Staff view · demo</div></div>
   <button type="button" onClick={()=>go(t.paid?'confirmation':'home')} className="gate-exit"><Icon name="x" size={16}/>Exit staff view</button></div></header>
  <main className="hp-container gate-grid">
   <div className="hp-stack">
    <button type="button" onClick={scan} disabled={scanning} className="gate-scan"><Icon name="camera" size={40}/><span className="hp-display">{scanning?'Scanning…':'Scan reservation code'}</span></button>
    <div className="hp-card hp-card--padded">
     <div className="hp-title">Or look it up</div>
     <Input icon="search" aria-label="Search reservations" placeholder="Reservation #, name, phone or email" value={q} onChange={e=>setQ(e.target.value)}/>
     {ql.length>=2&&(hits.length?hits.map(r=><button key={r.code} type="button" aria-current={open===r.code} onClick={()=>{setOpen(r.code);setNote(null)}} className="gate-hit">
      <span><strong>{r.contact}</strong><span className="gate-hit__sub">{r.code} · {r.stay}</span></span>{r.people.some(p=>p.waiver==='required')&&<Badge tone="warning">Waiver</Badge>}</button>):<span className="hp-small hp-muted">No reservations match.</span>)}
     <div className="hp-caption hp-muted">Try “Lyle”, “HP-31022” or “555-0199”.{t.paid?' Your demo booking is '+t.code+'.':''}</div></div>
    <div className="hp-card hp-card--padded"><div className="hp-title">Connection down?</div><p className="hp-small hp-muted">Download today’s roster before a big event. It lists every party, rider, admission and waiver status.</p><Button variant="outline" icon="download" onClick={roster}>Download roster (CSV)</Button></div>
   </div>
   <div aria-live="polite">{!res?<div className="hp-card gate-empty"><Icon name="ticket" size={48}/><p className="hp-body-l">Scan a code or search to load a reservation.</p></div>:
    <div className="hp-card hp-card--raised gate-res">
     <div className="gate-res__head">
      <div><div className="hp-eyebrow hp-eyebrow--muted">Reservation</div><div className="hp-display gate-res__code">{res.code}</div>
       <div className="gate-res__stay">{res.stay}</div><div className="hp-muted">{HP.range(res.arrive,res.depart)} · {res.contact} · {res.phone}</div>
       {res.event&&<div className="bk-mt"><Badge tone="gold" icon="calendar-days">{res.event}</Badge></div>}</div>
      <div className="gate-res__total"><Badge tone="success" icon="check">Paid</Badge><div className="hp-strong bk-mt">{HP.money(res.total)}</div></div></div>
     {res.people.map(p=><div key={p.key} className="gate-p" data-warn={p.waiver==='required'?1:0}>
      <div><div className="hp-title">{p.name}</div><div className="hp-caption hp-muted">{p.type}</div></div>
      <Tick ok={p.admission==='Paid'||p.admission==='Free'} warn={p.admission==='Due at gate'} label={p.admission==='—'?'Not riding':'Admission '+(p.admission==='Paid'?'✓':p.admission==='Free'?'· free':'due')}/>
      {p.waiver==='required'?<div className="gate-p__sign"><Tick warn label="WAIVER REQUIRED"/><button type="button" className="hp-textlink hp-small" onClick={()=>signAtGate(res,p.key)}>Signed on gate tablet</button></div>:<Tick ok={p.waiver==='done'} label={p.waiver==='done'?'Waiver ✓':'No waiver needed'}/>}
     </div>)}
     <div className="gate-res__foot">
      {res.checkedIn?<Alert tone="success" title={'Checked in at '+res.checkedIn}>This party is already through the gate.</Alert>:
       missing.length?<Alert tone="warning" title={missing.length+' waiver'+(missing.length>1?'s':'')+' missing'}>{missing.map(p=>p.name).join(', ')} must sign before riding. Hand them the gate tablet or text the link.</Alert>:
       dueGate.length?<Alert tone="info" title="Admission due">Collect riding admission for {dueGate.length} rider{dueGate.length>1?'s':''} at the gate.</Alert>:null}
      {note&&!res.checkedIn&&<Alert tone="success">{note}</Alert>}
      <div className="hp-cluster">
       <Button size="lg" icon="check" className="gate-checkin" disabled={!!res.checkedIn||missing.length>0} onClick={()=>checkIn(res)}>{res.checkedIn?'Checked in':'Check in party'}</Button>
       {missing.length>0&&<Button size="lg" variant="outline" icon="message-circle" onClick={()=>setNote('Waiver link texted to '+res.phone+'.')}>Text waiver link</Button>}</div>
     </div></div>}</div>
  </main></div>}
window.Gate=Gate;
})();
