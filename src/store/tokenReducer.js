import {setToken, setTokenState, deleteTokens} from '../api/token';

const DELETE_TOKEN = 'DELETE_TOKEN';
const UPDATE_TOKEN = 'UPDATE_TOKEN';
const ERROR = 'ERROR';
const initionalState = {
  token: '',
  tokenState: false,
  error: false,
};

export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token,
  tokenState: true,
  error: false,
});
export const errorAdd = () => ({
  type: ERROR,
  error: true,
});
export const deleteToken = () => ({
  type: DELETE_TOKEN,
  token: '',
  tokenState: false,
  error: false,
});
export const tokenMiddleware = store => next => (action) => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
    setTokenState(true);
  }
  if (action.type === DELETE_TOKEN) {
    deleteTokens();
    // setToken('');
    setTokenState(false);
  }
  next(action);
};
export const tokenReducer = (state = initionalState, action) => {
  switch (action.type) {
    case DELETE_TOKEN:
      // setToken('');
      deleteTokens();
      setTokenState(false);
      return {
        ...state,
        token: '',
        tokenState: false,
      };

    case UPDATE_TOKEN:
      setToken(action.token);
      setTokenState(true);
      return {
        ...state,
        token: action.token,
        tokenState: true,
        error: action.error,
      };
    case ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
