import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Feature({icon,title,children,rule}){
  return <div className={'hp-feature'+(rule?' hp-feature--'+rule:'')}>{icon&&!rule&&<Icon name={icon} size={24}/>}<div><div className="hp-title">{title}</div>{children&&<div className="hp-feature__text">{children}</div>}</div></div>;
}