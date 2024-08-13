import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/constants';
import {COLORS} from '../../theme/colors';

export const cartCardStyles = StyleSheet.create({
  container: {
    width: width * 0.9,
    marginHorizontal: 8,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Only for Android
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: height * 0.05,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.lightGray,
    paddingHorizontal: 10,
    borderTopLeftRadius:8,
    borderTopRightRadius:8,

  },
  shipmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:5
  },
  imageStyle: {
    width: width * 0.3,
    height: height * 0.12,
  },
  infoContainer: {
    flex: 4,
    paddingHorizontal:5
  },
  title: {
    paddingVertical: 5,
    fontWeight: '600',
  },
  description: {
    color: COLORS.gray,
    fontSize:12,
  },
  price: {
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal:5
  },
  counterContainer: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal:10
  },
  priceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  oldPrice:{
    color:COLORS.gray,
    textDecorationLine: 'line-through',
  }
});
