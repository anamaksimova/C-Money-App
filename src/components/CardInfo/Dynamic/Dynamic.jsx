/* eslint-disable max-len */
import style from './Dynamic.module.css';
import React from 'react';
import {useSelector} from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
// import faker from 'faker';
import PropTypes from 'prop-types';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const labels = ['09', '08', '07', '06', '05', '04'];
export const Dynamic = ({year}) => {
  console.log('year: ', year);
  console.log(style);
  const cardInfoTransactions = useSelector(state => state.cardInfoReducer.cardInfoTransactions);
  console.log('cardInfoTransactions: ', cardInfoTransactions);
  const array = cardInfoTransactions.filter(el => {
    // eslint-disable-next-line no-constant-condition
    if (el.date.substring(0, 4) === year &&
      (el.date.substring(6, 7) === '9' ||
      el.date.substring(6, 7) === '8' ||
      el.date.substring(6, 7) === '7' ||
      el.date.substring(6, 7) === '6' ||
      el.date.substring(6, 7) === '5' ||
      el.date.substring(6, 7) === '4')) return el.amount;
  });
  console.log('array: ', array);

  const arr = array.map(el => el.amount);
  console.log('arr: ', arr);
  const data = {
    arr,
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: arr,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <Line data={data} />
  );
};
Dynamic.propTypes = {
  year: PropTypes.string,
};
