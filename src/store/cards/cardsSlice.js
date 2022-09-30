import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  states: '',
  cards: [],
  error: '',
  loading: false,
};
export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    cardsRequest: (state) => {
      state.error = '';
      state.states = 'loading';
      state.loading = true;
    },
    cardsRequestSuccessNew: (state, action) => {
      state.states = 'loaded';
      state.cards = [...state.cards, action.payload];
      state.error = '';
      state.loading = false;
    },
    cardsRequestSuccess: (state, action) => {
      state.cards = action.payload,
      state.loading = false;
      state.states = 'loaded';
      state.error = '';
    },
    cardsRequestError: (state, action) => {
      state.states = 'error';
      state.error = action.error;
      state.loading = false;
    },
  },
});
export default cardsSlice.reducer;
