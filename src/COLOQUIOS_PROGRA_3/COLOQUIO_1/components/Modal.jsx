import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ title, content, onClose }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape' || event.key === 'Enter') {
      onClose();
    }
  };

  return (
    <div className="modal is-active">
      <button
        className="modal-background"
        onClick={onClose}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Close modal"
      ></button>
      <div className="modal-content">
        <div className="box">
          <h2 className="title">{title}</h2>
          <div>{content}</div>
          <input type="button" className="button is-primary" value="Close" onClick={onClose} />
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></button>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
