/**
 * @startingPoint section="Content" subtitle="Cabin / RV site card with price per night" viewport="700x460"
 */
export interface LodgingCardProps{
  name:string;
  /** "Cabin", "RV site", "Primitive camping" */
  kind:string;
  image?:string;
  sleeps?:number;
  /** Short amenity strings, e.g. "50 amp", "Water" */
  features?:string[];
  price:number;
  unit?:string;
  available?:boolean;
  onClick?:(e:any)=>void;
}
export declare function LodgingCard(props:LodgingCardProps):JSX.Element;