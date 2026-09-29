// Prototype data. One source of truth: every page reads prices, inventory and dates from here.
// SAMPLE = placeholder values to confirm with the owner (see README).
window.HP_DATA={
 park:{name:'Hawk Pride Offroad Adventure Park',address:'589 Hester Porter Road, Tuscumbia, AL 35674',phone:'(256) 349-4150',tel:'+12563494150',email:'info@hawkpridemountainoffroad.com',
  hours:[['Fri – Sat','8 AM – 10 PM'],['Sun','8 AM – 6 PM'],['Mon – Thu','Closed']],checkin:'2 PM',checkout:'Noon',
  social:[['Facebook','facebook'],['Instagram','instagram'],['YouTube','youtube']]},
 pricing:{day:20,dayLater:15,freeAge:12,spectator:null},
 notices:[{scope:'site',tone:'status',title:'Open this weekend',text:'Gates 8 AM · Riding until 10 PM Fri & Sat'},{scope:'trails',tone:'warning',title:'Trail #42 closed this weekend',text:'Washout on the upper ledge. Everything else is open.'}],
 categories:[
  {id:'cabin',name:'Cabin',plural:'Cabins',model:'unit',unit:'night',desc:'Beds, A/C and heat, a porch and parking for the trailer.',icon:'house'},
  {id:'powered',name:'Powered RV',plural:'Powered RV sites',model:'unit',price:40,unit:'night',desc:'Designated level site with 50A electric and water.',icon:'plug-zap'},
  {id:'dry',name:'Dry RV',plural:'Dry RV sites',model:'unit',price:25,unit:'night',desc:'Designated level site. Generators allowed.',icon:'caravan'},
  {id:'primitive',name:'Primitive campsite',plural:'Primitive campsites',model:'capacity',price:20,unit:'night',desc:'Designated tent site with a fire ring.',icon:'tent'},
  {id:'anywhere',name:'Camp anywhere',plural:'Camp anywhere',model:'capacity',price:5,unit:'night per person',perPerson:true,desc:'Set up in any open camping area. No site to pick.',icon:'trees'}],
 units:[
  ...[1,2,3,4,5,6,7,8].map((n,i)=>({id:'c'+n,cat:'cabin',name:'Cabin '+n,price:n<=2?125:150,sleeps:n<=2?4:6,beds:n<=2?'1 queen, 1 bunk':'1 queen, 2 bunks',
   desc:n<=2?'Smaller cabin, a short walk to the bathhouse.':'Larger cabin with a covered porch and room for the crew.',x:12+i*4.2,y:i%2?30:20})),
  ...Array.from({length:9},(_,i)=>({id:'r'+(i+1),cat:'powered',name:'RV Site '+(i+1),sleeps:6,desc:'Level pad with 50A electric and water. Pull-through.',x:12+i*8.4,y:78})),
  ...Array.from({length:4},(_,i)=>({id:'d'+(i+1),cat:'dry',name:'Dry RV Site D'+(i+1),sleeps:6,desc:'Level pad on the east field. Bring the generator.',x:88,y:26+i*13}))],
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
  {number:'#42',name:'Widowmaker',level:'extreme',vehicles:'Buggy only',length:'0.4 mi',status:'closed'},
  {number:'#61',name:'Rock Garden',level:'extreme',vehicles:'Buggy only',length:'0.3 mi'}]
};
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
 const admissionPer=days=>days<=2?D.pricing.day*days:D.pricing.day*2+D.pricing.dayLater*(days-2);
 const admission=t=>riders(t)*admissionPer(t.days||0);
 const people=t=>(t.adults||0)+(t.kids||0)+(t.guests||0);
 const lodging=t=>{if(!t.stay||t.stay==='none')return 0;const c=cat(t.stay),n=nights(t);if(c.model==='unit'){const u=unit(t.unit);return u?u.price*n:0}return c.perPerson?c.price*n*people(t):c.price*n};
 const wantsAdmission=t=>t.stay==='none'||t.addAdmission!==false;
 const total=t=>lodging(t)+(wantsAdmission(t)?admission(t):0);
 const participants=t=>[...(t.names.a||[]).slice(0,t.adults).map((n,i)=>({key:'a'+i,name:n,type:'Adult rider',waiver:true})),...(t.names.k||[]).slice(0,t.kids).map((n,i)=>({key:'k'+i,name:n,type:'Child rider',minor:true,waiver:true})),...(t.names.g||[]).slice(0,t.guests).map((n,i)=>({key:'g'+i,name:n,type:'Non-riding guest',waiver:false}))];
 const weekends=(from,count)=>{let d=p(from);while(d.getDay()!==5)d.setDate(d.getDate()+1);const o=[];for(let i=0;i<count;i++){const a=iso(d);o.push({arrive:a,depart:add(a,2)});d.setDate(d.getDate()+7)}return o};
 const money=n=>'$'+n.toLocaleString();
 const rate=id=>{const c=cat(id);return c.price!=null?c.price:Math.min(...D.units.filter(u=>u.cat===id).map(u=>u.price))};
 const priceLabel=id=>{const c=cat(id);return (c.price==null?'From ':'')+money(rate(id))+' / '+(c.perPerson?'person / night':'night')};
 const cabinClasses=()=>{const g=[];D.units.filter(u=>u.cat==='cabin').forEach(u=>{let x=g.find(k=>k.price===u.price);if(!x){x={price:u.price,sleeps:u.sleeps,beds:u.beds,desc:u.desc,nums:[]};g.push(x)}x.nums.push(+u.name.replace(/\D/g,''))});g.forEach(x=>x.label='Cabins '+x.nums[0]+'–'+x.nums[x.nums.length-1]);return g};
 const notices=scope=>(D.notices||[]).filter(n=>n.scope===scope);
 const count=id=>D.units.filter(u=>u.cat===id).length;
 return {p,iso,add,diff,fmt,fmtLong,range,today,open,eventOn,eventFor,nights,openDays,cat,unit,availability,admissionPer,admission,people,lodging,wantsAdmission,total,participants,weekends,money,M,W,rate,priceLabel,cabinClasses,notices,count};
})();
