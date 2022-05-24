import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILOrderSuccess} from '../../assets';
import {colors, fonts} from '../../utils';
import {Button, Gap} from '../../components';

const OrderSuccess = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILOrderSuccess />
      <Text style={styles.title}>You’ve Made Order</Text>
      <Text style={styles.subTitle}>
        Just stay at home while we are preparing your best foods
      </Text>
      <View style={styles.buttonWrapper}>
        <Button
          text="Order Other Foods"
          onPress={() =>
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
          }
        />
        <Gap height={12} />
        <Button
          text="View My Order"
          color={colors.button.gray}
          textColor={colors.text.white2}
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
        />
      </View>
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 80,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.regular,
    color: colors.text.black,
    marginTop: 30,
    marginBottom: 6,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.light,
    color: colors.text.gray,
    maxWidth: 215,
    textAlign: 'center',
  },
  buttonWrapper: {
    width: '80%',
    marginTop: 30,
  },
});
