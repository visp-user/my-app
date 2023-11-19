// import { Component } from 'react';
// import { DragSource } from 'react-dnd';
// import { DropTarget } from 'react-dnd';
// import data from './data.json';

// const components = Object.keys(data);
// const GOOGLE_IMAGE_URL =
//   'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png';

// class Movable extends Component {
//   constructor() {
//     super();
//     this.state = {
//       components: [],
//     };
//   }
//   render() {
//     const { connectDragSource, isDragging, /* connectDropTarget, */ isOver } =
//       this.props;

//     console.log('this.props ', this.props);
//     const { connectDropTarget, components } = this.props;
//     console.log('dropped components ', components);

//     return (
//       <div className='source'>
//         <ul>
//           {components.map((component) => {
//             return <ListItem key={component} component={component} />;
//           })}
//         </ul>
//       </div>
//     );

//     // return connectDragSource(
//     //   connectDropTarget(
//     //     <div style={{ opacity: isDragging ? 0.5 : 1 }}>Just an example</div>
//     //   )
//     // );
//   }
// }
// const sourceSpec = {
//   beginDrag(props, monitor, component) {
//     const item = { ...props };
//     console.log('beginDrag', item);
//     return item;
//   },
// };

// const sourceCollect = (connect, monitor) => {
//   return {
//     connectDragSource: connect.dragSource(),
//     connectDragPreview: connect.dragPreview(),
//     isDragging: monitor.isDragging(),
//   };
// };

// const ListItem = DragSource(
//   'Movable',
//   sourceSpec,
//   sourceCollect
// )(
//   class extends Component {
//     componentDidMount() {
//       const img = document.createElement('img');
//       img.setAttribute('src', GOOGLE_IMAGE_URL);
//       this.props.connectDragPreview(img);
//     }

//     render() {
//       const { connectDragSource, component } = this.props;
//       return connectDragSource(<li>{component}</li>);
//     }
//   }
// );

// Movable = DragSource(
//   'Movable',
//   sourceSpec /* elementSource */,
//   (connect, monitor) => ({
//     connectDragSource: connect.dragSource(),
//     isDragging: monitor.isDragging(),
//   })
// )(Movable);

// Movable = DropTarget('Movable', {} /* elementTarget */, (connect) => ({
//   connectDropTarget: connect.dropTarget(),
// }))(Movable);

// export default Movable;

// // export default _.flow([
// //     DragSource(ItemTypes.CATEGORY, sourceSpec, sourceCollect),
// //     DropTarget(ItemTypes.CATEGORY, targetSpec, targetCollect)
// // ])(CategoryTreeFork)
