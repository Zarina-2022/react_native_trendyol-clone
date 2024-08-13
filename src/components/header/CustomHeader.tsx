import {Platform, Pressable, Text, View} from 'react-native';
import {HeaderProps} from '../../modals/navigation/props';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {customHeaderStyles} from './styles';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome6';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import {COLORS} from '../../theme/colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/routes';
import {inputStyles} from '../ui/styles';
import {countNotificationRead} from '../../utils/functions';
import {useEffect} from 'react';
import {useAppSelector} from '../../app/hooks';

const CustomHeader: React.FC<HeaderProps> = ({title}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<any>>();
  const {notifications} = useAppSelector(state => state.notificationState);

  useEffect(() => {
    // Fetch notifications or refresh data if necessary
  }, [notifications]); // Depend on notifications if it's expected to change

  return (
    <View
      style={[
        customHeaderStyles.container,
        {
          paddingTop: Platform.OS === 'ios' ? insets.top : insets.top + 20,
          paddingBottom: Platform.OS === 'ios' ? insets.bottom - 18 : insets.bottom + 15,
          paddingLeft: insets.left + 20,
          paddingRight: insets.right + 20,
        },
      ]}>
      <View>
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesomeIcons
            name="chevron-left"
            size={20}
            color={COLORS.darkOrange}
          />
        </Pressable>
      </View>
      <View>
        <Text style={customHeaderStyles.title}>{title}</Text>
      </View>
      <View style={customHeaderStyles.icons}>
        <View style={customHeaderStyles.iconsContainer}>
          <Pressable>
            <FontAwesomeIcons
              name="envelope"
              size={20}
              color={COLORS.darkOrange}
            />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate(SCREENS.notification)}
            style={customHeaderStyles.bellContainer}>
            <FontistoIcons name="bell" size={20} color={COLORS.darkOrange} />
            {countNotificationRead(notifications) > 0 && (
              <View style={inputStyles.bellBadge}>
                <Text style={inputStyles.bellBadgeText}>
                  {countNotificationRead(notifications)}
                </Text>
              </View>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;
