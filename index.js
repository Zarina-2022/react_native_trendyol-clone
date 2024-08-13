/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCOqNE02sFlDZgNRCmw1NG-wk00d7sMaNw',
    projectId: 'mapnotes-290b8',
    storageBucket: 'mapnotes-290b8.appspot.com',
    messagingSenderId: "952472982570",
    appId: '1:952472982570:android:7a850bf918d905dd1b9f53',
  };
  
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  
// Handle background messages
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
