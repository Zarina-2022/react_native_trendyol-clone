import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {height, width} from '../../utils/constants';

export const categoryListStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
    margin: 5,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  text: {
    fontSize: 14,
    color: COLORS.black,
  },
  selectedText: {
    fontSize: 14,
    color: COLORS.white,
  },
  selectedCategory: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.darkOrange,
    backgroundColor: COLORS.darkOrange,
    margin: 5,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});

export const bestsellerListStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
    margin: 5,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  text: {
    fontSize: 14,
  },
});

export const newArrivalCardStyles = StyleSheet.create({
  container: {
    width: width * 0.4,
    height: height * 0.26,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 5,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Only for Android
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 10,
    paddingHorizontal: 5,
    width: '100%',
    textAlign: 'center',
    color: COLORS.white,
    backgroundColor: COLORS.lightOrange,
  },
  description: {
    color: COLORS.gray,
  },
  price: {
    color: COLORS.lightOrange,
    fontWeight: '500',
  },
  image: {
    width: width * 0.3,
    height: height * 0.12,
  },
  iconContainer: {
    position: 'absolute',
    right: 5,
    top: 5,
    borderRadius: 100,
    backgroundColor: COLORS.white,
    padding: 3,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Only for Android
  },
  priceContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 10,
  },
});
