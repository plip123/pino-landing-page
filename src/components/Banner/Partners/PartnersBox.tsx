import React from "react";

import PartnersContent from "./PartnersContent";

const PartnersBox = () => {
  return (
    <>
      <div className="relative z-10 mt-8 hidden w-full overflow-hidden rounded-3xl bg-brand-secondary p-8 shadow-primary lg:flex lg:w-fit">
        <div className="flex min-w-max items-center gap-6">
          <PartnersContent />
        </div>
      </div>

      {/* For Mobile */}
      <div className="z-10 mt-8 inline-flex w-full flex-nowrap gap-4 overflow-hidden rounded-3xl bg-brand-secondary p-8 shadow-primary lg:hidden">
        <div className="flex animate-leftToRight items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          <PartnersContent />
        </div>
        <div
          className="flex animate-leftToRight items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
          aria-hidden="true"
        >
          <PartnersContent />
        </div>
      </div>
    </>
  );
};

export default PartnersBox;
