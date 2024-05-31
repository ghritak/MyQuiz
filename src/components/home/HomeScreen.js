import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import UpperBar from '../ui/UpperBar';
import IconButton from '../ui/IconButton';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <>
      <UpperBar />
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.heading}>
              Hi, <Text style={styles.name}>Ghritak</Text>
            </Text>
            <Text style={styles.slogan}>Create your own quize</Text>
          </View>
          <IconButton onPress={handleLogout}>
            <MaterialIcons name='logout' size={20} color={'white'} />
          </IconButton>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
  },
  name: { color: Colors.primary },
  slogan: { marginTop: 4 },
  container: {
    margin: 10,
  },
});

export default HomeScreen;
