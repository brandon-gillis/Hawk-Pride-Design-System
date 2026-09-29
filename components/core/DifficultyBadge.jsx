import React from 'react';
const L={easy:'Easy',moderate:'Moderate',difficult:'Difficult',extreme:'Extreme'};
export function DifficultyBadge({level='easy',showLabel=true,className}){
  return <span className={['hp-diff',className].filter(Boolean).join(' ')} title={L[level]} role={showLabel?undefined:'img'} aria-label={showLabel?undefined:L[level]+' trail'}><span aria-hidden="true" className={'hp-diff__mark hp-diff__mark--'+level}/>{showLabel&&L[level]}</span>;
}