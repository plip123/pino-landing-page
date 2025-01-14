import React from "react";
import { Icon } from "@/components/Common/Icon";
import { useResponsiveHandler } from "@/hooks/ResponsiveHandler";

import { type ISections } from "../../Section.interface";
import CardsRow from "../SectionCard/CardsRow";

const SectionInfoFooter = (props: ISections) => {
  const { isMobile } = useResponsiveHandler();

  return (
    <div className="relative flex w-full flex-wrap gap-4">
      {props.icons?.map((icon, key) => (
        <Icon
          key={key}
          icon={icon.icon}
          size={isMobile ? 56 : 65}
          alt={icon.alt}
        />
      ))}

      {!!props.subCards && (
        <>
          {!isMobile && <div className="min-h-[180px]" />}
          {isMobile && (
            <CardsRow items={props.subCards} classNameCard="shadow-xl" />
          )}
        </>
      )}
    </div>
  );
};

export default SectionInfoFooter;
