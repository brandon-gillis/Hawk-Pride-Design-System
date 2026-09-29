import React from 'react';
import {Card} from './Card.jsx';
import {Photo} from './Photo.jsx';
import {Badge} from '../core/Badge.jsx';
import {Icon} from '../core/Icon.jsx';
import {IconButton} from '../core/IconButton.jsx';
export function LodgingCard({name,kind,image,sleeps,features=[],price,unit='night',available=true,onClick}){
  return <Card interactive onClick={onClick} aria-label={name+', $'+price+' per '+unit+(available?'':', booked')}>
    <Photo src={image} caption={kind+' photo'} topLeft={!available&&<Badge tone="dark">Booked</Badge>} topRight={<IconButton icon="heart" label="Save" variant="dark" size="sm" onClick={e=>e.stopPropagation()} onKeyDown={e=>e.stopPropagation()}/>}/>
    <div className="hp-card__body">
      <div className="hp-eyebrow" style={{color:'var(--text-muted)'}}>{kind}</div>
      <h3 className="hp-card__title">{name}</h3>
      <div className="hp-card__meta">{sleeps&&<span><Icon name="users" size={14}/>Sleeps {sleeps}</span>}{features.map(f=><span key={f}>{f}</span>)}</div>
      <div className="hp-card__foot"><div className="hp-price">${price}<small>/ {unit}</small></div><Icon name="arrow-right" size={20}/></div>
    </div></Card>;
}