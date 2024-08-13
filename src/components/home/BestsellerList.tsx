import {Text, View} from 'react-native';
import {bestsellerListStyles} from './styles';
import { CategoriesListProps } from '../../modals/widgets/interfaces';

const BestsellerList: React.FC<CategoriesListProps> = ({item}) => {
  return (
    <View style={bestsellerListStyles.container}>
      <Text style={bestsellerListStyles.text}>{item}</Text>
    </View>
  );
};

export default BestsellerList;
