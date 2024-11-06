"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

const items = ["Men", "Women", "Brand", "Map", "Contact"];

const CircleBG: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex cursor-pointer hover:bg-red-600 rounded-full bg-red-700 w-7 h-7 items-center justify-center">
      {children}
    </div>
  );
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
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
        <div className="flex items-center gap-2">
          <Image
            src={"/assets/logo.svg"}
            className="w-10 h-10"
            width={200}
            height={200}
            alt="logo"
          />
          <p className="text-lg font-bold text-white">Chaharias</p>
        </div>
        <IoMenu size={25} onClick={() => setIsOpen(true)} color="white" />
      </div>

      {isOpen && (
        <div
          className={cn(
            "bg-transparent left-0 z-20 duration-200 transition-all bg-gradient-to-r from-black to-red-700",
            "right-0 absolute h-svh py-4 justify-between shadow-md shadow-black w-full",
            isOpen ? "top-0" : "top-[1000]"
          )}
        >
          <div className="w-[90%] z-40 h-[80%] text-black items-center justify-between m-auto">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image
                  src={"/assets/logo.svg"}
                  className="w-10 h-10"
                  width={200}
                  height={200}
                  alt="logo"
                />
                <p className="text-lg font-bold text-white">Chaharias</p>
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
                  className="text-base text-white hover:text-black cursor-pointer"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <CircleBG>
                <FaInstagram size={14} color="white" />
              </CircleBG>
              <CircleBG>
                <FaFacebook size={14} color="white" />
              </CircleBG>
              <CircleBG>
                <FaYoutube size={14} color="white" />
              </CircleBG>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
