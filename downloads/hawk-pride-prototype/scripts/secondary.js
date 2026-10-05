(()=>{
const {Photo,Button,Icon,Input,Select,Alert}=window.DS;
const FAQ=[
 ['Planning a visit',[
  ['Do I need a reservation to ride?','No. You can buy admission online before you come or pay at the gate. Booking ahead gets you through the gate faster.','Buy admission','book:none'],
  ['When is the park open?',null,'Contact & hours','contact'],
  ['What does a normal visit cost?',null,'See rates','rates']]],
 ['Riding',[
  ['Is Hawk Pride only for hard rock crawling?','No. Trails run from easy wooded loops to extreme rock, and every trail is marked by difficulty.','See the trails','trails'],
  ['What vehicles can ride?','ATVs, side-by-sides, Jeeps, trucks and buggies. Some trails are limited to certain vehicles.','See the trails','trails'],
  ['Can kids ride?',null,'Read the rules','rules']]],
 ['Staying overnight',[
  ['What are my overnight options?','Cabins, powered RV sites, dry RV sites, primitive campsites and camp anywhere.','Cabins','cabins'],
  ['Does an overnight stay include riding?','No. Add riding admission for your riders in the same booking.','Book Now','book']]],
 ['Waivers & check-in',[
  ['Who needs a waiver?','Every rider. A parent or guardian signs for riders under 18.','Sign Waiver','rules/waiver'],
  ['I booked online. What do I bring to the gate?','Your gate pass code from the confirmation. Staff scan it and see your whole party.','Find my trip','confirmation']]]];
function Faq(){const {go,book}=useApp();const P=window.HP_DATA;const [open,setOpen]=React.useState('0-0');
 const auto=q=>q==='When is the park open?'?P.park.hours.map(([d,h])=>d+': '+h).join(' · ')+'.':q==='What does a normal visit cost?'?HP.money(P.pricing.day)+' per rider per day, '+HP.money(P.pricing.dayLater)+' from day 3. Kids '+P.pricing.freeAge+' and under ride free.':q==='Can kids ride?'?'Yes. Kids '+P.pricing.freeAge+' and under ride free with a paying adult. Riders under 16 must be supervised.':'';
 const act=to=>to==='book:none'?book({stay:'none'}):to==='book'?book():go(to);
 return <><PageHead eyebrow="FAQ" title="Quick answers." intro="The questions we get most. Still stuck? Call us during park hours." actions={[<a key="c" href={'tel:'+P.park.tel} className="hp-btn hp-btn--lg hp-btn--outline" style={{textDecoration:'none'}}><Icon name="phone" size={20}/>{P.park.phone}</a>]}/>
  <Section><div style={{display:'flex',flexDirection:'column',gap:40,maxWidth:880}}>{FAQ.map(([g,qs],gi)=><div key={g}>
   <h2 className="hp-display" style={{fontSize:'var(--fs-h3)',margin:'0 0 8px',borderBottom:'3px solid var(--gold-400)',paddingBottom:8,display:'inline-block'}}>{g}</h2>
   {qs.map(([q,a,cta,to],qi)=>{const id=gi+'-'+qi,o=open===id;return <div key={q} style={{borderBottom:'1px solid var(--border-subtle)'}}>
    <button aria-expanded={o} onClick={()=>setOpen(o?null:id)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,background:'none',border:0,padding:'18px 0',font:'inherit',fontSize:18,fontWeight:700,textAlign:'left',cursor:'pointer',color:'var(--text-strong)',minHeight:44}}>{q}<Icon name={o?'minus':'plus'} size={20} style={{flex:'none'}}/></button>
    {o&&<div style={{padding:'0 0 20px',display:'flex',flexDirection:'column',gap:10,alignItems:'flex-start'}}><p style={{margin:0,fontSize:17,lineHeight:1.55,color:'var(--text-muted)',maxWidth:680}}>{a||auto(q)}</p><TextLink onClick={()=>act(to)}>{cta}</TextLink></div>}</div>})}
  </div>)}</div>
  <div style={{marginTop:32}}><Callout>Sample questions. Final FAQ wording comes from the owner and must match the rates, rules and hours data.</Callout></div></Section></>}
const SHOTS=[['Riding',hpAsset('hillside-traffic.jpg'),'Rigs climbing the hill','2/1'],['Riding',hpAsset('buggy-airborne.jpg'),'Buggy catching air','1/1'],['Trails',hpAsset('rock-ledge-buggies.jpg'),'Buggies on a rock ledge','1/1'],['Trails',null,'Wooded trail, easy loop','1/1'],['Events',hpAsset('event-crawl-crowd.jpg'),'Event crowd at the rock pit','2/1'],['Camping',null,'Campfire at the RV pads','1/1'],['Camping',hpAsset('pavilion-jeeps.jpg'),'Rigs lined up at the pavilion','1/1'],['Families',null,'Family at the overlook','1/1'],['Views',null,'View across the property','2/1'],['Groups',null,'Club lined up at the trailhead','1/1']];
function Gallery(){const {book}=useApp();const [f,setF]=React.useState('All');const cats=['All',...new Set(SHOTS.map(s=>s[0]))];const list=f==='All'?SHOTS:SHOTS.filter(s=>s[0]===f);
 return <><PageHead eyebrow="Gallery" title="See it before you ride it." intro="Real photos from the park. Riding, trails, events, camping and the people who come back every weekend." actions={[<Button key="b" size="lg" onClick={()=>book()}>Book Now</Button>]}/>
  <Section>
   <div role="tablist" style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:24}}>{cats.map(c=><button key={c} role="tab" aria-selected={f===c} onClick={()=>setF(c)} className="hp-btn hp-btn--sm" style={{background:f===c?'var(--black-950)':'transparent',color:f===c?'var(--gold-400)':'var(--text-strong)',borderColor:f===c?'var(--black-950)':'var(--border-default)',minHeight:44}}>{c}</button>)}</div>
   <div style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gridAutoRows:'clamp(150px,18vw,280px)',gap:10}} className="proto-life">{list.map(([c,s,a,r])=><div key={a} style={{gridColumn:r==='2/1'&&f==='All'?'span 2':'span 1',position:'relative',borderRadius:'var(--radius-md)',overflow:'hidden'}}><Photo src={s||undefined} caption={s?undefined:a} alt={a} ratio="auto" style={{position:'absolute',inset:0,aspectRatio:'auto',borderRadius:0}}/></div>)}</div>
   <div style={{marginTop:24}}><Callout>Striped tiles are shots we still need from the owner.</Callout></div></Section></>}
function NotFound(){const {go,book}=useApp();
 return <Section eyebrow="404" title="Wrong turn." intro="That page isn’t here. It may have moved when the site was rebuilt.">
  <div style={{display:'flex',gap:12,flexWrap:'wrap'}}><Button onClick={()=>book()}>Book Now</Button><Button variant="outline" onClick={()=>go('home')}>Home</Button><Button variant="ghost" onClick={()=>go('events')}>Events</Button><Button variant="ghost" onClick={()=>go('rates')}>Rates</Button><Button variant="ghost" onClick={()=>go('contact')}>Contact</Button></div></Section>}
function ContactForm(){const [v,setV]=React.useState({name:'',email:'',topic:'General question',msg:''});const [sent,setSent]=React.useState(false);const [tried,setTried]=React.useState(false);
 const err={name:!v.name.trim()&&'Required',email:!/^\S+@\S+\.\S+$/.test(v.email)&&'Enter a valid email',msg:v.msg.trim().length<5&&'Tell us a little more'};const e=k=>tried?err[k]||undefined:undefined;
 if(sent)return <Alert tone="success" title="Message sent">Thanks, {v.name.split(' ')[0]}. We’ll reply to {v.email}. For anything urgent, call us.</Alert>;
 return <form onSubmit={x=>{x.preventDefault();setTried(true);if(!Object.values(err).some(Boolean))setSent(true)}} className="hp-card" style={{padding:24,gap:14}} noValidate>
  <div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>Send us a message</div>
  <div className="g2" style={{gap:14}}><Input label="Name" value={v.name} error={e('name')} onChange={x=>setV({...v,name:x.target.value})}/><Input label="Email" type="email" icon="mail" value={v.email} error={e('email')} onChange={x=>setV({...v,email:x.target.value})}/></div>
  <Select label="Topic" value={v.topic} onChange={x=>setV({...v,topic:x.target.value})} options={['General question','Booking or my trip','Events','Group rides','Partners and sponsors']}/>
  <div className={'hp-field'+(e('msg')?' hp-field--error':'')}><label className="hp-field__label" htmlFor="ct-msg">Message</label><div className="hp-field__control"><textarea id="ct-msg" rows={5} value={v.msg} aria-invalid={e('msg')?true:undefined} onChange={x=>setV({...v,msg:x.target.value})} style={{width:'100%',font:'inherit',fontSize:16,padding:'12px 14px',border:'1.5px solid var(--border-default)',borderRadius:'var(--radius-sm,4px)',background:'var(--surface-card)',color:'inherit',resize:'vertical'}}/></div>{e('msg')&&<div className="hp-field__hint">{e('msg')}</div>}</div>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}><span style={{fontSize:13,color:'var(--text-muted)'}}>Demo only. Nothing is sent.</span><Button type="submit" icon="send">Send message</Button></div></form>}
Object.assign(window,{Faq,Gallery,NotFound,ContactForm});
})();
