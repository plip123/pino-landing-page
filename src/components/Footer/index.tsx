import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const handleRedirect = (route: string) => {
    void router.push(`${route}#main`);
  };

  return (
    <footer className="mx-auto flex w-full items-center justify-center rounded-t-[40px] bg-brand-dark p-5 md:w-[600px] md:p-10">
      <div className="flex flex-col gap-4 text-sm sm:text-base">
        <div className="mt-4 flex items-center justify-center gap-8 text-text-primary">
          <span
            className="cursor-pointer"
            onClick={() => handleRedirect("/terms-conditions")}
          >
            Terms & Conditions
          </span>
          <span
            className="cursor-pointer"
            onClick={() => handleRedirect("/privacy-notice")}
          >
            Privacy Notice
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
