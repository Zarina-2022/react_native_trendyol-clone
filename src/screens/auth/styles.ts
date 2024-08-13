import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';

export const loginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goBack: {
    alignSelf: 'flex-end',
    marginHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    borderRadius: 4,
    shadowColor: COLORS.pink,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    color: COLORS.black,
    paddingLeft: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: COLORS.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  forgot: {
    alignSelf: 'flex-end',
    color: COLORS.green,
    paddingBottom: 20,
    fontWeight: '500',
    fontSize: 14,
  },
  newAccount: {
    alignSelf: 'center',
    color: COLORS.loginBlue,
    paddingTop: 20,
    fontWeight: '500',
    fontSize: 16,
  },
  error:{
   color: COLORS.pink,
   marginTop:5,
  }
});

export const signupScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goBack: {
    alignSelf: 'flex-end',
    marginHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    borderRadius: 4,
    shadowColor: COLORS.loginBlue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    padding: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    color: COLORS.black,
    paddingLeft: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: COLORS.loginBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  forgot: {
    alignSelf: 'flex-end',
    color: COLORS.loginBlue,
    paddingBottom: 20,
  },
  newAccount: {
    alignSelf: 'center',
    color: COLORS.loginBlue,
    paddingTop: 20,
  },
  signup: {
    alignSelf: 'center',
    marginTop: 30,
    color: COLORS.loginBlue,
    fontWeight: '500',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    gap: 20,
  },
});

export const forgotPasswordScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goBack: {
    alignSelf: 'flex-end',
    marginHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    borderRadius: 4,
    shadowColor: COLORS.green,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    color: COLORS.black,
    paddingLeft: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  forgot: {
    alignSelf: 'flex-end',
    color: COLORS.green,
    paddingBottom: 20,
  },
  newAccount: {
    alignSelf: 'center',
    color: COLORS.green,
    paddingTop: 20,
  },
});
