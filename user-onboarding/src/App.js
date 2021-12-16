import React, { useState, useEffect } from 'react';
import schema from './formSchema';
import * as yup from 'yup';
import axios from 'axios';
import './App.css';
import Form from './form.js';
import User from './user.js';

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: false,
}

const initialErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',

}

const initialUsers = [];
const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const accessUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        setUsers(response.data.data)
      }).catch(err => {
        console.log(err)
      })
  }

  const addNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(response => {
        setUsers([ response.data, ...users ])
      }).catch(err => console.log(err))
      .finally(() => setFormValues(initialValues))
  }


  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const changeValues = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value})
  }

  const submitUser = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: ['terms'].filter(agree => !!formValues[agree])
    }
    addNewUser(newUser);
  }


useEffect(() => {
  accessUsers()
}, [])

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

return (
  <div className='container'>
    <h1>Users App</h1>

    <Form 
      values={formValues}
      change={changeValues}
      submit={submitUser}
      disabled={disabled}
      errors={formErrors}
    />

    {
      users.map(user => {
        return (
          <User key={user.id} info={user}/>
        )
      })
    }
  </div>
)
}
