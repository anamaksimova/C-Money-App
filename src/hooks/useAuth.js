import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  authLogout, authRequestAsync,
} from '../store/auth/action';
export const useAuth = () => {
  const auth = useSelector(state => state.authReducer.data);
  const loading = useSelector(state => state.authReducer.loading);
  // const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(authRequestAsync());
  }, []);
  // }, [token]);
  const clearAuth = () => dispatch(authLogout());
  return [auth, loading, clearAuth];
};
