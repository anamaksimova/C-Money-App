/* eslint-disable max-len */
import style from './Option.module.css';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {exchangeOptionsRequestAsync} from '../../../store/exchange/exchangeAction';
export const Option = () => {
  console.log('style: ', style);
  const token = useSelector(state => state.tokenReducer.token);
  const options = useSelector(state => state.exchangeReducer.options);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(exchangeOptionsRequestAsync());
  }, [token]);
  let count = 0;
  return (options.map(el => {
    count++;
    return (
      <option key={count} value={el}>{el}</option>
    );
  }));
};
