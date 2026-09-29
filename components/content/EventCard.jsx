import React from 'react';
import {Card} from './Card.jsx';
import {Photo} from './Photo.jsx';
import {Badge} from '../core/Badge.jsx';
import {Icon} from '../core/Icon.jsx';
export function EventCard({title,month,day,dates,type,price,status,image,onClick,layout='stack'}){
  const st=status==='soldout'?<Badge tone="danger">Sold out</Badge>:status==='few'?<Badge tone="warning">Few spots left</Badge>:status==='featured'?<Badge tone="gold">Featured</Badge>:null;
  if(layout==='row')return <Card interactive onClick={onClick} aria-label={title+(dates?', '+dates:'')} style={{flexDirection:'row',alignItems:'center',gap:14,padding:12}}>
    <div className="hp-date"><div className="hp-date__m">{month}</div><div className="hp-date__d">{day}</div></div>
    <div style={{minWidth:0,flex:1,display:'flex',flexDirection:'column',gap:4}}><h3 className="hp-card__title" style={{fontSize:20}}>{title}</h3>
    <div className="hp-card__meta"><span><Icon name="calendar-days" size={14}/>{dates}</span>{type&&<span>{type}</span>}</div></div>
    {st||<Icon name="chevron-right" size={20} style={{color:'var(--text-muted)'}}/>}</Card>;
  return <Card interactive onClick={onClick} aria-label={title+(dates?', '+dates:'')}>
    <Photo src={image} ratio="16/10" caption="Event photo" topLeft={st}/>
    <div className="hp-card__body" style={{flexDirection:'row',gap:14}}>
      <div className="hp-date"><div className="hp-date__m">{month}</div><div className="hp-date__d">{day}</div></div>
      <div style={{minWidth:0,display:'flex',flexDirection:'column',gap:6}}>
        {type&&<div className="hp-eyebrow" style={{color:'var(--gold-700)'}}>{type}</div>}
        <h3 className="hp-card__title">{title}</h3>
        <div className="hp-card__meta"><span><Icon name="calendar-days" size={14}/>{dates}</span>{price&&<span><Icon name="ticket" size={14}/>{price}</span>}</div>
      </div></div></Card>;
}