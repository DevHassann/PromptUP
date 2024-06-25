import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { SidebarMenuProps } from "../../interfaces/components.interface";

import HeaderPagesNavigation from "./header-pages-navigation";

import { Avatar } from "@nextui-org/react";
import { styles } from "../../styles/partials";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { MdDocumentScanner } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { FaShop } from "react-icons/fa6";

const SidebarMenu = ({
  open,
  setOpen,
  activeItem,
  user,
  handleProfile,
  isSellerExist,
}: SidebarMenuProps) => {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleLogOut = async () => {
    await signOut();
    router.push("/sign-in");
  };

  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id === "screen") {
      setOpen(!open);
    }
  };

  return (
    <>
      <div
        className="fixed lg:hidden w-full h-screen top-0 left-0 z-[99999] bg-[unset]"
        onClick={handleClose}
        id="screen"
      >
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed sidebar-menu-background h-screen top-0 right-0 w-[60%] z-[9999]"
        >
          <div className="w-full h-full flex items-center flex-col justify-center">
            <HeaderPagesNavigation activeItem={activeItem} />
            <hr className="h-[3px] bg-white w-[50%] rounded-xl my-4" />
            {user ? (
              <>
                <div className="w-full flex items-center flex-col justify-center gap-4">
                  <Avatar
                    src={user?.imageUrl}
                    alt=""
                    className="w-[60px] h-[60px] my-4"
                  />

                  <div
                    className="flex w-full items-center pl-8 gap-3 my-2"
                    onClick={() => handleProfile()}
                  >
                    <BsFillPersonBadgeFill className="w-[30px] h-[30px]" />
                    <span
                      className={`${styles.label} text-white text-[18px] font-[500]`}
                    >
                      My Profile
                    </span>
                  </div>

                  <Link
                    href={"/my-orders"}
                    className="flex w-full items-center pl-8 gap-3 my-2"
                  >
                    <MdDocumentScanner className="text-[30px]" />
                    <span
                      className={`${styles.label} text-white font-[500] text-[18px]`}
                    >
                      My Orders
                    </span>
                  </Link>

                  <Link
                    href={"/my-shop"}
                    className={`flex w-full items-center pl-8 gap-3 my-2 ${
                      !isSellerExist && "hidden"
                    }`}
                  >
                    <FaShop className="text-[30px]" />
                    <span
                      className={`${styles.label} text-white font-[500] text-[18px]`}
                    >
                      Switch to Seller
                    </span>
                  </Link>

                  <div
                    className="flex w-full items-center pl-8 gap-3 my-2"
                    onClick={() => handleLogOut()}
                  >
                    <IoLogOut className="text-[35px]" />
                    <span
                      className={`${styles.label} text-white text-[18px] font-[500]`}
                    >
                      Log out
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <Link
                href="/sign-in"
                className="text-[18px] font-[500] font-heading text-white"
              >
                Login / Signup
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SidebarMenu;
