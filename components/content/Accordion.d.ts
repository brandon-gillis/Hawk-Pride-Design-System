/** FAQ-style disclosure list; one open at a time */
export interface AccordionItem{id:string;title:React.ReactNode;/** String renders as a muted paragraph; pass nodes for links */content:React.ReactNode;}
export interface AccordionProps{
  items:AccordionItem[];
  /** Optional group heading with gold underline */
  heading?:string;
  defaultOpen?:string|null;
  /** Controlled open id */
  value?:string|null;
  onChange?:(id:string|null)=>void;
}
export declare function Accordion(props:AccordionProps):JSX.Element;