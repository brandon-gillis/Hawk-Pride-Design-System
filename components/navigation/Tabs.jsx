import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Tabs({items=[],value,onChange=()=>{},variant='line',className,label}){
  const key=e=>{const i=items.findIndex(t=>t.id===value);let n=null;if(e.key==='ArrowRight')n=(i+1)%items.length;else if(e.key==='ArrowLeft')n=(i-1+items.length)%items.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=items.length-1;if(n==null)return;e.preventDefault();onChange(items[n].id);const b=e.currentTarget.querySelectorAll('[role=tab]')[n];b&&b.focus()};
  return <div role="tablist" aria-label={label} onKeyDown={key} className={['hp-tabs',variant==='pill'&&'hp-tabs--pill',className].filter(Boolean).join(' ')}>
    {items.map(it=><button key={it.id} role="tab" className="hp-tab" aria-selected={value===it.id} tabIndex={value===it.id?0:-1} onClick={()=>onChange(it.id)}>{it.icon&&<Icon name={it.icon} size={16}/>}{it.label}{it.count!=null&&<span className="hp-tab__count">{it.count}</span>}</button>)}
  </div>;
}