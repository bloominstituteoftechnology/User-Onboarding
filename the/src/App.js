import react, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import User from './User';
import FormSchema from './FormSchema';
import axios from 'axios';
import * as yup from 'yup'

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  //checkboxes//
  termsOfService: false,
  userAgreement: false

}

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  //checkboxes//
  termsOfService: false,
  userAgreement: false

}

const initialUsers = []
const initialDisabled = true





export default function App() {
const [users, setUsers] = useState(initialUsers)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const postNewMember = newMember =>{
  axios.post('https://reqres.in/api/users', newMember)
  .then(res=>{
    setUsers([...users, res.data])
  })
  .catch(err=>{
    console.log(err);
  })
  setFormValues(initialFormValues)
}

const inputChange = (name, value) =>{
  yup.reach({FormSchema,name})
  .validate(value)
  .then(()=>{
    setFormErrors({...formErrors, [name]: ''})
  })
  .catch(err=>{
    setFormErrors({...formErrors, [name]: err.errors[0]})
  })
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const formSubmit = () =>{
  const newMember = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    Terms: ['termsOfService', 'userAgreement'].filter(e => formValues[e])
  }
  postNewMember(newMember)
}

useEffect(() =>{
  FormSchema.isValid(formValues).then(valid => setDisabled(!valid))
},[formValues])


  return (
    <div className="App">
      <header><h1>User App</h1></header>
      <Form
      values = {formValues}
      change = {inputChange}
      submit = {formSubmit}
      errors = {formErrors}
      disabled = {disabled}
      />
      {
        users.map(user=>{
          return (
            <User key ={user.name} details = {user}/>
          )
        })


      }


    </div>
  );
}


