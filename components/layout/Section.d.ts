/** Page section with eyebrow, gold rule, title, intro and action */
export interface SectionProps{
  eyebrow?:string;
  title?:React.ReactNode;
  /** One or two sentences under the title (body-l, muted, 62ch max) */
  intro?:React.ReactNode;
  /** Right-aligned action, usually an outline Button */
  action?:React.ReactNode;
  /** Black band, flips text and buttons to on-dark */
  dark?:boolean;
  /** Stone-100 band for rhythm between white sections */
  sunken?:boolean;
  id?:string;
  className?:string;
  /** Heading level for the title. Default 2 */
  level?:2|3;
  children?:React.ReactNode;
}
export declare function Section(props:SectionProps):JSX.Element;
export interface SectionHeaderProps{eyebrow?:string;title?:React.ReactNode;intro?:React.ReactNode;action?:React.ReactNode;level?:1|2|3;}
export declare function SectionHeader(props:SectionHeaderProps):JSX.Element;