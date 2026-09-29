/**
 * @startingPoint section="Content" subtitle="Day-pass / pricing tier card" viewport="700x380"
 */
export interface PriceCardProps{
  title:string;
  price:number|string;
  /** e.g. "/ rider" */
  unit?:string;
  description?:string;
  features?:string[];
  /** Black card w/ gold price — use for the recommended tier */
  highlight?:boolean;
  badge?:string;
  /** Usually a <Button block/> */
  action?:React.ReactNode;
  className?:string;
}
export declare function PriceCard(props:PriceCardProps):JSX.Element;