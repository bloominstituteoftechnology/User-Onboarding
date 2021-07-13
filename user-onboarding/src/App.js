import './App.css';
import axios from 'axios'
import * as yup from 'yup'
import React, {useState, useEffect} from 'react';
import Component from './Form'

import UserInfo from './UserInfo'

const startingFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false,
}

const startingFormErrors = {
  name: '',
  email: '',
  password: '',
}

const UserArray = []
const Disabled = true

function App() {

const [users, setUsers] = useState(UserArray)
const [formValues, setFormValues] = useState(startingFormValues)
const [formErrors, setFormErrors] = useState(startingFormErrors)
const [disabled, setDisabled] = useState(Disabled)

const addNewUser = (newUser) => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(({data}) => setUsers([data, ...users]))
  .catch(err => console.log('Error adding user:', err))
}

const Error = yup.object().shape({
  name: yup.string().min(2, "Must be at least 2 characters!").required("Username is required!"),
  email: yup.string().email("Must be valid email!").required("Email is required!"),
  password: yup.string().min(10, "Must be at least 10 characters!").required("Password is required!"),
  tos: yup.boolean().required("Must read the Terms of Service and check the box before moving on!"),
})

const input = (name, value) => {
  yup.reach(Error, name)
  .validate(value)
  .then(() => setFormErrors({
    ...formErrors,
    [name]: ''
  }))
  .catch(err => setFormErrors({
    ...formErrors,
    [name]: err.errors[0]
  }))
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const submitForm = () => {
  const tos = []
  Object.keys(formValues)
  .filter(key => key === 'I have read the Terms of Service')
  .forEach(key => {
    const value = formValues[key]
    if(value) {
      tos.push(key)
    }
  })

  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    tos
  }

  addNewUser(newUser)
  setFormValues(startingFormValues)
}

useEffect(() => {
  Error.isValid(formValues)
  .then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div className="App">
      <header className="User-App-Header">
       Add New User
      </header>
      <Component change={input} disable={disabled} values={formValues} errors={formErrors} submit={submitForm}/>
      {
        users.map((user, parameter) => {
          return(<UserInfo details={user} key={parameter} />)
        })
      }
    </div>
  )
}

export default App;
