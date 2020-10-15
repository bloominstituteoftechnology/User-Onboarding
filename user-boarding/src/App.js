import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import axios from 'axios'
import * as yup from 'yup'
import schema from './components/schema'
import UserList from './components/Userlist'
import './App.css';

function App() {

const initialFormValues ={
name: '',
email: '',
password: '',
terms: false,
}

const initialDisabled = true;

const initialFormErrors = {
name: '',
email: '',
password: '',
}


const [users, setUser] = useState([])
const [formValues, setFormValues] = useState(initialFormValues)
const [disabled, setDisabled] = useState(initialDisabled)
const [formErrors, setFormErrors] = useState(initialFormErrors)

const formSubmit = () => {
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    terms: true,
  }

  postNewUser(newUser)
}

const postNewUser = (newUser) => {
  axios.post('https://reqres.in/api/users', newUser)
    .then((res) => {
      setUser([res.data, ...users])
      })
    .catch(err => {
      console.log('POST ERR -->', err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
}



const inputChange = (name, value) => {
 yup
  .reach(schema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: '',
    })
  })
  .catch(err => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0],
    })
  })
  setFormValues({
    ...formValues,
    [name]: value,
  })
}


useEffect(() => {
  schema.isValid(formValues)
    .then((valid) => {
        setDisabled(!valid)
    })
}, [formValues])

  return (
    <div className="App">
      <header className="App-header"></header>
      <Form 
      values={formValues} 
      disabled={disabled} 
      errors={formErrors} 
      change={inputChange}
      submit={formSubmit}
      />
      {users.map(user => {
        return <UserList key={user.id} details={user} />;
      })}
    </div>
  );
}


export default App;


