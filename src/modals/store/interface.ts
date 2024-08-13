import {User} from '../auth/interface';

// products
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
  favorite?: boolean;
  quantity?: number;
  productId?: number;
}

export interface ProductState {
  products: any[];
  newArrival: any[];
  bestsellers: any[];
  singleProduct: object;
  pending: boolean;
  error: string | null;
}

// categories
export interface CategoryState {
  categories: string[];
  selectedCategory: string;
  pending: boolean;
  error: string | null;
}
export interface ProductsRequestParams {
  sort?: string;
  limit?: number;
  category?: string;
  userId?: number;
  productId?: number;
}

// cart
export interface CartProps {
  params?: {item: any};
  id?: number;
  productId?: number;
  quantity?: number;
  item?: any;
  price?: number;
  userId?: number;
  date?: string;
  //products?: CartProps[];
}

export interface Cart {
  id?: number;
  userId?: number;
  date?: string;
  products?: any[];
  //products: (CartProps | Product)[];
  productId: number;
  quantity: number;
  price: number;
}

export interface CartState {
  cart: any[];
  pending: boolean;
  error: string | null;
  totalPrice: number;
}

export interface AddToCartParams {
  userId: number;
  date: string;
  products: any[];
}

// Favorites
export interface FavoriteState {
  favorites: any[];
  pending: boolean;
  error: string | null;
}

// auth
export interface AuthState {
  isLogin: boolean;
  pending: boolean;
  error: string | null;
  token: string | number | null;
  user: User | null;
}

// notification
export interface Notification {
  id: string;
  description: string;
  productId: string;
  title: string;
  url: string;
  date: string;
  image?: string;
  hasSeen: boolean;
}

export interface NotificationState {
  notifications: Notification[];
  count: number;
  pending: boolean;
  error: string | null;
}
