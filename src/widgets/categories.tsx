import React, { memo, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import CategoryList from '../components/home/CategoryList.tsx';
import {categoriesStyles} from './styles.ts';
import {getCategories} from '../store/actions/categoriesActions.ts';
import {useAppDispatch, useAppSelector} from '../app/hooks.ts';

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const {categories} = useAppSelector(
    state => state.categoriesState,
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <View style={categoriesStyles.container}>
      <Text style={categoriesStyles.categoryText}>Categories:</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item}) => <CategoryList item={item} />}
        keyExtractor={(index) => index.toString()}
      />
    </View>
  );
};

export default memo(Categories);
