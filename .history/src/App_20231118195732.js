import './App.css';
import { HightlightBase } from './HightlightBase';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Movable from './Movable';
import Moveable2 from './Moveable2';
function App() {
  return (
    <div className='App'>
      {/* <HightlightBase /> */}
      {/* <Movable></Movable> */}
      <div>
        <Moveable2
          draggableItem={'draggableItem A'}
          draggableItemId={'draggableItemId-1'}
        ></Moveable2>
      </div>
      <div>
        <Moveable2
          draggableItem={'draggableItem B'}
          draggableItemId={'draggableItemId-2'}
        ></Moveable2>
      </div>
      {/* <Movable></Movable> */}
      {/* <CategoryTreeFork></CategoryTreeFork> */}
    </div>
  );
}
// const WrapperApp = DragDropContext(HTML5Backend)(App);
// export default WrapperApp;
export default App;
