import React from "react";
import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { DropdownMenuProps } from "../../interfaces/components.interface";

import { styles } from "../../styles/partials";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { MdDocumentScanner } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { FaShop } from "react-icons/fa6";

const DropdownMenuComponent = ({
  user,
  setOpen,
  handleProfile,
  isSellerExist,
}: DropdownMenuProps) => {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleLogOut = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <Dropdown className="bg-white">
      <DropdownTrigger>
        <Avatar
          src={user?.imageUrl}
          alt=""
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          onClick={() => {
            handleProfile();
            setOpen(false);
          }}
        >
          <div className="flex w-full items-center gap-3 my-2">
            <Avatar
              src={user?.imageUrl}
              alt=""
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <span className={`${styles.label} text-black text-[16px]`}>
              My Profile
            </span>
          </div>
        </DropdownItem>

        <DropdownItem>
          <Link href={"/my-orders"} className="flex w-full items-center gap-3 my-2">
            <MdDocumentScanner className="text-[30px] text-black" />
            <span className={`${styles.label} text-black text-[16px]`}>
              My Orders
            </span>
          </Link>
        </DropdownItem>

        <DropdownItem className={`${!isSellerExist && "hidden"}`}>
          <Link href={"/my-shop"} className="flex w-full items-center gap-3 my-2">
            <FaShop className="text-[30px] text-black" />
            <span className={`${styles.label} text-black text-[16px]`}>
              Switch to Seller
            </span>
          </Link>
        </DropdownItem>

        <DropdownItem onClick={handleLogOut}>
          <div className="flex items-center w-full gap-2 my-2">
            <IoLogOut className="text-[35px] text-black" />
            <span className={`${styles.label} text-black text-[16px]`}>
              Log out
            </span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownMenuComponent;
