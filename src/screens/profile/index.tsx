import { View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import EmptyScreen from '../../components/ui/EmptyScreen';
import CustomButton from '../../components/ui/CustomButton';
import {COLORS} from '../../theme/colors';
import LottieView from 'lottie-react-native';
import {SCREENS} from '../../utils/routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {profileScreenStyles} from './styles';
import ProfileCard from '../../components/profile/ProfileCard';
import {getUserInfo} from '../../store/actions/authActions';

const Profile: React.FC = () => {
  const {isLogin,user} = useAppSelector(state => state.authState);
  const {login} = SCREENS;
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLogin && !user) {
      dispatch(getUserInfo({ userId: 5 }));
    }
  }, [isLogin, user,dispatch]);


  return (
    <View style={profileScreenStyles.container}>
      {isLogin ? (
        <ProfileCard  user={user} />
      ) : (
        <EmptyScreen
          image={
            <LottieView
              source={require('../../assets/animations/login.json')}
              style={{width: 300, height: 300, alignSelf: 'center'}}
              autoPlay
              loop
            />
          }
          title="Please login "
          description1="to continue using this app."
          button={
            <CustomButton
              title="Login"
              BgColor={COLORS.profileButton}
              titleColor={COLORS.white}
              onPress={() => navigation.navigate(login)}
              style={profileScreenStyles.buttonCart}
            />
          }
        />
      )}
    </View>
  );
};

export default Profile;
