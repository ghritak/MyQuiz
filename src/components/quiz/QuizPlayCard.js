import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const QuizPlayCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('mainplayscreen', { data: item })}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.circle}>
          <View style={styles.totalQuestion}>
            <Text style={styles.lengthText}>{item.questions.length}</Text>
          </View>
          <Text>Questions</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: { width: '74%' },
  contentTitle: { fontWeight: '600' },
  circle: { alignItems: 'center', width: '20%' },
  totalQuestion: {
    borderWidth: 1,
    borderRadius: 30,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  lengthText: {
    fontSize: 20,
  },
});

export default QuizPlayCard;
