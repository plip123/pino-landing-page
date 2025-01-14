import React from "react";
import { useNavbarItems } from "@/hooks/NavbarItems";

import { MobileMenuBtn } from "./MobileMenu";
import NavItems from "./NavItems";

const Nav = () => {
  const { textItems, socialItems, actionItems } = useNavbarItems();

  return (
    <>
      <div className="hidden gap-4 md:flex">
        <NavItems items={textItems} />

        <span className="flex items-center">
          <NavItems items={socialItems} />
        </span>

        <NavItems items={actionItems} />
      </div>

      <div className="flex gap-4 md:hidden">
        <NavItems items={actionItems} />
        <MobileMenuBtn />
      </div>
    </>
  );
};

export default Nav;
