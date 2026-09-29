export interface IconProps{
  /** Hawk Pride set name (kebab-case Lucide name), e.g. "map-pin", "tent", "calendar-days". See components/core/icons.js */
  name:string;
  /** Pixel size. Default 20 */
  size?:number;
  className?:string;
  style?:React.CSSProperties;
  /** Accessible label; omit for decorative icons */
  label?:string;
}
export declare function Icon(props:IconProps):JSX.Element;