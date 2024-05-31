import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../auth/LoginScreen';
import SignupScreen from '../auth/SignupScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='signup'
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
