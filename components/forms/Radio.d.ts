export interface RadioProps{
  label:React.ReactNode;
  description?:string;
  name?:string;
  value?:string;
  checked?:boolean;
  defaultChecked?:boolean;
  disabled?:boolean;
  onChange?:(e:any)=>void;
  className?:string;
}
export declare function Radio(props:RadioProps):JSX.Element;