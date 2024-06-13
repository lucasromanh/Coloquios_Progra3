import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('alert-box').classList.add('hide');
      setTimeout(onClose, 100); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div id="alert-box" className={`alert show`}>
      <button className="delete" onClick={onClose}></button>
      {message}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
