import React, { Component } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import WallLayerInput from '../WallLayerInput/WallLayerInput';

const SortableWallLayerInput = SortableElement(
  ({ sortIndex, item, deleteLayer }) => (
    <WallLayerInput
      key={item}
      index={sortIndex}
      deleteLayer={deleteLayer}
    />
  ),
);

const SortableWallLayerElementsContainer = SortableContainer(({ children }) => <div className="layers">{children}</div>);

class SortableWallLayerInputList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['1', '2', '3', '4'],
    };
    this.onSortEnd = this.onSortEnd.bind(this);
    this.deleteLayer = this.deleteLayer.bind(this);
  }

  onSortEnd({ oldIndex, newIndex }) {
    const { items } = this.state;
    this.setState(
      {
        items: arrayMove(items, oldIndex, newIndex),
      },
    );
  }

  deleteLayer(index) {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState(
      {
        items,
      },
    );
  }

  render() {
    const { items } = this.state;
    return (
      <SortableWallLayerElementsContainer onSortEnd={this.onSortEnd}>
        {items.map((item, i) => (
          <SortableWallLayerInput
            index={i}
            sortIndex={i}
            item={item}
            key={item}
            deleteLayer={this.deleteLayer}
          />
        ))}
      </SortableWallLayerElementsContainer>
    );
  }
}

export default SortableWallLayerInputList;
