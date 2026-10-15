(()=>{
const {Photo,Button,Icon,Badge}=window.DS;
function Hero(){const {book,go}=useApp();const ev=window.HP_DATA.events[0];
 return <div className="hp-hero">
  <Photo src={hpAsset('hillside-traffic.jpg')} alt="A line of side-by-sides and buggies climbing a dirt hill through the trees" position="50% 35%" ratio="auto" className="hp-photo--fill"/>
  <div className="hp-scrim hp-scrim--hero"/>
  <div className="hp-hero__inner hp-on-dark"><div className="home-hero__row">
   <div className="home-hero__text">
    <div className="hp-eyebrow hp-eyebrow--accent">Hawk Pride Offroad · Tuscumbia, Alabama</div><span className="hp-rule"/>
    <h1 className="hp-display hp-display-xl">Go conquer something.</h1>
    <p className="hp-hero__lede">Easy trails. Hard climbs. Long weekends. Over 1,000 acres of real off-road on one mountain in Northwest Alabama.</p>
    <div className="hp-actions"><Button size="lg" onClick={()=>book()}>Book Now</Button><Button size="lg" variant="outline" onClick={()=>go('trails')}>See the trails</Button></div>
   </div>
   <button type="button" onClick={()=>go('events/'+ev.id)} className="home-next">
    <span className="hp-eyebrow hp-eyebrow--accent">Next big weekend</span><span className="hp-display home-next__title">{ev.title}</span><span className="home-next__meta">{HP.range(ev.start,ev.end)} · View event →</span></button>
  </div></div></div>}
function Pathways(){const {go}=useApp();
 const P=[['Trail riding','From wooded loops to serious rock.','trails','pavilion-jeeps.jpg','Jeeps on an easy trail by the pavilion'],['Events','Race weekends, club rides and holiday crowds.','events','event-crawl-crowd.jpg','Crowd watching a rock crawl'],['Cabins & camping','Ride all day. Stay all weekend.','cabins','cabin-3-exterior.jpg','Cabin 3 with its front porch'],['Group rides','Bring the club. We’ll save you a weekend.','groups','hillside-traffic.jpg','A group of rigs climbing together']];
 return <Section eyebrow="Find your weekend" title="Make the mountain yours.">
  <div className="hp-grid hp-grid--4">{P.map(([t,d,to,img,alt])=><a key={t} href={'#/'+to} onClick={e=>{e.preventDefault();go(to)}} className="pathway hp-on-dark">
   <Photo src={hpAsset(img)} alt={alt} ratio="auto" className="hp-photo--fill"/>
   <div className="hp-scrim hp-scrim--card"/>
   <div className="pathway__body"><h3 className="hp-display pathway__title">{t}</h3><p className="pathway__text">{d}</p><span className="pathway__cta">Explore <Icon name="arrow-right" size={16}/></span></div>
  </a>)}</div></Section>}
function Proof(){
 const pts=[['Easy to extreme','Wooded loops for the family, ledges for the buggy.'],['Signature rock','Technical crawling and named obstacles.'],['Uphill Both Ways','A Jeep Badge of Honor trail.','trails/jeep-badge-of-honor/uphill-both-ways'],[HP.count('cabin')+' cabins · '+(HP.count('powered')+HP.count('dry'))+' RV pads',/* PRIMITIVE: 'Plus primitive sites and open camping.' */'Plus open camping areas.'],['Big event weekends','Hillclimbs, rock crawls and club rides.'],['Groups welcome','Clubs, families and friends.','groups']];
 return <section className="hp-section--dark hp-on-dark">
  <div className="hp-container hp-split home-proof__grid">
   <div className="home-proof__media"><Photo src={hpAsset('rock-ledge-buggies.jpg')} alt="Buggies working up a rock ledge" ratio="auto" className="hp-photo--fill"/></div>
   <div className="home-proof__text">
    <div className="hp-eyebrow hp-eyebrow--accent">The mountain</div><span className="hp-rule"/>
    <h2 className="hp-display hp-display-l">One mountain. Every kind of ride.</h2>
    <p className="hp-lede">Over 1,000 acres and 120+ rock trails, with creeks, climbs, mud and woods in between. Pick your line and bring whatever you drive.</p>
    <div className="hp-grid hp-grid--2 home-proof__pts">{pts.map(([t,d,to])=><Feature key={t} rule="line" title={to?<TextLink to={to}>{t}</TextLink>:t}>{d}</Feature>)}</div>
   </div></div></section>}
function Upcoming(){const {go}=useApp();const E=window.HP_DATA.events.slice(0,3);
 return <Section eyebrow="Coming up" title="Something’s always happening." action={<Button variant="outline" iconRight="arrow-right" onClick={()=>go('events')}>All events</Button>}>
  <div className="hp-grid hp-grid--3">{E.map(e=><a key={e.id} href={'#/events/'+e.id} onClick={ev=>{ev.preventDefault();go('events/'+e.id)}} className="hp-card hp-card--interactive proto-cardlink">
   <Photo src={e.image||undefined} caption={e.image?undefined:'Event photo'} alt={e.title} ratio="16/10" topLeft={<div className="hp-date"><div className="hp-date__m">{HP.M[HP.p(e.start).getMonth()]}</div><div className="hp-date__d">{HP.p(e.start).getDate()}</div></div>}/>
   <div className="hp-card__body"><div className="hp-cluster"><span className="hp-eyebrow hp-eyebrow--muted">{e.type} · {HP.range(e.start,e.end)}</span>{e.status==='few'&&<Badge tone="warning">Few sites left</Badge>}</div>
    <h3 className="hp-card__title">{e.title}</h3><p className="hp-card__text">{e.hook}</p>
    <span className="hp-card__cta">View event <Icon name="arrow-right" size={16}/></span></div></a>)}</div></Section>}
function Stay(){const {go,book}=useApp();
 const S=[['Cabins',HP.priceLabel('cabin'),'Beds, A/C and a porch.','cabins','cabin','cabin-1-exterior.jpg'],['RV sites',HP.money(HP.rate('powered'))+' powered · '+HP.money(HP.rate('dry'))+' dry','Level pads close to the trails.','camping','powered','rv-1.jpg'],['Camping','From '+HP.priceLabel('anywhere'),/* PRIMITIVE: 'Primitive sites or camp anywhere.', stay 'primitive' */'Camp anywhere in the open areas.','camping','anywhere','fire-sunset.jpg']];
 return <Section sunken eyebrow="Stay the weekend" title="Ride all day. Stay all weekend.">
  <div className="hp-grid hp-grid--3">{S.map(([t,p,d,to,stay,img])=><div key={t} className="hp-card"><Photo src={hpAsset(img)} alt={t} ratio="4/3"/><div className="hp-card__body">
   <h3 className="hp-card__title">{t}</h3><div className="hp-strong">{p}</div><p className="hp-card__text">{d}</p>
   <div className="hp-card__foot"><div className="hp-cluster"><Button size="sm" onClick={()=>book({stay})}>Check availability</Button><Button size="sm" variant="ghost" onClick={()=>go(to)}>Details</Button></div></div></div></div>)}</div></Section>}
function Life(){const {go}=useApp();const T=[['buggy-airborne.jpg','Buggy catching air on the hill',1],['trail-forest.jpg','Side-by-sides on a wooded trail'],['pavilion-jeeps.jpg','Rigs lined up at the pavilion'],['fire-sunset.jpg','Campfire at sunset'],['event-crawl-crowd.jpg','Event crowd at the rock pit'],['pavilion.jpg','The pavilion',1]];
 return <Section eyebrow="Life at Hawk Pride" title="Real dirt. Real people." action={<Button variant="outline" iconRight="arrow-right" onClick={()=>go('gallery')}>Gallery</Button>}>
  <div className="mosaic">{T.map(([s,a,w])=><div key={s} className={cx('mosaic__item',w&&'mosaic__item--wide')}><Photo src={hpAsset(s)} alt={a} ratio="auto" className="hp-photo--fill"/></div>)}</div></Section>}
function Home(){const {book}=useApp();return <><Hero/><Pathways/><Proof/><Upcoming/><Stay/><Life/>
 <CtaBand tone="gold" title="Pick your dates. We’ll handle the rest." action={<Button size="lg" variant="secondary" iconRight="arrow-right" onClick={()=>book()}>Book Now</Button>}/></>}
window.Home=Home;
})();
