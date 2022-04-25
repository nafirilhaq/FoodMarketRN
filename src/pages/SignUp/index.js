import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {Button, Form, Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';
import useForm from '../../utils/useForm';
import {useDispatch, useSelector} from 'react-redux';
import {signUpAction} from '../../redux/action/auth';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const registerReducer = useSelector(state => state.registerReducer);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(signUpAction(form, navigation));
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header title="Sign Up" subTitle="Register and eat" onBack />
        <View style={styles.content}>
          <Gap height={16} />
          <Form
            title="Full Name"
            placeholder="Type your full name"
            value={form.name}
            onChangeText={e => setForm('name', e)}
            error={registerReducer.isNameValid}
          />
          <Gap height={16} />
          <Form
            title="Email Address"
            placeholder="Type your email address"
            value={form.email}
            onChangeText={e => setForm('email', e)}
            error={registerReducer.isEmailValid}
          />
          <Gap height={16} />
          <Form
            title="Password"
            placeholder="Type your password"
            value={form.password}
            onChangeText={e => setForm('password', e)}
            error={registerReducer.isPasswordValid}
            secureTextEntry
          />
          <Gap height={16} />
          <Form
            title="Password Confirmation"
            placeholder="Type your password confirmation"
            value={form.password_confirmation}
            onChangeText={e => setForm('password_confirmation', e)}
            error={registerReducer.isPasswordConfirmationValid}
            secureTextEntry
          />
          <Gap height={24} />
          <Button text="Continue" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {
    marginTop: 21,
    backgroundColor: colors.white,
    padding: 24,
    flex: 1,
  },
  photoBorder: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.text.gray,
    borderRadius: 110,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoWrapper: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: colors.gray2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoText: {
    textAlign: 'center',
    maxWidth: 40,
    fontSize: 14,
    fontFamily: fonts.light,
    color: colors.text.gray,
  },
});
