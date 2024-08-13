import {View, Text, Pressable} from 'react-native';
import {COLORS} from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {profileCardStyles} from './styles';
import {SCREENS} from '../../utils/routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { ProfileCardProps } from '../../modals/components/props';

const ProfileCard:React.FC<ProfileCardProps> = ({user}) => {
  const {myAccount} = SCREENS;
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={profileCardStyles.container}>
      <Pressable style={profileCardStyles.listContainer}>
        <View style={profileCardStyles.iconContainer}>
          <MaterialCommunityIcons
            name="shopping-search"
            size={24}
            color={COLORS.darkGray}
          />
        </View>
        <Text style={profileCardStyles.text}>
          The ones you have visited before
        </Text>
      </Pressable>

      <Pressable style={profileCardStyles.listContainer}>
        <View style={profileCardStyles.iconContainer}>
          <FontAwesome name="mobile-phone" size={32} color={COLORS.darkGray} />
        </View>
        <Text style={profileCardStyles.text}>Digital services</Text>
      </Pressable>

      <Pressable style={profileCardStyles.listContainer}>
        <View style={profileCardStyles.iconContainer}>
          <FontAwesome name="envelope" size={20} color={COLORS.darkGray} />
        </View>
        <Text style={profileCardStyles.text}>My messages</Text>
      </Pressable>

      <Pressable style={profileCardStyles.listContainer}>
        <View style={profileCardStyles.iconContainer}>
          <Ionicons name="storefront" size={22} color={COLORS.darkGray} />
        </View>
        <Text style={profileCardStyles.text}>Stores I follow</Text>
      </Pressable>

      <Pressable style={profileCardStyles.listContainer}>
        <View style={profileCardStyles.iconContainer}>
          <MaterialCommunityIcons
            name="cards-diamond"
            size={26}
            color={COLORS.darkGray}
          />
        </View>
        <Text style={profileCardStyles.text}>Trendyol elite</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate(myAccount, { user })}
        style={profileCardStyles.listContainer}>
        <View style={profileCardStyles.iconContainer}>
          <Ionicons name="settings-sharp" size={24} color={COLORS.darkGray} />
        </View>
        <Text style={profileCardStyles.text}>My account</Text>
      </Pressable>

      <Pressable style={profileCardStyles.listContainer}>
        <View style={profileCardStyles.iconContainer}>
          <Entypo name="help-with-circle" size={20} color={COLORS.darkGray} />
        </View>
        <Text style={profileCardStyles.text}>Support</Text>
      </Pressable>
    </View>
  );
};

export default ProfileCard;
