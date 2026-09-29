import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Toast({message,tone='default',actionLabel,onAction,icon}){
  return <div className={['hp-toast',tone==='error'&&'hp-toast--error'].filter(Boolean).join(' ')} role="status">
    <Icon name={icon||(tone==='error'?'circle-alert':'circle-check')} size={20} className="hp-toast__icon"/><span>{message}</span>
    {actionLabel&&<button className="hp-toast__action" onClick={onAction}>{actionLabel}</button>}</div>;
}