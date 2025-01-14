import { type RefObject } from "react";

export interface ITypeAnimation {
  sequence: Array<string>;
  delay: number;
  sequenceDelay?: number;
  infinite?: boolean;
  className?: string;
}

export interface ITypeAnimationHook {
  elementRef: RefObject<HTMLElement>;
  sequence: Array<string>;
  delay: number;
  sequenceDelay?: number;
  infinite?: boolean;
}
