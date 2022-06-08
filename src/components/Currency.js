import React from 'react';
import '../Style.css';
import PropTypes from 'prop-types';

const Currency = (props, {children}) => {
    return (
        <div className={props.class}>
        {children}
      </div>
    )
}

Currency.propTypes = {
  class : PropTypes.string,
}

Currency.defaultProps = {
  class: "bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"
}

export default Currency;