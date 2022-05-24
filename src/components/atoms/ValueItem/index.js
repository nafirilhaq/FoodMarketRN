import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {Number} from '../../molecules';

const ValueItem = ({value, item, itemColor, isCurrency}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      {isCurrency ? (
        <Number number={item} style={styles.itemCurrency(itemColor)} />
      ) : (
        <Text style={styles.item(itemColor)}>{item}</Text>
      )}
    </View>
  );
};

export default ValueItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  value: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.text.gray,
  },
  item: color => ({
    fontSize: 14,
    fontFamily: fonts.regular,
    color: color ? color : colors.text.black,
    textTransform: 'capitalize',
  }),
  itemCurrency: color => ({
    fontSize: 14,
    fontFamily: fonts.regular,
    color: color ? color : colors.text.black,
  }),
});
