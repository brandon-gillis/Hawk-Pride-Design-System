// Events store. Source of truth in production = the Hawk Pride Google Calendar (see ADMIN.md).
// Prototype: seeds from HP_DATA.events, persists admin edits to localStorage, nothing is written to Google.
window.HP_EVENTS=(()=>{const D=window.HP_DATA,K='hp-proto-events',subs=new Set();
 const PHOTOS=['event-crawl-crowd.jpg','hillside-traffic.jpg','pavilion-jeeps.jpg','buggy-airborne.jpg','rock-ledge-buggies.jpg'];
 const TYPES=['Park ride','Club ride','Holiday ride','Hillclimb','Rock crawl','Other'];
 const STATUS=[{value:'',label:'Normal'},{value:'featured',label:'Featured'},{value:'few',label:'Few sites left'},{value:'soldout',label:'Registration full'}];
 const id='6c825c2589cd402a5397799cc699d81fd2dfb6d175afe939890a7adebd2b9952@group.calendar.google.com',tz='America/Chicago';
 const GCAL={id,tz,name:'Hawk Pride Offroad Events',embed:'https://calendar.google.com/calendar/embed?src='+encodeURIComponent(id)+'&ctz='+encodeURIComponent(tz),subscribe:'https://calendar.google.com/calendar/u/0?cid='+btoa(id),ics:'https://calendar.google.com/calendar/ical/'+encodeURIComponent(id)+'/public/basic.ics'};
 const rid=()=>Math.random().toString(36).slice(2,10);
 const sort=a=>a.slice().sort((x,y)=>x.start<y.start?-1:x.start>y.start?1:0);
 const hydrate=e=>({...e,image:e.imageId==='upload'?e.upload||null:e.imageId?hpAsset(e.imageId):null});
 const seed=()=>sort(window.__hpSeedEvents.map(e=>({...e,imageId:PHOTOS.find(p=>hpAsset(p)===e.image)||null,gcalId:'gc_'+e.id,syncedAt:'2026-10-14T08:12:00'})));
 window.__hpSeedEvents=window.__hpSeedEvents||D.events.map(e=>({...e}));
 let list;try{const s=JSON.parse(localStorage.getItem(K));list=Array.isArray(s)?s.map(hydrate):seed()}catch(x){list=seed()}
 const commit=()=>{list=sort(list);D.events=list;try{localStorage.setItem(K,JSON.stringify(list.map(({image,...r})=>r)))}catch(x){console.warn('events-store: storage full; uploaded photos are kept for this session only')};subs.forEach(f=>f())};
 D.events=list;
 const ymd=s=>s.replace(/-/g,'');
 const loc=D.park.name+', '+D.park.address;
 return {PHOTOS,TYPES,STATUS,GCAL,
  list:()=>list,get:i=>list.find(e=>e.id===i),
  save(e){const n=hydrate({...e,id:e.id||rid(),gcalId:e.gcalId||'gc_'+rid(),syncedAt:new Date().toISOString()});const i=list.findIndex(x=>x.id===n.id);i<0?list.push(n):list[i]=n;commit();return n},
  remove(i){const e=list.find(x=>x.id===i);list=list.filter(x=>x.id!==i);commit();return e},
  restore(e){list.push(e);commit()},
  reset(){localStorage.removeItem(K);list=seed();commit()},
  subscribe(f){subs.add(f);return()=>subs.delete(f)},
  // What gets written to Google Calendar: all-day event, end date exclusive
  toGcal:e=>({summary:e.title,start:{date:e.start},end:{date:e.end&&e.end>=e.start?window.HP.add(e.end,1):window.HP.add(e.start,1)},location:loc,description:[e.hook,e.desc].filter(Boolean).join('\n\n')+(e.id?'\n\nDetails and booking: hawkprideoffroad.com/events/'+e.id:'')}),
  addLink(e){const g=this.toGcal(e);return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent(g.summary)+'&dates='+ymd(g.start.date)+'/'+ymd(g.end.date)+'&details='+encodeURIComponent(g.description)+'&location='+encodeURIComponent(loc)+'&ctz='+encodeURIComponent(tz)}};
})();
