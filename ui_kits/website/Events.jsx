(()=>{
const {EventCard,Tabs,Dialog,Button,Photo,Badge,Icon}=window.DS;
function EventDialog({ev,onClose,go}){return <Dialog open={!!ev} title={ev?ev.title:''} onClose={onClose} footer={ev&&ev.status!=='soldout'?<><Button variant="outline" onClick={onClose}>Close</Button><Button onClick={()=>{onClose();go('stay')}}>Book a stay</Button></>:<Button variant="outline" onClick={onClose}>Close</Button>}>
 {ev&&<div style={{display:'flex',flexDirection:'column',gap:12}}><Photo src={ev.image} caption="Event photo" ratio="16/9"/><div style={{display:'flex',gap:14,flexWrap:'wrap',color:'var(--text-muted)'}}><span style={{display:'flex',gap:6,alignItems:'center'}}><Icon name="calendar-days" size={16}/>{ev.dates}</span><span style={{display:'flex',gap:6,alignItems:'center'}}><Icon name="ticket" size={16}/>{ev.price}</span></div>
 <p style={{margin:0}}>Gates open at 8 AM. Cabins and RV pads book fast on event weekends — reserve early.</p></div>}</Dialog>}
function Events({go}){const [v,setV]=React.useState('list');const [ev,setEv]=React.useState(null);const D=window.HP_DATA.events;
 return <Section eyebrow="Calendar" title="Events & open weekends" action={<Tabs value={v} onChange={setV} items={[{id:'list',label:'List',icon:'list'},{id:'grid',label:'Grid',icon:'grid-2x2'}]}/>}>
  {v==='list'?<div style={{display:'flex',flexDirection:'column',gap:10,maxWidth:760}}>{D.map(e=><EventCard key={e.id} layout="row" {...e} onClick={()=>setEv(e)}/>)}</div>
  :<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>{D.map(e=><EventCard key={e.id} {...e} onClick={()=>setEv(e)}/>)}</div>}
  <EventDialog ev={ev} onClose={()=>setEv(null)} go={go}/>
 </Section>}
Object.assign(window,{Events,EventDialog});
})();