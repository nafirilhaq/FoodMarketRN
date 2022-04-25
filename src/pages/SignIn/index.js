import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Form, Gap, Header} from '../../components';
import {signInAction} from '../../redux/action/auth';
import {colors} from '../../utils';
import useForm from '../../utils/useForm';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSignIn = () => {
    dispatch(signInAction(form, navigation));
  };

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.content}>
        <Form
          title="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={e => setForm('email', e)}
        />
        <Gap height={16} />
        <Form
          title="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={e => setForm('password', e)}
        />
        <Gap height={24} />
        <Button text="Sign In" onPress={onSignIn} />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color={colors.button.gray}
          textColor={colors.text.white}
          onPress={onSignUp}
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
