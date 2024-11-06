"use client";
import useScreenSize from "@/lib/hooks/useScreenSize";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const items = ["Men", "Women", "Brand", "Map", "Contact"];
const socials = [FaInstagram, FaFacebook, FaYoutube];

const Navbar = () => {
  const { isDesktop, isTablet } = useScreenSize();

  if (isDesktop || isTablet)
    return <DesktopNavbar items={items} socials={socials} />;
  return <MobileNavbar items={items} socials={socials} />;
};

export default Navbar;
