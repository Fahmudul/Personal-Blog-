import Image from "next/image";
import React from "react";
import { SlCalender } from "react-icons/sl";
import image from "@/public/F1.jpg";
const MiniCard = () => {
  return (
    <div className=" shadow-lg  bg-primary   flex flex-col  justify-between rounded-md ">
      <div className="p-3 h-auto ">
        <div className="h-[64%] w-full relative overflow-hidden border">
          <Image
            alt="image"
            src={image}
            className=" hover:scale-110 h-[100%] transition-all duration-500 outline-none border-none"
          />
          <p className="bg-secondary w-[70px] px-2 py-1 text-sm rounded-md ">
            LifeStyle
          </p>
        </div>
        <div className="w-full mt-4 text-white">
          <h2 className="text-sm">Burnt Better, Almond & Honey Cake</h2>
          <div className="flex items-center gap-3 mt-2 text-xs">
            <span>By Sora Blogging tips</span>
            <span className="flex items-center gap-1">
              <SlCalender /> June 12, 2022
            </span>
          </div>
        </div>
      </div>
      <div className="h-4 bg-[#313131]"></div>
    </div>
  );
};

export default MiniCard;
