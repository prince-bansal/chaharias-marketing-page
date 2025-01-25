import React from "react";
import Image from "next/image";
import Img1 from "../../../../public/assets/1.jpg";
import Img2 from "../../../../public/assets/2.jpg";
import Img3 from "../../../../public/assets/3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const images = [Img1, Img2, Img3];
const DesktopSlider = () => {
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
            className="h-[75vh] object-cover w-full"
            alt="slider"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DesktopSlider;
