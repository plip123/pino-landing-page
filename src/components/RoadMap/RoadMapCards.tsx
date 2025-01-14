import React from "react";
import { useResponsiveHandler } from "@/hooks/ResponsiveHandler";
import ScrollContainer from "react-indiana-drag-scroll";

import Card from "../Card";
import { type TSections } from "../Sections/Section.interface";

const RoadMapCards = (props: { cards: Array<TSections> }) => {
  const { isMobile } = useResponsiveHandler();

  return (
    <ScrollContainer
      vertical={false}
      hideScrollbars={false}
      activationDistance={0}
      className="lp-scroll"
    >
      <div className="mx-auto w-fit cursor-grab overflow-x-hidden">
        <div className="flex gap-4 px-5 py-5 md:gap-8 lg:gap-10">
          {props.cards.map((card, key) => (
            <Card
              key={key}
              title={card.title}
              description={card.description}
              icons={card.icons}
              uriIcons={card.uriIcons}
              iconsPosition="end"
              size="base"
              theme={card.theme}
              hoverEffect={!isMobile}
              className="flex h-auto w-64 items-start gap-4 md:w-96 md:p-8 lg:h-full 2xl:!gap-8"
            />
          ))}
        </div>
      </div>
    </ScrollContainer>
  );
};

export default RoadMapCards;
