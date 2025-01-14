import React from "react";

import TypeAnimation from "../TypeAnimation";

const BrandingText = () => {
  return (
    <div className="relative z-10 flex flex-col gap-6 pt-1 md:gap-12 md:pt-16 2xl:pt-16">
      <h1 className="text-4xl font-bold leading-normal text-text-primary sm:text-5xl md:text-6xl 2xl:text-7xl">
        <>
          <span>
            Discover a wallet designed
            <br />
            to be{" "}
          </span>
          <TypeAnimation
            sequence={["flexible", "intuitive", "versatile", "smart"]}
            delay={100}
            sequenceDelay={1500}
            infinite
          />
        </>
      </h1>

      <h2 className="text-xl text-text-primary md:text-2xl 2xl:text-3xl">
        Manage your digital assets seamlessly across multiple blockchains
        <br />
        with unmatched security, speed, and user-friendly design.
      </h2>
    </div>
  );
};

export default BrandingText;
