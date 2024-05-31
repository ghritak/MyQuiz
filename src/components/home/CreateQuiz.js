import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import UpperBar from '../ui/UpperBar';
import { Colors } from '../../constants/Colors';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../ui/Header';
import RadioButton from '../ui/RadioButton';
import FormButton from '../ui/FormButton';
import QuizQuestionForm from '../ui/QuizQuestionForm';
import AboutQuiz from './quiz/AboutQuiz';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../../firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const questionObject = {
  question: '',
  optionA: '',
  optionB: '',
  optionC: '',
  optionD: '',
  answer: '',
};

const CreateQuizScreen = () => {
  const navigation = useNavigation();
  const { currentUser } = auth;
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    markForOne: '4',
    isNegative: 'No',
    negativeMark: '1',
    timeLimit: '',
  });
  const [isLoading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([questionObject]);

  const handleCreate = async () => {
    setLoading(true);
    try {
      const submitData = {
        ...formData,
        user_id: currentUser?.uid,
        questions,
      };
      console.log(submitData);
      const collectionRef = collection(db, 'quizes');
      await addDoc(collectionRef, submitData);
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      console.log('Could not create group', error);
      setLoading(false);
    }
  };

  const handleChangeItem = (item, index) => {
    const newQuestions = questions;
    newQuestions[index] = item;
    setQuestions(newQuestions);
  };

  return (
    <>
      <UpperBar />
      <View style={styles.container}>
        <Header title='Create Quiz' />
        <FlatList
          data={[0]}
          contentContainerStyle={{
            paddingHorizontal: 14,
            paddingBottom: 20,
          }}
          renderItem={() => {
            return (
              <>
                <AboutQuiz formData={formData} setFormData={setFormData} />
                <FlatList
                  data={questions}
                  renderItem={({ item, index }) => {
                    return (
                      <QuizQuestionForm
                        index={index}
                        item={item}
                        handleChangeItem={handleChangeItem}
                      />
                    );
                  }}
                />

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    setQuestions((prev) => [...prev, questionObject]);
                  }}
                  style={styles.addQuestionButton}
                >
                  <Text style={styles.addQuestion}>Add Question</Text>
                </TouchableOpacity>
                <FormButton onPress={handleCreate}>
                  <Text style={{ color: '#fff', fontWeight: '500' }}>
                    Create
                  </Text>
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
  heading: {
    fontSize: 20,
    fontWeight: '600',
  },
  name: { color: Colors.primary },
  slogan: { marginTop: 4 },
  container: {
    flex: 1,
  },
  form: { marginTop: 14 },
  input: {
    backgroundColor: '#e6e6e6',
    marginBottom: 10,
    marginTop: 6,
    padding: 10,
    borderRadius: 8,
  },
  negative: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    marginTop: 6,
  },
  radio: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  addQuestionButton: { marginVertical: 10 },
  addQuestion: { color: Colors.primary, fontWeight: '600' },
});

export default CreateQuizScreen;
