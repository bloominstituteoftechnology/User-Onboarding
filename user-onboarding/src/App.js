import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';
import Form from './Form';
import * as yup from 'yup'
import User from './User';

let schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Please enter your name')
    .required('Please enter your name'),
  email: yup
    .string()
    .email()
    .required('Please enter a valid email'),
  pass: yup
    .string()
    .min(6, 'Your password must be at least 6 characters')
    .required('Please enter a password')
});


const defaultFormData = {
  name: '',
  email: '',
  pass: '',

}

const defaultFormErrors = {
  name: '',
  email: '',
  pass: '',
}

function App() {
  const [formData, setFormData] = useState(defaultFormData);
  const [formErrors, setFormErrors] = useState(defaultFormErrors)
  const [users, setUsers] = useState([])

  const submitForm = (event) => {
    event.preventDefault();

    schema.validate(formData)
      .then(valid => {
        setFormData(defaultFormData);
        axios.post('https://reqres.in/api/users', { formData })
          .then(res => {
            setUsers([...users, res.data.formData])
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
  const inputChange = (name, value) => {

    yup.reach(schema, name).validate(value)
      .then(msg => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })


    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <div className="App">
      <Form
        submit={submitForm}
        inputChange={inputChange}
        formData={formData}
        formErrors={formErrors}
      />
      <div>
        {users.map(user => {
          return <User user={user} />
        })}
      </div>
    </div>
  );
}

export default App;