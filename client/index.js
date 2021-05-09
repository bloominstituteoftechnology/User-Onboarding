import App from './App';
import React from 'react';
import { render } from 'react-dom'; // ReactDOM.render
import './styles.scss'; // parcel installs dependency for this if not explicity listed in devDependencies

// React Components map props into elements
function HelloWorld(props) {
  return (
    <App />
  );
}

render(
  <HelloWorld />,                   // arg-1: Invoked component
  document.querySelector('#root')   // arg-2: DOM node we want to attach to
);