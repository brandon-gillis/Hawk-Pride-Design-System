(()=>{
const {Photo,Button,Icon,DifficultyBadge}=window.DS;
const BADGE='../../assets/badges/badge-uphill-both-ways.svg',JEEP='../../assets/badges/jeep-badge-of-honor.png',MAPS='../../assets/maps/',JEEP_URL='https://www.jeep.com/badge-of-honor.html';
const jump=id=>{const el=document.getElementById(id);el&&window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-84,behavior:'smooth'})};
function Owner({children='Owner to confirm'}){return <span className="owner-tag"><Icon name="info" size={12}/>{children}</span>}

function Hero(){const {go,book}=useApp();
 return <div className="hp-hero">
  <Photo src={hpAsset('uphill-both-ways.png')} alt="Jeeps climbing a rock channel between boulders on Uphill Both Ways" position="45% 55%" ratio="auto" className="hp-photo--fill"/>
  <div className="hp-scrim hp-scrim--deep"/>
  <div className="hp-hero__inner hp-on-dark ubw-hero">
   <div>
    <Button variant="ghost" size="sm" icon="arrow-left" className="hp-backlink" onClick={()=>go('trails')}>Trails</Button>
    <div className="hp-eyebrow hp-eyebrow--accent">Jeep® Badge of Honor® trail · Hawk Pride Offroad</div><span className="hp-rule"/>
    <h1 className="hp-display hp-display-xl">Uphill Both Ways</h1>
    <p className="ubw-hero__tag">Earn your Jeep Badge of Honor at Hawk Pride.</p>
    <div className="hp-actions"><Button size="lg" onClick={()=>book()}>Plan your trip</Button><Button size="lg" variant="outline" icon="map-pinned" onClick={()=>jump('ubw-find')}>Find the trailhead</Button></div>
   </div>
   <div className="ubw-hero__badge"><img src={JEEP} alt="Jeep Badge of Honor"/></div>
  </div></div>}

function Trail(){const F=[['Difficulty',<DifficultyBadge key="d" level="difficult"/>],['Length','0.3 mi'],['Typical run','1–2 hrs'],['Jeep rating','6 / 10'],['onX rating','7 / 10'],['Badge tier','Core']];
 return <Section>
  <div className="ubw-about">
   <div className="hp-stack hp-stack--6">
    <div>
     <div className="hp-eyebrow hp-eyebrow--accent">About the trail</div><span className="hp-rule"/>
     <h2 className="hp-display hp-h1">0.3 miles and you'll earn every inch.</h2>
     <p className="hp-lede">Uphill Both Ways gets technical almost as soon as you drop in, and it stays that way to the end.</p>
    </div>
    <p className="hp-body-l hp-measure">Expect a V-notch, rock ledges, off-camber climbs, tight trees and rocks big enough to max out your suspension. Short as it is, it’s one of the toughest Badge of Honor runs in the Southeast.</p>
    <dl className="ubw-facts-grid">{F.map(([l,v])=><div key={l}><dt className="hp-eyebrow hp-eyebrow--muted">{l}</dt><dd className="ubw-fact__v">{v}</dd></div>)}</dl>
   </div>
   <div className="ubw-about__photo"><Photo src={hpAsset('trail-jeep.jpg')} alt="Jeep climbing a steep wooded line" ratio="auto" className="hp-photo--fill"/></div>
  </div>
  <Proof/></Section>}

const ONX_URL='https://www.onxmaps.com/offroad/trails/us/alabama/113-uphill-both-ways-1mzjy44wgzd7';
const REC=['Lockers','Winch','Skid plates + rock sliders','Recovery gear','A spotter and a second rig'];
const FACE=['Ledges 2–3 ft tall','Rocks above axle height','Off-camber sections and tight trees','Full-width Jeeps fit'];
function Capable(){const col=(t,items,icon)=><div><div className="hp-eyebrow hp-eyebrow--accent ubw-rig__head">{t}</div><ul className="ubw-list">{items.map(x=><li key={x}><Icon name={icon} size={18}/>{x}</li>)}</ul></div>;
 return <Section sunken eyebrow="Rig check" title="Can your Jeep do it?" intro="This is a seriously challenging badge trail with V-notch, rock ledges, off-camber climbs, tight trees and rocks. Stock Jeeps not recommended.">
  <div className="hp-card hp-card--padded ubw-rig">
   <div className="hp-split">{col('Recommended',REC,'check')}{col('What you’ll face',FACE,'mountain')}</div>
   <p className="hp-ruled hp-muted">Check conditions: Dry, it's a serious technical challenge. Add Alabama rain and it's a full on rodeo.</p>
  </div></Section>}

function Track(){const U=window.HP_DATA.ubw,all=[...U.route,...U.track];const la=all.map(p=>p[0]),lo=all.map(p=>p[1]);const k=Math.cos(34.67*Math.PI/180);
 const minX=Math.min(...lo)*k,maxX=Math.max(...lo)*k,minY=Math.min(...la),maxY=Math.max(...la),W=400,pad=24,sc=(W-pad*2)/(maxX-minX),H=Math.round((maxY-minY)*sc+pad*2);
 const P=([a,b])=>[(b*k-minX)*sc+pad,(maxY-a)*sc+pad],path=pts=>pts.map((p,i)=>(i?'L':'M')+P(p).map(n=>n.toFixed(1)).join(' ')).join(' ');
 const [hx,hy]=P(U.track[0]);
 return <svg viewBox={'0 0 '+W+' '+H} aria-hidden="true" className="ubw-res__track"><path d={path(U.route)} fill="none" stroke="var(--stone-400)" strokeWidth="3" strokeDasharray="1 8" strokeLinecap="round"/><path d={path(U.track)} fill="none" stroke="var(--gold-400)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/><circle cx={hx} cy={hy} r="8" fill="var(--black-950)" stroke="var(--gold-400)" strokeWidth="3"/></svg>}
function Resources(){const R=[[MAPS+'track-getting-to-uphill-both-ways.gpx','download','Route to trailhead','.gpx',true],[MAPS+'track-uphill-both-ways.gpx','download','Trail track','.gpx',true],[ONX_URL,'map-pinned','View in onX','App'],[MAPS+'HawkPride_Official-Map-2026.pdf','map','Full park map','PDF']];
 return <section id="ubw-find" className="ubw-res"><div className="hp-container ubw-res__inner">
  <Track/>
  <div className="ubw-res__body">
   <div className="hp-eyebrow hp-eyebrow--accent">Resources</div><span className="hp-rule"/>
   <div className="ubw-res__grid">{R.map(([h,i,l,t,d])=><a key={l} href={h} {...(d?{download:true}:{target:'_blank',rel:'noopener'})} className="hp-card ubw-res__link"><Icon name={i} size={22}/><span className="hp-strong">{l}</span><span className="hp-eyebrow hp-eyebrow--muted ubw-res__type">{t}</span></a>)}</div>
   <div className="ubw-res__note"><Owner>Swap in onX “Share Trail” link</Owner></div>
  </div></div></section>}

const STEPS=[['Download the app','Get Jeep Badge of Honor.'],['Check in','At Uphill Both Ways.'],['Conquer it','Complete the trail.'],['Claim your badge','Request it through Jeep.']];
function EarnFind(){const {book}=useApp();return <Section dark className="ubw-earnsec">
  <div className="ubw-earn">
   <div className="ubw-earn__badge"><img src={BADGE} alt="Uphill Both Ways Badge of Honor badge"/><span className="hp-small">Official badge, issued by Jeep</span></div>
   <div>
    <div className="hp-eyebrow hp-eyebrow--accent">Jeep Badge of Honor</div><span className="hp-rule"/>
    <h2 className="hp-display hp-h1">How to earn your badge.</h2>
    <ol className="ubw-steps">{STEPS.map(([t,d],i)=><li key={t}><span className="hp-display hp-h2 ubw-steps__n">{String(i+1).padStart(2,'0')}</span><div className="ubw-steps__t"><span className="hp-card__title">{t}</span><span>{d}</span></div></li>)}</ol>
    <div className="hp-cluster ubw-earn__cta">
     <Button href={JEEP_URL} target="_blank" rel="noopener" size="lg" iconRight="external-link">Get the Jeep Badge of Honor app</Button>
     <span>Park admission and a waiver required. <TextLink onClick={()=>book({stay:'none'})}>Buy admission</TextLink></span>
    </div>
    <div className="ubw-earn__note"><Owner>Cell service at the trailhead</Owner></div>
   </div>
  </div></Section>}

const PROOF=[['“One of the best Badge of Honor trails on the East Coast.”','Hutch May · onX',['Read the trail report','https://www.onxmaps.com/offroad/trails/us/alabama/113-uphill-both-ways-1mzjy44wgzd7']],
 ['“17 Jeeps started. 13 finished.”','One Jeep club, YJ through Gladiator',['Read the run report','https://www.jeepgladiatorforum.com/forum/threads/what-did-you-do-with-your-gladiator-today.39884/page-172']],
 ['“Wet. Winches. Badge earned.”','Road Rash Off Road',['Watch the run','https://www.youtube.com/watch?v=e8kEiOUCoNA']]];
function Proof(){return <div className="ubw-proof" aria-label="What riders say">{PROOF.map(([h,by,[l,u]])=><figure key={h}>
   <blockquote className="hp-card__title">{h}</blockquote>
   <figcaption className="hp-small hp-muted">{by}</figcaption>
   <TextLink href={u} target="_blank" rel="noopener" iconRight="arrow-right">{l}</TextLink></figure>)}</div>}

function Weekend(){const {book}=useApp();
 const S=[['Cabins','cabin','Stay on the mountain.',HP.rate('cabin'),'From ','cabin-2-exterior.jpg'],['Powered RV','powered','Bring the whole setup.',HP.rate('powered'),'','rv-a.jpg'],['Camping','anywhere','Sleep under the trees.',HP.rate('anywhere'),'From ','fire-sunset.jpg']];
 return <Section sunken eyebrow="Stay + plan" title="Come for the badge. Stay for the mountain.">
  <div className="hp-grid hp-grid--3">{S.map(([t,id,d,p,from,img])=><div key={id} className="hp-card"><Photo src={hpAsset(img)} alt={t} ratio="16/10"/><div className="hp-card__body">
   <div className="hp-spread hp-spread--baseline"><h3 className="hp-card__title">{t}</h3><div className="hp-price">{from&&<small>{from}</small>}{HP.money(p)}<small>/ night</small></div></div>
   <p className="hp-card__text">{d}</p>
   <div className="hp-card__foot"><Button variant="secondary" onClick={()=>book({stay:id})}>Check Availability</Button></div></div></div>)}</div></Section>}

const QA=[['Can I run it in reverse?','Absolutely. Some even say it\'s better that way.'],['Can I run it in a side-by-side or non-Jeep 4x4?','Yes, if your rig fits. Only Jeeps registered in the Jeep app can earn the badge.'],['Bringing a club?','Call us to plan it. Regular weekends are easiest; event weekends get busy.'],['Is it open on event weekends?','Yes. It can be run anytime the park is open.'],['What if I break down on the trail?','Fortunately it\'s right off of a main trail. Call the park office and we\'ll bail you out. However, it\'s highly recommended to go with a buddy and a strong winch.']];
function Questions(){return <Section eyebrow="Questions riders ask" title="Before you go.">
  <div className="hp-accordion"><Accordion items={QA.map(([q,a],i)=>({id:'q'+i,title:q,content:a}))}/></div></Section>}

function UphillBothWays(){return <><Hero/><Trail/><Capable/><Resources/><EarnFind/><Weekend/><Questions/></>}
Object.assign(window,{UphillBothWays});
})();
