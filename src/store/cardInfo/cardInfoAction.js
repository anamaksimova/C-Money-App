/* eslint-disable max-len */
import axios from 'axios';
import {URL_API} from '../../api/const';
import {cardInfoSlice} from './cardInfoSlice';

export const cardInfoRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  dispatch(cardInfoSlice.actions.cardInfoRequest());

  axios(`${URL_API}/account/${id}`, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  }).then(({data}) => {
    console.log(data.payload);
    dispatch(cardInfoSlice.actions.cardInfoRequestSuccess(data.payload));
  })
    .catch(error => {
      dispatch(
        cardInfoSlice.actions.cardInfoRequestError({error: error.toString()}));
    });
};

export const transactionRequestAsync = ({from, to, amount}) => (dispatch, getState) => {
  console.log('amount: ', amount);
  console.log('to: ', to);
  console.log('from: ', from);
  const token = getState().tokenReducer.token;

  axios.request({method: 'post', url: `${URL_API}/transfer-funds`,
    headers: {Authorization: `Basic ${token}`}, data: {
      from,
      to,
      amount
    }
  }).then(({data}) => {
    console.log('data: ', data);

    dispatch(cardInfoSlice.actions.cardInfoRequestSuccessTr(data.payload));
  }).catch(error => {
    dispatch(
      cardInfoSlice.actions.cardInfoRequestError({error: error.toString()}));
  });
};

