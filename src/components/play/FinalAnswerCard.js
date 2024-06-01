import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { getOptionIndex } from '../../utils';
import { Feather, Ionicons } from '@expo/vector-icons';

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
            return (
              <View style={[styles.container]} key={index}>
                <View style={[styles.radioButton]}>
                  <View
                    style={[
                      styles.innerCircle,
                      getOptionIndex(id) === answer[index]
                        ? { backgroundColor: 'gray' }
                        : {},
                    ]}
                  />
                </View>
                <Text style={styles.option}> {each}</Text>
              </View>
            );
          }}
        />
        <View style={styles.belowText}>
          <Text>
            <Text style={{ color: 'green' }}>Correct Answer:</Text>{' '}
            {item.answer}
          </Text>
          {item.answer === answer[index] ? (
            <Text style={{ color: Colors.success }}>Correct</Text>
          ) : answer[index] === 'not attempted' ? (
            <Text>Not attempted</Text>
          ) : (
            <Text style={{ color: Colors.error }}>Incorrect</Text>
          )}
        </View>
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
  belowText: { flexDirection: 'row', justifyContent: 'space-between' },
});

export default FinalAnswerCard;
