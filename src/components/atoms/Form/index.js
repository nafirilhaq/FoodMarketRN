import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Form = ({title, placeholder}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.textInput} placeholder={placeholder}></TextInput>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.text.black,
  },
  textInput: {
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.black2,
    padding: 10,
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.text.gray,
  },
});
