import {Platform, View} from 'react-native';
import {HeaderProps} from '../../modals/navigation/props';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {headerStyles} from './styles';
import CustomInput from '../ui/CustomInput';
import { height } from '../../utils/constants';

const Header: React.FC<HeaderProps> = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        headerStyles.container,
        {
          paddingTop: Platform.OS === 'ios' ? insets.top : insets.top + 15,
          paddingBottom: Platform.OS === 'ios' ? insets.bottom - 18 : insets.bottom + 15,
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
        },
      ]}>
        <CustomInput placeholder='Type the product, category or brand.' />
    </View>
  );
};

export default Header;
