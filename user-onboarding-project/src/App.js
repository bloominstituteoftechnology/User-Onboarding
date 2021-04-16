
import logo from './logo.svg'
import React from 'react'
import  { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './Form'
import User from './User'
import schema from './Schema/schema'
import * as yup from 'yup'
import './App.css'

// initial state //
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  role: '',
  terms: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  role: '',
}

const initialDisabled = true;

// --------- //

export default function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues) // object
  const [ users, setUsers ] = useState([]) // empty array so we can map over it and re-render
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ disabled, setDisabled ] = useState(initialDisabled)



  // the input change function so we can type in the fields
  const inputChange = (name, value) => {

    yup
      .reach(schema, name) // 2nd thing is the value you want it to read from 1st argument
      .validate(value) // validate this value
      .then(() => {
        // happy path
        setFormErrors({
          ...formErrors, // keep whatever errors you have
          [name]: ''
        })
      })
      .catch(error => {
        // sad path and there are errors
        setFormErrors({
          ...formErrors, // whatever errors are there, keep them
          [name]: error.errors[0] // add this error to whatever errors already existed
        })
      })
      setFormValues({
        ...formValues,
        [name]: value
      })
    }

  // the submit function so we can submit and post
  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      role: formValues.role.trim(),
      terms: formValues.terms // will return a bool
    }
    postNewUser(newUser)

  }

  // now we need to write the post function so it goes to the server!
  const postNewUser = newUser => {
    axios
      .post('https://reqres.in/api/users', newUser)
      .then(response => {
        // console.log(response.data)
        setUsers([...users, response.data])
        setFormValues(initialFormValues)
      })
      .catch(error => {
        console.log(error)
        setFormValues(initialFormValues)
      })
  }

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => { // returns boolean
        setDisabled(!valid)
      }) // watcher array
  }, [formValues])

  // console.log(users);
  return (
    <div className="App">
      <Form // have to pass this form props
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {/* <pre>{JSON.stringify(users, null, 2)}</pre>  -- tried using users.map to loop over and render, but wasn't working so mentor showed me this*/} 

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }

      {/* {
        // OR we could it without the extra component
        users.map(user => {
          return (
            <pre>{JSON.stringify(users, null, 1)}</pre>
          )
        })
      } */}
    </div>
  );
}

