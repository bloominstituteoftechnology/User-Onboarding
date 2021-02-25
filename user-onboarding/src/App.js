import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import Form from './Form'
import Users from './Users'

import './App.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'name must be at least 3 characters long'),
  email: yup.string().email('Must enter valid email address').required('Email is required'),
  password: yup.string().required('password is required').min(6, 'password needs to be at least 6 characters long'),
  agree: yup.boolean().oneOf([true], 'You must agree to the terms')
})

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  agree: false,
}

const initialUserValues = {
  name: '',
  email: '',
}


function App() {

const [fform, setForm] = useState(initialFormValues)
const [disabled, setDisabled] = useState(true);
const [errors, setErrors] = useState({name:'', email:'', agree:false, language: ''})
const [users, setUsers] = useState([]);

const setFormErrors = (name, value) => {
  yup.reach(schema, name).validate(value)
  .then(() => setErrors({ ...errors, [name]: ''}))
  .catch(err => setErrors({...errors, [name]: err.errors[0]}))
}

const change = event => {
  const { checked, value, name, type} = event.target
  const valueToUse = type === 'checkbox' ? checked : value
  setFormErrors(name, valueToUse)


  setForm({...fform, [name]: valueToUse})
}

const submit = event => {
  event.preventDefault();
  console.log('submitted!');
  const newForm = {
    name: fform.name.trim(),
    email: fform.email,
    password: fform.password,
    agree: fform.agree
  }
  axios.post('https://reqres.in/api/users', newForm)
  .then(res => {
    setUsers([res.data, ...users])
    console.log(users)
  
    })
  .catch(err => {
    console.log(err)
  })
  setForm(initialFormValues)
}



useEffect(() => {
  schema.isValid(fform).then(valid=> setDisabled(!valid))
}, [fform])




  return (
    <div className="App">
     <div name='error' style={{ color: 'red' }}> 
        <div>{errors.name}</div>
        <div>{errors.password}</div>
        <div>{errors.email}</div>
        <div>{errors.agree}</div>
     </div>
     <Form values={fform} change={change} disabled={disabled} submit={submit}/>
     <div className="users-container">
       {
         users.map(user => {
           return (
            <Users users={user} />
           )
         })
        }
     </div>
    </div>
  
  );
}

export default App;
