import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../home/HomeScreen';
import CreateQuizScreen from '../home/CreateQuiz';
import PlayQuiz from '../home/PlayQuiz';
import MainPlayScreen from '../play/MainPlayScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='createquiz'
        component={CreateQuizScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='playquiz'
        component={PlayQuiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='mainplayscreen'
        component={MainPlayScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
