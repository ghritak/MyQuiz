import { FlatList, StyleSheet, Text, View } from 'react-native';
import QuestionRadioButton from '../ui/QuestionRadioButton';
import { Colors } from '../../constants/Colors';
import { getOptionIndex } from '../../utils';
import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons';

const FinalAnswerCard = ({ item, index, answer }) => {
  const data = [item.optionA, item.optionB, item.optionC, item.optionD];

  return (
    <View>
      <Text style={styles.question}>
        {index + 1}. {item?.question}
      </Text>
      <View style={styles.options}>
        <FlatList
          data={data}
          renderItem={({ item: each, index: id }) => {
            console.log(getOptionIndex(id), each);
            return (
              <View
                style={[
                  styles.container,
                  getOptionIndex(id) === item.answer
                    ? { borderColor: 'green', borderWidth: 1 }
                    : {},
                  getOptionIndex(id) === answer[index] &&
                  item.answer !== answer[index]
                    ? { borderWidth: 1, borderColor: 'red' }
                    : {},
                ]}
                key={index}
              >
                <View
                  style={[
                    styles.radioButton,
                    getOptionIndex(id) === item.answer
                      ? { borderColor: 'green' }
                      : {},
                  ]}
                >
                  <View
                    style={[
                      styles.innerCircle,
                      getOptionIndex(id) === answer[index]
                        ? { backgroundColor: 'gray' }
                        : {},
                      getOptionIndex(id) === item.answer
                        ? { backgroundColor: 'green' }
                        : {},
                    ]}
                  />
                </View>
                <Text style={styles.option}> {each}</Text>
                {getOptionIndex(id) === item.answer && (
                  <Feather
                    name='check-square'
                    size={20}
                    color={'green'}
                    style={{ marginLeft: 'auto', marginRight: 4 }}
                  />
                )}
                {getOptionIndex(id) === answer[index] &&
                  item.answer !== answer[index] && (
                    <Ionicons
                      name='close'
                      size={20}
                      color={'red'}
                      style={{ marginLeft: 'auto', marginRight: 4 }}
                    />
                  )}
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  question: {
    fontWeight: '500',
  },
  options: {
    marginVertical: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#e6e6e6',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 6,
    // borderWidth: 1,
  },
  option: {
    color: 'black',
  },
  radioButton: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 20,
    marginHorizontal: 6,
  },
  unselected: {},
  selected: {
    backgroundColor: Colors.primary,
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 20,
  },
});

export default FinalAnswerCard;
