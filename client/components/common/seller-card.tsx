import React from "react";
import { Avatar, Card, Skeleton } from "@nextui-org/react";

import Ratings from "../common/ratings";

import { SellerCardProps } from "../../interfaces/components.interface";

import { styles } from "../../styles/partials";

const SellerCard = ({ item, loading }: SellerCardProps) => {
  return (
    <Card className="py-4 prompt-card-background border-2 border-gray-800 m-3 w-full lg:w-[31%] sm:w-[46%] 2xl:w-[23%] flex flex-col items-center text-black">
      {loading ? (
        <>
          <Skeleton className="w-[80px] h-[80px] rounded-full" />
          <br />
          <Skeleton className="w-[90%] rounded-xl h-[20px]" />
          <br />
          <Skeleton className="w-[90%] rounded-xl h-[20px]" />
        </>
      ) : (
        <>
          <Avatar src="https://pixner.net/aikeu/assets/images/banner/small-slider/two.png" className="w-[80px] h-[80px]" />
          <span className={`${styles.label} py-2 text-xl text-white font-[700]`}>@{item?.name}</span>
          <div className="flex items-center">
            <span className={`${styles.label} pr-2 text-white font-[700]`}>{item?.ratings}/5</span>
            <Ratings rating={item?.ratings} />
          </div>
          <span className={`${styles.label} py-2 text-white font-[700]`}>
            Total Sales: {item?.allProducts}
          </span>
        </>
      )}
    </Card>
  );
};

export default SellerCard;
