import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from '../Select/Select';
import Input from '../Input/Input';
import './WallLayerInput.css';

class WallLayerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layer: 'mineral wool',
      thickness: '',
    };
  }

  onSelectChange = (event) => {
    this.setState(
      {
        layer: event.target.value,
      },
    );
  }

  onInputChange = () => {

  }

  render() {
    const exampleLayers = ['mineral wool', 'reinforced concrete', 'pine', 'polystyrene'];
    const { layer, thickness } = this.state;
    const { index, deleteLayer } = this.props;
    return (
      <div className="card">
        <div className="row m-b-1 wallLayerInputContainer">
          <div className="m-r-1">{`${index + 1}.`}</div>
          <Select className="m-r-1 layerCardSelect" options={exampleLayers} value={layer} onChange={this.onSelectChange} />
          <Input className="m-r-05" />
          <div className="m-r-1">mm</div>
          <button type="button" onClick={() => deleteLayer(index)}>Delete</button>
        </div>
      </div>
    );
  }
}

WallLayerInput.propTypes = {
  index: PropTypes.number.isRequired,
  deleteLayer: PropTypes.func.isRequired,
};

export default WallLayerInput;
