import { initializeApp } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBb6lbEqxUAKfFSS-D074WUvmhuMpyR5IQ',
  authDomain: 'myquiz-19cfd.firebaseapp.com',
  projectId: 'myquiz-19cfd',
  storageBucket: 'myquiz-19cfd.appspot.com',
  messagingSenderId: '424333071152',
  appId: '1:424333071152:web:1cfafb8ff5fc3574a5eef5',
  measurementId: 'G-T1VKJVV7V4',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore();
export const storage = getStorage();
