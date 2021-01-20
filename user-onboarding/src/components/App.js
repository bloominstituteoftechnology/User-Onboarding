import React, { useState, useEffect } from 'react'
import User from './User'
import Form from './Form'

//initial states
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialUsers = []
const initialDisabled = true

function App() {
  //states
  const [users, setUser] = useState(initialUsers) //array of users
  const [formValues, setFormValues] = useState(initialFormValues) //object
  const [formErrors, setFormErrors] = useState(initialFormErrors) //object
  const [disabled, setDisabled] = useState(initialDisabled) //boolean

  //helpers
  const getUsers = () => {

  }

  const postNewUser = newUser => {

  }

  //event handlers
  const inputChange = (name, value) => {
    setFormValues({[name]:value, ...formValues})
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.password.trim()
    }
  }

  //side effects
  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {

  }, [])

  return (
    <div className="container">
      <header><h1>User App</h1></header>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {users.map(user => {
        return(
          <User key={user.id} details={user} />
        )
      })}
    </div>
  );
}

export default App;
