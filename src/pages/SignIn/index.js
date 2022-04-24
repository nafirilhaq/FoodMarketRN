import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Form, Gap, Header} from '../../components';
import {colors} from '../../utils';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.content}>
        <Form title="Email Address" placeholder="Type your email address" />
        <Gap height={16} />
        <Form title="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color={colors.button.gray}
          textColor={colors.text.white}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {
    marginTop: 21,
    backgroundColor: colors.white,
    padding: 24,
    flex: 1,
  },
});
