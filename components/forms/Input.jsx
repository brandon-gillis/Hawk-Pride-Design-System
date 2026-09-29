import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Input({label,hint,error,icon,id,className,...rest}){
  const fid=id||('in-'+(label||'').replace(/\W+/g,'-').toLowerCase());
  return <div className={['hp-field',icon&&'hp-field--icon',error&&'hp-field--error',className].filter(Boolean).join(' ')}>
    {label&&<label className="hp-field__label" htmlFor={fid}>{label}</label>}
    <div className="hp-field__control">{icon&&<Icon name={icon} size={18} className="hp-field__lead"/>}<input id={fid} aria-invalid={error?true:undefined} aria-describedby={(error||hint)?fid+'-hint':undefined} {...rest}/></div>
    {(error||hint)&&<div className="hp-field__hint" id={fid+'-hint'}>{error||hint}</div>}
  </div>;
}