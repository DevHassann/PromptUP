import React from "react";
import Link from "next/link";

import { ShopSidebarProps } from "@/interfaces/components.interface";
import { sidebarNavigationData } from "@/static/shop-sidebar-navigation-data";

import { styles } from "../../styles/partials";

const ShopSidebar = ({ active }: ShopSidebarProps) => {
  return (
    <div className="h-[calc(100vh-110px)] border-r-2 border-r-secondaryTheme bg-black md:w-[20%] 2xl:w-[17%]">
      <div className="w-full h-full items-center p-4 py-12 flex gap-12 flex-col">
        {sidebarNavigationData.map((item, index) => (
          <Link key={index} href={item.href} className="w-[95%]">
            <div className="flex items-center">
              <div
                className={`text-3xl ${
                  active !== index ? "!text-white" : "!text-secondaryTheme"
                }`}
              >
                {item.icon}
              </div>
              <span
                className={`${styles.label} !font-[700] translate-y-[2px] ${
                  active !== index ? "!text-white" : "!text-secondaryTheme"
                } pl-4`}
              >
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopSidebar;
