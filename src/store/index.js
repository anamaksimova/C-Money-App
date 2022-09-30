import {tokenReducer, tokenMiddleware} from './tokenReducer';
import cardsReducer from './cards/cardsSlice';
import cardInfoReducer from './cardInfo/cardInfoSlice';
import exchangeReducer from './exchange/exchangeSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    tokenReducer,
    cardsReducer,
    cardInfoReducer,
    exchangeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});

