import React from "react";

import NetworkItems from "./NetworkItems";

const SupportedNetworks = (props: { className?: string }) => {
  return (
    <div
      className={`flex flex-col justify-center rounded-3xl px-2 py-4 text-center uppercase text-text-secondary ${props.className ?? ""}`}
    >
      <h5 className="font-bold lg:text-center">Supported Networks</h5>

      <div className="mx-auto lg:mx-0">
        <NetworkItems />
      </div>
    </div>
  );
};

export default SupportedNetworks;
