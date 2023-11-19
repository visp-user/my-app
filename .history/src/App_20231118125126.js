import './App.css';
import { HightlightBase } from './HightlightBase';

import Movable from './Movable';

function App() {
  return (
    <div className='App'>
      {/* <HightlightBase /> */}
      <Movable></Movable>
      <Movable></Movable>
    </div>
  );
}
const WrapperApp = DragDropContext(HTML5Backend)(App);
// export default App;
export default WrapperApp;
