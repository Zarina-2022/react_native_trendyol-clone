import React, {memo, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SCREENS} from '../../utils/routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {COLORS} from '../../theme/colors';
import CustomButton from '../../components/ui/CustomButton';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {getCart} from '../../store/actions/cartActions';
import CartCard from '../../components/cart/CartCard';
import Spinner from '../../components/ui/Spinner';
import {cartScreenStyles} from './styles';
import LottieView from 'lottie-react-native';
import EmptyScreen from '../../components/ui/EmptyScreen';

const Cart: React.FC = () => {
  const {home} = SCREENS;
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useAppDispatch();
  const {cart, pending, totalPrice} = useAppSelector(state => state.cartState);

  useEffect(() => {
    dispatch(getCart({userId: 5}));
  }, [dispatch]);

  const flattenedCartProducts = cart.reduce((acc: any, {products}: any) => [...acc, ...products], []);

  return (
    <View style={cartScreenStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <View style={cartScreenStyles.content}>
          <FlatList
           data={flattenedCartProducts}
           keyExtractor={item => item.id.toString()}
           renderItem={({item}) => <CartCard key={item.id} item={item} />}
            ListEmptyComponent={
              <View style={cartScreenStyles.emptyScreenContainer}>
                <EmptyScreen
                  image={
                    <LottieView
                      source={require('../../assets/animations/cart.json')}
                      style={{width: 400, height: 400, alignSelf: 'center'}}
                      autoPlay
                      loop
                    />
                  }
                  title="Ohhh... Your cart is empty"
                  description1="but it doesn't have to be."
                  button={
                    <CustomButton
                      title="Shop Now"
                      BgColor={COLORS.blue}
                      titleColor={COLORS.white}
                      onPress={() => navigation.navigate(home)}
                      style={cartScreenStyles.buttonCart}
                    />
                  }
                />
              </View>
            }
          />
          {cart.length > 0 && (
            <View style={cartScreenStyles.footer}>
              <View style={cartScreenStyles.totalPrice}>
                <Text style={cartScreenStyles.totalPriceText1}>
                  Total Price:
                </Text>
                <Text style={cartScreenStyles.totalPriceText2}>
                  ${Math.floor(totalPrice).toFixed(2)}
                </Text>
              </View>
              <View style={cartScreenStyles.button}>
                <CustomButton
                  title="Buy now"
                  BgColor={COLORS.green}
                  titleColor={COLORS.white}
                  onPress={() => navigation.navigate(home)}
                />
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default memo(Cart);
