/* eslint-disable max-len */
import style from './CardInfo.module.css';
// import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useCardInfo} from '../../hooks/useCardInfo';
import {useForm} from 'react-hook-form';
import {transactionRequestAsync} from '../../store/cardInfo/cardInfoAction';
import {Tr} from './Tr/Tr';
import {useDispatch} from 'react-redux';
import {Dynamic} from './Dynamic/Dynamic';

export const CardInfo = () => {
  const [cardInfoId] = useCardInfo();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors}
  } = useForm({
    defaultValues: {
      from: '',
    },
  });
  useEffect(() => {
    setValue('from', cardInfoId);
  }, [cardInfoId]);
  const onSubmit = ({from, to, amount}) => {
    dispatch(transactionRequestAsync({from, to, amount}));
    navigate(`/account/${from}`);
  };
  const [year, setYear] = useState('2022');
  function changeSelect() {
    setYear(event.target.value);
    console.log(year);
  }
  return (
    <div className={style.layout_container}>
      <div className={style.account_container}>
        <div className={style.account_container__header}>
          <h2 className={style.account_title}>Счет №{cardInfoId}</h2>
          <a className={style.account_button} href="/currencies">
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.83 5.5L7.41 1.91L6 0.5L0 6.5L6 12.5L7.41 11.09L3.83 7.5L16 7.5V5.5L3.83 5.5Z" fill="white"></path>
            </svg>Вернуться</a>
        </div>
        <div className={style.account_dynamic}>
          <div className={style.account_dynamic__header}>
            <h3 className={style.account_dynamic__title}>Динамика</h3>
            <span className={style.account_dynamic__year}>2022</span>
            <select className={style.account_dynamic__select} value={year}
              onChange={changeSelect}>
              <option hidden="" >Год</option>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
            </select>
          </div>
          <Dynamic year={year}/>
        </div>
        <div className={style.account_history}>
          <h3 className={style.account_history__title}>История переводов</h3>
          <div className={style.table__container}>
            <table className={style.table}>
              <thead className={style.table_thead}>
                <tr>
                  <th className={style.table_th}>Счет</th>
                  <th className={style.table_th}>Сумма</th>
                  <th className={style.table_th}>Дата</th>
                </tr>
              </thead>
              <tbody className={style.table_tbody}>
                <Tr/>
              </tbody>
            </table>
          </div>
        </div>
        <div className={style.account_transaction}>
          <h3 className={style.account_title}>Перевод</h3>
          <form className={style.account_transaction__form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.account_transaction__input_wrap}>
              <label className={style.account_transaction__label} htmlFor='to'>Счет</label>
              <input className={style.account_transaction__input}
                type='text'
                id='to'
                {...register('to', {
                  required: {
                    value: true,
                    message: 'Введите счет получателя'
                  },
                  pattern: {
                    value: /^\d{16,26}$/,
                    message: 'Неверный номер счета'
                  }
                })}/>
            </div>
            <div className={style.account_transaction__input_wrap}>
              <label className={style.account_transaction__label} htmlFor='amount'>Сумма</label>
              <input className={style.account_transaction__input}
                type='number'
                id='amount'
                {...register('amount', {
                  required: {
                    value: true,
                    message: 'Введите сумму'
                  }
                })}
              />
            </div>
            <button className={style.account_button}>Перевести</button>

          </form>
          {errors.to && <p className={style.auth_form_error}>{errors.to.message}</p>}
          {errors.amount && <p className={style.auth_form_error}>{errors.amount.message}</p>}
        </div>
      </div>
    </div>
  );
};
