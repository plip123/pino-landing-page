import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/globals.scss";
import "primeicons/primeicons.css";

import { type AppType } from "next/app";
import Layout from "@/components/Layout";
import { ToastContainer } from "react-toastify";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
};

export default MyApp;
