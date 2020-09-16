import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form"
import schema from '../src/formSchema'
import axios from 'axios'
import * as yup from 'yup'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  ///// CHECKBOXES /////
  termsofservice: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsofservice: '',
}
const initialUsers = []
const initialDisabled = true

export default function App() {
 
  const [user, setUsers] = useState(initialUsers)         
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)   

  const postNewUser = newUser => {
    
    axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        setUsers([...users, res.data]) 
        setFormValues(initialFormValues)
        console.log(newUser)
      })
      .catch(err => {
        debugger 
        console.log(err)
      })
      .finally(() => {
        // this woudl be tbe good spot to clean the form
      })
    }
  }