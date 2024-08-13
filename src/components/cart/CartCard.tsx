import React, {useEffect, useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {CartProps, Product} from '../../modals/store/interface';
import {PRODUCTS_URL} from '../../api/urls';
import {getRequest} from '../../api/verbs';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../theme/colors';
import {cartCardStyles} from './styles';
import {ProductTitleProps} from '../../modals/screens/interface';
import {SCREENS} from '../../utils/routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {deleteCartItem, updateTotalPrice} from '../../store/slices/cartSlice';

// to limit number of characters in title etc...
const ProductTitle: React.FC<ProductTitleProps> = ({
  title = '',
  numOfCharacters = 20,
}) => (
  <Text style={cartCardStyles.title}>
    {title.length > numOfCharacters
      ? `${title.slice(0, numOfCharacters)}...`
      : title}
  </Text>
);

const CartCard: React.FC<{item: CartProps}> = ({item}) => {
  const [product, setProduct] = useState<Product | null>(null);
  const {productDetail} = SCREENS;
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector(state => state.cartState.totalPrice);

  useEffect(() => {
    if (item.productId) {
      const productUrl: string = `${PRODUCTS_URL}/${item.productId}`;
      getRequest(productUrl).then(data => {
        if (data && data.data) {
          setProduct(data.data);
          dispatch(updateTotalPrice(data.data.price * (item.quantity ?? 1)));
        }
      })
    }
  }, [item.productId, item.quantity, dispatch]);

  const handleDelete = () => {
    if (product && item.quantity) {
      dispatch(deleteCartItem(product.id));
      dispatch(updateTotalPrice(-(product.price * item.quantity)));
    }
  };

  return (
    <Pressable
      onPress={() => navigation.navigate(productDetail, {item: product})}
      style={cartCardStyles.container}>
      <View style={cartCardStyles.headerContainer}>
        <TouchableOpacity onPress={handleDelete}>
          <MaterialIcons name="delete" size={24} color={COLORS.red} />
        </TouchableOpacity>
        <View style={cartCardStyles.shipmentContainer}>
          <Ionicons name="checkmark-circle" size={20} color={COLORS.green} />
          <Text>Free shipment</Text>
        </View>
      </View>

      <View style={cartCardStyles.itemContainer}>
        <View style={cartCardStyles.imageContainer}>
          <FastImage
            source={{
              uri: product?.image,
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.web,
            }}
            resizeMode={FastImage.resizeMode.contain}
            defaultSource={require('../../assets/images/defaultImg.jpg')}
            style={cartCardStyles.imageStyle}
          />
        </View>

        <View style={cartCardStyles.infoContainer}>
          <ProductTitle title={product?.title ?? ''} numOfCharacters={20} />
          <Text style={cartCardStyles.description} numberOfLines={2}>
            {product?.description ?? ''}
          </Text>
          <View style={cartCardStyles.counterContainer}>
            <Text>Quantity: {item.quantity}</Text>
            <View style={cartCardStyles.priceContainer}>
              <Text style={cartCardStyles.oldPrice}>197 $</Text>
              <Text style={cartCardStyles.price}>{product?.price} $</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CartCard;
