(()=>{
const {Photo,Button,Icon,Badge,DifficultyBadge}=window.DS;
const BADGE='../../assets/badges/badge-uphill-both-ways.svg',JEEP='../../assets/badges/jeep-badge-of-honor.png',MAPS='../../assets/maps/';
const ST={dry:{label:'Open · Dry',tone:'success',icon:'sun',text:'Rock has grip. Expect a slow, technical run.'},wet:{label:'Open · Wet',tone:'warning',icon:'cloud-rain',text:'Slick rock and mud. Harder, slower, more recovery.'},closed:{label:'Closed',tone:'danger',icon:'octagon-alert',text:'Uphill Both Ways is closed today. The rest of the park may be open.'}};
const jump=id=>{const el=document.getElementById(id);el&&window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-84,behavior:'smooth'})};
const mono={font:'600 12px/1.3 var(--font-mono)',textTransform:'uppercase',letterSpacing:'.04em'};
function Pending({children,dark,block}){return <span style={{display:block?'flex':'inline-flex',gap:6,alignItems:'flex-start',border:'1px dashed '+(dark?'var(--stone-400)':'var(--gold-700)'),background:dark?'rgba(252,208,0,.08)':'var(--gold-50,#fffbe6)',color:dark?'var(--stone-100)':'var(--text-strong)',borderRadius:4,padding:'3px 8px',font:'500 13px/1.45 var(--font-mono)',textAlign:'left'}}><Icon name="info" size={14} style={{flex:'none',marginTop:2}}/><span>{children}</span></span>}
function Src({children,dark}){return <span style={{...mono,fontSize:11,color:dark?'var(--stone-300)':'var(--text-muted)'}}>{children}</span>}
function Status({s,dark}){const x=ST[s];return <span style={{display:'inline-flex',gap:10,alignItems:'center',flexWrap:'wrap'}}><Badge tone={x.tone} icon={x.icon}>{x.label}</Badge><span style={{fontSize:14,color:dark?'var(--stone-200)':'var(--text-muted)'}}>Updated {window.HP_DATA.ubw.updated}</span></span>}

function Hero({s}){const {go,book}=useApp();
 return <div style={{position:'relative',minHeight:'min(88vh,740px)',display:'flex',alignItems:'flex-end',background:'var(--black-900)'}}>
  <Photo caption="Hero · Jeep running Uphill Both Ways (owner photo)" ratio="auto" style={{position:'absolute',inset:0,aspectRatio:'auto',borderRadius:0}}/>
  <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(13,13,11,.96), rgba(13,13,11,.35) 75%)'}}/>
  <div className="hp-on-dark ubw-hero" style={{position:'relative',width:'100%',maxWidth:'var(--container-max)',margin:'0 auto',padding:'120px var(--container-pad) 48px',color:'var(--stone-50)'}}>
   <div>
    <button onClick={()=>go('trails')} className="hp-btn hp-btn--ghost hp-btn--sm" style={{marginLeft:-10,color:'var(--stone-200)'}}><Icon name="arrow-left" size={16}/>Trails</button>
    <div className="hp-eyebrow" style={{color:'var(--gold-400)',marginTop:10}}>Jeep® Badge of Honor® trail · Hawk Pride Offroad</div>
    <h1 className="hp-display" style={{margin:'10px 0 0',fontSize:'var(--fs-display-xl)',lineHeight:.9}}>Uphill Both Ways</h1>
    <p style={{fontSize:24,fontWeight:700,margin:'16px 0 6px',maxWidth:620}}>Earn your Jeep Badge of Honor at Hawk Pride.</p>
    <p style={{fontSize:18,maxWidth:560,color:'var(--stone-200)',margin:0,textWrap:'pretty'}}>A third of a mile of ledges, notches and off-camber rock that asks for a careful line on every move.</p>
    <div className="ubw-facts">{[['6/10','Jeep rating'],['1–2 hrs','Typical run'],['Rock & climbs','Technical']].map(([v,l])=><div key={l}><div className="hp-display" style={{fontSize:34,lineHeight:1,color:'var(--gold-400)'}}>{v}</div><div style={{...mono,color:'var(--stone-300)',marginTop:6}}>{l}</div></div>)}</div>
    <div style={{margin:'0 0 24px'}}><Status s={s} dark/></div>
    <div style={{display:'flex',gap:12,flexWrap:'wrap'}}><Button size="lg" onClick={()=>book()}>Plan your trip</Button><Button size="lg" variant="outline" icon="map-pinned" onClick={()=>jump('ubw-find')}>Find the trailhead</Button></div>
   </div>
   <div className="ubw-hero__badge"><img src={BADGE} alt="Uphill Both Ways Badge of Honor badge"/><Pending dark>Confirm approved badge artwork + permission to display</Pending></div>
  </div></div>}

function Meet(){const F=[['Jeep Badge of Honor rating','6 / 10','Jeep · to confirm'],['onX technical rating','7 / 10 · Difficult','onX Offroad'],['Length','0.3 mi','onX · park GPX'],['Typical time','1–2 hrs dry','Guides · to confirm'],['Trail type','Full-width road','onX Offroad'],['Season','Year-round','onX Offroad'],['Badge tier',<Pending key="p">Core or Limited</Pending>,'Jeep']];
 return <Section>
  <div className="split split--wide" style={{alignItems:'start'}}>
   <div><div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>The trail</div><span className="hp-rule" style={{margin:'8px 0 12px'}}/>
    <h2 className="hp-display" style={{fontSize:'var(--fs-h1)',margin:'0 0 18px',lineHeight:1}}>Meet Uphill Both Ways.</h2>
    <div style={{display:'flex',flexDirection:'column',gap:14,fontSize:18,lineHeight:1.6,maxWidth:640,textWrap:'pretty'}}>
     <p style={{margin:0}}>Uphill Both Ways is short, and it doesn’t let up. In about a third of a mile you work through a V-notch near the start, a 2–3 foot ledge, loose rock and washes, off-camber stretches and tight trees. Some rocks sit taller than your axles.</p>
     <p style={{margin:0}}>Line choice matters more than horsepower here. Most moves mean stopping, looking, and picking where each tire goes, and a good spotter earns their keep. There’s a big boulder in the trail with a way around it, if you want one.</p>
     <p style={{margin:0}}>Finish it and you’ve earned a badge you can bolt to your Jeep.</p></div>
    <div style={{marginTop:16}}><Pending>Owner to review description against real trail knowledge</Pending></div>
   </div>
   <div style={{display:'flex',flexDirection:'column',gap:16}}>
    <Photo caption="Trail photo or short video (owner to provide)" ratio="4/3"/>
    <div className="hp-card" style={{padding:'4px 20px'}}>{F.map(([l,v,src])=><div key={l} style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) auto',gap:'2px 12px',padding:'12px 0',borderBottom:'1px solid var(--border-subtle)'}}><span style={{color:'var(--text-muted)',fontSize:15}}>{l}</span><span style={{fontWeight:700,textAlign:'right'}}>{v}</span><Src>{src}</Src></div>)}
     <p style={{fontSize:13,color:'var(--text-muted)',margin:'12px 0 14px'}}>Jeep’s Badge of Honor rating and onX’s technical rating are separate scales.</p></div>
   </div></div></Section>}

const OB=[['The V-notch','Near the start. A narrow rock notch that twists the frame and tests articulation in the first few minutes.'],['The ledge','A 2–3 foot rock step. Place the front tires, keep the rear straight, and listen to your spotter.'],['Off-camber + trees','Loose rock and washes on a tilt, with trees close on both sides. Watch the downhill side and your mirrors.'],['The big boulder','A large boulder sits in the trail. Climb it or take the route around it.']];
function Conquer(){return <Section sunken eyebrow="What you’ll conquer" title="In the order you’ll meet them." intro="Four features define the run. Expect rocks that can top axle height throughout.">
  <div className="g4">{OB.map(([t,d],i)=><div key={t} className="hp-card" style={{overflow:'hidden'}}>
   <Photo caption={t+' (owner photo)'} ratio="4/3" style={{borderRadius:0}}/>
   <div style={{padding:'18px 20px 22px',display:'flex',flexDirection:'column',gap:8}}><span className="hp-display" style={{fontSize:40,lineHeight:1,color:'var(--gold-700)'}}>{String(i+1).padStart(2,'0')}</span><h3 className="hp-card__title" style={{margin:0,fontSize:22}}>{t}</h3><p style={{margin:0,color:'var(--text-muted)'}}>{d}</p></div></div>)}</div>
  <div style={{marginTop:20}}><Pending>Owner to confirm obstacle names, order, direction and one photo each. Features listed from onX trail notes.</Pending></div></Section>}

const SPEC=[['High clearance','Yes. onX lists the trail for high-clearance vehicles.'],['Full-width Jeep','Yes. onX lists it as full-width accessible, with tight trees in places.'],['Tire size',null],['Lockers',null],['Winch',null],['Recovery points',null],['Armor / sliders',null],['Recovery gear',null],['Experience','Difficult technical trail.',true]];
function Capable({s,setS}){return <Section id="ubw-capable" eyebrow="Capability" title="Can my Jeep conquer it?" intro="What the trail asks of your Jeep, your gear and your driving, and how today’s conditions change that.">
  <div className="split split--wide" style={{alignItems:'start'}}>
   <div className="hp-card" style={{padding:'4px 20px'}}>
    <div style={{display:'grid',gridTemplateColumns:'170px minmax(0,1fr)',gap:16,padding:'14px 0',borderBottom:'2px solid var(--black-950)',...mono}}><span>Your Jeep</span><span>Guidance</span></div>
    {SPEC.map(([l,v,p])=><div key={l} style={{display:'grid',gridTemplateColumns:'170px minmax(0,1fr)',gap:16,padding:'14px 0',borderBottom:'1px solid var(--border-subtle)',alignItems:'start'}}><span style={{fontWeight:700}}>{l}</span><span style={{display:'flex',flexDirection:'column',gap:6,alignItems:'flex-start'}}>{v&&<span>{v}</span>}{(!v||p)&&<Pending>{v?'Owner to define recommended driver experience':'Hawk Pride to confirm minimum / recommended'}</Pending>}</span></div>)}
    <div style={{padding:'12px 0 14px'}}><Src>Clearance + width: onX Offroad</Src></div></div>
   <div style={{display:'flex',flexDirection:'column',gap:16}}>
    <Photo caption="Jeep on a technical obstacle: tire placement + spotting (owner photo)" ratio="16/10"/>
    {[['Stock Jeep?'],['33s?'],['35s+?']].map(([q])=><div key={q} style={{display:'grid',gridTemplateColumns:'110px minmax(0,1fr)',gap:16,alignItems:'center',paddingBottom:14,borderBottom:'1px solid var(--border-subtle)'}}><span className="hp-display" style={{fontSize:30,lineHeight:1}}>{q}</span><Pending>Direct, conservative park answer</Pending></div>)}
   </div></div>
  <div id="ubw-conditions" style={{marginTop:48}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:16,flexWrap:'wrap',marginBottom:16}}><div><h3 className="hp-display" style={{fontSize:'var(--fs-h2)',margin:0}}>Conditions matter.</h3><p style={{margin:'6px 0 0',color:'var(--text-muted)'}}>Rain changes this trail more than anything else. Check before you drop in.</p></div><Status s={s}/></div>
   <div className="g3">{Object.entries(ST).map(([k,x])=>{const on=k===s;return <div key={k} className="hp-card" style={{padding:20,gap:10,border:on?'2px solid var(--black-950)':'1px solid var(--border-subtle)',boxShadow:on?'inset 0 4px 0 var(--gold-400)':undefined,opacity:on?1:.75}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><Badge tone={x.tone} icon={x.icon}>{x.label}</Badge>{on&&<span style={{...mono,fontSize:11}}>Now</span>}</div>
    <p style={{margin:0}}>{x.text}</p>{k!=='closed'&&<Pending>Hawk Pride {k} guidance: time, recovery, whether to attempt</Pending>}</div>})}</div>
   <p style={{fontSize:14,color:'var(--text-muted)',margin:'14px 0 0',maxWidth:760}}>Rider reports on onX (Nov 2025) describe it as roughly a 6 on a tacky day and much harder wet, when traction, off-camber positioning and recovery all get more serious.</p>
   <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap',marginTop:14}}><span style={{...mono,fontSize:11,color:'var(--text-muted)'}}>Prototype · preview status</span>{Object.keys(ST).map(k=><button key={k} onClick={()=>setS(k)} aria-pressed={k===s} style={{font:'inherit',fontSize:13,padding:'4px 10px',minHeight:32,borderRadius:4,cursor:'pointer',border:'1px solid var(--border-default)',background:k===s?'var(--black-950)':'transparent',color:k===s?'var(--gold-400)':'var(--text-body)'}}>{ST[k].label}</button>)}<Pending>Who updates status, and how often</Pending></div>
  </div></Section>}

const STEPS=[['Jeep app','Get the Jeep Badge of Honor app','Download the app and register your Jeep.'],['Hawk Pride','Enter Hawk Pride','Buy park admission and complete the required waiver.'],['Jeep app','Check in at Uphill Both Ways','Use the Badge of Honor app to check in at the trail.'],['Jeep app','Complete the trail and request your badge','Finish Uphill Both Ways, then request the official badge in the app.']];
function Earn(){const {book}=useApp();return <Section dark eyebrow="Earn your badge" title="Four steps to the badge.">
  <div className="split split--wide" style={{alignItems:'start'}}>
   <ol style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column'}}>{STEPS.map(([who,t,d],i)=><li key={t} style={{display:'grid',gridTemplateColumns:'64px minmax(0,1fr)',gap:18,padding:'20px 0',borderTop:'1px solid var(--border-inverse)'}}>
    <span className="hp-display" style={{fontSize:52,lineHeight:.9,color:'var(--gold-400)'}}>{i+1}</span>
    <div><span style={{...mono,fontSize:11,padding:'3px 6px',borderRadius:3,background:who==='Hawk Pride'?'var(--gold-400)':'var(--stone-50)',color:'var(--black-950)'}}>{who}</span>
     <div style={{fontWeight:700,fontSize:20,margin:'8px 0 4px'}}>{t}</div><div style={{color:'var(--stone-200)'}}>{d}</div>
     {i===1&&<div style={{marginTop:12}}><Button size="sm" onClick={()=>book({stay:'none'})}>Buy admission</Button></div>}
     {i===2&&<div style={{marginTop:12}}><Pending dark>Cell service at the trailhead and whether app check-in works there</Pending></div>}</div></li>)}</ol>
   <div style={{display:'flex',flexDirection:'column',gap:18,alignItems:'flex-start'}}>
    <div style={{width:'100%',display:'grid',placeItems:'center',padding:'36px 24px',border:'1px solid var(--border-inverse)',borderRadius:'var(--radius-md)'}} className="hp-topo hp-topo--dark"><img src={BADGE} alt="Uphill Both Ways badge" style={{width:'min(320px,80%)'}}/></div>
    <div style={{display:'flex',gap:16,alignItems:'center'}}><span style={{background:'var(--stone-0)',borderRadius:6,padding:6,display:'inline-flex'}}><img src={JEEP} alt="Jeep Badge of Honor" style={{height:64}}/></span><div style={{fontSize:15,color:'var(--stone-200)'}}>The badge program is run by Jeep. Admission and waivers are Hawk Pride’s.<br/><a href="https://www.jeep.com/badge-of-honor.html" target="_blank" rel="noopener" style={{color:'var(--gold-400)',fontWeight:700,display:'inline-flex',gap:6,alignItems:'center',marginTop:6}}>Jeep Badge of Honor program<Icon name="external-link" size={16}/></a></div></div>
    <p style={{margin:0,fontSize:15,color:'var(--stone-200)'}}>Official badges only come through the Jeep app. Look-alike badges sold online aren’t issued by Jeep.</p>
   </div></div></Section>}

function TrailMap(){const U=window.HP_DATA.ubw,all=[...U.route,...U.track];const la=all.map(p=>p[0]),lo=all.map(p=>p[1]);const k=Math.cos(34.67*Math.PI/180);
 const minX=Math.min(...lo)*k,maxX=Math.max(...lo)*k,minY=Math.min(...la),maxY=Math.max(...la),W=600,pad=56,sc=(W-pad*2)/(maxX-minX),H=Math.round((maxY-minY)*sc+pad*2);
 const P=([a,b])=>[(b*k-minX)*sc+pad,(maxY-a)*sc+pad],path=pts=>pts.map((p,i)=>(i?'L':'M')+P(p).map(n=>n.toFixed(1)).join(' ')).join(' ');
 const pin=(p,label,big)=>{const [x,y]=P(p);return <g key={label}><circle cx={x} cy={y} r={big?11:7} fill={big?'var(--gold-400)':'var(--stone-50)'} stroke="var(--black-950)" strokeWidth="3"/><text x={x+(big?18:14)} y={y+5} fill="var(--stone-50)" style={{font:'700 15px var(--font-body)'}}>{label}</text></g>};
 return <div className="hp-topo hp-topo--dark" style={{background:'var(--black-950)',borderRadius:'var(--radius-md)',overflow:'hidden',position:'relative'}}>
  <svg viewBox={'0 0 '+W+' '+H} style={{display:'block',width:'100%',height:'auto'}} role="img" aria-label="Map of the route from the park to the Uphill Both Ways trailhead, and the trail">
   <path d={path(U.route)} fill="none" stroke="var(--stone-300)" strokeWidth="4" strokeDasharray="2 9" strokeLinecap="round"/>
   <path d={path(U.track)} fill="none" stroke="var(--black-950)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
   <path d={path(U.track)} fill="none" stroke="var(--gold-400)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
   {pin(U.route[0],'Route start')}{pin(U.track[U.track.length-1],'Trail end')}{pin(U.track[0],'Trailhead',true)}
   <g transform={'translate('+(W-36)+',36)'}><text textAnchor="middle" y="-6" fill="var(--stone-50)" style={{font:'700 13px var(--font-mono)'}}>N</text><path d="M0 0 L7 18 L0 13 L-7 18 Z" fill="var(--stone-50)"/></g>
  </svg>
  <div style={{display:'flex',gap:20,flexWrap:'wrap',padding:'12px 18px',borderTop:'1px solid var(--border-inverse)',color:'var(--stone-200)',fontSize:14}}><span style={{display:'inline-flex',gap:8,alignItems:'center'}}><i style={{width:22,height:0,borderTop:'3px dotted var(--stone-300)'}}/>Route to trailhead · {U.routeMi} mi</span><span style={{display:'inline-flex',gap:8,alignItems:'center'}}><i style={{width:22,height:6,background:'var(--gold-400)',borderRadius:3}}/>Uphill Both Ways · {U.trailMi} mi</span></div></div>}
function Find(){const U=window.HP_DATA.ubw,c=U.trailhead.join(', ');const [cp,setCp]=React.useState(false);
 const dl=(f,l)=><a href={MAPS+f} download className="hp-btn hp-btn--outline" style={{textDecoration:'none',justifyContent:'flex-start'}}><Icon name="download" size={18}/>{l}</a>;
 return <Section id="ubw-find" eyebrow="Find the trail" title="Find Uphill Both Ways.">
  <div className="split" style={{alignItems:'start',gridTemplateColumns:'minmax(0,1.25fr) minmax(0,1fr)'}}>
   <TrailMap/>
   <div style={{display:'flex',flexDirection:'column',gap:22}}>
    <div><h3 className="hp-card__title" style={{margin:'0 0 8px',fontSize:22}}>Getting there</h3><p style={{margin:'0 0 10px',fontSize:17}}>From the gate, follow [trail/road] to [junction]. The Uphill Both Ways trailhead is [location/direction]. About {U.routeMi} mi from the route start.</p><Pending>Owner to write route from check-in, intended direction of travel, nearby junctions and bailout points</Pending></div>
    <div><div style={{...mono,color:'var(--text-muted)',marginBottom:6}}>Trailhead GPS</div><div style={{display:'flex',gap:10,alignItems:'center',flexWrap:'wrap'}}><code style={{font:'600 18px var(--font-mono)'}}>{c}</code><Button size="sm" variant="secondary" icon={cp?'check':'map-pin'} onClick={()=>{navigator.clipboard&&navigator.clipboard.writeText(c);setCp(true);setTimeout(()=>setCp(false),1600)}}>{cp?'Copied':'Copy'}</Button></div></div>
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
     {dl('track-getting-to-uphill-both-ways.gpx','Download route to trailhead (.gpx)')}
     {dl('track-uphill-both-ways.gpx','Download Uphill Both Ways track (.gpx)')}
     <a href={MAPS+'HawkPride_Official-Map-2026.pdf'} target="_blank" rel="noopener" className="hp-btn hp-btn--ghost" style={{textDecoration:'none',justifyContent:'flex-start'}}><Icon name="map" size={18}/>View full park map (PDF)</a></div>
    <Pending>Confirm GPX files are current and approved for public download</Pending>
   </div></div></Section>}

const PROOF=[{h:'“One of the best Badge of Honor trails on the East Coast.”',by:'Hutch May',src:'onX Offroad · November 2025',body:'A trail report covering the V-notch, big articulation, off-camber rock, tight trees and pulling cable when wet.',links:[['Read the trail report','https://www.onxmaps.com/offroad/trails/us/alabama/113-uphill-both-ways-1mzjy44wgzd7']],ph:'Rider / Jeep photo'},
 {h:'17 Jeeps started. 13 finished.',by:'Jeep club run',src:'JeepGladiatorForum',tags:'YJ · LJ · TJ · JK · JL · JT',body:'A Jeep club came to Hawk Pride to earn Uphill Both Ways. Four opted out at the gatekeeper; thirteen made it through.',links:[['Read their run report','https://www.jeepgladiatorforum.com/forum/threads/what-did-you-do-with-your-gladiator-today.39884/page-172']],ph:'Group photo'},
 {h:'Wet. Winches. Carnage. Badge earned.',by:'Road Rash Off Road',src:'June 2025',body:'Road Rash Off Road took on Uphill Both Ways after a storm and ran it in reverse.',links:[['Watch the run','https://www.youtube.com/watch?v=e8kEiOUCoNA'],['Read the story','https://roadrashoffroad.com/uphill-both-ways/']],ph:'Video thumbnail',video:true}];
function Conquered(){return <Section sunken eyebrow="Social proof" title="Conquered.">
  <div className="g3">{PROOF.map(p=><article key={p.by} className="hp-card" style={{overflow:'hidden'}}>
   <Photo caption={p.ph+' · with permission'} ratio="16/10" style={{borderRadius:0}}/>
   <div style={{padding:'20px 22px 22px',display:'flex',flexDirection:'column',gap:10,flex:1}}>
    <h3 className="hp-display" style={{margin:0,fontSize:28,lineHeight:1.02,textWrap:'balance'}}>{p.h}</h3>
    {p.tags&&<div style={{...mono,color:'var(--gold-700)'}}>{p.tags}</div>}
    <p style={{margin:0,color:'var(--text-muted)'}}>{p.body}</p>
    <div style={{fontSize:14}}><b>{p.by}</b> · {p.src}</div>
    <div style={{display:'flex',gap:16,flexWrap:'wrap',marginTop:'auto',paddingTop:6}}>{p.links.map(([l,u])=><a key={l} href={u} target="_blank" rel="noopener" style={{fontWeight:700,display:'inline-flex',gap:6,alignItems:'center',textDecoration:'underline',textDecorationColor:'var(--gold-400)',textDecorationThickness:2,textUnderlineOffset:3}}>{l}<Icon name="arrow-right" size={16}/></a>)}</div></div></article>)}</div>
  <div style={{display:'flex',gap:14,alignItems:'center',flexWrap:'wrap',margin:'24px 0 0',paddingTop:18,borderTop:'1px solid var(--border-default)'}}><Icon name="route" size={22}/><span><b>Built into the road trip.</b> Badge hunters are routing Jeep trips through Hawk Pride to earn Uphill Both Ways. <a href="https://reelandwheel.com/badge-of-honor-trails-road-trip/" target="_blank" rel="noopener" style={{fontWeight:700}}>Reel and Wheel itinerary</a></span></div>
  <div style={{marginTop:40}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:16,flexWrap:'wrap',marginBottom:14}}><div><h3 className="hp-display" style={{fontSize:'var(--fs-h3)',margin:0}}>Badge earners</h3><p style={{margin:'4px 0 0',color:'var(--text-muted)'}}>Earned it? Tag Hawk Pride with your Jeep at the sign and we’ll add you here.</p></div><Pending>Hawk Pride handle / hashtag; “Uphill Both Ways · Conquered” photo point at the trail end</Pending></div>
   <div className="g4">{['Jeep at the trail sign','Crew at the finish','Badge on the Jeep','Club group shot'].map(c=><Photo key={c} caption={c} ratio="1/1"/>)}</div></div>
  <p style={{fontSize:13,color:'var(--text-muted)',margin:'18px 0 0'}}>Third-party accounts are linked, not endorsements. Quotes and images stay as links until permission is granted.</p></Section>}

function Discover(){const {go}=useApp();const T=window.HP_DATA.trails,f=n=>T.find(t=>t.number===n);
 const C=[['Warm up',f('#31'),'Moderate rock to shake down the rig before UBW.'],['Keep going',f('#38'),'Ledges at a similar level. Good for the afternoon.'],['Go harder',null,'The park’s famous next step up.'],['Take the family',f('#07'),'Wooded loop any vehicle can run.']];
 return <Section eyebrow="Discover Hawk Pride" title="Come for the badge. Stay for the mountain." action={<Button variant="outline" iconRight="arrow-right" onClick={()=>go('trails')}>Explore all trails</Button>}>
  <div className="g4">{C.map(([cat,t,d])=><div key={cat} className="hp-card" style={{overflow:'hidden'}}><Photo caption={(t?t.name:'Trail')+' photo'} ratio="4/3" style={{borderRadius:0}}/>
   <div style={{padding:'16px 18px 20px',display:'flex',flexDirection:'column',gap:8,alignItems:'flex-start'}}><div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>{cat}</div>
    {t?<><div style={{fontWeight:700,fontSize:19}}>{t.number} · {t.name}</div><DifficultyBadge level={t.level}/></>:<Pending>Owner pick</Pending>}
    <p style={{margin:0,color:'var(--text-muted)'}}>{d}</p></div></div>)}</div>
  <div style={{marginTop:16}}><Pending>Owner to confirm the four recommended trails (sample data shown)</Pending></div></Section>}

function Weekend(){const {book}=useApp();const S=[['Cabins','cabin','Sleep at the park and wake up ready to ride.',HP.priceLabel('cabin')],['Powered RV','powered','Bring the rig and stay on the mountain.',HP.money(HP.rate('powered'))+' / night'],['Primitive camping','primitive','Camp at Hawk Pride and make the trail part of a bigger weekend.',HP.money(HP.rate('primitive'))+' / night']];
 return <Section dark eyebrow="Stay + plan" title="Make a weekend of it." intro="One trail takes an afternoon. The mountain takes a weekend." action={<Button size="lg" onClick={()=>book()}>Plan your trip</Button>}>
  <div className="g3">{S.map(([t,id,d,p])=><button key={id} onClick={()=>book({stay:id})} className="ubw-stay"><Photo caption={t+' photo'} ratio="16/10" style={{borderRadius:0}}/><div style={{padding:'16px 18px 20px',display:'flex',flexDirection:'column',gap:6}}><div style={{display:'flex',justifyContent:'space-between',gap:12,alignItems:'baseline'}}><span className="hp-display" style={{fontSize:26}}>{t}</span><span style={{color:'var(--gold-400)',fontWeight:700,whiteSpace:'nowrap'}}>{p}</span></div><span style={{color:'var(--stone-200)'}}>{d}</span></div></button>)}</div></Section>}

const QA=[['Can I run Uphill Both Ways in a side-by-side or non-Jeep 4x4?','onX lists the trail for high-clearance and full-width vehicles as well as smaller ride types. Only Jeeps registered in the Jeep app can earn the badge.',true],['Can I run the trail in reverse?',null],['Is Uphill Both Ways open during event weekends?',null],['Does Hawk Pride admission include the Badge of Honor trail?','Yes, standard riding admission covers the park’s trails. The badge itself is free through Jeep’s app.',true],['What happens if I break down on the trail?',null]];
function Questions(){const [o,setO]=React.useState(0);return <Section sunken eyebrow="Questions riders ask" title="Before you go.">
  <div style={{maxWidth:880}}>{QA.map(([q,a,p],i)=>{const on=o===i;return <div key={q} style={{borderBottom:'1px solid var(--border-subtle)'}}>
   <button aria-expanded={on} onClick={()=>setO(on?null:i)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,background:'none',border:0,padding:'18px 0',font:'inherit',fontSize:18,fontWeight:700,textAlign:'left',cursor:'pointer',color:'var(--text-strong)',minHeight:44}}>{q}<Icon name={on?'minus':'plus'} size={20} style={{flex:'none'}}/></button>
   {on&&<div style={{padding:'0 0 20px',display:'flex',flexDirection:'column',gap:10,alignItems:'flex-start'}}>{a&&<p style={{margin:0,fontSize:17,lineHeight:1.55,color:'var(--text-muted)',maxWidth:680}}>{a}</p>}<Pending>{a?'Owner to confirm':'Owner to provide answer'}</Pending></div>}</div>})}</div></Section>}

function UphillBothWays(){const [s,setS]=React.useState(window.HP_DATA.ubw.status);
 return <><Hero s={s}/><Meet/><Conquer/><Capable s={s} setS={setS}/><Earn/><Find/><Conquered/><Discover/><Weekend/><Questions/></>}
Object.assign(window,{UphillBothWays});
})();
