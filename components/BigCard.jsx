import React from "react";
import image from "@/public/F1.jpg";
import { SlCalender } from "react-icons/sl";
import { IoArrowRedoOutline } from "react-icons/io5";
import Image from "next/image";
const BigCard = () => {
  return (
    // Big Card
    <div className=" shadow-lg min-h-[640px] max-h-[650px] bg-primary   flex flex-col  justify-between rounded-md ">
      <div className="p-3 h-auto ">
        <div className="h-[64%] w-full relative overflow-hidden border">
          <Image
            alt="image"
            src={image}
            className=" hover:scale-110 h-[100%] transition-all duration-500 outline-none border-none"
          />
        </div>
        <div className=" w-full mt-4 text-white">
          <p className="bg-secondary w-[70px] px-2 py-1 text-sm rounded-md ">
            LifeStyle
          </p>
          <h3 className="text-2xl font-semibold mt-3">
            Chocolate, Coconut & Cherry Sponge
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            voluptatibus. Ex aliquid repudiandae, tenetur quisquam
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span>By Sora Blogging tips</span>
            <span className="flex items-center gap-1">
              <SlCalender /> June 12, 2022
            </span>
          </div>
          <div>
            <button className="flex items-center gap-2 mt-3">
              <IoArrowRedoOutline />
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="h-4 bg-[#313131]"></div>
    </div>
  );
};

export default BigCard;
