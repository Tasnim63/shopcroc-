import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeBanner.css";

import { Pagination, Navigation } from "swiper";

import offer from "../../assets/images/offer.png";
import banner_1 from "../../assets/images/banner_1.jpg";
import banner_2 from "../../assets/images/banner_2.jpg";
import banner_3 from "../../assets/images/banner_3.jpg";
export default function HomeBanner() {
 
  return (
   <>
   
   <div className=" flex items-center justify-center h-14 bg-gradient-to-r from-gradientOne to-gradientTwo">
        <img src={offer} alt="" />
        <p>
          <span className=" font-bold lg:text-lg md:text-sm  ml-2 font-sans ">Need It Today? </span>
          Free In Store & Pickup /  <span className="font-bold lg:text-lg md:text-sm mr-2">$9.99</span>
          Same Day Delivery
        </p>
      </div>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-full w-full"
      >
        <SwiperSlide className=" ">
          <img src={banner_1} alt="" />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <img src={banner_2} alt="" />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <img src={banner_3} alt="" />
        </SwiperSlide>
       
      </Swiper>
      </>
  )
}
