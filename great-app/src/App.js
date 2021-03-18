import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import Form from './Form.js';
import User from './User.js'

const initialFormValues = {
  name: '',
  email: '',
  pass: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  email: '',
  pass: '',
  tos: '',
}

const formScheme = yup.object().shape({
  name: yup.string()
  .trim()
  .required('Name is required, please fill out.'),
  email: yup.string()
    .email('Must be a vaild email address')
    .required('Email is required'),
  pass: yup.string()
    .required('Please enter Password'),
  tos: yup.boolean()
    .required('please accept Terms Of Service'),
});

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data);
      console.log(users);
    })
    .catch(err => {
      console.log(err);
    });
  }
  const inputChange = (name, value) => {
    yup.reach(formScheme, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({...formValues,[name]: value})
    console.log(formValues);
  }

  useEffect(() => {
    getUsers();
    console.log(users);
  }, [])

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.date, ...users]);
    })
    .catch(err => {
      console.log(err);
    })
    setFormValues(initialFormValues)
  }
  useEffect(() => {
    formScheme.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      pass: formValues.pass.trim(),
    }
    postNewUser(newUser);
    console.log("users" + users);
  }
  return (
    <div>
      <Form values = {formValues} errors = {formErrors} submit = {formSubmit} disabled = {disabled} change = {inputChange}/>
      {
        !users ? users.map(user => {
          return(
            <User user={user} />
          )
        })
        : []
      }
    </div>
  );
}
export default App;
