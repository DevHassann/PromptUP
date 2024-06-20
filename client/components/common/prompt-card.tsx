import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Ratings from "./ratings";

import { styles } from "../../styles/partials";
import { Avatar, Card, Divider } from "@nextui-org/react";
import ChatGptIcon from "../../public/icons/chatgpt-icon.png";
import DalleIcon from "../../public/icons/dall-e-icon.jpeg";
import MidJourneyIcon from "../../public/icons/midjourney-icon.png";
import BardIcon from "../../public/icons/bard-icon.png";

import { PromptCardProps } from "../../interfaces/components.interface";

const PromptCard = ({ prompt }: PromptCardProps) => {
  return (
    <Card
      radius="lg"
      className="w-full lg:w-[31%] sm:w-[46%] 2xl:w-[23%] max-h-[410px] p-4 bg-white m-3"
    >
      <div className="relative">
        <Image
          src={prompt?.promptImage}
          alt=""
          className="w-full !max-h-[200px] object-cover rounded-lg"
          width={300}
          height={300}
        />
        <div className="absolute bottom-2 left-2">
          <div className="w-max bg-black duration-300 transition-opacity text-white p-[10px] items-center flex rounded-xl">
            {prompt?.category === "Chatgpt" ? (
              <Image
                src={ChatGptIcon}
                width={25}
                height={25}
                alt={prompt?.category}
              />
            ) : (
              <>
                {prompt?.category === "Dalle" ? (
                  <Image
                    src={DalleIcon}
                    width={25}
                    height={25}
                    alt={prompt?.category}
                  />
                ) : (
                  <>
                    {prompt?.category === "Midjourney" ? (
                      <Image
                        src={MidJourneyIcon}
                        width={25}
                        height={25}
                        alt={prompt?.category}
                      />
                    ) : (
                      <>
                        {prompt?.category === "Bard" ? (
                          <Image
                            src={BardIcon}
                            width={25}
                            height={25}
                            alt={prompt?.category}
                          />
                        ) : null}
                      </>
                    )}
                  </>
                )}
              </>
            )}
            <span className={`${styles.label} pl-2 text-white`}>
              {prompt?.category}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between py-4">
        <h3 className={`${styles.label} text-[18px] font-[700] text-black`}>
          {prompt?.PromptName}
        </h3>
        <p className={`${styles.paragraph} text-black font-[700]`}>${prompt?.price}</p>
      </div>
      <Divider className="bg-black mb-3" />
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <Avatar src="https://pixner.net/aikeu/assets/images/banner/large-slider/four.png" />
          <span className={`${styles.label} pl-3 font-[600]`}>
            @{prompt?.PromptShopName}
          </span>
        </div>
        <Ratings rating={prompt?.rating} />
      </div>
      <br />
      <Link href={`/prompt/${prompt.id}`} className="w-full">
        <div
          className={`${styles.button} !py-2 !px-3 text-center mb-3 w-full !text-black bg-white border-2 border-black md:duration-500 md:transition-all md:ease-in-out font-[600]`}
        >
          Get Prompts
        </div>
      </Link>
    </Card>
  );
};

export default PromptCard;
