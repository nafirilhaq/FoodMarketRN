import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.white} size="large" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.text.white,
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
    fontFamily: fonts.medium,
  },
});

export default Loading;
