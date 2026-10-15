(()=>{
const {Photo,Button,Icon,Badge,Alert,Tabs,IconButton}=window.DS;
const D=()=>window.HP_DATA;
const rows=a=>a.map(([label,value,note,to])=>({label:to?<TextLink to={to}>{label}</TextLink>:label,value,note}));
function Rates(){const {book,go}=useApp();const P=D().pricing;
 return <><PageHead eyebrow="Rates" title="What it costs to come." intro="Pay per rider, per day. Kids 12 and under ride free. Book ahead and skip the line at the gate." actions={<Button size="lg" onClick={()=>book({stay:'none'})}>Buy Admission</Button>} image={hpAsset('buggy-airborne.jpg')} imageAlt="Buggy on the hill" position="50% 45%"/>
  <Section eyebrow="Riding admission" title="Per rider, per day.">
   <div className="hp-split">
    <PriceList rows={rows([['Days 1 and 2',HP.money(P.day),'Per rider, per day'],['Day 3 and beyond',HP.money(P.dayLater),'Per rider, per day'],['Kids '+P.freeAge+' and under','Free','With a paying adult'],['Spectators','Free','Waiver and wristband required']])}/>
    <div className="hp-card hp-card--padded hp-card--flat rate-example">
     <div className="hp-eyebrow hp-eyebrow--accent">Example</div>
     <p className="hp-body-l">Two adults and a 9-year-old riding Friday to Sunday:</p>
     <div className="hp-kv-list"><Row label="2 adults × 3 days" value={HP.money(2*HP.admissionPer(3))}/><Row label="1 child rider" value="Free" muted/></div>
     <div className="hp-kv-sum"><Row total label="Total" value={HP.money(2*HP.admissionPer(3))}/></div>
     <Callout>We add it up for you when you book, multi-day savings included.</Callout></div>
   </div></Section>
  <Section sunken eyebrow="Overnight" title="Staying the night.">
   <div className="hp-stack hp-stack--5">
    <div className="hp-grid hp-grid--2">
     <PriceList rows={rows(HP.cabinClasses().map(c=>[c.label,HP.money(c.price),'Per night · sleeps '+c.sleeps,'cabins']))}/>
     <PriceList rows={rows(D().categories.filter(c=>c.id!=='cabin').map(c=>[c.name,HP.money(HP.rate(c.id)),c.perPerson?'Per person, per night':c.phoneOnly?'Per night · call the office to book':'Per night','camping']))}/>
    </div>
    <p className="hp-muted hp-measure">Overnight stays don’t include riding. Add admission for your riders in the same booking. Cabins add a {HP.money(D().fees.cleaning)} cleaning fee per booking and {HP.money(D().fees.pet)} per pet.</p>
   </div></Section>
  <Section title="Event weekends" eyebrow="Events" intro="Event pricing may vary. Check the event page for details." action={<Button variant="outline" iconRight="arrow-right" onClick={()=>go('events')}>Upcoming events</Button>}/></>}

const cabinOwnBath=u=>u.cls!=='a';
function CabinPrice({n}){return <div className="cabin-price"><b>{HP.money(n)}</b> / night</div>}
const CABIN_INCLUDED=['A/C and heat','Microwave, fridge and coffee pot','Beds and bunks','Fire ring','Parking for the truck and trailer close by','Regular pest control'];
const CABIN_BRING=['Sheets and pillows','Blankets','Grill - Available upon request'];
function CabinSizes({onBook}){const U=D().units.filter(u=>u.cat==='cabin');const C=HP.cabinClasses();
 return <Section eyebrow="Cabins" title="Pick the one that fits your crew.">
  <div className="cabins-sizes">{C.map(c=>{const u=U.find(x=>x.cls===c.cls);return <div key={c.cls} className="hp-card cabins-size">
   <Photo src={hpAsset(c.img)} alt={c.label+' exterior'} ratio="16/9"/><div className="hp-card__body">
   <div className="hp-spread hp-spread--baseline"><h3 className="hp-card__title">{c.label}</h3><CabinPrice n={c.price}/></div>
   <div className="hp-card__meta"><span><Icon name="users" size={16}/>Sleeps up to {u.sleeps}</span><span><Icon name="shower-head" size={16}/>{cabinOwnBath(u)?'Own bathroom':'No bathroom'}</span></div>
   <p className="hp-card__text">{c.beds}.</p>
   <div className="cabins-size__cta"><Button variant="outline" block onClick={onBook}>Check availability</Button></div></div></div>})}
  </div></Section>}
function CabinBeforeYouBook(){const F=D().fees;
 const cols=[['In every cabin',CABIN_INCLUDED],['Bring with you',CABIN_BRING],['Costs extra',['Riding admission for each rider',HP.money(F.cleaning)+' cleaning fee per booking',HP.money(F.pet)+' per pet']]];
 return <Section sunken eyebrow="Before you book" title="What’s in the cabin and what to bring.">
  <div className="cabins-three">{cols.map(([t,L])=><div key={t}><h3 className="cabins-colhead">{t}</h3><ul className="cabins-list">{L.map(x=><li key={x}>{x}</li>)}</ul></div>)}</div></Section>}
function CabinPolicies(){const F=D().fees;const P=D().park;
 const L=[['Check-in','From '+P.checkin],['Check-out','By '+P.checkout],['Pets','Up to '+F.maxPets+'. House-trained, flea-treated and leashed. Crate them if you leave them alone'],['Smoking','Not inside cabins'],['Housekeeping','No daily cleaning during your stay']];
 return <Section eyebrow="Good to know" title="Cabin rules.">
  <dl className="cabins-policy">{L.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></Section>}
function Cabins(){const {book}=useApp();const onBook=()=>book({stay:'cabin'});
 return <>
  <PageHead eyebrow="Cabins" title="Sleep close to the trails." intro={'Eight cabins from '+HP.money(HP.rate('cabin'))+' a night. Park the rig close by and ride out in the morning.'} actions={<Button size="lg" onClick={onBook}>Check availability</Button>} image={hpAsset('cabin-1-exterior.jpg')} imageAlt="Cabin 1 and its front porch" position="50% 60%"/>
  <CabinSizes onBook={onBook}/><CabinBeforeYouBook/><CabinPolicies/>
  <CtaBand title="Pick your weekend." text="Choose your dates and we’ll show you which cabins are free." action={<Button size="lg" onClick={onBook}>Check availability</Button>}/></>}

function Camping(){const {book}=useApp();const wkAv=HP.availability(HP.weekends(HP.today,1)[0]);const P=D().park;
 const S=[{id:'powered',pts:['50A electric and water','Pads from 40 to 75 ft','Generators allowed']},
  {id:'dry',pts:['No hookups','Pads from 30 to 90 ft','Generators allowed']},
  /* PRIMITIVE: {id:'primitive',pts:['Designated tent site','Fire ring','Bathhouse access']}, */
  {id:'anywhere',pts:['Set up in any open camping area','No site assignment','Not on trails, roads or pads']}];
 const status=id=>{const c=HP.cat(id);if(c.phoneOnly)return <Badge icon="phone">Call the office to book</Badge>;if(c.model==='unit'){const n=wkAv[id].count;return <Badge tone={n?'success':'danger'}>{n?n+' of '+HP.count(id)+' available this weekend':'Sold out this weekend'}</Badge>}return <Badge tone="success">Open this weekend</Badge>};
 /* PRIMITIVE intro: "Powered and dry RV sites, designated tent sites, or pitch anywhere in the open camping areas." · section title: "Four ways to camp." */
 return <><PageHead eyebrow="Camping" title="Pull in. Plug in. Ride out." intro="Powered and dry RV sites, or pitch anywhere in the open camping areas." actions={<Button size="lg" onClick={()=>book({stay:'powered'})}>Check Availability</Button>} image={hpAsset('rv-overview.jpg')} imageAlt="The RV area under the trees"/>
  <Section eyebrow="Pick your setup" title="Three ways to camp.">
   <div className="hp-grid hp-grid--2">{S.map(s=>{const c=HP.cat(s.id);return <div key={s.id} className="hp-card hp-card--padded camp-card">
    <div className="hp-spread hp-spread--baseline"><h3 className="hp-card__title">{c.name}</h3><div className="hp-price">{HP.money(HP.rate(s.id))}<small>{c.perPerson?'/ person / night':'/ night'}</small></div></div>
    <div>{status(s.id)}</div>
    <ul className="hp-checklist">{s.pts.map(p=><li key={p}><Icon name="check" size={18}/>{p}</li>)}</ul>
    <div className="hp-card__foot">{c.phoneOnly?<Button href={'tel:'+P.tel} variant="secondary" icon="phone">Call {P.phone}</Button>:<Button variant={s.id==='powered'?'primary':'secondary'} onClick={()=>book({stay:s.id})}>Check Availability</Button>}</div></div>})}</div></Section>
  <Section sunken eyebrow="Campground rules" title="Before you set up.">
   <div className="hp-grid hp-grid--3 hp-grid--md">{[['plug-zap','Generators','Allowed day and night. Place them away from the main RV area.'],['flame','Fires','In pits and rings only. Firewood is for sale at the park.'],['moon','Quiet hours','10 PM to daylight. No riding during quiet hours.'],['shower-head','Bathhouse','Showers and restrooms near the pavilion. Portable showers and toilets are fine too.'],['clock','Check-in / out','Stop at check-in for your wristband. Check in from 10 AM, out by 5 PM.'],['dog','Pets','Up to 2, leashed. Crate them if you leave them alone.']].map(([i,t,d])=><Feature key={t} icon={i} title={t}>{d}</Feature>)}</div></Section></>}

function Groups(){const P=D().park;const Y0=HP.p(HP.today).getFullYear();const [yr,setYr]=React.useState('all');const track=React.useRef(null);
 React.useEffect(()=>{track.current&&(track.current.scrollLeft=0)},[yr]);
 const scroll=dir=>{const t=track.current;if(!t)return;const c=t.firstElementChild;t.scrollBy({left:dir*((c?c.offsetWidth:t.clientWidth/3)+16),behavior:'smooth'})};
 const W=HP.weekends(HP.add(HP.today,1),110).filter(w=>{const y=HP.p(w.arrive).getFullYear();return yr==='all'?y<=Y0+1:y===yr}).map(w=>({...w,ev:HP.eventFor(w.arrive,w.depart)}));
 const MO=[];W.forEach(w=>{const d=HP.p(w.arrive),k=d.getFullYear()+'-'+d.getMonth();let m=MO.find(x=>x.k===k);if(!m){m={k,label:HP.M[d.getMonth()]+' '+d.getFullYear(),list:[]};MO.push(m)}m.list.push(w)});
 const days=w=>{const a=HP.p(w.arrive),b=HP.p(w.depart);return a.getMonth()===b.getMonth()?a.getDate()+'–'+b.getDate():a.getDate()+'–'+HP.M[b.getMonth()]+' '+b.getDate()};
 const call=(l,k)=><Button key={k} href={'tel:'+P.tel} size="lg" icon="phone">{l}</Button>;
 return <><PageHead eyebrow="Groups" title="Bring the club." intro="Hawk Pride welcomes organized group rides. Pick a weekend, give us a call, and we’ll help you plan it." actions={call('Call to Plan a Group Ride')} image={hpAsset('hillside-traffic.jpg')} imageAlt="A club riding together"/>
  <Section eyebrow="Who comes" title="Built for a crowd.">
   <div className="hp-grid hp-grid--4">{[['Off-road clubs','Monthly rides and club weekends.'],['Jeep groups','Including runs on Uphill Both Ways.'],['Side-by-side groups','Miles of trails wide enough for a convoy.'],['Family & friends','Reunions, birthdays and big crews.']].map(([t,d])=><Feature key={t} rule="gold" title={t}>{d}</Feature>)}</div></Section>
  <Section sunken eyebrow="Available dates" title="Weekends open for groups." intro="Call to confirm availability.">
   <div className="gw-bar"><Tabs variant="pill" label="Filter by year" items={[{id:'all',label:'All'},...[Y0,Y0+1].map(y=>({id:String(y),label:String(y)}))]} value={String(yr)} onChange={v=>setYr(v==='all'?'all':+v)}/><div className="hp-cluster"><IconButton icon="chevron-left" label="Previous months" onClick={()=>scroll(-1)}/><IconButton icon="chevron-right" label="Next months" onClick={()=>scroll(1)}/></div></div>
   <div className="gw-months" ref={track} tabIndex="0" aria-label={yr==='all'?'Upcoming weekends':'Weekends in '+yr}>{MO.map(m=><div key={m.k} className="gw-month">
    <div className="hp-display gw-month__t">{m.label}</div>
    <ul className="gw-list">{m.list.map(w=><li key={w.arrive} className={'gw-row'+(w.ev?' gw-row--ev':'')}>
     <span className="gw-row__d"><span className="gw-row__dow">Fri–Sun</span><span className="gw-row__n">{days(w)}</span></span>
     {w.ev?<span className="gw-row__s gw-row__s--ev">{w.ev.title}</span>:<span className="gw-row__s"><Icon name="check" size={16}/>Open</span>}</li>)}</ul></div>)}</div></Section>
  <Section eyebrow="Group cabins and camping" title="Room for everyone.">
   <div className="hp-grid hp-grid--3">{[['Cabins',HP.count('cabin')+' cabins, '+HP.priceLabel('cabin').toLowerCase()+'.','cabins'],['RV sites',HP.count('powered')+' powered pads online, plus more sites by phone.','camping'],['Camping',/* PRIMITIVE: 'Primitive sites and open camping areas.' */'Open camping areas.','camping']].map(([t,d,to])=><div key={t} className="hp-card hp-card--padded"><Feature title={<TextLink to={to}>{t}</TextLink>}>{d}</Feature></div>)}</div></Section>
  <CtaBand eyebrow="Plan your group ride" title={<a href={'tel:'+P.tel} className="proto-tel">{P.phone}</a>} text="Tell us your dates, how many are coming and how you’re staying." action={call('Call now')}/></>}

const RULES=[['Check-in',['Everyone stops at check-in when they arrive to check in and get a wristband. No exceptions.','RV check-in from 10 AM. Check-out by 5 PM.']],['Speed & conduct',['10 mph in the campground.','No joyriding in the campground.']],['Camping & fires',['Fires in designated pits and rings only.','Don’t move fire rings or picnic tables.','Firewood is for sale at the park. Don’t cut trees. Wood already on the ground is fine to burn.','Quiet hours and riding curfew: 10 PM to daylight.','Outdoor and portable showers and toilets are fine.','Take all your trash with you. No littering.']],['Pets',['Up to 2 pets per group.','Keep them leashed and clean up after them.','Crate or kennel pets you leave alone.','Cabin pets must be house-trained and flea-treated. $25 per pet.','Continuous loud barking may result in eviction.']],['Not allowed',['Riding between 10 PM and daylight.','Glass on the trails.','Fireworks, except on the 4th of July and New Year’s.','Smoking inside cabins.']],['Liability',['Hawk Pride is not responsible for lost, stolen or damaged property.']]];
function Rules(){const W=D().park.waiver;
 return <><Section eyebrow="Hawk Pride Offroad" title="Park Rules & Safety" intro="Everything you need to know before hitting the trails. Please review the park rules before your visit."><div className="hp-stack hp-stack--10">
   <div className="rules-waiver"><p className="rules-waiver__note"><Icon name="file-check" size={16}/>All riders and passengers must complete a waiver.</p><Button size="lg" iconRight="arrow-up-right" href={W} target="_blank" rel="noopener">Sign Waiver</Button></div>
   <div className="hp-grid hp-grid--2 hp-grid--loose">{RULES.map(([t,items])=><div key={t}><h2 className="hp-display hp-h3 hp-heading-rule">{t}</h2>
    <ul className="rules-list hp-body-l">{items.map(x=><li key={x}>{x}</li>)}</ul></div>)}</div>
   <Alert tone="info" title="Waiver required for every rider">Sign online before you arrive and you’ll go straight through the gate. Parents sign for riders under 18. <TextLink href={W} target="_blank" rel="noopener">Sign the waiver</TextLink></Alert>
  </div></Section></>}

function CopyEmail({email}){const [done,setDone]=React.useState(false);const t=React.useRef();
 const copy=async()=>{try{await navigator.clipboard.writeText(email)}catch(x){const a=document.createElement('textarea');a.value=email;document.body.appendChild(a);a.select();document.execCommand('copy');a.remove()}setDone(true);clearTimeout(t.current);t.current=setTimeout(()=>setDone(false),2500)};
 return <><Button size="lg" variant="outline" icon={done?'check':'mail'} onClick={copy} title={'Copy '+email}>{done?'Email copied':'Email'}</Button><span className="hp-sr-only" aria-live="polite">{done?email+' copied to clipboard':''}</span></>}
function Contact(){const P=D().park;
 const {SectionHeader}=window.DS;
 return <><Section>
   <div className="contact-top">
    <div className="contact-top__text"><SectionHeader eyebrow="Contact information" title="Get in touch" intro="Calls answered during business hours Monday through Saturday"/>
     <div className="hp-cluster"><Button href={'tel:'+P.tel} size="lg" icon="phone">{P.phone}</Button><CopyEmail email={P.email}/></div></div>
    <div className="hp-card contact-top__card"><Photo src={hpAsset('check-in.jpg')} alt="The check-in building" ratio="16/9"/><div className="hp-card__body"><p className="hp-card__text">All riders must stop at check-in to get a wristband, no exceptions.</p></div></div>
   </div>
   <div className="hp-split">
    <div className="hp-stack hp-stack--8">
     <div><div className="hp-eyebrow hp-eyebrow--accent">Address</div><div className="contact-addr">{P.address}</div><div className="bk-mt"><Button href={'https://maps.google.com/?q='+encodeURIComponent(P.address)} target="_blank" rel="noreferrer" variant="secondary" icon="navigation">Directions</Button></div></div>
     <div><div className="hp-eyebrow hp-eyebrow--accent">Park hours</div><div className="hp-kv-list contact-hours">{P.hours.map(([d,h])=><Row key={d} label={d} value={h}/>)}</div></div>
     <div><div className="hp-eyebrow hp-eyebrow--accent">Follow along</div><div className="hp-cluster bk-mt">{P.social.map(([l,i,h])=><a key={l} href={h} target="_blank" rel="noopener" className="contact-social"><Icon name={i} size={22}/>{l}</a>)}</div></div>
     <p className="hp-muted">Common questions about hours, rates and waivers are answered in the <TextLink to="faq">FAQ</TextLink>.</p>
     <Alert tone="danger" title="Emergency on the trail?">Call 911 first, then the park office. Tell them your trail number from the nearest sign.</Alert>
    </div>
    <div className="hp-stack hp-stack--5"><window.ContactForm/></div>
   </div></Section></>}
Object.assign(window,{Rates,Cabins,Camping,Groups,Rules,Contact});
})();
