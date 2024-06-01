import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { db } from '../../../firebaseConfig';
import { useEffect, useState } from 'react';
import UpperBar from '../ui/UpperBar';
import Header from '../ui/Header';
import { MaterialIcons } from '@expo/vector-icons';
import QuizPlayCard from '../quiz/QuizPlayCard';

const PlayQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [quizCode, setQuizeCode] = useState('');

  useEffect(() => {
    fetchAllQuizzes();
  }, []);

  const fetchAllQuizzes = async () => {
    try {
      const collectionRef = collection(db, 'quizes');
      const querySnapshot = await getDocs(collectionRef);

      const quizzesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setQuizzes(quizzesData);
    } catch (error) {
      console.error('Error fetching quizzes:', error.code, error.message);
    }
  };
  return (
    <>
      <UpperBar />
      <Header title='Play Quiz' />
      <View style={styles.container}>
        <View style={styles.searchCont}>
          <TextInput
            value={quizCode}
            placeholder='Enter your quiz code'
            onChangeText={setQuizeCode}
            style={styles.codeInput}
          />
          <TouchableOpacity style={styles.searchBtn}>
            <MaterialIcons name='search' size={20} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={quizzes}
          contentContainerStyle={{ paddingHorizontal: 14 }}
          renderItem={({ item }) => {
            return <QuizPlayCard item={item} />;
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  searchCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#e6e6e6',
  },
  codeInput: {
    flex: 1,
    height: 36,
    paddingLeft: 10,
  },
  searchBtn: {
    paddingHorizontal: 10,
  },
});

export default PlayQuiz;
