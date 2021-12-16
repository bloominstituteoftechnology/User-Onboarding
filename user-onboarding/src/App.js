import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import schema from './formSchema.js';
import * as yup from 'yup';

const initialFormValues = { name: '', email: '', password: '', userAgreement: false};
const initialFormErrors = { name: '', email: '', password: '', userAgreement: false};

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  useEffect(() => {
    
  }, [])

  const change = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const postUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(resp => {
      const idk = [...users];
      idk.push(newUser);
      setUsers(idk);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      console.log(users);
      setFormValues(initialFormValues);
    })
  }

  const submitUser = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      userAgreement: formValues.userAgreement
    }
    postUser(newUser);
  }
  return (
    <>
    <Form formValues={formValues} setFormValues={setFormValues} users={users} setUsers={setUsers} change={change} submitUser={submitUser}/>
    
    {
      users.map((item) => (<h1>{item.name}</h1>))
    }
    </>
  );
}

export default App;
