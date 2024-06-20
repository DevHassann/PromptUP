"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { styles } from "../../../styles/partials";

import { PartnersSectionImagesDataset } from "../../../static/partners-section-data";

const PartnerSection = () => {
  return (
    <div className="w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
      <h1 className={`${styles.heading} text-center`}>Our Partner&apos;s</h1>
      <div className="w-full flex justify-center pt-3">
        <div className="w-[50px] h-[2px] bg-secondaryTheme" />
      </div>
      <Marquee className="w-full my-[4rem]">
        {PartnersSectionImagesDataset.map((i, index) => (
          <Image
            src={i.img}
            alt="Our Partners"
            width={100}
            height={100}
            key={index}
            className="mx-14 grayscale-[100%] w-[120px] h-[120px] object-contain hover:grayscale-0 transition-opacity cursor-pointer"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default PartnerSection;
