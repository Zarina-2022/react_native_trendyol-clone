import {
  Alert,
  FlatList,
  PermissionsAndroid,
  Platform,
  View,
} from 'react-native';
import {generalStyles} from '../../styles/styles';
import widgets from '../../widgets/widgets.json';
import WidgetCard from '../../components/home/WidgetCard';
import {WidgetItem} from '../../modals/widgets/types';
import {useAppDispatch} from '../../app/hooks';
import {useEffect} from 'react';
import {getCart} from '../../store/actions/cartActions';
import messaging from '@react-native-firebase/messaging';
import {getFirestoreNotifications} from '../../store/actions/notificationActions';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  // function to take permission from client to send message:
  const requestUserPermission = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    } else {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    }
  };

  const getToken = async () => {
    const token = await messaging().getToken();
    //console.log('token', token);
  };

  useEffect(() => {
    getToken();
    requestUserPermission();
    dispatch(getCart({userId: 5}));
    dispatch(getFirestoreNotifications());
  }, []);

  return (
    <View style={generalStyles.container}>
      <FlatList<WidgetItem>
        data={widgets}
        renderItem={({item}) => <WidgetCard item={item} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
