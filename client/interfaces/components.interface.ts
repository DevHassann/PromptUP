import { User } from "@clerk/nextjs/server";

export interface HeaderProps {
  activeItem: number;
  user: User | null;
  isSellerExist: boolean;
}

export interface HeaderPagesNavigationProps {
  activeItem: number;
}

export interface PromptCardProps {
  prompt: any;
}

export interface RatingsProps {
  rating: number;
}

export interface SellerCardProps {
  item?: any;
  loading: boolean;
}

export interface ShopDataProps {
  id: string;
  name: string;
  description: string;
  shopProductsType: string;
  avatar: string;
  ratings: Number;
  totalSales: Number;
  allProducts: Number;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface DropdownMenuProps {
  user: User | null;
  setOpen: (open: boolean) => void;
  handleProfile: () => void;
  isSellerExist?: boolean;
}

export interface SidebarMenuProps {
  user: User | null;
  open: boolean;
  setOpen: (open: boolean) => void;
  isSellerExist?: boolean;
  activeItem: number;
  handleProfile: () => void;
}
