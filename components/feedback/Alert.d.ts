export interface AlertProps{
  /** status/closed = full-width black park-status strip with green/red dot */
  tone?:'info'|'success'|'warning'|'danger'|'status'|'closed';
  title?:string;
  children?:React.ReactNode;
  onClose?:()=>void;
  className?:string;
}
export declare function Alert(props:AlertProps):JSX.Element;