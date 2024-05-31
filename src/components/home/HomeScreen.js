import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import UpperBar from '../ui/UpperBar';
import IconButton from '../ui/IconButton';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

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
            <Text style={styles.slogan}>Create your own quiz</Text>
          </View>
          {/* <IconButton onPress={handleLogout}>
            <MaterialIcons name='logout' size={20} color={'white'} />
          </IconButton> */}
          <IconButton onPress={() => navigation.navigate('createquiz')}>
            <MaterialCommunityIcons name='plus' size={20} color={'white'} />
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
