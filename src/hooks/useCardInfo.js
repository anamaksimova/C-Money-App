/* eslint-disable max-len */
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {cardInfoRequestAsync} from '../store/cardInfo/cardInfoAction';
import {useParams} from 'react-router-dom';
export const useCardInfo = () => {
  const {id} = useParams();
  console.log('id: ', id);
  const token = useSelector(state => state.tokenReducer.token);
  const cardInfoId = useSelector(state => state.cardInfoReducer.cardInfoId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cardInfoRequestAsync(id));
  }, [token]);

  return [cardInfoId];
};
