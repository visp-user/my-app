import './App.css';
import { HightlightBase } from './HightlightBase';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Movable from './Movable';
import Moveable2 from './Moveable2';
import StyledTooltip from './StyledTooltip';
import React, { Fragment } from 'react';
import { Button } from '@mui/material';

function App() {
  return (
    <div className='App'>
      {/* <HightlightBase /> */}
      {/* <Movable></Movable> */}
      <div>
        <StyledTooltip title='This tooltip is customized via withStyles'>
          <Fragment>
            <Button>hover to activate tooltip</Button>
            <div style={{ marginBottom: '20px' }}></div>
          </Fragment>
        </StyledTooltip>
      </div>

      <Moveable2
        draggableItem={'draggableItem A'}
        draggableItemId={'draggableItemId-1'}
      ></Moveable2>
      <Moveable2
        draggableItem={'draggableItem B'}
        draggableItemId={'draggableItemId-2'}
      ></Moveable2>
      <Moveable2
        draggableItem={'draggableItem C'}
        draggableItemId={'draggableItemId-3'}
      ></Moveable2>
    </div>
  );
}
// const WrapperApp = DragDropContext(HTML5Backend)(App);
// export default WrapperApp;
export default App;
