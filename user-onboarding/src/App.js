import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'
import User from './User'

import formSchema from './formSchema'
import axios from 'axios'
import * as yup from 'yup'

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  
  //checkbox
  termsOfService: false
}

const initialFormErrors = {
  first_name:'',
  last_name: '',
  email: '',
  password: '',
  termsOfService: '',
}

const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        console.log(res)
        setUsers(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
      
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(users, res.data)
        setUsers([...users, res.data])
      })
      .catch(err =>{
        console.log('post is broken')
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
      
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    setFormValues({ 
      ...formValues, 
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const {name} = evt.target
    const {checked} = evt.target

    setFormValues({...formValues, [name]:checked})
    
  }

  const onSubmit = evt => {
    evt.preventDefault()
    
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      
      
    }
    
    postNewUser(newUser)
    console.log(newUser)
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="App">
     <Form 
      values={formValues} 
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      disabled={disabled}
      errors={formErrors}
      onCheckboxChange={onCheckboxChange}
       />
      {
        users.map(user => {
          return(
            <User key={user.id} details={user}/>
          )
        })
      }
    </div>
  );
}

export default App;