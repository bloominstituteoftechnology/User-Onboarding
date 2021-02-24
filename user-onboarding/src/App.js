import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import Form from './Form'

import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  agree: false,
}


function App() {

const [fform, setForm] = useState(initialFormValues)

const change = event => {
  const { checked, value, name, type} = event.target
  const valueToUse = type === 'checkbox' ? checked : value
  setForm({...fform, [name]: valueToUse})
}

const [disabled, setDisabled] = useState(true);




  return (
    <div className="App">
     Hello World
     <Form values={fform} change={change} disabled={disabled}/>
    </div>
  );
}

export default App;
