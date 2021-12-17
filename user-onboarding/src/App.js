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
  const [disabled, setDisabled] = useState();

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: ''})
      })
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const change = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  // const validate = (name, value) => {
  //   yup.reach(schema, name)
  //     .validate(value)
  //     .then(() => setFormErrors({ ...formErrors, [name]: '' }))
  //     .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  // }

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

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])
  
  // useEffect(() => {
  //   schema.isValid(formValues).then(resp => console.log(resp)).catch(err => {console.log('invalid')})
  // }, [formValues])
  return (
    <>
    <Form formErrors={formErrors} formValues={formValues} setFormValues={setFormValues} users={users} setUsers={setUsers} change={change} submitUser={submitUser} disabled={disabled}/>
    
    {
      users.map((item) => (<h1>{item.name}</h1>))
    }
    </>
  );
}

export default App;
