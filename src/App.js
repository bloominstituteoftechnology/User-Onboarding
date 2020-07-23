import React, { useState, useEffect } from 'react';
import User from './form-components/User'
import UserForm from './form-components/UserForm'
import formSchema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'
import './App.css';

//initial state
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: {
    termsOfService: false,
    ofAge: false,
    usCitizen: false,
  },
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true

export default function App() {
// state goes at the top
const [users, setUsers] = useState(initialUsers)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

//axios calls
const getUsers = () => { 
axios.get('https://reqres.in/api/users')
.then(res => {
  setUsers(res.data.data)
  })
.catch(err => {
  console.log("Sorry New Orleans its all dark!")
  })
}


const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res => {
    setUsers([res.data, ...users])
    setFormValues(initialFormValues)
  })
  .catch(err => {
    console.log("Sorry New Orleans its all dark!")
  })
}

//form functionality
const inputChange = (name, value) => {
  yup
  .reach(formSchema, name)
  .validate(value)
  .then(valid => {
    setFormErrors({
      ...formErrors,
      [name]: ""
    })
  })
  .catch(err => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0]
    })
  })

  setFormValues({
    ...formValues,
    [name]: value // NOT AN ARRAY
  })
}

const checkboxChange = (name, isChecked) => {
  setFormValues({
    ...formValues,
    terms: {
      ...formValues.terms,
      [name]: isChecked,
    }
  })
}

  const submit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: Object.keys(formValues.terms).filter(tr => formValues.terms[tr]),
    } 
    postNewUser(newUser)
  }

  //side effects
  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <h1>Testing Header</h1>

      <UserForm
      values={formValues}
      inputChange={inputChange}
      checkboxChange={checkboxChange}
      submit={submit}
      disabled={disabled}
      errors={formErrors}
      />
      {
        users.map(user => {
          return (
            <User key={user.id} info={user} />
          )
        })
      }
    </div>
  )
}
