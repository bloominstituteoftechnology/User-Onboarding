import logo from './logo.svg';
import React from 'react';
import './App.css';
// import * as yup from 'yup';
 import axios from '../axios'
import Form from './component/Form.js';

function App() {


  const getAliens = () => {
    axios.get("http:")
  }


  return (
    <div className="App">
      <header>
      <h1>Alien Form</h1>
      </header>

      <AlienForm
      values={formValues}
      change={inputChange}
      submit={formsSubmit}
      disabled={formErrors}
      />
    


</div>
  );
}

export default App;
