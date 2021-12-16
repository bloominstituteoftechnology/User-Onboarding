import React, { useState, useEffect } from 'react';
import Form from './Form';
import User from './User';
import schema from './validation/formSchema';
import './App.css';
import axios from 'axios';
import * as yup from 'yup';



const initialUsers = [];
const initialDisabled = true;
const initialFormValues = {
  first_name: '',
  email: '',
  password: '',
  terms: false,
}
const initialFormErrors = {
  first_name: '',
  email: '',
  role: '',
  terms: '',
}

function App() {

  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const getUsers = () => {
    axios.get(`https://reqres.in/api/users`)
      .then(resp => {
        console.log(resp);
        setUsers(resp.data.data);
      }).catch(err => console.error(err))
  }
  const postUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
      .then(resp => {
        console.log(resp)
        setUsers([ resp.data, ...users ])
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
    postUser(newUser);
  }

  //SIDE EFFECTS//
  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
       <h1>User Onboarding</h1>
       <Form 
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
