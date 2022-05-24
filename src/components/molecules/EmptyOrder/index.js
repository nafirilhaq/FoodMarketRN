import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILEmptyOrder} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <ILEmptyOrder />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Text style={styles.subTitle}>
        Seems like you have not ordered any food yet
      </Text>
      <View style={styles.buttonWrapper}>
        <Button
          text="Find Foods"
          onPress={() => navigation.navigate('MainApp', {screen: 'Home'})}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

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
