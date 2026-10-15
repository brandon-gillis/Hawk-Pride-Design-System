(()=>{
const {Photo,Button,Icon,Badge,DifficultyBadge}=window.DS;
const BADGE='../../assets/badges/badge-uphill-both-ways.svg',JEEP='../../assets/badges/jeep-badge-of-honor.png',MAPS='../../assets/maps/',JEEP_URL='https://www.jeep.com/badge-of-honor.html';
const ST={dry:{label:'Open · Dry',tone:'success',icon:'sun'},wet:{label:'Open · Wet',tone:'warning',icon:'cloud-rain'},closed:{label:'Closed',tone:'danger',icon:'octagon-alert'}};
const mono={font:'600 12px/1.3 var(--font-mono)',textTransform:'uppercase',letterSpacing:'.05em'};
const lk={fontWeight:700,display:'inline-flex',gap:6,alignItems:'center',textDecoration:'underline',textDecorationColor:'var(--gold-400)',textDecorationThickness:2,textUnderlineOffset:3};
function Pending({children,dark}){return <span style={{display:'inline-flex',gap:6,alignItems:'flex-start',border:'1px dashed '+(dark?'var(--stone-400)':'var(--gold-700)'),background:dark?'rgba(252,208,0,.08)':'var(--gold-50,#fffbe6)',color:dark?'var(--stone-100)':'var(--text-strong)',borderRadius:4,padding:'3px 8px',font:'500 13px/1.45 var(--font-mono)',textAlign:'left'}}><Icon name="info" size={14} style={{flex:'none',marginTop:2}}/><span>{children}</span></span>}
function Status({s,dark}){const x=ST[s];return <span style={{display:'inline-flex',gap:10,alignItems:'center',flexWrap:'wrap'}}><Badge tone={x.tone} icon={x.icon}>{x.label}</Badge><span style={{fontSize:14,color:dark?'var(--stone-200)':'var(--text-muted)'}}>Updated {window.HP_DATA.ubw.updated}</span></span>}
function Head({eyebrow,title,dark,children}){return <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:16,flexWrap:'wrap',marginBottom:28}}><div>{eyebrow&&<><div className="hp-eyebrow" style={{color:dark?'var(--gold-400)':'var(--gold-700)'}}>{eyebrow}</div><span className="hp-rule" style={{margin:'8px 0 12px'}}/></>}<h2 className="hp-display" style={{margin:0,fontSize:'var(--fs-h1)',lineHeight:.98,textWrap:'balance'}}>{title}</h2></div>{children}</div>}
const Wrap=({children,style})=><div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'72px var(--container-pad)',...style}}>{children}</div>;

/* 1 · Desire */
function Hero(){const {go,book}=useApp();
 return <div style={{position:'relative',minHeight:'min(90vh,760px)',display:'flex',alignItems:'flex-end',background:'var(--black-900)'}}>
  <Photo caption="Hero · Jeep running Uphill Both Ways (owner photo)" ratio="auto" style={{position:'absolute',inset:0,aspectRatio:'auto',borderRadius:0}}/>
  <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(13,13,11,.96), rgba(13,13,11,.3) 78%)'}}/>
  <div className="hp-on-dark ubw-hero" style={{position:'relative',width:'100%',maxWidth:'var(--container-max)',margin:'0 auto',padding:'120px var(--container-pad) 52px',color:'var(--stone-50)'}}>
   <div>
    <button onClick={()=>go('trails')} className="hp-btn hp-btn--ghost hp-btn--sm" style={{marginLeft:-10,color:'var(--stone-200)'}}><Icon name="arrow-left" size={16}/>Trails</button>
    <div className="hp-eyebrow" style={{color:'var(--gold-400)',marginTop:10}}>Jeep® Badge of Honor® trail · Hawk Pride Offroad</div>
    <h1 className="hp-display" style={{margin:'10px 0 0',fontSize:'var(--fs-display-xl)',lineHeight:.88}}>Uphill Both Ways</h1>
    <p style={{fontSize:24,fontWeight:700,margin:'18px 0 0',maxWidth:620}}>Earn your Jeep Badge of Honor at Hawk Pride.</p>
    <p className="hp-display" style={{fontSize:'var(--fs-h3)',color:'var(--gold-400)',margin:'10px 0 0'}}>Short. Technical. Relentless. Earned.</p>
    <p style={{fontSize:15,color:'var(--stone-300)',margin:'10px 0 0'}}>One of the Southeast’s toughest Badge of Honor challenges.</p>
    <div className="ubw-facts"><span style={{fontSize:18,fontWeight:700}}>0.3 miles. You’ll earn every inch.</span><span style={{...mono,color:'var(--stone-200)'}}>Jeep 6/10 · onX 7/10 Difficult · 0.3 mi</span></div>
    <Button size="lg" onClick={()=>book()}>Plan your trip</Button>
   </div>
   <div className="ubw-hero__badge"><img src={BADGE} alt="Uphill Both Ways Badge of Honor badge"/><Pending dark>Confirm approved badge artwork + permission</Pending></div>
  </div></div>}

/* 2 · Challenge */
function Meet({s}){return <section><Wrap>
  <div className="ubw-meet">
   <Photo caption="Wide trail photo: rock, ledges, trees (owner photo or short video)" ratio="16/10"/>
   <div style={{display:'flex',flexDirection:'column',gap:16,alignSelf:'end'}}>
    <div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>The trail</div>
    <h2 className="hp-display" style={{margin:0,fontSize:'var(--fs-h1)',lineHeight:.98}}>Meet Uphill Both Ways.</h2>
    <p style={{margin:0,fontSize:20,lineHeight:1.5,textWrap:'pretty'}}>0.3 miles of rock, ledges, off-camber climbs and tight technical terrain. Short doesn’t mean easy.</p>
    <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{['Rock','Ledges','V-notch','Off-camber','Tight trees'].map(t=><span key={t} style={{...mono,padding:'6px 9px',border:'1px solid var(--border-default)',borderRadius:3}}>{t}</span>)}</div>
    <div style={{paddingTop:14,borderTop:'1px solid var(--border-subtle)'}}><Status s={s}/></div>
   </div></div></Wrap></section>}
const OB=[['The V-notch','Near the start. A tight rock notch that twists the frame and tests articulation.'],['The ledge','A 2–3 foot rock step. Tire placement and a good spotter get you up it.'],['Off-camber + trees','Loose rock on a tilt with trees close on both sides. Watch the downhill side.'],['The big boulder','A large boulder in the trail. Climb it or take the line around.']];
function Conquer(){return <section style={{background:'var(--bg-sunken)'}}><Wrap>
  <Head eyebrow="In order" title="What you’ll conquer."/>
  <div className="g4">{OB.map(([t,d],i)=><div key={t} style={{display:'flex',flexDirection:'column',gap:12}}>
   <Photo caption={t+' (owner photo)'} ratio="4/5"/>
   <div style={{display:'flex',gap:12,alignItems:'baseline'}}><span className="hp-display" style={{fontSize:28,color:'var(--gold-700)'}}>{String(i+1).padStart(2,'0')}</span><h3 className="hp-display" style={{margin:0,fontSize:'var(--fs-h3)'}}>{t}</h3></div>
   <p style={{margin:0,color:'var(--text-muted)'}}>{d}</p></div>)}</div>
  <div style={{marginTop:22}}><Pending>Owner to confirm obstacle names, order and photos (features from onX trail notes)</Pending></div></Wrap></section>}

/* 3 · Confidence */
const SPEC=[['Tires'],['Lockers'],['Winch'],['Recovery gear'],['Experience'],['Full-width Jeep','Yes']];
function Capable({s,setS}){return <section><Wrap>
  <Head eyebrow="Before you load up" title="Can your Jeep conquer it?"/>
  <div className="split" style={{alignItems:'start',gap:56}}>
   <div>
    <div style={{borderTop:'2px solid var(--black-950)'}}>{SPEC.map(([l,v])=><div key={l} style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1.3fr)',gap:16,padding:'16px 0',borderBottom:'1px solid var(--border-subtle)',alignItems:'center'}}><span className="hp-display" style={{fontSize:22}}>{l}</span>{v?<span style={{fontWeight:700,fontSize:18}}>{v}</span>:<Pending>Owner</Pending>}</div>)}</div>
    <div style={{marginTop:28,padding:'20px 22px',background:'var(--black-950)',color:'var(--stone-50)',borderRadius:'var(--radius-md)',display:'flex',flexDirection:'column',gap:12}} className="hp-on-dark">
     <p className="hp-display" style={{margin:0,fontSize:'var(--fs-h3)'}}>Conditions matter. <span style={{color:'var(--gold-400)'}}>Wet changes everything.</span></p>
     <Status s={s} dark/>
     <div style={{display:'flex',gap:6,alignItems:'center',flexWrap:'wrap'}}><span style={{...mono,fontSize:10,color:'var(--stone-300)'}}>Prototype · preview</span>{Object.keys(ST).map(k=><button key={k} onClick={()=>setS(k)} aria-pressed={k===s} style={{font:'inherit',fontSize:12,padding:'3px 9px',minHeight:28,borderRadius:4,cursor:'pointer',border:'1px solid var(--border-inverse)',background:k===s?'var(--gold-400)':'transparent',color:k===s?'var(--black-950)':'var(--stone-200)'}}>{ST[k].label}</button>)}</div></div>
   </div>
   <div style={{display:'flex',flexDirection:'column'}}>{['Stock Jeep?','On 33s?','35s+?'].map(q=><div key={q} style={{padding:'22px 0',borderTop:'1px solid var(--border-default)',display:'flex',flexDirection:'column',gap:10,alignItems:'flex-start'}}><span className="hp-display" style={{fontSize:'var(--fs-h2)',lineHeight:1}}>{q}</span><Pending>Mark to give a direct, conservative answer</Pending></div>)}</div>
  </div></Wrap></section>}

/* 4 · Enablement */
const STEPS=[['Download the app','Get Jeep Badge of Honor.'],['Check in','At Uphill Both Ways.'],['Conquer it','Complete the trail.'],['Claim your badge','Request it through Jeep.']];
function Earn(){const {book}=useApp();return <section className="hp-on-dark" style={{background:'var(--black-950)',color:'var(--stone-50)'}}><Wrap>
  <div className="ubw-earn">
   <div><Head eyebrow="The badge" title="Earn your badge." dark/>
    <ol className="ubw-steps">{STEPS.map(([t,d],i)=><li key={t}><span className="hp-display" style={{fontSize:56,lineHeight:.9,color:'var(--gold-400)'}}>{String(i+1).padStart(2,'0')}</span><span className="hp-display" style={{fontSize:'var(--fs-h3)',lineHeight:1}}>{t}</span><span style={{color:'var(--stone-200)'}}>{d}</span></li>)}</ol>
    <div style={{display:'flex',gap:20,alignItems:'center',flexWrap:'wrap',marginTop:32}}>
     <a href={JEEP_URL} target="_blank" rel="noopener" className="hp-btn hp-btn--lg hp-btn--primary" style={{textDecoration:'none'}}>Get the Jeep Badge of Honor app<Icon name="arrow-right" size={20}/></a>
     <span style={{fontSize:15,color:'var(--stone-200)'}}>Park admission and a waiver are required. <a href="#" onClick={e=>{e.preventDefault();book({stay:'none'})}} style={{...lk,color:'var(--gold-400)'}}>Buy admission</a></span></div>
    <div style={{marginTop:16}}><Pending dark>Cell service at the trailhead for app check-in</Pending></div></div>
   <div style={{display:'flex',flexDirection:'column',gap:18,alignItems:'center'}}>
    <img src={BADGE} alt="Uphill Both Ways badge" style={{width:'min(340px,100%)'}}/>
    <span style={{background:'var(--stone-0)',borderRadius:6,padding:6,display:'inline-flex'}}><img src={JEEP} alt="Jeep Badge of Honor" style={{height:60}}/></span></div>
  </div></Wrap></section>}
function TrailMap(){const U=window.HP_DATA.ubw,all=[...U.route,...U.track];const la=all.map(p=>p[0]),lo=all.map(p=>p[1]);const k=Math.cos(34.67*Math.PI/180);
 const minX=Math.min(...lo)*k,maxX=Math.max(...lo)*k,minY=Math.min(...la),maxY=Math.max(...la),W=600,pad=56,sc=(W-pad*2)/(maxX-minX),H=Math.round((maxY-minY)*sc+pad*2);
 const P=([a,b])=>[(b*k-minX)*sc+pad,(maxY-a)*sc+pad],path=pts=>pts.map((p,i)=>(i?'L':'M')+P(p).map(n=>n.toFixed(1)).join(' ')).join(' ');
 const pin=(p,label,big)=>{const [x,y]=P(p);return <g key={label}><circle cx={x} cy={y} r={big?11:7} fill={big?'var(--gold-400)':'var(--stone-50)'} stroke="var(--black-950)" strokeWidth="3"/><text x={x+(big?18:14)} y={y+5} fill="var(--stone-50)" style={{font:'700 15px var(--font-body)'}}>{label}</text></g>};
 return <div className="hp-topo hp-topo--dark" style={{background:'var(--black-950)',borderRadius:'var(--radius-md)',overflow:'hidden'}}>
  <svg viewBox={'0 0 '+W+' '+H} style={{display:'block',width:'100%',height:'auto'}} role="img" aria-label="Map of the route from the park to the Uphill Both Ways trailhead, and the trail">
   <path d={path(U.route)} fill="none" stroke="var(--stone-300)" strokeWidth="4" strokeDasharray="2 9" strokeLinecap="round"/>
   <path d={path(U.track)} fill="none" stroke="var(--black-950)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
   <path d={path(U.track)} fill="none" stroke="var(--gold-400)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
   {pin(U.route[0],'Route start')}{pin(U.track[U.track.length-1],'Trail end')}{pin(U.track[0],'Trailhead',true)}
   <g transform={'translate('+(W-36)+',36)'}><text textAnchor="middle" y="-6" fill="var(--stone-50)" style={{font:'700 13px var(--font-mono)'}}>N</text><path d="M0 0 L7 18 L0 13 L-7 18 Z" fill="var(--stone-50)"/></g>
  </svg>
  <div style={{display:'flex',gap:20,flexWrap:'wrap',padding:'12px 18px',borderTop:'1px solid var(--border-inverse)',color:'var(--stone-200)',fontSize:14}}><span style={{display:'inline-flex',gap:8,alignItems:'center'}}><i style={{width:22,height:0,borderTop:'3px dotted var(--stone-300)'}}/>To the trailhead · {U.routeMi} mi</span><span style={{display:'inline-flex',gap:8,alignItems:'center'}}><i style={{width:22,height:6,background:'var(--gold-400)',borderRadius:3}}/>Uphill Both Ways · {U.trailMi} mi</span></div></div>}
function Find(){const D=[['Get to the trailhead','track-getting-to-uphill-both-ways.gpx','Download GPX'],['Uphill Both Ways track','track-uphill-both-ways.gpx','Download GPX']];
 return <section id="ubw-find"><Wrap>
  <Head eyebrow="Get there" title="Find Uphill Both Ways."/>
  <div className="split" style={{alignItems:'start',gridTemplateColumns:'minmax(0,1.4fr) minmax(0,1fr)'}}>
   <TrailMap/>
   <div style={{borderTop:'2px solid var(--black-950)'}}>
    {D.map(([t,f,l])=><div key={f} style={{padding:'20px 0',borderBottom:'1px solid var(--border-subtle)',display:'flex',flexDirection:'column',gap:10,alignItems:'flex-start'}}><span className="hp-display" style={{fontSize:'var(--fs-h3)',lineHeight:1}}>{t}</span><a href={MAPS+f} download className="hp-btn hp-btn--outline" style={{textDecoration:'none'}}><Icon name="download" size={18}/>{l}</a></div>)}
    <div style={{padding:'20px 0'}}><a href={MAPS+'HawkPride_Official-Map-2026.pdf'} target="_blank" rel="noopener" style={{...lk,fontSize:18}}><Icon name="map" size={20}/>View full park map</a></div>
   </div></div></Wrap></section>}
const QA=[['Can I run Uphill Both Ways in a side-by-side or non-Jeep 4x4?','onX lists the trail for high-clearance and full-width vehicles as well as smaller ride types. Only Jeeps registered in the Jeep app can earn the badge.'],['Can I run the trail in reverse?',null],['Is Uphill Both Ways open during event weekends?',null],['Does Hawk Pride admission include the Badge of Honor trail?','Standard riding admission covers the park’s trails. The badge itself comes free through Jeep’s app.'],['What happens if I break down on the trail?',null]];
function Questions(){const [o,setO]=React.useState(null);return <section style={{background:'var(--bg-sunken)'}}><Wrap>
  <Head eyebrow="Questions riders ask" title="Before you go."/>
  <div style={{maxWidth:880}}>{QA.map(([q,a],i)=>{const on=o===i;return <div key={q} style={{borderBottom:'1px solid var(--border-subtle)'}}>
   <button aria-expanded={on} onClick={()=>setO(on?null:i)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,background:'none',border:0,padding:'18px 0',font:'inherit',fontSize:18,fontWeight:700,textAlign:'left',cursor:'pointer',color:'var(--text-strong)',minHeight:44}}>{q}<Icon name={on?'minus':'plus'} size={20} style={{flex:'none'}}/></button>
   {on&&<div style={{padding:'0 0 20px',display:'flex',flexDirection:'column',gap:10,alignItems:'flex-start'}}>{a&&<p style={{margin:0,fontSize:17,lineHeight:1.55,color:'var(--text-muted)',maxWidth:680}}>{a}</p>}<Pending>{a?'Owner to confirm':'Owner to provide answer'}</Pending></div>}</div>})}</div></Wrap></section>}

/* 5 · Proof */
function Conquered(){return <section className="hp-on-dark" style={{background:'var(--black-950)',color:'var(--stone-50)'}}><Wrap style={{paddingBottom:88}}>
  <Head eyebrow="Proof" title="Conquered." dark/>
  <figure className="ubw-quote" style={{margin:0}}>
   <Photo caption="Large customer image (with permission)" ratio="16/10"/>
   <div style={{display:'flex',flexDirection:'column',gap:18,justifyContent:'center'}}>
    <blockquote className="hp-display" style={{margin:0,fontSize:'var(--fs-h1)',lineHeight:1,textWrap:'balance'}}>“One of the best Badge of Honor trails on the East Coast.”</blockquote>
    <figcaption style={{fontSize:17}}>— Hutch May, onX</figcaption>
    <a href="https://www.onxmaps.com/offroad/trails/us/alabama/113-uphill-both-ways-1mzjy44wgzd7" target="_blank" rel="noopener" style={{...lk,color:'var(--gold-400)'}}>Read the trail report<Icon name="arrow-right" size={16}/></a></div></figure>
  <div className="ubw-club">
   <div style={{display:'flex',flexDirection:'column',gap:14,justifyContent:'center'}}>
    <div className="hp-display" style={{fontSize:'clamp(56px,8vw,112px)',lineHeight:.86}}>17 started.<br/><span style={{color:'var(--gold-400)'}}>13 finished.</span></div>
    <p style={{margin:0,fontSize:19}}>One Jeep club. YJ through Gladiator.</p>
    <div style={{display:'flex',gap:20,flexWrap:'wrap'}}><a href="https://www.jeepgladiatorforum.com/forum/threads/what-did-you-do-with-your-gladiator-today.39884/page-172" target="_blank" rel="noopener" style={{...lk,color:'var(--gold-400)'}}>Read their run report<Icon name="arrow-right" size={16}/></a><a href="#ubw-crew" onClick={e=>{e.preventDefault();const el=document.getElementById('ubw-crew');el&&window.scrollTo({top:el.offsetTop-80,behavior:'smooth'})}} style={{...lk,color:'var(--stone-50)'}}>Bringing your club?<Icon name="arrow-right" size={16}/></a></div></div>
   <Photo caption="Club group photo (with permission)" ratio="4/3"/></div>
  <a href="https://www.youtube.com/watch?v=e8kEiOUCoNA" target="_blank" rel="noopener" className="ubw-video">
   <Photo caption="Road Rash Off Road video thumbnail" ratio="21/9" style={{borderRadius:0}}/>
   <span className="ubw-video__play"><Icon name="video" size={28}/></span>
   <span className="ubw-video__txt"><span className="hp-display" style={{fontSize:'var(--fs-h2)',lineHeight:1}}>Wet. Winches. Badge earned.</span><span style={{...lk,color:'var(--gold-400)'}}>Watch the run<Icon name="arrow-right" size={16}/></span><span style={{fontSize:14,color:'var(--stone-300)'}}>Road Rash Off Road · June 2025</span></span></a>
  <p style={{fontSize:13,color:'var(--stone-300)',margin:'18px 0 0'}}>Independent accounts, linked to their sources. Images and embeds pending creator permission.</p></Wrap></section>}

/* 6 · Social motivation */
function Crew(){const {go}=useApp();return <section id="ubw-crew" className="hp-hazard" style={{padding:'10px 0'}}>
  <div style={{background:'var(--gold-400)',color:'var(--black-950)'}}><div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'56px var(--container-pad)',display:'flex',justifyContent:'space-between',alignItems:'center',gap:28,flexWrap:'wrap'}}>
   <div><div className="hp-eyebrow">Bring your crew</div><h2 className="hp-display" style={{margin:'8px 0 10px',fontSize:'var(--fs-h1)',lineHeight:.98}}>Some badges are better earned together.</h2><p style={{margin:0,fontSize:18}}>Bringing 10+ Jeeps? Let us know you’re coming.</p></div>
   <div style={{display:'flex',flexDirection:'column',gap:10,alignItems:'flex-start'}}><button onClick={()=>go('groups')} className="hp-btn hp-btn--lg" style={{background:'var(--black-950)',color:'var(--gold-400)',border:0}}>Plan a club trip<Icon name="arrow-right" size={20}/></button><Pending>Keep only if clubs get something different operationally</Pending></div>
  </div></div></section>}

/* 7 · Discovery */
function Discover(){const {go}=useApp();const T=window.HP_DATA.trails,f=n=>T.find(t=>t.number===n);
 const C=[['Warm up',f('#31')],['Keep going',f('#38')],['Go harder',null],['Bring the family',f('#07')]];
 return <section><Wrap>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:16,flexWrap:'wrap',marginBottom:28}}><h2 className="hp-display" style={{margin:0,fontSize:'var(--fs-display-l)',lineHeight:.92}}>Come for the badge.<br/><span style={{color:'var(--gold-700)'}}>Stay for the mountain.</span></h2><TextLink to="trails">Explore all trails →</TextLink></div>
  <div className="g4">{C.map(([cat,t])=><button key={cat} onClick={()=>go('trails')} className="ubw-tcard"><Photo caption={(t?t.name:'Trail')+' photo'} ratio="3/4"/><span className="hp-eyebrow" style={{color:'var(--gold-700)'}}>{cat}</span>{t?<><span className="hp-display" style={{fontSize:'var(--fs-h3)',lineHeight:1}}>{t.name}</span><DifficultyBadge level={t.level}/></>:<Pending>Owner pick</Pending>}</button>)}</div>
  <div style={{marginTop:16}}><Pending>Owner to confirm the four trails (sample data shown)</Pending></div></Wrap></section>}

/* 8 · Conversion */
function Weekend(){const {book}=useApp();const S=[['Cabins','cabin','Stay on the mountain.',HP.priceLabel('cabin')],['Powered RV','powered','Bring the whole setup.',HP.money(HP.rate('powered'))+' / night'],['Camping','primitive','Sleep under the trees.','From '+HP.priceLabel('anywhere')]];
 return <section className="hp-on-dark" style={{background:'var(--black-950)',color:'var(--stone-50)'}}><Wrap>
  <Head eyebrow="Stay + plan" title="Make a weekend of it." dark><Button size="lg" onClick={()=>book()}>Plan your weekend</Button></Head>
  <p style={{margin:'-12px 0 28px',fontSize:20,color:'var(--stone-200)'}}>One trail takes an afternoon. The mountain takes a weekend.</p>
  <div className="g3">{S.map(([t,id,d,p])=><button key={id} onClick={()=>book({stay:id})} className="ubw-stay"><Photo caption={t+' photo'} ratio="4/3" style={{borderRadius:0}}/><span style={{padding:'16px 18px 20px',display:'flex',flexDirection:'column',gap:6}}><span className="hp-display" style={{fontSize:'var(--fs-h2)',lineHeight:1}}>{t}</span><span style={{color:'var(--stone-200)'}}>{d}</span><span style={{color:'var(--gold-400)',fontWeight:700,fontSize:15}}>{p}</span></span></button>)}</div></Wrap></section>}

function UphillBothWays(){const [s,setS]=React.useState(window.HP_DATA.ubw.status);
 return <><Hero/><Meet s={s}/><Conquer/><Capable s={s} setS={setS}/><Earn/><Find/><Questions/><Conquered/><Crew/><Discover/><Weekend/></>}
Object.assign(window,{UphillBothWays});
})();
