/* eslint-disable max-len */
import axios from 'axios';
import {URL_API_CARDS, URL_API_NEW_ACCOUNT} from '../../api/const';
import {cardsSlice} from './cardsSlice';
export const cardsRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  dispatch(cardsSlice.actions.cardsRequest());
  axios(`${URL_API_CARDS}`, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  }).then(({data}) => {
    console.log(data.payload);
    dispatch(cardsSlice.actions.cardsRequestSuccess(data.payload));
  })
    .catch(error => {
      dispatch(
        cardsSlice.actions.cardsRequestError({error: error.toString()}));
    });
};

export const newAccountRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  dispatch(cardsSlice.actions.cardsRequest());

  axios.request({method: 'post', url: `${URL_API_NEW_ACCOUNT}`,
    headers: {Authorization: `Basic ${token}`}}
  ).then(({data}) => {
    console.log('data: ', data);

    dispatch(cardsSlice.actions.cardsRequestSuccessNew(data.payload));
  }).catch(error => {
    dispatch(
      cardsSlice.actions.cardsRequestError({error: error.toString()}));
  });
};
