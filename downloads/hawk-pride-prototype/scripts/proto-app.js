(()=>{
const KEY='hp-proto-trip';
const fresh=()=>({arrive:null,depart:null,stay:null,unit:null,adults:2,kids:0,guests:0,names:{a:['Brandon','Vann'],k:[],g:[]},addAdmission:true,days:0,eventId:null,contact:{first:'Brandon',last:'',email:'',phone:''},paid:false,code:null,waivers:{}});
function useHash(){const [h,setH]=React.useState(location.hash);React.useEffect(()=>{const f=()=>{setH(location.hash);window.scrollTo(0,0)};addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[]);return h}
function App(){const hash=useHash();
 const [trip,setTrip]=React.useState(()=>{try{return {...fresh(),...(JSON.parse(localStorage.getItem(KEY))||{})}}catch(e){return fresh()}});
 const update=React.useCallback(p=>setTrip(t=>{const n={...t,...(typeof p==='function'?p(t):p)};localStorage.setItem(KEY,JSON.stringify(n));return n}),[]);
 const go=React.useCallback(to=>{location.hash='#/'+(to==='home'?'':to)},[]);
 const reset=()=>{localStorage.removeItem(KEY);setTrip(fresh());go('home')};
 const book=(o={})=>{const base=trip.paid?{...fresh(),names:trip.names,contact:trip.contact}:{};
  if(o.event){const ev=window.HP_DATA.events.find(e=>e.id===o.event);const t={...trip,...base,arrive:ev.start,depart:ev.end};update({...base,arrive:ev.start,depart:ev.end,eventId:ev.id,stay:null,unit:null,days:window.HP.openDays(t)});go('book/stay');return}
  if(o.stay){update({...base,stay:o.stay,unit:null,addAdmission:true});go('book/dates');return}
  update(base);go('book/dates')};
 const [path]=hash.replace(/^#\/?/,'').split('?');const seg=path.split('/').filter(Boolean);const page=seg[0]||'home';
 const ctx={trip,update,go,book,reset,seg};
 let body,booking=false;
 switch(page){
  case 'events':body=seg[1]?<EventPage id={seg[1]}/>:<EventsIndex/>;break;
  case 'trails':body=seg[1]?<UphillBothWays/>:<Trails/>;break;
  case 'fees':body=<Fees/>;break;
  case 'cabins':body=<Cabins/>;break;
  case 'camping':body=<Camping/>;break;
  case 'groups':body=<Groups/>;break;
  case 'rules':body=<Rules waiver={seg[1]==='waiver'}/>;break;
  case 'contact':body=<Contact/>;break;
  case 'book':booking=true;body=<Booking step={seg[1]||'dates'}/>;break;
  case 'checkout':booking=true;body=<Checkout/>;break;
  case 'waivers':booking=true;body=<Waivers/>;break;
  case 'confirmation':body=<Confirmation/>;break;
  case 'gate':booking=true;body=<Gate/>;break;
  default:body=<Home/>;}
 return <AppCtx.Provider value={ctx}>{booking?body:<Shell page={page}>{body}</Shell>}</AppCtx.Provider>}
const need=['Shell','Home','Fees','Cabins','Camping','Groups','Rules','Contact','EventsIndex','EventPage','Trails','UphillBothWays','Booking','Checkout','Waivers','Confirmation','Gate','BkFrame'];
const start=()=>{if(need.some(n=>!window[n]))return setTimeout(start,30);if(window.__hpRoot)return;window.__hpRoot=ReactDOM.createRoot(document.getElementById('root'));window.__hpRoot.render(<App/>)};start();
})();
