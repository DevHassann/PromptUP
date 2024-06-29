"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { styles } from "../../styles/partials";
import Logo from "../../public/logo/logo.svg";
import { FooterPagesNavigationData } from "@/static/footer-pages-navigation-data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="w-full flex items-center justify-between flex-col gap-8 pt-12 pb-4 border-t-2 border-secondaryTheme">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={Logo} className="w-[50px]" alt="PromptUp" priority/>
          <h1 className="font-heading text-3xl cursor-pointer text-secondaryTheme translate-y-[2px]">
            <span className="text-white">Prompt</span>Up
          </h1>
        </Link>

        <ul className="flex flex-wrap items-center justify-center w-full font-medium text-base text-white lg:gap-12 gap-8">
          {FooterPagesNavigationData.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="lg:hover:text-secondaryTheme">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <p className={`${styles.paragraph} text-center max-lg:text-[14px]`}>
          Copyright © {currentYear} PromptUp. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
