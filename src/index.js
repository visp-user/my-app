import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import WrapperApp from './App';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { render } from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';

const WrapperApp = DragDropContext(HTML5Backend)(App);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <StyledEngineProvider injectFirst>
//       <WrapperApp />
//     </StyledEngineProvider>
//   </React.StrictMode>
// );

// const WrapperApp = DragDropContext(HTML5Backend)(App);
render(
  // <React.StrictMode>
  <StyledEngineProvider injectFirst>
    <WrapperApp />
  </StyledEngineProvider>,
  // </React.StrictMode>,

  document.getElementById('root')
);
