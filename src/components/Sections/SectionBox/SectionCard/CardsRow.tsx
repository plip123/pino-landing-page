import React from "react";
import { useResponsiveHandler } from "@/hooks/ResponsiveHandler";

import Card from "../../../Card";
import { SectionTheme, type ISections } from "../../Section.interface";

const CardsRow = ({
  items,
  className,
  classNameCard,
}: {
  items: Array<ISections>;
  className?: string;
  classNameCard?: string;
}) => {
  const { isMobile } = useResponsiveHandler();

  return (
    <div
      className={`flex flex-col gap-4 lg:flex-row 2xl:gap-8 ${className ?? ""}`}
    >
      {items.map((item, key) => {
        if (key > 0 && item.isCol && items[key - 1]?.isCol) return null;
        if (item.isCol) {
          return (
            <div
              key={key}
              className={`flex w-1/3 flex-col gap-4 2xl:gap-8 ${classNameCard}`}
            >
              <Card
                title={item.title}
                description={item.description}
                icons={item.icons}
                iconsPosition="end"
                theme={item.theme}
                hoverEffect={!isMobile}
                className="h-auto lg:h-full"
              />
              <Card
                title={items[key + 1]?.title ?? ""}
                description={items[key + 1]?.description ?? ""}
                icons={items[key + 1]?.icons ?? []}
                iconsPosition="end"
                theme={items[key + 1]?.theme ?? SectionTheme.dark}
                hoverEffect={!isMobile}
                className="h-auto lg:h-full"
              />
            </div>
          );
        } else {
          return (
            <Card
              key={key}
              title={item.title}
              description={item.description}
              image={item.image}
              positionImage="start"
              sizeImage={112}
              icons={item.icons}
              iconsPosition="end"
              theme={item.theme}
              size={"base"}
              hoverEffect={!isMobile}
              className={`h-auto w-full lg:h-full ${classNameCard}`}
              classNameHoverEffect="flex lg:w-1/3"
            />
          );
        }
      })}
    </div>
  );
};

export default CardsRow;
