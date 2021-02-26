import React, { useState, useEffect } from 'react';
import Form from './Form';
import User from './User';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './validation/formSchema';
import './App.css';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false,
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
}
const initialUsers = []
const initialDisabled = true

export default function App() {
  const [users, setUsers] = useState(initialUsers)          // array of user objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }
  // console.log(users);

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res=> {
      const newData = [res.data, ...users];
      console.log(res.data)
      setUsers(newData)
      // console.log(newData)
    })
    .catch(err => {
      console.log(err)
    })
    setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(()=> {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: ['tos'].filter(accepted => formValues[accepted])
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>User Onboarding</h1></header>

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
  )
}

