import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../home/HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
