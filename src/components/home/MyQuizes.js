import { FlatList, Text, View } from 'react-native';
import QuizHomeCard from '../quiz/QuizHomeCard';
import { style } from '../../constants/styles';
import { useEffect, useState } from 'react';
import { auth, db } from '../../../firebaseConfig';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const MyQuizes = () => {
  const { currentUser } = auth;
  const [quizzes, setQuizzes] = useState([]);

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
    <View>
      <Text style={style.heading}>Your Quizes</Text>
      <FlatList
        data={quizzes}
        renderItem={({ item }) => {
          return <QuizHomeCard item={item} />;
        }}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text style={{ textAlign: 'center', marginVertical: 50 }}>
                You haven't created any quiz yet.
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyQuizes;
