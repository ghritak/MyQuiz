import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7980f5',
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

export default Button;
