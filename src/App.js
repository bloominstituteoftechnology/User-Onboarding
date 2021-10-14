import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './Validator/Validate';

import User from './Components/User';
import Form from './Components/Form';

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  role: '',
  termsOfService: false
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  role: '',
  termsOfService: false
}


function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const change = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const postNewUser = (newFriend) => {
    axios.post('https://reqres.in/api/users', newFriend)
    .then(res => {
      console.log(res);
      setUsers([res.data, ...users]);
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      setFormValues(initialFormValues);
    })
  }

  const submit = () => {
    const newFriend = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }

    postNewUser(newFriend);
  }
  
  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data);
      }).catch(err => console.error(err))
  }, [])

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <Form 
        values={formValues} 
        change={change} 
        submit={submit} 
        errors={formErrors}
        disabled={disabled}
      />
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default App;
