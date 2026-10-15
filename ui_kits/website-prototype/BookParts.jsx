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
function MobileSummary({editable}){const {trip:t}=useApp();
 return <details className="bk-mobsum"><summary><span className="bk-mobsum__l"><span className="bk-mobsum__t">Your trip</span><span className="bk-mobsum__d">{t.arrive&&t.depart?HP.range(t.arrive,t.depart):'Pick your dates'}</span></span><span className="bk-mobsum__r">{HP.money(HP.total(t))}<Icon name="chevron-down" size={20}/></span></summary>
  <div className="bk-mobsum__body"><Summary editable={editable}/></div></details>}
function Frame({step,children,aside,done}){const {go,trip}=useApp();const S=stepsFor(trip);const idx=done?S.length:S.indexOf(step);
 return <div className="hp-root">
  <header className="bk-header hp-on-dark"><div className="hp-container bk-header__inner">
   <a href="#/" onClick={e=>{e.preventDefault();go('home')}} aria-label="Hawk Pride Offroad, home" className="bk-header__brand"><img src={HP_LOGO} alt="" className="bk-header__logo"/></a>
   <nav aria-label="Booking steps" className="bk-steps">{S.map((s,i)=>{const st=i<idx?'past':i===idx?'cur':'next';
    return <button key={s} type="button" className="bk-step" data-s={st} disabled={st!=='past'||!!done} onClick={()=>go('book/'+s)} aria-current={st==='cur'?'step':undefined} aria-label={st==='cur'?undefined:'Step '+(i+1)+': '+LABEL[s]}>
     <span className="bk-step__n">{st==='past'?<Icon name="check" size={14}/>:i+1}</span><span className="bk-step__l">{LABEL[s]}</span></button>})}
    {done&&<span className="bk-step bk-step--lock" data-s="cur"><Icon name="lock" size={16}/><span className="bk-step__l">{done}</span></span>}</nav>
   <button type="button" onClick={()=>go('home')} className="bk-exit"><Icon name="x" size={18}/>Exit</button>
  </div></header>
  <main className="hp-container bk-main">
   <div className="bk-layout"><div>{step!=='review'&&<MobileSummary editable={!done}/>}{children}</div><aside className="bk-aside">{aside===undefined?<Summary/>:aside}</aside></div></main></div>}
function StepHead({eyebrow,title,sub}){return <div className="bk-head">{eyebrow&&<div className="hp-eyebrow hp-eyebrow--accent">{eyebrow}</div>}<h1 className="hp-display hp-display-l">{title}</h1>{sub&&<p className="hp-lede">{sub}</p>}</div>}
function StepNav({back,next,label='Continue',ok=true,hint,backLabel='Back',busy,icon}){return <div className="bk-nav">
 {back?<Button variant="ghost" icon="arrow-left" onClick={back}>{backLabel}</Button>:<span/>}<div className="bk-nav__right">{!ok&&hint&&<span className="bk-nav__hint">{hint}</span>}<Button size="lg" icon={icon} iconRight={icon?undefined:'arrow-right'} disabled={!ok||busy} onClick={next}>{label}</Button></div></div>}
function Summary({editable=true}){const {trip:t}=useApp();const c=HP.cat(t.stay),u=HP.unit(t.unit),n=HP.nights(t),ev=HP.eventFor(t.arrive,t.depart),adm=HP.wantsAdmission(t)?HP.admission(t):0,lod=HP.lodging(t);
 const Line=({icon,label,value,to})=><div className="bk-line"><Icon name={icon} size={20}/><div className="bk-line__main"><div className="bk-line__l">{label}</div><div className="bk-line__v">{value||<span className="bk-line__empty">Not chosen yet</span>}</div></div>{editable&&value&&to&&<TextLink to={'book/'+to} aria-label={'Edit '+label.toLowerCase()}>Edit</TextLink>}</div>;
 const party=t.adults?[t.adults+' adult rider'+(t.adults>1?'s':''),t.kids?t.kids+' child rider'+(t.kids>1?'s':''):null,t.guests?t.guests+' guest'+(t.guests>1?'s':''):null].filter(Boolean).join(', '):null;
 return <div className="hp-card hp-card--raised bk-sum">
  <div className="hp-eyebrow hp-eyebrow--accent">Your Hawk Pride trip</div>
  <div className="hp-display bk-sum__title">{t.arrive&&t.depart?HP.range(t.arrive,t.depart):'Pick your dates'}</div>
  {ev&&<div className="bk-sum__badge"><Badge tone="gold" icon="calendar-days">{ev.title}</Badge></div>}
  <Line icon="calendar-days" label="Dates" value={t.arrive&&t.depart?(n?n+' night'+(n>1?'s':''):'Day trip'):null} to="dates"/>
  <Line icon={c?c.icon:'tent'} label="Stay" value={t.stay==='none'?'No overnight stay':c?(c.name+(u?' · '+u.name:'')):null} to="stay"/>
  <Line icon="users" label="Party" value={party} to="party"/>
  <Line icon="ticket" label="Riding admission" value={t.stay&&t.days?(HP.wantsAdmission(t)?t.adults+' × '+t.days+' day'+(t.days>1?'s':''):'Pay at the gate'):null} to="admission"/>
  <div className="hp-kv-sum hp-kv-sum--strong">
   {lod>0&&<Row label={c.name+' · '+n+' night'+(n>1?'s':'')} value={HP.money(lod)}/>}
   {adm>0&&<Row label="Riding admission" value={HP.money(adm)}/>}
   {t.kids>0&&HP.wantsAdmission(t)&&<Row muted label="Child riders" value="Free"/>}
   <Row total label="Total" value={HP.money(HP.total(t))}/></div></div>}
function Calendar({arrive,depart,onPick}){const s=HP.p(arrive||HP.today);const [m,setM]=React.useState(new Date(s.getFullYear(),s.getMonth(),1));const [hover,setHover]=React.useState(null);
 const end=depart||(arrive&&hover&&hover>arrive?hover:null);
 const pick=d=>{if(!arrive||depart||d<arrive)onPick(d,null);else onPick(arrive,d)};
 const month=off=>{const f=new Date(m.getFullYear(),m.getMonth()+off,1),days=new Date(f.getFullYear(),f.getMonth()+1,0).getDate(),cells=[];for(let i=0;i<f.getDay();i++)cells.push(null);for(let d=1;d<=days;d++)cells.push(HP.iso(new Date(f.getFullYear(),f.getMonth(),d)));
  return <div key={off} className="cal__month"><div className="hp-display cal__title">{HP.M[f.getMonth()]} {f.getFullYear()}</div>
   <div className="cal__grid">{['S','M','T','W','T','F','S'].map((d,i)=><div key={i} className="cal__dow" aria-hidden="true">{d}</div>)}
    {cells.map((d,i)=>{if(!d)return <span key={i}/>;const past=d<HP.today,closed=!HP.open(d),isEnd=d===arrive||d===end,inR=arrive&&end&&d>arrive&&d<end,ev=HP.eventOn(d);
     return <button key={d} type="button" className="cal-day" disabled={past} data-end={isEnd?1:0} data-in={inR?1:0} data-ev={ev?1:0} data-closed={closed&&!past&&!isEnd?1:0} aria-pressed={isEnd||undefined} aria-label={HP.fmtLong(d)+(ev?', '+ev.title:closed?', park closed for riding':'')} onMouseEnter={()=>setHover(d)} onClick={()=>pick(d)} title={ev?ev.title:closed?'Park closed for riding':undefined}>{HP.p(d).getDate()}</button>})}</div></div>};
 return <div className="hp-card cal">
  <div className="cal__nav">{[-1,1].map(d=><button key={d} type="button" className="cal__btn" aria-label={d<0?'Previous month':'Next month'} onClick={()=>setM(new Date(m.getFullYear(),m.getMonth()+d,1))}><Icon name={d<0?'chevron-left':'chevron-right'} size={18}/></button>)}</div>
  <div className="cal__months" onMouseLeave={()=>setHover(null)}>{month(0)}{month(1)}</div>
  <div className="cal__legend"><span><span className="cal__dot"/>Event weekend</span><span>Grey dates: park closed for riding (camping only)</span></div></div>}
Object.assign(window,{BK:{LABEL,needsSite,stepsFor,valid,maxDays},BkFrame:Frame,StepHead,StepNav,TripSummary:Summary,Calendar});
})();
