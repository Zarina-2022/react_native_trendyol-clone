import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../utils/routes';
import TabNavigation from './TabNavigation';
import Header from '../components/header/Header';
import ProductDetails from '../screens/products/productDetails';
import ProductList from '../screens/products/productList';
import CustomHeader from '../components/header/CustomHeader';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/newAccount';
import ForgotPassword from '../screens/auth/forgotPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '../app/hooks';
import {userLoginCheck} from '../store/slices/authSlice';
import MyAccount from '../screens/profile/myAccount';
import NotificationScreen from '../screens/notification';
import messaging from '@react-native-firebase/messaging';
import {addMessageNotificationsRemote, getFirestoreNotifications} from '../store/actions/notificationActions';

const Stack = createNativeStackNavigator();

const RootNavigation: React.FC = () => {
  const {
    tab,
    productDetail,
    productList,
    login,
    signup,
    forgetPassword,
    myAccount,
    notification,
  } = SCREENS;
  const dispatch = useAppDispatch();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      // console.log('TOKEN', value);

      if (value !== null) {
        dispatch(userLoginCheck(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      //Alert.alert('A new FCM message arrived!:', JSON.stringify(remoteMessage));
      dispatch(
        addMessageNotificationsRemote({
          hasSeen: JSON.parse(remoteMessage.data?.hasSeen || 'false'),
          url: remoteMessage.data?.url || '',
          productId: remoteMessage.data?.productId || '',
          title: remoteMessage.notification?.title || '',
          description: remoteMessage.notification?.body || '',
          date: '15:34',
        }),
      );
      dispatch(getFirestoreNotifications());
    });
    return unsubscribe;
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={tab}
        component={TabNavigation}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <CustomHeader />,
        }}
        name={productDetail}
        component={ProductDetails}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
        name={productList}
        component={ProductList}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={login}
        component={Login}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={signup}
        component={Signup}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={forgetPassword}
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <CustomHeader title="My Account" />,
        }}
        name={myAccount}
        component={MyAccount}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <CustomHeader title="Notifications" />,
        }}
        name={notification}
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
