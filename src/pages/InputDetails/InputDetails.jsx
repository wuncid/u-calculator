import React from 'react';
import './InputDetails.css';
import Select from '../../components/Select/Select';
import Input from '../../components/Input/Input';

function InputDetails() {
  const constructionTypes = ['wall', 'roof'];
  return (
    <div>
      <h2>Input</h2>
      <div className="row" style={{ 'margin-bottom': '10px' }}>
        <div className="item">Construction type:</div>
        <Select options={constructionTypes} />
      </div>
      <div className="row">
        <div className="item">Outside:</div>
        <Input />
      </div>
    </div>
  );
}

export default InputDetails;
