import React from "react";
import { useSections } from "@/hooks/Sections";

import SectionDots from "./SectionDots";
import SectionFrame from "./SectionFrame";
import SectionList from "./SectionList";

const Sections = () => {
  const { sections, currentSection, handleSection } = useSections();

  return (
    <div className="relative h-full max-h-[880px]">
      <SectionDots
        currentSection={currentSection}
        items={sections}
        onClick={handleSection}
      />
      <SectionFrame>
        <SectionList sections={sections} />
      </SectionFrame>
    </div>
  );
};

export default Sections;
