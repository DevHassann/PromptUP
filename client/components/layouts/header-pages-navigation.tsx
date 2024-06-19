import Link from "next/link";
import React from "react";

import { HeaderPagesNavigationData } from "../../static/header-pages-navigation-data";
import { HeaderPagesNavigationProps } from "../../interfaces/components.interface";

const HeaderPagesNavigation = ({ activeItem }: HeaderPagesNavigationProps) => {
  return (
    <div className="block md:flex">
      {HeaderPagesNavigationData.map((item, index) => (
        <Link key={item.title} href={item.href}>
          <h5
            className={`inline-block md:px-4 xl:px-8 py-5 md:py-0 text-[18px] font-[500] font-heading md:hover:text-secondaryTheme md:transition-all md:ease-in-out md:duration-500 ${
              activeItem === index && "text-secondaryTheme"
            }`}
          >
            {item.title}
          </h5>
        </Link>
      ))}
    </div>
  );
};

export default HeaderPagesNavigation;
