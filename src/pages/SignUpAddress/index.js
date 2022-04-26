import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Form, Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';
import useForm from '../../utils/useForm';
import {useDispatch, useSelector} from 'react-redux';
import {signUpAction, signUpAddressAction} from '../../redux/action/auth';
import Axios from 'axios';
import {Picker} from '@react-native-picker/picker';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    city: '',
    address: '',
    phoneNumber: '',
    houseNumber: '',
  });

  const [cityApi, setCityApi] = useState([{}]);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(signUpAddressAction(form, navigation));
  };

  useEffect(() => {
    Axios.get(
      'https://emsifa.github.io/api-wilayah-indonesia/api/regencies/32.json',
    )
      .then(res => {
        const data = res.data;
        setCityApi(data);
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
            value={form.phoneNumber}
            onChangeText={e => setForm('phoneNumber', e)}
          />
          <Gap height={16} />
          <Form
            title="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={e => setForm('address', e)}
          />
          <Gap height={16} />
          <Form
            title="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={e => setForm('houseNumber', e)}
          />
          <Gap height={16} />
          <Text style={styles.formTitle}>City</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={form.city}
              onValueChange={itemValue => setForm('city', itemValue)}>
              <Picker.Item
                label="Select your city"
                style={{
                  fontSize: 14,
                  color: colors.text.gray,
                }}
              />
              {cityApi.map((item, index) => {
                return (
                  <Picker.Item
                    style={{fontSize: 14}}
                    key={index}
                    label={item.name}
                    value={item.name}
                  />
                );
              })}
            </Picker>
          </View>
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
  formTitle: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.text.black,
  },
  pickerWrapper: {
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.black2,
    fontSize: 6,
    fontFamily: fonts.regular,
    color: colors.text.black,
  },
});
