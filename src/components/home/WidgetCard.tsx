import {Text, View} from 'react-native';
import {WidgetCardProps} from '../../modals/widgets/props';
import Categories from '../../widgets/categories';
import BestSeller from '../../widgets/bestseller';
import Introduction from '../../widgets/introduction';
import NewArrivals from '../../widgets/newArrivals';
import Special from '../../widgets/special';

const WidgetCard: React.FC<WidgetCardProps> = ({item}) => {
  let ContentComponent;
  switch (item.component) {
    case 'Categories':
      ContentComponent = Categories;
      return <Categories />;
    case 'Introduction':
      ContentComponent = Introduction;
      return <Introduction />;
    case 'Special':
      ContentComponent = Special;
      return <Special />;
    case 'BestSeller':
      ContentComponent = BestSeller;
      return <BestSeller />;
    case 'NewArrivals':
      ContentComponent = NewArrivals;
      return <NewArrivals />;
    default:
      ContentComponent = () => <Text>No data found</Text>;
      break;
  }
  return (
    <View>
      <Text>{item.title}</Text>
      <ContentComponent />
    </View>
  );
};

export default WidgetCard;
