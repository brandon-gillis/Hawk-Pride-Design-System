export interface DialogProps{
  open:boolean;
  title:string;
  children?:React.ReactNode;
  footer?:React.ReactNode;
  onClose?:()=>void;
  /** Becomes a bottom sheet under 560px. Default true */
  sheet?:boolean;
  /** Render without fixed scrim (for docs/cards) */
  inline?:boolean;
}
export declare function Dialog(props:DialogProps):JSX.Element|null;