(()=>{
const {BookingBar}=window.DS;
function App(){const [s,setS]=React.useState(()=>{try{return JSON.parse(localStorage.getItem('hp-kit'))||{page:'home'}}catch(e){return {page:'home'}}});
 const set=n=>{setS(n);localStorage.setItem('hp-kit',JSON.stringify(n));window.scrollTo(0,0)};
 const go=page=>set({page});const [ev,setEv]=React.useState(null);
 const openLodging=item=>set({page:'lodging',item});
 const mobile=window.innerWidth<700;let body;
 switch(s.page){
  case 'trails':body=<Trails/>;break;
  case 'events':body=<Events go={go}/>;break;
  case 'stay':body=<Stay openLodging={openLodging}/>;break;
  case 'pricing':body=<Pricing/>;break;
  case 'lodging':body=<><Lodging item={s.item} back={()=>go('stay')} checkout={g=>set({page:'checkout',item:s.item,guests:g})}/>{mobile&&<BookingBar price={s.item.price} summary="Apr 24 – 26 · 2 guests" onAction={()=>set({page:'checkout',item:s.item,guests:{a:2,k:0}})}/>}</>;break;
  case 'checkout':body=<Checkout item={s.item} guests={s.guests} back={()=>openLodging(s.item)} done={()=>set({page:'done',item:s.item})}/>;break;
  case 'done':body=<Confirmation item={s.item} go={go}/>;break;
  default:body=<Home go={go} openEvent={setEv} openLodging={openLodging}/>;}
 return <Shell page={['lodging','checkout','done'].includes(s.page)?'stay':s.page} go={go}>{body}<EventDialog ev={ev} onClose={()=>setEv(null)} go={go}/></Shell>}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
})();