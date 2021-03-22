import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import axios from 'axios'

import UserForm from './components/Form'

// better way
// import User from './components/User'

import { formSchema } from './validation/formSchema'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true

export default function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const updateForm = (event) => {
    const { name, value, type, checked } = event.target
    const updatedInfo = type === 'checkbox' ? checked: value;
    setFormValues({...formValues, [name]: updatedInfo})
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(({errors}) => setFormErrors({...formErrors, [name]: errors[0]}))
  }

  const submitForm = (event) => {
    event.preventDefault()
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      console.log(res.data)
      setUsers([...users, res.data])
      setFormValues(initialFormValues)
    })
  }

  // Using to see the data
  // useEffect(() => {
  //   console.log(users)
  // }, [users])

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  })

  return (
    <div className="container">
      <h1>User Onboarding</h1>

      <UserForm 
        formValues={formValues}
        updateForm={updateForm}
        submitForm={submitForm}
        disabled={disabled}
        errors={formErrors}
      />

{
  JSON.stringify(users)
}
      {/* {
        users.map(user => (
          <User 
            user={user}
          />
        ))
      } */}
    </div>
  )
}
