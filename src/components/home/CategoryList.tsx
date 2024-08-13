import {Pressable, Text} from 'react-native';
import {categoryListStyles} from './styles';
import {CategoriesListProps} from '../../modals/widgets/interfaces';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectCategory} from '../../store/slices/categorySlice';

const CategoryList: React.FC<CategoriesListProps> = ({item}) => {
  const dispatch = useAppDispatch();
  const {selectedCategory} = useAppSelector(state => state.categoriesState);

  const handlePress = () => {
    dispatch(selectCategory(item));
  };

  return (
    <Pressable
      style={
        selectedCategory === item
          ? categoryListStyles.selectedCategory
          : categoryListStyles.container
      }
      onPress={handlePress}>
      <Text
        style={
          selectedCategory === item
            ? categoryListStyles.selectedText
            : categoryListStyles.text
        }>
        {item}
      </Text>
    </Pressable>
  );
};

export default CategoryList;
