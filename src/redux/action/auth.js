import {useState} from 'react';
import Axios from 'axios';
import {useSelector} from 'react-redux';
import {API_HOST} from '../../config';
import {getData, storeData, toast} from '../../utils';

export const signInAction = (form, navigation) => dispatch => {
  dispatch({type: 'SET_LOADING', value: true});
  Axios.post(`${API_HOST}/login`, form)
    .then(res => {
      const profile = res.data.data.user;
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      storeData('profile', profile);
      storeData('token', {value: token});
      dispatch({type: 'SET_LOADING', value: false});
      navigation.replace('MainApp');
    })
    .catch(err => {
      dispatch({type: 'SET_LOADING', value: false});
      console.log('login', err.response);
      const countErrors = err.response.data.errors;
      if (Object.keys(countErrors).length > 1) {
        toast(err?.response?.data?.message);
      } else if (countErrors.email) {
        toast(countErrors.email[0]);
      } else if (countErrors.password) {
        toast(countErrors.password[0]);
      }
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

      const countErrors = err.response.data.errors;
      if (Object.keys(countErrors).length > 1) {
        toast(err?.response?.data?.message);
      } else if (countErrors.name) {
        toast(countErrors.name[0]);
      } else if (countErrors.email) {
        toast(countErrors.email[0]);
      } else if (countErrors.password) {
        toast(countErrors.password[0]);
      }

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

    dispatch({type: 'SET_LOADING', value: true});
    console.log('formdatta', bodyFormData);
    Axios.post(`${API_HOST}/user`, form, {
      headers: {
        Authorization: token.value,
      },
    })
      .then(res => {
        dispatch({type: 'SET_LOADING', value: false});
        navigation.replace('SignUpPhoto');
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        console.log('gagal', err.response);
      });
  });
};

export const uploadPhotoAction = (data, navigation) => dispatch => {
  const formPhoto = new FormData();
  formPhoto.append('file', data);

  getData('token').then(token => {
    Axios.post(`${API_HOST}/user/photo`, formPhoto, {
      headers: {
        Authorization: token.value,
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(photoRes => {
        console.log('upload success', photoRes);
      })
      .catch(err => {
        console.log('upload gagal', err.response);
      });
  });
};
