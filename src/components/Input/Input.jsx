import React, { Component } from 'react';
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
    return (
      <input type="text" value={value} onChange={(e) => this.setState({ value: e.target.value })} />
    );
  }
}

export default Input;
