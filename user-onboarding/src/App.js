import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialFormValues = { name: '', email: '', password: '', userAgreement: false};

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
  }, [])

  const change = (name, value) => {
    setFormValues({...formValues, [name]: value})
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
