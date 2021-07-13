import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import axios from 'axios';
import * as yup from "yup";
import React, { useState, useEffect } from 'react';
import Mate from "./Mate.js"
import formInfo from "./formInfo.js"

const startingValues = {
  name: '',
  email: '', 
  password: '',
  terms: false
}

const startingErrors = {
  name: '',
  email: '',
  password: ''
}

const startingMembers = []
const startingDisabled = true;

export default function App() {
  

  const [members, setMembers] =useState(startingMembers)
  const [formValues, setFormValues] =useState(startingValues)
  const[formErrors, setFormErrors] =useState(startingErrors)
  const [disabled, setDisabled] =useState(startingDisabled)

  const createNewMember = (newMember) => {
    axios .post(`https://reqres.in/api/users`, newMember)
    .then(res => {
      setMembers([res.data, ...members])
      setFormValues(startingValues)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const userChange = (name, value) => {
    yup.reach(formInfo, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newMate = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }
    createNewMember(newMate)
  }
  useEffect(() => {
    formInfo.isValid(formValues)
    .then((valid) => {
      setDisabled(!valid)
    })

  }, [formValues])

  return (
    <div className="App">
      <header>
        <h1>Victory Royale</h1>
        </header>
        <Form 
        values = {formValues}
        change = {userChange}
        submit = {formSubmit}
        disabled = {disabled}
        errors = {formErrors}
        />
  {members.map((member, yeet) => {
    return <Mate key = {yeet} details={member} />
  })}
      
    </div>
  );
}

