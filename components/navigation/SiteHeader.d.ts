/**
 * @startingPoint section="Navigation" subtitle="Black site header with gold rule, logo and Book CTA" viewport="700x200"
 */
export interface SiteHeaderProps{
  /** Path to assets/logo/brandmark-gold.svg (relative to page) */
  logoSrc?:string;
  links?:Array<{id:string;label:string}>;
  current?:string;
  onNavigate?:(id:string)=>void;
  onMenu?:()=>void;
  onBook?:()=>void;
  /** Transparent over hero photography */
  overlay?:boolean;
  ctaLabel?:string;
  /** Show the "Hawk Pride Offroad" wordmark next to the mark (default true while the park moves off the old name) */
  showName?:boolean;
}
export declare function SiteHeader(props:SiteHeaderProps):JSX.Element;