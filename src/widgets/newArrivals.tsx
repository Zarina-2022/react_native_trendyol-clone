import React, { memo, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import WidgetHeader from '../components/ui/WidgetHeader.tsx';
import {widgetContainerStyles} from './styles.ts';
import {useAppDispatch, useAppSelector} from '../app/hooks.ts';
import NewArrivalCard from '../components/home/NewArrivalCard.tsx';
import {
  getNewArrivalProducts,
} from '../store/actions/productsActions.ts';

const NewArrivals: React.FC = () => {
  const dispatch = useAppDispatch();
  const {newArrival} = useAppSelector(state => state.productsState);

  useEffect(() => {
    // dispatch(getProducts({limit: 5})); => we can give limit to data
    // dispatch(getProducts({sort:"desc"})); => we can give sort (a-z(asc)/z-a(desc)) to data
    dispatch(getNewArrivalProducts({limit: 5}));
  }, [dispatch]);

  return (
    <View style={widgetContainerStyles.container}>
      <WidgetHeader
        widgetTitle="New arrivals"
        seeAll="See all"
        category={"women's clothing"}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={newArrival}
        renderItem={({item}) => <NewArrivalCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default memo(NewArrivals);
