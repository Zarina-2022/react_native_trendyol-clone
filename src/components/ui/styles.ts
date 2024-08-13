import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {height, width} from '../../utils/constants';

export const inputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 3.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.darkOrange,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 8,
  },
  iconSearch: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: COLORS.white,
    fontSize: 16,
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
  bellBadge: {
    backgroundColor: COLORS.darkOrange,
    width: 17,
    height: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    position:'absolute',
    left:18,
    top:-5
  },
  bellBadgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight:'600'
  },
});

export const widgetHeaderStyles = StyleSheet.create({
  widgetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  seeAll: {
    color: COLORS.lightOrange,
  },
});

export const spinnerStyles = StyleSheet.create({
  spinner: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    paddingTop: Platform.OS === 'ios' ? 100 : 200,
  },
});

export const buttonStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.05,
    borderRadius: 5,
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
  },
});

export const emptyScreenStyle = StyleSheet.create({
  container: {
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 22,
    paddingBottom: 10,
  },
  description1: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.gray,
    paddingBottom: 10,
  },
  description2: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.gray,
    paddingBottom: 40,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: height * 0.5,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    height: height * 0.5,
    width: width,
    alignItems: 'center',
  },
});
