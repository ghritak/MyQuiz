import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View style={styles.container} key={index}>
            <Text style={styles.option}> {item}</Text>
            <Pressable
              style={[
                styles.radioButton,
                item === userOption
                  ? { borderColor: Colors.primary }
                  : { borderColor: 'gray' },
              ]}
              onPress={() => selectHandler(item)}
            >
              <View
                style={[
                  styles.innerCircle,
                  item === userOption ? styles.selected : styles.unselected,
                ]}
              />
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },

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
});
