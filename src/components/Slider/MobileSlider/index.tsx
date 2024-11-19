import React from "react";
import Banner1 from "../../../../public/assets/mobile/banner1.jpg";
import Banner2 from "../../../../public/assets/mobile/banner2.jpg";
import Banner3 from "../../../../public/assets/mobile/banner3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const images = [Banner1, Banner2, Banner3];

const MobileSlider = () => {
  return (
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
            className="h-[70vh] object-cover w-full"
            alt="slider"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileSlider;
