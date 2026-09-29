import React from 'react';
import {Icon} from '../core/Icon.jsx';
import {Badge} from '../core/Badge.jsx';
export function PriceCard({title,price,unit,description,features=[],highlight,badge,action,className}){
  return <div className={['hp-card hp-pricecard',highlight&&'hp-card--dark',className].filter(Boolean).join(' ')}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:8}}><h3 className="hp-card__title" style={{fontSize:22}}>{title}</h3>{badge&&<Badge tone={highlight?'gold':'dark'}>{badge}</Badge>}</div>
    <div className="hp-price">${price}{unit&&<small>{unit}</small>}</div>
    {description&&<p style={{margin:0,fontSize:15,color:highlight?'var(--text-inverse-muted)':'var(--text-muted)'}}>{description}</p>}
    {features.length>0&&<ul className="hp-pricecard__list">{features.map(f=><li key={f}><Icon name="check" size={16}/>{f}</li>)}</ul>}
    {action&&<div style={{marginTop:'auto',paddingTop:4}} className={highlight?'hp-on-dark':''}>{action}</div>}
  </div>;
}