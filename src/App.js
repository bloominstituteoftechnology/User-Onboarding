
import './App.css';
import Form from './Form'
import User from './User'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import * as yup from 'yup'
import schema from './formSchema'

const initialFormValues = {
  // text inputs//
  username: '',
  email: '',
  password: '',
  // checkbox //
  termsOfService: '',
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '', 
  termsOfService: '',
}
const initialUsers = []
const initialDisabled = true

const API_URL = 'https://reqres.in/api/users'

function App() {
const [users, setUsers] = useState(initialUsers)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled) 

// const getUsers = () => {
//   axios
//   .get(API_URL)
//   .then(res => {
//     setUsers(res.data)
//   })
//   .catch(err => console.log(err))
// }


const postNewUser = newUser => {
axios.post(API_URL, newUser)

.then((res) => {
  setUsers([...users, newUser])
  console.log(res.data)
})
.catch(err => console.log(err))
.finally(() => {
  setFormValues(initialFormValues)
})
}

const inputChange = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(() => {
    setFormErrors({...formErrors, [name]: ""})
  })
  .catch(err => {
    setFormErrors({...formErrors, [name]: err.message})
  })

  setFormValues({
    ...formValues, 
    [name]: value 
  })
}

const formSubmit = () => {
  console.log('trying to submit the form')
  const newUser = {
    username: formValues.username.trim(),
    pasword: formValues.password.trim(), 
    email: formValues.email.trim(), 
    
  }
  postNewUser(newUser)
}

// useEffect(() => {
//   getUsers()
// }, [])

useEffect(() => {
  schema.isValid(formValues)
  .then(valid => {
    setDisabled(!valid)
  })
}, [formValues])

  return (
    <div className="App">
      <header><h1>User Onboarding </h1></header>

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
