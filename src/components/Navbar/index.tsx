"use client";
import useScreenSize from "@/lib/hooks/useScreenSize";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const { isDesktop, isTablet } = useScreenSize();

  if (isDesktop || isTablet) return <DesktopNavbar />;
  return <MobileNavbar />;
};

export default Navbar;
