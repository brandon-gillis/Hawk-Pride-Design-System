import React from 'react';
import {Icon} from './Icon.jsx';
export function TextLink({href,onClick,icon,iconRight,children,...rest}){const c='hp-textlink'+(icon||iconRight?' hp-textlink--icon':'');
  const inner=<>{icon&&<Icon name={icon} size={16}/>}{children}{iconRight&&<Icon name={iconRight} size={16}/>}</>;
  return href?<a href={href} className={c} onClick={onClick} {...rest}>{inner}</a>:<button type="button" className={c} onClick={onClick} {...rest}>{inner}</button>;
}