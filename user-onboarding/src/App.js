import React, { useState, useEffect } from 'react'
import Form from './Components/Form'
import User from './Components/User'
import './App.css';
import axios from 'axios'
import schema from './Components/formSchema'
import * as yup from 'yup'



const initialFormValues = { // object for our users
  fname: '',
  lname: '',
  email: '',
  password: '',
  terms:'false'
}

const initialFormErrors ={ //object for our errors
  fname:'',
  lname:'',
  email: '',
  password: '',
}

const initialUsers = [] //we'll map our users from api from axios later down in App
const initialDisabled = true //this is for the submit button

export default function App() {


  const [users, setUsers] = useState(initialUsers); //state for our users
  const [formValues, setFormValues] = useState(initialFormValues); //state for the form values
  const [formErrors, setFormErrors] = useState(initialFormErrors); //state for our errors
  const [disabled, setDisabled] = useState(initialDisabled); //state for our disabled which is a boolean


  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(resp => {
        setUsers([resp.data, ...users])
      })
      .catch(err => {
        console.error(err);
      })
      .finally(()=> {
        setFormValues(initialFormValues)
      })
  }

  const validate=(name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange =(name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      fname: formValues.fname.trim(),
      lname: formValues.lname.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  

  return (
    <div className="App">
      <header><h1>Hello World!</h1></header>
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
  )
}