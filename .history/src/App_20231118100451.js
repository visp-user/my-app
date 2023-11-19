import './App.css';
import { HightlightBase } from './HightlightBase';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Movable from './Movable';

function App() {
  return (
    <div className='App'>
      <DndProvider backend={HTML5Backend}>
        {/* <HightlightBase /> */}
        <Movable></Movable>
        <Movable></Movable>
      </DndProvider>
    </div>
  );
}

export default App;
