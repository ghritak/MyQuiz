import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const FinalScoreList = ({ data, setState, answer }) => {
  const [score, setScore] = useState('');

  useEffect(() => {
    let count = 0;
    let negative = 0;
    data.questions.forEach((item, index) => {
      if (answer[index] === 'not attempted') {
      } else if (item.answer === answer[index]) {
        count += 1;
      } else {
        negative += 1;
      }
    });
    if (data.isNegative) {
      setScore(count * data.markForOne - negative * data.negativeMark);
    } else {
      setScore(count * data.markForOne);
    }
  }, []);

  return (
    <View>
      <Text>Final Score : {score}</Text>
      <Text>{JSON.stringify(answer)}</Text>
    </View>
  );
};

export default FinalScoreList;
