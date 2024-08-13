import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';

export const profileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    paddingHorizontal: 20,
  },
  buttonCart: {
    paddingHorizontal: 30,
  },
});
export const myAccountStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green,
  },
  avatarContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.green,
    paddingTop: 20,
    paddingBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  name: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  email: {
    color: COLORS.white,
  },
  belowContainer: {
    flex: 1,
    backgroundColor: COLORS.green,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  cardContainer: {
    flexDirection: 'column',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: COLORS.green,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    width: 50,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginRight: 10,
  },
  infoContainer: {
    justifyContent: 'center',
  },
  infoLabel: {
    fontWeight: 'bold',
    color: COLORS.darkGray,
  },
  infoText: {
    marginTop: 3,
    fontWeight: 'bold',
    fontSize: 16,
  },
  logout: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginVertical: 5,
    borderRadius: 10,
    paddingLeft: 10,
  },
  logoutText: {
    marginTop: 3,
    fontWeight: 'bold',
    fontSize: 18,
    color: COLORS.green,
  },
});
