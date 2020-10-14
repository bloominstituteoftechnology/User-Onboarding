import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form"
import schema from '../src/formSchema'
import axios from 'axios'
import * as yup from 'yup'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  ///// CHECKBOXES /////
  termsofservice: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsofservice: '',
}
const initialUsers = []
const initialDisabled = true

export default function App() {
 
  const [user, setUsers] = useState(initialUsers)         
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)   

  const postNewUser = newUser => {
    
    axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        setUsers([...user, res.data]) 
        setFormValues(initialFormValues)
        console.log(newUser)
      })
      .catch(err => {
        debugger 
        console.log(err)
      })
  
    }
  }

  const validate = (name, value) => {
 
    yup
      .reach(schema, name)
     
      .validate(value)
     
      .then(valid => { 
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
   
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
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
      termsofservice: formValues.termsofservice.trim(),
    }
    postNewUser(newUser)
    }

    useEffect(() => {
      getUsers()
    }, [])

    useEffect(() => {
  
      schema.isValid(formValues)
        .then(valid => {
          setDisabled(!valid)
        })
    }, [formValues])

    return (
      <div className='container'>
        <header><h1>Team App</h1></header>
  
        <MemberForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
  
        {
          user.map(user => {
            return (
              <User key={user.id} details={user} />
            )
          })
        }
      </div>
    )
  

  