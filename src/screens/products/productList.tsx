import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {RouteInterface} from '../../modals/screens/interface';
import {getProducts} from '../../store/actions/productsActions';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import ProductsCard from '../../components/home/productsCard';
import {productListScreenStyles} from './styles';
import {width} from '../../utils/constants';
import Spinner from '../../components/ui/Spinner';
import {COLORS} from '../../theme/colors';

const ProductList: React.FC<RouteInterface> = ({route}) => {
  const {category} = route.params;
  const dispatch = useAppDispatch();
  const {products, pending} = useAppSelector(state => state.productsState);

  useEffect(() => {
    dispatch(getProducts({sort: 'asc', category: category}));
  }, [dispatch, category]);

  return (
    <View style={productListScreenStyles.container}>
      {pending ? (
        <Spinner color={COLORS.green} />
      ) : (
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
          }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={products}
          renderItem={({item}) => (
            <ProductsCard item={item} style={{width: width / 2 - 20}} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default ProductList;
