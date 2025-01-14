import React from "react";
import { useSections } from "@/hooks/Sections";

import Footer from "../Footer";
import SectionList from "../Sections/SectionList";

const MobileBody = () => {
  const { allSections } = useSections();

  return (
    <div className="lg:hidden">
      <SectionList sections={allSections} />
      <Footer />
    </div>
  );
};

export default MobileBody;
