export type NavbarItemType = "basic" | "icon" | "action" | "menu";

export interface INavbarItem {
  label: string;
  uri: string;
  type: NavbarItemType;
  icon?: string;
}

export interface INav {
  items: Array<INavbarItem>;
}

export interface IMobileMenu {
  isActive: boolean;
  setIsActive: () => void;
}
