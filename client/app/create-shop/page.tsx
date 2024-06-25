"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { useUser } from "@clerk/nextjs";
import MetaData from "../../functions/meta-data";

import { Button, Input, Textarea } from "@nextui-org/react";
import { styles } from "../../styles/partials";

const page = () => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [shopData, setShopData] = useState({
    name: "",
    description: "",
    shopProductsType: "",
    avatar: "",
  });

  return (
    <>
      <MetaData
        title="PromptUp - Create Shop"
        description="PromptUp is an AI generated prompt marketplace"
        keywords="AI Prompt Marketplace, AI, AI Prompts, Marketplace"
      />

      <div className="w-full h-screen flex flex-col justify-center">
        <div>
          <h1 className={`${styles.heading} text-center font-Monserrat`}>
            Start to selling with us
          </h1>
          <form className="2xl:w-[40%] xl:w-[50%] md:w-[70%] w-[90%] m-auto">
            <div className="w-full my-5">
              <label className={`${styles.label} mb-2 block`}>Shop Name</label>
              <Input
                isRequired
                type="name"
                value={shopData.name}
                onChange={(e) =>
                  setShopData({ ...shopData, name: e.target.value })
                }
                label="Becodemy"
                size="sm"
                variant="bordered"
              />
            </div>
            <div className="w-full my-5">
              <label className={`${styles.label} mb-2 block`}>
                Shop Description (Max 120 letters)
              </label>
              <Input
                isRequired
                type="text"
                label="lorem ipsum"
                size="sm"
                value={shopData.description}
                onChange={(e) =>
                  setShopData({ ...shopData, description: e.target.value })
                }
                variant="bordered"
                maxLength={120}
              />
            </div>
            <div className="w-full my-5">
              <label className={`${styles.label} mb-2 block`}>
                What you wanna sale with us?
              </label>
              <Textarea
                variant="bordered"
                value={shopData.shopProductsType}
                onChange={(e) =>
                  setShopData({ ...shopData, shopProductsType: e.target.value })
                }
                required
                placeholder="Chatgpt,Midjoureney Prompts..."
                className="col-span-12 md:col-span-6 md:mb-0"
              />
              <br />
              <Button
                className="mb-3 w-full bg-transparent h-[45px] border border-[#16c252] text-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity font-Inter font-[600]"
                type="submit"
                disabled={loading}
                disableAnimation={loading}
              >
                Create Shop
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
