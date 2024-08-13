import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {loginScreenStyles} from './styles';
import LottieView from 'lottie-react-native';
import {COLORS} from '../../theme/colors';
import {SCREENS} from '../../utils/routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import {loginSchema} from '../../utils/validationSchema';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {loginUser} from '../../store/actions/authActions';

const Login = () => {
  const {signup, forgetPassword, profile} = SCREENS;
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useAppDispatch();
  const {pending} = useAppSelector(state => state.authState);

  /*
  If you use dispatch inside the Formik/onSubmit like:
      onSubmit={(values)=>dispatch(loginUser(values)}> 
      then use useEffect to navigate to anothe page:

  const {isLogin} = useAppSelector(state => state.authState);
  useEffect(()=>{
    if(isLogin){
      navigation.goBack()
    }
  },[isLogin])
  */

  const handleOnSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    try {
      const resultAction = await dispatch(loginUser(values));
      if (loginUser.fulfilled.match(resultAction)) {
       // console.log('Login successful:', resultAction.payload);
        navigation.goBack();
      } else {
        console.error('Login failed:', resultAction.payload);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={loginScreenStyles.container}>
        <Pressable
          style={loginScreenStyles.goBack}
          onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={30} color={COLORS.pink} />
        </Pressable>
        <View style={loginScreenStyles.logoContainer}>
          <LottieView
            source={require('../../assets/animations/user.json')}
            style={{width: 200, height: 200, alignSelf: 'center'}}
            autoPlay
            loop
          />
        </View>

        <View style={loginScreenStyles.formContainer}>
          <View style={loginScreenStyles.card}>
            <Formik
              initialValues={{
                username: 'mor_2314',
                password: '83r5^_',
              }}
              validationSchema={loginSchema}
              onSubmit={handleOnSubmit}>
              {({handleSubmit, handleChange, values, errors, touched}) => (
                <>
                  <View style={loginScreenStyles.inputContainer}>
                    <TextInput
                      style={loginScreenStyles.input}
                      value={values.username}
                      onChangeText={handleChange('username')}
                      placeholder="Username"
                      autoCapitalize={'none'}
                      placeholderTextColor={COLORS.gray}
                    />
                    {touched.username && errors.username && (
                      <Text style={loginScreenStyles.error}>
                        {errors.username}
                      </Text>
                    )}
                  </View>
                  <View style={loginScreenStyles.inputContainer}>
                    <TextInput
                      style={loginScreenStyles.input}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      placeholder="Password"
                      placeholderTextColor={COLORS.gray}
                      secureTextEntry
                      autoCapitalize={'none'}
                    />
                    {touched.password && errors.password && (
                      <Text style={loginScreenStyles.error}>
                        {errors.password}
                      </Text>
                    )}
                  </View>

                  <Pressable
                    onPress={() => navigation.navigate(forgetPassword)}>
                    <Text style={loginScreenStyles.forgot}>
                      Forgot your password?
                    </Text>
                  </Pressable>
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={loginScreenStyles.button}>
                    {pending ? (
                      <ActivityIndicator color={COLORS.white} />
                    ) : (
                      <Text style={loginScreenStyles.buttonText}>Login</Text>
                    )}
                  </TouchableOpacity>

                  <Pressable onPress={() => navigation.navigate(signup)}>
                    <Text style={loginScreenStyles.newAccount}>
                      Create new account
                    </Text>
                  </Pressable>
                </>
              )}
            </Formik>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
