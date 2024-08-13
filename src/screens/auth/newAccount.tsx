import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {signupScreenStyles} from './styles';
import LottieView from 'lottie-react-native';
import {COLORS} from '../../theme/colors';
import {SCREENS} from '../../utils/routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {productDetail} = SCREENS;
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={signupScreenStyles.container}>
        <Pressable
          style={signupScreenStyles.goBack}
          onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={30} color={COLORS.loginBlue} />
        </Pressable>
        <View style={signupScreenStyles.logoContainer}>
          <LottieView
            source={require('../../assets/animations/user.json')}
            style={{width: 200, height: 200, alignSelf: 'center'}}
            autoPlay
            loop
          />
        </View>
        <View style={signupScreenStyles.formContainer}>
          <View style={signupScreenStyles.card}>
            <View style={signupScreenStyles.inputContainer}>
              <TextInput
                style={signupScreenStyles.input}
                value={name}
                onChangeText={setName}
                placeholder="Name"
                placeholderTextColor={COLORS.gray}
              />
            </View>
            <View style={signupScreenStyles.inputContainer}>
              <TextInput
                style={signupScreenStyles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor={COLORS.gray}
              />
            </View>
            <View style={signupScreenStyles.inputContainer}>
              <TextInput
                style={signupScreenStyles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor={COLORS.gray}
                secureTextEntry
              />
            </View>
            <TouchableOpacity style={signupScreenStyles.button}>
              <Text style={signupScreenStyles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <Text style={signupScreenStyles.signup}>Or Sign Up Using</Text>

            <View style={signupScreenStyles.signupContainer}>
              <Pressable onPress={() => navigation.goBack()}>
                <LottieView
                  source={require('../../assets/animations/google.json')}
                  style={{width: 50, height: 50, alignSelf: 'center'}}
                  autoPlay
                  loop
                />
              </Pressable>
              <Pressable onPress={() => navigation.goBack()}>
                <LottieView
                  source={require('../../assets/animations/instagram.json')}
                  style={{width: 50, height: 50, alignSelf: 'center'}}
                  autoPlay
                  loop
                />
              </Pressable>
              <Pressable onPress={() => navigation.goBack()}>
                <LottieView
                  source={require('../../assets/animations/github.json')}
                  style={{width: 37, height: 37, alignSelf: 'center'}}
                  autoPlay
                  loop
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
