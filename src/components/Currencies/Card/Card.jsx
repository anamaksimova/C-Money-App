/* eslint-disable max-len */
import {useCards} from '../../../hooks/useCards';
import style from './Card.module.css';
import {formatDate} from '../../../utils/formatDate';

export const Card = () => {
  const [cards] = useCards();
  console.log('cards: ', cards);
  let dateOf;
  return (cards.map(el => {
    const {account: id, balance, transactions} = el;
    if (transactions[0]) {
      const {date} = transactions[0];
      dateOf = date;
    } else {
      dateOf = 0;
    }

    return (
      <li key={id} className={style.card}>
        <a href={`/account/${id}`}>
          <p className={style.card_id}>{id}</p>
          <p className={style.card_balance}>{balance}</p>
          <div className={style.card_info}>
            <div>
              <p>открыт</p>
              <p>10.03.2016</p>
            </div>
            <div>
              <p>последняя операция</p>
              <time dateTime={dateOf}>{dateOf ? formatDate(dateOf) : ''}</time>
            </div>
          </div>
        </a>
      </li>
    );
  }));
};
