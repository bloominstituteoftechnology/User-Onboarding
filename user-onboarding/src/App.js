import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import * as yup from 'yup';

import Form from './Form';
import User from './User';
import formSchema from './formSchema';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialUser = []
const initialDisabled = true


function App() {
  const [users, setUsers] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://buddies.com/api/friends')
      .then(res => {
        setUsers(res.data)
      }).catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
      }).catch(err => console.error(err))

      setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
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
      terms: formValues.terms.trim()
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <div><h1>User App</h1></div>

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
