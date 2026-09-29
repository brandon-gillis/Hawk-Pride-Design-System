export interface TrailRowProps{
  /** Trail marker number as posted in the park, e.g. "#42" */
  number:string;
  name:string;
  level:'easy'|'moderate'|'difficult'|'extreme';
  /** e.g. "SxS · Jeep" */
  vehicles?:string;
  length?:string;
  status?:'open'|'closed';
  onClick?:(e:any)=>void;
}
export declare function TrailRow(props:TrailRowProps):JSX.Element;