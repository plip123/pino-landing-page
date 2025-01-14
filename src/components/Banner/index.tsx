import React, { useEffect, useRef } from "react";
import BgAnimated from "@/assets/animations/hero-anim.json";
import { useNavbarItems } from "@/hooks/NavbarItems";
import { LottieRefCurrentProps } from "lottie-react";

import { Button } from "../Common/Button";
import { Icon } from "../Common/Icon";
import Lottie from "../Lottie";
import BrandingText from "./BrandingText";
import Partners from "./Partners/PartnersBox";

const Banner = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const { getRedirectUri } = useNavbarItems();

  useEffect(() => {
    if (!lottieRef.current) return;
    lottieRef.current.setSpeed(2);
  }, []);

  return (
    <div
      id="main"
      className="relative flex h-full max-h-[calc(100vh-80px)] flex-col gap-5 px-8 pt-0 sm:gap-10 md:gap-16 md:px-14 sm-tall:gap-12"
    >
      <div className="my-auto flex flex-col gap-4 md:gap-8">
        <BrandingText />
        <Partners />

        <Button
          variant="primary"
          className="relative z-10 mx-auto mt-5 hidden animate-bounce !rounded-3xl px-6 py-4 md:mt-48 xs-tall:flex sm-tall:mt-20"
          onClick={() => getRedirectUri("#vision")}
        >
          <Icon icon="pi pi-arrow-down" />
        </Button>
      </div>
      <Lottie
        animationData={BgAnimated}
        className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-30 md:left-auto md:right-0 md:mr-14 md:h-[634px] md:w-[496px] md:-translate-x-0 lg:opacity-100 2xl:h-[766px] 2xl:w-[600px]"
      />
    </div>
  );
};

export default Banner;
