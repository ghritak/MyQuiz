import { FlatList, StyleSheet, Text, View } from 'react-native';
import FinalAnswerCard from './FinalAnswerCard';

const FinalAnswerList = ({ data, answer }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.questions}
        contentContainerStyle={{ paddingHorizontal: 14, paddingBottom: 10 }}
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
    marginTop: 10,
  },
  header: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  content: { marginBottom: 4 },
});

export default FinalAnswerList;
