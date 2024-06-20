"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

import { styles } from "../../../styles/partials";

import FutureSectionImage from "../../../public/images/future-section-image.png";

const FutureSection = () => {
  return (
    <div className="w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto mt-[9rem] max-lg:mt-[5rem]">
      <div className="w-full relative p-4 lg:p-[unset] grid lg:grid-cols-2 py-8">
        <div className="col-span-1 translate-x-[12%] max-lg:hidden">
          <Image
            src={FutureSectionImage}
            width={800}
            height={500}
            alt=""
            className="lg:w-[90%] lg:ml-[-50px] 2xl:ml-[-90px]"
          />
        </div>
        <div className="col-span-1 w-full flex justify-center items-center">
          <div className="2xl:w-[60%]">
            <Button
              className={`${styles.button} mb-[30px] h-[37px] bg-[#12211f]`}
            >
              Future
            </Button>
            <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
              Unleashing The Glorious Future Of Ai generated Images
            </h5>
            <p className={`${styles.paragraph} pb-5`}>
              One of the most prominent techniques in AI image generation is the
              use of Generative Adversarial Networks
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center my-[2rem] lg:hidden">
          <Image
            src={FutureSectionImage}
            width={800}
            height={500}
            alt=""
            className="w-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default FutureSection;
