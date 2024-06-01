import { StyleSheet, Text, View } from 'react-native';
import FormButton from '../ui/FormButton';
import { convertToTime } from '../../utils';
import { style } from '../../constants/styles';

const Introcomponent = ({ data, setState, setAnswer }) => {
  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <Text style={styles.header}>{data?.name}</Text>
        <Text style={styles.content}>{data?.description}</Text>
        <Text style={styles.content}>
          Time limit: {convertToTime(data?.timeLimit)} seconds for each question
        </Text>
        <View>
          <Text style={styles.content}>
            Each Question: {data?.markForOne}{' '}
            {data?.markForOne === 1 ? 'Mark' : 'Marks'}
          </Text>
          <Text style={styles.content}>
            Negative Mark:{' '}
            {data?.negativeMark
              ? `${data?.negativeMark} ${
                  data?.negativeMark === '1' ? 'Mark' : 'Marks'
                }`
              : 'N/A'}
          </Text>
        </View>
        <FormButton
          onPress={() => {
            setState(0);
            setAnswer({ 0: 'not attempted' });
          }}
          style={{ width: 140 }}
        >
          <Text style={style.buttonTextWhite}>Start</Text>
        </FormButton>
      </View>
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

export default Introcomponent;
