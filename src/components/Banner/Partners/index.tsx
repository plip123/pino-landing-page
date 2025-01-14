import React from "react";

import { Button } from "../../Common/Button";
import { Icon } from "../../Common/Icon";

const Partners = () => {
  const partners = [
    {
      name: "Ethereum",
      logo: "ethereum",
    },
    {
      name: "Polygon",
      logo: "polygon",
    },
    {
      name: "Avalanche",
      logo: "avalanche",
    },
    {
      name: "Binance",
      logo: "bsc",
    },
    {
      name: "Arbitrum",
      logo: "arbitrum",
    },
    {
      name: "Base",
      logo: "base",
    },
  ];

  return (
    <div className="flex min-w-max items-center gap-2 lg:gap-4">
      {partners.map((partner, index) => (
        <Button key={index} variant="ghost">
          <span className="flex w-fit min-w-max items-center gap-2 text-sm lg:gap-4">
            <Icon icon={partner.logo} size={50} />
            <span>{partner.name}</span>
          </span>
        </Button>
      ))}
    </div>
  );
};

export default Partners;
