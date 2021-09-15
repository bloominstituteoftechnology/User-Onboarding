import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

import Form from './Form';

import schema from '../src/Validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
  //submit: '' -- dont think you need this one
}
//do the errors here



function App() {
  return (
    <div className="App">
      <header className="App-header">

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
      </header>
      <Form
         values=''
         errors=''
         /> {/* will need to pass in the props? */}
    </div>
  );
}

export default App;
