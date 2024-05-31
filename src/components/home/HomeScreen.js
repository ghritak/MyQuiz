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
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import FormButton from '../ui/FormButton';
import { style } from '../../constants/styles';
import QuizHomeCard from './quiz/QuizHomeCard';

const HomeScreen = () => {
  const { currentUser } = auth;
  const navigation = useNavigation();
  const [quizzes, setQuizzes] = useState([]);

  const handleLogout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetchUserQuizzes();
  }, [currentUser]);

  const fetchUserQuizzes = async () => {
    try {
      const collectionRef = collection(db, 'quizes');
      const q = query(collectionRef, where('user_id', '==', currentUser?.uid));

      const unsub = onSnapshot(q, (snapshot) => {
        const quizzesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuizzes(quizzesData);
      });

      return unsub;
    } catch (error) {
      console.error(
        'Error fetching quizzes for the user:',
        error.code,
        error.message
      );
    }
  };

  return (
    <>
      <UpperBar />
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={style.heading}>
              Hi, <Text style={styles.name}>Ghritak</Text>
            </Text>
            <Text style={styles.slogan}>Create your own quiz</Text>
          </View>
          <IconButton onPress={() => navigation.navigate('createquiz')}>
            <MaterialCommunityIcons name='plus' size={20} color={'white'} />
          </IconButton>
        </View>
        <View>
          <FormButton onPress={() => navigation.navigate('playquiz')}>
            <Text style={style.buttonTextWhite}>Play Quiz</Text>
          </FormButton>
        </View>
        <View>
          <Text style={style.heading}>Your Quizes</Text>
          <View>
            <FlatList
              data={quizzes}
              renderItem={({ item }) => {
                return <QuizHomeCard item={item} />;
              }}
            />
          </View>
        </View>
        <FormButton onPress={handleLogout}>
          <Text style={style.buttonTextWhite}>Log out</Text>
        </FormButton>
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
