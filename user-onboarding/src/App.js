import './App.css';
import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import User from './components/User';
import axios from 'axios';
import schema from './components/schema';
import * as yup from 'yup';

const initialFormValues = {
  name: '', 
  email: '',
  password: '',
}

const initialFormErrors = {
  name: '',
  email: '', 
  password: ''
}

const initialUsers = []
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data.data);
    }).catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      console.log(res);
      setUsers([ res.data, ...users]);
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(), 
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header>
        <h1>Welcome to StarGaze App!</h1>
        <h2>Sign up for a new account below!</h2>
      </header>

      <UserForm 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
    
      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
