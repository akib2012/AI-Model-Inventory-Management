import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import Slider from "./Slider";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

const Herosection = () => {
  return (
    <div className="max-w-full md:max-w-4xl lg:max-w-10/12 mx-auto h-[420px] shadow-md border border-gray-200 rounded-lg overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Navigation]}
        className="h-full"
      >
        <SwiperSlide><Slider /></SwiperSlide>
        <SwiperSlide><Slide2 /></SwiperSlide>
        <SwiperSlide><Slide3 /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Herosection;
