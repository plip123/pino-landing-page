import React from "react";
import SupportedNetworks from "@/components/SupportedNetworks";
import TeamSlider from "@/components/TeamSlider";

import RoadMapCards from "../../RoadMap/RoadMapCards";
import {
  SectionTheme,
  SectionType,
  type ISections,
} from "../Section.interface";
import SectionBase from "./SectionBase";
import SectionCard from "./SectionCard";
import SectionInfo from "./SectionInfo";
import SectionMain from "./SectionMain";

const SectionBox = (props: ISections) => {
  const { title, type, theme, subCards } = props;

  const themeClass =
    theme === SectionTheme.light ? "bg-brand-primary" : "bg-brand-black";

  return (
    <div
      id={props.id ?? ""}
      className={`relative h-full overflow-hidden pt-20 text-text-primary lg:pt-0 ${themeClass}`}
      onMouseEnter={() => props.onEnter?.(props.index ?? 0)}
    >
      {type === SectionType.main ? (
        <SectionMain title={title} />
      ) : type === SectionType.base ? (
        <SectionInfo {...props} />
      ) : type === SectionType.cards ? (
        <SectionCard cards={subCards ?? []} />
      ) : type === SectionType.team ? (
        <SectionBase title={title}>
          <TeamSlider team={subCards ?? []} />
        </SectionBase>
      ) : type === SectionType.roadMap ? (
        <SectionBase title={title} theme={theme}>
          <RoadMapCards cards={subCards ?? []} />
        </SectionBase>
      ) : type === SectionType.networks ? (
        <SupportedNetworks className="mb-20 gap-16 p-8 text-3xl capitalize md:text-7xl" />
      ) : null}
    </div>
  );
};

export default SectionBox;
