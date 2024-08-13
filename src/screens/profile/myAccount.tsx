import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {myAccountStyles} from './styles';
import {COLORS} from '../../theme/colors';
import {useAppDispatch} from '../../app/hooks';
import {logoutUser} from '../../store/actions/authActions';
import {SCREENS} from '../../utils/routes';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {MyAccountRouteProp} from '../../modals/screens/interface';
import FastImage from 'react-native-fast-image';

const MyAccount = () => {
  const route = useRoute<MyAccountRouteProp>();
  const {user} = route.params;
  const dispatch = useAppDispatch();
  const {login} = SCREENS;
  const navigation = useNavigation<NavigationProp<any>>();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.navigate(login);
  };

  return (
    <View style={myAccountStyles.container}>
      <View style={myAccountStyles.avatarContainer}>
        {user?.image ? (
          <FastImage
            source={{
              uri: user?.image,
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.immutable,
            }}
            resizeMode={FastImage.resizeMode.contain}
            defaultSource={require('../../assets/images/user.jpg')}
            // tintColor={COLORS.pink} instead of default image you can display solid color
            style={myAccountStyles.avatar}
          />
        ) : (
          <Image
            source={require('../../assets/images/user.jpg')}
            resizeMode="contain"
            style={myAccountStyles.avatar}
          />
        )}
        <Text style={myAccountStyles.name}>
          {user?.name?.firstname} {user?.name?.lastname}
        </Text>
        <Text style={myAccountStyles.email}>{user?.email}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={myAccountStyles.belowContainer}>
          <View style={myAccountStyles.cardContainer}>
            <Text style={myAccountStyles.cardTitle}>Account Info</Text>
            <View style={myAccountStyles.row}>
              <View style={myAccountStyles.iconContainer}>
                <FontAwesome name="user" size={20} color={COLORS.lightOrange} />
              </View>
              <View style={myAccountStyles.infoContainer}>
                <Text style={myAccountStyles.infoLabel}>Username:</Text>
                <Text style={myAccountStyles.infoText}>{user?.username}</Text>
              </View>
            </View>
            <View style={myAccountStyles.row}>
              <View style={myAccountStyles.iconContainer}>
                <MaterialIcons
                  name="password"
                  size={25}
                  color={COLORS.lightOrange}
                />
              </View>
              <View style={myAccountStyles.infoContainer}>
                <Text style={myAccountStyles.infoLabel}>Password:</Text>
                <Text style={myAccountStyles.infoText}>{user?.password}</Text>
              </View>
            </View>
          </View>

          <View style={myAccountStyles.cardContainer}>
            <Text style={myAccountStyles.cardTitle}>Location</Text>
            <View style={myAccountStyles.row}>
              <View style={myAccountStyles.iconContainer}>
                <MaterialIcons
                  name="location-city"
                  size={25}
                  color={COLORS.lightOrange}
                />
              </View>
              <View style={myAccountStyles.infoContainer}>
                <Text style={myAccountStyles.infoLabel}>City:</Text>
                <Text style={myAccountStyles.infoText}>
                  {user?.address.city}
                </Text>
              </View>
            </View>
            <View style={myAccountStyles.row}>
              <View style={myAccountStyles.iconContainer}>
                <FontAwesome name="road" size={20} color={COLORS.lightOrange} />
              </View>
              <View style={myAccountStyles.infoContainer}>
                <Text style={myAccountStyles.infoLabel}>Street:</Text>
                <Text style={myAccountStyles.infoText}>
                  {user?.address.street}
                </Text>
              </View>
            </View>
            <View style={myAccountStyles.row}>
              <View style={myAccountStyles.iconContainer}>
                <MaterialIcons
                  name="numbers"
                  size={20}
                  color={COLORS.lightOrange}
                />
              </View>
              <View style={myAccountStyles.infoContainer}>
                <Text style={myAccountStyles.infoLabel}>Number:</Text>
                <Text style={myAccountStyles.infoText}>
                  {user?.address.number}
                </Text>
              </View>
            </View>
            <View style={myAccountStyles.row}>
              <View style={myAccountStyles.iconContainer}>
                <MaterialCommunityIcons
                  name="unicode"
                  size={20}
                  color={COLORS.lightOrange}
                />
              </View>
              <View style={myAccountStyles.infoContainer}>
                <Text style={myAccountStyles.infoLabel}>Zipcode:</Text>
                <Text style={myAccountStyles.infoText}>
                  {user?.address.zipcode}
                </Text>
              </View>
            </View>
          </View>

          <View style={myAccountStyles.cardContainer}>
            <Text style={myAccountStyles.cardTitle}>Contacts</Text>
            <View style={myAccountStyles.row}>
              <View style={myAccountStyles.iconContainer}>
                <FontAwesome
                  name="mobile-phone"
                  size={25}
                  color={COLORS.lightOrange}
                />
              </View>
              <View style={myAccountStyles.infoContainer}>
                <Text style={myAccountStyles.infoLabel}>Phone:</Text>
                <Text style={myAccountStyles.infoText}>{user?.phone}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleLogout}
            style={myAccountStyles.logout}>
            <View style={myAccountStyles.iconContainer}>
              <MaterialIcons
                name="logout"
                size={25}
                color={COLORS.lightOrange}
              />
            </View>
            <View style={myAccountStyles.infoContainer}>
              <Text style={myAccountStyles.logoutText}>Log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyAccount;
