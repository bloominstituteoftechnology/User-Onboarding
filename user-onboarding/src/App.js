import React, { useState, useEffect } from 'react'
import Member from './components/Member'
import SubForm from './components/Form'

import axios from 'axios';
import schema from './components/validation';
import * as yup from 'yup';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  card: '',
  num3: '',
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
  const [users, setUsers] = useState(initialUsers)        
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 


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
      <header><h1>App</h1></header>

      <SubForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
      />
      <h2>List of Members</h2>
      {
        users.map(user => {
          return (
            <Member key={user.id} details={user} />
          )
        })
      }
    </div>
  )
}