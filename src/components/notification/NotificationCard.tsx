import React, {useEffect} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../theme/colors';
import {SCREENS} from '../../utils/routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../app/hooks';
import {notificationCardStyles} from './styles';
import {NotificationCardProps} from '../../modals/components/props';
import {
  getFirestoreNotifications,
  updateFirestoreNotifications,
} from '../../store/actions/notificationActions';

const NotificationCard: React.FC<NotificationCardProps> = ({item}) => {
  const {productDetail} = SCREENS;
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch();
  }, []);

  const handleDelete = () => {};

  const handlePress = () => {
    navigation.navigate(productDetail, {id: item.productId});
    dispatch(updateFirestoreNotifications(item.id));
    dispatch(getFirestoreNotifications());
  };

  return (
    <Pressable onPress={handlePress} style={notificationCardStyles.container}>
      <View style={notificationCardStyles.imageContainer}>
        <Image
          source={require('../../assets/images/trendyol.png')}
          style={notificationCardStyles.imageStyle}
        />
      </View>

      <View style={notificationCardStyles.textContainer}>
        <Text
          style={[
            notificationCardStyles.title,
            {color: item.hasSeen ? COLORS.black : COLORS.green},
          ]}>
          {item.title}
        </Text>

        <Text style={notificationCardStyles.description}>
          {item.description}
        </Text>
      </View>

      <View style={notificationCardStyles.deleteIcon}>
        <Text>{item.date}</Text>
        <TouchableOpacity onPress={handleDelete}>
          <MaterialIcons name="delete" size={24} color={COLORS.red} />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default NotificationCard;
