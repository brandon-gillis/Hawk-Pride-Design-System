export interface BadgeProps{
  tone?:'neutral'|'gold'|'dark'|'success'|'warning'|'danger'|'outline';
  /** Optional leading Lucide icon */
  icon?:string;
  children?:React.ReactNode;
  className?:string;
}
export declare function Badge(props:BadgeProps):JSX.Element;