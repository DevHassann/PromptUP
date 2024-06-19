"use client";

import React, { useState } from "react";
import Link from "next/link";

import HeaderPagesNavigation from "./header-pages-navigation";

import { HeaderProps } from "../../interfaces/components.interface";

import Logo from "../../public/logo/logo.svg";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeItem }: HeaderProps) => {
  const [active, setactive] = useState(false);
  const [open, setOpen] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setactive(true);
      } else {
        setactive(false);
      }
    });
  }

  return (
    <>
      <div
        className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${
          active && "fixed top-0 left-0 bg-[#000] z-[9999]"
        }`}
      >
        <div className="hidden md:w-[95%] mx-auto md:flex items-center justify-between">
          <div>
            <Link href={"/"} className="flex items-center gap-2">
              <Image src={Logo} className="w-[50px]" alt="" />
              <h1 className="font-heading text-3xl cursor-pointer text-secondaryTheme -translate-y-[3px]">
                <span className="text-white">Prompt</span>Up
              </h1>
            </Link>
          </div>

          <div className="flex">
            <HeaderPagesNavigation activeItem={activeItem} />
          </div>

          <div className="flex items-center ml-[2.5rem]">
            <AiOutlineSearch className="text-[25px] mr-5 cursor-pointer md:hover:text-secondaryTheme md:transition-all md:ease-in-out md:duration-500" />
            <Link href="/sign-in">
              <IoPersonSharp className="text-[25px] cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* SMALL SCREENS INTERFACE */}
        <div className="w-full md:hidden flex items-center justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src={Logo} className="w-[45px]" alt="" />
              <h1 className="font-heading text-3xl cursor-pointer text-secondaryTheme -translate-y-[3px]">
                <span className="text-white">Prompt</span>Up
              </h1>
            </Link>
          </div>
          
          <div>
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
