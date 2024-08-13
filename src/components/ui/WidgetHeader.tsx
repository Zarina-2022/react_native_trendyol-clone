import {Pressable, Text, View} from 'react-native';
import {WidgetHeaderProps} from '../../modals/components/props';
import {widgetHeaderStyles} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/routes';

const WidgetHeader: React.FC<WidgetHeaderProps> = ({
  widgetTitle,
  seeAll,
  category,
}) => {
  const {productList} = SCREENS;

  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={widgetHeaderStyles.widgetContainer}>
      <Text style={widgetHeaderStyles.title}>{widgetTitle}</Text>
      <Pressable
        onPress={() =>
          navigation.navigate(productList, {category: category})
        }>
        <Text style={widgetHeaderStyles.seeAll}>{seeAll}</Text>
      </Pressable>
    </View>
  );
};

export default WidgetHeader;
