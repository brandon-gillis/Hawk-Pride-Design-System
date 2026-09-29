import React from 'react';
import {Icon} from '../core/Icon.jsx';
const IC={info:'info',success:'circle-check',warning:'triangle-alert',danger:'octagon-alert'};
export function Alert({tone='info',title,children,onClose,className}){
  if(tone==='status'||tone==='closed')return <div role="status" className={['hp-alert hp-alert--status',tone==='closed'&&'hp-alert--closed',className].filter(Boolean).join(' ')}><span className="hp-alert__dot" aria-hidden="true"/><span><b>{title}</b>{children&&<> · {children}</>}</span></div>;
  return <div role={tone==='danger'?'alert':'status'} className={['hp-alert','hp-alert--'+tone,className].filter(Boolean).join(' ')}>
    <Icon name={IC[tone]} size={20} style={{marginTop:1}}/><div>{title&&<div className="hp-alert__title">{title}</div>}{children}</div>
    {onClose&&<button className="hp-alert__close" aria-label="Dismiss" onClick={onClose}><Icon name="x" size={18}/></button>}</div>;
}