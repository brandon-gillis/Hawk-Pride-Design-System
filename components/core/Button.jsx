import React from 'react';
import {Icon} from './Icon.jsx';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function Button({variant='primary',size='md',block,icon,iconRight,href,children,className,...rest}){
  const c=cx('hp-btn','hp-btn--'+variant,size!=='md'&&'hp-btn--'+size,block&&'hp-btn--block',className);
  const s=size==='sm'?16:size==='lg'?20:18;
  const inner=<>{icon&&<Icon name={icon} size={s}/>}{children!=null&&children!==false&&<span>{children}</span>}{iconRight&&<Icon name={iconRight} size={s}/>}</>;
  return href?<a href={href} className={c} {...rest}>{inner}</a>:<button type="button" className={c} {...rest}>{inner}</button>;
}