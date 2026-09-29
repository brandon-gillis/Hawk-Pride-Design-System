export interface QuantityStepperProps{
  label:string;
  description?:string;
  value:number;
  min?:number;
  max?:number;
  onChange?:(value:number)=>void;
  className?:string;
}
export declare function QuantityStepper(props:QuantityStepperProps):JSX.Element;