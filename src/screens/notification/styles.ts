import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {height, width} from '../../utils/constants';

export const notificationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.notificationBg,
    padding: 10,
  },
  emptyScreenButton: {
    borderWidth: 1,
    borderColor: COLORS.green,
    backgroundColor: COLORS.green,
    borderRadius: 10,
    height: height * 0.05,
    width: width * 0.6,
    fontWeight: '700',
  },
});
