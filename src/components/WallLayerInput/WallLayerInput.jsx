import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select/Select';
import Input from '../Input/Input';
import './WallLayerInput.css';

function WallLayerInput(props) {
  const exampleLayers = ['mineral wool', 'reinforced concrete', 'pine', 'polystyrene'];
  const { index } = props;
  return (
    <div className="card">
      <div className="row m-b-1 wallLayerInputContainer">
        <div className="m-r-1">{index}</div>
        <Select className="m-r-1 layerCardSelect" options={exampleLayers} />
        <Input className="m-r-05" />
        <div className="m-r-1">mm</div>
      </div>
    </div>
  );
}

WallLayerInput.propTypes = {
  index: PropTypes.number.isRequired,
};

export default WallLayerInput;
