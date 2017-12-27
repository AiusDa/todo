import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {

  return (
    // eslint-disable-next-line
    <a href="#"
      className="btn"
      disabled={active ? true: false}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  );
  
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link;
