import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {height, width} from '../../utils/constants';

export const headerStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
});

export const customHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  icons: {
    height: height * 0.04,
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  bellContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 50,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
});

export const profileHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.lightOrange,
  },
  icons: {
    height: height * 0.04,
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  bellContainer: {
    borderRadius: 50,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  bellBadge: {
    backgroundColor: COLORS.white,
    width: 17,
    height: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    borderColor:COLORS.darkOrange,
    borderWidth:1,
    position:'absolute',
    left:18,
    top:-5
  },
  bellBadgeText: {
    color: COLORS.darkOrange,
    fontSize: 10,
    fontWeight:'600'
  },
  name: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: '500',
  },
  headerList: {
    flexDirection: 'row',
    width: width * 0.92,
    height: height * 0.1,
    backgroundColor: COLORS.lightGray,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    position: 'absolute',
    top: Platform.OS === 'ios' ? height * 0.13 : height * 0.09,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,
  },
  headerListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
  },
});
