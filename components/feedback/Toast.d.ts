export interface ToastProps{
  message:string;
  tone?:'default'|'error';
  icon?:string;
  actionLabel?:string;
  onAction?:()=>void;
}
export declare function Toast(props:ToastProps):JSX.Element;