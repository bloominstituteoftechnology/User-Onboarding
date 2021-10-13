import './App.css';
import Form from './components/Form'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import schema from './validations/FormSchema'
import UserList from './components/UserList'
import * as yup from 'yup'

const initialFormValues = {
    name: '',
    email: '',
    password: '',
    tos: false,
}

const initialErrors = {
    name: '',
    email: '',
    password: '',
    tos: '',
}

function App() {

  const [ users, setUsers ] = useState([]);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialErrors);
  const [ disabled, setDisabled ] =useState(true)


  const getUsers = () => {

    axios.get(`https://reqres.in/api/users`)
    .then( resp => {
      setUsers(resp.data.data)
    })
    .catch( err => {
      console.error(err)
    })

  }

  const postUsers = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser) 
    .then( res => {
      
      setUsers([res.data , ...users])
      setFormValues(initialFormValues)
    })
    .catch( err => {
      console.error(err)
      setFormValues(initialFormValues)
    })
  }

  const validate = ( name, value ) => {
    yup.reach( schema , name )
    .validate(value)
    .then( () => setFormErrors({ ...formErrors, [name]: ''})) 
    .catch( err => setFormErrors( { ...formErrors , [name]: err.errors[0]} ))

  }

  /* ---CHANGE HANDLERS--- */

  const onChange = ( name, value) => {
    validate( name, value )
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    }
    
    postUsers(newUser)
  }

    // Side effect for getUsers

    useEffect( () => {
      getUsers()
    }, []) 
  
    // Adjusting the state of disabled

    useEffect( () => {
      schema.isValid(formValues)
      .then( valid => {
        setDisabled(!valid)
      })
    }, [formValues])

  return (
    <div>
    <div className="App">
      <h1>User Onboarding Form</h1>
      <Form 
      change={onChange}
      values={formValues}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
    </div>
    <UserList users={users}/>
    </div>
  );
}

export default App;
