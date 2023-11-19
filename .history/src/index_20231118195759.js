import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import WrapperApp from './App';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { render } from 'react-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <WrapperApp />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
const WrapperApp = DragDropContext(HTML5Backend)(App);
render(
   <React.StrictMode></React.StrictMode>
  <WrapperApp />, document.getElementById('root'));
