"use client";

import React from "react";

import ShopSidebar from "../../../components/layouts/shop-sidebar";
import ShopHeader from "../../../components/layouts/shop-header";

const Page = () => {
  return (
    <>
      <ShopHeader />
      <div className="flex w-full">
        <ShopSidebar active={0} />

        <div className="md:w-[80%] 2xl:w-[83%]">
          {/* <ShopRoot ordersData={ordersData} promptsData={promptsData} /> */}
        </div>
      </div>
    </>
  );
};

export default Page;
