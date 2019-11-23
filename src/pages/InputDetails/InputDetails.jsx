import React from 'react';
import './InputDetails.css';
import Select from '../../components/Select/Select';
import Input from '../../components/Input/Input';
import SortableWallLayerInputList from '../../components/SortableWallLayerInputList/SortableWallLayerInputList';

function InputDetails() {
  const constructionTypes = ['wall', 'roof'];
  return (
    <div>
      <h2>Input</h2>
      <div className="row m-b-1">
        <div className="m-r-1">Construction type:</div>
        <Select options={constructionTypes} />
      </div>
      <div className="row m-b-1">
        <div className="m-r-1">Outside:</div>
        <Input className="m-r-05" />
        <div className="m-r-1">°C</div>
        <Input className="m-r-05" />
        <div className="m-r-1">%RH</div>
      </div>
      <div className="row m-b-1">
        <div className="m-r-1">Layers from outside to inside:</div>
      </div>
      <SortableWallLayerInputList />
    </div>
  );
}

export default InputDetails;
