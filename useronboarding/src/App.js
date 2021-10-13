import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import OnBoardingForm from './component/Form';
import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';
import { validate } from 'uuid';


const intialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false,
}

const intialFormErrors = {
  username: '',
  email: '',
  password: '',
}

const initialForm = []
const instialDisabled = true

function App() {

  const [form, setForm] = useState(initialForm)
  const [formValues, setFormValues] = useState(intialFormValues)
  const[formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(instialDisabled)


  axios.get('https://reqres.in')
    .then(res => {
      setForm=(res.data);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setFormValues(intialFormValues);
    })

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
