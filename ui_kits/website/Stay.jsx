(()=>{
const {LodgingCard,Tabs,Switch}=window.DS;
function Stay({openLodging}){const [f,setF]=React.useState('all');const [av,setAv]=React.useState(false);const D=window.HP_DATA.lodging;
 const list=D.filter(l=>(f==='all'||l.kind===f)&&(!av||l.available));
 return <Section eyebrow="Stay the weekend" title="Cabins, RV pads & camping">
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,flexWrap:'wrap',marginBottom:20}}>
   <Tabs variant="pill" value={f} onChange={setF} items={[{id:'all',label:'All'},{id:'Cabin',label:'Cabins'},{id:'RV site',label:'RV sites'},{id:'Camping',label:'Camping'}]}/>
   <Switch label="Available Apr 24–26" checked={av} onChange={e=>setAv(e.target.checked)}/></div>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>{list.map(l=><LodgingCard key={l.id} {...l} onClick={()=>openLodging(l)}/>)}</div>
 </Section>}
window.Stay=Stay;
})();