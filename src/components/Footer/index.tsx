import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuickLinks = ["Men", "Women", "Home Furnishing"];
const Footer = () => {
  return (
    <div className="bg-stone-900 text-gray-300">
      <div className="w-[80%] grid gap-10 lg:justify-items-center grid-cols-1 lg:grid-cols-3  justify-between m-auto py-20">
        <div className="">
          <Image
            src={"/assets/new-logo.png"}
            className="w-60"
            width={200}
            height={200}
            alt="logo"
          />
          <p className="mt-3">
            <span className="text-white font-bold">
              Chaharias Wholesale Bazaar
            </span>{" "}
            – Your trusted destination for quality fashion since 1947, serving
            Padrauna with style and tradition.
          </p>
        </div>
        <div className="">
          <p className="text-3xl mb-3 text-white">Quick Links</p>
          {QuickLinks.map((link) => (
            <p className="block" key={link}>
              {link}
            </p>
          ))}
          <Link className="block" href="privacy-policy">
            Privacy Policy
          </Link>
          <Link className="block" href="terms-conditions">
            Terms & Conditions
          </Link>
        </div>
        <div>
          <p className="text-3xl mb-3 text-white">Support</p>
          <p>
            Chaharias Wholesale Bazaar, Chaharia Tower, Dharmshala Road,
            Padrauna - 274304 District - Kushinagar, UP
          </p>
          <p className="mt-3">
            Email:{" "}
            <span className="text-white font-semibold">
              chahariaswb@gmail.com
            </span>
          </p>
          <p>
            Phone:{" "}
            <span className="text-white font-semibold">+91-911 811 0363</span>
          </p>
        </div>
      </div>
      <div className="bg-stone-800 p-3">
        <p className="text-center">
          © Copyright 2024 by Chaharias. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
