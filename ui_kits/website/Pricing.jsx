(()=>{
const {PriceCard,Button,QuantityStepper,Alert,Toast}=window.DS;
function Pricing(){const [sel,setSel]=React.useState(2);const [r,setR]=React.useState(2);const [k,setK]=React.useState(0);const [ok,setOk]=React.useState(false);const D=window.HP_DATA.passes;const p=D.find(x=>x.id===sel);
 return <Section eyebrow="Admission" title="Riding passes">
  <Alert tone="info" title="We're a weekend park">Open Friday through Sunday, plus holiday and event dates. Children under 10 ride free.</Alert>
  <div className="kit-g4 kit-g4--stack" style={{margin:'20px 0 28px'}}>{D.map(x=><PriceCard key={x.id} title={x.title} price={x.price} unit="/ rider" description={x.desc} features={x.features} highlight={sel===x.id} badge={x.badge} action={<Button block variant={sel===x.id?'primary':'outline'} onClick={()=>setSel(x.id)}>{sel===x.id?'Selected':'Select'}</Button>}/>)}</div>
  <div className="hp-card hp-card--raised" style={{padding:'8px 20px 20px',maxWidth:520}}>
   <QuantityStepper label="Riders" description={'$'+p.price+' each · ages 10+'} value={r} min={1} onChange={setR}/>
   <QuantityStepper label="Kids under 10" description="Free" value={k} onChange={setK}/>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderTop:'1px solid var(--border-subtle)',paddingTop:14,marginTop:4}}><div className="hp-price">${p.price*r}</div><Button size="lg" onClick={()=>setOk(true)}>{`Buy ${p.title.toLowerCase()}es`}</Button></div></div>
  {ok&&<div style={{position:'fixed',bottom:24,left:'50%',transform:'translateX(-50%)',zIndex:40}}><Toast message={r+' × '+p.title+' added'} actionLabel="Dismiss" onAction={()=>setOk(false)}/></div>}
 </Section>}
window.Pricing=Pricing;
})();