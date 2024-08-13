import React, {memo, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import WidgetHeader from '../components/ui/WidgetHeader';
import {widgetContainerStyles} from './styles';
import {getProducts} from '../store/actions/productsActions';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import ProductsCard from '../components/home/productsCard';

const Special = () => {
  const dispatch = useAppDispatch();
  const {products} = useAppSelector(state => state.productsState);
  const {selectedCategory} = useAppSelector(state => state.categoriesState);

  useEffect(() => {
    dispatch(
      getProducts({
        category: selectedCategory,
        limit: 5,
        sort: 'asc',
      }),
    );
  }, [selectedCategory]);

  return (
    <View style={widgetContainerStyles.container}>
      <WidgetHeader
        widgetTitle="Zarina, here are special products for you"
        seeAll="See all"
        category={selectedCategory}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => <ProductsCard item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default memo(Special);
