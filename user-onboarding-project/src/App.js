
import logo from './logo.svg'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './Form'
import Submission from './User'
import * as yup from 'yup'
import './App.css'
import schema from './Validation/formSchema'
 
// initial state //
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  role: '',
  terms: false,
}
 
const initialSubmission = []
 
// --------- //
 
export default function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues) // object
  const [ submission, setSubmission ] = useState(initialSubmission) // empty array so we can map over it and re-render
 
  const inputChange = ( name, value ) => {
    // old way first, then study yup
    const newFormValues = { ...formValues }
    newFormValues[name] = value
    setFormValues(newFormValues)
  }
 
 
  return (
    <div className="App">
      <Form // have to pass this form props
         values={formValues}
         change={inputChange}
         
      
      />
 
    </div>
  );
}

