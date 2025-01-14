import React from "react";
import { useAddressInfo } from "@/hooks/AddressInfo";
import { toast } from "react-toastify";

import { Icon } from "../Common/Icon";
import { type IAddressInfo } from "./AddressInfo.interface";

const AddressInfo = (props: IAddressInfo) => {
  const { handledAddTokenToMetamask } = useAddressInfo();

  return (
    <div className="flex w-full items-center gap-2 rounded-3xl bg-brand-primary !p-2 py-3">
      {props.children}

      <div className="flex gap-1">
        <Icon
          className="cursor-pointer"
          icon="copy"
          size={24}
          onClick={() => {
            void toast.success("Address copied to clipboard!");
            void navigator.clipboard.writeText(props.address);
          }}
        />
        <span className="hidden lg:flex">
          <Icon
            className="cursor-pointer"
            icon="metamask-2"
            size={24}
            onClick={() =>
              void handledAddTokenToMetamask(props.address, props.chainId)
            }
          />
        </span>
      </div>
    </div>
  );
};

export default AddressInfo;
