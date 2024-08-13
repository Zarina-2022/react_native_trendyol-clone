import {Platform, Pressable, Text, View} from 'react-native';
import {HeaderProps} from '../../modals/navigation/props';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {profileHeaderStyles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../theme/colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/routes';
import {countNotificationRead} from '../../utils/functions';
import {useAppSelector} from '../../app/hooks';
import {useEffect} from 'react';

const ProfileHeader: React.FC<HeaderProps> = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<any>>();
  const {notifications} = useAppSelector(state => state.notificationState);

  useEffect(() => {
    // Fetch notifications or refresh data if necessary
  }, [notifications]); // Depend on notifications if it's expected to change

  return (
    <>
      <View
        style={[
          profileHeaderStyles.container,
          {
            paddingTop: Platform.OS === 'ios' ? insets.top : insets.top + 20,
            paddingBottom: Platform.OS === 'ios' ? insets.bottom + 40 : insets.bottom + 80,
            paddingLeft: insets.left + 20,
            paddingRight: insets.right + 20,
          },
        ]}>
        <View>
          <View>
            <Text style={profileHeaderStyles.name}>Zarina</Text>
          </View>
        </View>
        <View style={profileHeaderStyles.icons}>
          <View style={profileHeaderStyles.iconsContainer}>
            <Pressable
              onPress={() => navigation.navigate(SCREENS.notification)}
              style={profileHeaderStyles.bellContainer}>
              <MaterialCommunityIcons
                name="bell"
                size={25}
                color={COLORS.white}
              />
              {countNotificationRead(notifications) > 0 && (
                <View style={profileHeaderStyles.bellBadge}>
                  <Text style={profileHeaderStyles.bellBadgeText}>
                    {countNotificationRead(notifications)}
                  </Text>
                </View>
              )}
            </Pressable>
          </View>
        </View>
      </View>
      <View style={profileHeaderStyles.headerList}>
        <Pressable style={profileHeaderStyles.headerListContainer}>
          <Ionicons name="wallet-sharp" size={25} color={COLORS.lightOrange} />
          <Text style={profileHeaderStyles.text}>My Trendyol Wallet</Text>
        </Pressable>
        <Pressable style={profileHeaderStyles.headerListContainer}>
          <FontAwesome5
            name="percentage"
            size={25}
            color={COLORS.lightOrange}
          />
          <Text style={profileHeaderStyles.text}>My Discount Coupons</Text>
        </Pressable>
        <Pressable style={profileHeaderStyles.headerListContainer}>
          <Ionicons
            name="chatbox-ellipses"
            size={25}
            color={COLORS.lightOrange}
          />
          <Text style={profileHeaderStyles.text}>Trendyol Assistant</Text>
        </Pressable>
        <Pressable style={profileHeaderStyles.headerListContainer}>
          <Ionicons name="gift" size={25} color={COLORS.lightOrange} />
          <Text style={profileHeaderStyles.text}>Buy Gift Voucher</Text>
        </Pressable>
      </View>
    </>
  );
};

export default ProfileHeader;
