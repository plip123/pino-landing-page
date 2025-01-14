import React, { ReactNode } from "react";
import Head from "next/head";

const Layout = (props: { children: ReactNode | ReactNode[] }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pino landing Wallet</title>
      </Head>
      <main
        id="lp-main"
        className="max-w-screen lp-scroll h-screen min-h-screen overflow-x-hidden overflow-y-scroll scroll-smooth bg-brand-primary lg:snap-y lg:snap-mandatory"
      >
        <div>{props.children}</div>
      </main>
    </>
  );
};

export default Layout;
