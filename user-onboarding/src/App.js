import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './component/Form';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
  <h1>User-OnBoarding Details</h1>
  <Form/>
    </div>
  );
}

export default App;
