import React, { useState, useEffect } from 'react'
import User from './user'
import UserForm from './userform'

import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';

//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  password: '',
  card: '',
  num3: '',
  ///// CHECKBOXES /////
  terms: false,
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  card: '',
  num3: '',
}
const initialUsers = []
const initialDisabled = true


export default function App() {
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  const [users, setUsers] = useState(initialUsers)          // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean


  const getUsers = () => {
  
    axios.get(`https://reqres.in/api/users`)
      .then(res => {
        setUsers([res.data, ...users]);
      }).catch(err => {
        console.error(err);
      })
  }

  const postNewUser = newUser => {
  
    axios.post(`https://reqres.in/api/users`, newUser)
      .then(res => {
        setUsers([res.data, ...users]);
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {

    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      card: formValues.card,
      num3: formValues.num3,
    }

    console.log(newUser);
    postNewUser(newUser);

  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {

    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>Not a Scam App</h1></header>

      <UserForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <h2>List of Suckers</h2>
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
