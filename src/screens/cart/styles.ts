import {StyleSheet} from 'react-native';
import { COLORS } from '../../theme/colors';
import { height, width } from '../../utils/constants';

export const cartScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  button: {
    flex: 2,
  },
  totalPrice: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    gap:2,
  },
  totalPriceText1:{
    fontSize:12,
  },
  totalPriceText2:{
    fontSize:16,
    color:COLORS.green,
    fontWeight:'600'
  },
  buttonCart: {
    borderWidth: 1,
    borderColor: COLORS.loginBlue,
    borderRadius: 4,
    height: height * 0.03,
    width: width * 0.4,
  },
  content: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  emptyScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
