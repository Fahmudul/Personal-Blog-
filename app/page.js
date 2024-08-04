"use client";
import BigCard from "@/components/BigCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFacebook, FaPinterest, FaInstagram, FaReddit } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import PopularCard from "@/components/PopularCard";
import Categories from "@/components/Categories";
import MiniCard from "@/components/MiniCard";
export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const blog = async () => {
    const resp = await fetch("/api/getAllBlogs");
    const data = await resp.json();
    setBlogs(data);
  };

  useEffect(() => {
    try {
      blog();
    } catch (error) {
      console.log(error);
      return [];
    }
  }, []);
  // console.log(blogs);

  return (
    <main className="container mx-auto pb-10">
      <Navbar />
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-14">
        {/* Blog Card section*/}
        <div className=" col-span-3 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <BigCard />
            <BigCard />
            <BigCard />
            <BigCard />
          </div>
          <div className="mt-8 flex justify-center">
            <button className="bg-secondary text-white px-2 py-1 rounded-md">
              Load More
            </button>
          </div>
        </div>
        <div className="">
          {/* Social Media section*/}
          <div className="bg-primary pt-3 rounded-md text-white">
            <h3 className="text-2xl font-semibold mt-3 border-b border-secondary inline text-secondary pb-1   ml-3">
              Social Media
            </h3>
            <div className="grid grid-cols-4 gap-3  py-4 [&>span]:h-10 text-3xl [&>span]:cursor-pointer  transition-all duration-500 [&>span]:flex [&>span]:items-center [&>span]:justify-center  rounded-md">
              <span className="cursor-pointer active:scale-95">
                <FaFacebook />
              </span>
              <span className="cursor-pointer active:scale-95">
                <FaXTwitter />
              </span>
              <span className="cursor-pointer active:scale-95">
                <CiLinkedin />
              </span>
              <span className="cursor-pointer active:scale-95">
                <FaPinterest />
              </span>
              <span className="cursor-pointer active:scale-95">
                <FaInstagram />
              </span>
              <span className="cursor-pointer active:scale-95">
                <FaWhatsapp />
              </span>
              <span className="cursor-pointer active:scale-95">
                <AiOutlineYoutube />
              </span>
              <span className="cursor-pointer active:scale-95">
                <FaReddit />
              </span>
            </div>
            <div className="h-3 bg-[#313131]"></div>
          </div>
          {/* Subscribe section*/}
          <div className="bg-primary pt-3 mt-5 rounded-md ">
            <div className="px-3">
              <h3 className="text-2xl font-semibold mt-3 border-b pb-1  border-secondary  inline text-secondary  ">
                Subscribe Us
              </h3>
              <iframe
                width={"100%"}
                height={"100%"}
                src="https://www.youtube.com/embed/5CSXwb1QdSc?si=7xdCF2BjBrQyXe8i"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className=" mt-4 mb-3"
              ></iframe>
            </div>
            <div className="h-3 bg-[#313131]"></div>
          </div>
          {/* Most Popular section*/}
          <div className="bg-primary pt-3 mt-5 rounded-md">
            <div className="px-3 text-white">
              <h3 className="text-2xl font-semibold mt-3 border-b pb-1 border-secondary   inline text-secondary  ">
                Most Popular
              </h3>
              <PopularCard />
              <PopularCard />
              <PopularCard />
              <PopularCard />
            </div>
            <div className="h-3 bg-[#313131]"></div>
          </div>
          {/* Tags section*/}
          <div className="bg-primary pt-3 mt-5 rounded-md">
            <div className="px-3 text-white mb-4">
              <h3 className="text-2xl font-semibold mt-3 border-b pb-1 border-secondary   inline text-secondary  ">
                Tags
              </h3>
              <div className="flex flex-wrap [&>span]:px-2 [&>span]:bg-[#2c2b2b] [&>span]:rounded-md gap-1 mt-4">
                <span>Art</span>
                <span>Photography</span>
                <span>Travel</span>
                <span>Food</span>
                <span>Music</span>
                <span>Lifestyle</span>
                <span>Technology</span>
                <span>Science</span>
              </div>
            </div>
            <div className="h-3 bg-[#313131]"></div>
          </div>
          {/* Categories section*/}
          <div className="bg-primary pt-3 mt-5 rounded-md">
            <div className="px-3 text-white mb-4">
              <h3 className="text-2xl font-semibold mt-3 border-b pb-1 border-secondary   inline text-secondary  ">
                Categories
              </h3>
              <Categories />
            </div>
            <div className="h-3 bg-[#313131]"></div>
          </div>
        </div>
      </div>
      {/**Recent Blogs */}
      <div className="mt-10">
        <h1 className="text-lg text-secondary border-b-2 border-secondary inline pb-1 font-bold">
          Recent Blogs
        </h1>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-4">
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </div>
      </div>
    </main>
  );
}
