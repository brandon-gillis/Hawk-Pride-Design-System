import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Accordion({items=[],heading,defaultOpen=null,value,onChange}){const [own,setOwn]=React.useState(defaultOpen);const open=value!==undefined?value:own;const set=v=>{onChange?onChange(v):setOwn(v)};const uid=React.useId();
  return <div className="hp-accordion__group">{heading&&<h2 className="hp-display hp-h3 hp-heading-rule">{heading}</h2>}
    {items.map(it=>{const on=open===it.id,pid=uid+'-'+it.id;return <div key={it.id} className="hp-accordion__item">
      <button type="button" className="hp-accordion__btn" aria-expanded={on} aria-controls={pid} onClick={()=>set(on?null:it.id)}>{it.title}<Icon name={on?'minus':'plus'} size={20}/></button>
      <div id={pid} className="hp-accordion__panel" hidden={!on}>{typeof it.content==='string'?<p>{it.content}</p>:it.content}</div></div>})}
  </div>;
}