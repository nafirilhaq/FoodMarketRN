import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../../utils';
import {IcButtonMin, IcButtonPlus} from '../../../assets';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);
  const onCounter = type => {
    let number = value;
    if (type === 'min') {
      if (number > 1) {
        number = number - 1;
      }
    }
    if (type === 'plus') {
      number = number + 1;
    }
    setValue(number);
    onValueChange(number);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCounter('min')}>
        <IcButtonMin />
      </TouchableOpacity>
      <Text style={styles.text}>{value}</Text>
      <TouchableOpacity onPress={() => onCounter('plus')}>
        <IcButtonPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.text.black,
    marginHorizontal: 10,
  },
});
