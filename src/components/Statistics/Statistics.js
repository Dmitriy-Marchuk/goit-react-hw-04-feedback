import PropTypes, { number } from 'prop-types';
import React from 'react';
import '../../index.scss';

const Statistics = ({ good, neutral, bad, total, feedback }) => (
  <div className="statisticsContainer">
    <p>
      Good: <span>{good}</span>
    </p>
    <p>
      Neutral: <span>{neutral}</span>
    </p>
    <p>
      Bad: <span>{bad}</span>
    </p>
    <p>
      Total: <span>{total}</span>
    </p>
    <p>
      Positive feedback: <span>{feedback.toFixed(1)}%</span>
    </p>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: number,
  neutral: number,
  bad: number,
  total: number,
  feedback: number,
};
