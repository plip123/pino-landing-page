import React, { useMemo } from "react";
import Lottie from "@/components/Lottie";

const SectionInfoImage = ({ animation }: { animation: string }) => {
  const { type, image } = useMemo(() => {
    try {
      return {
        type: "json",
        image: JSON.parse(animation),
      };
    } catch {
      return {
        type: "img",
        image: {
          backgroundImage: `url(${animation})`,
        },
      };
    }
  }, [animation]);

  return (
    <>
      {type === "image" && (
        <>
          <div
            style={image}
            className="absolute left-0 top-0 z-10 h-full w-screen bg-cover bg-center bg-no-repeat opacity-20 lg:left-auto lg:right-0 lg:w-1/2 lg:bg-cover lg:opacity-100"
          />
          <div className="absolute right-0 top-0 z-10 hidden h-full w-1/2 bg-gradient-to-r from-[#e8fbdedc] to-transparent to-15% lg:block" />
        </>
      )}
      {type === "json" && (
        <Lottie
          animationData={image}
          className="absolute left-0 top-0 z-10 h-full w-screen opacity-20 md:right-10 lg:left-auto lg:w-[650px] lg:opacity-100 2xl:right-36"
        />
      )}
    </>
  );
};

export default SectionInfoImage;
