import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <>
      <h1>{message}</h1>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
