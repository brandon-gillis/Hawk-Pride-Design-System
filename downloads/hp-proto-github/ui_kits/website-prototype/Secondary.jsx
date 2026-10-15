(()=>{
const {Photo,Button,Icon,Input,Select,Alert,Tabs}=window.DS;
function faqData(){const D=window.HP_DATA,P=D.park,R=D.pricing,F=D.fees,m=HP.money;const hrs=P.hours.filter(h=>h[1]!=='Closed').map(([d,h])=>d+' '+h).join(', ');
 return [
 ['Planning a visit',[
  ['What are the park hours?','We’re open '+hrs+'. Groups, cabin guests and RV guests can make arrangements to come during the week. Call the park at '+P.phone+'.','Contact & hours','contact'],
  ['Can I come during the week?','The park is closed for riding Monday to Thursday, but groups and overnight guests can arrange weekday visits. Give us a call at '+P.phone+' to set it up.','Call the park','tel'],
  ['How much is admission?',m(R.day)+' per rider, per day for days 1 and 2, then '+m(R.dayLater)+' a day from day 3. Kids '+R.freeAge+' and under ride free with a paying adult. Spectators get in free.','See rates','rates'],
  ['Do I need a reservation to ride?','No. You can buy admission online before you come or pay at the gate. Booking ahead gets you through the gate faster.','Buy admission','book:none'],
  ['Are there events?','Yes. Rock crawls, hillclimbs, club rides and holiday weekends. Cabins and RV sites go fast on event weekends, so book early.','See events','events']]],
 ['Riding',[
  ['What vehicles can ride?','ATVs, side-by-sides, Jeeps, trucks and buggies. Trails run from easy wooded loops to extreme rock, and not every trail suits every vehicle.','See the trails','trails'],
  ['Can kids ride?','Yes. Kids '+R.freeAge+' and under ride free with a paying adult. Riders under 16 must be supervised.','Read the rules','rules'],
  ['Is there a trail map?','Yes. Download the current park map before you ride. Trail numbers are on signs throughout the park.','See the trails','trails'],
  ['When can we ride?','During park hours. No riding between 10 PM and daylight.','Read the rules','rules']]],
 ['Staying overnight',[
  ['Do you have RV sites with power?','Yes. Powered RV sites have water and 50 amp electric, '+m(HP.rate('powered'))+' a night, and you can book them online. There’s a dump station near the bathhouse for grey and black tanks.','Camping','camping'],
  ['Can I camp without hookups?','Yes. Camp anywhere in the open camping areas for '+m(HP.rate('anywhere'))+' per person, per night, in a tent or camper. Dry RV sites are '+m(HP.rate('dry'))+' a night and booked by calling the office.','Camping','camping'],
  ['What comes with a cabin?','A/C and heat, a microwave, fridge and coffee pot, beds and bunks, and a fire ring. Bring your own sheets, pillows and blankets. Cabins add a '+m(F.cleaning)+' cleaning fee per booking.','Cabins','cabins'],
  ['When are check-in and check-out?','Check in from '+P.checkin+'. Check out by '+P.checkout+'.','Book Now','book'],
  ['Does an overnight stay include riding?','No. Add riding admission for your riders in the same booking.','Book Now','book'],
  ['Can I bring my dog?','Yes, up to '+F.maxPets+' pets. Keep them leashed and crate them if you leave them alone. Cabin pets must be house-trained and flea-treated, and cost '+m(F.pet)+' each.','Read the rules','rules'],
  ['Are generators and campfires allowed?','Generators are allowed. Fires go in pits and rings only, and firewood is for sale at the park. Quiet hours are 10 PM to daylight.','Read the rules','rules']]],
 ['Waivers & check-in',[
  ['Who needs a waiver?','Every rider and every spectator. A parent or guardian signs for anyone under 18. Sign online before you come and you’ll go straight through the gate.','Sign the waiver','waiver'],
  ['Do I have to stop at check-in?','Yes. Everyone stops at check-in when they arrive to check in and get a wristband.','Read the rules','rules'],
  ['I booked online. What do I bring to the gate?','Your gate pass code from the confirmation. Staff scan it and see your whole party.','Find my trip','confirmation']]],
 ['At the park',[
  ['Do you sell merchandise?','Yes. T-shirts, hoodies, hats, stickers and SAK-IT mesh bags you can hang off the back of your ride.',null,null],
  ['Are there showers and restrooms?','Yes. The bathhouse near the pavilion has showers and restrooms.','Camping','camping'],
  ['Can I bring glass or fireworks?','No glass on the trails. Fireworks are only allowed on the 4th of July and New Year’s.','Read the rules','rules']]]]}
function Faq(){const {go,book}=useApp();const P=window.HP_DATA.park;const [open,setOpen]=React.useState('0-0');const G=faqData();
 const link=(cta,to)=>to==='waiver'?<TextLink href={P.waiver} target="_blank" rel="noopener">{cta}</TextLink>:to==='tel'?<TextLink href={'tel:'+P.tel}>{cta}</TextLink>:<TextLink onClick={()=>to==='book:none'?book({stay:'none'}):to==='book'?book():go(to)}>{cta}</TextLink>;
 return <><PageHead eyebrow="FAQ" title="Quick answers." intro="The questions we get most. Still stuck? Call us during park hours." actions={<Button href={'tel:'+P.tel} size="lg" variant="outline" icon="phone">{P.phone}</Button>}/>
  <Section><div className="hp-accordion">
   {G.map(([g,qs],gi)=><Accordion key={g} heading={g} value={open} onChange={setOpen} items={qs.map(([q,a,cta,to],qi)=>({id:gi+'-'+qi,title:q,content:<><p>{a}</p>{cta&&link(cta,to)}</>}))}/>)}
  </div></Section></>}
const SHOTS=[['Riding','hillside-traffic.jpg','Rigs climbing the hill',1],['Riding','buggy-airborne.jpg','Buggy catching air'],['Trails','rock-ledge-buggies.jpg','Buggies on a rock ledge'],['Trails','trail-forest.jpg','Side-by-sides on a wooded trail'],['Trails','trail-jeep.jpg','Jeep on a steep climb'],['Events','event-crawl-crowd.jpg','Event crowd at the rock pit',1],['Camping','fire-sunset.jpg','Campfire at sunset'],['Camping','pavilion-jeeps.jpg','Rigs lined up at the pavilion'],['Riding','trail-flex-1.jpg','Flexing on the rocks at night'],['Riding','trail-flex-2.jpg','Night crawl under the lights'],['Cabins','cabin-7-interior-1.jpg','Bunks in Cabin 7'],['Cabins','cabin-2-exterior.jpg','Cabin 2'],['Camping','rv-overview.jpg','The RV area',1],['The park','sign-gate.jpg','The front gate'],['The park','pavilion.jpg','The pavilion'],['The park','wash-station.jpg','Pressure-washing station',1]];
function Gallery(){const {book}=useApp();const [f,setF]=React.useState('All');const cats=['All',...new Set(SHOTS.map(s=>s[0]))];const list=f==='All'?SHOTS:SHOTS.filter(s=>s[0]===f);
 return <><PageHead eyebrow="Gallery" title="See it before you ride it." intro="Real photos from the park. Riding, trails, events, camping and the people who come back every weekend." actions={<Button size="lg" onClick={()=>book()}>Book Now</Button>}/>
  <Section><div className="hp-stack hp-stack--6">
   <Tabs variant="pill" label="Filter photos" items={cats.map(c=>({id:c,label:c}))} value={f} onChange={setF}/>
   <div className="mosaic">{list.map(([c,s,a,w])=><div key={a} className={cx('mosaic__item',w&&f==='All'&&'mosaic__item--wide')}><Photo src={hpAsset(s)} alt={a} ratio="auto" className="hp-photo--fill"/></div>)}</div>
  </div></Section></>}
function NotFound(){const {go,book}=useApp();
 return <Section eyebrow="404" title="Wrong turn." intro="That page isn’t here. It may have moved when the site was rebuilt.">
  <div className="hp-actions"><Button onClick={()=>book()}>Book Now</Button><Button variant="outline" onClick={()=>go('home')}>Home</Button><Button variant="ghost" onClick={()=>go('events')}>Events</Button><Button variant="ghost" onClick={()=>go('rates')}>Rates</Button><Button variant="ghost" onClick={()=>go('contact')}>Contact</Button></div></Section>}
function ContactForm(){const [v,setV]=React.useState({name:'',email:'',topic:'General question',msg:''});const [sent,setSent]=React.useState(false);const [tried,setTried]=React.useState(false);
 const err={name:!v.name.trim()&&'Required',email:!/^\S+@\S+\.\S+$/.test(v.email)&&'Enter a valid email',msg:v.msg.trim().length<5&&'Tell us a little more'};const e=k=>tried?err[k]||undefined:undefined;
 if(sent)return <Alert tone="success" title="Message sent">Thanks, {v.name.split(' ')[0]}. We’ll reply to {v.email} within 2 business days. For anything urgent, call us.</Alert>;
 return <form onSubmit={x=>{x.preventDefault();setTried(true);if(!Object.values(err).some(Boolean))setSent(true)}} className="hp-card hp-card--padded" noValidate>
  <div className="hp-eyebrow hp-eyebrow--accent">Send us a message</div>
  <div className="hp-grid hp-grid--2 hp-grid--form"><Input label="Name" autoComplete="name" value={v.name} error={e('name')} onChange={x=>setV({...v,name:x.target.value})}/><Input label="Email" type="email" autoComplete="email" icon="mail" value={v.email} error={e('email')} onChange={x=>setV({...v,email:x.target.value})}/></div>
  <Select label="Topic" value={v.topic} onChange={x=>setV({...v,topic:x.target.value})} options={['General question','Booking or my trip','Events','Group rides','Partners and sponsors']}/>
  <Textarea id="ct-msg" label="Message" rows={5} value={v.msg} error={e('msg')} onChange={x=>setV({...v,msg:x.target.value})}/>
  <div className="hp-spread"><span className="hp-caption hp-muted">Demo only. Nothing is sent.</span><Button type="submit" icon="send">Send message</Button></div></form>}
Object.assign(window,{Faq,Gallery,NotFound,ContactForm});
})();
