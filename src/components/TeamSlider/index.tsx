import React from "react";
import { useResponsiveHandler } from "@/hooks/ResponsiveHandler";
import ScrollContainer from "react-indiana-drag-scroll";

import Card from "../Card";
import { type TSections } from "../Sections/Section.interface";

const TeamSlider = ({ team }: { team: Array<TSections> }) => {
  const { isMobile } = useResponsiveHandler();

  return (
    <ScrollContainer
      className="lp-scroll my-auto pb-2 md:px-8"
      vertical={false}
      hideScrollbars={false}
      activationDistance={0}
    >
      <div className="w-fit cursor-grab overflow-x-hidden">
        <div className="flex gap-8 p-5 lg:gap-16">
          {team.map((person, key) => (
            <Card
              key={key}
              title={person.title}
              description={person.description}
              icons={person.icons}
              uriIcons={person.uriIcons}
              iconsPosition="end"
              image={person.image}
              sizeImage={160}
              positionImage="center"
              size="base"
              theme={person.theme}
              hoverEffect={!isMobile}
              className="flex h-auto w-52 items-center text-center md:w-64 md:px-10 lg:h-full lg:items-start lg:text-left"
              classNameImg="2xl:w-48 2xl:h-auto rounded-2xl m-2"
            />
          ))}
        </div>
      </div>
    </ScrollContainer>
  );
};

export default TeamSlider;
