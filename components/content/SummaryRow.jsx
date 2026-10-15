import React from 'react';
export function SummaryRow({label,value,total,muted}){
  return <div className={'hp-kv'+(total?' hp-kv--total':'')+(muted?' hp-kv--muted':'')}><span>{label}</span><span className="hp-kv__v">{value}</span></div>;
}