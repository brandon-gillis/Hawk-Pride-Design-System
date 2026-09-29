import React from 'react';
export function Tooltip({content,children,open}){
  const id=React.useId();
  const kid=React.isValidElement(children)?React.cloneElement(children,{'aria-describedby':id}):children;
  return <span className={['hp-tip',open&&'hp-tip--open'].filter(Boolean).join(' ')}>{kid}<span className="hp-tip__bubble" role="tooltip" id={id}>{content}</span></span>;
}