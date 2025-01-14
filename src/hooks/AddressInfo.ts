import { toast } from "react-toastify";

export const useAddressInfo = () => {
  const handledAddTokenToMetamask = async (
    address: string,
    chainId: string,
  ) => {
    try {
      if (!window.ethereum)
        throw new Error(
          "MetaMask is not installed. Please install it to add USDT token.",
        );

      if (window.ethereum.networkVersion !== chainId) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: chainId === "1" ? "0x1" : "0xa86a" }],
          });
        } catch (err) {
          const error = err as Error;
          console.error(error);

          if (error.code === 4902) {
            void toast.error(
              `Please add the ${
                chainId === "1" ? "Ethereum" : "Avalanche"
              } network to your metamask.`,
            );
            void window.open(
              `https://chainlist.org/chain/${chainId}`,
              "_blank",
            );
          } else void toast.error(error.message);

          return;
        }
      }

      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: address,
            symbol: "USDT",
            decimals: 6,
          },
        },
      });
    } catch (err) {
      const error = err as Error;
      console.error(error);
      void toast.error(error.message);
    }
  };

  return {
    handledAddTokenToMetamask,
  };
};
