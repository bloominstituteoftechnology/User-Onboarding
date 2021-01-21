import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './Form'
import axios from 'axios'
import * as yup from 'yup'

export default function App() {
   
//initial states
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
 }
  
 const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: '',
 }
  
 const initialUsers = []
 const initialDisabled = true

//schema
 const schema = yup.object().shape({
  username: yup
      .string()
      .required('Username is required')
      .min(5, 'Username must be at least 3 characters long')
      .max(12, 'Username cannot exceed 12 characters'),
  email: yup
      .string()
      .email('Must be a valid email address')
      .required('Email is required'),
  password: yup
      .string()
      .required('Password is required')
      .min(5, 'Password must be at least 5 characters long')
      .max(15, 'Password cannot exceed 15 characters'),
  terms: yup
      .boolean()
      .oneOf([true], 'You must agree to the terms of service')
})
  
  //states
  const [users, setUser] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  //input change
  const inputChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
      .then(() => {
        setFormErrors({
          [name]: '',
          ...formErrors,
          })
        })
        .catch(err => {
          setFormErrors({
            [name]: err.errors[0],
            ...formErrors
          })
        })
        setFormValues({
            [name]: value,
            ...formValues,
          })
  }
    
  
  
  const postNewUser = newUser => {
    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then(res => {
        setUser([res.data, ...users])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms.trim()
    }
  
    postNewUser(newUser)
  }

  //side effects
  useEffect(() => {
    schema
      .isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])
  
  return (
    <div className="container">
      <header>
        <h1>User App</h1>
      </header>
  
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}
