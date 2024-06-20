import Link from "next/link";
import React from "react";

import { HeaderPagesNavigationData } from "../../static/header-pages-navigation-data";
import { HeaderPagesNavigationProps } from "../../interfaces/components.interface";

const HeaderPagesNavigation = ({ activeItem }: HeaderPagesNavigationProps) => {
  return (
    <div className="flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
      {HeaderPagesNavigationData.map((item, index) => (
        <Link key={item.title} href={item.href}>
          <h5
            className={`inline-block lg:px-4 xl:px-8 py-5 lg:py-0 text-[18px] font-[500] font-heading lg:hover:text-secondaryTheme lg:transition-all lg:ease-in-out lg:duration-500 ${
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
