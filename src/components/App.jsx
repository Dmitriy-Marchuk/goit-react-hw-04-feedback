import React from 'react';
import Section from './Section/Section'
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import '../index.scss';


class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    (this.state.good /
      (this.state.good + this.state.neutral + this.state.bad)) *
    100;

  onButtonGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onButtonNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onButtonBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

    totalCount = () => {
    return Object.values(this.state).reduce((previousValue, newFeedback) => {
      return previousValue + newFeedback;
    }, 0);
  };

  render() {
    return (
      <div className='mainContainer'>
        <Section title="Please leave feedback">
        <FeedbackOptions
          onButtonGood={this.onButtonGood}
          onButtonNeutral={this.onButtonNeutral}
          onButtonBad={this.onButtonBad}
          />
        </Section>
        <Section title="Statistics">
          {this.totalCount() === 0 ? ( 
            <Notification message="There is no feedback yet :( " />
        ) : (
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          feedback={this.countPositiveFeedbackPercentage() || 0}
            />
            )}
        </Section>
      </div>
    );
  }
}

export default App;
