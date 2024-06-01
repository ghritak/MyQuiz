import { StyleSheet, Text, TextInput, View } from 'react-native';
import RadioButton from '../ui/RadioButton';
import { Colors } from '../../constants/Colors';

const data = ['Yes', 'No'];

const AboutQuiz = ({ formData, setFormData }) => {
  return (
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
      <Text>Time limit per question (Enter 0 if no limit)</Text>
      <TextInput
        value={formData.timeLimit}
        placeholder='In seconds'
        onChangeText={(text) =>
          setFormData((prev) => ({ ...prev, timeLimit: text }))
        }
        keyboardType='numeric'
        style={styles.input}
      />
    </View>
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
    margin: 14,
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

export default AboutQuiz;
