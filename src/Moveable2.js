import React, { Component } from 'react';
import { DropTarget, DragSource } from 'react-dnd';
// import data from './data.json';
// import _ from 'lodash';

// const components = Object.keys(data);
// const GOOGLE_IMAGE_URL =
//   'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png';

export const ItemTypes = {
  CATEGORY: 'category-item',
};

class Moveable2 extends Component {
  UNSAFE_componentWillReceiveProps = (props) => {
    // console.log(`componentWillReceiveProps: ${JSON.stringify(props)}`);
  };

  render() {
    var { draggableItem, draggableItemId, dropEvent } = this.props;

    const { connectDragSource, connectDropTarget, isDragging, isOver } =
      this.props;
    return connectDropTarget(
      connectDragSource(
        <div className='draggable'>
          <div
            className={`draggable-item`}
            style={{
              opacity: isDragging ? 0.5 : 1,
              backgroundColor: isOver ? 'red' : 'silver',
            }}
          >
            {draggableItem}
          </div>
        </div>
      )
    );
  }
}

/* get dragged */
const sourceSpec = {
  beginDrag(props) {
    // console.log(`sourceSpec beginDrag props: ${JSON.stringify(props)}`);
    return {
      draggableItem: props.draggableItem,
      draggableItemId: props.draggableItemId,
    };
  },
};

const sourceCollect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    item: monitor.getItem(),
    dropResult: monitor.getDropResult(),
  };
};

/* get dragged onto */
const targetSpec = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    console.log(`targetSpec drop props: ${JSON.stringify(props)}`);
  },
  hover(props, monitor, component) {
    // console.log(`targetSpec hover props: ${JSON.stringify(props)}`);
  },
};

const targetCollect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
};

// export default _.flow([
//   DragSource(ItemTypes.CATEGORY, sourceSpec, sourceCollect),
//   DropTarget(ItemTypes.CATEGORY, targetSpec, targetCollect),
// ])(Moveable2);
export default DragSource(
  ItemTypes.CATEGORY,
  sourceSpec,
  sourceCollect
)(DropTarget(ItemTypes.CATEGORY, targetSpec, targetCollect)(Moveable2));
