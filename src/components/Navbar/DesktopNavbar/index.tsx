import Image from "next/image";
import { FC } from "react";
import CircleBG from "../CircleBg";
import { IconType } from "react-icons";
import Link from "next/link";

type DesktopNavbarProps = {
  items: string[];
  socials: IconType[];
};

const DesktopNavbar: FC<DesktopNavbarProps> = ({ items, socials }) => {
  return (
    <div className="bg-gradient-to-r from-black to-red-700 py-4 flex justify-between shadow-md shadow-black w-full">
      <div className="w-[80%] flex text-black items-center justify-between m-auto">
        <Link href={"/"} className="flex items-center justify-start gap-2">
          <Image
            src={"/assets/new-logo.png"}
            className="scale-150 w-40 mr-auto"
            width={400}
            height={400}
            alt="logo"
          />
          {/* <p className="font-semibold text-2xl text-white">Chaharias</p> */}
        </Link>
        <ul className="flex gap-10">
          {items.map((item) => (
            <li className="text-lg text-white cursor-pointer" key={item}>
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
  );
};

export default DesktopNavbar;
