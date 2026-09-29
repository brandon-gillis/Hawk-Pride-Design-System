export interface PhotoProps{
  /** Image URL. Omit to render the striped placeholder */
  src?:string;
  alt?:string;
  /** CSS aspect-ratio, e.g. "16/9". Default 4/3 */
  ratio?:string;
  /** Adds bottom protection gradient for overlaid text */
  scrim?:boolean;
  /** Placeholder label, e.g. "Cabin interior" */
  caption?:string;
  /** CSS object-position, e.g. "50% 30%" */
  position?:string;
  topLeft?:React.ReactNode;
  topRight?:React.ReactNode;
  children?:React.ReactNode;
  className?:string;
  style?:React.CSSProperties;
}
export declare function Photo(props:PhotoProps):JSX.Element;