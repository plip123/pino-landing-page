import React, { type ReactNode } from "react";

export type TTypography = {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";
  children: ReactNode;
};

export const Typography = ({ size = "h6", children }: TTypography) => {
  const sizeClasses = {
    h1: `text-[56px] leading-[64px] font-extrabold`,
    h2: `text-[48px] leading-[56px] font-extrabold`,
    h3: `text-[32px] leading-[40px] font-extrabold`,
    h4: `text-[24px] leading-[32px] font-extrabold`,
    h5: `text-[24px] leading-[32px] font-medium`,
    h6: `text-[16px] leading-[24px] font-bold`,
    h7: `text-[12px] leading-[15px] font-normal`,
  };

  const typography = {
    h1: <h1 className={sizeClasses[size]}>{children}</h1>,
    h2: <h2 className={sizeClasses[size]}>{children}</h2>,
    h3: <h3 className={sizeClasses[size]}>{children}</h3>,
    h4: <h4 className={sizeClasses[size]}>{children}</h4>,
    h5: <h5 className={sizeClasses[size]}>{children}</h5>,
    h6: <h6 className={sizeClasses[size]}>{children}</h6>,
    h7: <h6 className={sizeClasses[size]}>{children}</h6>,
  };

  return <>{typography[size]}</>;
};
