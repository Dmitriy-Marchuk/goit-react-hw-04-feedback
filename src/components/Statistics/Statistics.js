import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import '../../index.scss';

const Statistics = ({ good, neutral, bad, total, feedback }) => {
  return total ? (
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
        Positive feedback:{' '}
        <span>{feedback ? feedback.toFixed(1) + '%' : 0}</span>
      </p>
    </div>
  ) : (
    <Notification message="No feedback given" />
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  feedback: PropTypes.number,
};
