import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';

const FormButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      style={[
        { ...styles.button, ...props.style },
        { opacity: props.loading ? 0.5 : 1 },
      ]}
      disabled={props.loading}
    >
      {!props.loading ? props.children : <ActivityIndicator color={'white'} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    marginVertical: 10,
    height: 40,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: { color: 'white', fontWeight: '500' },
});

export default FormButton;
