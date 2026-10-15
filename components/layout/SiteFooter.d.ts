/** Black footer: brandmark, tagline, link columns, legal row */
export interface FooterItem{label:React.ReactNode;href?:string;icon?:string;onClick?:()=>void;/** Plain text, not a link (address, hours) */text?:boolean;}
export interface SiteFooterProps{
  logoSrc?:string;
  tagline?:string;
  columns?:{title:string;items:FooterItem[]}[];
  /** Copyright and small links */
  legal?:React.ReactNode;
  social?:{label:string;icon:string;href?:string}[];
}
export declare function SiteFooter(props:SiteFooterProps):JSX.Element;