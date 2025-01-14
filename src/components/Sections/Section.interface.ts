import { type TIcon } from "@/types/commons";

export enum SectionType {
  base = "base",
  cards = "cards",
  main = "main",
  team = "team",
  roadMap = "roadMap",
  networks = "networks",
}

export enum SectionTheme {
  light = "light",
  extraLight = "extraLight",
  dark = "dark",
}

export type TRedirectionText = {
  text: string;
  uri: string;
};

export interface ISections {
  title: string;
  type: SectionType;
  theme: SectionTheme;
  index?: number;
  id?: string;
  description?: string;
  redirectionText?: TRedirectionText;
  icons?: Array<TIcon>;
  uriIcons?: Array<string>;
  image?: string;
  subCards?: Array<ISections>;
  isCol?: boolean;
  onEnter?: (index: number) => void;
}

export type TSections = ISections;

export interface ISectionDots {
  items: Array<ISections>;
  currentSection: number;
  onClick?: (sectionIndex: number) => void;
}

export interface ISectionStorage {
  isActive: boolean;
  setIsActive: () => void;
}
