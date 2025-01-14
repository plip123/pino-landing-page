import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="light" className="h-full">
      <Head>
        <meta name="twitter:title" content="Pino landing wallet" />
        <meta
          name="description"
          content="This is a page for portfolio purposes"
        />
        <meta charSet="UTF-8"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta
          name="twitter:description"
          content="This is a page for portfolio purposes"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@cp_plip" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.cdnfonts.com/css/dm-sans" rel="stylesheet" />
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
