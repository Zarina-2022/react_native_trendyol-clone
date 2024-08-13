import {Pressable, Text, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome6';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import {CustomInputProps} from '../../modals/components/props';
import {inputStyles} from './styles';
import {COLORS} from '../../theme/colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/routes';
import {countNotificationRead} from '../../utils/functions';
import {useAppSelector} from '../../app/hooks';
import {useEffect} from 'react';

const CustomInput: React.FC<CustomInputProps> = ({placeholder}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const {notifications} = useAppSelector(state => state.notificationState);

  useEffect(() => {
    // Fetch notifications or refresh data if necessary
  }, [notifications]); // Depend on notifications if it's expected to change

  return (
    <View style={inputStyles.container}>
      <View style={inputStyles.inputContainer}>
        <Pressable>
          <Ionicons
            name="search"
            size={20}
            color={COLORS.darkOrange}
            style={inputStyles.iconSearch}
          />
        </Pressable>
        <TextInput
          style={inputStyles.input}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
        />
      </View>
      <View style={inputStyles.iconsContainer}>
        <Pressable>
          <FontAwesomeIcons
            name="envelope"
            size={20}
            color={COLORS.darkOrange}
          />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(SCREENS.notification)}
          style={inputStyles.bellContainer}>
          <FontistoIcons name="bell" size={20} color={COLORS.darkOrange} />
          {countNotificationRead(notifications) >0 && (
            <View style={inputStyles.bellBadge}>
              <Text style={inputStyles.bellBadgeText}>
                {countNotificationRead(notifications)}
              </Text>
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default CustomInput;
