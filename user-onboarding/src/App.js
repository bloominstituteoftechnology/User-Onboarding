import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import axios from 'axios';


import schema from './validation/FormSchema';
import * as yup from 'yup';


const initialFormValues = {
  username: '',
  email: '',
  password: '',
  checked: false,
}

const formErrors = {
  username: '',
  email: '',
  password: '',
  terms: '',
}

function App() {

  // const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues); 
  const [errors, setError] = useState(formErrors);
  const [user, setUsers] = useState([]);

  const submitForm = () => {
    axios.post('https://reqres.in/api/users')
    .then(res => {
      setUsers([ res.data, user ])
    })
    .catch(err => console.errors(err))
  }

  const updateForm = (name, value) => {
      validate(name, value)
      setFormValues({ ...formValues, [name]: value});
    }

    const validate = (name, value) => {
      yup.reach(schema, name)
      .validate(value)
      .then(() => setError({ ...formErrors, [name]: '' }))
      .catch(err => setError({ ...formErrors, [name]: err.errors[0] }))
    }

    
  //couldnt figure out how to display the other users, need to study more useEffect and axios stuff!!!
  // useEffect(() => {
  //   axios.get('reqres.in/api/users').then(res => setMembers(res.data))
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Advanced App Form</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Form
          values={formValues}
          change={updateForm}
          errors={formErrors}
          submit={submitForm}
        />
      </header>

      {
        user.map(user => {
          <div>
            <p>{user.created}</p>
            <p>{user.email}</p>
          </div>
        })
      }

    </div>

    

  );
}

export default App;
