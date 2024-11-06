"use client";
import { useLayoutEffect, useState } from "react";

interface ScreenSize {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useLayoutEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width <= 768, // Mobile: 768px and below
        isTablet: width > 768 && width <= 1024, // Tablet: 769px - 1024px
        isDesktop: width > 1024, // Desktop: above 1024px
      });
    };

    window.addEventListener("resize", updateSize);
    updateSize(); // Set the initial screen size on mount

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return screenSize;
};

export default useScreenSize;
