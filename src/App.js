import React from 'react';
import Form from './components/Form'
import './App.css';
import * as yup from 'yup';
import schema from "./validation/formSchema"

function App() {

  console.log(schema);

  return (
    <div className="App">
      <header className="App-header">
      <p>nyanners is my god</p>
      </header>
    </div>
  );
}

export default App;
