import Ionicons from 'react-native-vector-icons/Ionicons';
import MatComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabIconsProps } from '../modals/navigation/props';
import { memo } from 'react';

const TabIcons: React.FC<TabIconsProps> = ({ focused, color, size, name }) => {
  switch (name) {
    case 'home':
      return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
    case 'trendyol':
      return <MatComIcons name={focused ? 'bicycle-basket' : 'bicycle'} size={size} color={color} />;
    case 'favorites':
      return <Ionicons name={focused ? 'heart' : 'heart-outline'} size={size} color={color} />;
    case 'cart':
      return <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size} color={color} />;
    case 'profile':
      return <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />;
    default:
      return null;
  }
};

export default memo(TabIcons);
