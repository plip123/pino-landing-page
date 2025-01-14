import React from "react";
import { useNavbarItems } from "@/hooks/NavbarItems";

import { SectionTheme, type ISectionDots } from "./Section.interface";

const SectionDots = (props: ISectionDots) => {
  const { getRedirectUri } = useNavbarItems();
  const theme =
    props.items[props.currentSection]?.theme === SectionTheme.light
      ? "bg-cta-default opacity-50"
      : "bg-cta-primary opacity-50";
  const themeActive =
    props.items[props.currentSection]?.theme === SectionTheme.light
      ? "bg-cta-default"
      : "bg-cta-primary";

  return (
    <div className="absolute left-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
      {props.items.map((_, key) => (
        <span
          key={key}
          className={`h-4 w-4 cursor-pointer rounded-full ${key === props.currentSection ? themeActive : theme}`}
          onClick={() => {
            void getRedirectUri(`#lp-section-${key}`);
            props.onClick?.(key);
          }}
        />
      ))}
    </div>
  );
};

export default SectionDots;
