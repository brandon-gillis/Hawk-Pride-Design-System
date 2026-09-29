import React from 'react';
import {IconButton} from '../core/IconButton.jsx';
export function Dialog({open,title,children,footer,onClose,sheet=true,inline}){
  const ref=React.useRef(null);const tid=React.useId();
  React.useEffect(()=>{if(!open||inline)return;const prev=document.activeElement;const el=ref.current;el&&el.focus();
    const k=e=>{if(e.key==='Escape'){onClose&&onClose()}else if(e.key==='Tab'&&el){const f=el.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');if(!f.length)return;const a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}};
    document.addEventListener('keydown',k);return()=>{document.removeEventListener('keydown',k);prev&&prev.focus&&prev.focus()}},[open,inline]);
  if(!open)return null;
  const box=<div className="hp-dialog" ref={ref} tabIndex={-1} role="dialog" aria-modal={inline?undefined:true} aria-labelledby={tid} style={{outline:'none'}} onClick={e=>e.stopPropagation()}>
    <div className="hp-dialog__head"><h2 className="hp-dialog__title" id={tid}>{title}</h2><IconButton icon="x" label="Close" variant="ghost" onClick={onClose}/></div>
    <div className="hp-dialog__body">{children}</div>{footer&&<div className="hp-dialog__foot">{footer}</div>}</div>;
  if(inline)return box;
  return <div className={['hp-dialog__scrim',sheet&&'hp-dialog__scrim--sheet'].filter(Boolean).join(' ')} onClick={onClose}>{box}</div>;
}