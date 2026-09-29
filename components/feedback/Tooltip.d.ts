export interface TooltipProps{
  content:React.ReactNode;
  children:React.ReactNode;
  /** Force visible (docs) */
  open?:boolean;
}
export declare function Tooltip(props:TooltipProps):JSX.Element;