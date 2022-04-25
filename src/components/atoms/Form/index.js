import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Form = ({title, placeholder, error, ...restProps}) => {
  return (
    <View>
      <Text style={styles.title(error)}>{title}</Text>
      <TextInput
        style={styles.textInput(error)}
        placeholder={placeholder}
        placeholderTextColor={error ? colors.red : colors.text.gray}
        {...restProps}></TextInput>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  title: error => ({
    fontSize: 16,
    fontFamily: fonts.regular,
    color: error ? colors.red : colors.text.black,
  }),
  textInput: error => ({
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: error ? colors.red : colors.black2,
    padding: 10,
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.text.black,
  }),
});
