import React from 'react';
import { ICONS } from './icons.js';
const FALLBACK='https://unpkg.com/lucide-static@0.460.0/icons/';
export function Icon({name,size=20,className,style,label}){
  const src=ICONS[name];
  if(!src&&typeof console!=='undefined')console.warn(`Icon "${name}" is not in the Hawk Pride set; falling back to stock Lucide.`);
  return <span className={['hp-icon',className].filter(Boolean).join(' ')} role={label?'img':undefined} aria-label={label} aria-hidden={label?undefined:true}
    style={{width:size,height:size,'--hp-icon':`url("${src||FALLBACK+name+'.svg'}")`,...style}}/>;
}
