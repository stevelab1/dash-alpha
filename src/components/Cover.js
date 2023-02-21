import React from 'react';
import PropTypes from 'prop-types';

const Cover = ({ image, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
};

Cover.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Cover;
