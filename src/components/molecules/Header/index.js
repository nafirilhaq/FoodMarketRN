import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {DummyProfile, IcBack} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, subTitle, onBack, onProfile, avatar}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {onBack ? (
        <TouchableOpacity
          style={styles.backWrapper}
          onPress={() => navigation.goBack()}>
          <IcBack />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      {onProfile ? (
        <View>
          <Image style={styles.avatarWrapper} source={{uri: avatar}} />
        </View>
      ) : (
        <></>
      )}
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
    justifyContent: 'space-between',
  },
  backWrapper: {
    padding: 24,
    marginLeft: -24,
  },
  wrapper: {
    flex: 1,
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
  avatarWrapper: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
