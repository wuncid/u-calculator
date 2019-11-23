import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { value } = this.state;
    const { className } = this.props;
    return (
      <input
        className={className}
        type="text"
        value={value}
        onChange={
          (e) => this.setState({ value: e.target.value })
        }
      />
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
};

Input.defaultProps = {
  className: '',
};

export default Input;
