import React, { Component } from 'react';
import './Header.css';
import Select from '../Select/Select';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'English',
    };
  }

  onLanguageChange = (event) => {
    this.setState(
      {
        language: event.target.value,
      },
    );
  }

  render() {
    const languages = ['English', 'Estonian'];
    const { language } = this.state;
    return (
      <header className="row">
        <h1>U-VALUE & MOISTURE CALCULATOR</h1>
        <Select options={languages} onChange={this.onLanguageChange} value={language} />
      </header>
    );
  }
}

export default Header;
