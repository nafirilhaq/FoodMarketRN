import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subTitle}>Find your best ever meal</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.medium,
    color: colors.text.black,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.light,
    color: colors.text.gray,
  },
});
