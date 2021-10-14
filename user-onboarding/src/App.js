import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import Schema from './Schema';

const initialFormValues = {
  name:'',
  email:'',
  password:'',
  service: false,
}
const initailFormError = {
  name:'',
  email:'',
  password:'',
}

const initialValues = []
const initialDisabled = true

function App() {
  const [values, setValues] = useState(initialValues)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initailFormError)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const getValues = () =>{
    axios.get(`https://reqres.in/api/users`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })
  }

  const postNewValues = newValues => {
    axios.post('https://reqres.in/api/users', newValues)
    .then(res => {
      setValues([res.data, ...values]);
    }).catch(err => {
      console.error(err)
    }).finally(() =>{
      setFormValues(initialFormValues)
    })
  }


  const validate = (name,value) => {
    yup.reach(Schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name,value) => {
    validate(name,value);
    setFormValues({...formValues,[name]: value})
  }

  const formSubmit = () => {
    const newValues = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      service: [`Terms of Service`].filter(item => !!formValues[item])
    }
    console.log(newValues);
    postNewValues(newValues)
  }

  useEffect(() => {
    getValues()
  },[])

  useEffect(() => {
    Schema.isValid(formValues).then(valid => setDisabled(!valid))
  },[formValues])

  return(
    <div>
      <header>
        <h1>Set up your account</h1>
      </header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    
    </div>
  )
}

export default App;
