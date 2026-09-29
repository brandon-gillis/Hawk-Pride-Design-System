export interface CardProps{
  /** default = white w/ hairline, raised = shadow, dark = black */
  variant?:'default'|'raised'|'dark';
  /** Hover lift + photo zoom */
  interactive?:boolean;
  onClick?:(e:any)=>void;
  children?:React.ReactNode;
  className?:string;
}
export declare function Card(props:CardProps):JSX.Element;
export declare function CardBody(props:{children?:React.ReactNode;className?:string}):JSX.Element;