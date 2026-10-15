export interface TextareaProps{
  label?:string;
  /** Shown under the label, above the box */
  hint?:string;
  /** Error message; turns border red */
  error?:string;
  /** Soft character limit; shows a live n/max counter that turns red when over */
  count?:number;
  rows?:number;
  id?:string;
  placeholder?:string;
  value?:string;
  onChange?:(e:any)=>void;
  className?:string;
}
export declare function Textarea(props:TextareaProps):JSX.Element;
