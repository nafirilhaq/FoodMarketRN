import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {Header, Loading} from '../../components';
import Axios from 'axios';
import {API_HOST} from '../../config';
import {getData} from '../../utils';

const Payment = ({route, navigation}) => {
  const dataCheckout = route.params;
  const [paymentUrl, setPaymentUrl] = useState('');

  useEffect(() => {
    getData('token').then(token => {
      console.log('token', token.value);
      console.log('data', dataCheckout);
      Axios.post(`${API_HOST}/checkout`, dataCheckout, {
        headers: {
          Authorization: token.value,
        },
      })
        .then(res => {
          setPaymentUrl(res.data.data.payment_url);
        })
        .catch(err => {
          console.log('cekot failed', err.response);
        });
    });
  }, []);

  const onNavChange = state => {
    if (state.title.endsWith('406')) {
      navigation.reset({index: 0, routes: [{name: 'OrderSuccess'}]});
    }
  };

  return (
    <View style={styles.page}>
      <Header
        title="Payment"
        subTitle="One Step Closer to Get Your Meal"
        onBack
      />
      <WebView
        source={{uri: paymentUrl}}
        startInLoadingState={true}
        renderLoading={() => <Loading />}
        onNavigationStateChange={onNavChange}
      />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
