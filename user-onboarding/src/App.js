import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'
import User from './User'

import schema from './Schema'
import axios from 'axios'
import * as yup from 'yup'


// Initial States
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: ''
}

const initialUsers = []
const initialDisabled = true


function App() {


  //States
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  // Helpers
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data)
      }).catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers(res.data.data, ...users)
      }).catch(err => console.error(err))

      setFormValues(initialFormValues)
  }


  // Event Handlers
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: ['check'].filter(term => !!formValues[term])
    }
    postNewUser(newUser);
  }


  // Side Effects
  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="container">
      <header><h1>New User Form</h1></header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
