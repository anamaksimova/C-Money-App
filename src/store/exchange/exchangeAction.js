/* eslint-disable max-len */
import axios from 'axios';
import {URL_API} from '../../api/const';
import {exchangeSlice} from './exchangeSlice';
export const exchangeRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  dispatch(exchangeSlice.actions.exchangeRequest());
  axios(`${URL_API}/currencies`, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  }).then(({data}) => {
    console.log(data.payload);
    dispatch(exchangeSlice.actions.exchangeRequestSuccess(data.payload));
  })
    .catch(error => {
      dispatch(
        exchangeSlice.actions.exchangeRequestError({error: error.toString()}));
    });
};
export const exchangeFromToRequestAsync = ({from, to, amount}) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  axios.request({method: 'post', url: `${URL_API}/currency-buy`,
    headers: {Authorization: `Basic ${token}`}, data: {
      from,
      to,
      amount
    }
  }).then(({data}) => {
    console.log('data: ', data);

    dispatch(exchangeSlice.actions.exchangeRequestSuccessTr(data.payload));
  }).catch(error => {
    dispatch(
      exchangeSlice.actions.exchangeRequestError({error: error.toString()}));
  });
};

export const exchangeOptionsRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  axios(`${URL_API}/all-currencies`, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  }).then(({data}) => {
    console.log(data.payload);
    dispatch(exchangeSlice.actions.optionsRequestSuccess(data.payload));
  }).catch(error => {
    dispatch(
      exchangeSlice.actions.exchangeRequestError({error: error.toString()}));
  });
};


