import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import axios from 'axios';
import * as yup from 'yup';


const initialFormValues = {
  email: '',
  username: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  email: '',
  username: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(resp => {
      setUsers(resp.data)
    }).catch(err => console.log(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(resp => {
      setUsers([resp.data, ...users ])
    }).catch(err => console.log(err))
    .finally(() => setFormValues(initialFormValues))
  }
  
  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: !!formValues.terms,
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className="container">
      <header><h1>Users App</h1></header>

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
