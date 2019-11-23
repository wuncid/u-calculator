import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Select.css';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    const { options, className } = this.props;
    const { value } = this.state;
    return (
      <select
        className={className}
        value={value}
        onChange={(e) => this.setState({ value: e.target.value })}
      >
        {
          options.map((option, index) => <option key={option} value={index}>{option}</option>)
        }
      </select>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number],
    ),
  ).isRequired,
  className: PropTypes.string,
};

Select.defaultProps = {
  className: '',
}

export default Select;
