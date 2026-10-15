import React from 'react';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function SectionHeader({eyebrow,title,intro,action,level=2}){const H='h'+level;
  return <div className="hp-sechead"><div className="hp-sechead__text">{eyebrow&&<><div className="hp-eyebrow hp-eyebrow--accent">{eyebrow}</div><span className="hp-rule"/></>}{title&&<H className="hp-display hp-h1">{title}</H>}{intro&&<p className="hp-lede">{intro}</p>}</div>{action}</div>;
}
export function Section({eyebrow,title,intro,action,dark,sunken,id,className,children,level=2}){
  return <section id={id} className={cx('hp-section',dark&&'hp-section--dark hp-on-dark',sunken&&'hp-section--sunken',className)}><div className="hp-container">
    {(title||eyebrow)&&<SectionHeader eyebrow={eyebrow} title={title} intro={intro} action={action} level={level}/>}
    {children}</div></section>;
}