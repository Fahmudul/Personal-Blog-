import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  // Navlink
  const navLink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Join Us",
      link: "/join-us",
    },
  ];
  return (
    <div className="flex justify-between gap-3 items-center pt-10 text-white">
      <div className="">
        <Image
          src={"/Logo.png"}
          alt="Logo"
          width={250}
          height={600}
          className=" h-[60px] "
        />
      </div>
      <div className="flex-1 pl-4">
        <nav>
          <ul className="flex gap-5 relative">
            {navLink.map((link) => (
              <li key={link.name} className="">
                <Link
                  href={link.link}
                  className="text-[#2c8ca1] before:[content-'']  before:w-0 relative before:absolute   before:hover:w-[60%] before:transition-all before:duration-500   before:bg-[#246473] before:h-[2px] before:-bottom-2"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center">
        <Input type="text" placeholder="Search" />
        <CiSearch className="text-3xl ml-3 rounded-full hover:scale-105 transition-all duration-500" />
      </div>
    </div>
  );
};

export default Navbar;
