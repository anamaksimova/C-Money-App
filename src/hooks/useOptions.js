/* eslint-disable max-len */
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {exchangeFromToRequestAsync} from '../store/exchange/exchangeAction';
export const useOptions = () => {
  const token = useSelector(state => state.tokenReducer.token);
  const options = useSelector(state => state.exchangeReducer.options);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(exchangeFromToRequestAsync());
  }, [token]);

  return [options];
};
