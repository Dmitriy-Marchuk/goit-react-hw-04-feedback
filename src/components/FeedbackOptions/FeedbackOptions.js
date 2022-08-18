import React from 'react';
import '../../index.scss';

const FeedbackOptions = ({ onButtonGood, onButtonNeutral, onButtonBad }) => (
  <>
    <button className="button" type="button" onClick={onButtonGood}>
      Good
    </button>
    <button className="button" type="button" onClick={onButtonNeutral}>
      Neutral
    </button>
    <button className="button" type="button" onClick={onButtonBad}>
      Bad
    </button>
  </>
);

export default FeedbackOptions;
