import React from "react";
import { useResponsiveHandler } from "@/hooks/ResponsiveHandler";

import { type ISections } from "../../Section.interface";
import CardsRow from "../SectionCard/CardsRow";
import Info from "./Info";
import SectionInfoImage from "./SectionInfoImage";

const SectionInfo = (props: ISections) => {
  const { isMobile } = useResponsiveHandler();

  return (
    <div className="relative my-10 h-full overflow-hidden lg:my-0">
      <Info {...props} />
      {!!props.image && <SectionInfoImage animation={props.image} />}
      {!isMobile && !!props.subCards && (
        <CardsRow
          items={props.subCards}
          className="absolute bottom-16 z-20 mx-14 md-tall:bottom-24"
          classNameCard="shadow-xl text-sm gap-0.5 md-tall:gap-1 md-tall:text-base"
        />
      )}
    </div>
  );
};

export default SectionInfo;
