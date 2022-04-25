import Axios from 'axios';
import {useSelector} from 'react-redux';
import {API_HOST} from '../../config';

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
      dispatch({type: 'SET_LOADING', value: false});
      dispatch({type: 'SET_REGISTER', value: form});
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
