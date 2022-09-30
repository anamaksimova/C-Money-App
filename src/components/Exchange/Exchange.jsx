/* eslint-disable max-len */
import style from './Exchange.module.css';
import {useExchange} from '../../hooks/useExchange';
import {TrMyCur} from './TrMyCur/TrMyCur';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {exchangeFromToRequestAsync} from '../../store/exchange/exchangeAction';
import {Option} from './Option/Option';
import {TrWeb} from './TrWeb/TrWeb';
export const Exchange = () => {
  const [currencies] = useExchange();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log('currencies: ', currencies);
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();
  const onSubmit = ({from, to, amount}) => {
    dispatch(exchangeFromToRequestAsync({from, to, amount}));
    navigate(`/exchange`);
  };

  return (
    <div className={style.layout_container}>
      <div className={style.exchange_container}>
        <h2 className={style.exchange_title}>Обмен валюты</h2>
        <div className={style.exchange_wrapper}>
          <div className={style.exchange_rates__wrapper}>
            <h3 className={style.exchange_rates__title}>Изменение курса в режиме реального времени</h3>
            <div className={style.exchange_tbody}>
              <TrWeb/>
            </div>
          </div>
          <div className={style.exchange_right__wrapper}>
            <div className={style.exchange_exchange__wrapper}>
              <h3 className={style.exchange_exchange__title}>Обмен валюты</h3>
              <form className={style.exchange_form} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.exchange_inputs__wrapper}>
                  <div className={style.exchange_input_wrapper}>
                    <label className={style.exchange_label} htmlFor='from'>Откуда</label>
                    <select className={style.exchange_input}
                      id='from'
                      {...register('from', {
                        required: {
                          value: true,
                          message: 'Введите код валюты'
                        },
                      })}
                    >
                      <Option/>
                    </select>
                  </div>
                  <div className={style.exchange_input_wrapper}>
                    <label className={style.exchange_label}>Куда</label>
                    <select className={style.exchange_input}
                      id='to'
                      {...register('to', {
                        required: {
                          value: true,
                          message: 'Введите код валюты'
                        },
                      })}>
                      <Option/>
                    </select>
                  </div>
                  <div className={style.exchange_input_wrapper}>
                    <span className={style.eExchange_form__error}></span>
                    <label className={style.exchange_label}>Сумма</label>
                    <input className={style.exchange_input}
                      type='number'
                      id='amount'
                      {...register('amount', {
                        required: {
                          value: true,
                          message: 'Введите сумму'
                        },
                      })}/>
                  </div>
                  <button className={style.exchange_button}>Обменять</button></div>
              </form>
              {errors.from && <p className={style.auth_form_error}>{errors.from.message}</p>}
              {errors.to && <p className={style.auth_form_error}>{errors.to.message}</p>}
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th className={style.exchange_currency__title} colSpan="2">Мои валюты</th>
                  </tr>
                </thead>
                <tbody>
                  <TrMyCur/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
