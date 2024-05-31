import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './components/stacks/AuthStack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { ActivityIndicator, View } from 'react-native';
import HomeStack from './components/stacks/HomeStack';

const Stack = createStackNavigator();

const Route = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }

      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <View>
        <ActivityIndicator size={'large'} />
      </View>
    );

  if (!authenticated) {
    return <AuthStack />;
  }

  return <HomeStack />;
};

export default Route;
