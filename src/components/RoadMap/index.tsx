import React from "react";
import { useSections } from "@/hooks/Sections";

import SectionBox from "../Sections/SectionBox";
import SectionFrame from "../Sections/SectionFrame";

const RoadMap = () => {
  const { roadMapSection } = useSections();

  return (
    <div
      id="roadmap"
      className="mt-20 flex h-full min-h-screen items-center p-8"
    >
      <SectionFrame>
        <SectionBox {...roadMapSection} />
      </SectionFrame>
    </div>
  );
};

export default RoadMap;
