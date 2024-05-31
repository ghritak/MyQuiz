import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';

const IconButton = (props) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} style={styles.button} {...props}>
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});

export default IconButton;
