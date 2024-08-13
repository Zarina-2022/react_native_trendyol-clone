import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/constants';
import {COLORS} from '../../theme/colors';

export const favoriteCardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width,
    marginVertical: 15,
    paddingHorizontal: 10,
    margin: 'auto',
  },
  breakline: {
    height: 1,
    width: width,
    backgroundColor: COLORS.gray,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  imageStyle: {
    width: width * 0.3,
    height: height * 0.12,
  },
  mainContainer: {
    flex: 3,
    paddingLeft: 10,
  },
  infoContainer: {
    paddingHorizontal: 10,

  },
  title: {
    paddingVertical: 5,
    fontWeight: '600',
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 5,
  },

  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:10
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 5,
    color: COLORS.green,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingLeft: 10,
    gap:5,
  },
  buttonCart: {
    borderWidth: 1,
    borderColor: COLORS.loginBlue,
    borderRadius: 4,
    height: height * 0.03,
    width: width * 0.4,
  },
  buttonDelete: {
    borderWidth: 1,
    borderColor: COLORS.darkOrange,
    backgroundColor:COLORS.darkOrange,
    borderRadius: 4,
    height: height * 0.03,
    width: width * 0.2,
  },
  emptyScreenButton:{
    borderWidth: 1,
    borderColor: COLORS.blue,
    backgroundColor:COLORS.blue,
    borderRadius: 4,
    height: height * 0.04,
    width: width * 0.4,
  }
});
