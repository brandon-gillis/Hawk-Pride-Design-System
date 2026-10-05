(()=>{
const {SiteHeader,Alert,Icon,Button,IconButton}=window.DS;
const LINKS=[{id:'home',label:'Home'},{id:'events',label:'Events'},{id:'trails',label:'Trails'},{id:'rates',label:'Rates'},{id:'cabins',label:'Cabins'},{id:'camping',label:'Camping'},{id:'groups',label:'Groups'},{id:'rules',label:'Rules'},{id:'contact',label:'Contact'}];
const Ctx=React.createContext(null);const useApp=()=>React.useContext(Ctx);
const LOGO=hpAsset('logo');
function MobileMenu({open,onClose}){const {go,book}=useApp();if(!open)return null;
 return <div className="hp-on-dark" style={{position:'fixed',inset:0,zIndex:60,background:'var(--black-950)',color:'var(--stone-50)',display:'flex',flexDirection:'column',padding:'16px var(--container-pad)',overflow:'auto'}}>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:48}}><span className="hp-header__brand"><img src={LOGO} alt="" style={{height:42}}/><span className="hp-header__name" style={{fontSize:16}}><span>Hawk Pride</span><span>Offroad</span></span></span><IconButton icon="x" label="Close" variant="dark" onClick={onClose}/></div>
  <nav style={{display:'flex',flexDirection:'column',marginTop:16}}>{LINKS.map(l=><button key={l.id} onClick={()=>{go(l.id);onClose()}} className="hp-display" style={{background:'none',border:0,borderBottom:'1px solid var(--border-inverse)',color:'var(--stone-50)',fontSize:34,textAlign:'left',padding:'10px 0',cursor:'pointer'}}>{l.label}</button>)}</nav>
  <div style={{marginTop:24}}><Button block size="lg" onClick={()=>{book();onClose()}}>Book Now</Button></div></div>}
function Shell({page,children}){const {go,book}=useApp();const [m,setM]=React.useState(false);const P=window.HP_DATA.park;
 return <div className="hp-root" style={{background:'var(--bg-page)',minHeight:'100vh'}}>
  {HP.notices('site').map(n=><Alert key={n.title} tone={n.tone} title={n.title}>{n.text}</Alert>)}
  <div className="proto-header"><SiteHeader logoSrc={LOGO} links={LINKS} current={page} onNavigate={go} onBook={()=>book()} ctaLabel="Book Now" onMenu={()=>setM(true)}/></div>
  <MobileMenu open={m} onClose={()=>setM(false)}/>
  <main>{children}</main>
  <Footer/></div>}
function Footer(){const {go,reset}=useApp();const P=window.HP_DATA.park;
 const col=(t,items)=><div style={{display:'flex',flexDirection:'column',gap:8}}><div className="hp-eyebrow" style={{color:'var(--gold-400)'}}>{t}</div>{items}</div>;
 const a=(l,id)=><a key={l} href={'#/'+id} onClick={e=>{e.preventDefault();go(id)}} className="proto-footlink">{l}</a>;
 return <footer style={{background:'var(--black-950)',color:'var(--stone-50)',borderTop:'3px solid var(--gold-400)'}}>
  <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'48px var(--container-pad) 28px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(170px,1fr))',gap:32}}>
   <div style={{display:'flex',flexDirection:'column',gap:14}}><img src={LOGO} alt="Hawk Pride" style={{width:150}}/><div className="hp-display" style={{color:'var(--gold-400)',fontSize:22}}>Go conquer something.</div></div>
   {col('Visit',[<span key="a" className="proto-foottext"><Icon name="map-pin" size={18}/>{P.address}</span>,<a key="p" href={'tel:'+P.tel} className="proto-footlink"><Icon name="phone" size={18}/>{P.phone}</a>,<a key="e" href={'mailto:'+P.email} className="proto-footlink"><Icon name="mail" size={18}/>Email us</a>])}
   {col('Park',[a('Events','events'),a('Trails','trails'),a('Rates','rates'),a('Cabins','cabins'),a('Camping','camping'),a('Groups','groups')])}
   {col('Before you come',[a('Rules','rules'),a('Sign a waiver','rules/waiver'),a('Find my trip','confirmation'),a('FAQ','faq'),a('Gallery','gallery'),a('Contact','contact')])}
   {col('Hours',P.hours.map(([d,h])=><span key={d} className="proto-foottext" style={{justifyContent:'space-between',maxWidth:200}}><span>{d}</span><span>{h}</span></span>))}
  </div>
  <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'16px var(--container-pad) 28px',borderTop:'1px solid var(--border-inverse)',fontSize:13,color:'var(--text-inverse-muted)',display:'flex',gap:20,flexWrap:'wrap',alignItems:'center'}}>
   <span>© {P.name} · Tuscumbia, Alabama</span>
   <span style={{display:'flex',gap:16}} title="Pages not yet approved: shown as labels only">{['Partners','Host an event','Refund policy','Terms'].map(x=><span key={x}>{x}</span>)}</span>
   <span style={{display:'flex',gap:10,marginLeft:'auto'}}>{P.social.map(([l,i])=><span key={l} aria-label={l}><Icon name={i} size={20}/></span>)}</span>
   <a href="#/gate" onClick={e=>{e.preventDefault();go('gate')}} className="proto-footlink" style={{fontSize:12,minHeight:0}}>Gate check-in (staff demo)</a><button onClick={reset} style={{background:'none',border:'1px solid var(--border-inverse)',color:'var(--text-inverse-muted)',borderRadius:4,padding:'4px 10px',font:'inherit',fontSize:12,cursor:'pointer'}}>Reset demo</button>
  </div></footer>}
function Section({eyebrow,title,action,intro,children,dark,sunken,style,id}){
 return <section id={id} className={dark?'hp-on-dark':''} style={{background:dark?'var(--black-950)':sunken?'var(--bg-sunken)':'transparent',color:dark?'var(--stone-50)':'inherit',...style}}><div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'64px var(--container-pad)'}}>
  {(title||eyebrow)&&<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:16,marginBottom:28,flexWrap:'wrap'}}><div style={{maxWidth:720}}>{eyebrow&&<div className="hp-eyebrow" style={{color:dark?'var(--gold-400)':'var(--gold-700)'}}>{eyebrow}</div>}{eyebrow&&<span className="hp-rule" style={{margin:'8px 0 12px'}}/>}<h2 className="hp-display" style={{margin:0,fontSize:'var(--fs-h1)',lineHeight:1,color:dark?'var(--stone-50)':'var(--text-strong)',textWrap:'balance'}}>{title}</h2>{intro&&<p style={{margin:'14px 0 0',fontSize:17,lineHeight:1.55,color:dark?'var(--stone-200)':'var(--text-muted)',textWrap:'pretty'}}>{intro}</p>}</div>{action}</div>}
  {children}</div></section>}
function PageHead({eyebrow,title,intro,actions,image,imageAlt,position}){
 return <div className="hp-on-dark" style={{background:'var(--black-950)',color:'var(--stone-50)',overflow:'hidden'}}>
  <div className="proto-pagehead" style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--container-pad)'}}>
   <div style={{padding:'56px 0 48px',display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
    <div className="hp-eyebrow" style={{color:'var(--gold-400)'}}>{eyebrow}</div><span className="hp-rule" style={{margin:'10px 0 14px'}}/>
    <h1 className="hp-display" style={{margin:0,fontSize:'var(--fs-display-l)',lineHeight:.95,textWrap:'balance'}}>{title}</h1>
    {intro&&<p style={{margin:'16px 0 0',fontSize:18,lineHeight:1.55,color:'var(--stone-200)',maxWidth:560,textWrap:'pretty'}}>{intro}</p>}
    {actions&&<div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:24}}>{actions}</div>}
   </div>
   {image!==undefined&&<div className="proto-pagehead__img"><window.DS.Photo src={image||undefined} caption={image?undefined:imageAlt} alt={imageAlt} position={position} ratio="auto" style={{position:'absolute',inset:0,aspectRatio:'auto',borderRadius:0}}/></div>}
  </div></div>}
function Row({l,v,b,muted}){return <div style={{display:'flex',justifyContent:'space-between',gap:12,fontSize:b?17:15,fontWeight:b?700:400,color:b?'var(--text-strong)':muted?'var(--text-muted)':'inherit'}}><span>{l}</span><span style={{textAlign:'right'}}>{v}</span></div>}
function TextLink({to,children,onClick,dark}){const {go}=useApp();return <a href={to?'#/'+to:'#'} onClick={e=>{e.preventDefault();onClick?onClick():go(to)}} style={{color:dark?'var(--gold-400)':'var(--text-strong)',fontWeight:700,textDecoration:'underline',textUnderlineOffset:3,textDecorationColor:'var(--gold-400)',textDecorationThickness:2,cursor:'pointer'}}>{children}</a>}
function Callout({children,dark}){return <div style={{display:'flex',gap:10,alignItems:'flex-start',fontSize:15,color:dark?'var(--stone-200)':'var(--text-muted)'}}><Icon name="info" size={18} style={{flex:'none',marginTop:2}}/><span>{children}</span></div>}
Object.assign(window,{Shell,Section,PageHead,Row,TextLink,Callout,AppCtx:Ctx,useApp,HP_LINKS:LINKS,HP_LOGO:LOGO});
})();
