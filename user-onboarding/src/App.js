import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
import Form from './component/Form';
import schema from './validation/formSchema';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  termsOfService: false,
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  termsOfService: '',
}
const initialUsers = []
const initialDisabled = true

export default function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

 const getUsers = () =>{
  axios.get('https://reqres.in/api/users')
  .then(res => {
    setUsers(res.data)
  })
  .catch(err => {
    console.error(err)

  })
 }

const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res => {
    setUsers([ res.data, ...users])
    setFormValues(initialFormValues)
  })
  .catch(err => console.error(err))
  .finally(() => setFormValues(initialFormValues))
}

const validate = ( username, value) => {
yup.reach(schema, username)
.validate(value)
.then(() => setFormErrors({ ...formErrors, [username]: '' }))
.catch(err => setFormErrors({ ...formErrors, [username]: err.errors[0] }))
}

const inputChange = (username, value) => {
  validate(username, value);
  setFormValues({ 
    ...formValues,
    [username]: value
  })
}

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: ['termsOfService'].filter(tos => !!formValues[tos])
    }
    postNewUser(newUser)
  }
useEffect(() => {
  getUsers()
}, [])

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

return (
  <div className="App">
    <header><h1>User App</h1></header>
  <Form 
    values={formValues}
    change={inputChange}
    submit={formSubmit}
    errors={formErrors}
    disabled={disabled}
  />

  </div>
  )
}
