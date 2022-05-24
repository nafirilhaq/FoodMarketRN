import Axios from 'axios';
import {API_HOST} from '../../config';
import {getData} from '../../utils';

export const getOrderAction = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST}/transaction?limit=50`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then(res => {
        console.log('data order', res.data);
        dispatch({type: 'SET_ORDER', value: res.data.data.data});
      })
      .catch(err => {
        console.log('data order err', err.response);
      });
  });
};
