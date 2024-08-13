import { Pressable, ScrollView, Text, View} from 'react-native';
import {ProductsInterface} from '../../modals/screens/interface';
import FastImage from 'react-native-fast-image';
import {SCREENS} from '../../utils/routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {COLORS} from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {productDetailsScreenStyles} from './styles';
import CustomButton from '../../components/ui/CustomButton';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {updateCart} from '../../store/actions/cartActions';
import {toggleFavorite} from '../../store/slices/favoritesSlice';
import {
  toggleFavoriteInBestsellers,
  toggleFavoriteInNewArrivals,
  toggleFavoriteInProducts,
} from '../../store/slices/productSlice';

const ProductDetails: React.FC<ProductsInterface> = ({route}) => {
  const {item} = route.params;
  
  const {cart, home, favorites} = SCREENS;
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector(state =>
    state.favoriteState.favorites.some(
      (fav: {id: number}) => fav.id === item.id,
    ),
  );

  function handleFavoritePress() {
    dispatch(toggleFavorite(item));
    dispatch(toggleFavoriteInProducts(item));
    dispatch(toggleFavoriteInBestsellers(item));
    dispatch(toggleFavoriteInNewArrivals(item));
    navigation.navigate(favorites);
  }

  const handlePriceChange = (price: number) => {
    //console.log('Price changed:', price);
  };

  const handleAddToCart = () => {
    const userId = 5;
    const date = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
    const product = {
      productId: item.id,
      quantity: 1,
      id: item.id,
      onChangePrice: handlePriceChange,
    };

    dispatch(updateCart({userId, date, products: [product]}));
    navigation.navigate(cart);
  };

  return (
    <View style={productDetailsScreenStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={productDetailsScreenStyles.imageContainer}>
          <FastImage
            source={{
              uri: item?.image,
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.web,
            }}
            resizeMode={FastImage.resizeMode.contain}
            defaultSource={require('../../assets/images/defaultImg.jpg')}
            style={productDetailsScreenStyles.image}
          />
          <Pressable
            onPress={handleFavoritePress}
            style={productDetailsScreenStyles.iconContainer}>
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={30}
              color={COLORS.red}
            />
          </Pressable>
        </View>

        <View style={productDetailsScreenStyles.detailsContainer}>
          <Text style={productDetailsScreenStyles.title}>{item?.title}</Text>

          <View style={productDetailsScreenStyles.ratingCont}>
            <View style={productDetailsScreenStyles.ratingContainer}>
              <Ionicons name="star" size={16} color={COLORS.lightOrange} />
              <Text style={productDetailsScreenStyles.rating}>
                {item?.rating.rate}/{item?.rating.count}
              </Text>
            </View>

            <View style={productDetailsScreenStyles.priceWrapper}>
              <Text style={productDetailsScreenStyles.price}>
                {item?.price} $
              </Text>
              <Text style={productDetailsScreenStyles.priceText}>
                free shipment
              </Text>
            </View>
          </View>

          <Text style={productDetailsScreenStyles.description}>
            {item?.description}
          </Text>
        </View>
      </ScrollView>
      <View style={productDetailsScreenStyles.buttonContainer}>
        <View style={{flex: 1}}>
          <CustomButton
            title="Buy now"
            BgColor={COLORS.green}
            titleColor={COLORS.white}
            onPress={() => navigation.navigate(home)}
          />
        </View>
        <View style={{flex: 1}}>
          <CustomButton
            title="Add to cart"
            BgColor={COLORS.lightOrange}
            titleColor={COLORS.white}
            onPress={handleAddToCart}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
