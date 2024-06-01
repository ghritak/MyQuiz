import { StyleSheet, Text, View } from 'react-native';
import QuestionRadioButton from '../ui/QuestionRadioButton';
import TimerComponent from './TimerComponent';

const QuestionComponent = ({
  totalSeconds,
  question,
  state,
  handlePageIncrement,
  setAnswer,
}) => {
  const data = [
    question.optionA,
    question.optionB,
    question.optionC,
    question.optionD,
  ];

  return (
    <View style={styles.container} key={state}>
      <Text style={styles.question}>
        {state + 1}. {question?.question}
      </Text>
      <View style={styles.options}>
        <QuestionRadioButton
          data={data}
          onSelect={(value) => {
            setAnswer((prev) => ({ ...prev, [state]: value }));
          }}
        />
      </View>
      <View>
        <TimerComponent
          key={state}
          totalSeconds={totalSeconds}
          onTimerEnd={handlePageIncrement}
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
