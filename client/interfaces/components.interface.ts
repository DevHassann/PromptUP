export interface HeaderProps {
  activeItem: number;
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
