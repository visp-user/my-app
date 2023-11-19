import './App.css';
import { HightlightBase } from './HightlightBase';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Movable from './Movable';
import CategoryTreeFork
function App() {
  return (
    <div className='App'>
      {/* <HightlightBase /> */}
      <Movable></Movable>
      <Movable></Movable>
      <CategoryTreeFork></CategoryTreeFork>
    </div>
  );
}
const WrapperApp = DragDropContext(HTML5Backend)(App);
// export default App;
export default WrapperApp;
