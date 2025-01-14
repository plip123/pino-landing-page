import React from "react";

const PrintAddress = (props: { address: string }) => {
  return (
    <>
      <div className="hidden font-raleway-regular font-semibold sm:block">
        {props.address}
      </div>
      <div className="block font-raleway-regular text-sm font-semibold sm:hidden sm:text-base">
        {`${props.address.slice(0, 7)}...${props.address.slice(-5)}`}
      </div>
    </>
  );
};

export default PrintAddress;
