import React from 'react';
import {Button} from '../core/Button.jsx';
export function BookingBar({price,unit='night',summary,onSummary,ctaLabel='Reserve',onAction,sticky=true,disabled}){
  return <div className={['hp-bookbar',sticky&&'hp-bookbar--sticky'].filter(Boolean).join(' ')}>
    <div className="hp-bookbar__sum"><div className="hp-bookbar__price">${price}<small> / {unit}</small></div>{summary&&(onSummary?<button type="button" className="hp-bookbar__sub" onClick={onSummary} style={{cursor:'pointer'}}>{summary}</button>:<div className="hp-bookbar__sub" style={{textDecoration:'none'}}>{summary}</div>)}</div>
    <Button size="lg" onClick={onAction} disabled={disabled}>{ctaLabel}</Button></div>;
}