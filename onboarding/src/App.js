
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
    })
    .catch(err => {
      debugger 
      console.log(err);
    });
  }
  return (
  <div className="App"> 
            {/* <Form
        values={formValues} 
        update={updateForm} 
        submit={submitForm}
      /> */}
    </div>
    
  );
}


