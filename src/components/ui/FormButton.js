import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';

const FormButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      style={{ ...styles.button, ...props.style }}
    >
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: { color: 'white', fontWeight: '500' },
});

export default FormButton;
