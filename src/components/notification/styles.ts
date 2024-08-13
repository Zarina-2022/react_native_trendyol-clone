import {StyleSheet} from 'react-native';
import {width} from '../../utils/constants';
import {COLORS} from '../../theme/colors';

export const notificationCardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width * 0.95,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    padding: 10,
    marginVertical:15
  },
  imageContainer: {
    flex: 1,
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  textContainer: {
    flex: 4,
    gap:10
  },

  deleteIcon: {
    marginRight: 10,
    alignItems:'center',
    gap:10
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color:COLORS.black
  },
  titleContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
  }
});
