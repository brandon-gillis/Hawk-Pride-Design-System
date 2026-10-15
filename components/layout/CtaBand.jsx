import React from 'react';
export function CtaBand({title,text,action,tone='dark',eyebrow}){
  return <section className={'hp-band hp-band--'+tone+(tone==='dark'?' hp-on-dark':'')}><div className="hp-container hp-band__inner">
    <div>{eyebrow&&<div className="hp-eyebrow hp-eyebrow--accent">{eyebrow}</div>}<h2 className="hp-display hp-h2">{title}</h2>{text&&<p className="hp-band__text">{text}</p>}</div>
    {action}</div></section>;
}