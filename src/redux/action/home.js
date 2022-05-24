import Axios from 'axios';
import {API_HOST} from '../../config';

export const getFoodAction = () => dispatch => {
  Axios.get(`${API_HOST}/food`)
    .then(res => {
      dispatch({type: 'SET_FOOD', value: res.data.data.data});
    })
    .catch(err => {
      console.log('food error', err.response);
    });
};

export const getFoodByCategoryAction = types => dispatch => {
  Axios.get(`${API_HOST}/food?types=${types}`)
    .then(res => {
      if (types === 'new_food') {
        dispatch({type: 'SET_NEW_TASTE', value: res.data.data.data});
      }
      if (types === 'popular') {
        dispatch({type: 'SET_POPULAR', value: res.data.data.data});
      }
      if (types === 'recommended') {
        dispatch({type: 'SET_RECOMMENDED', value: res.data.data.data});
      }
    })
    .catch(err => {
      console.log('food error', err.response);
    });
};
