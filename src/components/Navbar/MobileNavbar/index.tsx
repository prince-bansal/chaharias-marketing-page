"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import CircleBG from "../CircleBg";
import Link from "next/link";

type MobileNavbarProps = {
  items: string[];
  socials: IconType[];
};

const MobileNavbar: FC<MobileNavbarProps> = ({ items, socials }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [style, setStyle] = useState({
    left: "-100%",
  });

  useEffect(() => {
    if (isOpen) {
      setStyle({
        left: "0",
      });
    } else {
      setStyle({
        left: "-100%",
      });
    }

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <div className="bg-gradient-to-r from-black to-red-700 py-4 relative w-full">
      <div className="flex justify-between w-[90%] m-auto items-center">
        <Link href={"/"} className="flex items-center justify-start gap-2">
          <Image
            src={"/assets/new-logo.png"}
            className="w-28 scale-150 ml-4 h-auto"
            width={200}
            height={200}
            alt="logo"
          />
          {/* <p className="text-lg font-bold text-white">Chaharias</p> */}
        </Link>
        <IoMenu size={25} onClick={() => setIsOpen(true)} color="white" />
      </div>

      {isOpen && (
        <div
          className={cn(
            "bg-transparent left-0 z-20 duration-200 transition-all bg-gradient-to-r top-0 from-black to-red-700",
            "right-0 absolute h-svh py-4 justify-between shadow-md shadow-black w-full"
          )}
          style={style}
        >
          <div className="w-[90%] z-40 h-[80%] text-black items-center justify-between m-auto">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image
                  src={"/assets/new-logo.png"}
                  className="w-28 scale-150 ml-4 h-auto"
                  width={200}
                  height={200}
                  alt="logo"
                />
              </div>
              <IoCloseSharp
                size={25}
                color="white"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <ul className="gap-10 my-10">
              {items.map((item) => (
                <li
                  className="text-base my-4 text-white select-none cursor-pointer"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              {socials.map((Icon, index) => (
                <CircleBG key={index}>
                  {<Icon size={20} color="#b91c1c" />}
                </CircleBG>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
