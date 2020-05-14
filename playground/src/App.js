import React from 'react';
import logo from './logo.svg';
import From from "./component/Form"
import './App.css';

function App() {
  return (
    <div className="App" style={{
              color: 'white',
              border: '1px solid white',
              display: 'flex',
              flexDirection: 'column',
              lexWrap: 'wrap',
              textAlign: 'center',
              minHeight: '80vh',
              }}>
      <h1>Medical Check-Up Form</h1>
      <Form />
    </div>
  );
}

export default App;

export default App;
