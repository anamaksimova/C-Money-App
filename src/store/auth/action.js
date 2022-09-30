import axios from 'axios';
import {URL_API} from '../../api/const';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const authRequest = () => ({
  type: AUTH_REQUEST,
});
export const authRequestSuccess = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data,
});
export const authRequestError = (error) => ({
  type: AUTH_REQUEST_ERROR,
  error,
});
export const authLogout = () => ({
  type: AUTH_LOGOUT,
});
export const authRequestAsync = () => (dispatch, getState) => {
  const loginData = {
    'login': 'developer',
    'password': 'methed',
  };

  dispatch(authRequest());
  axios.post(`${URL_API}/login`, loginData
  ).then(({data}) => {
    console.log('data: ', data);
  }).catch(err => {
    console.log(err);
    dispatch(authRequestError(err.toString()));
  });
};

