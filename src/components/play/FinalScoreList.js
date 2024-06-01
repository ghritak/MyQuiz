import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { screenWidth } from '../../constants';
import { Colors } from '../../constants/Colors';
import FormButton from '../ui/FormButton';
import { style } from '../../constants/styles';

const FinalScoreList = ({ data, setState, answer }) => {
  const [score, setScore] = useState('');
  const animation = useRef(null);
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let count = 0;
    let negative = 0;
    data.questions.forEach((item, index) => {
      if (answer[index] === 'not attempted') {
      } else if (item.answer === answer[index]) {
        count += 1;
      } else if (item.answer !== answer[index]) {
        negative += 1;
      }
    });
    if (data.isNegative) {
      setScore(count * data.markForOne - negative * data.negativeMark);
    } else {
      setScore(count * data.markForOne);
    }
  }, []);

  useLayoutEffect(() => {
    Animated.timing(scale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          loop={false}
          ref={animation}
          style={{
            width: screenWidth,
            height: screenWidth,
          }}
          source={require('../../assets/score.json')}
        />
      </View>
      <Animated.View style={[styles.scoreCont, { transform: [{ scale }] }]}>
        <Text style={styles.scoreTitle}>Score</Text>
        <Text style={styles.score}>{score} Points</Text>
      </Animated.View>

      <View style={styles.viewBtn}>
        <FormButton
          onPress={() => setState('view answers')}
          style={styles.button}
        >
          <Text style={style.buttonTextWhite}>View Answers</Text>
        </FormButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  animationContainer: {
    zIndex: 10,
  },
  scoreCont: {
    position: 'absolute',
    width: screenWidth,
    height: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    paddingTop: 20,
  },
  scoreTitle: {
    fontSize: 50,
    fontWeight: '800',
    textTransform: 'uppercase',
    color: Colors.primary,
  },
  score: {
    fontSize: 24,
    fontWeight: '600',
  },
  viewBtn: { justifyContent: 'center', flexDirection: 'row' },
  button: { width: 160 },
});

export default FinalScoreList;
