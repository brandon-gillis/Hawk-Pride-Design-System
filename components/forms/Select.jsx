import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Select({label,hint,error,options=[],id,className,...rest}){
  const fid=id||('sel-'+(label||'').replace(/\W+/g,'-').toLowerCase());
  return <div className={['hp-field',error&&'hp-field--error',className].filter(Boolean).join(' ')}>
    {label&&<label className="hp-field__label" htmlFor={fid}>{label}</label>}
    <div className="hp-field__control"><select id={fid} aria-invalid={error?true:undefined} aria-describedby={(error||hint)?fid+'-hint':undefined} {...rest}>{options.map(o=>typeof o==='string'?<option key={o}>{o}</option>:<option key={o.value} value={o.value}>{o.label}</option>)}</select><Icon name="chevron-down" size={18} className="hp-field__chev"/></div>
    {(error||hint)&&<div className="hp-field__hint" id={fid+'-hint'}>{error||hint}</div>}
  </div>;
}