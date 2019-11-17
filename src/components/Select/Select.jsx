import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Select.css';

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  render() {
    const { options } = this.props;
    return (
      <select 
        value={this.state.value}
        onChange={(e) => this.setState({value: e.target.value})}
      >
        {
          options.map((option, index) => <option key={option + index} value={index}>{option}</option>)
        }
      </select>
    );
  }

  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.oneOfType(
        [PropTypes.string, PropTypes.number]
      )
    )
  }
}
