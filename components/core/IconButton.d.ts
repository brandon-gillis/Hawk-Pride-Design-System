export interface IconButtonProps{
  /** Lucide icon name */
  icon:string;
  /** Required accessible label */
  label:string;
  /** default = bordered white; ghost; dark = translucent over photos; gold */
  variant?:'default'|'ghost'|'dark'|'gold';
  size?:'sm'|'md';
  disabled?:boolean;
  onClick?:(e:any)=>void;
  className?:string;
}
export declare function IconButton(props:IconButtonProps):JSX.Element;