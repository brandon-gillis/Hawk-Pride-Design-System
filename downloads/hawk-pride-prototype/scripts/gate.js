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
 const Tick=({ok,label,warn})=><span style={{display:'inline-flex',alignItems:'center',gap:6,fontWeight:700,fontSize:15,color:ok?'var(--success-700, #1f6b2a)':warn?'var(--danger-700, #a3231a)':'var(--text-muted)'}}><Icon name={ok?'badge-check':warn?'triangle-alert':'minus'} size={18}/>{label}</span>;
 return <div className="hp-root" style={{background:'var(--stone-100)',minHeight:'100vh'}}>
  <header className="hp-on-dark" style={{color:'var(--stone-50)',background:'var(--black-950)',color:'var(--stone-50)',borderBottom:'3px solid var(--gold-400)'}}><div style={{maxWidth:1200,margin:'0 auto',padding:'10px 24px',display:'flex',alignItems:'center',gap:16}}>
   <img src={HP_LOGO} alt="" style={{height:40}}/><div><div className="hp-display" style={{fontSize:22,lineHeight:1}}>Gate check-in</div><div style={{fontSize:12,color:'var(--text-inverse-muted)'}}>Staff view · demo</div></div>
   <button onClick={()=>go(t.paid?'confirmation':'home')} style={{marginLeft:'auto',background:'none',border:'1px solid var(--border-inverse)',color:'var(--stone-50)',borderRadius:4,padding:'8px 12px',font:'inherit',fontSize:14,cursor:'pointer',display:'flex',gap:6,alignItems:'center'}}><Icon name="x" size={16}/>Exit staff view</button></div></header>
  <main style={{maxWidth:1200,margin:'0 auto',padding:'28px 24px 64px',display:'grid',gridTemplateColumns:'minmax(0,380px) minmax(0,1fr)',gap:24,alignItems:'start'}} className="gate-grid">
   <div style={{display:'flex',flexDirection:'column',gap:16}}>
    <button onClick={scan} disabled={scanning} style={{height:132,borderRadius:'var(--radius-md)',border:0,background:'var(--gold-400)',color:'var(--black-950)',font:'inherit',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:8}}>
     <Icon name="camera" size={40}/><span className="hp-display" style={{fontSize:26}}>{scanning?'Scanning…':'Scan reservation code'}</span></button>
    <div className="hp-card" style={{padding:18,gap:12}}>
     <div style={{fontWeight:700}}>Or look it up</div>
     <Input icon="search" placeholder="Reservation #, name, phone or email" value={q} onChange={e=>setQ(e.target.value)}/>
     {ql.length>=2&&(hits.length?hits.map(r=><button key={r.code} onClick={()=>{setOpen(r.code);setNote(null)}} style={{textAlign:'left',font:'inherit',background:open===r.code?'var(--bg-sunken)':'none',border:'1px solid var(--border-subtle)',borderRadius:4,padding:'10px 12px',cursor:'pointer',display:'flex',justifyContent:'space-between',gap:8}}>
      <span><strong>{r.contact}</strong><span style={{display:'block',fontSize:13,color:'var(--text-muted)'}}>{r.code} · {r.stay}</span></span>{r.people.some(p=>p.waiver==='required')&&<Badge tone="warning">Waiver</Badge>}</button>):<span style={{fontSize:14,color:'var(--text-muted)'}}>No reservations match.</span>)}
     <div style={{fontSize:13,color:'var(--text-muted)'}}>Try “Lyle”, “HP-31022” or “555-0199”.{t.paid?' Your demo booking is '+t.code+'.':''}</div></div>
    <div className="hp-card" style={{padding:18,gap:10}}><div style={{fontWeight:700}}>Connection down?</div><div style={{fontSize:14,color:'var(--text-muted)'}}>Download today’s roster before a big event. It lists every party, rider, admission and waiver status.</div><Button variant="outline" icon="download" onClick={roster}>Download roster (CSV)</Button></div>
   </div>
   <div>{!res?<div className="hp-card" style={{padding:40,alignItems:'center',textAlign:'center',gap:10,color:'var(--text-muted)'}}><Icon name="ticket" size={48}/><div style={{fontSize:18}}>Scan a code or search to load a reservation.</div></div>:
    <div className="hp-card hp-card--raised" style={{padding:0,gap:0,overflow:'hidden'}}>
     <div style={{padding:'20px 24px',borderBottom:'1px solid var(--border-subtle)',display:'flex',justifyContent:'space-between',gap:16,flexWrap:'wrap',alignItems:'flex-start'}}>
      <div><div className="hp-eyebrow" style={{color:'var(--text-muted)'}}>Reservation</div><div className="hp-display" style={{fontSize:40,lineHeight:1}}>{res.code}</div>
       <div style={{fontSize:17,marginTop:8,fontWeight:600}}>{res.stay}</div><div style={{color:'var(--text-muted)'}}>{HP.range(res.arrive,res.depart)} · {res.contact} · {res.phone}</div>
       {res.event&&<div style={{marginTop:8}}><Badge tone="gold" icon="calendar-days">{res.event}</Badge></div>}</div>
      <div style={{textAlign:'right'}}><Badge tone="success" icon="check">Paid</Badge><div style={{fontWeight:700,marginTop:6}}>{HP.money(res.total)}</div></div></div>
     {res.people.map(p=><div key={p.key} style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) 150px 190px',gap:12,alignItems:'center',padding:'14px 24px',borderBottom:'1px solid var(--border-subtle)',background:p.waiver==='required'?'var(--warning-50, #fff8e6)':'transparent'}}>
      <div><div style={{fontWeight:700,fontSize:18}}>{p.name}</div><div style={{fontSize:13,color:'var(--text-muted)'}}>{p.type}</div></div>
      <Tick ok={p.admission==='Paid'||p.admission==='Free'} warn={p.admission==='Due at gate'} label={p.admission==='—'?'Not riding':'Admission '+(p.admission==='Paid'?'✓':p.admission==='Free'?'· free':'due')}/>
      {p.waiver==='required'?<div style={{display:'flex',flexDirection:'column',gap:6,alignItems:'flex-start'}}><Tick warn label="WAIVER REQUIRED"/><button onClick={()=>signAtGate(res,p.key)} style={{font:'inherit',fontSize:13,fontWeight:700,background:'none',border:0,padding:0,textDecoration:'underline',cursor:'pointer'}}>Signed on gate tablet</button></div>:<Tick ok={p.waiver==='done'} label={p.waiver==='done'?'Waiver ✓':'No waiver needed'}/>}
     </div>)}
     <div style={{padding:'20px 24px',display:'flex',flexDirection:'column',gap:12}}>
      {res.checkedIn?<Alert tone="success" title={'Checked in at '+res.checkedIn}>This party is already through the gate.</Alert>:
       missing.length?<Alert tone="warning" title={missing.length+' waiver'+(missing.length>1?'s':'')+' missing'}>{missing.map(p=>p.name).join(', ')} must sign before riding. Hand them the gate tablet or text the link.</Alert>:
       dueGate.length?<Alert tone="info" title="Admission due">Collect riding admission for {dueGate.length} rider{dueGate.length>1?'s':''} at the gate.</Alert>:null}
      {note&&!res.checkedIn&&<Alert tone="success">{note}</Alert>}
      <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
       <button disabled={!!res.checkedIn||missing.length>0} onClick={()=>checkIn(res)} className="hp-btn hp-btn--lg hp-btn--primary" style={{flex:'1 1 260px',height:64,fontSize:20,opacity:res.checkedIn||missing.length?.45:1,cursor:res.checkedIn||missing.length?'not-allowed':'pointer'}}><Icon name="check" size={22}/>{res.checkedIn?'Checked in':'Check in party'}</button>
       {missing.length>0&&<Button size="lg" variant="outline" icon="message-circle" onClick={()=>setNote('Waiver link texted to '+res.phone+'.')}>Text waiver link</Button>}</div>
     </div></div>}</div>
  </main>
  <style>{`@media(max-width:860px){.gate-grid{grid-template-columns:1fr!important}}`}</style></div>}
window.Gate=Gate;
})();
