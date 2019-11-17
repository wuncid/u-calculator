import React, { Fragment } from 'react';
import './App.css';
import Header from '../Header/Header';
import Input from '../../pages/Input/Input';

function App() {
  return (
    <Fragment>
      <div className="layout">
        <Header />
        <div className="content">
          <Input />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
