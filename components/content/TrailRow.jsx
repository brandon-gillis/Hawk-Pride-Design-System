import React from 'react';
import {DifficultyBadge} from '../core/DifficultyBadge.jsx';
import {Icon} from '../core/Icon.jsx';
export function TrailRow({number,name,level,vehicles,length,status,onClick}){
  return <div className="hp-trail" role="button" tabIndex={0} onClick={onClick} onKeyDown={e=>{if(onClick&&(e.key==='Enter'||e.key===' ')){e.preventDefault();onClick(e)}}} aria-label={`Trail ${number}, ${name}, ${level}${status==='closed'?', closed':''}`}>
    <span className="hp-trail__num">{number}</span>
    <div style={{minWidth:0}}><div className="hp-trail__name">{name}</div>
      <div className="hp-trail__meta"><DifficultyBadge level={level}/>{vehicles&&<span>{vehicles}</span>}{length&&<span>{length}</span>}</div></div>
    <div className="hp-trail__end">{status==='closed'?<span className="hp-badge hp-badge--danger">Closed</span>:<Icon name="chevron-right" size={20}/>}</div>
  </div>;
}