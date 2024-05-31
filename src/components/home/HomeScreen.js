import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Button from '../ui/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <View>
      <Button onPress={handleLogout}>
        <Text>Log out</Text>
      </Button>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
