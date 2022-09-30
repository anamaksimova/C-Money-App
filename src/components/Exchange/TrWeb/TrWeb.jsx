/* eslint-disable max-len */
import style from './TrWeb.module.css';
import React, {useState, useRef, useEffect, useCallback} from 'react';
import {URL_WEBSOCKET} from '../../../api/const';
export const TrWeb = () => {
  console.log(style);
  const [isPaused, setIsPaused] = useState(false);
  console.log('setIsPaused: ', setIsPaused);
  const [data, setData] = useState(null);
  console.log('data: ', data);
  let count = 0;
  const ws = useRef(null);
  const gettingData = useCallback(() => {
    if (!ws.current) return;

    ws.current.onmessage = e => {
      if (isPaused) return;
      const message = JSON.parse(e.data);
      setData(message);
      count++;
    };
  }, [isPaused]);
  useEffect(() => {
    if (!isPaused) {
      ws.current = new WebSocket(URL_WEBSOCKET);
      gettingData();
    }

    return () => ws.current.close();
  }, [ws, isPaused]);

  return (
    <div className={style.exchange_tr_e} key={count}>
      <span className={style.exchange_td__first}>{data?.from}/{data?.to}</span>
      <span className={style.exchange_td__second}></span>
      <span className={style.exchange_td__third}>{data?.rate}
        { data?.change === 1 ? (<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z" fill="#0EFF0A"></path>
        </svg>) : (
        <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z" fill="#F10000"></path>
        </svg>)
        }
      </span>
    </div>
  );
};

