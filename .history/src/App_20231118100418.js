import './App.css';
import { HightlightBase } from './HightlightBase';
import Movable from './Movable';

function App() {
  return (
    <div className='App'>
      <DndProvider backend={HTML5Backend}>
      {/* <HightlightBase /> */}
      <Movable></Movable>
      <Movable></Movable>
    </div>
  );
}

export default App;
