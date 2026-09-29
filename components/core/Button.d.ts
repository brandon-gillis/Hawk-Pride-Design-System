/**
 * @startingPoint section="Core" subtitle="Gold primary, black secondary, outline and ghost buttons" viewport="700x300"
 */
export interface ButtonProps{
  /** primary = gold (one per view), secondary = black, outline, ghost */
  variant?:'primary'|'secondary'|'outline'|'ghost';
  size?:'sm'|'md'|'lg';
  /** Full-width (mobile CTAs) */
  block?:boolean;
  /** Leading Lucide icon name */
  icon?:string;
  /** Trailing Lucide icon name */
  iconRight?:string;
  /** Renders an <a> instead of <button> */
  href?:string;
  disabled?:boolean;
  onClick?:(e:any)=>void;
  children?:React.ReactNode;
  className?:string;
}
export declare function Button(props:ButtonProps):JSX.Element;