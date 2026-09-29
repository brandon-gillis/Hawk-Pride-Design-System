(()=>{
const {Photo,Button,Icon,Badge,Alert}=window.DS;
const IMG='./assets/photos/';
const D=()=>window.HP_DATA;
function PriceTable({rows}){return <div style={{background:'var(--surface-card)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-md)'}}>{rows.map(([l,v,note,to],i)=><div key={l} style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,padding:'16px 20px',borderTop:i?'1px solid var(--border-subtle)':0}}>
 <div><div style={{fontWeight:700,fontSize:17}}>{to?<TextLink to={to}>{l}</TextLink>:l}</div>{note&&<div style={{fontSize:14,color:'var(--text-muted)'}}>{note}</div>}</div><div className="hp-display" style={{fontSize:28,whiteSpace:'nowrap'}}>{v}</div></div>)}</div>}
function Fees(){const {book,go}=useApp();const P=D().pricing;
 return <><PageHead eyebrow="Fees" title="What it costs to ride." intro="Pay per rider, per day. Kids ride free. Book ahead and skip the line at the gate." actions={[<Button key="a" size="lg" onClick={()=>book({stay:'none'})}>Buy Admission</Button>,<Button key="b" size="lg" variant="outline" onClick={()=>book()}>Book a trip</Button>]} image={IMG+'buggy-airborne.jpg'} imageAlt="Buggy on the hill" position="50% 45%"/>
  <Section eyebrow="Riding admission" title="Per rider, per day.">
   <div className="split" style={{alignItems:'start'}}>
    <PriceTable rows={[['Days 1 and 2',HP.money(P.day),'Per rider, per day'],['Day 3 and beyond',HP.money(P.dayLater),'Per rider, per day'],['Kids '+P.freeAge+' and under','Free','With a paying adult']]}/>
    <div className="hp-card" style={{padding:24,gap:12,background:'var(--bg-sunken)',border:0}}>
     <div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>Example</div>
     <div style={{fontSize:17,lineHeight:1.55}}>Two adults and a 9-year-old riding Friday to Sunday:</div>
     <Row l="2 adults × 3 days" v={HP.money(2*HP.admissionPer(3))}/><Row l="1 child rider" v="Free" muted/>
     <div style={{borderTop:'1px solid var(--border-default)',paddingTop:10}}><Row b l="Total" v={HP.money(2*HP.admissionPer(3))}/></div>
     <Callout>We add it up for you when you book, multi-day savings included.</Callout></div>
   </div></Section>
  <Section sunken eyebrow="Overnight" title="Staying the night.">
   <div className="g2" style={{alignItems:'start'}}>
    <PriceTable rows={HP.cabinClasses().map(c=>[c.label,HP.money(c.price),'Per night · sleeps '+c.sleeps,'cabins'])}/>
    <PriceTable rows={D().categories.filter(c=>c.id!=='cabin').map(c=>[c.name,HP.money(HP.rate(c.id)),c.perPerson?'Per person, per night':'Per night','camping'])}/>
   </div>
   <p style={{margin:'20px 0 0',color:'var(--text-muted)'}}>Overnight stays don’t include riding. Add admission for your riders in the same booking.</p></Section>
  <Section title="Event weekends" eyebrow="Events">
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:20,flexWrap:'wrap'}}><p style={{margin:0,fontSize:17,maxWidth:620}}>Some events have their own pricing or packages. Check the event page for details.</p><Button variant="outline" iconRight="arrow-right" onClick={()=>go('events')}>Upcoming events</Button></div></Section></>}
function Cabins(){const {book}=useApp();const [cls,setCls]=React.useState(null);
 const C=HP.cabinClasses().map(c=>({t:c.label,p:c.price,sleeps:c.sleeps,beds:c.beds,d:c.desc}));
 const am=[['thermometer','A/C and heat'],['bed-double','Beds and bunks, bring linens'],['shower-head','Bathhouse nearby'],['flame','Fire ring and grill'],['square-parking','Parking for truck and trailer'],['utensils','Kitchen and bathroom details: to confirm']];
 return <><PageHead eyebrow="Cabins" title="Sleep close to the trails." intro="Eight cabins, two sizes. Every one is steps from the trailheads with room to park the trailer." actions={[<Button key="a" size="lg" onClick={()=>book({stay:'cabin'})}>Check Availability</Button>]} image={null} imageAlt="Cabin exterior at dusk"/>
  <Section eyebrow="Choose your size" title="Two kinds of cabin.">
   <div className="g2">{C.map(c=><div key={c.t} className="hp-card"><Photo caption={c.t+' · exterior'} ratio="16/9"/><div className="hp-card__body" style={{gap:10}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12}}><h3 className="hp-card__title" style={{fontSize:26}}>{c.t}</h3><div className="hp-price">{HP.money(c.p)}<small>/ night</small></div></div>
    <div className="hp-card__meta" style={{fontSize:15}}><span><Icon name="users" size={16}/>Sleeps {c.sleeps}</span><span><Icon name="bed-double" size={16}/>{c.beds}</span></div>
    <p style={{margin:0,color:'var(--text-muted)'}}>{c.d}</p>
    <div style={{marginTop:6}}><Button onClick={()=>book({stay:'cabin'})}>Check Availability</Button></div></div></div>)}</div></Section>
  <Section sunken eyebrow="Every cabin" title="What’s included.">
   <div className="g3" style={{gap:'18px 28px'}}>{am.map(([i,t])=><div key={t} style={{display:'flex',gap:12,alignItems:'center',fontSize:17}}><Icon name={i} size={24}/>{t}</div>)}</div></Section>
  <Section eyebrow="Good to know" title="Cabin policies.">
   <div className="split" style={{alignItems:'start'}}>
    <div style={{display:'flex',flexDirection:'column',gap:14,fontSize:17}}><Row l="Check-in" v={'From '+D().park.checkin}/><Row l="Check-out" v={'By '+D().park.checkout.toLowerCase()}/><Row l="Pets" v="Welcome, leashed"/><Row l="Riding" v="Admission sold separately"/></div>
    <div className="hp-card" style={{overflow:'hidden'}}><div className="hp-topo" style={{aspectRatio:'16/9',display:'grid',placeItems:'center',color:'var(--text-muted)'}}><span style={{background:'var(--surface-card)',padding:'6px 12px',borderRadius:4,fontSize:14}}><Icon name="map" size={16}/> Cabins sit on the ridge above the pavilion</span></div></div>
   </div></Section></>}
function Camping(){const {book}=useApp();const wkAv=HP.availability(HP.weekends(HP.today,1)[0]);
 const S=[{id:'powered',pts:['Designated level site','50A electric and water','Pull-through pads'],img:IMG+'pavilion-jeeps.jpg'},
  {id:'dry',pts:['Designated level site','Generators allowed until quiet hours','East field, room to spread out']},
  {id:'primitive',pts:['Designated tent site','Fire ring','Bathhouse access']},
  {id:'anywhere',pts:['Set up in any open camping area','No site assignment','Not on trails, roads or pads']}];
 return <><PageHead eyebrow="Camping" title="Pull in. Plug in. Ride out." intro="Powered and dry RV sites, designated tent sites, or pitch anywhere in the open camping areas." actions={[<Button key="a" size="lg" onClick={()=>book({stay:'powered'})}>Check Availability</Button>]} image={null} imageAlt="RVs and tents at the campground"/>
  <Section eyebrow="Pick your setup" title="Four ways to camp.">
   <div className="g2">{S.map(s=><div key={s.id} className="hp-card"><div className="hp-card__body" style={{gap:12,padding:24}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12}}><h3 className="hp-card__title" style={{fontSize:26}}>{HP.cat(s.id).name}</h3><div className="hp-price">{HP.money(HP.rate(s.id))}<small>{HP.cat(s.id).perPerson?'/ person / night':'/ night'}</small></div></div>
    <div>{HP.cat(s.id).model==='unit'?<Badge tone={wkAv[s.id].count?'success':'danger'}>{wkAv[s.id].count?wkAv[s.id].count+' of '+HP.count(s.id)+' available this weekend':'Sold out this weekend'}</Badge>:<Badge tone="success">Open this weekend</Badge>}</div>
    <ul style={{margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:8}}>{s.pts.map(p=><li key={p} style={{display:'flex',gap:10,alignItems:'center'}}><Icon name="check" size={18}/>{p}</li>)}</ul>
    <div style={{marginTop:4}}><Button variant={s.id==='powered'?'primary':'secondary'} onClick={()=>book({stay:s.id})}>Check Availability</Button></div></div></div>)}</div></Section>
  <Section sunken eyebrow="Campground rules" title="Before you set up.">
   <div className="g3" style={{gap:'24px 32px'}}>{[['plug-zap','Generators','Off during quiet hours.'],['flame','Fires','In rings only. Put it out before bed.'],['moon','Quiet hours','10 PM to 7 AM. Event weekends may differ.'],['shower-head','Bathhouse','Showers and restrooms near the pavilion.'],['clock','Check-in / out','Check in from 2 PM. Out by noon.'],['dog','Pets','Welcome on a leash. Clean up after them.']].map(([i,t,d])=><div key={t} style={{display:'flex',gap:14}}><Icon name={i} size={24} style={{flex:'none'}}/><div><div style={{fontWeight:700,fontSize:17}}>{t}</div><div style={{color:'var(--text-muted)'}}>{d}</div></div></div>)}</div></Section></>}
function Groups(){const {book}=useApp();const P=D().park;const W=HP.weekends(HP.add(HP.today,1),8).map(w=>({...w,ev:HP.eventFor(w.arrive,w.depart)}));
 return <><PageHead eyebrow="Groups" title="Bring the club." intro="Hawk Pride welcomes organized group rides. Pick a weekend, give us a call, and we’ll help you plan it." actions={[<a key="c" href={'tel:'+P.tel} className="hp-btn hp-btn--lg hp-btn--primary" style={{textDecoration:'none'}}><Icon name="phone" size={20}/>Call to Plan a Group Ride</a>]} image={IMG+'hillside-traffic.jpg'} imageAlt="A club riding together"/>
  <Section eyebrow="Who comes" title="Built for a crowd.">
   <div className="g4">{[['Off-road clubs','Monthly rides and club weekends.'],['Jeep groups','Including runs on Uphill Both Ways.'],['Side-by-side groups','Miles of trails wide enough for a convoy.'],['Family & friends','Reunions, birthdays and big crews.']].map(([t,d])=><div key={t} style={{borderTop:'3px solid var(--gold-400)',paddingTop:14}}><div style={{fontWeight:700,fontSize:18}}>{t}</div><div style={{color:'var(--text-muted)',marginTop:4}}>{d}</div></div>)}</div></Section>
  <Section sunken eyebrow="Open weekends" title="Weekends open for groups." intro="Regular weekends are the easiest to coordinate. Event weekends are busy, so call first.">
   <div className="g4" style={{gap:10}}>{W.map(w=><div key={w.arrive} style={{background:'var(--surface-card)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-md)',padding:'14px 16px'}}>
    <div className="hp-display" style={{fontSize:24}}>{HP.range(w.arrive,w.depart)}</div>{w.ev?<Badge tone="warning">{w.ev.title}</Badge>:<Badge tone="success" icon="check">Open for groups</Badge>}</div>)}</div></Section>
  <Section eyebrow="Where your group stays" title="Room for everyone.">
   <div className="g3">{[['Cabins',HP.count('cabin')+' cabins, '+HP.priceLabel('cabin').toLowerCase()+'.','cabins'],['RV sites',HP.count('powered')+' powered and '+HP.count('dry')+' dry pads.','camping'],['Camping','Primitive sites and open camping areas.','camping']].map(([t,d,to])=><div key={t} className="hp-card" style={{padding:20,gap:6}}><div style={{fontWeight:700,fontSize:18}}><TextLink to={to}>{t}</TextLink></div><div style={{color:'var(--text-muted)'}}>{d}</div></div>)}</div></Section>
  <section className="hp-on-dark" style={{background:'var(--black-950)',color:'var(--stone-50)'}}><div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'56px var(--container-pad)',display:'flex',justifyContent:'space-between',alignItems:'center',gap:24,flexWrap:'wrap'}}>
   <div><div className="hp-eyebrow" style={{color:'var(--gold-400)'}}>Plan your group ride</div><a href={'tel:'+P.tel} className="hp-display" style={{fontSize:'var(--fs-display-l)',color:'var(--stone-50)',textDecoration:'none',lineHeight:1}}>{P.phone}</a><div style={{color:'var(--text-inverse-muted)',marginTop:6}}>Tell us your dates, how many are coming and how you’re staying.</div></div>
   <a href={'tel:'+P.tel} className="hp-btn hp-btn--lg hp-btn--primary" style={{textDecoration:'none'}}><Icon name="phone" size={20}/>Call now</a></div></section></>}
const RULES=[['Riders & vehicles',['Every rider pays admission and signs a waiver.','Vehicles must have working brakes and a spill-free fuel system.','Flags on whips are required on event weekends.']],['Safety',['Helmets required on ATVs, dirt bikes and open side-by-sides.','Seat belts on whenever the vehicle is moving.','Ride with a buddy on difficult and extreme trails.']],['Kids & minors',['Riders under 16 must be supervised by an adult.','A parent or guardian signs the waiver for anyone under 18.','Kids 12 and under ride free.']],['Speed & conduct',['15 mph in the campground and near the pavilion.','Stay on marked trails. Closed means closed.','Uphill traffic has the right of way.']],['Alcohol',['No drinking and driving, on or off the trail.','Keep it at camp.']],['Camping & fires',['Fires in rings only.','Quiet hours 10 PM to 7 AM.','Pack out what you pack in.']],['Pets',['Leashed in the campground.','Clean up after them.']],['Not allowed',['Riding after gates close.','Glass on the trails.','Fireworks outside of approved holiday times.']]];
function Rules({waiver}){const [open,setOpen]=React.useState(waiver);const {go}=useApp();React.useEffect(()=>setOpen(waiver),[waiver]);
 return <><PageHead eyebrow="Rules" title="Know before you go." intro="The short version: wear a helmet, stay on the trail, look out for each other. The details are below." actions={[<Button key="w" size="lg" icon="file-text" onClick={()=>setOpen(true)}>Sign Waiver</Button>]}/>
  <Section>
   <div className="g2" style={{gap:'36px 48px'}}>{RULES.map(([t,items])=><div key={t}><h3 className="hp-display" style={{fontSize:'var(--fs-h3)',margin:'0 0 12px',borderBottom:'3px solid var(--gold-400)',paddingBottom:8,display:'inline-block'}}>{t}</h3>
    <ul style={{margin:0,paddingLeft:20,display:'flex',flexDirection:'column',gap:8,fontSize:17,lineHeight:1.5}}>{items.map(x=><li key={x}>{x}</li>)}</ul></div>)}</div>
   <div style={{marginTop:40}}><Alert tone="info" title="Waiver required for every rider">Sign online before you arrive and you’ll go straight through the gate. Booking online? We’ll send you to your waivers right after checkout.</Alert></div>
  </Section>
  {open&&<window.WaiverDialog name="" onClose={()=>{setOpen(false);if(waiver)go('rules')}} onSigned={()=>{}}/>}</>}
function Contact(){const P=D().park;
 return <><PageHead eyebrow="Contact" title="Get in touch." intro="The fastest answer is a phone call. We pick up during park hours." actions={[<a key="c" href={'tel:'+P.tel} className="hp-btn hp-btn--lg hp-btn--primary" style={{textDecoration:'none'}}><Icon name="phone" size={20}/>{P.phone}</a>,<a key="e" href={'mailto:'+P.email} className="hp-btn hp-btn--lg hp-btn--outline" style={{textDecoration:'none'}}><Icon name="mail" size={20}/>Email</a>]}/>
  <Section>
   <div className="split" style={{alignItems:'start'}}>
    <div style={{display:'flex',flexDirection:'column',gap:28}}>
     <div><div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>Address</div><div style={{fontSize:20,fontWeight:700,marginTop:6}}>{P.address}</div><div style={{marginTop:10}}><a className="hp-btn hp-btn--secondary" style={{textDecoration:'none'}} href={'https://maps.google.com/?q='+encodeURIComponent(P.address)} target="_blank" rel="noreferrer"><Icon name="navigation" size={18}/>Directions</a></div></div>
     <div><div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>Park hours</div><div style={{display:'flex',flexDirection:'column',gap:8,marginTop:8,maxWidth:320,fontSize:17}}>{P.hours.map(([d,h])=><Row key={d} l={d} v={h}/>)}</div></div>
     <div><div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>Follow along</div><div style={{display:'flex',gap:16,marginTop:8}}>{P.social.map(([l,i])=><span key={l} style={{display:'inline-flex',gap:8,alignItems:'center',fontWeight:600}}><Icon name={i} size={22}/>{l}</span>)}</div></div>
     <Alert tone="danger" title="Emergency on the trail?">Call 911 first, then the park office. Tell them your trail number from the nearest sign.</Alert>
    </div>
    <div className="hp-card" style={{overflow:'hidden'}}><div className="hp-topo" style={{aspectRatio:'4/3.4',display:'grid',placeItems:'center'}}><span style={{background:'var(--surface-card)',padding:'8px 14px',borderRadius:4,fontSize:14,display:'inline-flex',gap:8,alignItems:'center'}}><Icon name="map-pin" size={18}/>Map · Tuscumbia, AL</span></div></div>
   </div></Section></>}
Object.assign(window,{Fees,Cabins,Camping,Groups,Rules,Contact});
})();
