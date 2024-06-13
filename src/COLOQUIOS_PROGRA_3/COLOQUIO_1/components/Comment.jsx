import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ username, content, date }) => {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="box">
      <strong>{username}</strong>
      <small>{formattedDate}</small>
      <p>{content}</p>
    </div>
  );
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
};

export default Comment;
