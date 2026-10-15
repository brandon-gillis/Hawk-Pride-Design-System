import React from 'react';
import {Icon} from './Icon.jsx';
export function Chip({pressed,onClick,icon,children}){
  return <button type="button" className="hp-chip" aria-pressed={!!pressed} onClick={onClick}>{icon&&<Icon name={icon} size={16}/>}{children}</button>;
}