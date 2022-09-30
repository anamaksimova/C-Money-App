// import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {newAccountRequestAsync} from '../../store/cards/cardsAction';
import {Card} from './Card/Card';
import style from './Currencies.module.css';
import {useNavigate} from 'react-router-dom';
export const Currencies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const token = useSelector(state => state.tokenReducer.token);
  const newAccount = () => {
    dispatch(newAccountRequestAsync());
  };

  console.log(88);
  return (
    <div className={style.layout_container}>
      <div className={style.currencies_container}>
        <h2 className={style.currencies_title}>Здравствуйте, Анастасия!</h2>
        <button className={style.currencies_button} onClick={() => {
          newAccount();
          navigate('/currencies');
        }
        }>
        Открыть новый счет</button>
        <div className={style.currencies_currencies}>
          <h3 className={style.currencies_currencies_title}>Мои счета</h3>
          <>
            <ul className={style.currencies_list}>
              <Card/>
            </ul>
          </>
        </div>
      </div>
    </div>
  );
};
