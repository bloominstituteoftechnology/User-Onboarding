import './App.css';
import User from "./Components/User";
import NewUserForm from "./Components/NewUserForm";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './Validation/formSchema';

// declare initial values

const initialValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

// declare initial errors

const initialErrors = {
  username: '',
  password: '',
  email: '',
  tos: '',
}

export default function App() {

  //declare 4 slices of state
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [users, setUsers] = useState([]);
  
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors ({ ...formValues, [name]: value}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      setUsers([ res.data, ...users ])
    })
    .catch(err => console.error(err))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
  // use axios to get friends

  return (
    <div className="App">
      {// append NewUserForm with key's: 
      // value, submit, change, disabled, and errors 
    }
      <NewUserForm values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>
      {/* {users.map(user => (
        <div>

        </div>
      ))} */}
    </div>
  );
}

