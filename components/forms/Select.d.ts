export interface SelectProps{
  label?:string;
  hint?:string;
  error?:string;
  /** Strings or {value,label} */
  options:Array<string|{value:string;label:string}>;
  id?:string;
  value?:string;
  defaultValue?:string;
  disabled?:boolean;
  onChange?:(e:any)=>void;
  className?:string;
}
export declare function Select(props:SelectProps):JSX.Element;