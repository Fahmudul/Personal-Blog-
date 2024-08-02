import Image from "next/image";
import React from "react";
import image from "@/public/F1.jpg";
import { SlCalender } from "react-icons/sl";
const PopularCard = () => {
  return (
    <div className="flex mt-4 mb-3 gap-2 group">
      <div className="w-[28%] rounded-lg overflow-hidden">
        <Image
          alt="image"
          src={image}
          className="rounded-md h-[70px] w-full hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="flex-1">
        <h5 className="text-sm group-hover:text-secondary font-semibold">
          Chocolate, Coconut & Cherry Sponge
        </h5>
        <div className="flex items-center text-xs mt-1">
          <span className="flex items-center gap-1">
            <SlCalender /> June 12, 2022
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
