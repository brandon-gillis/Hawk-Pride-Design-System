import React from 'react';
export function Card({variant='default',interactive,children,className,onClick,...rest}){
  const a=interactive&&onClick?{role:'button',tabIndex:0,onClick,onKeyDown:e=>{if(e.target===e.currentTarget&&(e.key==='Enter'||e.key===' ')){e.preventDefault();onClick(e)}}}:{onClick};
  return <div {...a} className={['hp-card',variant!=='default'&&'hp-card--'+variant,interactive&&'hp-card--interactive',className].filter(Boolean).join(' ')} {...rest}>{children}</div>;
}
export function CardBody({children,className}){return <div className={['hp-card__body',className].filter(Boolean).join(' ')}>{children}</div>;}