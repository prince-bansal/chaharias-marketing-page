"use client";
import React from "react";
import InnerWrapper from "../InnerWrapper";
import Heading from "../Heading";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import useScreenSize from "@/lib/hooks/useScreenSize";

const brandLogos = [
  "/assets/brands/cadini.svg",
  "/assets/brands/donear.svg",
  "/assets/brands/hampstead.svg",
  "/assets/brands/jockey.svg",
  "/assets/brands/killer logo.svg",
  "/assets/brands/laxmipati.svg",
  "/assets/brands/linen club.svg",
  "/assets/brands/ocm.svg",
  "/assets/brands/raymond.svg",
  "/assets/brands/siyaram_s.svg",
  "/assets/brands/sparky.svg",
  "/assets/brands/s4u.svg",
  "/assets/brands/vishal-prints.svg",
  "/assets/brands/subash-sarees.svg",
];

const Brands = () => {
  const { isDesktop, isMobile } = useScreenSize();

  const noOfSlides = () => {
    if (isMobile) {
      return 1;
    }
    if (isDesktop) {
      return 4;
    }
    return 4;
  };

  return (
    <InnerWrapper>
      <Heading>Brands</Heading>
      <div className="w-full">
        <Swiper
          speed={3000}
          loop={true}
          autoplay={{
            delay: 0,
            waitForTransition: true,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={noOfSlides()}
          slidesPerGroup={1}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {brandLogos.map((logo) => (
            <SwiperSlide key={logo}>
              <Image
                className="m-5 mx-8"
                src={logo}
                width={200}
                height={200}
                alt={"brand logo"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </InnerWrapper>
  );
};

export default Brands;
