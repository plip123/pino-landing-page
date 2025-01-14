import React from "react";
import Banner from "@/components/Banner";
import DesktopBody from "@/components/Layout/DesktopBody";
import MobileBody from "@/components/Layout/MobileBody";
import Navbar from "@/components/Navbar";
import { useResponsiveHandler } from "@/hooks/ResponsiveHandler";

const Home = () => {
  const { isMobile } = useResponsiveHandler();
  return (
    <div>
      <Navbar />

      <div className="mx-auto max-w-lp-container">
        <div className="h-screen w-full pt-20 lg:snap-start">
          <Banner />
        </div>

        {isMobile ? <MobileBody /> : <DesktopBody />}
      </div>
    </div>
  );
};

export default Home;
