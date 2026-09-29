/**
 * @startingPoint section="Content" subtitle="Event card with date block, type and status" viewport="700x420"
 */
export interface EventCardProps{
  title:string;
  /** 3-letter month, e.g. "APR" */
  month:string;
  day:string|number;
  /** Human date range, e.g. "Apr 24–26" */
  dates:string;
  /** e.g. "Hillclimb", "Rock crawl", "Holiday ride" */
  type?:string;
  price?:string;
  status?:'open'|'few'|'soldout'|'featured';
  image?:string;
  /** stack = photo card; row = compact list row */
  layout?:'stack'|'row';
  onClick?:(e:any)=>void;
}
export declare function EventCard(props:EventCardProps):JSX.Element;