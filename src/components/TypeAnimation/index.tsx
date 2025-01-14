import React, { useRef } from "react";
import { useTypeAnimation } from "@/hooks/TypeAnimation";

import { type ITypeAnimation } from "./TypeAnimation.interface";

const TypeAnimation = ({
  sequence,
  delay,
  sequenceDelay,
  infinite,
  className = "",
}: ITypeAnimation) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const text = useTypeAnimation({
    sequence,
    delay,
    sequenceDelay,
    infinite,
    elementRef,
  });

  return (
    <span className={className ?? ""} ref={elementRef}>
      {text}
    </span>
  );
};

export default TypeAnimation;
