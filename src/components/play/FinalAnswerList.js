import { FlatList, StyleSheet, Text, View } from 'react-native';
import FinalAnswerCard from './FinalAnswerCard';

const FinalAnswerList = ({ data, answer }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.questions}
        renderItem={({ item, index }) => {
          return <FinalAnswerCard item={item} index={index} answer={answer} />;
        }}
      />
    </View>
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
});

export default FinalAnswerList;
