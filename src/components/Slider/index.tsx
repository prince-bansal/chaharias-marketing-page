"use client";

import React from "react";
import Wrapper from "../Wrapper";
import MobileSlider from "./MobileSlider";
import DesktopSlider from "./DesktopSlider";

const Slider = () => {
  return (
    <Wrapper classNames="!py-0 !my-0">
      <div className="md:hidden">
        <MobileSlider />
      </div>
      <div className="hidden md:block">
        <DesktopSlider />
      </div>
    </Wrapper>
  );
};

export default Slider;
