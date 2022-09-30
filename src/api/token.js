import {
  URL_API,
} from './const';
// import {useDispatch} from 'react-redux';
import axios from 'axios';
// import {updateToken} from '../store/tokenReducer';
export const setToken = (token) => {
  localStorage.setItem('Basic', token);
};
export const setTokenState = (tokenState) => {
  localStorage.setItem('TokenState', tokenState);
};
export const deleteTokens = () => {
  localStorage.removeItem('Basic');
};

export const getToken = (login, password) => {
  let token = '';
  // const dispatch = useDispatch();
  const tokenData = {
    login,
    password,
  };
  if (login && password) {
    axios.post(`${URL_API}/login`, tokenData
    ).then(({data}) => {
      const error = data.error;
      if (!error) {
        const token = data.payload.token;
        setToken(token);
        setTokenState(true);
      } else {
        console.log('error: ', error);
        // dispatch(error());
      }
    });
  }
  if (localStorage.getItem('Basic')) {
    setToken(localStorage.getItem('Basic'));
    setTokenState(true);
    token = localStorage.getItem('Basic');
  }
  return token;
};

// export const getToken = () => {
//   let token = '';
//   const code = new URLSearchParams(location.search)
//     .get('code');
//   const tokenData = {
//     'client_id': CLIENT_ID,
//     'client_secret': CLIENT_SECRET,
//     'redirect_uri': REDIRECT_URI,
//     code,
//     'grant_type': GRANT_TYPE,
//   };
//   const dispatch = useDispatch();
//   if (location.search.includes('code')) {
//     axios.post(`${URL_TOKEN}`, tokenData
//     ).then(({data: {access_token: accessToken}}) => {
//       console.log(25, accessToken);
//       setToken(accessToken);
//       dispatch(updateToken(accessToken));
//     });
//   }
//   if (localStorage.getItem('Basic')) {
//     setToken(localStorage.getItem('Basic'));
//     token = localStorage.getItem('Basic');
//   }
//   return token;
// };

