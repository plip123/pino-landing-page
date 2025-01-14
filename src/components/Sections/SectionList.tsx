import React from "react";

import { type ISections } from "./Section.interface";
import SectionBox from "./SectionBox";

const SectionList = (props: { sections: Array<ISections> }) => {
  return (
    <>
      {props.sections.map((section, key) => (
        <div
          key={key}
          id={`lp-section-${key}`}
          className="h-full w-full lg:snap-center"
        >
          <SectionBox index={key} {...section} />
        </div>
      ))}
    </>
  );
};

export default SectionList;
