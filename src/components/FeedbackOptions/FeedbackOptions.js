import React from 'react';
import '../../index.scss';

const FeedbackOptions = ({ options, onButtonLeaveFeedback }) => {
  const feedbacks = Object.keys(options);
  return (
    <>
      {feedbacks.map(feedback => (
        <button
          className="button"
          key={feedback}
          type="button"
          name={feedback}
          onClick={() => onButtonLeaveFeedback(feedback)}
        >
          {feedback}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
