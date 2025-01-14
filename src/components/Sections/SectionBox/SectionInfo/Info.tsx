import React, { useRef } from "react";
import { useNavbarItems } from "@/hooks/NavbarItems";

import { type ISections } from "../../Section.interface";
import SectionInfoFooter from "./SectionInfoFooter";

const Info = (props: ISections) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { getRedirectUri } = useNavbarItems();

  return (
    <div className="relative z-20 flex h-full w-full flex-col justify-center gap-6 bg-[url('/images/lp-bg-line.svg')] bg-contain bg-center bg-no-repeat p-5 md:gap-14 md:pl-14 lg:ml-5 lg:w-1/2 lg:p-10 2xl:gap-16">
      <h3 className="text-3xl font-extrabold leading-normal md:text-7xl 2xl:pt-4 2xl:text-8xl">
        {props.title}
      </h3>

      <p
        ref={elementRef}
        className="whitespace-pre-wrap px-2 text-base font-semibold"
        dangerouslySetInnerHTML={{ __html: props.description ?? "" }}
      />

      {!!props.redirectionText && (
        <p
          className="cursor-pointer px-2 text-base font-black"
          onClick={() => void getRedirectUri(props.redirectionText?.uri ?? "")}
        >
          {props.redirectionText?.text}
        </p>
      )}

      <SectionInfoFooter {...props} />
    </div>
  );
};

export default Info;
