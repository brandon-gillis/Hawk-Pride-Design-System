/** Rate sheet rows: label, note, big condensed price */
export interface PriceListProps{rows:{label:React.ReactNode;note?:string;value:React.ReactNode}[];}
export declare function PriceList(props:PriceListProps):JSX.Element;