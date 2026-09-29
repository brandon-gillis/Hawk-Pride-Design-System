export interface TabsProps{
  items:Array<{id:string;label:string;icon?:string;count?:number}>;
  value:string;
  onChange?:(id:string)=>void;
  /** line = underline w/ gold rule; pill = filter chips */
  variant?:'line'|'pill';
  className?:string;
  /** Accessible name for the tab list, e.g. "Trail filters" */
  label?:string;
}
export declare function Tabs(props:TabsProps):JSX.Element;