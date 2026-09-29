export interface SwitchProps{
  label:React.ReactNode;
  checked?:boolean;
  defaultChecked?:boolean;
  disabled?:boolean;
  onChange?:(e:any)=>void;
  className?:string;
}
export declare function Switch(props:SwitchProps):JSX.Element;