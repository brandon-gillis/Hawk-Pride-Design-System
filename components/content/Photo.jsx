import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Photo({src,alt='',ratio='4/3',scrim,caption,position,topLeft,topRight,children,className,style}){
  return <div className={['hp-photo',className].filter(Boolean).join(' ')} style={{'--hp-ratio':ratio,...style}}>
    {src?<img src={src} alt={alt} style={position?{objectPosition:position}:undefined}/>:<div className="hp-photo__ph"><Icon name="image" size={22}/>{caption||'Park photo'}</div>}
    {scrim&&<div className="hp-photo__scrim"/>}
    {topLeft&&<div className="hp-photo__tl">{topLeft}</div>}{topRight&&<div className="hp-photo__tr">{topRight}</div>}
    {children}</div>;
}