"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Chip } from "@nextui-org/react";

import { styles } from "../../../styles/partials";

import AboutSectionImage from "../../../public/images/about-section-image.png";

const AboutSection = () => {
  const router = useRouter();

  return (
    <div className="w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto mt-8 max-lg:mt-12">
      <div className="w-full relative grid lg:grid-cols-2 py-8">
        <div className="col-span-1 w-full lg:w-[60%] lg:mt-5 px-5 lg:px-[unset]">
          <Chip className={`${styles.button} mb-[30px] h-[37px] bg-[#12211f]`}>
            AI Image
          </Chip>
          <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
            Crafting Tomorrow&apos;s Images With Artificial Intelligence
          </h5>
          <p className={`${styles.paragraph} pb-5`}>
            AI image generation tools have emerged as powerful resources in the
            realm of digital art and design. These cutting-edge tools leverage
            advanced.
          </p>
          <Button
            className={`${styles.button} bg-[#2551b0] font-[500] h-[45px] max-lg:!w-full`}
            onClick={() => router.push("/marketplace")}
          >
            Visit Shop
          </Button>
        </div>
        <div className="col-span-1 my-10 max-lg:mt-[4rem] max-lg:mb-12 lg:mt-[unset] max-lg:flex max-lg:items-center max-lg:justify-center">
          <Image
            src={AboutSectionImage}
            alt="About Section Image"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
