import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import RadioButton from './RadioButton';

const options = [
  { value: 'A' },
  { value: 'B' },
  { value: 'C' },
  { value: 'D' },
];

const QuizQuestionForm = ({ index, handleChangeItem }) => {
  const [formData, setFormData] = useState({
    question: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    answer: '',
  });

  useEffect(() => {
    handleChangeItem(formData, index);
  }, [formData]);

  return (
    <View>
      <Text style={styles.questionTitle}>{index + 1}. Question</Text>
      <TextInput
        placeholder='Insert the question'
        value={formData.question}
        multiline={true}
        onChangeText={(text) => {
          setFormData((prev) => ({ ...prev, question: text }));
        }}
        style={styles.input}
      />
      <View>
        <FlatList
          data={['A', 'B', 'C', 'D']}
          renderItem={({ item: each }) => {
            return (
              <TextInput
                placeholder={`Option ${each}`}
                value={
                  each === 'A'
                    ? formData.optionA
                    : each === 'B'
                    ? formData.optionB
                    : each === 'C'
                    ? formData.optionC
                    : formData.optionD
                }
                onChangeText={(text) => {
                  if (each === 'A')
                    setFormData((prev) => ({ ...prev, optionA: text }));
                  if (each === 'B')
                    setFormData((prev) => ({ ...prev, optionB: text }));
                  if (each === 'C')
                    setFormData((prev) => ({ ...prev, optionC: text }));
                  if (each === 'D')
                    setFormData((prev) => ({ ...prev, optionD: text }));
                }}
                style={[styles.input, { flex: 1 }]}
              />
            );
          }}
        />
      </View>
      <View style={styles.optionCont}>
        <Text>Correct Option : </Text>
        <View style={styles.radio}>
          <RadioButton
            data={options}
            onSelect={(value) =>
              setFormData((prev) => ({ ...prev, answer: value }))
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionTitle: { marginBottom: 4 },
  input: {
    backgroundColor: '#e6e6e6',
    marginVertical: 6,
    padding: 10,
    borderRadius: 8,
  },
  optionCont: { flexDirection: 'row', alignItems: 'center' },
  optionCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    marginTop: 6,
  },
});

export default QuizQuestionForm;
