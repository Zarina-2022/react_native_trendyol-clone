import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {getCart} from '../../store/actions/cartActions';
import Spinner from '../../components/ui/Spinner';
import FavoriteCard from '../../components/favorites/FavoriteCard';
import {favouritesScreenStyles} from './styles';
import EmptyScreen from '../../components/ui/EmptyScreen';
import LottieView from 'lottie-react-native';
import CustomButton from '../../components/ui/CustomButton';
import {COLORS} from '../../theme/colors';
import {favoriteCardStyles} from '../../components/favorites/styles';
import {SCREENS} from '../../utils/routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const Favorites: React.FC = () => {
  const dispatch = useAppDispatch();
  const {favorites, pending} = useAppSelector(state => state.favoriteState);
  const navigation = useNavigation<NavigationProp<any>>();
  const {home} = SCREENS;

  useEffect(() => {
    dispatch(getCart({userId: 5}));
  }, [dispatch]);

  return (
    <View style={favouritesScreenStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <FavoriteCard item={item} />}
          ListEmptyComponent={
            <EmptyScreen
              image={
                <LottieView
                  source={require('../../assets/animations/heart.json')}
                  style={{width: 300, height: 300, alignSelf: 'center'}}
                  autoPlay
                  loop
                />
              }
              title="It's quite empty here."
              description1="You have no favorites yet."
              description2="Why not add one?"
              button={
                <CustomButton
                  title="Add Now"
                  BgColor={COLORS.blue}
                  titleColor={COLORS.white}
                  onPress={() => navigation.navigate(home)}
                  style={favoriteCardStyles.emptyScreenButton}
                />
              }
            />
          }
        />
      )}
    </View>
  );
};

export default Favorites;
