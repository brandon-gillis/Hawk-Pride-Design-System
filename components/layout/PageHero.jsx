import React from 'react';
import {Photo} from '../content/Photo.jsx';
export function PageHero({eyebrow,title,intro,actions,image,imageAlt,position}){const media=image!==undefined;
  return <div className="hp-pagehero hp-on-dark"><div className={'hp-container hp-pagehero__inner'+(media?'':' hp-pagehero__inner--text')}>
    <div className="hp-pagehero__text">{eyebrow&&<><div className="hp-eyebrow hp-eyebrow--accent">{eyebrow}</div><span className="hp-rule"/></>}
      <h1 className="hp-display hp-display-l">{title}</h1>
      {intro&&<p className="hp-hero__lede">{intro}</p>}
      {actions&&<div className="hp-actions">{actions}</div>}</div>
    {media&&<div className="hp-pagehero__media"><Photo src={image||undefined} caption={image?undefined:imageAlt} alt={imageAlt} position={position} ratio="auto" className="hp-photo--fill"/></div>}
  </div></div>;
}