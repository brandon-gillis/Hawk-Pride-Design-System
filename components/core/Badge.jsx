import React from 'react';
import {Icon} from './Icon.jsx';
export function Badge({tone='neutral',icon,children,className}){
  return <span className={['hp-badge','hp-badge--'+tone,className].filter(Boolean).join(' ')}>{icon&&<Icon name={icon} size={13}/>}{children}</span>;
}