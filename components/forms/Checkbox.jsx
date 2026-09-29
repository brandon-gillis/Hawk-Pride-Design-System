import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Checkbox({label,description,disabled,className,...rest}){
  return <label className={['hp-check',disabled&&'hp-check--disabled',className].filter(Boolean).join(' ')}>
    <input type="checkbox" disabled={disabled} {...rest}/><span className="hp-check__box"><Icon name="check" size={15}/></span>
    <span>{label}{description&&<span className="hp-check__sub">{description}</span>}</span></label>;
}