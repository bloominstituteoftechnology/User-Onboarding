import './App.css';
import React, { useState } from 'react';
import Form from './Form';
import axios from 'axios';
import formSchema from './formSchema';
import * as yup from 'yup';


const firstValue = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const firstErrors = {
  username: '',
  password: '',
  email: '',
  tos: false
}

function App() {
  const [val, setVal] = useState(firstValue);
  const [users, setUsers ] = useState([]);
  const [errors, setErrors] = useState(firstErrors)

  // const handleChange = (name, value) => {
  //   setVal({...val, [name]: value});
  // }

 

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', val)
    .then(res => {
        console.log(res);
        setUsers([res.data, ])
    })
    .catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setErrors({...errors, [name]: '' }))
    .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value)
    setVal({...val, [name]: errors.username})
  }

  return (
    <div className="App">
      <h1>User Onboarding</h1>
      <p>{errors.username}</p>
      <p>{errors.password}</p>
      <p>{errors.email}</p>
      <p>{errors.tos}</p>
      <Form 
      values={val} 
      change={handleChange}
      username={users} 
      errors={errors} 
      submit={handleSubmit}/>
    </div>
  );
}

export default App;
