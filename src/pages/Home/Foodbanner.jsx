import React from "react";
import foodimage from "../../assets/images/food_image.jpg";
export default function Foodbanner() {
  return (
    <>
      <div className=" max-w-[1640px] mx-auto p-4">
        <div className=" max-h-[500px] relative">
          <div className=" absolute w-full h-full  text-white max-h-[500px] bg-black/75 flex flex-col justify-center ">
            <h1 className=" px-4 sm:text-4xl md:text-6xl lg:text-8xl font-bold">
              The <span className=" text-button">Best</span>
            </h1>
            <h1 className=" px-4 sm:text-4xl md:text-6xl lg:text-8xl font-bold">
               <span className=" text-button">Food</span>deliverd
            </h1>
          </div>
          <img className=" w-full max-h-[500px] object-cover" src={foodimage} alt="" />
        </div>
      </div>
    </>
  );
}
