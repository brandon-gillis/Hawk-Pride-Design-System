import React from 'react';
import {IconButton} from '../core/IconButton.jsx';
import {Button} from '../core/Button.jsx';
export function SiteHeader({logoSrc,links=[],current,onNavigate=()=>{},onMenu,onBook,overlay,ctaLabel='Book now',showName=true}){
  return <header className={['hp-header',overlay&&'hp-header--overlay'].filter(Boolean).join(' ')}>
    <a href="#" onClick={e=>{e.preventDefault();onNavigate('home')}} className="hp-header__brand" aria-label="Hawk Pride Offroad, home">{logoSrc&&<img src={logoSrc} alt="" className="hp-header__logo"/>}{(showName||!logoSrc)&&<span className="hp-header__name"><span>Hawk Pride</span><span>Offroad</span></span>}</a>
    <nav className="hp-header__nav" aria-label="Main">{links.map(l=><button key={l.id} className="hp-header__link" aria-current={current===l.id?'page':undefined} onClick={()=>onNavigate(l.id)}>{l.label}</button>)}</nav>
    <div className="hp-header__actions"><Button size="sm" onClick={onBook}>{ctaLabel}</Button><IconButton icon="menu" label="Menu" variant="dark" className="hp-header__menu" onClick={onMenu}/></div>
  </header>;
}