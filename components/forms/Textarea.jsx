import React from 'react';
export function Textarea({label,hint,error,count,id,rows=4,value,className,...rest}){
  const fid=id||('ta-'+(label||'').replace(/\W+/g,'-').toLowerCase());
  const len=(value||'').length,over=count&&len>count;
  return <div className={['hp-field',error&&'hp-field--error',className].filter(Boolean).join(' ')}>
    {label&&<label className="hp-field__label" htmlFor={fid}>{label}</label>}
    {hint&&<div className="hp-field__hint hp-field__hint--top" id={fid+'-hint'}>{hint}</div>}
    <textarea id={fid} rows={rows} value={value} aria-invalid={error?true:undefined} aria-describedby={[hint&&fid+'-hint',error&&fid+'-err'].filter(Boolean).join(' ')||undefined} {...rest}/>
    {(error||count)&&<div className="hp-field__foot">{error?<span className="hp-field__error" id={fid+'-err'}>{error}</span>:<span/>}{count&&<span className={['hp-field__count',over&&'is-over'].filter(Boolean).join(' ')}>{len}/{count}</span>}</div>}
  </div>;
}
