import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {IcBack} from '../../../assets';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack ? (
        <TouchableOpacity style={styles.backWrapper}>
          <IcBack />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backWrapper: {
    padding: 24,
    marginLeft: -24,
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
