import React, { useState, useEffect } from 'react'
import Form from './Components/Form'
import './App.css';
import axios from 'axios'
import schema from '../src/Components/formSchema'
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

const initialUsers = []
const initialDisabled = true

export default function App() {


  const [users, setUsers] = useState(initialUsers); //state for our users
  const [formValues, setFormValues] = useState(initialFormValues); //state for the form values
  const [formErrors, setFormErrors] = useState(initialFormErrors); //state for our errors
  const [disabled, setDisabled] = useState(initialDisabled); //state for our disabled which is a boolean


  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(resp => {
        setUsers(resp.data)
        console.log(resp.data);
      })
      .catch(err => {
        console.error(err);
      }) 
      .finally(()=> {
        setFormValues(initialFormValues)
      })
  }


  return (
    <div className="App">
      <header><h1>Hello World!</h1></header>
      <Form />
    </div>
  )
}