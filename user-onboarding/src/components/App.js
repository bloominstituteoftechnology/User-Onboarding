import React, { useState, useEffect } from 'react'
import User from './User'
import Form from './Form'
import { schema } from './Schema'
import * as yup from 'yup'
import axios from 'axios'


//initial states
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  username: '',
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
 
  const postNewUser = newUser => {
    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then(res => {
        setUser([res.data, ...users])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      })

  }

  //event handlers
  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          [name]: '',
          ...formErrors,
        })
        .catch(err => {
          console.log(err)
          // setFormErrors({
          //   [name]: err.errors[0],
          //   ...formErrors
        })
        setFormValues({
          [name]: value,
          ...formValues,
        })
      })
  }
  

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }

    postNewUser(newUser)
  }

  //side effects
 
  useEffect(() => {
    schema
      .isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div className="container">
      <header>
        <h1>User App</h1>
      </header>

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
