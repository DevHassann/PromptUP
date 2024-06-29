import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/logo/logo.svg";

type Props = {};

const ShopHeader = (props: Props) => {
  return (
    <div
      className={`w-full p-5 border-b-2 min-h-[65px] border-b-secondaryTheme mx-auto flex items-center justify-center`}
    >
      <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
        <Image src={Logo} className="w-[50px] py-2" alt="PromptUp" priority />
        <h1 className="font-heading text-3xl cursor-pointer text-secondaryTheme translate-y-[2px]">
          <span className="text-white">Prompt</span>Up
        </h1>
      </Link>
    </div>
  );
};

export default ShopHeader;
