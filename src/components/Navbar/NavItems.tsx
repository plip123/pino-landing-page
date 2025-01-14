import React from "react";
import { useNavbarItems } from "@/hooks/NavbarItems";

import { Button } from "../Common/Button";
import { type INavbarItem } from "./Navbar.interface";

const NavItems = (props: { items: Array<INavbarItem> }) => {
  const { getBtnContent, getRedirectUri } = useNavbarItems();

  return (
    <>
      {props.items.map((item, index) => (
        <Button
          key={index}
          variant={["basic", "icon"].includes(item.type) ? "ghost" : "primary"}
          className={item.type === "action" ? "w-36" : ""}
          onClick={() => getRedirectUri(item.uri)}
        >
          {getBtnContent(item)}
        </Button>
      ))}
    </>
  );
};

export default NavItems;
