import logo from './logo.svg';
import Form from './Components/UserForm'
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import * as yup from 'yup'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

const initialUsers = []

const initialDisabled = true

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      console.log(res.data)
    })
  }

  return (
    <div className="App">
     <header><h1>Added Users</h1></header>

     <Form />
    </div>
  );
}

export default App;
