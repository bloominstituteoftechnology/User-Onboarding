import React, { useState, useEffect } from 'react';
import Form from './Form'
import axios from 'axios'
// import * as yup from 'yup'
import './App.css';

const initialFormValues = {
//    TEXT
  username: '',
  email: '',
  password: '',
//    CHECKBOX
  tos: false,
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: false,
}
const initialUsers = [];
const initialDisabled = true;

function App() {
//!     ---STATES---
  const [ Users, setUsers ] = useState(initialUsers);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, serFormErrors ] = useState(initialFormErrors);
  const [ disabled, setDisabled ] = useState(initialDisabled);

//!     ---HELPERS---
  return (
    <div className="App">
      <p>hello :)</p>
      <Form 
        values={formValues}
        //change={inputChange}
        //submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
