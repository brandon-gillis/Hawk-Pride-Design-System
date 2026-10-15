(()=>{
const {Photo,Button,Icon,Badge,Alert,Tabs}=window.DS;
const statusBadge=e=>e.status==='few'?<Badge tone="warning">Few sites left</Badge>:e.status==='soldout'?<Badge tone="danger">Registration full</Badge>:e.status==='featured'?<Badge tone="gold">Featured</Badge>:null;
function EventsIndex(){const {go,book}=useApp();const E=window.HP_DATA.events;const nx=E.find(e=>e.status!=='soldout'&&e.end>=HP.today)||E[0];const [view,setView]=React.useState('list');
 if(!nx)return <Section eyebrow="Events" title="No events on the calendar yet." intro="The park is open every Friday to Sunday. Check back for rock crawls, hillclimbs and holiday weekends."/>;
 const toList=()=>{const el=document.getElementById('ev-list');el&&window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-80,behavior:'smooth'})};
 return <><div className="hp-hero hp-hero--md ev-hero">
   <Photo src={hpAsset('event-crawl-crowd.jpg')} alt="Crowd watching a rig work the rock pit at an event" position="50% 40%" ratio="auto" className="hp-photo--fill"/>
   <div className="hp-scrim hp-scrim--hero"/>
   <div className="hp-hero__inner hp-on-dark"><div className="home-hero__row">
    <div className="home-hero__text">
     <div className="hp-eyebrow hp-eyebrow--accent">Hawk Pride · Events</div><span className="hp-rule"/>
     <h1 className="hp-display hp-display-xl">Off-Road Events &amp; Rides</h1>
     <p className="hp-hero__lede">From rock crawling competitions and hillclimbs to club rides and special event weekends, there’s always something happening on the mountain. Explore upcoming events, find your weekend, and get ready to ride.</p>
     <div className="hp-actions"><Button size="lg" onClick={toList}>Explore Upcoming Events</Button><Button size="lg" variant="outline" onClick={()=>go('events/'+nx.id)}>Next Event: {HP.range(nx.start,nx.end)}</Button></div>
    </div>
    <button type="button" onClick={()=>go('events/'+nx.id)} className="home-next">
     <span className="hp-eyebrow hp-eyebrow--accent">Next up</span><span className="hp-display home-next__title">{nx.title}</span><span className="home-next__meta">{HP.range(nx.start,nx.end)} · View event →</span></button>
   </div></div></div>
  <Section id="ev-list"><div className="hp-stack">
   <div className="ev-toolbar"><Tabs variant="pill" label="Events view" items={[{id:'list',label:'List',icon:'list'},{id:'cal',label:'Calendar',icon:'calendar-days'}]} value={view} onChange={setView}/><TextLink href={HP_EVENTS.GCAL.subscribe} target="_blank" rel="noopener" iconRight="external-link">Add our calendar to Google Calendar</TextLink></div>
   {view==='cal'?<EventCalendar events={E} onOpen={e=>go('events/'+e.id)}/>:E.map(e=><div key={e.id} className="hp-card ev-row">
    <div className="ev-row__media"><Photo src={e.image||undefined} caption={e.image?undefined:'Event photo'} alt={e.title} ratio="auto" className="hp-photo--fill"/></div>
    <div className="ev-row__body">
     <div className="ev-row__date" aria-hidden="true"><div className="hp-eyebrow hp-eyebrow--accent">{HP.M[HP.p(e.start).getMonth()]}</div><div className="hp-display ev-row__day">{HP.p(e.start).getDate()}</div></div>
     <div className="ev-row__main"><div className="hp-cluster"><span className="hp-eyebrow hp-eyebrow--muted">{e.type} · {HP.range(e.start,e.end)}, {HP.p(e.start).getFullYear()}</span>{statusBadge(e)}</div>
      <h2 className="hp-display hp-h2 ev-row__title">{e.title}</h2><p className="hp-muted">{e.hook}</p></div>
     <div className="hp-cluster"><Button variant="outline" onClick={()=>go('events/'+e.id)}>View Event</Button>{e.status!=='soldout'&&<Button onClick={()=>book({event:e.id})}>Register</Button>}</div>
    </div></div>)}
   <p className="hp-muted">Regular open weekends aren’t listed here. The park is open every Friday to Sunday. <TextLink to="rates">See rates</TextLink>.</p></div></Section></>}
function EventPage({id}){const {book,go}=useApp();const e=window.HP_DATA.events.find(x=>x.id===id)||window.HP_DATA.events[0];const closed=e.status==='soldout';const PR=HP.ratesFor(e);
 const toSchedule=()=>{const el=document.getElementById('schedule');el&&window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-80,behavior:'smooth'})};
 return <>
  <div className="hp-hero hp-hero--md">
   <Photo src={e.image||undefined} caption={e.image?undefined:'Event hero photo'} alt={e.title} ratio="auto" className="hp-photo--fill"/>
   <div className="hp-scrim hp-scrim--deep"/>
   <div className="hp-hero__inner hp-on-dark">
    <Button variant="ghost" size="sm" icon="arrow-left" className="hp-backlink" onClick={()=>go('events')}>All events</Button>
    <div className="hp-eyebrow hp-eyebrow--accent">{e.type} · {HP.fmtLong(e.start)} – {HP.fmtLong(e.end)}, {HP.p(e.start).getFullYear()}</div><span className="hp-rule"/>
    <h1 className="hp-display hp-display-xl">{e.title}</h1>
    <p className="hp-hero__lede">{e.hook}</p>
    <div className="hp-actions">{closed?<Badge tone="danger">Registration full</Badge>:<Button size="lg" onClick={()=>book({event:e.id})}>Register & Book</Button>}<Button size="lg" variant="outline" onClick={toSchedule}>Schedule</Button></div>
   </div></div>
  <Section>
   <div className="hp-split hp-split--wide">
    <div><p className="ev-desc">{e.desc}</p>
     {(e.facts||[]).length>0&&<div className="facts">{e.facts.map(([l,v],i)=><div key={i}><div className="hp-eyebrow hp-eyebrow--muted">{l}</div><div className="facts__v">{v}</div></div>)}</div>}
     {e.jeep&&<div className="ev-jeep"><Icon name="trophy" size={22}/><span>Bringing a Jeep? Run <TextLink to="trails/jeep-badge-of-honor/uphill-both-ways">Uphill Both Ways</TextLink>, our Jeep Badge of Honor trail.</span></div>}
    </div>
    <div className="hp-card hp-card--raised hp-card--padded ev-aside">
     <div className="hp-eyebrow hp-eyebrow--accent">{PR.mode!=='standard'?'Event pricing':'Pricing'}</div>
     <div className="hp-kv-list">{PR.mode==='free'?<><Row label="Riding" value="No charge · group ride"/><Row label="Spectators" value="Free"/><Row label="Waivers" value="Required for everyone"/></>:<>{PR.mode==='fixed'?<Row label="Event fee" value={HP.money(PR.fixed)+' / rider · whole event'}/>:<><Row label="Riding admission" value={HP.money(PR.day)+' / day'}/><Row label="Day 3 and beyond" value={HP.money(PR.dayLater)+' / day'}/></>}<Row label={'Kids '+PR.freeAge+' and under'} value="Free"/><Row label="Spectators" value={PR.spectator>0?HP.money(PR.spectator)+(PR.mode==='fixed'?' / person':' / day')+' · pay at the gate':'Free · waiver required'}/>{(PR.extras||[]).map(([l,n],i)=><Row key={i} label={l} value={HP.money(n)}/>)}</>}</div>
     <Callout>Cabins and RV sites go fast on event weekends.</Callout>
     {closed?<Alert tone="danger" title="Registration is full">Watch this page for next year.</Alert>:<Button block size="lg" onClick={()=>book({event:e.id})}>Register & Book</Button>}
     <Button block variant="outline" icon="calendar-check" href={HP_EVENTS.addLink(e)} target="_blank" rel="noopener">Add to Google Calendar</Button>
    </div></div></Section>
  {e.schedule&&e.schedule.length>0&&<Section sunken id="schedule" eyebrow="Schedule" title="How the weekend runs.">
   <div>{e.schedule.map(([d,t],i)=><div key={i} className="schedule__row"><div className="hp-display schedule__d">{d}</div><div>{t}</div></div>)}</div></Section>}
  <Section eyebrow="Stay for the weekend" title="Where to stay.">
   <div className="hp-grid hp-grid--3">{[['Cabins',HP.priceLabel('cabin')],['RV sites',HP.money(HP.rate('powered'))+' powered · '+HP.money(HP.rate('dry'))+' dry'],['Camping','From '+HP.priceLabel('anywhere')/* PRIMITIVE: 'primitive' */]].map(([t,p])=><div key={t} className="hp-card hp-card--padded"><Feature title={t}>{p}</Feature>{!closed&&<div><Button size="sm" variant="secondary" onClick={()=>book({event:e.id})}>Book with this event</Button></div>}</div>)}</div></Section>
  <Section sunken eyebrow="Before you come" title="Rules & FAQ.">
   <div className="hp-grid hp-grid--2 hp-grid--md">{[['Do I need a waiver?','Yes, every rider. You’ll sign online right after you book.'],['Can I come just to watch?','Yes. Spectators get in free. Every spectator signs a waiver and picks up a wristband at check-in.'],['Are park rules different?','Standard park rules apply.'],['Can I pay at the gate?','Yes, but booking ahead gets you through the gate faster.']].map(([q,a])=><Feature key={q} title={q}>{a}</Feature>)}</div>
   <div className="sponsors"><span className="hp-eyebrow hp-eyebrow--muted">Event sponsors</span>{[1,2,3].map(i=><span key={i} className="sponsors__slot">Sponsor logo</span>)}</div></Section></>}

const TR_MAP='../../assets/maps/HawkPride_Official-Map-2026.pdf',TR_JEEP='../../assets/badges/jeep-badge-of-honor.png',TR_UBW='trails/jeep-badge-of-honor/uphill-both-ways';
const TR_NAMED=[['Big Hill','#1','Mountain views','For a lot of riders, Big Hill is where the day really begins. Head down from the main parking area toward the trails, with a great view of the mountain along the way. It\'s a reminder that sometimes the scenery is worth stopping for.'],
 ['Blue Polaris Outfitter Trail',null,'Explore the Mountain','Roughly five miles of wooded trails, dirt, and a little mud. A great way to see more of Hawk Pride without spending your whole day picking your way over rocks.'],
 ['Lucky\'s Trail','#23','Technical with scenery','Lucky\'s packs a lot into one trail. Around 1.3 miles of rocks, tight turns, off-camber sections, and a serious vertical ledge, with some great views along the way. It\'s a trail where the driving is technical and the scenery isn\'t bad either.'],
 ['Merlin','#112','Established rider favorite','Merlin has earned a reputation as one of Hawk Pride\'s favorite technical trails. Big boulders, steep ledges, and off-camber sections make it a challenge even for experienced drivers. There\'s also a parallel viewing route, so you can watch the action without putting your own rig through it.'],
 ['Fatty\'s Crack','#136','Technical Rock Crawling','One of Hawk Pride\'s well-known technical rock-crawling trails, Fatty\'s Crack features challenging rock formations, tight lines, and obstacles that demand careful vehicle placement. A parallel viewing route gives spectators a chance to watch drivers work their way through the terrain.'],
 ['Whiskey Run','#100','V-notch and rock obstacles','Whiskey Run doesn\'t waste much time getting interesting. A big V-notch leads into a rocky creek bed, with boulders, ledges, and a climb that can leave even experienced drivers working for every inch. Bring a capable rig and a good spotter.'],
 ['Vertical Limit','#103','Extreme Hill Climb','A serious hill-climb area featured in race events and attempted by the brave few. One of the places to see just how wild the terrain at Hawk Pride can get.']];
const openMap=()=>window.open(TR_MAP,'_blank');
function TrStep({n}){return <div aria-hidden="true" className="tr-step">{[1,2,3,4].map(k=><span key={k} className={k<=n?'is-on':undefined}/>)}</div>}
function Trails(){const {go,book}=useApp();
 const WAYS=[['Explore','Easier wooded routes, longer rides and places to simply get out and cover ground.','trail-forest.jpg','50% 55%'],['Trail Ride','Rocks, climbs, mud, elevation changes and technical terrain for riders looking for more challenge.','hillside-traffic.jpg','50% 40%'],['Rock Crawl','Natural rock formations, ledges, boulders and technical lines that reward vehicle capability and driver skill.','trail-flex-1.jpg','40% 50%'],['Go Extreme','Serious hill climbs and obstacles built for highly capable rigs and experienced drivers.','buggy-airborne.jpg','50% 40%']];
 const STATS=[['1,000+','acres'],['120+','trails'],['ATV • SxS • Jeep • 4x4 • Buggy','',true]];
 return <>
  <section className="tr-hero hp-on-dark" data-screen-label="Trails hero">
   <Photo src={hpAsset('trail-map-hero.jpg')} alt="" position="50% 50%" ratio="auto" className="hp-photo--fill"/>
   <div className="hp-scrim tr-hero__scrim"/>
   <div className="hp-container tr-hero__inner">
    <div className="tr-hero__text">
     <div className="hp-eyebrow hp-eyebrow--accent">Trails at Hawk Pride</div><span className="hp-rule"/>
     <h1 className="hp-display hp-display-xl">A whole mountain of off-road adventure</h1>
     <p className="hp-hero__lede">More than 120 rock-crawling trails, miles of ATV and SxS riding, natural rock formations, wooded trails, hill climbs, mud and terrain ranging from relaxed cruising to serious technical crawling.</p></div>
    <div className="tr-stats">{STATS.map(([v,l,sm])=>sm?<ul key={v} className="tr-rigs" aria-label="Vehicles welcome">{v.split(' • ').map(r=><li key={r}>{r}</li>)}</ul>:<div key={v}><div className="hp-display tr-stat__v hp-display-l">{v}</div>{l&&<div className="tr-stat__l">{l}</div>}</div>)}</div>
   </div></section>
  <section className="tr-ubw-band hp-on-dark" data-screen-label="Uphill Both Ways">
   <div className="tr-ubw-photo"><Photo src={hpAsset('uphill-both-ways.png')} alt="Jeeps climbing a rock channel between boulders on Uphill Both Ways" position="45% 55%" ratio="auto" className="hp-photo--fill"/><div className="tr-ubw-fade"/></div>
   <img src={TR_JEEP} alt="Jeep Badge of Honor" className="tr-ubw-patch"/>
   <div className="hp-container tr-ubw-grid"><div/>
    <div className="tr-ubw-copy">
     <div className="tr-ubw-kicker">Official Jeep Badge of Honor</div>
     <span className="hp-rule"/>
     <h2 className="hp-display hp-display-l">Uphill Both Ways</h2>
     <p className="hp-hero__lede">One of Hawk Pride's signature trails and an official Jeep Badge of Honor challenge. Rocks, climbs, off-camber sections, and plenty of opportunities to pick the wrong line.</p>
     <div className="hp-actions"><Button size="lg" iconRight="arrow-right" onClick={()=>go(TR_UBW)}>About the trail</Button></div></div></div></section>
  <Section eyebrow="Choose your adventure" title="Mild. Wild. And a whole lot in between.">
   <div className="tr-ways">{WAYS.map(([n,d,img,pos],x)=><div key={n} className="tr-way hp-on-dark">
    <Photo src={hpAsset(img)} alt={n} position={pos} ratio="auto" className="hp-photo--fill"/>
    <div className="hp-scrim hp-scrim--card"/>
    <div className="tr-way__body"><TrStep n={x+1}/><h3 className="hp-display hp-h2">{n}</h3><p>{d}</p></div></div>)}</div>
  </Section>
  <Section dark className="hp-topo hp-topo--dark" eyebrow="1,000+ Acres of Off-Road Terrain" title="Find Your Line" intro="With more than 120 rock-crawling trails, we couldn't fit them all here. But there are a few names you'll hear around the mountain.">
   <div className="tr-grid">{TR_NAMED.map(([n,num,d,c])=><div key={n} className="tr-card">
    <div className="tr-card__head"><span className="tr-plate">{num?num:<Icon name="signpost" size={18}/>}</span><span className="hp-eyebrow hp-eyebrow--accent">{d}</span></div>
    <h3 className="hp-display hp-h3">{n}</h3>
    <p className="tr-card__text">{c}</p></div>)}
    <button type="button" onClick={openMap} className="tr-card tr-card--more"><span className="tr-plate tr-plate--outline"><Icon name="map" size={18}/></span><h3 className="hp-display hp-h3">And more than 110 others.</h3><span className="tr-card__more">View Trail Map <Icon name="arrow-right" size={18}/></span></button></div>
  </Section>
  <Section eyebrow="Every kind of rig" title="From Stockers to Rockers">
   <div className="tr-range">
    <div><h3 className="hp-display hp-h2">Just want to ride?</h3><p className="hp-lede">You don’t need a rock buggy to enjoy Hawk Pride. There are miles of approachable riding and routes for ATV, SxS and 4x4 visitors who simply want to explore the mountain.</p></div>
    <div className="tr-stairs" aria-hidden="true">{WAYS.map(([n])=><div key={n} className="tr-stair"><div className="tr-stair__bar"/><div className="tr-stair__l">{n}</div></div>)}</div>
    <div><h3 className="hp-display hp-h2">Here for the hard stuff?</h3><p className="hp-lede">Hawk Pride is known for natural rock, technical crawling, major ledges and serious hill climbs that give built rigs somewhere to work.</p></div>
   </div>
   <p className="hp-ruled hp-muted tr-disclaimer">Not every trail suits every vehicle. Conditions and difficulty change, and drivers are responsible for choosing terrain that fits their vehicle and experience.</p>
  </Section>
  <Section sunken>
   <div className="hp-spread">
    <div className="tr-mapcall__text"><Icon name="map" size={32}/><div><h2 className="hp-display hp-h2">Know where you’re going.</h2><p className="hp-lede">Trail conditions and routes matter once you’re on the mountain. Use the current Hawk Pride trail map for detailed navigation while riding.</p></div></div>
    <Button size="lg" variant="outline" icon="map" onClick={openMap}>View Trail Map</Button></div>
  </Section>
  <section className="tr-final hp-on-dark" data-screen-label="Trails CTA">
   <Photo src={hpAsset('hillside-traffic.jpg')} alt="A line of side-by-sides and buggies climbing a dirt hill through the trees" position="50% 35%" ratio="auto" className="hp-photo--fill"/>
   <div className="hp-scrim tr-final__scrim"/>
   <div className="hp-container tr-final__inner">
    <div><div className="hp-eyebrow hp-eyebrow--accent">Go conquer something</div><span className="hp-rule"/><h2 className="hp-display hp-display-xl">Ready to ride it?</h2></div>
    <div className="tr-cta">{[['Plan a visit','route','book',true],['Stay at the park','tent','cabins'],['See upcoming events','calendar-days','events']].map(([l,ic,to,pri])=><button key={to} type="button" onClick={()=>to==='book'?book():go(to)} className={cx('tr-cta__tile',pri&&'tr-cta__tile--pri')}><Icon name={ic} size={28}/><span className="tr-cta__row"><span className="hp-display hp-h2">{l}</span><Icon name="arrow-right" size={24}/></span></button>)}</div>
   </div></section></>}
Object.assign(window,{EventsIndex,EventPage,Trails});
})();
