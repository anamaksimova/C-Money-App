/* eslint-disable max-len */
import style from './AuthForm.module.css';
import {useForm} from 'react-hook-form';
// import {Link} from 'react-router-dom';
// import {useAuth} from '../../hooks/useAuth';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getToken} from '../../api/token';
import {updateToken, errorAdd} from '../../store/tokenReducer';
import {useSelector} from 'react-redux';
// import {useEffect} from 'react';
export const AuthForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorss = useSelector(state => state.tokenReducer.error);
  console.log('errorss: ', errorss);
  let error;
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();
  const onSubmit = ({login, password}) => {
    const token = getToken(login, password);
    if (!token) {
      error = 'Неверный логин или пароль';
      dispatch(errorAdd());
    } else {
      dispatch(updateToken(token));
      navigate('/currencies');
    }
  };

  return (
    <div className={style.layout_container}>
      <div className={style.auth_container}>
        <div className={style.auth_wrapper}>
          <form className={style.auth_form} onSubmit={handleSubmit(onSubmit)}>
            <legend className={style.auth_form_title}>Вход в аккаунт</legend>
            {errorss ? <p>Неверный логин или пароль</p> : ''}
            <div className={style.auth_form_input_wrapper}>
              <span className={style.auth_form_error}>{error}</span>
              <label className={style.auth_form_label}
                htmlFor='login'>Логин</label>
              <input className={style.auth_form_input}
                type='text'
                id='login'
                {...register('login', {
                  required: {
                    value: true,
                    message: 'Введите login'
                  },
                  pattern: {
                    value: /^[a-zA-Z]\w{5,}/,
                    message: 'Неверный login'
                  }
                })}
              />
              {errors.login && <p className={style.auth_form_error}>{errors.login.message}</p>}
            </div>
            <div className={style.auth_form_input_wrapper}>
              {/* <span className={style.auth_form_error}></span> */}
              <label className={style.auth_form_label}
                htmlFor='login'>Пароль</label>
              <input type='password'
                id='password'
                className={style.auth_form_input}
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Введите password'
                  },
                  pattern: {
                    value: /^[a-zA-Z]\w{5,}/,
                    message: 'Неверный password'
                  }
                })} />
              {errors.password && <p className={style.auth_form_error}>{errors.password.message}</p>}
            </div>
            <button className={style.auth_form_button} type="submit">Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
};
