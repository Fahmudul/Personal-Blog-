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
    <div className="flex justify-between gap-3 items-center pt-10">
      <div className="">
        <Image
          src={"/logo.png"}
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
              <li
                key={link.name}
                className="before:content-[''] relative before:absolute before:bottom-0 before:w-0 before:hover:w-[30px] before:transition-all before:duration-300 before:bg-black before:text-white before:h-[2px]"
              >
                <Link href={link.link} className="">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center">
        <Input type="text" placeholder="Search" />
        <CiSearch className="text-3xl ml-3 rounded-full hover:scale-105 transition-all duration-300" />
      </div>
    </div>
  );
};

export default Navbar;
