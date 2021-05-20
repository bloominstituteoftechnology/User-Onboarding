import logo from './logo.svg';
import './App.css';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';
import User from './User';
import UserForm from './Form';
// schema? do I have to install? import from somewhere?
import schema from './formSchema';

// Initial States
const initialFormValues = {
  // Text Inputs
  name: '',
  email: '',
  password: '',
  // Checkboxes
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: false,
}
const initialUsers = []
const initialDisabled = true

function App() {
// States
const [users, setUsers] = useState(initialUsers)                // Array of users objects
const [formValues, setFormValues] = useState(initialFormValues) // Object
const [formErrors, setFormErrors] = useState(initialFormErrors) // Object
const [disabled, setDisabled] = useState(initialDisabled)       // Boolean

// Helpers

const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.data, ...users])
      console.log('receiving a successful response back', res.data)
    })
    .catch(err => {
      console.log('unsuccessful response', err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
}

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}
// Event Handlers
const inputChange = (name, value) => {
  validate(name, value)
  setFormValues({
    ...formValues,
    [name]: value // Not an Array
  })
}

const formSubmit = () => {
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    terms: formValues.terms.trim(),
  }
  postNewUser(newUser)
}

// Side Effects

// userEffect(() => {
//   getUsers()
// }, [])

// useEffect(() => {
//   schema.isValid(formValues).then(valid => setDisabled(!valid))
// }, [formValues])

return (
    <div className="App">
      <header className="App-header">
        New User Form
      </header>

      <UserForm
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
