import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Colors } from '../../constants/Colors';

export default function QuestionRadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value, index) => {
    if (index === 0) onSelect('A');
    if (index === 1) onSelect('B');
    if (index === 2) onSelect('C');
    if (index === 3) onSelect('D');
    setUserOption(value);
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => selectHandler(item, index)}
              style={[
                styles.container,
                item === userOption
                  ? { borderColor: Colors.primary }
                  : { borderColor: '#e6e6e6' },
              ]}
              key={index}
            >
              <View
                style={[
                  styles.radioButton,
                  item === userOption
                    ? { borderColor: Colors.primary }
                    : { borderColor: 'gray' },
                ]}
              >
                <View
                  style={[
                    styles.innerCircle,
                    item === userOption ? styles.selected : styles.unselected,
                  ]}
                />
              </View>
              <Text style={styles.option}> {item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#e6e6e6',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
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
