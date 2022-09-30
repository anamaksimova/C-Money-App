import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  states: '',
  currencies: {},
  error: '',
  options: [],
  loading: false,
};
export const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    exchangeRequest: (state) => {
      state.error = '';
      state.states = 'loading';
      state.loading = true;
    },
    exchangeRequestSuccessTr: (state, action) => {
      state.states = 'loaded';
      state.currencies = action.payload,
      state.error = '';
      state.loading = false;
    },
    exchangeRequestSuccess: (state, action) => {
      state.currencies = action.payload,
      state.loading = false;
      state.states = 'loaded';
      state.error = '';
    },
    optionsRequestSuccess: (state, action) => {
      state.options = action.payload,
      state.loading = false;
      state.states = 'loaded';
      state.error = '';
    },
    exchangeRequestError: (state, action) => {
      state.states = 'error';
      state.error = action.error;
      state.loading = false;
    },
  },
});
export default exchangeSlice.reducer;
