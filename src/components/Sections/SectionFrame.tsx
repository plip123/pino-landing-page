import React, { type ReactNode } from "react";

const SectionFrame = (props: { children: ReactNode }) => {
  return (
    <div className="scroll-hide relative h-full w-full snap-y snap-mandatory overflow-y-auto rounded-3xl border border-white shadow-primary">
      {props.children}
    </div>
  );
};

export default SectionFrame;
