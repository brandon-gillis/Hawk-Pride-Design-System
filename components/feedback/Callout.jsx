import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Callout({icon='info',children}){
  return <div className="hp-callout"><Icon name={icon} size={18}/><span>{children}</span></div>;
}