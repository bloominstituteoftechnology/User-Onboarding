import React, { useState, useEffect } from 'react'
import UserForm from './components/Form'
import User from './components/User'
import axios from 'axios'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}

export default function App() {
  const [users, setUsers] = useState([])

  const [formValues, setForms] = useState(initialFormValues)

  const updateForm = (event) => {
    const { name, value, type, checked } = event.target
    const updatedInfo = type === 'checkbox' ? checked: value;
    setForms({...formValues, [name]: updatedInfo})
  }

  const submitForm = (event) => {
    event.preventDefault()
    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      terms: formValues.terms
    }
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      console.log(res.data)
      setUsers([...users, res.data])
      setForms(initialFormValues)
    })
  }

  // Using to see the data
  // useEffect(() => {
  //   console.log(users)
  // }, [users])

  return (
    <div className="container">
      <h1>User Onboarding</h1>

      <UserForm 
        formValues={formValues}
        updateForm={updateForm}
        submitForm={submitForm}
      />

      {
        users.map(user => (
          <User 
            user={user}
          />
        ))
      }
    </div>
  )
}
