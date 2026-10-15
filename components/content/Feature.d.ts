/** Icon or rule + title + one line of detail; for rules, amenities, 'before you come' */
export interface FeatureProps{
  /** Lucide icon, shown when no rule */
  icon?:string;
  title:React.ReactNode;
  children?:React.ReactNode;
  /** line = hairline above; gold = 3px gold bar above (audience lists) */
  rule?:'line'|'gold';
}
export declare function Feature(props:FeatureProps):JSX.Element;