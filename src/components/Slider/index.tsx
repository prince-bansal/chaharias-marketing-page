import React from "react";
import Wrapper from "../Wrapper";

const Slider = () => {
  return (
    <Wrapper classNames="!py-0 !my-0">
      <div
        className={`text-black bg-fixed relative 
          h-[80vh] bg-no-repeat bg-cover bg-center 
          bg-[url("/assets/image.png")]`}
      >
        <div className="inset-0 absolute bg-gradient-to-t from-red-700/80 via-black/80 to-black/10 ">
          <div className="flex items-center justify-center inset-0 h-full w-[60%] m-auto">
            <div>
              <p className="text-center text-5xl lg:text-8xl text-white font-bold">
                Celebrate in Style!
              </p>
              <p className="text-center text-lg lg:text-3xl mt-3 text-white font-bold">
                Find your perfect festive outfit at Chaharias. Timeless fashion
                for every celebration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Slider;
