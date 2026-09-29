export interface DifficultyBadgeProps{
  /** Trail-sign convention: easy ● green, moderate ■ blue, difficult ◆ black, extreme ◆ red */
  level:'easy'|'moderate'|'difficult'|'extreme';
  showLabel?:boolean;
  className?:string;
}
export declare function DifficultyBadge(props:DifficultyBadgeProps):JSX.Element;