"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import HeaderPagesNavigation from "./header-pages-navigation";
import DropdownMenu from "./dropdown-menu";

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

  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id === "screen") {
      setOpen(!open);
    }
  };

  return (
    <>
      <div
        className={`w-full p-5 border-b min-h-[60px] border-b-secondaryTheme transition-opacity ${
          active && "fixed top-0 left-0 bg-[#000] z-[9999]"
        }`}
      >
        <div className="hidden lg:w-[95%] mx-auto lg:flex items-center justify-between">
          <div>
            <Link href={"/"} className="flex items-center gap-2">
              <Image src={Logo} className="w-[50px]" alt="" />
              <h1 className="font-heading text-3xl cursor-pointer text-secondaryTheme -translate-y-[3px]">
                <span className="text-white">Prompt</span>Up
              </h1>
            </Link>
          </div>

          <div className="flex w-full items-center justify-center -translate-x-[115px] max-[1500px]:-translate-x-[0px]">
            <HeaderPagesNavigation activeItem={activeItem} />
          </div>

          <div className="flex items-center">
            <AiOutlineSearch className="text-[25px] mr-5 cursor-pointer lg:hover:text-secondaryTheme lg:transition-all lg:ease-in-out lg:duration-500" />
            <Link href="/sign-in">
              <IoPersonSharp className="text-[25px] cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* SMALL SCREENS INTERFACE */}
        <div className="w-[98%] lg:hidden flex items-center justify-between">
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

          <AnimatePresence>
            {open && (
              <div
                className="fixed lg:hidden w-full h-screen top-0 left-0 z-[99999] bg-[unset]"
                onClick={handleClose}
                id="screen"
              >
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed sidebar-menu-background h-screen top-0 right-0 w-[60%] z-[9999]"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <HeaderPagesNavigation activeItem={activeItem} />
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Header;
