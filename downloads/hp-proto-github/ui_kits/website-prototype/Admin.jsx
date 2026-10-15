(()=>{
const {Button,Icon,IconButton,Badge,Alert,Input,Select,Checkbox,Radio,Dialog,Toast,Tabs}=window.DS;
const S=window.HP_EVENTS,SK='hp-admin-user',DEMO={user:'staff',pass:'hawkpride'};
const nav=to=>{location.hash='#/admin'+(to?'/'+to:'')};
const ACtx=React.createContext(null);const useAdmin=()=>React.useContext(ACtx);
const useEvents=()=>{const [,f]=React.useState(0);React.useEffect(()=>S.subscribe(()=>f(n=>n+1)),[]);return S.list()};
const yr=s=>HP.p(s).getFullYear();
const dates=e=>e.start?HP.range(e.start,e.end)+', '+yr(e.end||e.start):'No date';
const span=e=>{if(!e.start)return '';const n=e.end&&e.end>e.start?HP.diff(e.start,e.end)+1:1;return HP.W[HP.p(e.start).getDay()]+(n>1?' – '+HP.W[HP.p(e.end).getDay()]:'')+' · '+n+' day'+(n>1?'s':'')};
const statusBadge=s=>s==='featured'?<Badge tone="gold">Featured</Badge>:s==='few'?<Badge tone="warning">Few sites left</Badge>:s==='soldout'?<Badge tone="danger">Registration full</Badge>:<span className="adm-dim">Normal</span>;
const ago=iso=>{if(!iso)return 'never';const m=Math.round((Date.now()-new Date(iso))/6e4);return m<1?'just now':m<60?m+' min ago':m<1440?Math.round(m/60)+' hr ago':new Date(iso).toLocaleDateString('en-US',{month:'short',day:'numeric'})};

function AdminApp({seg}){
 const [user,setUser]=React.useState(()=>sessionStorage.getItem(SK));
 const [toast,setToast]=React.useState(null);const [syncing,setSyncing]=React.useState({});
 React.useEffect(()=>{document.title='Staff Admin · Hawk Pride Offroad';return()=>{document.title='Hawk Pride — Website prototype'}},[]);
 React.useEffect(()=>{if(!toast)return;const t=setTimeout(()=>setToast(null),5000);return()=>clearTimeout(t)},[toast]);
 const sync=id=>{setSyncing(s=>({...s,[id]:true}));setTimeout(()=>setSyncing(s=>{const n={...s};delete n[id];return n}),1600)};
 if(!user)return <Login onIn={u=>{sessionStorage.setItem(SK,u);setUser(u);if(!seg[1])nav('events')}}/>;
 const out=()=>{sessionStorage.removeItem(SK);setUser(null);nav('')};
 const tab='events';
 let body;if(seg[2])body=<Editor key={seg[2]} id={seg[2]==='new'?null:seg[2]}/>;else body=<Manage/>;
 return <ACtx.Provider value={{toast:setToast,sync,syncing}}><div className="adm">
  <div className="adm-hazard hp-hazard" aria-hidden="true"/>
  <header className="adm-top"><div className="adm-wrap adm-top__in">
   <a href="#/admin/events" className="adm-brand"><img src={HP_LOGO} alt=""/><span className="adm-brand__name">Hawk Pride Offroad</span><span className="adm-tag">Staff admin</span></a>
   <div className="adm-top__right"><a href="#/" className="adm-toplink">View website<Icon name="arrow-up-right" size={18}/></a><span className="adm-user"><Icon name="user" size={18}/>{user}</span><button type="button" className="adm-toplink" onClick={out}>Sign out</button></div>
  </div></header>
  <nav className="adm-tabs" aria-label="Admin sections"><div className="adm-wrap adm-tabs__in">{[['events','calendar-days','Manage Events']].map(([id,ic,l])=><a key={id} href={'#/admin/'+id} className={cx('adm-tab',tab===id&&'is-on')} aria-current={tab===id?'page':undefined}><Icon name={ic} size={20}/>{l}</a>)}</div></nav>
  <main className="adm-main"><div className="adm-wrap">{body}</div></main>
  {toast&&<div className="adm-toast" role="status"><Toast message={toast.msg} icon={toast.icon||'check'} actionLabel={toast.action} onAction={()=>{toast.onAction();setToast(null)}}/></div>}
 </div></ACtx.Provider>}

function Login({onIn}){const [u,setU]=React.useState('');const [p,setP]=React.useState('');const [show,setShow]=React.useState(false);const [err,setErr]=React.useState(null);
 const submit=e=>{e.preventDefault();if(!u.trim()||!p){setErr('Enter your username and password.');return}if(u.trim().toLowerCase()!==DEMO.user||p!==DEMO.pass){setErr('That username and password don’t match. Check with the office if you’re locked out.');return}onIn(u.trim().toLowerCase())};
 return <div className="adm adm-login">
  <div className="adm-hazard hp-hazard" aria-hidden="true"/>
  <div className="adm-login__body">
   <form className="adm-login__card" onSubmit={submit} noValidate>
    <div className="adm-login__head"><img src={HP_LOGO} alt="Hawk Pride Offroad" className="adm-login__logo"/><span className="adm-tag">Staff admin</span></div>
    <h1 className="adm-h1">Staff sign in</h1>
    <p className="adm-sub">For park staff only. Manage the events calendar for the website and Google Calendar.</p>
    {err&&<Alert tone="danger" title="Can’t sign in">{err}</Alert>}
    <Input label="Username" autoComplete="username" value={u} onChange={e=>setU(e.target.value)} autoFocus/>
    <div className="adm-pw"><Input label="Password" type={show?'text':'password'} autoComplete="current-password" value={p} onChange={e=>setP(e.target.value)}/><button type="button" className="adm-pw__toggle" onClick={()=>setShow(!show)} aria-pressed={show}>{show?'Hide':'Show'}</button></div>
    <Button type="submit" variant="secondary" size="lg" block icon="lock">Sign in</Button>
    <div className="adm-demo"><Icon name="info" size={18}/><span>Prototype login: <code>staff</code> / <code>hawkpride</code></span></div>
   </form>
   <a href="#/" className="adm-login__back"><Icon name="arrow-left" size={18}/>Back to the website</a>
  </div></div>}

function GcalPanel({events}){const [open,setOpen]=React.useState(false);const last=events.reduce((a,e)=>e.syncedAt>a?e.syncedAt:a,'');
 return <section className="adm-card adm-gcal">
  <div className="adm-gcal__row">
   <span className="adm-gcal__icon"><Icon name="calendar-check" size={24}/></span>
   <div className="adm-gcal__txt"><div className="adm-gcal__t">Connected to Google Calendar <Badge tone="success" icon="check">Live</Badge></div><div className="adm-dim">{S.GCAL.name} · Central time · last synced {ago(last)}</div></div>
   <div className="adm-gcal__act"><Button variant="outline" size="sm" onClick={()=>setOpen(!open)} iconRight={open?'chevron-up':'chevron-down'}>{open?'Hide calendar':'Show calendar'}</Button><Button variant="ghost" size="sm" href={S.GCAL.embed} target="_blank" rel="noopener" iconRight="external-link">Open in Google</Button></div>
  </div>
  {open&&<div className="adm-gcal__embed"><iframe title="Hawk Pride Offroad Events in Google Calendar" src={S.GCAL.embed+'&mode=MONTH&showPrint=0&showTitle=0'} loading="lazy"/><p className="adm-dim">This is the live Google Calendar. Prototype edits aren’t written to it.</p></div>}
 </section>}

function Manage(){const E=useEvents();const {toast,syncing}=useAdmin();const [f,setF]=React.useState('upcoming');const [q,setQ]=React.useState('');const [del,setDel]=React.useState(null);
 const up=E.filter(e=>(e.end||e.start)>=HP.today),past=E.filter(e=>(e.end||e.start)<HP.today);
 const base=f==='upcoming'?up:f==='past'?past.slice().reverse():E;const rows=q.trim()?base.filter(e=>(e.title+' '+e.type).toLowerCase().includes(q.trim().toLowerCase())):base;
 const remove=()=>{const e=S.remove(del.id);setDel(null);toast({msg:'Deleted '+e.title+'. Removed from the website and Google Calendar.',icon:'trash-2',action:'Undo',onAction:()=>S.restore(e)})};
 return <>
  <div className="adm-head"><div><h1 className="adm-h1">Manage Events</h1><p className="adm-sub">Events you add here appear on the website’s Events page and in the park’s Google Calendar.</p></div>
   <Button size="lg" icon="plus" onClick={()=>nav('events/new')}>New event</Button></div>
  <GcalPanel events={E}/>
  <section className="adm-card">
   <div className="adm-toolbar"><Tabs variant="pill" label="Filter events" value={f} onChange={setF} items={[{id:'upcoming',label:'Upcoming',count:up.length},{id:'past',label:'Past',count:past.length},{id:'all',label:'All',count:E.length}]}/>
    <div className="adm-search"><Input icon="search" placeholder="Search events" value={q} onChange={e=>setQ(e.target.value)} aria-label="Search events"/></div></div>
   {rows.length?<table className="adm-table"><thead><tr><th>Dates</th><th>Event</th><th>Status</th><th>Google Calendar</th><th><span className="adm-hide">Actions</span></th></tr></thead>
    <tbody>{rows.map(e=><tr key={e.id}>
     <td className="adm-td-date"><strong>{dates(e)}</strong><span className="adm-dim">{span(e)}</span></td>
     <td><a href={'#/admin/events/'+e.id} className="adm-ev"><span className="adm-ev__thumb">{e.image?<img src={e.image} alt=""/>:<Icon name="image" size={20}/>}</span><span><span className="adm-ev__t">{e.title}</span><span className="adm-dim">{e.type}{e.rates?' · '+({daily:'Custom daily rates',fixed:'Fixed fee',free:'No charge'})[e.rates.mode||'daily']:''}</span></span></a></td>
     <td data-label="Status">{statusBadge(e.status)}</td>
     <td data-label="Google">{syncing[e.id]?<span className="adm-sync is-busy"><Icon name="refresh-cw" size={18}/>Syncing…</span>:<span className="adm-sync"><Icon name="check" size={18}/>Synced <span className="adm-dim">{ago(e.syncedAt)}</span></span>}</td>
     <td className="adm-td-act"><Button variant="outline" size="sm" onClick={()=>nav('events/'+e.id)}>Edit</Button><IconButton icon="trash-2" variant="ghost" label={'Delete '+e.title} onClick={()=>setDel(e)}/></td>
    </tr>)}</tbody></table>
   :<div className="adm-empty"><Icon name="calendar-x" size={32}/><p className="adm-empty__t">{q?'No events match “'+q+'”.':f==='past'?'No past events.':'No upcoming events.'}</p>{!q&&<Button variant="secondary" icon="plus" onClick={()=>nav('events/new')}>New event</Button>}</div>}
  </section>
  <ConfirmDelete ev={del} onCancel={()=>setDel(null)} onConfirm={remove}/>
 </>}

function ConfirmDelete({ev,onCancel,onConfirm}){return <Dialog open={!!ev} title="Delete this event?" onClose={onCancel} footer={<><Button variant="outline" onClick={onCancel}>Keep it</Button><Button variant="secondary" className="adm-btn-danger" icon="trash-2" onClick={onConfirm}>Delete event</Button></>}>
  {ev&&<p className="adm-dialog-p"><strong>{ev.title}</strong> ({dates(ev)}) will be removed from the website and from Google Calendar.</p>}</Dialog>}

const RBLANK={mode:'standard',day:'',dayLater:'',freeAge:'',spectator:'',fixed:'',extras:[]};
const BLANK={title:'',type:'Park ride',start:'',end:'',status:'',hook:'',desc:'',imageId:null,upload:null,facts:[],schedule:[],jeep:false,rates:RBLANK};
const s0=x=>x==null?'':String(x);
const toForm=r=>{if(!r)return RBLANK;const mode=r.mode||(r.custom?'daily':'standard');return {mode,day:s0(r.day),dayLater:s0(r.dayLater),freeAge:s0(r.freeAge),spectator:s0(r.spectator),fixed:s0(r.fixed),extras:(r.extras||[]).map(([l,n])=>[l,String(n)])}};
const MODES=[['standard','Standard park rates'],['daily','Custom daily rates','Your own per-day admission and spectator price.'],['fixed','Fixed fee','One price per rider for the whole event.'],['free','No charge group ride','Riders and spectators get in free. Waivers still required.']];
const RATE_F={daily:[['day','Rider admission, days 1 and 2','/ rider / day',true],['dayLater','Rider admission, day 3 and beyond','/ rider / day',true],['freeAge','Kids ride free up to age','years and under',false],['spectator','Spectators','/ person / day',true]],
 fixed:[['fixed','Event fee','/ rider · whole event',true],['freeAge','Kids ride free up to age','years and under',false],['spectator','Spectators','/ person · whole event',true]],standard:[],free:[]};
const whole=s=>/^\d+$/.test(String(s).trim());
const HOOK_MAX=140;
function Editor({id}){const {toast,sync}=useAdmin();const PS=window.HP_DATA.pricing;const orig=id?S.get(id):BLANK;
 const [v,setV]=React.useState(()=>orig?{...BLANK,...orig,facts:(orig.facts||[]).map(r=>[...r]),schedule:(orig.schedule||[]).map(r=>[...r]),rates:toForm(orig.rates)}:null);
 const [tried,setTried]=React.useState(false);const [leave,setLeave]=React.useState(false);const [del,setDel]=React.useState(false);
 if(!v)return <div className="adm-empty"><Icon name="calendar-x" size={32}/><p className="adm-empty__t">That event doesn’t exist. It may have been deleted.</p><Button variant="secondary" icon="arrow-left" onClick={()=>nav('events')}>All events</Button></div>;
 const set=p=>setV(x=>({...x,...p}));
 const err={title:!v.title.trim()&&'Give the event a name',start:!v.start&&'Pick a start date',end:v.end&&v.start&&v.end<v.start&&'End date is before the start date',hook:(!v.hook.trim()&&'Add a one-line summary')||(v.hook.length>HOOK_MAX&&'Keep it under '+HOOK_MAX+' characters')};
 const R=v.rates,paid=R.mode==='daily'||R.mode==='fixed',rErr=Object.fromEntries(RATE_F[R.mode].map(([k])=>[k,!whole(R[k])&&'Whole number']));const xErr=paid&&R.extras.some(([l,n])=>(l.trim()||n.trim())&&(!l.trim()||!whole(n)));
 err.rates=(Object.values(rErr).some(Boolean)||xErr)&&'Check the event rates';
 const bad=Object.values(err).some(Boolean);const e=k=>tried&&err[k]||undefined;const setR=p=>set({rates:{...R,...p}});
 const pick=m=>{const p={mode:m};if(m!=='standard'&&m!=='free'){if(R.freeAge==='')p.freeAge=String(PS.freeAge);if(R.spectator==='')p.spectator='0';if(m==='daily'&&R.day===''){p.day=String(PS.day);p.dayLater=String(PS.dayLater)}}setR(p)};
 const dirty=JSON.stringify({...BLANK,...orig,rates:toForm(orig.rates),image:undefined,syncedAt:undefined})!==JSON.stringify({...v,image:undefined,syncedAt:undefined});
 const save=()=>{setTried(true);if(bad){window.scrollTo({top:0,behavior:'smooth'});return}
  const clean={...v,title:v.title.trim(),hook:v.hook.trim(),end:v.end||v.start,facts:v.facts.filter(r=>r[0].trim()||r[1].trim()),schedule:v.schedule.filter(r=>r[0].trim()||r[1].trim()),rates:R.mode==='standard'?null:R.mode==='free'?{mode:'free'}:{mode:R.mode,...Object.fromEntries(RATE_F[R.mode].map(([k])=>[k,+R[k]])),extras:R.extras.filter(([l,n])=>l.trim()&&whole(n)).map(([l,n])=>[l.trim(),+n])}};
  const n=S.save(clean);sync(n.id);toast({msg:(id?'Saved ':'Created ')+n.title+'. Syncing to Google Calendar.',icon:'calendar-check',action:'View on site',onAction:()=>{location.hash='#/events/'+n.id}});nav('events')};
 const cancel=()=>dirty?setLeave(true):nav('events');
 const prev={...v,image:v.imageId==='upload'?v.upload:v.imageId?hpAsset(v.imageId):null};const $=x=>whole(x)?'$'+(+x):'—';const xr=R.extras.filter(([l,n])=>l.trim()&&whole(n)).map(([l,n])=>[l,$(n)]);
 const prevRates=R.mode==='free'?[['Riding','No charge · group ride'],['Spectators','Free']]:R.mode==='fixed'?[['Event fee',$(R.fixed)+' / rider'],['Spectators',+R.spectator>0?$(R.spectator)+' / person':'Free'],...xr]:R.mode==='daily'?[['Rider admission',$(R.day)+' / day'],['Spectators',+R.spectator>0?$(R.spectator)+' / day':'Free'],...xr]:[['Rider admission','$'+PS.day+' / day'],['Spectators','Free']];const g=S.toGcal({...v,end:v.end||v.start});
 return <>
  <div className="adm-head adm-head--edit"><div><button type="button" className="adm-back" onClick={cancel}><Icon name="arrow-left" size={18}/>All events</button><h1 className="adm-h1">{id?'Edit event':'New event'}</h1>{id&&<p className="adm-sub">{orig.title}</p>}</div></div>
  {tried&&bad&&<div className="adm-errsum"><Alert tone="danger" title="Fix these before saving">{Object.values(err).filter(Boolean).join(' · ')}</Alert></div>}
  <div className="adm-edit">
   <div className="adm-edit__form">
    <Card title="Basics">
     <Input label="Event name" value={v.title} error={e('title')} onChange={x=>set({title:x.target.value})} placeholder="e.g. Fall Crawl"/>
     <div className="adm-2"><Select label="Type" value={v.type} onChange={x=>set({type:x.target.value})} options={S.TYPES}/><Select label="Status label" hint="Shown as a badge on the website" value={v.status} onChange={x=>set({status:x.target.value})} options={S.STATUS}/></div>
    </Card>
    <Card title="Dates" note="All-day event in Central time. Leave the end date blank for a one-day event.">
     <div className="adm-2"><Input label="Start date" type="date" value={v.start} error={e('start')} onChange={x=>set({start:x.target.value})}/><Input label="End date" type="date" value={v.end} error={e('end')} onChange={x=>set({end:x.target.value})}/></div>
     {v.start&&<div className="adm-dim">{span({...v,end:v.end||v.start})}</div>}
    </Card>
    <Card title="Description">
     <Textarea label="Summary" hint="One line. Shows on the events list and at the top of the event page." value={v.hook} error={e('hook')} rows={2} onChange={x=>set({hook:x.target.value})} count={HOOK_MAX}/>
     <Textarea id="ev-desc" label="Full description" hint="Optional. Shows on the event page." value={v.desc} rows={5} onChange={x=>set({desc:x.target.value})}/>
    </Card>
    <Card title="Photo" note="Upload your own or pick from the park photo library.">
     <Uploader onFile={url=>set({upload:url,imageId:'upload'})}/>
     <div className="adm-photos" role="radiogroup" aria-label="Event photo">
      {v.upload&&<div className="adm-photo-up"><button type="button" role="radio" aria-checked={v.imageId==='upload'} className={cx('adm-photo',v.imageId==='upload'&&'is-on')} onClick={()=>set({imageId:'upload'})}><img src={v.upload} alt="Uploaded photo"/><span className="adm-photo__tag">Uploaded</span>{v.imageId==='upload'&&<span className="adm-photo__tick"><Icon name="check" size={16}/></span>}</button><button type="button" className="adm-photo__rm" aria-label="Remove uploaded photo" onClick={()=>set({upload:null,imageId:v.imageId==='upload'?null:v.imageId})}><Icon name="x" size={16}/></button></div>}
      <button type="button" role="radio" aria-checked={!v.imageId} className={cx('adm-photo adm-photo--none',!v.imageId&&'is-on')} onClick={()=>set({imageId:null})}><Icon name="image" size={22}/><span>No photo</span></button>
      {S.PHOTOS.map(p=><button key={p} type="button" role="radio" aria-checked={v.imageId===p} className={cx('adm-photo',v.imageId===p&&'is-on')} onClick={()=>set({imageId:p})}><img src={hpAsset(p)} alt={p.replace(/\.jpg$/,'').replace(/-/g,' ')}/>{v.imageId===p&&<span className="adm-photo__tick"><Icon name="check" size={16}/></span>}</button>)}
     </div>
    </Card>
    <Card title="Key facts" note="Up to 4. Shown as a strip on the event page.">
     <Rows rows={v.facts} onChange={facts=>set({facts})} labels={['Label','Value']} ph={['e.g. Gates','e.g. 8 AM daily']} max={4} add="Add a fact"/>
    </Card>
    <Card title="Schedule" note="Optional. One row per day or block.">
     <Rows rows={v.schedule} onChange={schedule=>set({schedule})} labels={['Day','What’s happening']} ph={['e.g. Saturday','e.g. Open riding · Night ride']} add="Add a schedule row"/>
    </Card>
    <Card title="Rates" note="What riders and spectators pay on these dates. Booking and checkout use these for the event days.">
     <div className="adm-radios" role="radiogroup" aria-label="Event rates">
      {MODES.map(([m,l,d])=><Radio key={m} name="ev-rates" value={m} label={l} description={m==='standard'?'$'+PS.day+' a day for days 1–2, $'+PS.dayLater+' from day 3 · kids '+PS.freeAge+' and under free · spectators free':d} checked={R.mode===m} onChange={()=>pick(m)}/>)}
     </div>
     {R.mode==='free'&&<div className="adm-free"><Icon name="users" size={20}/><span>Booking skips admission for these dates. The event page shows <strong>No charge · group ride</strong>.</span></div>}
     {paid&&<><div className="adm-rates">{RATE_F[R.mode].map(([k,l,u,money])=>{const id='er-'+k,er=(tried||R[k]!=='')&&rErr[k],std=k==='spectator'?0:k==='fixed'?null:PS[k],ch=std!=null&&whole(R[k])&&+R[k]!==std;
      return <div key={k} className={cx('adm-rate',ch&&'is-changed',er&&'is-error')}>
       <div className="adm-rate__l"><label htmlFor={id}>{l}</label>{std!=null&&<span className="adm-dim">Standard: {money?(std?'$'+std:'Free'):std}</span>}</div>
       <div className="adm-rate__c"><div className="adm-money">{money&&<span className="adm-money__pre" aria-hidden="true">$</span>}<input id={id} className={money?'':'adm-money--n'} inputMode="numeric" value={R[k]} onChange={x=>setR({[k]:x.target.value})} aria-invalid={!!er}/></div><span className="adm-rate__u">{u}</span></div>
       {er&&<div className="adm-rate__s"><span className="adm-rate__err">{er}</span></div>}</div>})}</div>
      <div className="adm-sub2"><div className="adm-rows__t">Extra fees</div><p className="adm-dim">Optional. Listed on the event page, e.g. vehicle registration or a vendor spot.</p></div>
      <Rows rows={R.extras} onChange={extras=>setR({extras})} labels={['Fee','Amount ($)']} ph={['e.g. Vehicle registration','e.g. 40']} max={6} add="Add a fee"/>
      {tried&&xErr&&<span className="adm-rate__err">Each extra fee needs a name and a whole-dollar amount.</span>}
     </>}
    </Card>
    <Card title="Extras"><Checkbox label="Mention the Jeep Badge of Honor" description="Adds a link to Uphill Both Ways on the event page." checked={!!v.jeep} onChange={x=>set({jeep:x.target.checked})}/></Card>
   </div>
   <aside className="adm-edit__side">
    <div className="adm-card adm-side"><div className="adm-side__h">Website preview</div>
     <div className="adm-prev"><div className="adm-prev__img">{prev.image?<img src={prev.image} alt=""/>:<span>No photo</span>}</div>
      <div className="adm-prev__body"><div className="adm-prev__meta">{v.type}{v.start?' · '+dates({...v,end:v.end||v.start}):''}</div>{v.status&&<div>{statusBadge(v.status)}</div>}<div className="adm-prev__t">{v.title||'Event name'}</div><p>{v.hook||'Summary goes here.'}</p></div></div>
     <dl className="adm-kv adm-kv--wide adm-prev__rates">{prevRates.map(([l,x],i)=><div key={i}><dt>{l}</dt><dd>{x}</dd></div>)}</dl>
    </div>
    <div className="adm-card adm-side"><div className="adm-side__h"><Icon name="calendar-check" size={18}/>Google Calendar entry</div>
     <dl className="adm-kv"><div><dt>Title</dt><dd>{g.summary||'—'}</dd></div><div><dt>When</dt><dd>{v.start?'All day · '+dates({...v,end:v.end||v.start}):'—'}</dd></div><div><dt>Where</dt><dd>{g.location}</dd></div><div><dt>Notes</dt><dd className="adm-kv__notes">{g.description||'—'}</dd></div></dl>
     <p className="adm-dim">{id?'Saving updates this entry in Google Calendar.':'Saving adds this entry to Google Calendar.'}</p>
    </div>
   </aside>
  </div>
  <div className="adm-savebar"><div className="adm-wrap adm-savebar__in">
   {id?<Button variant="ghost" icon="trash-2" className="adm-btn-danger-ghost" onClick={()=>setDel(true)}>Delete event</Button>:<span/>}
   <div className="adm-savebar__r">{dirty&&<span className="adm-dim adm-unsaved">Unsaved changes</span>}<Button variant="outline" onClick={cancel}>Cancel</Button><Button size="lg" icon="check" onClick={save}>{id?'Save changes':'Create event'}</Button></div>
  </div></div>
  <Dialog open={leave} title="Discard changes?" onClose={()=>setLeave(false)} footer={<><Button variant="outline" onClick={()=>setLeave(false)}>Keep editing</Button><Button variant="secondary" onClick={()=>nav('events')}>Discard</Button></>}><p className="adm-dialog-p">Your changes to this event haven’t been saved.</p></Dialog>
  <ConfirmDelete ev={del?orig:null} onCancel={()=>setDel(false)} onConfirm={()=>{const x=S.remove(orig.id);toast({msg:'Deleted '+x.title+'. Removed from the website and Google Calendar.',icon:'trash-2',action:'Undo',onAction:()=>S.restore(x)});nav('events')}}/>
 </>}

function Uploader({onFile}){const ref=React.useRef(null);const [over,setOver]=React.useState(false);const [msg,setMsg]=React.useState(null);const [busy,setBusy]=React.useState(false);
 const take=f=>{setMsg(null);if(!f)return;if(!/^image\/(jpeg|png|webp)$/.test(f.type)){setMsg(['error','Use a JPG, PNG or WebP image.']);return}if(f.size>15e6){setMsg(['error','That file is over 15 MB. Try a smaller one.']);return}
  setBusy(true);const r=new FileReader();r.onload=()=>{const img=new Image();img.onload=()=>{const W=1600,k=Math.min(1,W/img.width),c=document.createElement('canvas');c.width=Math.round(img.width*k);c.height=Math.round(img.height*k);c.getContext('2d').drawImage(img,0,0,c.width,c.height);
   onFile(c.toDataURL('image/jpeg',.78));setBusy(false);setMsg(img.width<1000?['warn','Uploaded. It’s only '+img.width+'px wide, so it may look soft on large screens.']:img.height>img.width?['warn','Uploaded. Tall photos get cropped on the website; landscape works best.']:['ok','Uploaded and selected.'])};img.onerror=()=>{setBusy(false);setMsg(['error','We couldn’t read that image.'])};img.src=r.result};r.readAsDataURL(f)};
 return <div className="adm-upwrap"><div className={cx('adm-drop',over&&'is-over')} onDragOver={e=>{e.preventDefault();setOver(true)}} onDragLeave={()=>setOver(false)} onDrop={e=>{e.preventDefault();setOver(false);take(e.dataTransfer.files[0])}}>
  <Icon name="camera" size={26}/><div><div className="adm-drop__t">{busy?'Uploading…':'Drag a photo here'}</div><div className="adm-dim">JPG, PNG or WebP · landscape, at least 1400px wide</div></div>
  <Button variant="secondary" size="sm" icon="plus" onClick={()=>ref.current&&ref.current.click()} disabled={busy}>Choose file</Button>
  <input ref={ref} type="file" accept="image/jpeg,image/png,image/webp" className="adm-hide" tabIndex={-1} onChange={e=>{take(e.target.files[0]);e.target.value=''}}/></div>
  {msg&&<div className={'adm-upmsg is-'+msg[0]} role="status">{msg[1]}</div>}</div>}
function Card({title,note,children}){return <section className="adm-card adm-fcard"><div className="adm-fcard__h"><h2 className="adm-h2">{title}</h2>{note&&<p className="adm-dim">{note}</p>}</div><div className="adm-fcard__b">{children}</div></section>}
function Rows({rows,onChange,labels,ph,max,add}){const upd=(i,j,x)=>onChange(rows.map((r,k)=>k===i?(j?[r[0],x]:[x,r[1]]):r));
 return <div className="adm-rows">{rows.length>0&&<div className="adm-rows__head" aria-hidden="true"><span>{labels[0]}</span><span>{labels[1]}</span><span/></div>}
  {rows.map((r,i)=><div key={i} className="adm-rows__r"><input className="adm-in" aria-label={labels[0]+' '+(i+1)} placeholder={ph[0]} value={r[0]} onChange={x=>upd(i,0,x.target.value)}/><input className="adm-in" aria-label={labels[1]+' '+(i+1)} placeholder={ph[1]} value={r[1]} onChange={x=>upd(i,1,x.target.value)}/><IconButton icon="x" variant="ghost" label={'Remove row '+(i+1)} onClick={()=>onChange(rows.filter((_,k)=>k!==i))}/></div>)}
  {(!max||rows.length<max)&&<div><Button variant="ghost" size="sm" icon="plus" onClick={()=>onChange([...rows,['','']])}>{add}</Button></div>}</div>}

Object.assign(window,{AdminApp});
})();
