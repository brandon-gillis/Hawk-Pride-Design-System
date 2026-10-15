/** Interior page header: black band, condensed title, photo bleeding right */
export interface PageHeroProps{
  eyebrow?:string;
  title:React.ReactNode;
  intro?:React.ReactNode;
  /** Buttons. Stack full-width under 560px */
  actions?:React.ReactNode;
  /** Photo URL. Pass "" for a placeholder, omit for a text-only header */
  image?:string;
  imageAlt?:string;
  /** object-position for the photo, e.g. "50% 40%" */
  position?:string;
}
export declare function PageHero(props:PageHeroProps):JSX.Element;