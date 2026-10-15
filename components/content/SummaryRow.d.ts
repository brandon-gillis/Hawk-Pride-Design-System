/** Label · value row for totals, trip summaries, hours */
export interface SummaryRowProps{label:React.ReactNode;value:React.ReactNode;/** Bold 18px total line */total?:boolean;muted?:boolean;}
export declare function SummaryRow(props:SummaryRowProps):JSX.Element;