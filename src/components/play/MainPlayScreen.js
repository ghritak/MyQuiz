import { StyleSheet, Text, View } from 'react-native';
import UpperBar from '../ui/UpperBar';
import Header from '../ui/Header';
import FormButton from '../ui/FormButton';
import { style } from '../../constants/styles';
import { convertToTime } from '../../utils';
import Introcomponent from './IntroComponent';
import { useEffect, useState } from 'react';
import QuestionComponent from './QuestionComponent';
import FinalAnswerList from './FinalAnswerList';
import FinalScoreList from './FinalScoreList';

const MainPlayScreen = ({ route }) => {
  const { data } = route.params;
  const [state, setState] = useState('yet to start');
  const [answer, setAnswer] = useState([]);

  const handlePageIncrement = () => {
    if (state === data.questions.length - 1) {
      setState('quiz finished');
    } else {
      setState((prev) => prev + 1);
      setAnswer((prev) => ({ ...prev, [state + 1]: 'not attempted' }));
    }
  };

  return (
    <>
      <UpperBar />
      <Header title={''} type={'close'} />
      {state === 'yet to start' && (
        <Introcomponent data={data} setState={setState} setAnswer={setAnswer} />
      )}
      {typeof state === 'number' && (
        <>
          <QuestionComponent
            question={data?.questions[state]}
            state={state}
            handlePageIncrement={handlePageIncrement}
            setAnswer={setAnswer}
            totalSeconds={data.timeLimit}
          />
          <View style={styles.floatButton}>
            <FormButton onPress={handlePageIncrement}>
              <Text style={style.buttonTextWhite}>
                {state === data.questions.length - 1 ? 'Submit' : 'Next'}
              </Text>
            </FormButton>
          </View>
        </>
      )}

      {state === 'quiz finished' && (
        <FinalScoreList data={data} setState={setState} answer={answer} />
      )}
      {state === 'view answers' && (
        <FinalAnswerList data={data} answer={answer} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 14,
    marginTop: 10,
  },
  header: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  content: { marginBottom: 4 },
  floatButton: {
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
});

export default MainPlayScreen;
