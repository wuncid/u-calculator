import React from 'react';
import './App.css';
import Header from '../Header/Header';
import InputDetails from '../../pages/InputDetails/InputDetails';

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <InputDetails />
      </div>
    </div>

  );
}

export default App;
