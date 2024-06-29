"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import HeaderPagesNavigation from "./header-pages-navigation";
import DropdownMenuComponent from "./dropdown-menu";
import SidebarMenu from "./sidebar-menu";
import { UserProfile } from "@clerk/nextjs";

import { HeaderProps } from "../../interfaces/components.interface";

import Logo from "../../public/logo/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = ({ user, activeItem, isSellerExist }: HeaderProps) => {
  const [active, setactive] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setactive(true);
      } else {
        setactive(false);
      }
    });
  }

  const handleProfile = () => {
    setActiveProfile(!activeProfile);
    setOpen(false);
  };

  return (
    <>
      <div
        className={`w-full p-5 border-b-2 min-h-[60px] border-b-secondaryTheme transition-opacity ${
          active && "fixed top-0 left-0 bg-[#000] z-[9999]"
        }`}
      >
        <div className="hidden lg:w-[95%] mx-auto lg:flex items-center justify-between">
          <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
            <Image src={Logo} className="w-[50px]" alt="PromptUp" priority />
            <h1 className="font-heading text-3xl cursor-pointer text-secondaryTheme translate-y-[2px]">
              <span className="text-white">Prompt</span>Up
            </h1>
          </Link>

          <div className="flex w-full items-center justify-center -translate-x-[115px] max-[1500px]:-translate-x-[0px]">
            <HeaderPagesNavigation activeItem={activeItem} />
          </div>

          <div className="flex items-center">
            <AiOutlineSearch className="text-[25px] mr-5 cursor-pointer lg:hover:text-secondaryTheme lg:transition-all lg:ease-in-out lg:duration-500" />
            {user ? (
              <div>
                <DropdownMenuComponent
                  user={user}
                  setOpen={setOpen}
                  handleProfile={handleProfile}
                  isSellerExist={isSellerExist}
                />
              </div>
            ) : (
              <Link href="/sign-in">
                <IoPersonSharp className="text-[25px] cursor-pointer" />
              </Link>
            )}
          </div>
        </div>

        <AnimatePresence>
          {activeProfile && (
            <div className="w-full fixed h-screen overflow-hidden flex justify-center items-center top-0 left-0 bg-[#00000068] z-[9999]">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-min relative overflow-y-auto rounded-xl shadow"
              >
                <UserProfile />
                <IoClose
                  className="absolute text-black text-[25px] font-bold lg:top-[1.5rem] lg:right-10 top-[0.7rem] right-[1.5rem]  cursor-pointer"
                  onClick={handleProfile}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* SMALL SCREENS INTERFACE */}
        <div className="w-[98%] lg:hidden flex items-center justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src={Logo} className="w-[45px]" alt="PromptUp" priority />
              <h1 className="font-heading text-3xl cursor-pointer text-secondaryTheme translate-y-[2px]">
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
              <SidebarMenu
                open={open}
                setOpen={setOpen}
                activeItem={activeItem}
                user={user}
                handleProfile={handleProfile}
                isSellerExist={isSellerExist}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Header;
