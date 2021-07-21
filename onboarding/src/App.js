
import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Users from './components/Users'
import axios from 'axios';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: '',
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: '',
}

const initialUsers = []
const initialDisabled = true

export default function App() {
  const [users, setUsers] = useState(initialUsers) //array of users objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data)
      console.log(`HERE IS setUsers`, setUsers)
    })
    .catch(err => {
      debugger 
      console.log(err);
    });
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([...users, res.data])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      debugger
      console.log(err);
    })
    .finally(() =>{})
  }
  return (
  <div className="App"> 
  <header><h1>User Onboarding</h1></header>
            {/* <Form
        values={formValues} 
        update={updateForm} 
        submit={submitForm}
      /> */}
    </div>
    
  );
}


