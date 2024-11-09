"use client";

import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import Img1 from "../../../public/assets/hero-1.jpg";
import Img2 from "../../../public/assets/hero-2.jpg";
import Img3 from "../../../public/assets/hero-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const images = [Img1, Img2, Img3];

const Slider = () => {
  return (
    <Wrapper classNames="!py-0 !my-0">
      <div>
        <Swiper
          speed={1500}
          effect="fade"
          loop={true}
          cssMode={true}
          autoplay={{
            delay: 2500,
            waitForTransition: true,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          slidesPerGroup={1}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Image
                width={1500}
                height={1500}
                src={image}
                placeholder="blur"
                className="h-[85vh] object-cover w-full"
                alt="slider"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default Slider;

{
  /* <div>
              <p className="text-center text-5xl lg:text-8xl text-black font-bold">
                Celebrate in Style!
              </p>
              <p className="text-center text-lg lg:text-3xl mt-3 text-black font-bold">
                Find your perfect festive outfit at Chaharias. Timeless fashion
                for every celebration.
              </p>
            </div> */
}
