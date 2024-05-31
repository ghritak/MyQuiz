import { StyleSheet, Text, View } from 'react-native';
import QuestionRadioButton from '../ui/QuestionRadioButton';

const QuestionComponent = ({ question, state, setAnswer }) => {
  const data = [
    question.optionA,
    question.optionB,
    question.optionC,
    question.optionD,
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {state + 1}. {question?.question}
      </Text>
      <View style={styles.options}>
        <QuestionRadioButton
          data={data}
          onSelect={(value) => setAnswer((prev) => [...prev, value])}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    marginTop: 10,
  },
  question: {
    fontWeight: '500',
  },
  options: {
    marginVertical: 10,
  },
});

export default QuestionComponent;
