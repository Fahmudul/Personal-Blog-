import React from "react";
import { Dancing_Script } from "next/font/google";
import image from "@/public/F2.jpg";
import image_2 from "@/public/F3.jpg";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
const dancingScript = Dancing_Script({ subsets: ["latin"] });
import { TfiWrite } from "react-icons/tfi";
import { FaTasks } from "react-icons/fa";

const Header = () => {
  return (
    <div className="text-white grid grid-cols-1 lg:grid-cols-4 gap-5 mt-14">
      <div className="shadow-xl rounded-xl h-[450px] bg-primary text-center flex flex-col items-center justify-center ">
        <h3 className="text-xl font-semibold">
          Welcome to <br /> ByteBoulevard!
        </h3>
        <h3
          className={`text-2xl font-semibold text-secondary -rotate-6 mb-6 ${dancingScript.className}`}
        >
          Delighted to have you here!
        </h3>
        <p className="w-[90%]  mb-3">
          As a passionate coder, I share insights, tutorials, and tips on
          programming and technology. Join me as we explore the world of coding
          together.
        </p>
        <p className="w-[90%] ">
          I&apos;m the voice behind ByteBoulevard, thrilled to have you in my corner
          of the internet!
        </p>
        <button className="mt-2 px-2 py-1 bg-secondary rounded-md text-sm">
          Learn More
        </button>
      </div>
      <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="shadow-xl rounded-xl h-[450px] bg-primary p-3">
          <div className="w-full h-full  overflow-hidden relative group">
            <Image
              src={image}
              alt="image"
              className="h-full bg-black object-contain scale-[1.3] group-hover:scale-[1.4] transition-all duration-500"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 px-3 py-4 flex flex-col justify-end">
              <p className="bg-secondary w-[70px] px-2 py-1 text-sm rounded-md ">
                LifeStyle
              </p>
              <h3 className="text-2xl font-semibold mt-1">
                Chocolate, Coconut & Cherry Sponge
              </h3>
              <span className="flex items-center gap-1 text-sm">
                <SlCalender /> June 12, 2022
              </span>
            </div>
          </div>
        </div>
        <div className="shadow-xl rounded-xl h-[450px] bg-primary p-3">
          <div className="w-full h-full  overflow-hidden relative group ">
            <Image
              src={image_2}
              alt="image"
              className="h-full bg-black object-contain scale-[1.3] group-hover:scale-[1.4] transition-all duration-500"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 px-3 py-4 flex flex-col justify-end">
              <p className="bg-secondary w-[70px] px-2 py-1 text-sm rounded-md ">
                LifeStyle
              </p>
              <h3 className="text-2xl font-semibold mt-1">
                Chocolate, Coconut & Cherry Sponge
              </h3>
              <span className="flex items-center gap-1 text-sm">
                <SlCalender /> June 12, 2022
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-xl rounded-xl h-[450px] flex flex-col gap-5">
        <div className="h-1/2 shadow-xl rounded-xl bg-primary p-6">
          <div className="flex  justify-between">
            <div>
              <h3 className="text-xl font-semibold">Create Account</h3>
              <h3
                className={`text-2xl font-semibold text-secondary relative -top-2 -rotate-6 mb-6 ${dancingScript.className}`}
              >
                Join our community
              </h3>
            </div>
            <FaTasks className="text-6xl" />
          </div>
          <p className="text-sm">
            Sign up for the latest coding tips and tutorials. Join our tech
            community for exclusive updates and skill-boosting content!
          </p>
        </div>
        <div className="h-1/2 shadow-xl rounded-xl bg-primary p-6">
          <div className="flex  justify-between">
            <div>
              <h3 className="text-xl font-semibold">Share Blog</h3>
              <h3
                className={`text-2xl font-semibold text-secondary relative -top-2 -rotate-6 mb-6 ${dancingScript.className}`}
              >
                Share your thoughts!
              </h3>
            </div>
            <TfiWrite className="text-6xl" />
          </div>
          <p className="text-sm ">
            Share this blog with your network to spread the knowledge! Your
            friends and colleagues might find these insights and tips valuable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
