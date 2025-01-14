import React from "react";
import { useNavbarItems } from "@/hooks/NavbarItems";
import { useResponsiveHandler } from "@/hooks/ResponsiveHandler";

import { Button } from "../Common/Button";
import { Icon } from "../Common/Icon";

const NetworkItems = () => {
  const { getRedirectUri } = useNavbarItems();
  const { isMobile } = useResponsiveHandler();

  const networks = [
    {
      name: "Avalanche",
      logo: "avalanche",
      uri: "https://snowtrace.io/",
    },
    {
      name: "Polygon",
      logo: "polygon",
      uri: "https://polygonscan.com/",
    },
  ];

  return (
    <div className="flex gap-2">
      {networks.map((network, index) => (
        <Button
          key={index}
          variant="ghost"
          className="text-base !font-bold uppercase lg:text-xs"
          onClick={() => getRedirectUri(network.uri)}
        >
          <span className="flex flex-col items-center gap-2">
            <Icon icon={network.logo} size={isMobile ? 40 : 24} />
            {network.name}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default NetworkItems;
