import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {cardsRequestAsync} from '../store/cards/cardsAction';

export const useCards = () => {
  const token = useSelector(state => state.tokenReducer.token);
  const cards = useSelector(state => state.cardsReducer.cards);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cardsRequestAsync());
  }, [token]);

  return [cards];
};
