import {
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

const CreateQuizScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    markForOne: '4',
    isNegative: 'No',
    negativeMark: '1',
    timeLimit: '',
  });
  const data = [{ value: 'Yes' }, { value: 'No' }];

  const handleCreate = () => {
    console.log(formData);
  };

  return (
    <>
      <UpperBar />
      <View style={styles.container}>
        <Header title='Create Quiz' />
        <View style={styles.form}>
          <Text>Quiz Name</Text>
          <TextInput
            placeholder='Name of the quiz'
            value={formData.name}
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, name: text }))
            }
            style={styles.input}
          />
          <Text>Description</Text>
          <TextInput
            value={formData.description}
            placeholder='About the quiz'
            multiline={true}
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, description: text }))
            }
            style={styles.input}
          />
          <Text>Mark for each question</Text>
          <TextInput
            value={formData.markForOne}
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, markForOne: text }))
            }
            keyboardType='numeric'
            style={styles.input}
          />
          <View style={styles.negative}>
            <Text>Is negative marking present?</Text>
            <View style={styles.radio}>
              <RadioButton
                data={data}
                onSelect={(value) =>
                  setFormData((prev) => ({ ...prev, isNegative: value }))
                }
              />
            </View>
          </View>
          {formData.isNegative === 'Yes' && (
            <>
              <Text>How much deduction for one wrong question.</Text>
              <TextInput
                value={formData.negativeMark}
                onChangeText={(text) =>
                  setFormData((prev) => ({ ...prev, negativeMark: text }))
                }
                keyboardType='numeric'
                style={styles.input}
              />
            </>
          )}
        </View>

        <QuizQuestionForm />

        <TouchableOpacity activeOpacity={0.7} style={styles.addQuestionButton}>
          <Text style={styles.addQuestion}>Add Question</Text>
        </TouchableOpacity>
        <FormButton onPress={handleCreate}>
          <Text style={{ color: '#fff', fontWeight: '500' }}>Create</Text>
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
  heading: {
    fontSize: 20,
    fontWeight: '600',
  },
  name: { color: Colors.primary },
  slogan: { marginTop: 4 },
  container: {
    margin: 10,
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
