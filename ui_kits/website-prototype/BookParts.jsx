(()=>{
const {Button,Icon,Badge}=window.DS;
const LABEL={dates:'Dates',stay:'Stay',site:'Site',party:'Riders',admission:'Admission',review:'Review'};
const needsSite=t=>{const c=HP.cat(t.stay);return !!c&&c.model==='unit'};
const stepsFor=t=>['dates','stay',...(needsSite(t)?['site']:[]),'party','admission','review'];
const maxDays=t=>Math.max(HP.openDays(t),t.arrive?1:0);
function valid(s,t){const av=HP.availability(t),n=HP.nights(t);
 switch(s){case 'dates':return !!(t.arrive&&t.depart&&t.depart>=t.arrive);
  case 'stay':return !!t.stay&&(t.stay==='none'||(n>0&&av[t.stay]&&av[t.stay].count>0));
  case 'site':return !needsSite(t)||(!!t.unit&&(av[t.stay].free||[]).includes(t.unit));
  case 'party':{if((t.adults||0)<1)return false;if(HP.participants(t).some(p=>!p.name||!p.name.trim()))return false;const u=HP.unit(t.unit);return !(u&&HP.people(t)>u.sleeps)}
  case 'admission':return t.stay!=='none'||(t.days||0)>0;
  default:return true}}
function Frame({step,children,aside,done}){const {go,trip}=useApp();const S=stepsFor(trip);const idx=done?S.length:S.indexOf(step);
 return <div className="hp-root" style={{background:'var(--bg-page)',minHeight:'100vh'}}>
  <header className="hp-on-dark" style={{background:'var(--black-950)',color:'var(--stone-50)',borderBottom:'3px solid var(--gold-400)',position:'sticky',top:0,zIndex:30}}>
   <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'10px var(--container-pad)',display:'flex',alignItems:'center',gap:20}}>
    <a href="#/" onClick={e=>{e.preventDefault();go('home')}} aria-label="Hawk Pride Offroad, home" style={{display:'flex'}}><img src={HP_LOGO} alt="" style={{height:44}}/></a>
    <nav aria-label="Booking steps" style={{display:'flex',gap:2,flex:1,overflowX:'auto'}}>{S.map((s,i)=>{const past=i<idx,cur=i===idx;
     return <button key={s} disabled={!past||!!done} onClick={()=>go('book/'+s)} aria-current={cur?'step':undefined} style={{display:'flex',alignItems:'center',gap:8,background:'none',border:0,color:cur?'var(--gold-400)':past?'var(--stone-50)':'var(--text-inverse-muted)',font:'inherit',fontSize:14,fontWeight:700,padding:'8px 10px',cursor:past&&!done?'pointer':'default',whiteSpace:'nowrap'}}>
      <span style={{width:24,height:24,borderRadius:'50%',display:'grid',placeItems:'center',fontSize:12,background:cur?'var(--gold-400)':past?'var(--stone-50)':'transparent',color:cur||past?'var(--black-950)':'inherit',border:cur||past?0:'1.5px solid var(--text-inverse-muted)'}}>{past?<Icon name="check" size={14}/>:i+1}</span>{LABEL[s]}</button>})}
     {done&&<span style={{display:'flex',alignItems:'center',gap:8,color:'var(--gold-400)',fontSize:14,fontWeight:700,padding:'8px 10px',whiteSpace:'nowrap'}}><Icon name="lock" size={16}/>{done}</span>}</nav>
    <button onClick={()=>go('home')} style={{background:'none',border:0,color:'var(--stone-200)',font:'inherit',fontSize:14,cursor:'pointer',display:'flex',gap:6,alignItems:'center'}}><Icon name="x" size={18}/>Exit</button>
   </div></header>
  <main style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'40px var(--container-pad) 80px'}}>
   <div className="bk-layout"><div style={{minWidth:0}}>{children}</div><aside className="bk-aside" style={{position:'sticky',top:96}}>{aside===undefined?<Summary/>:aside}</aside></div></main></div>}
function StepHead({eyebrow,title,sub}){return <div style={{marginBottom:28}}>{eyebrow&&<div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>{eyebrow}</div>}<h1 className="hp-display" style={{fontSize:'var(--fs-display-l)',lineHeight:.95,margin:'6px 0 0',textWrap:'balance'}}>{title}</h1>{sub&&<p style={{margin:'12px 0 0',fontSize:17,color:'var(--text-muted)',maxWidth:600,textWrap:'pretty'}}>{sub}</p>}</div>}
function StepNav({back,next,label='Continue',ok=true,hint}){return <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,marginTop:36,paddingTop:24,borderTop:'1px solid var(--border-subtle)',flexWrap:'wrap'}}>
 {back?<Button variant="ghost" icon="arrow-left" onClick={back}>Back</Button>:<span/>}<div style={{display:'flex',alignItems:'center',gap:16,flexWrap:'wrap'}}>{!ok&&hint&&<span style={{color:'var(--text-muted)',fontSize:14}}>{hint}</span>}<Button size="lg" iconRight="arrow-right" disabled={!ok} onClick={next}>{label}</Button></div></div>}
function Summary({editable=true}){const {trip:t,go}=useApp();const c=HP.cat(t.stay),u=HP.unit(t.unit),n=HP.nights(t),ev=HP.eventFor(t.arrive,t.depart),adm=HP.wantsAdmission(t)?HP.admission(t):0,lod=HP.lodging(t);
 const Line=({icon,label,value,to})=><div style={{display:'flex',gap:12,alignItems:'flex-start',padding:'12px 0',borderTop:'1px solid var(--border-subtle)'}}><Icon name={icon} size={20} style={{flex:'none',marginTop:1}}/><div style={{flex:1,minWidth:0}}><div style={{fontSize:13,color:'var(--text-muted)'}}>{label}</div><div style={{fontWeight:600}}>{value||<span style={{color:'var(--text-subtle)',fontWeight:400}}>Not chosen yet</span>}</div></div>{editable&&value&&to&&<a href={'#/book/'+to} onClick={e=>{e.preventDefault();go('book/'+to)}} style={{fontSize:14,color:'var(--text-strong)',fontWeight:600}}>Edit</a>}</div>;
 const party=t.adults?[t.adults+' adult rider'+(t.adults>1?'s':''),t.kids?t.kids+' child rider'+(t.kids>1?'s':''):null,t.guests?t.guests+' guest'+(t.guests>1?'s':''):null].filter(Boolean).join(', '):null;
 return <div className="hp-card hp-card--raised" style={{padding:22,gap:0}}>
  <div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>Your Hawk Pride trip</div>
  <div className="hp-display" style={{fontSize:30,margin:'4px 0 12px'}}>{t.arrive&&t.depart?HP.range(t.arrive,t.depart):'Pick your dates'}</div>
  {ev&&<div style={{marginBottom:12}}><Badge tone="gold" icon="calendar-days">{ev.title}</Badge></div>}
  <Line icon="calendar-days" label="Dates" value={t.arrive&&t.depart?(n?n+' night'+(n>1?'s':''):'Day trip'):null} to="dates"/>
  <Line icon={c?c.icon:'tent'} label="Stay" value={t.stay==='none'?'No overnight stay':c?(c.name+(u?' · '+u.name:'')):null} to="stay"/>
  <Line icon="users" label="Party" value={party} to="party"/>
  <Line icon="ticket" label="Riding admission" value={t.stay&&t.days?(HP.wantsAdmission(t)?t.adults+' × '+t.days+' day'+(t.days>1?'s':''):'Pay at the gate'):null} to="admission"/>
  <div style={{borderTop:'2px solid var(--black-950)',paddingTop:14,marginTop:4,display:'flex',flexDirection:'column',gap:8}}>
   {lod>0&&<Row l={c.name+' · '+n+' night'+(n>1?'s':'')} v={HP.money(lod)}/>}
   {adm>0&&<Row l="Riding admission" v={HP.money(adm)}/>}
   {t.kids>0&&HP.wantsAdmission(t)&&<Row muted l="Child riders" v="Free"/>}
   <Row b l="Total" v={HP.money(HP.total(t))}/></div></div>}
function Calendar({arrive,depart,onPick}){const s=HP.p(arrive||HP.today);const [m,setM]=React.useState(new Date(s.getFullYear(),s.getMonth(),1));const [hover,setHover]=React.useState(null);
 const end=depart||(arrive&&hover&&hover>arrive?hover:null);
 const pick=d=>{if(!arrive||depart||d<arrive)onPick(d,null);else onPick(arrive,d)};
 const month=off=>{const f=new Date(m.getFullYear(),m.getMonth()+off,1),days=new Date(f.getFullYear(),f.getMonth()+1,0).getDate(),cells=[];for(let i=0;i<f.getDay();i++)cells.push(null);for(let d=1;d<=days;d++)cells.push(HP.iso(new Date(f.getFullYear(),f.getMonth(),d)));
  return <div key={off} style={{flex:'1 1 280px'}}><div className="hp-display" style={{fontSize:22,textAlign:'center',marginBottom:10}}>{HP.M[f.getMonth()]} {f.getFullYear()}</div>
   <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:'2px 0',textAlign:'center'}}>{['S','M','T','W','T','F','S'].map((d,i)=><div key={i} style={{fontSize:12,fontWeight:700,color:'var(--text-muted)',padding:'4px 0'}}>{d}</div>)}
    {cells.map((d,i)=>{if(!d)return <span key={i}/>;const past=d<HP.today,closed=!HP.open(d),isEnd=d===arrive||d===end,inR=arrive&&end&&d>arrive&&d<end;
     return <button key={d} className="cal-day" disabled={past} data-end={isEnd?1:0} data-in={inR?1:0} data-ev={HP.eventOn(d)?1:0} onMouseEnter={()=>setHover(d)} onClick={()=>pick(d)} title={HP.eventOn(d)?HP.eventOn(d).title:closed?'Park closed for riding':''} style={closed&&!past&&!isEnd?{color:'var(--text-subtle)'}:null}>{HP.p(d).getDate()}</button>})}</div></div>};
 return <div className="hp-card" style={{padding:20}}>
  <div style={{display:'flex',justifyContent:'space-between',marginBottom:-34,position:'relative',zIndex:1,pointerEvents:'none'}}>{[-1,1].map(d=><button key={d} aria-label={d<0?'Previous month':'Next month'} onClick={()=>setM(new Date(m.getFullYear(),m.getMonth()+d,1))} style={{pointerEvents:'auto',width:36,height:36,border:'1px solid var(--border-subtle)',background:'var(--surface-card)',borderRadius:4,cursor:'pointer',display:'grid',placeItems:'center'}}><Icon name={d<0?'chevron-left':'chevron-right'} size={18}/></button>)}</div>
  <div style={{display:'flex',gap:32,flexWrap:'wrap'}} onMouseLeave={()=>setHover(null)}>{month(0)}{month(1)}</div>
  <div style={{display:'flex',gap:20,flexWrap:'wrap',marginTop:14,fontSize:13,color:'var(--text-muted)'}}><span style={{display:'flex',gap:6,alignItems:'center'}}><span style={{width:6,height:6,borderRadius:'50%',background:'var(--gold-600)'}}/>Event weekend</span><span>Grey dates: park closed for riding (camping only)</span></div></div>}
Object.assign(window,{BK:{LABEL,needsSite,stepsFor,valid,maxDays},BkFrame:Frame,StepHead,StepNav,TripSummary:Summary,Calendar});
})();
