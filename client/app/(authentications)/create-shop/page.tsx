"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Header from "../../../components/layouts/header";

import { useUser } from "@clerk/nextjs";
import MetaData from "../../../functions/meta-data";

import { Button } from "@nextui-org/react";
import { styles } from "../../../styles/partials";
import BgVideo from "../../../public/videos/TVStaticArtifactsOverlay.mp4";

const Page = () => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [shopData, setShopData] = useState({
    name: "",
    description: "",
    shopProductsType: "",
    avatar: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (user) {
      const data = {
        name: shopData.name,
        description: shopData.description,
        shopProductsType: shopData.shopProductsType,
        avatar: user?.imageUrl || "",
        userId: user?.id,
      };
      await axios
        .post("/api/create-shop", data)
        .then((res) => {
          setLoading(false);
          toast.success("Shop created successfully!");
          setShopData({
            name: "",
            description: "",
            shopProductsType: "",
            avatar: "",
          });
          router.push("/");
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.response.data);
          setShopData({
            name: "",
            description: "",
            shopProductsType: "",
            avatar: "",
          });
        });
    }
  };

  return (
    <>
      <MetaData
        title="PromptUp - Create Shop"
        description="PromptUp is an AI generated prompt marketplace"
        keywords="AI Prompt Marketplace, AI, AI Prompts, Marketplace"
      />

      <Header activeItem={4} user={user} />

      <div className="w-full h-screen">
        <video
          src={BgVideo}
          muted
          loop
          autoPlay
          className="w-full h-full object-cover absolute z-[10]"
        />
        <div className="absolute z-[20] w-full h-full flex items-center justify-center">
          <div className="create-shop-blur-background md:rounded-2xl md:w-[40%] w-[100%] max-md:h-full md:py-8 flex flex-col items-center justify-center md:border-[3px] md:border-secondaryTheme">
            <h1 className={`${styles.heading} text-center max-md:text-3xl`}>
              Start Selling With Us!!
            </h1>
            <div className="w-full flex justify-center pt-3">
              <div className="w-[60%] h-[3px] rounded-lg bg-secondaryTheme" />
            </div>
            <form
              className="w-[90%] flex flex-col items-center justify-center gap-8 my-8"
              onSubmit={handleSubmit}
            >
              <div className="w-full">
                <label className={`${styles.label} mb-2 block !text-white`}>
                  Shop Name
                </label>
                <input
                  required
                  type="name"
                  className="w-full p-2 bg-transparent border-whhite border-2 focus:outline-none rounded-lg"
                  value={shopData.name}
                  onChange={(e) =>
                    setShopData({ ...shopData, name: e.target.value })
                  }
                  placeholder="Enter Your Shop Name"
                />
              </div>

              <div className="w-full">
                <label className={`${styles.label} mb-2 block !text-white`}>
                  Shop Description (Max 120 letters)
                </label>
                <input
                  required
                  type="text"
                  className="w-full p-2 bg-transparent border-white border-2 focus:outline-none rounded-lg"
                  value={shopData.description}
                  onChange={(e) =>
                    setShopData({ ...shopData, description: e.target.value })
                  }
                  placeholder="Enter Your Shop Description"
                  maxLength={120}
                />
              </div>

              <div className="w-full">
                <label className={`${styles.label} mb-2 block !text-white`}>
                  What you want to sale with us?
                </label>
                <textarea
                  value={shopData.shopProductsType}
                  onChange={(e) =>
                    setShopData({
                      ...shopData,
                      shopProductsType: e.target.value,
                    })
                  }
                  required
                  placeholder="Chatgpt, Midjoureney Prompts..."
                  className="w-full p-2 bg-transparent border-white border-2 focus:outline-none rounded-lg"
                  rows={6}
                />
              </div>

              <div className="w-full">
                <Button
                  className="w-full h-[55px] text-[18px] font-[700] bg-secondaryTheme text-white"
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
      </div>
    </>
  );
};

export default Page;
