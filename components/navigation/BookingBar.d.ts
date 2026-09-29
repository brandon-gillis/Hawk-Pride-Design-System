/**
 * @startingPoint section="Navigation" subtitle="Sticky mobile booking bar: price + Reserve" viewport="700x160"
 */
export interface BookingBarProps{
  price:number|string;
  unit?:string;
  /** e.g. "Fri, Apr 24 – Sun, Apr 26" */
  summary?:string;
  onSummary?:()=>void;
  ctaLabel?:string;
  onAction?:()=>void;
  sticky?:boolean;
  disabled?:boolean;
}
export declare function BookingBar(props:BookingBarProps):JSX.Element;