import React, { useState, useEffect } from 'react';
import Form from './Form'
import schema from './schema';
import UserForm from './UserForm';
import axios from 'axios';
import * as yup from 'yup';
import './Form.css'

const initialFormValues = {
  username: '',
  role: '',
  email: '',
  password: '',
  terms: true,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
}

const initialUsers = [];
const initialDisabled = true

export default function App() {

  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get('https://reqres.in/api/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        console.log('Error')
      })
  }

  const postNewUser = newUser => {
    axios
      .post('https://reqres.in/api/users', newUser)
      .then(response => {
        setUsers([...users, response.data])
        setFormValues(initialFormValues)
      })
      .catch(error => {
        //setFormValues(initialFormValues)
        console.log('Error')
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0]
        })
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      role: formValues.role,
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div className='container' >
      <header><h1>Welcome!</h1></header>

      <Form
        value={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {users.map(user => {
        return (
          <UserForm key={user.id} details={user} />
        )
      })}
    </div>
  )
}


