import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../../firebaseConfig';
import UpperBar from '../ui/UpperBar';
import IconButton from '../ui/IconButton';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import FormButton from '../ui/FormButton';
import { style } from '../../constants/styles';
import QuizHomeCard from '../quiz/QuizHomeCard';
import HomeHeader from './HomeHeader';
import MyQuizes from './MyQuizes';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <>
      <UpperBar />
      <View style={styles.container}>
        <FlatList
          data={[0]}
          contentContainerStyle={{ height: '100%' }}
          renderItem={() => {
            return (
              <>
                <HomeHeader />
                <View>
                  <FormButton onPress={() => navigation.navigate('playquiz')}>
                    <Text style={style.buttonTextWhite}>Play Quiz</Text>
                  </FormButton>
                </View>

                <MyQuizes />

                <FormButton onPress={handleLogout}>
                  <Text style={style.buttonTextWhite}>Log out</Text>
                </FormButton>
              </>
            );
          }}
        />
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

  name: { color: Colors.primary },
  slogan: { marginTop: 4 },
  container: {
    marginHorizontal: 14,
  },
});

export default HomeScreen;
