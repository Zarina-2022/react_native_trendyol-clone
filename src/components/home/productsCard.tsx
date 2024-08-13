import React, { memo, useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {NewArrivalsCardProps} from '../../modals/screens/interface';
import FastImage from 'react-native-fast-image';
import {newArrivalCardStyles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../theme/colors';
import {SCREENS} from '../../utils/routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../app/hooks';
import {toggleFavorite} from '../../store/slices/favoritesSlice';
import {toggleFavoriteInProducts} from '../../store/slices/productSlice';

const ProductsCard: React.FC<NewArrivalsCardProps> = ({item, style}) => {
  const {productDetail, favorites} = SCREENS;
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useAppDispatch();

  // State to manage favorite status locally
  const [isFavorite, setIsFavorite] = useState(item.favorite);

  useEffect(() => {
    setIsFavorite(item.favorite);
  }, [item.favorite, favorites]);

  const handleFavoritePress = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    dispatch(toggleFavorite(item));
    dispatch(toggleFavoriteInProducts(item));

    // Navigate to favorites screen only when item is added to favorites
    if (newFavoriteStatus) {
      navigation.navigate(favorites);
    }
  };
  return (
    <Pressable
      onPress={() => navigation.navigate(productDetail, {item: item})}
      style={[newArrivalCardStyles.container, style]}>
      <FastImage
        source={{
          uri: item.image,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.web,
        }}
        resizeMode={FastImage.resizeMode.contain}
        defaultSource={require('../../assets/images/defaultImg.jpg')}
        style={newArrivalCardStyles.image}
      />
      <Text numberOfLines={1} style={newArrivalCardStyles.title}>
        {item.title}
      </Text>
      <Text numberOfLines={2} style={newArrivalCardStyles.description}>
        {item.description}
      </Text>

      <View style={newArrivalCardStyles.priceContainer}>
        <Text style={newArrivalCardStyles.price}>{item.price} $</Text>
        <Ionicons name="arrow-forward" size={20} color={COLORS.green} />
      </View>

      <Pressable
        onPress={handleFavoritePress}
        style={newArrivalCardStyles.iconContainer}>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={20}
          color={COLORS.red}
        />
      </Pressable>
    </Pressable>
  );
};

export default memo(ProductsCard);
