"use client";

import { reviews } from "@/lib/data";
import Image from "next/image";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Heading from "../Heading";
import Wrapper from "../Wrapper";

const Testimonials = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const handleMove = (direction: "left" | "right") => {
    if (direction === "left") {
      swiperRef.current?.swiper.slidePrev();
    } else {
      swiperRef.current?.swiper.slideNext();
    }
  };

  return (
    <Wrapper>
      <Heading isCenter>Customer Testimonials</Heading>
      <div className="w-full bg-gray-200 py-10">
        <div className="w-[90%] lg:w-[50%] h-[60svh] lg:h-[50svh] items-center gap-4 lg:gap-20 flex m-auto">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => handleMove("left")}
            size={100}
          />
          <Swiper
            ref={swiperRef}
            autoplay={{
              delay: 3500,
              waitForTransition: true,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="text-center lg:w-[80%] m-auto" key={review.id}>
                  <Image
                    src={review.imageUrl}
                    height={200}
                    width={200}
                    className="rounded-full w-32 h-32 m-auto mb-3"
                    alt={review.person_name}
                  />
                  <p className="text-sm lg:text-xl mb-4">{review.review}</p>
                  <p className="text-sm lg:text-base"> {review.person_name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <FaAngleRight
            className="cursor-pointer"
            onClick={() => handleMove("right")}
            size={100}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;

// <div className="w-[90%] lg:w-4/6">
//   <div className="text-center" key={review.id}>
//     <p className="text-base lg:text-xl mb-4">{review.review}</p>
//     {/* <p className="text-sm lg:text-lg">{review.title}</p>/ */}
//     <p className="text-sm lg:text-base"> {review.person_name}</p>
//   </div>
// </div>
