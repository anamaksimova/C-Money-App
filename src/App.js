import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';
import {Routes, Route} from 'react-router-dom';
import {Footer} from './components/Footer/Footer';
// import Auth from './components/Auth';


const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  console.log(1);
  return (
    <Routes>
      <Route path='*'
        element={
          <>
            <Header />
            <Main />
            <Footer/>
          </>
        }/>

    </Routes>
  );
};

export default App;
