import React, {useState} from 'react';
import Section from './Section/Section'
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

import '../index.scss';


const App = () => {

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = (good / countTotalFeedback) * 100;

  const onButtonLeaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
    
      default:
        throw new Error(`Unknows feedback type = ${type}`);
    }
  } 

    return (
      <div className='mainContainer'>
        <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onButtonLeaveFeedback={onButtonLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          feedback={countPositiveFeedbackPercentage}
            />
        </Section>
      </div>
    );
}

export default App;
