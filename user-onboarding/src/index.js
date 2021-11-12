import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './Components/App.js';


render(
  <App />

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  , document.getElementById('root')
)
