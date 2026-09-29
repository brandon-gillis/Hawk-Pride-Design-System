import React from 'react';
import {IconButton} from '../core/IconButton.jsx';
export function QuantityStepper({label,description,value=0,min=0,max=99,onChange=()=>{},className}){
  return <div className={['hp-stepper',className].filter(Boolean).join(' ')}>
    <div><div className="hp-stepper__label">{label}</div>{description&&<div className="hp-stepper__sub">{description}</div>}</div>
    <div className="hp-stepper__ctl"><IconButton icon="minus" label={'Fewer '+label} disabled={value<=min} onClick={()=>onChange(Math.max(min,value-1))}/>
    <span className="hp-stepper__val" aria-live="polite">{value}</span>
    <IconButton icon="plus" label={'More '+label} disabled={value>=max} onClick={()=>onChange(Math.min(max,value+1))}/></div></div>;
}