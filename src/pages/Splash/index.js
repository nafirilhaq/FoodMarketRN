import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILLogo} from '../../assets';
import {colors, fonts, getData} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        if (res) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('SignIn');
        }
        console.log('login', res);
      });
    }, 2000);
  }, []);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.text}>FoodMarket</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 30,
    fontSize: 32,
    fontFamily: fonts.medium,
    color: colors.text.black,
  },
});
