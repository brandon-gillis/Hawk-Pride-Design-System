import React from 'react';
export function Radio({label,description,disabled,className,...rest}){
  return <label className={['hp-check',disabled&&'hp-check--disabled',className].filter(Boolean).join(' ')}>
    <input type="radio" disabled={disabled} {...rest}/><span className="hp-check__box hp-check__box--radio"/>
    <span>{label}{description&&<span className="hp-check__sub">{description}</span>}</span></label>;
}