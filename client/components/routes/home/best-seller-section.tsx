"use client";

import React, { useEffect, useState } from "react";

import SellerCard from "../../common/seller-card";

import { styles } from "../../../styles/partials";

import { SellerCardFakeData } from "../../../static/seller-card-fake-data";

const BestSellerSection = () => {
  return (
    <div className="w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto mt-[4rem] mb-[9rem] max-lg:my-[5rem]">
      <h1 className={`${styles.heading} p-2 mb-5`}>Top Sellers</h1>
      <div className="flex flex-wrap">
        {SellerCardFakeData.map((item: any) => (
          <SellerCard item={item} key={item.id} loading={false} />
        ))}
      </div>
    </div>
  );
};

export default BestSellerSection;
