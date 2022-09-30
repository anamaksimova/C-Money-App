import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  states: '',
  cardInfoId: '',
  cardInfoTransactions: [],
  error: '',
  loading: false,
};
export const cardInfoSlice = createSlice({
  name: 'cardInfo',
  initialState,
  reducers: {
    cardInfoRequest: (state) => {
      state.error = '';
      state.states = 'loading';
      state.loading = true;
    },

    cardInfoRequestSuccessTr: (state, action) => {
      state.states = 'loaded';
      state.cardInfoId = action.payload.account,
      state.cardInfoTransactions = action.payload.transactions;
      state.error = '';
      state.loading = false;
    },
    cardInfoRequestSuccess: (state, action) => {
      state.cardInfoId = action.payload.account,
      state.cardInfoTransactions = action.payload.transactions;
      state.loading = false;
      state.states = 'loaded';
      state.error = '';
    },
    cardInfoRequestError: (state, action) => {
      state.states = 'error';
      state.error = action.error;
      state.loading = false;
    },
  },
});
export default cardInfoSlice.reducer;
