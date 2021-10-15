
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Component/Form';
import User from './Component/User';
import schema from './Component/FormSchema';
import * as yup from 'yup';

const initialFormVals ={
  name: '',
  email: '',
  password: '',
  serviceTerms: false, // checkbox
}
const initialFormErrors ={
  name: '',
  email: '',
  password: '',
}
const initialUsers = []
const initialDisabled = true;

function App() {
  const [ users, setUsers ] = useState(initialUsers);
  const [ formVals, setFormVals ] = useState(initialFormVals)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ disabled, setDisabled ] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(res=>{
      setUsers([...users, res.data])
      
    })
    .catch(err=>{
      console.error(err)
    })
    .finally(() => {setFormVals(initialFormVals)})
    }
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res=>{
      setUsers([...users, res.data])
    })
    .catch(err=>{
      console.error(err)
    })
    .finally(() => setFormVals(initialFormVals))
    }

  const updateForm = (inputName, inputValue) => {
    validate(inputName, inputValue)
    setFormVals({ ...formVals, [inputName]:inputValue})
  }
  const submitForm = () => {
    const newUser ={
      name: formVals.name.trim(),
      email: formVals.email.trim(),
      password: formVals.password.trim(),
      serviceTerms: formVals.serviceTerms
    }
    postNewUser(newUser)
  }

  const validate = (name, value) =>{
    yup.reach(schema,name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}))
  }

  useEffect(() => {
    getUsers()
  }, [])
  
  useEffect(() => {
    schema.isValid(formVals).then(valid => setDisabled(!valid))
  }, [formVals])

  return (
    <div className="App">
      <h1>hello world</h1>
      <Form
      formVals={formVals}
      update={updateForm}
      submit={submitForm}
      disabled={disabled}
      errors={formErrors}
      />
      {
        users.map(user => {
          return(
            <User key={user.id} user={user}/>
          )
        })
      }
    </div>
  );
}

export default App;
