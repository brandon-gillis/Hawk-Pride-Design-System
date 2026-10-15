// Prototype data. One source of truth: every page reads prices, inventory and dates from here.
// SAMPLE = placeholder values to confirm with the owner (see README).
window.HP_DATA={
  park:{name:'Hawk Pride Offroad',waiver:'https://app.waiverforever.com/pending/Am0wLX9E2i1390363211',address:'589 Hester Porter Road, Tuscumbia, AL 35674',phone:'(256) 349-4150',tel:'+12563494150',email:'info@hawkpridemountainoffroad.com',
  hours:[['Fri – Sat','8 AM – 10 PM'],['Sun','8 AM – 6 PM'],['Mon – Thu','Closed']],checkin:'10 AM',checkout:'5 PM',
  social:[['Facebook','facebook','https://www.facebook.com/HawkPrideMountain'],['TikTok','tiktok','https://www.tiktok.com/@hawkpride.off.roa']]},
 pricing:{day:20,dayLater:15,freeAge:12,spectator:0},
 fees:{cleaning:25,pet:25,maxPets:2},
 notices:[{scope:'site',tone:'status',title:'Open this weekend',text:'Gates 8 AM · Riding until 10 PM Fri & Sat'}],
 categories:[
  {id:'cabin',name:'Cabin',plural:'Cabins',model:'unit',unit:'night',desc:'A/C and heat, a microwave, fridge and coffee pot, and parking for the trailer.',icon:'house'},
  {id:'powered',name:'Powered RV',plural:'Powered RV sites',model:'unit',price:40,unit:'night',desc:'Designated level site with 50A electric and water.',icon:'plug-zap'},
  {id:'dry',name:'Dry RV',plural:'Dry RV sites',model:'unit',price:25,unit:'night',desc:'No hookups. Generators allowed. Call the office to book.',icon:'caravan',phoneOnly:true},
  /* PRIMITIVE (hidden until campground is built): {id:'primitive',name:'Primitive campsite',plural:'Primitive campsites',model:'capacity',price:20,unit:'night',desc:'Designated tent site with a fire ring.',icon:'tent'}, */
  {id:'anywhere',name:'Camp anywhere',plural:'Camp anywhere',model:'capacity',price:5,unit:'night per person',perPerson:true,desc:'Set up in any open camping area. No site to pick.',icon:'trees'}],
 units:[
  ...[1,2,3,4,5,6,7,8].map((n,i)=>{const k=n<=2?'a':n<=6?'b':'c';return {id:'c'+n,cat:'cabin',name:'Cabin '+n,cls:k,price:n<=2?125:150,sleeps:k==='b'?6:8,sleepsLabel:{a:'6–8',b:'up to 6',c:'up to 8'}[k],
   beds:n===1?'2 full beds, 2 bunks, loft':n===2?'1 full bed, 2 bunks, 1 twin cot, 1 futon, loft':k==='b'?'2 bunks, 1 futon':'Bunk beds: 3 twin, 1 full',clsBeds:{a:'Full beds, bunks and a sleeping loft',b:'2 bunks, 1 futon',c:'Bunk beds: 3 twin, 1 full'}[k],
   bath:k==='a'?'None · bathhouse nearby':'Shower, sink, toilet',
   img:'cabin-'+n+'-exterior.jpg',interiors:n===1?['cabin-1-interior-1.jpg','cabin-1-interior-2.jpg','cabin-1-interior-3.jpg']:n===2?['cabin-2-interior-1.jpg','cabin-2-interior-2.jpg','cabin-2-interior-3.jpg']:n===7?['cabin-7-interior-1.jpg','cabin-7-interior-2.jpg','cabin-7-interior-3.jpg','cabin-7-interior-4.jpg']:n===8?['cabin-8-interior-1.jpg','cabin-8-interior-2.jpg','cabin-8-interior-3.jpg','cabin-8-interior-4.jpg']:['cabin-3-6-interior-1.jpg','cabin-3-6-interior-2.jpg','cabin-3-6-interior-3.jpg','cabin-3-6-interior-4.jpg'],
   desc:k==='a'?'No bathroom or running water. The bathhouse is a short walk away.':'Private bathroom with shower, sink and toilet.',x:[78.9,74,77.5,78.5,77.3,75.3,33.6,31.9][i],y:[47.8,42.6,37.4,34.6,31.4,28.4,23.4,23.4][i]}}),
  ...[75,40,40,50,75,50,60,70,40].map((len,i)=>({id:'r'+(i+1),cat:'powered',name:'RV Site '+(i+1),sleeps:99,len,layout:i>=5?'Back-in':'',img:i===3?null:'rv-'+(i+1)+'.jpg',desc:'Level pad with 50A electric and water.'+(i>=5?' Back-in.':''),x:[60,53.8,49.3,57.5,57.1,64.2,65.2,67.7,63][i],y:[65.4,66.1,62.8,58.7,62.2,55.6,63,67,52.2][i]}))],
 // Booked by phone only, not online
 phoneSites:[['A','Powered · 30/50/110 amp',100,'Pull-through'],['B','Powered · 30/50/110 amp',100,''],['C','Powered · 30/50/110 amp',60,'Pull-through'],['D1','Dry',70,''],['D2','Dry',50,''],['D3','Dry',70,''],['D4','Dry',90,''],['D5','Dry',50,''],['D6','Dry',60,''],['D7','Dry',30,'']],
 landmarks:[['Gate & registration',48,93],['Bathhouse',30,50],['Pavilion',56,52],['Trailheads',62,12],['Camping area',74,40]],
 booked:['c1','c2','c4','c5','c6','c8','r1','r3','r5'],
 bookedEvent:['c1','c2','c3','c4','c5','c6','c7','c8','r1','r2','r3','r4','r5','r6','r7','r8','d1','d2','d3'],
 events:[
  {id:'ratp',title:'Ride at the Pride',start:'2027-04-23',end:'2027-04-25',type:'Park ride',status:'featured',image:hpAsset('event-crawl-crowd.jpg'),
   hook:'Our spring kickoff. Every trail open, vendors on the hill and a full campground.',
   desc:'Three days of riding across the whole mountain, from the wooded loops to the rock. Bring the family, bring the club, bring the rig.',
   facts:[['Dates','Fri – Sun'],['Gates','8 AM daily'],['Vehicles','All welcome'],['Spectators','Welcome']],
   schedule:[['Friday','Gates 8 AM · Open riding · Campground fills'],['Saturday','Open riding · Vendor row · Night ride'],['Sunday','Open riding until 6 PM']],jeep:true},
  {id:'dsz',title:"Down South Zukin'",start:'2027-05-14',end:'2027-05-15',type:'Club ride',image:hpAsset('hillside-traffic.jpg'),
   hook:'Suzuki club weekend. Small rigs, big lines.',desc:'A club-hosted ride for Suzuki owners and friends. Open to the public on standard admission.',
   facts:[['Dates','Fri – Sat'],['Hosted by','Club organizers'],['Vehicles','All welcome']],schedule:[['Friday','Check-in and trail rides'],['Saturday','Group rides and cookout']]},
  {id:'mem',title:'Memorial Day Weekend',start:'2027-05-28',end:'2027-05-31',type:'Holiday ride',status:'few',image:hpAsset('pavilion-jeeps.jpg'),
   hook:'Four days open. The busiest campground of the year.',desc:'The park stays open through Monday. Cabins and RV sites go first, so book early.',
   facts:[['Dates','Fri – Mon'],['Gates','8 AM daily'],['Vehicles','All welcome']],schedule:[['Fri – Mon','Open riding every day']]},
  {id:'jul',title:'4th of July Weekend',start:'2027-07-02',end:'2027-07-05',type:'Holiday ride',image:null,
   hook:'Ride all day. Watch the sky light up at night.',desc:'Holiday weekend with extra open days.',facts:[['Dates','Fri – Mon'],['Vehicles','All welcome']],schedule:[['Fri – Mon','Open riding every day']]},
  {id:'srrs',title:'SRRS Hillclimb',start:'2027-08-13',end:'2027-08-14',type:'Hillclimb',image:hpAsset('buggy-airborne.jpg'),
   hook:'Steep, loose and loud. Bring a chair.',desc:'Sanctioned hillclimb racing on the big hill. Spectators welcome all weekend.',
   facts:[['Dates','Fri – Sat'],['Racers','Register with the series'],['Spectators','Welcome']],schedule:[['Friday','Practice runs'],['Saturday','Racing and awards']]},
  {id:'mk',title:'Mardi Krawl',start:'2027-08-26',end:'2027-08-29',type:'Rock crawl',status:'soldout',image:hpAsset('rock-ledge-buggies.jpg'),
   hook:'Four days on the hardest rock we have.',desc:'Club-run rock crawl. Registration is through the club and is full for this year.',
   facts:[['Dates','Thu – Sun'],['Vehicles','Built rigs'],['Registration','Full']],schedule:[['Thu – Sun','Guided crawls and open riding']],jeep:true}],
 trails:[{number:'#07',name:'Cane Creek Loop',level:'easy',vehicles:'All vehicles',length:'3.2 mi'},
  {number:'#12',name:'Pine Ridge Run',level:'easy',vehicles:'ATV · SxS',length:'2.1 mi'},
  {number:'#23',name:'Bluff Line',level:'moderate',vehicles:'SxS · 4x4',length:'1.4 mi'},
  {number:'#31',name:'Hollow Crossing',level:'moderate',vehicles:'4x4 · Jeep',length:'0.9 mi'},
  {number:'UBW',name:'Uphill Both Ways',level:'difficult',vehicles:'Jeep · 4x4',length:'Signature trail',signature:true},
  {number:'#38',name:'Staircase',level:'difficult',vehicles:'Built 4x4 · Buggy',length:'0.6 mi'},
  {number:'#42',name:'Widowmaker',level:'extreme',vehicles:'Buggy only',length:'0.4 mi'},
  {number:'#61',name:'Rock Garden',level:'extreme',vehicles:'Buggy only',length:'0.3 mi'}]
};
window.HP_DATA.ubw={status:'dry',updated:'Today · 7:40 AM',trailhead:[34.67074,-87.82339],routeMi:0.66,trailMi:0.34,route:[[34.67564,-87.82566],[34.67552,-87.82587],[34.67545,-87.82593],[34.67537,-87.82606],[34.67524,-87.82622],[34.67519,-87.82628],[34.67504,-87.82655],[34.675,-87.82667],[34.67478,-87.82699],[34.67429,-87.82643],[34.67402,-87.82624],[34.67396,-87.8262],[34.6737,-87.82622],[34.67347,-87.82628],[34.6733,-87.82626],[34.67315,-87.82626],[34.67299,-87.82638],[34.67291,-87.82655],[34.67273,-87.82681],[34.67263,-87.82703],[34.67252,-87.82726],[34.67233,-87.82739],[34.67196,-87.8275],[34.67187,-87.82749],[34.67131,-87.82745],[34.67114,-87.82749],[34.67114,-87.82747],[34.6711,-87.82723],[34.67112,-87.82669],[34.67108,-87.82563],[34.67109,-87.82478],[34.67107,-87.82465],[34.67109,-87.82448],[34.67105,-87.82432],[34.67101,-87.82414],[34.67103,-87.82331],[34.67072,-87.8234],[34.67068,-87.82341]],track:[[34.67074,-87.82339],[34.67072,-87.8234],[34.67071,-87.82322],[34.67058,-87.82304],[34.67052,-87.82274],[34.6704,-87.82257],[34.67039,-87.82238],[34.67012,-87.82223],[34.66987,-87.82229],[34.66956,-87.82229],[34.6693,-87.82223],[34.66913,-87.82228],[34.66907,-87.82226],[34.66901,-87.82227],[34.66896,-87.82231],[34.66896,-87.82232],[34.66893,-87.82255],[34.66884,-87.82259],[34.66878,-87.82257],[34.66872,-87.8225],[34.66866,-87.82249],[34.66857,-87.82239],[34.66852,-87.82236],[34.66847,-87.82236],[34.66843,-87.82239],[34.66815,-87.82239],[34.66795,-87.82229],[34.66782,-87.82236],[34.66779,-87.82234],[34.66768,-87.82221],[34.66762,-87.8222],[34.66758,-87.82218],[34.66755,-87.82212],[34.6675,-87.82207],[34.66744,-87.82205],[34.6674,-87.82207],[34.66738,-87.82213],[34.66739,-87.82225],[34.66738,-87.82232],[34.66741,-87.82241],[34.66741,-87.82246],[34.66729,-87.82261],[34.6673,-87.82262]]};
window.HP=(()=>{const D=window.HP_DATA;D.units.forEach(u=>{if(u.price==null)u.price=D.categories.find(c=>c.id===u.cat).price});const M=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],W=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
 const p=s=>{const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)};
 const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
 const add=(s,n)=>{const d=p(s);d.setDate(d.getDate()+n);return iso(d)};
 const diff=(a,b)=>Math.round((p(b)-p(a))/864e5);
 const fmt=s=>{const d=p(s);return M[d.getMonth()]+' '+d.getDate()};
 const fmtLong=s=>{const d=p(s);return W[d.getDay()]+', '+M[d.getMonth()]+' '+d.getDate()};
 const range=(a,b)=>{if(!a)return '';if(!b||a===b)return fmt(a);const A=p(a),B=p(b);return A.getMonth()===B.getMonth()?fmt(a)+'–'+B.getDate():fmt(a)+' – '+fmt(b)};
 const today=iso(new Date());
 const eventOn=s=>D.events.find(e=>s>=e.start&&s<=e.end);
 const open=s=>{const w=p(s).getDay();return w===5||w===6||w===0||!!eventOn(s)};
 const eventFor=(a,b)=>a&&D.events.find(e=>a<=e.end&&(b||a)>=e.start);
 const nights=t=>t.arrive&&t.depart?diff(t.arrive,t.depart):0;
 const openDays=t=>{if(!t.arrive)return 0;const n=Math.max(nights(t),0);let c=0;for(let i=0;i<=n;i++)if(open(add(t.arrive,i)))c++;return c};
 const cat=id=>D.categories.find(c=>c.id===id);const unit=id=>D.units.find(u=>u.id===id);
 const availability=t=>{const ev=eventFor(t.arrive,t.depart),b=ev?D.bookedEvent:D.booked,out={};
  D.categories.forEach(c=>{if(c.model==='unit'){const u=D.units.filter(u=>u.cat===c.id);const free=u.filter(x=>!b.includes(x.id));out[c.id]={count:free.length,free:free.map(x=>x.id)}}else out[c.id]={count:ev&&c.id==='primitive'?0:99}});return out};
 const riders=t=>(t.adults||0);
 const ratesFor=ev=>{const r=ev&&ev.rates;const mode=r?(r.mode||(r.custom?'daily':'standard')):'standard';return mode==='standard'?{...D.pricing,mode,extras:[]}:{...D.pricing,spectator:0,extras:[],...r,mode}};
 const tripRates=t=>ratesFor(eventFor(t.arrive,t.depart));
 const admissionPer=(days,P)=>{P=P||D.pricing;if(P.mode==='free')return 0;if(P.mode==='fixed')return days>0?P.fixed:0;return days<=2?P.day*days:P.day*2+P.dayLater*(days-2)};
 const admission=t=>riders(t)*admissionPer(t.days||0,tripRates(t));
 const people=t=>(t.adults||0)+(t.kids||0)+(t.guests||0);
 const lodging=t=>{if(!t.stay||t.stay==='none')return 0;const c=cat(t.stay),n=nights(t);if(c.model==='unit'){const u=unit(t.unit);return u?u.price*n:0}return c.perPerson?c.price*n*people(t):c.price*n};
 const wantsAdmission=t=>t.stay==='none'||t.addAdmission!==false;
 const total=t=>lodging(t)+(wantsAdmission(t)?admission(t):0);
 const participants=t=>[...(t.names.a||[]).slice(0,t.adults).map((n,i)=>({key:'a'+i,name:n,type:'Adult rider',waiver:true})),...(t.names.k||[]).slice(0,t.kids).map((n,i)=>({key:'k'+i,name:n,type:'Child rider',minor:true,waiver:true})),...(t.names.g||[]).slice(0,t.guests).map((n,i)=>({key:'g'+i,name:n,type:'Non-riding guest',waiver:false}))];
 const weekends=(from,count)=>{let d=p(from);while(d.getDay()!==5)d.setDate(d.getDate()+1);const o=[];for(let i=0;i<count;i++){const a=iso(d);o.push({arrive:a,depart:add(a,2)});d.setDate(d.getDate()+7)}return o};
 const money=n=>'$'+n.toLocaleString();
 const rate=id=>{const c=cat(id);return c.price!=null?c.price:Math.min(...D.units.filter(u=>u.cat===id).map(u=>u.price))};
 const priceLabel=id=>{const c=cat(id);return (c.price==null?'From ':'')+money(rate(id))+' / '+(c.perPerson?'person / night':'night')};
 const cabinClasses=()=>{const g=[];D.units.filter(u=>u.cat==='cabin').forEach(u=>{let x=g.find(k=>k.cls===u.cls);if(!x){x={cls:u.cls,img:u.img,price:u.price,sleeps:u.sleepsLabel,beds:u.clsBeds,bath:u.bath,desc:u.desc,nums:[]};g.push(x)}x.nums.push(+u.name.replace(/\D/g,''))});g.forEach(x=>x.label='Cabins '+x.nums[0]+'–'+x.nums[x.nums.length-1]);return g};
 const notices=scope=>(D.notices||[]).filter(n=>n.scope===scope);
 const count=id=>D.units.filter(u=>u.cat===id).length;
 return {ratesFor,tripRates,p,iso,add,diff,fmt,fmtLong,range,today,open,eventOn,eventFor,nights,openDays,cat,unit,availability,admissionPer,admission,people,lodging,wantsAdmission,total,participants,weekends,money,M,W,rate,priceLabel,cabinClasses,notices,count};
})();
