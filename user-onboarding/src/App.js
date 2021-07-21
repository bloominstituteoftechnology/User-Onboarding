import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import * as yup from 'yup'

import './App.css';

const initalValues = {
  name: '',
  email: '',
  password: '',
  tos: ''
}
const initialErrors = {
  name: '',
  email: '',
  password: '',
  tos: ''
}

function App() {
  const [users, setUsers] = useState([])
  const [values, setValues] = useState(initalValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(true)
  
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
    </div>
  );
}

export default App;
