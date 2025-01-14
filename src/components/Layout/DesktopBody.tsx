import React from "react";

import Footer from "../Footer";
import RoadMap from "../RoadMap";
import Sections from "../Sections";

const DesktopBody = () => {
  return (
    <div className="hidden w-full lg:block">
      <div className="flex h-screen w-full flex-col justify-center p-8 pt-28 lg:snap-start">
        <Sections />
      </div>
      <div className="lg:snap-start">
        <RoadMap />
      </div>

      <div className="lg:snap-end">
        <Footer />
      </div>
    </div>
  );
};

export default DesktopBody;
