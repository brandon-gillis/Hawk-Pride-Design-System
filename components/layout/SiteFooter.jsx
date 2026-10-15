import React from 'react';
import {Icon} from '../core/Icon.jsx';
const Item=({label,href,icon,onClick,text})=>{const inner=<>{icon&&<Icon name={icon} size={18}/>}{label}</>;
  if(text)return <span className="hp-footer__text">{inner}</span>;
  return <a href={href||'#'} className="hp-footer__link" onClick={onClick?e=>{e.preventDefault();onClick()}:undefined}>{inner}</a>};
export function SiteFooter({logoSrc,tagline='Go conquer something.',columns=[],legal,social=[]}){
  return <footer className="hp-footer"><div className="hp-container hp-footer__grid">
    <div className="hp-footer__brand">{logoSrc&&<img src={logoSrc} alt="Hawk Pride Offroad" className="hp-footer__logo"/>}<div className="hp-display hp-footer__tagline">{tagline}</div></div>
    {columns.map(c=><div key={c.title} className="hp-footer__col"><div className="hp-eyebrow">{c.title}</div>{c.items.map(it=><Item key={it.label+(it.href||'')} {...it}/>)}</div>)}
  </div><div className="hp-container hp-footer__legal">{legal}{social.length>0&&<span className="hp-footer__social">{social.map(s=><a key={s.label} href={s.href||'#'} aria-label={s.label} className="hp-footer__link"><Icon name={s.icon} size={20}/></a>)}</span>}</div></footer>;
}