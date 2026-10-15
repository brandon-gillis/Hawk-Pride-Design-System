(()=>{
const {Icon,IconButton,Badge}=window.DS;
// Public month view. In production this reads the Google Calendar feed (HP_EVENTS.GCAL).
function EventCalendar({events,onOpen}){
 const first=(events.find(e=>e.end>=HP.today)||events[0]||{start:HP.today}).start;
 const [m,setM]=React.useState(()=>{const d=HP.p(first);return [d.getFullYear(),d.getMonth()]});
 const [y,mo]=m;const start=new Date(y,mo,1),lead=start.getDay(),days=new Date(y,mo+1,0).getDate();
 const cells=[];for(let i=0;i<lead;i++)cells.push(null);for(let d=1;d<=days;d++)cells.push(HP.iso(new Date(y,mo,d)));while(cells.length%7)cells.push(null);
 const on=s=>events.filter(e=>s>=e.start&&s<=(e.end||e.start));
 const inMonth=events.filter(e=>{const a=HP.iso(start),b=HP.iso(new Date(y,mo,days));return e.start<=b&&(e.end||e.start)>=a});
 const step=n=>setM(([yy,mm])=>{const d=new Date(yy,mm+n,1);return [d.getFullYear(),d.getMonth()]});
 const label=new Date(y,mo,1).toLocaleString('en-US',{month:'long',year:'numeric'});
 return <div className="ecal">
  <div className="ecal__bar"><h2 className="hp-display hp-h3 ecal__title" aria-live="polite">{label}</h2>
   <div className="hp-cluster"><IconButton icon="chevron-left" label="Previous month" onClick={()=>step(-1)}/><IconButton icon="chevron-right" label="Next month" onClick={()=>step(1)}/></div></div>
  <div className="ecal__grid" role="grid" aria-label={label}>
   {HP.W.map(w=><div key={w} className="ecal__dow" role="columnheader">{w}</div>)}
   {cells.map((s,i)=>{if(!s)return <div key={'x'+i} className="ecal__cell ecal__cell--empty"/>;const E=on(s),d=HP.p(s),wk=d.getDay()===0;
    return <div key={s} role="gridcell" className={cx('ecal__cell',s===HP.today&&'is-today',HP.open(s)&&!E.length&&'is-open')}>
     <span className="ecal__n">{d.getDate()}</span>
     {E.map(e=>{const head=s===e.start||wk;return <button key={e.id} type="button" onClick={()=>onOpen(e)} className={cx('ecal__ev',s===e.start&&'is-start',s===(e.end||e.start)&&'is-end',e.status==='soldout'&&'is-full')} aria-label={e.title+', '+HP.range(e.start,e.end)} tabIndex={s===e.start?0:-1}>{head&&<span className="ecal__lbl">{e.title}</span>}</button>})}
    </div>})}
  </div>
  <div className="ecal__legend"><span><i className="ecal__sw ecal__sw--ev"/>Event</span><span><i className="ecal__sw ecal__sw--open"/>Open riding (Fri – Sun)</span></div>
  <ul className="ecal__agenda">{inMonth.length?inMonth.map(e=><li key={e.id}><button type="button" onClick={()=>onOpen(e)} className="ecal__item"><span className="hp-eyebrow hp-eyebrow--accent">{HP.range(e.start,e.end)}</span><span className="ecal__item-t">{e.title}</span><Icon name="chevron-right" size={18}/></button></li>):<li className="hp-muted">No events this month. The park is open every Friday to Sunday.</li>}</ul>
 </div>}
Object.assign(window,{EventCalendar});
})();
