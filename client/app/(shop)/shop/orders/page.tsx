import React from "react";

import ShopHeader from "../../../../components/layouts/shop-header";
import ShopSidebar from "../../../../components/layouts/shop-sidebar";

const Page = () => {
  return (
    <>
      <ShopHeader />
      <div className="flex w-full">
        <ShopSidebar active={3} />

        <div className="md:w-[80%] 2xl:w-[83%]">
          {/* <ShopAllOrders isDashboard={false} ordersData={ordersData} /> */}
        </div>
      </div>
    </>
  );
};

export default Page;
