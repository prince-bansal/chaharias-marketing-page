import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const items = ["Men", "Women", "Brand", "Map", "Contact"];

const CircleBG: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex cursor-pointer hover:bg-red-600 rounded-full bg-red-700 w-10 h-10 items-center justify-center">
      {children}
    </div>
  );
};

const DesktopNavbar = () => {
  return (
    <div className="bg-gradient-to-r from-black to-red-700 py-4 flex justify-between shadow-md shadow-black w-full">
      <div className="w-[80%] flex text-black items-center justify-between m-auto">
        <div className="flex items-center gap-2">
          <Image
            src={"/assets/logo.svg"}
            className="w-16 h-16"
            width={200}
            height={200}
            alt="logo"
          />
          <p className="font-semibold text-2xl text-white">Chaharias</p>
        </div>
        <ul className="flex gap-10">
          {items.map((item) => (
            <li className="text-lg text-white cursor-pointer" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <CircleBG>
            <FaInstagram size={20} color="white" />
          </CircleBG>
          <CircleBG>
            <FaFacebook size={20} color="white" />
          </CircleBG>
          <CircleBG>
            <FaYoutube size={20} color="white" />
          </CircleBG>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
