import {Pressable, Text, View} from 'react-native';
import {CartProps} from '../../modals/store/interface';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../theme/colors';
import {SCREENS} from '../../utils/routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {favoriteCardStyles} from './styles';
import CustomButton from '../ui/CustomButton';
import {updateCart} from '../../store/actions/cartActions';
import {useAppDispatch} from '../../app/hooks';
import {toggleFavorite} from '../../store/slices/favoritesSlice';
import {
  toggleFavoriteInBestsellers,
  toggleFavoriteInNewArrivals,
  toggleFavoriteInProducts,
} from '../../store/slices/productSlice';

const FavoriteCard: React.FC<CartProps> = ({item}) => {
  const {productDetail, cart} = SCREENS;
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useAppDispatch();

  const handlePriceChange = (price: number) => {
    //console.log('Price changed:', price);
  };

  const handleAddToCart = () => {
    const userId = 5;
    const date = new Date().toISOString().split('T')[0];
    const product = {
      productId: item.id,
      quantity: 1,
      id: item.id,
      onChangePrice: handlePriceChange,
    };

    dispatch(updateCart({userId, date, products: [product]}));
    navigation.navigate(cart);
  };

  const handleFavoritePress = () => {
    dispatch(toggleFavorite(item));
    dispatch(toggleFavoriteInProducts(item));
    dispatch(toggleFavoriteInBestsellers(item));
    dispatch(toggleFavoriteInNewArrivals(item));
  };

  return (
    <Pressable onPress={() => navigation.navigate(productDetail, {item: item})}>
      <View style={favoriteCardStyles.container}>
        <View style={favoriteCardStyles.imageContainer}>
          <FastImage
            source={{
              uri: item?.image,
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.web,
            }}
            resizeMode={FastImage.resizeMode.contain}
            defaultSource={require('../../assets/images/defaultImg.jpg')}
            style={favoriteCardStyles.imageStyle}
          />
        </View>

        <View style={favoriteCardStyles.mainContainer}>
          <View style={favoriteCardStyles.infoContainer}>
            <Text numberOfLines={2} style={favoriteCardStyles.title}>
              {item?.title}
            </Text>
            <View style={favoriteCardStyles.ratingContainer}>
              <Ionicons name="star" size={14} color={COLORS.lightOrange} />
              <Ionicons name="star" size={14} color={COLORS.lightOrange} />
              <Ionicons name="star" size={14} color={COLORS.lightOrange} />
              <Ionicons name="star" size={14} color={COLORS.lightOrange} />
              <Ionicons
                name="star-outline"
                size={14}
                color={COLORS.lightOrange}
              />
              <Text style={favoriteCardStyles.rating} numberOfLines={2}>
                ( {item?.rating.count})
              </Text>
            </View>
            <View style={favoriteCardStyles.priceContainer}>
              <Text style={favoriteCardStyles.oldPrice}>167 $</Text>
              <Text style={favoriteCardStyles.price}>{item?.price} $</Text>
            </View>
          </View>

          <View style={favoriteCardStyles.buttonContainer}>
            <CustomButton
              title="Delete"
              BgColor={COLORS.white}
              titleColor={COLORS.white}
              onPress={handleFavoritePress}
              style={favoriteCardStyles.buttonDelete}
            />
            <CustomButton
              title="Add To Cart"
              BgColor={COLORS.white}
              titleColor={COLORS.green}
              onPress={handleAddToCart}
              style={favoriteCardStyles.buttonCart}
            />
          </View>
        </View>
      </View>

      <View style={favoriteCardStyles.breakline} />
    </Pressable>
  );
};

export default FavoriteCard;
