import React from 'react';
export function PriceList({rows=[]}){
  return <div className="hp-pricelist">{rows.map((r,i)=><div key={i} className="hp-pricelist__row"><div><div className="hp-title">{r.label}</div>{r.note&&<div className="hp-pricelist__note">{r.note}</div>}</div><div className="hp-pricelist__value">{r.value}</div></div>)}</div>;
}