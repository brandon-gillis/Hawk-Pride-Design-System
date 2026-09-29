(()=>{
const {Photo,Button,IconButton,BookingBar,Dialog,QuantityStepper,Input,Checkbox,Radio,Icon,Badge,Alert,Toast}=window.DS;
const nights=2;
function Row({l,v,b}){return <div style={{display:'flex',justifyContent:'space-between',gap:12,fontSize:15,fontWeight:b?700:400,color:b?'var(--text-strong)':'inherit'}}><span>{l}</span><span>{v}</span></div>}
function Lodging({item,back,checkout}){const [g,setG]=React.useState(false);const [a,setA]=React.useState(2);const [k,setK]=React.useState(1);const [saved,setSaved]=React.useState(false);
 const am=[['plug-zap','50 amp electric'],['droplets','Water hookup'],['shower-head','Bathhouse nearby'],['flame','Fire ring'],['wifi-off','No Wi-Fi — you are here to ride'],['dog','Pets welcome']];
 return <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'20px var(--container-pad) 0'}}>
  <button onClick={back} className="hp-btn hp-btn--ghost hp-btn--sm" style={{marginLeft:-10}}><Icon name="arrow-left" size={16}/>All lodging</button>
  <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:8,marginTop:10,borderRadius:6,overflow:'hidden'}}><Photo caption={item.kind+' · exterior'} ratio="16/10" topRight={<IconButton icon="heart" label="Save" variant="dark" onClick={()=>setSaved(true)}/>}/><div style={{display:'grid',gap:8}}><Photo caption="Interior" ratio="auto" style={{aspectRatio:'auto'}}/><Photo caption="View" ratio="auto" style={{aspectRatio:'auto'}}/></div></div>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:32,padding:'24px 0 48px',alignItems:'start'}}>
   <div><div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>{item.kind}</div><h1 className="hp-display" style={{fontSize:'var(--fs-h1)',margin:'6px 0 8px',lineHeight:1}}>{item.name}</h1>
    <div className="hp-card__meta" style={{fontSize:15}}>{item.sleeps&&<span><Icon name="users" size={16}/>Sleeps {item.sleeps}</span>}{item.features.map(f=><span key={f}>{f}</span>)}</div>
    <p style={{fontSize:17,lineHeight:1.55,margin:'18px 0'}}>A short walk from the registration area and trailheads. Check-in from 2 PM Friday, check-out by noon Sunday.</p>
    <h3 className="hp-card__title" style={{margin:'24px 0 12px'}}>What's here</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:12}}>{am.map(([i,t])=><div key={t} style={{display:'flex',gap:10,alignItems:'center'}}><Icon name={i} size={20}/>{t}</div>)}</div></div>
   <div className="hp-card hp-card--raised" style={{padding:20,gap:14,position:'sticky',top:84}}>
    <div className="hp-price">${item.price}<small>/ night</small></div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',border:'1.5px solid var(--border-default)',borderRadius:4}}><div style={{padding:'8px 12px',borderRight:'1.5px solid var(--border-default)'}}><div style={{fontSize:12,fontWeight:600}}>ARRIVE</div>Fri, Apr 24</div><div style={{padding:'8px 12px'}}><div style={{fontSize:12,fontWeight:600}}>DEPART</div>Sun, Apr 26</div>
     <button onClick={()=>setG(true)} style={{gridColumn:'1/-1',borderTop:'1.5px solid var(--border-default)',background:'none',border:0,borderTopStyle:'solid',padding:'8px 12px',textAlign:'left',font:'inherit',cursor:'pointer',display:'flex',justifyContent:'space-between'}}><span><div style={{fontSize:12,fontWeight:600}}>GUESTS</div>{a} adults{k?', '+k+' kid':''}</span><Icon name="chevron-down" size={18}/></button></div>
    <Button block size="lg" onClick={()=>checkout({a,k})}>Reserve</Button>
    <Row l={'$'+item.price+' × '+nights+' nights'} v={'$'+item.price*nights}/><Row l="Taxes & fees" v={'$'+Math.round(item.price*nights*.1)}/>
    <div style={{borderTop:'1px solid var(--border-subtle)',paddingTop:10}}><Row b l="Total" v={'$'+Math.round(item.price*nights*1.1)}/></div>
    <div style={{fontSize:13,color:'var(--text-muted)'}}>Riding passes are purchased separately at the gate or online.</div></div>
  </div>
  <Dialog open={g} title="Guests" onClose={()=>setG(false)} footer={<Button onClick={()=>setG(false)}>Done</Button>}><QuantityStepper label="Adults" description="Ages 10 and up" value={a} min={1} max={item.sleeps||8} onChange={setA}/><QuantityStepper label="Kids" description="Under 10" value={k} onChange={setK}/></Dialog>
  {saved&&<div style={{position:'fixed',bottom:90,left:'50%',transform:'translateX(-50%)',zIndex:40}} onClick={()=>setSaved(false)}><Toast message={item.name+' saved to your trip'} actionLabel="Undo" onAction={()=>setSaved(false)}/></div>}
 </div>}
function Checkout({item,guests,back,done}){const [agree,setAgree]=React.useState(false);const [err,setErr]=React.useState(false);const tot=Math.round(item.price*nights*1.1);
 return <div style={{maxWidth:980,margin:'0 auto',padding:'20px var(--container-pad) 56px'}}>
  <button onClick={back} className="hp-btn hp-btn--ghost hp-btn--sm" style={{marginLeft:-10}}><Icon name="arrow-left" size={16}/>Back</button>
  <h1 className="hp-display" style={{fontSize:'var(--fs-h1)',margin:'8px 0 20px'}}>Confirm your stay</h1>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:28,alignItems:'start'}}>
   <div style={{display:'flex',flexDirection:'column',gap:16}}>
    <h3 className="hp-card__title" style={{fontSize:20}}>Your details</h3>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}><Input label="First name" defaultValue="Jess"/><Input label="Last name" defaultValue="Carter"/></div>
    <Input label="Email" type="email" defaultValue="jess@example.com" hint="We'll send your confirmation here"/><Input label="Phone" defaultValue="(256) 555-0142"/>
    <h3 className="hp-card__title" style={{fontSize:20,marginTop:10}}>Add-ons</h3>
    <Checkbox label="Firewood bundle" description="$10 · delivered to your site"/><Checkbox label="Bag of ice" description="$4 · pick up at registration"/>
    <h3 className="hp-card__title" style={{fontSize:20,marginTop:10}}>Payment</h3>
    <Radio name="pay" label="Pay in full now" defaultChecked/><Radio name="pay" label="Pay 50% deposit" description="Balance due at check-in"/>
    <Input label="Card number" icon="credit-card" placeholder="1234 1234 1234 1234"/>
    {err&&<Alert tone="danger" title="One more thing">Please agree to the park rules and waiver.</Alert>}
    <Checkbox label="I agree to the park rules and liability waiver" checked={agree} onChange={e=>{setAgree(e.target.checked);setErr(false)}}/>
    <Button size="lg" block onClick={()=>agree?done():setErr(true)}>Pay ${tot}</Button></div>
   <div className="hp-card" style={{position:'sticky',top:84}}><Photo caption={item.kind} ratio="16/9"/><div className="hp-card__body" style={{gap:10}}><div className="hp-eyebrow" style={{color:'var(--text-muted)'}}>{item.kind}</div><h3 className="hp-card__title">{item.name}</h3>
    <Row l="Dates" v="Apr 24 – 26"/><Row l="Guests" v={guests.a+' adults'+(guests.k?', '+guests.k+' kid':'')}/><Row l={nights+' nights'} v={'$'+item.price*nights}/><Row l="Taxes & fees" v={'$'+Math.round(item.price*nights*.1)}/>
    <div style={{borderTop:'1px solid var(--border-subtle)',paddingTop:10}}><Row b l="Total" v={'$'+tot}/></div></div></div>
  </div></div>}
function Confirmation({item,go}){return <div style={{maxWidth:640,margin:'0 auto',padding:'56px var(--container-pad)',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:14}}>
  <div style={{width:64,height:64,borderRadius:'50%',background:'var(--gold-400)',display:'grid',placeItems:'center'}}><Icon name="check" size={32}/></div>
  <h1 className="hp-display" style={{fontSize:'var(--fs-h1)',margin:0}}>You're booked</h1>
  <p style={{margin:0,fontSize:17}}>{item.name} · Fri, Apr 24 – Sun, Apr 26</p>
  <div style={{fontFamily:'var(--font-mono)',fontSize:20,padding:'10px 16px',background:'var(--bg-sunken)',borderRadius:4}}>HP-7K2Q9</div>
  <p style={{margin:0,color:'var(--text-muted)',maxWidth:440}}>Check in at the registration building when you arrive. Buy riding passes online now to skip the line at the gate.</p>
  <div style={{display:'flex',gap:12,flexWrap:'wrap',justifyContent:'center',marginTop:8}}><Button onClick={()=>go('pricing')}>Buy riding passes</Button><Button variant="outline" icon="map-pin">Directions</Button></div></div>}
Object.assign(window,{Lodging,Checkout,Confirmation,BookingBar});
})();