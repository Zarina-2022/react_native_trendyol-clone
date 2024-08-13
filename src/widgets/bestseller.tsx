import React, {memo, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import WidgetHeader from '../components/ui/WidgetHeader.tsx';
import {widgetContainerStyles} from './styles.ts';
import {useAppDispatch, useAppSelector} from '../app/hooks.ts';
import {getBestsellersProducts} from '../store/actions/productsActions.ts';
import BestsellersCard from '../components/home/BestsellersCard.tsx';

const Bestseller: React.FC = () => {
  const dispatch = useAppDispatch();
  const {bestsellers} = useAppSelector(state => state.productsState);

  useEffect(() => {
    dispatch(getBestsellersProducts({limit: 5, sort: 'desc'}));
  }, [dispatch]);
  
  return (
    <View style={widgetContainerStyles.container}>
      <WidgetHeader widgetTitle="Bestsellers" seeAll="See all" category={"jewelery"} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={bestsellers}
        renderItem={({ item }) => <BestsellersCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default memo(Bestseller);
