import style from './Main.module.css';
import AuthForm from '../AuthForm';
import {Route, Routes} from 'react-router-dom';
import Currencies from '../Currencies';
import Exchange from '../Exchange';
import CardInfo from '../CardInfo';


export const Main = () => (
  <main className={style.main}>
    <Routes>
      <Route path='/' element={<AuthForm/>}></Route>
      <Route path='/currencies' element={<Currencies/>}/>
      <Route path='/exchange' element={<Exchange/>}/>
      <Route path='/account/:id' element={<CardInfo/>}/>
    </Routes>
  </main>
);
