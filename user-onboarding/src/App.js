import './App.css';
import Form from './Form'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './formSchema'

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
  terms: ''
}
const initialUsers=[]
const initialDisabled = true

export default function App() {

  const [users, setUsers]=useState(initialUsers)
  const [formValues, setFormValues]=useState(initialFormValues)
  const [formErrors, setFormErrors]=useState(initialFormErrors)
  const [disabled, setDisabled]=useState(initialDisabled)
  

  const postNewUser = newUser =>{
    axios.post('https://reqres.in/api/users', newUser)
      .then(res=>{
        setUsers([{name: res.data.name, email: res.data.email, password: res.data.password, terms: res.data.terms},...users]);
        console.log(users)
      }).catch(err=>{
        console.error(err);
      }).finally(()=>{
        setFormValues(initialFormValues)
      })
  }
  
  const validate= (name, value) =>{
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]:''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value)=>{
    validate(name,value);
    setFormValues({...formValues, [name]:value})
  }

  const formSubmit = evt => {
    const newUser = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        terms: !!formValues.terms
    }
    console.log(newUser)
    postNewUser(newUser)
  }
  const userAmount = users.length

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
    
  return (
    <div className="App">
      <Form
        values={formValues}
        errors={formErrors}
        disabled={disabled}
        change={inputChange}
        submit={formSubmit}
        usersLength={userAmount}
      />
    </div>
  );
}


