import logo from './logo.svg';
import './App.css';
import Form from './Form'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: ''
}
const initialUsers=[]
const initialDisabled = true

export default function App() {

  const [users, setUsers]=useState(initialUsers)
  const [formValues, setFormValues]=useState(initialFormValues)
  const [formErrors, setFormErrors]=useState(initialFormErrors)
  const [disabled, setDisabled]=useState(initialDisabled)

  const inputChange = (name, value)=>{
    setFormValues({...formValues, [name]:value})
  }

  const formSubmit = evt => {
    const newUser = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        terms: !!formValues.terms
    }
    console.log(newUser)
  }
    
  return (
    <div className="App">
      <Form
        values={formValues}
        errors={formErrors}
        disabled={disabled}
        change={inputChange}
        submit={formSubmit}
      />
    </div>
  );
}


