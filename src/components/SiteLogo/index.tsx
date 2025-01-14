import React from "react";
import { useResponsiveHandler } from "@/hooks/ResponsiveHandler";

import { Icon } from "../Common/Icon";

const SiteLogo = (props: { onClick?: () => void }) => {
  const { isLargeDesktop } = useResponsiveHandler();
  return (
    <Icon
      icon="cpservice"
      size={isLargeDesktop ? 70 : 50}
      className="cursor-pointer"
      priority
      alt="Pino"
      onClick={props.onClick}
    />
  );
};

export default SiteLogo;
