import React from 'react';
import {Icon} from './Icon.jsx';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function IconButton({icon,label,variant='default',size='md',className,...rest}){
  return <button type="button" aria-label={label} title={label} className={cx('hp-iconbtn',variant!=='default'&&'hp-iconbtn--'+variant,size==='sm'&&'hp-iconbtn--sm',className)} {...rest}><Icon name={icon} size={size==='sm'?18:20}/></button>;
}