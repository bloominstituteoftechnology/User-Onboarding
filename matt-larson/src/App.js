import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import * as yup from "yup"
import axios from "axios"
import UserForm from "./components/UserForm"
import schema from "./Schema/formSchema"
import User from "./components/User"


const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
};
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

const initialUser = [];
const initialDisabled = true;

function App() {
  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUser = () => {
    axios.get(`https://reqres.in/api/users`)
    .then((res) => {
      setUser(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const postNewUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
    .then((res) => {
      setUser([res.data, ...user])
      setFormValues(initialFormValues)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

const inputChange = (name, value) => {
  yup.reach(schema, name).validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: "",
    })
  })
  .catch((err) => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0]
    })
  })
  setFormValues({
    ...formValues,
    [name]: value
  })
}

useEffect(() => {
  schema.isValid(formValues)
  .then((valid) => {
    setDisabled(!valid)
  })
}, [formValues])

const submitForm = () =>{
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    terms: formValues.terms
  }
  postNewUser(newUser);
}

  return (
    <div className="App">
      <p>Rendering...</p>
      <UserForm 
      values = {formValues}
      change = {inputChange}
      submit = {submitForm}
      disabled = {disabled}
      errors = {formErrors}/>

      {user.map((person) => {
        return <User key = {person.id} details ={person}/>
      })}
    </div>
    
  );
}

export default App;
