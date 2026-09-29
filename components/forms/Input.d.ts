export interface InputProps{
  label?:string;
  hint?:string;
  /** Error message; turns border red */
  error?:string;
  /** Leading Lucide icon */
  icon?:string;
  id?:string;
  type?:string;
  placeholder?:string;
  value?:string;
  defaultValue?:string;
  disabled?:boolean;
  onChange?:(e:any)=>void;
  className?:string;
}
export declare function Input(props:InputProps):JSX.Element;