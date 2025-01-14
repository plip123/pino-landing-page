import { useEffect, useMemo, useState, type RefObject } from "react";

export const useOnScreen = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () => {
      if (typeof window === "undefined") return;

      return new window.IntersectionObserver(([entry]) =>
        setIntersecting(entry?.isIntersecting ?? false),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref],
  );

  useEffect(() => {
    if (!ref.current || typeof observer === "undefined") return;

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [observer, ref]);

  return isIntersecting;
};
