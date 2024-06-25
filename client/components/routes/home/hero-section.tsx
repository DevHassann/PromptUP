"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import MarQuee from "react-fast-marquee";

import line from "../../../public/images/hero-line.png";

import {
  HeroSectionRowOneImagesDataset,
  HeroSectionRowTwoImagesDataset,
} from "../../../static/hero-section-data";

const HeroSection = () => {
  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setmounted(true);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full md:min-h-screen flex items-center justify-center max-lg:overflow-hidden">
      <div>
        <h1 className="font-body text-4xl py-5 xl:text-7xl 2xl:text-8xl font-[700] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20 mt-[4rem]">
          Make <span className="text-secondaryTheme">AI Image</span> <br /> With
          Your <br /> Imagination
        </h1>
        <div className="hidden lg:block lg:mt-5">
          <Image
            src={line}
            alt="line"
            className="absolute"
            width={2000}
            height={2}
            priority
          />
        </div>
        <div className="w-[100vw] mb-5 md:mb-20 relative">
          <div className="rotate-[-4deg] mt-10 md:mt-[6.5rem]">
            <MarQuee>
              {HeroSectionRowOneImagesDataset.map((i, index) => (
                <Image
                  src={i.img}
                  key={index}
                  alt="Hero Secction Images"
                  className="md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]"
                  width={500}
                  height={300}
                  priority
                />
              ))}
            </MarQuee>
            <MarQuee>
              {HeroSectionRowTwoImagesDataset.map((i, index) => (
                <Image
                  src={i.img}
                  key={index}
                  alt="Hero Secction Images"
                  className="md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]"
                  width={500}
                  height={300}
                  priority
                />
              ))}
            </MarQuee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
