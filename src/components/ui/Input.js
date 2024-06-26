import { StyleSheet, TextInput, View } from 'react-native';
import { Colors } from '../../constants/Colors';

const Input = (props) => {
  return (
    <View style={styles.inputContainer}>
      {props?.iconLeft && <View style={styles.iconLeft}>{props.iconLeft}</View>}
      <TextInput {...props} style={styles.input} />
      {props?.iconRight && <View style={styles.icon}>{props.iconRight}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.secondary,
    marginVertical: 10,

    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
  },
  iconLeft: { marginRight: 10 },
  input: { flex: 1, paddingVertical: 12 },
  iconRight: { marginLeft: 10 },
});

export default Input;
