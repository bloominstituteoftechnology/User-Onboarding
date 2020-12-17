import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './Components/Form';
import User from './Components/Users';
import schema from './Validations/formSchema';
import axios from 'axios';
import * as Yup from 'yup';

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  password: '',
  ///// CHECKBOXES /////
  termsOfService: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  // civil: '',
}
const initialUsers = []
const initialDisabled = true


export default function App() {

  const [users, setUsers] = useState(initialUsers)          // array of user objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)   


  const postNewUser = newUser => {
    axios
    .post(`https://reqres.in/api/users`, newUser)
    .then((res) => {
      setUsers([res.data, ...users]);
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      debugger;
    })
  };


  const inputChange = (name, value) => {

    Yup
    .reach(schema, name) //get to this part of the schema
    .validate(value) //validate this value
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: '',
      })
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })

    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService
    }
    postNewUser(newUser);
  }

  // useEffect(() => {
  //   getUsers()
  // }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues]);


  return (
    <div className="App">
      <h1> User Onboarding</h1>
      <Form
        values={formValues}
        change={inputChange}
        disabled={disabled}
        submit={formSubmit}
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
        
