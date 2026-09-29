(()=>{
const {SiteHeader,Alert,Icon,Button}=window.DS;
const LINKS=[{id:'trails',label:'Trails'},{id:'events',label:'Events'},{id:'stay',label:'Stay'},{id:'pricing',label:'Pricing'}];
function MobileMenu({open,onClose,go}){if(!open)return null;
 return <div style={{position:'fixed',inset:0,zIndex:60,background:'var(--black-950)',color:'var(--stone-50)',display:'flex',flexDirection:'column',padding:'16px var(--container-pad)'}}>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:48}}><span className="hp-header__brand"><img src="../../assets/logo/brandmark-gold.svg" alt="" style={{height:42}}/><span className="hp-header__name" style={{fontSize:16}}><span>Hawk Pride</span><span>Offroad</span></span></span><window.DS.IconButton icon="x" label="Close" variant="dark" onClick={onClose}/></div>
  <nav style={{display:'flex',flexDirection:'column',marginTop:24}}>{LINKS.map(l=><button key={l.id} onClick={()=>{go(l.id);onClose()}} className="hp-display" style={{background:'none',border:0,borderBottom:'1px solid var(--border-inverse)',color:'var(--stone-50)',fontSize:40,textAlign:'left',padding:'14px 0',cursor:'pointer'}}>{l.label}</button>)}</nav>
  <div style={{marginTop:'auto'}}><Button block size="lg" onClick={()=>{go('stay');onClose()}}>Book a stay</Button></div></div>}
function Shell({page,go,children}){const [m,setM]=React.useState(false);
 return <div className={'hp-root'+(new URLSearchParams(location.search).get('case')==='sentence'?' hp-case-sentence':'')} style={{background:'var(--bg-page)',minHeight:'100vh'}}>
  <Alert tone="status" title="Open this weekend">Gates 8 AM · Riding until 10 PM Fri & Sat</Alert>
  <SiteHeader logoSrc="../../assets/logo/brandmark-gold.svg" links={LINKS} current={page} onNavigate={go} onBook={()=>go('stay')} onMenu={()=>setM(true)}/>
  <MobileMenu open={m} onClose={()=>setM(false)} go={go}/>
  <main>{children}</main>
  <Footer go={go}/></div>}
function Footer({go}){const P=window.HP_DATA.park;
 const col=(t,items)=><div style={{display:'flex',flexDirection:'column',gap:10}}><div className="hp-eyebrow" style={{color:'var(--gold-400)'}}>{t}</div>{items}</div>;
 const a=(l,id)=><a key={l} href="#" onClick={e=>{e.preventDefault();go(id)}} style={{color:'var(--text-inverse-muted)',textDecoration:'none',cursor:'pointer',minHeight:28,display:'inline-flex',alignItems:'center'}}>{l}</a>;
 return <footer style={{background:'var(--black-950)',color:'var(--stone-50)',borderTop:'3px solid var(--gold-400)'}}>
  <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'48px var(--container-pad) 28px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:32}}>
   <div style={{display:'flex',flexDirection:'column',gap:14}}><img src="../../assets/logo/brandmark-gold.svg" alt="Hawk Pride Offroad" style={{width:160}}/><div className="hp-display" style={{color:'var(--gold-400)',fontSize:22}}>Go conquer something.</div></div>
   {col('Visit',[<span key="a" style={{color:'var(--text-inverse-muted)',display:'flex',gap:8}}><Icon name="map-pin" size={18}/>{P.address}</span>,<span key="p" style={{color:'var(--text-inverse-muted)',display:'flex',gap:8}}><Icon name="phone" size={18}/>{P.phone}</span>])}
   {col('Park',[a('Trails','trails'),a('Events','events'),a('Stay','stay'),a('Pricing','pricing')])}
   {col('Hours',[<span key="h" style={{color:'var(--text-inverse-muted)'}}>Fri–Sat · 8 AM–10 PM<br/>Sun · 8 AM–6 PM<br/>Closed Mon–Thu</span>])}
  </div>
  <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'16px var(--container-pad) 28px',borderTop:'1px solid var(--border-inverse)',fontSize:13,color:'var(--text-inverse-muted)'}}>© Hawk Pride Offroad Adventure Park · Tuscumbia, Alabama</div>
 </footer>}
function Section({eyebrow,title,action,children,dark,style}){
 return <section className={dark?'hp-on-dark':''} style={{background:dark?'var(--black-950)':'transparent',color:dark?'var(--stone-50)':'inherit',...style}}><div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'56px var(--container-pad)'}}>
  {(title||eyebrow)&&<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:16,marginBottom:24,flexWrap:'wrap'}}><div>{eyebrow&&<div className="hp-eyebrow" style={{color:dark?'var(--gold-400)':'var(--gold-700)'}}>{eyebrow}</div>}{eyebrow&&<span className="hp-rule" style={{margin:'8px 0 12px'}}/>}<h2 className="hp-display" style={{margin:0,fontSize:'var(--fs-h1)',lineHeight:1,color:dark?'var(--stone-50)':'var(--text-strong)'}}>{title}</h2></div>{action}</div>}
  {children}</div></section>}
Object.assign(window,{Shell,Section});
})();