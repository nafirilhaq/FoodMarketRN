import {useState} from 'react';
import Axios from 'axios';
import {useSelector} from 'react-redux';
import {API_HOST} from '../../config';
import {getData, storeData} from '../../utils';

export const signInAction = (form, navigation) => dispatch => {
  dispatch({type: 'SET_LOADING', value: true});
  Axios.post(`${API_HOST}/login`, form)
    .then(res => {
      console.log('login', res.data);
      dispatch({type: 'SET_LOADING', value: false});
    })
    .catch(err => {
      console.log('login error: ', err.response);
      dispatch({type: 'SET_LOADING', value: false});
    });
};

export const signUpAction = (form, navigation) => dispatch => {
  dispatch({type: 'SET_LOADING', value: true});
  Axios.post(`${API_HOST}/register`, form)
    .then(res => {
      //action reducer
      dispatch({type: 'SET_LOADING', value: false});
      dispatch({type: 'SET_REGISTER', value: form});
      //local storage
      const profile = res.data.data.user;
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      storeData('profile', profile);
      storeData('token', {value: token});
      //navigation
      navigation.navigate('SignUpAddress');
    })
    .catch(err => {
      dispatch({type: 'SET_LOADING', value: false});
      dispatch({type: 'SET_RESET_INVALID'});
      if (err?.response?.data?.errors?.email) {
        dispatch({type: 'SET_EMAIL_INVALID', value: true});
      }
      if (err?.response?.data?.errors?.name) {
        dispatch({type: 'SET_NAME_INVALID', value: true});
      }
      if (err?.response?.data?.errors?.password) {
        dispatch({type: 'SET_PASSWORD_INVALID', value: true});
      }
      if (err?.response?.data?.errors?.password) {
        dispatch({type: 'SET_PASSWORD_CONFIRMATION_INVALID', value: true});
      }
    });
};

export const signUpAddressAction = (form, navigation) => dispatch => {
  getData('token').then(token => {
    console.log('tkn', token);
    const bodyFormData = new FormData();
    bodyFormData.append('address', 'bandung');

    console.log('formdatta', bodyFormData);
    Axios.post(`${API_HOST}/user`, form, {
      headers: {
        Authorization: token.value,
        'Content-Type': 'multipart/form-data',
        'Content-Lenght': 10,
      },
    })
      .then(res => {
        console.log('sukses', res);
      })
      .catch(err => {
        console.log('gagal', err.response);
      });
  });
};
