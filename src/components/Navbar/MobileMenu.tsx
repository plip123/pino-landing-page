import React from "react";
import { useNavbarItems } from "@/hooks/NavbarItems";

import { Button } from "../Common/Button";
import { Icon } from "../Common/Icon";
import NavItems from "./NavItems";

export const MobileMenuBtn = () => {
  const { activeMobileMenu, handleMenu } = useNavbarItems();

  return (
    <Button variant="ghost" className="md:hidden" onClick={handleMenu}>
      <Icon icon={activeMobileMenu ? "x-icon" : "menu"} size={16} priority />
    </Button>
  );
};

export const MobileMenu = () => {
  const { textItems, socialItems } = useNavbarItems();

  return (
    <div className="flex w-screen flex-col gap-6 p-8 md:hidden">
      <NavItems items={textItems} />

      <div className="mx-auto flex min-w-max">
        <NavItems items={socialItems} />
      </div>
    </div>
  );
};
