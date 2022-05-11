import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Button = ({color, textColor, text, onPress, isLink}) => {
  if (isLink) {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View>
          <Text style={styles.textLink}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color ? color : colors.button.yellow,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  text: textColor => ({
    fontSize: 14,
    color: textColor ? textColor : colors.text.black,
    fontFamily: fonts.medium,
  }),
  textLink: {
    fontSize: 14,
    color: colors.text.gray,
    fontFamily: fonts.light,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
