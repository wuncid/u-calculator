import React, { Component } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import WallLayerInput from '../WallLayerInput/WallLayerInput';

const SortableWallLayerInput = SortableElement(
  ({ sortIndex }) => <WallLayerInput key={sortIndex} index={sortIndex} />,
);

const SortableWallLayerElementsContainer = SortableContainer(({ children }) => <div className="layers">{children}</div>);

class SortableWallLayerInputList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['1', '2', '3', '4'],
    };
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  }

  render() {
    const { items } = this.state;
    return (
      <SortableWallLayerElementsContainer onSortEnd={this.onSortEnd}>
        {items.map((item, i) => (
          <SortableWallLayerInput
            index={i}
            sortIndex={item}
            key={item}
          />
        ))}
      </SortableWallLayerElementsContainer>
    );
  }
}

export default SortableWallLayerInputList;
