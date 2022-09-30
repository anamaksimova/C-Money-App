/* eslint-disable max-len */
import style from './TrMyCur.module.css';
console.log('style: ', style);
import {useSelector} from 'react-redux';
export const TrMyCur = () => {
  let count = 0;
  const currencies = useSelector(state => state.exchangeReducer.currencies);
  const values = Object.values(currencies);
  return (values.map(el => {
    const {amount, code} = el;
    count++;
    return (
      <tr key={count}>
        <td className={style.exchange_td__code}>{code}</td>
        <td className={style.exchange_td__amount}>{amount}</td>
      </tr>
    );
  }));
};
