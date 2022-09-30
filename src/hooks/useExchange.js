/* eslint-disable max-len */
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {exchangeRequestAsync} from '../store/exchange/exchangeAction';
export const useExchange = () => {
  const token = useSelector(state => state.tokenReducer.token);
  const currencies = useSelector(state => state.exchangeReducer.currencies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(exchangeRequestAsync());
  }, [token]);

  return [currencies];
};
