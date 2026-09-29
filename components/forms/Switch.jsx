import React from 'react';
export function Switch({label,disabled,className,...rest}){
  return <label className={['hp-check',disabled&&'hp-check--disabled',className].filter(Boolean).join(' ')} style={{alignItems:'center'}}>
    <input type="checkbox" role="switch" disabled={disabled} {...rest}/><span className="hp-switch__track"/><span>{label}</span></label>;
}