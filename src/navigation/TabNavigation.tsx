import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS} from '../utils/routes';
import Home from '../screens/home';
import Cart from '../screens/cart';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';
import Trendyol from '../screens/trendyol';
import TabIcons from '../components/TabIcons';
import {COLORS} from '../theme/colors';
import Header from '../components/header/Header';
import ProductList from '../screens/products/productList';
import {useAppSelector} from '../app/hooks';
import CustomHeader from '../components/header/CustomHeader';
import ProfileHeader from '../components/header/ProfileHeader';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  const {home, cart, favorites, profile, trendyol, productList} = SCREENS;
  const cartProductQty = useAppSelector(state =>
    state.cartState.cart.reduce(
      (total: any, cartItem: {products: string | any[]}) => {
        // Safeguard against undefined products
        const productCount = cartItem.products ? cartItem.products.length : 0;
        return total + productCount;
      },
      0,
    ),
  );
  const isLogin = useAppSelector(state => state.authState.isLogin);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcons
            focused={focused}
            color={color}
            size={size}
            name={route.name}
          />
        ),
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 80 : 60,
        },
        tabBarLabelStyle: {
          paddingBottom: Platform.OS === 'ios' ? 5 : 10,
          fontSize: 12,
        },
        tabBarActiveTintColor: COLORS.red,
        tabBarInactiveTintColor: COLORS.gray,
      })}>
      <Tab.Screen
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
        name={home}
        component={Home}
      />
      <Tab.Screen name={trendyol} component={Trendyol} />
      <Tab.Screen
        options={{
          headerShown: true,
          header: () => <CustomHeader />,
        }}
        name={favorites}
        component={Favorites}
      />
      <Tab.Screen
        options={{
          tabBarBadge: cartProductQty > 0 ? cartProductQty : undefined,
          tabBarBadgeStyle: {
            backgroundColor: COLORS.red,
          },
          headerShown: true,
          header: () => <CustomHeader />,
        }}
        name={cart}
        component={Cart}
      />
      <Tab.Screen
        options={{
          headerShown: isLogin ? true : false,
          header: isLogin ? () => <ProfileHeader /> : undefined,
        }}
        name={profile}
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarButton: () => null,
          headerShown: true,
          header: () => <Header />,
        }}
        name={productList}
        component={ProductList}
      />
    </Tab.Navigator>
  );
};

export default memo(TabNavigation);
