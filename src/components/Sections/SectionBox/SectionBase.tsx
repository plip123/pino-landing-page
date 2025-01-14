import React, { type ReactNode } from "react";

import { SectionTheme } from "../Section.interface";

const SectionBase = (props: {
  title: string;
  children: ReactNode;
  bgImage?: string;
  theme?: SectionTheme;
}) => {
  const theme =
    props.theme === SectionTheme.light
      ? "text-text-primary"
      : "text-text-secondary";

  const bgClass = "";

  return (
    <div
      className={`flex h-full flex-col gap-8 p-10 md:mt-8 md:gap-10 md:p-12 lg:p-20 2xl:mt-0 ${bgClass}`}
    >
      <h3
        className={`text-5xl font-extrabold leading-normal md:text-7xl ${theme}`}
      >
        {props.title}
      </h3>

      {props.children}
    </div>
  );
};

export default SectionBase;
