import '../../index.scss';

const FeedbackOptions = ({ options, onButtonLeaveFeedback }) => {
  return options.map(option => (
    <button
      className="button"
      key={option}
      type="button"
      name={option}
      onClick={() => onButtonLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

export default FeedbackOptions;
