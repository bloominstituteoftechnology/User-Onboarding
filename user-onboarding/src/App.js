import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import UserForm from './form';
import Person from './person';
import axios from 'axios';
import schema from './formSchema'
import * as yup from 'yup';
import { validate } from 'uuid';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}

const initialFormErrors = {
  name: '',
  email:'',
  password:'',
}

const initialPerson = []
const initialDisabled = true

export default function App() {
  const [user, setPerson] = useState(initialPerson)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const getPersons = () => {
    axios.get(`https://reqres.in/api/users`)
    .then(res => {
      setPerson(res.data); console.log(res.data);
    }).catch(err =>{
      console.error(err)
    })
  }
  
  const postNewPerson = newPerson => {
    axios.post(`https://reqres.in/api/users`, newPerson )
    .then(res =>{
      setPerson([res.data, ...user])
    }).catch(err =>{
      console.error(err);
    }).finally(()=>{
      setFormValues(initialFormValues);
    })
  }
  
  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(()=> setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }
  
  const inputChange = (name, value) => {
    validate(name,value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  
  const formSubmit = () => {
    const newPerson = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }
    
    postNewPerson(newPerson);
  }
  
  useEffect(()=>{
    getPersons()
  }, [])
  
  useEffect(()=> {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  
  return (
    <div className="App">
     <h2> Hello! Working on onboarding.</h2>

      <UserForm 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />

      {
        user.map(friend => {
          return (
            <Person key={friend.id} details={friend} />
          )
        })
      }




    </div>
  )
}


