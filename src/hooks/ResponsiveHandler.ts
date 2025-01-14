import { useEffect, useState } from "react";
import gsap from "gsap";

export const useResponsiveHandler = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLargeDesktop, setIsLargeDesktop] = useState(false);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 1023px)",
        isDesktop: "(max-width: 1537px)",
        isLargeDesktop: "(min-width: 1538px)",
      },
      (context) => {
        if (typeof context.conditions === "undefined") return;

        const { isMobile, isDesktop } = context.conditions;

        if (isMobile) {
          setIsDesktop(false);
          setIsLargeDesktop(false);
          setIsMobile(true);
        } else if (isDesktop) {
          setIsMobile(false);
          setIsLargeDesktop(false);
          setIsDesktop(true);
        } else {
          setIsMobile(false);
          setIsDesktop(false);
          setIsLargeDesktop(true);
        }
      },
    );

    return () => mm.revert();
  }, []);

  return {
    isMobile,
    isDesktop,
    isLargeDesktop,
  };
};
