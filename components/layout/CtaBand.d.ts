/** Closing call-to-action band, dark or gold */
export interface CtaBandProps{
  title:React.ReactNode;
  text?:React.ReactNode;
  eyebrow?:string;
  /** Usually one lg Button. Goes full-width on mobile */
  action?:React.ReactNode;
  /** dark = black band (gold button). gold = gold band (secondary button) */
  tone?:'dark'|'gold';
}
export declare function CtaBand(props:CtaBandProps):JSX.Element;