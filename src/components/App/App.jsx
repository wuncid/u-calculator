import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Input from '../../pages/Input/Input';

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Input />
      </div>
    </div>

  );
}

export default App;
