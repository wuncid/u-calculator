import React from 'react';
import './Header.css';
import Select from '../Select/Select';

function Header() {
  const languages = ['English', 'Estonian'];
  return (
    <header className="container">
      <h1>U-VALUE & MOISTURE CALCULATOR</h1>
      <Select options={languages} />
    </header>
  );
}

export default Header;
