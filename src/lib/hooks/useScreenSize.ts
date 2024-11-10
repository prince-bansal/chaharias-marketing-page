"use client";
import { useLayoutEffect, useState } from "react";

interface ScreenSize {
  isMobile: boolean;
  isDesktop: boolean;
}

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isMobile: false,
    isDesktop: false,
  });

  useLayoutEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width <= 768,
        isDesktop: width > 768,
      });
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return screenSize;
};

export default useScreenSize;
