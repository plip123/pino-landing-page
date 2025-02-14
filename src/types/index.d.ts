import type { MetaMaskInpageProvider } from "@metamask/providers";

export {};

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }

  interface Error {
    code?: number;
  }
}
