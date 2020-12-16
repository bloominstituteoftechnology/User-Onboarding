import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserForm from './components/UserForm'
import User from './components/User'
import schema from './components/formSchema'
import * as yup from 'yup'
import './App.css';





function App() {
  
  const initialFormValues = {
    name: '',
    email: '',
    password: '',
    tos: false,
  }
  const initialFormErrors = {
    username: '',
    email: '',
    role: '',
    civil: '',
  }
  const initialUsers = []
  const initialDisabled = true
  
  const [user, setUser] = useState(initialUsers)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
        .then(res => {
          setUser(res.data)
        })
        .catch(err => {
          console.log(err)
        })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
        .then(res => {
          setUser(...user, res.data)
          setFormValues(initialFormValues)
        })
        .catch(err => {
          console.log(err)
        })
  }
  
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors, [name]: ''
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0]
        })
      })
    }
    const inputChange = (name, value) => {
      validate(name, value)
      setFormValues({
        ...formValues,
        [name]: value
      })
    }
    
    const formSubmit = () => {
      const newUser = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        tos: formValues.tos
      }
      postNewUser(newUser)
    }
    
    useEffect(() => {
      schema.isValid(formValues).then(valid => {
        setDisabled(!valid)
      })
    }, [formValues])
  
  
  return (
    <div className="App">
      <h1>Create User Account</h1>

      <UserForm 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      
      />

      {
        user.map(user => {
          return (
            <User key={user.id} details={user}/>
          )
        })
      }
    </div>
  );
}
export default App;
