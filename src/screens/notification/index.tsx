import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import Spinner from '../../components/ui/Spinner';
import EmptyScreen from '../../components/ui/EmptyScreen';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import CustomButton from '../../components/ui/CustomButton';
import {COLORS} from '../../theme/colors';
import {SCREENS} from '../../utils/routes';
import {notificationStyles} from './styles';
import {getFirestoreNotifications} from '../../store/actions/notificationActions';
import NotificationCard from '../../components/notification/NotificationCard';

const NotificationScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const {pending, notifications} = useAppSelector(
    state => state.notificationState,
  );
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    dispatch(getFirestoreNotifications());
  }, [dispatch]);

  //console.log(notifications);

  return (
    <View style={notificationStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <NotificationCard item={item} />}
          ListEmptyComponent={
            <EmptyScreen
              image={
                <LottieView
                  source={require('../../assets/animations/notification.json')}
                  style={{width: 300, height: 300, alignSelf: 'center'}}
                  autoPlay
                  loop
                />
              }
              title="No Notifications Yet"
              description1="You have no notifications right now."
              description2="Come back later."
              button={
                <CustomButton
                  title="Return to home page"
                  BgColor={COLORS.blue}
                  titleColor={COLORS.white}
                  onPress={() => navigation.navigate(SCREENS.home)}
                  style={notificationStyles.emptyScreenButton}
                />
              }
            />
          }
        />
      )}
    </View>
  );
};

export default NotificationScreen;
