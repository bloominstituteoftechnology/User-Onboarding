import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './Form';
import axios from 'axios';
import formSchema from './FormValidate'
import * as yup from 'yup';
import User from './User'

const initialFormValues = {
  first_name: '',
  email: '',
  password: '',
  tos: false,
}
const initialFormErrors = {
  first_name: '',
  email: '',
  password: '',
}
const initialDisabled = true
const initialUsers = []

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)  


  const getUsers = () => {
    axios.get(`https://reqres.in/api/users`)
      .then(resp => {
        console.log(resp.data.data, 'testing')
        setUsers(resp.data.data);
      }).catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
      .then(resp => {
        console.log(resp.data)
        setUsers([ resp.data, ...users ]);
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
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
      first_name: formValues.first_name.trim(),
      email: formValues.email.trim(),
      tos: !!formValues.tos,
      password: formValues.password
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
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
        })}
      
      </div>

    </div>
  );
}

export default App;