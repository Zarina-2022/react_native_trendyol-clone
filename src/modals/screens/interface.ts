import {RouteProp} from '@react-navigation/native';
import {CartProps, Product} from '../store/interface';
import {ViewStyle} from 'react-native';
import { User } from '../auth/interface';

export type NewArrivalsCardProps = {
  item: Product;
  style?: ViewStyle;
};

// productList screen
type ProductListRouteProp = RouteProp<{params: {category: string}}, 'params'>;
type ProductsProp = RouteProp<{params: {item: Product}}, 'params'>;

export interface RouteInterface {
  route: ProductListRouteProp;
}

export interface ProductsInterface {
  route: ProductsProp;
}

export interface CartInterface {
  route: CartProps;
}

export interface ProductTitleProps {
  title: string | undefined;
  numOfCharacters?: number;
}

// myAccount
export type MyAccountRouteProp = RouteProp<{ params: { user: User } }, 'params'>;
