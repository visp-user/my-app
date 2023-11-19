// import React, { Component } from 'react';
// import { DropTarget, DragSource } from 'react-dnd';
// import _ from 'lodash';

// export const ItemTypes = {
//   CATEGORY: 'category-item',
// };

// class CategoryTreeFork extends Component {
//   componentWillReceiveProps = (nextProps) => {
//     console.log('Next cat props', nextProps);
//   };

//   render() {
//     var { thisCat, childCat, level, dropEvent } = this.props;
//     const { connectDragSource, connectDropTarget, isDragging, isOver } =
//       this.props;

//     // return connectDropTarget(
//     //   connectDragSource(
//     //     <div className='category-tree-fork'>
//     //       <div
//     //         className={`category-list-item level-${level}`}
//     //         style={{
//     //           opacity: isDragging ? 0.5 : 1,
//     //           backgroundColor: isOver ? 'red' : 'silver',
//     //         }}
//     //       >
//     //         {thisCat.name}
//     //       </div>
//     //     </div>
//     //   )
//     // );

//     return connectDragSource(
//       <div className='category-tree-fork'>
//         <div
//           className={`category-list-item level-${level}`}
//           style={{
//             opacity: isDragging ? 0.5 : 1,
//             backgroundColor: isOver ? 'red' : 'silver',
//           }}
//         >
//           {thisCat.name}
//         </div>
//       </div>
//     );
//   }
// }

// /* get dragged */
// const sourceSpec = {
//   beginDrag(props) {
//     return { category_id: props.thisCat.category_id };
//   },
// };

// const sourceCollect = (connect, monitor) => {
//   return {
//     connectDragSource: connect.dragSource(),
//     isDragging: monitor.isDragging(),
//   };
// };

// /* get dragged onto */
// const targetSpec = {
//   drop(props, monitor, component) {
//     const item = monitor.getItem();
//     console.log('me or my friend?', item);
//   },
//   hover(props, monitor, component) {
//     console.log('yo what you hoverin there for homie?');
//   },
// };

// const targetCollect = (connect, monitor) => {
//   return {
//     connectDropTarget: connect.dropTarget(),
//     isOver: monitor.isOver(),
//   };
// };

// export default _.flow([
//   DragSource(ItemTypes.CATEGORY, sourceSpec, sourceCollect),
//   DropTarget(ItemTypes.CATEGORY, targetSpec, targetCollect),
// ])(CategoryTreeFork);
// // export default DragSource(
// //   ItemTypes.CATEGORY,
// //   sourceSpec,
// //   sourceCollect
// // )(DropTarget(ItemTypes.CATEGORY, targetSpec, targetCollect)(CategoryTreeFork));
