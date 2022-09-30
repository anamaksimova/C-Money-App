/* eslint-disable max-len */
import style from './Tr.module.css';
console.log('style: ', style);
import {useSelector} from 'react-redux';
import {formatDate} from '../../../utils/formatDate';
export const Tr = () => {
  const cardInfoTransactions = useSelector(state => state.cardInfoReducer.cardInfoTransactions);
  const cardInfoId = useSelector(state => state.cardInfoReducer.cardInfoId);
  const newh = cardInfoTransactions.slice(0);
  newh.reverse();

  let count = 0;
  return (newh.map(el => {
    const {amount, date, from, to} = el;
    count++;
    if (count <= 5) {
      return (
        <tr key={count}>
          {from === cardInfoId ? <td className={style.table_td}>{to}</td> :
          <td className={style.table_td}>{from}</td>}
          {from === cardInfoId ? (<td className={style.table_td_red}>{amount}</td>) :
          (<td className={style.table_td}>{amount}</td>)}
          <td className={style.table_td}>{formatDate(date)}</td>
        </tr>
      );
    }
  }));
};
