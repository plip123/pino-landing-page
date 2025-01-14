import React from "react";
import { useNavbarItems } from "@/hooks/NavbarItems";

import SiteLogo from "../SiteLogo";
import { MobileMenu } from "./MobileMenu";
import Nav from "./Nav";

const Navbar = () => {
  const { activeMobileMenu, getRedirectUri } = useNavbarItems();

  return (
    <div className="fixed top-0 z-30 w-full bg-brand-primary shadow-primary md:h-20">
      <div className="mx-auto h-full max-w-lp-container">
        <div className="flex h-full items-center justify-between px-8 py-4 md:px-14 md:py-0">
          <SiteLogo onClick={() => void getRedirectUri("#main")} />
          <Nav />
        </div>

        {activeMobileMenu && <MobileMenu />}
      </div>
    </div>
  );
};

export default Navbar;
