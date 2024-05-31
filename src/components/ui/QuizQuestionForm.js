import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const QuizQuestionForm = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text>1. Question</Text>
      <TextInput
        placeholder='Insert the question'
        value={name}
        multiline={true}
        onChangeText={(text) => {
          setName(text);
        }}
        style={styles.input}
      />
      <View>
        {['A', 'B', 'C', 'D'].map((item) => {
          return (
            <View style={styles.optionCont}>
              <TextInput
                placeholder={`Option ${item}`}
                value={name}
                onChangeText={(text) => {
                  setName(text);
                }}
                style={[styles.input, { flex: 1 }]}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e6e6e6',
    marginBottom: 10,
    marginTop: 6,
    padding: 10,
    borderRadius: 8,
  },
  optionCont: { flexDirection: 'row', alignItems: 'center' },
});

export default QuizQuestionForm;
