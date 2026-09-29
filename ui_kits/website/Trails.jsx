(()=>{
const {Tabs,TrailRow,Photo,Alert,Dialog,DifficultyBadge,Button,Icon,Badge}=window.DS;
function Trails(){const [f,setF]=React.useState('all');const [t,setT]=React.useState(null);const D=window.HP_DATA.trails;
 const list=f==='all'?D:D.filter(x=>x.level===f);
 return <Section eyebrow="Trails & map" title="Ride what you came for. Find what you didn't.">
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:24,alignItems:'start'}}>
   <div style={{display:'flex',flexDirection:'column',gap:14}}>
    <Alert tone="warning" title="Trail #42 closed this weekend">Washout on the upper ledge. Everything else is open.</Alert>
    <Tabs variant="pill" value={f} onChange={setF} items={[{id:'all',label:'All'},{id:'easy',label:'Easy'},{id:'moderate',label:'Moderate'},{id:'difficult',label:'Difficult'},{id:'extreme',label:'Extreme'}]}/>
    <div style={{background:'var(--surface-card)',border:'1px solid var(--border-subtle)',borderRadius:6,padding:'0 12px'}}>{list.map(x=><TrailRow key={x.number} {...x} onClick={()=>setT(x)}/>)}</div>
   </div>
   <div style={{position:'sticky',top:84}}><div className="hp-card"><Photo caption="Park trail map" ratio="4/5"/><div className="hp-card__body" style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}><div style={{display:'flex',gap:12,flexWrap:'wrap'}}>{['easy','moderate','difficult','extreme'].map(l=><DifficultyBadge key={l} level={l}/>)}</div><Button size="sm" variant="outline" icon="download">PDF</Button></div></div></div>
  </div>
  <Dialog open={!!t} title={t?t.number+' · '+t.name:''} onClose={()=>setT(null)} footer={<Button onClick={()=>setT(null)}>Close</Button>}>
   {t&&<div style={{display:'flex',flexDirection:'column',gap:14}}><Photo caption="Trail photo" ratio="16/9"/><div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center'}}><DifficultyBadge level={t.level}/>{t.status==='closed'?<Badge tone="danger">Closed</Badge>:<Badge tone="success">Open</Badge>}</div>
   <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,fontSize:15}}><div><div style={{color:'var(--text-muted)',fontSize:13}}>Vehicles</div>{t.vehicles}</div><div><div style={{color:'var(--text-muted)',fontSize:13}}>Length</div>{t.length}</div></div></div>}
  </Dialog>
 </Section>}
window.Trails=Trails;
})();