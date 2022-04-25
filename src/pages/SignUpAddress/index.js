import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {Button, Form, Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';
import useForm from '../../utils/useForm';
import {useDispatch, useSelector} from 'react-redux';
import {signUpAction} from '../../redux/action/auth';
import Axios from 'axios';

const SignUpAddress = ({navigation}) => {
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

  useEffect(() => {
    Axios.get(
      'https://emsifa.github.io/api-wilayah-indonesia/api/regencies/32.json',
    )
      .then(res => {
        console.log('get api', res);
      })
      .catch(err => {
        console.log('get error', err.response);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header title="Address" subTitle="Make sure it’s valid" onBack />
        <View style={styles.content}>
          <Gap height={16} />
          <Form
            title="Phone No."
            placeholder="Type your phone number"
            value={form.name}
            onChangeText={e => setForm('name', e)}
            error={registerReducer.isNameValid}
          />
          <Gap height={16} />
          <Form
            title="Address"
            placeholder="Type your address"
            value={form.email}
            onChangeText={e => setForm('email', e)}
            error={registerReducer.isEmailValid}
          />
          <Gap height={16} />
          <Form
            title="House No."
            placeholder="Type your house number"
            value={form.password}
            onChangeText={e => setForm('password', e)}
            error={registerReducer.isPasswordValid}
            secureTextEntry
          />
          <Gap height={16} />

          <Gap height={24} />
          <Button text="Continue" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

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
