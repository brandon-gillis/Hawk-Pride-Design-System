(()=>{
const D=window.DS;const {SiteHeader,Alert,Icon,Button,IconButton,Photo}=D;
const LINKS=[{id:'home',label:'Home'},{id:'events',label:'Events'},{id:'trails',label:'Trails'},{id:'rates',label:'Rates'},{id:'cabins',label:'Cabins'},{id:'camping',label:'Camping'},{id:'groups',label:'Groups'},{id:'rules',label:'Rules'},{id:'contact',label:'Contact'}];
const Ctx=React.createContext(null);const useApp=()=>React.useContext(Ctx);
const LOGO=hpAsset('logo');
const cx=(...a)=>a.filter(Boolean).join(' ');
/* Page patterns. Same markup and props as the DS components of the same name (components/layout, content, core, feedback); the DS version is used once the bundle includes it. */
const ds=(n,local)=>D[n]||local;
const Section=ds('Section',function Section({eyebrow,title,intro,action,dark,sunken,id,className,children,level=2}){const H='h'+level;
 return <section id={id} className={cx('hp-section',dark&&'hp-section--dark hp-on-dark',sunken&&'hp-section--sunken',className)}><div className="hp-container">
  {(title||eyebrow)&&<div className="hp-sechead"><div className="hp-sechead__text">{eyebrow&&<><div className="hp-eyebrow hp-eyebrow--accent">{eyebrow}</div><span className="hp-rule"/></>}{title&&<H className="hp-display hp-h1">{title}</H>}{intro&&<p className="hp-lede">{intro}</p>}</div>{action}</div>}
  {children}</div></section>});
const PageHead=ds('PageHero',function PageHero({eyebrow,title,intro,actions,image,imageAlt,position}){const media=image!==undefined;
 return <div className="hp-pagehero hp-on-dark"><div className={cx('hp-container hp-pagehero__inner',!media&&'hp-pagehero__inner--text')}>
  <div className="hp-pagehero__text">{eyebrow&&<><div className="hp-eyebrow hp-eyebrow--accent">{eyebrow}</div><span className="hp-rule"/></>}
   <h1 className="hp-display hp-display-l">{title}</h1>
   {intro&&<p className="hp-hero__lede">{intro}</p>}
   {actions&&<div className="hp-actions">{actions}</div>}</div>
  {media&&<div className="hp-pagehero__media"><Photo src={image||undefined} caption={image?undefined:imageAlt} alt={imageAlt} position={position} ratio="auto" className="hp-photo--fill"/></div>}
 </div></div>});
const CtaBand=ds('CtaBand',function CtaBand({title,text,action,tone='dark',eyebrow}){
 return <section className={cx('hp-band hp-band--'+tone,tone==='dark'&&'hp-on-dark')}><div className="hp-container hp-band__inner">
  <div>{eyebrow&&<div className="hp-eyebrow hp-eyebrow--accent">{eyebrow}</div>}<h2 className="hp-display hp-h2">{title}</h2>{text&&<p className="hp-band__text">{text}</p>}</div>
  {action}</div></section>});
const Row=ds('SummaryRow',function SummaryRow({label,value,total,muted}){return <div className={cx('hp-kv',total&&'hp-kv--total',muted&&'hp-kv--muted')}><span>{label}</span><span className="hp-kv__v">{value}</span></div>});
const Callout=ds('Callout',function Callout({icon='info',children}){return <div className="hp-callout"><Icon name={icon} size={18}/><span>{children}</span></div>});
const Feature=ds('Feature',function Feature({icon,title,children,rule}){return <div className={cx('hp-feature',rule&&'hp-feature--'+rule)}>{icon&&!rule&&<Icon name={icon} size={24}/>}<div><div className="hp-title">{title}</div>{children&&<div className="hp-feature__text">{children}</div>}</div></div>});
const PriceList=ds('PriceList',function PriceList({rows=[]}){return <div className="hp-pricelist">{rows.map((r,i)=><div key={i} className="hp-pricelist__row"><div><div className="hp-title">{r.label}</div>{r.note&&<div className="hp-pricelist__note">{r.note}</div>}</div><div className="hp-pricelist__value">{r.value}</div></div>)}</div>});
const Chip=ds('Chip',function Chip({pressed,onClick,icon,children}){return <button type="button" className="hp-chip" aria-pressed={!!pressed} onClick={onClick}>{icon&&<Icon name={icon} size={16}/>}{children}</button>});
const Accordion=ds('Accordion',function Accordion({items=[],heading,defaultOpen=null,value,onChange}){const [own,setOwn]=React.useState(defaultOpen);const open=value!==undefined?value:own;const set=v=>{onChange?onChange(v):setOwn(v)};const uid=React.useId();
 return <div className="hp-accordion__group">{heading&&<h2 className="hp-display hp-h3 hp-heading-rule">{heading}</h2>}
  {items.map(it=>{const on=open===it.id,pid=uid+'-'+it.id;return <div key={it.id} className="hp-accordion__item">
   <button type="button" className="hp-accordion__btn" aria-expanded={on} aria-controls={pid} onClick={()=>set(on?null:it.id)}>{it.title}<Icon name={on?'minus':'plus'} size={20}/></button>
   <div id={pid} className="hp-accordion__panel" hidden={!on}>{typeof it.content==='string'?<p>{it.content}</p>:it.content}</div></div>})}
 </div>});
const Textarea=ds('Textarea',function Textarea({label,hint,error,count,id,rows=4,value,className,...rest}){const fid=id||('ta-'+(label||'').replace(/\W+/g,'-').toLowerCase());const len=(value||'').length,over=count&&len>count;
 return <div className={cx('hp-field',error&&'hp-field--error',className)}>{label&&<label className="hp-field__label" htmlFor={fid}>{label}</label>}{hint&&<div className="hp-field__hint hp-field__hint--top" id={fid+'-hint'}>{hint}</div>}
  <textarea id={fid} rows={rows} value={value} aria-invalid={error?true:undefined} aria-describedby={[hint&&fid+'-hint',error&&fid+'-err'].filter(Boolean).join(' ')||undefined} {...rest}/>
  {(error||count)&&<div className="hp-field__foot">{error?<span className="hp-field__error" id={fid+'-err'}>{error}</span>:<span/>}{count&&<span className={cx('hp-field__count',over&&'is-over')}>{len}/{count}</span>}</div>}</div>});
/* App-level link: routes through the hash router */
function TextLink({to,href,children,onClick,iconRight,...rest}){const {go}=useApp();
 return <a href={href||(to?'#/'+to:'#')} className={cx('hp-textlink',iconRight&&'hp-textlink--icon')} onClick={href?onClick:e=>{e.preventDefault();onClick?onClick():go(to)}} {...rest}>{children}{iconRight&&<Icon name={iconRight} size={16}/>}</a>}

function MobileMenu({open,onClose,page}){const {go,book}=useApp();const ref=React.useRef(null);
 React.useEffect(()=>{if(!open)return;const k=e=>{if(e.key==='Escape')onClose()};document.addEventListener('keydown',k);document.body.style.overflow='hidden';const f=ref.current&&ref.current.querySelector('button');f&&f.focus();return()=>{document.removeEventListener('keydown',k);document.body.style.overflow=''}},[open]);
 if(!open)return null;
 return <div ref={ref} className="mmenu hp-on-dark" role="dialog" aria-modal="true" aria-label="Menu">
  <div className="mmenu__top"><span className="hp-header__brand"><img src={LOGO} alt="" className="hp-header__logo"/><span className="hp-header__name"><span>Hawk Pride</span><span>Offroad</span></span></span><IconButton icon="x" label="Close menu" variant="dark" onClick={onClose}/></div>
  <nav className="mmenu__nav" aria-label="Main">{LINKS.map(l=><button key={l.id} type="button" aria-current={page===l.id?'page':undefined} onClick={()=>{go(l.id);onClose()}} className="hp-display mmenu__link">{l.label}</button>)}</nav>
  <div className="mmenu__cta"><Button block size="lg" onClick={()=>{book();onClose()}}>Book Now</Button></div></div>}
function Shell({page,children}){const {go,book}=useApp();const [m,setM]=React.useState(false);
 return <div className="hp-root">
  {HP.notices('site').map(n=><Alert key={n.title} tone={n.tone} title={n.title}>{n.text}</Alert>)}
  <div className="proto-header"><SiteHeader logoSrc={LOGO} links={LINKS} current={page} onNavigate={go} onBook={()=>book()} ctaLabel="Book Now" onMenu={()=>setM(true)}/></div>
  <MobileMenu open={m} page={page} onClose={()=>setM(false)}/>
  <main>{children}</main>
  <Footer/></div>}
function Footer(){const {go,reset}=useApp();const P=window.HP_DATA.park;
 const col=(t,items)=><div className="hp-footer__col"><div className="hp-eyebrow">{t}</div>{items}</div>;
 const a=(l,id)=><a key={l} href={'#/'+id} onClick={e=>{e.preventDefault();go(id)}} className="hp-footer__link">{l}</a>;
 return <footer className="hp-footer">
  <div className="hp-container hp-footer__grid">
   <div className="hp-footer__brand"><img src={LOGO} alt="Hawk Pride Offroad" className="hp-footer__logo"/><div className="hp-display hp-footer__tagline">Go conquer something.</div></div>
   {col('Visit',[<span key="a" className="hp-footer__text"><Icon name="map-pin" size={18}/>{P.address}</span>,<a key="p" href={'tel:'+P.tel} className="hp-footer__link"><Icon name="phone" size={18}/>{P.phone}</a>,<a key="e" href={'mailto:'+P.email} className="hp-footer__link"><Icon name="mail" size={18}/>Email us</a>])}
   {col('Park',[a('Events','events'),a('Trails','trails'),a('Rates','rates'),a('Cabins','cabins'),a('Camping','camping'),a('Groups','groups')])}
   {col('Before you come',[a('Rules','rules'),<a key="w" href={P.waiver} target="_blank" rel="noopener" className="hp-footer__link">Sign a waiver</a>,a('Find my trip','confirmation'),a('FAQ','faq'),a('Gallery','gallery'),a('Contact','contact')])}
   {col('Hours',P.hours.map(([d,h])=><span key={d} className="hp-footer__text hp-footer__hours"><span>{d}</span><span>{h}</span></span>))}
  </div>
  <div className="hp-container hp-footer__legal">
   <span>© {P.name} · Tuscumbia, Alabama</span>
   <span className="hp-footer__social">{P.social.map(([l,i,h])=><a key={l} href={h} target="_blank" rel="noopener" aria-label={l} className="hp-footer__link"><Icon name={i} size={20}/></a>)}</span>
   <a href="#/gate" onClick={e=>{e.preventDefault();go('gate')}} className="hp-footer__link">Gate check-in (staff demo)</a><a href="#/admin" onClick={e=>{e.preventDefault();go('admin')}} className="hp-footer__link">Staff admin</a><button type="button" onClick={reset} className="proto-demo-btn">Reset demo</button>
  </div></footer>}
Object.assign(window,{Shell,Section,PageHead,CtaBand,Row,TextLink,Callout,Feature,PriceList,Chip,Accordion,Textarea,AppCtx:Ctx,useApp,HP_LINKS:LINKS,HP_LOGO:LOGO,cx});
})();
