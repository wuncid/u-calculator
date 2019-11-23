import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

function Select({
  options,
  value,
  onChange,
  className,
}) {
  return (
    <select
      className={className}
      value={value}
      onChange={onChange}
    >
      {
        options.map((option) => <option key={option} value={option}>{option}</option>)
      }
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number],
    ),
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Select.defaultProps = {
  className: '',
};

export default Select;
