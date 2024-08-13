import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {height, width} from '../../utils/constants';

export const productListScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
  },
});

export const productDetailsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Only for Android
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 10,
    alignSelf: 'center',
    color: COLORS.black,
  },
  ratingCont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 10,
    color: COLORS.gray,
  },
  description: {
    color: COLORS.gray,
    lineHeight: 20,
  },
  priceWrapper: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  price: {
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.green,
  },
  priceText: {
    fontWeight: '500',
    fontSize: 14,
    color: COLORS.darkOrange,
  },
  image: {
    width: width * 0.7,
    height: height * 0.4,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    borderRadius: 100,
    backgroundColor: COLORS.white,
    padding: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 40,
    marginBottom: 30,
    gap: 10,
  },
});
