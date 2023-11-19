import './App.css';
import { HightlightBase } from './HightlightBase';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Movable from './Movable';
import Moveable2 from './Moveable2';
import StyledTooltip from './StyledTooltip';
import React, { Fragment, createElement, useRef, forwardRef } from 'react';
import { Button } from '@mui/material';
import Typography from '@material-ui/core/Typography';
import data2 from './data2.json';

function App() {
  const extractions = data2;

  return (
    <div>
      <Typography component={'span'} variant={'body1'}>
        {React.Children.toArray(
          extractions.map((extraction) => {
            return (
              <>
                <span> test </span>
                {/* <StyledTooltip title='This tooltip is customized via withStyles'> */}
                {/* Cannot read properties of undefined (reading 'addEventListener') */}
                {/* <Fragment> */}
                <Moveable2
                  onClick={() => console.log(`onClick ${extraction.value}`)}
                  draggableItem={extraction.value}
                  draggableItemId={extraction.id}
                ></Moveable2>
                {/* </Fragment> */}
                {/* </StyledTooltip> */}
              </>
            );
          })
        )}
      </Typography>
    </div>
  );
}
// const WrapperApp = DragDropContext(HTML5Backend)(App);
// export default WrapperApp;
export default App;
