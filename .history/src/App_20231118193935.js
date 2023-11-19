import './App.css';
import { HightlightBase } from './HightlightBase';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Movable from './Movable';
// import CategoryTreeFork from './CategoryTreeFork';
function App() {
  return (
    <div className='App'>
      {/* <HightlightBase /> */}
      {/* <Movable></Movable> */}
               <div>
          <MyComponent
            draggableItem={'draggableItem A'}
            draggableItemId={'draggableItemId-1'}
          ></MyComponent>
        </div>
        <div>
          <MyComponent
            draggableItem={'draggableItem B'}
            draggableItemId={'draggableItemId-2'}
          ></MyComponent>
      {/* <Movable></Movable> */}
      {/* <CategoryTreeFork></CategoryTreeFork> */}
    </div>
  );
}
const WrapperApp = DragDropContext(HTML5Backend)(App);
// export default App;
export default WrapperApp;
