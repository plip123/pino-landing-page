import { type TIcon } from "../Common/Icon";
import { type SectionTheme } from "../Sections/Section.interface";

export type TVariantCard = "sm" | "base" | "lg" | "xl";
export type TImagePositionCard = "start" | "center" | "end";
export type TIconsPositionCard = "start" | "end";

export interface ICard {
  title: string;
  description?: string;
  image?: string;
  sizeImage?: number;
  positionImage?: TImagePositionCard;
  icons?: Array<TIcon>;
  uriIcons?: Array<string>;
  iconsPosition?: TIconsPositionCard;
  size?: TVariantCard;
  theme?: SectionTheme;
  hoverEffect?: boolean;
  className?: string;
  classNameImg?: string;
  classNameHoverEffect?: string;
}

export type TCard = ICard;
