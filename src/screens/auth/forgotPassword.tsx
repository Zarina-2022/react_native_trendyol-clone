import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {forgotPasswordScreenStyles} from './styles';
import LottieView from 'lottie-react-native';
import {COLORS} from '../../theme/colors';
import {SCREENS} from '../../utils/routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const {productDetail} = SCREENS;
  const navigation = useNavigation<NavigationProp<any>>();

  const handleSubmit = () => {};
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={forgotPasswordScreenStyles.container}>
        <Pressable
          style={forgotPasswordScreenStyles.goBack}
          onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={30} color={COLORS.green} />
        </Pressable>
        <View style={forgotPasswordScreenStyles.logoContainer}>
          <LottieView
            source={require('../../assets/animations/user.json')}
            style={{width: 200, height: 200, alignSelf: 'center'}}
            autoPlay
            loop
          />
        </View>
        <View style={forgotPasswordScreenStyles.formContainer}>
          <View style={forgotPasswordScreenStyles.card}>
            <View style={forgotPasswordScreenStyles.inputContainer}>
              <TextInput
                style={forgotPasswordScreenStyles.input}
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="Enter a new password"
                placeholderTextColor={COLORS.gray}
              />
            </View>
            <View style={forgotPasswordScreenStyles.inputContainer}>
              <TextInput
                style={forgotPasswordScreenStyles.input}
                value={repeatPassword}
                onChangeText={setRepeatPassword}
                placeholder="Repeat your new password"
                placeholderTextColor={COLORS.gray}
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={forgotPasswordScreenStyles.button}>
              <Text style={forgotPasswordScreenStyles.buttonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
