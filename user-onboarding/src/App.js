import './App.css';
import Form from './Form'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from './User'
import schema from './Schema'
import * as yup from 'yup'

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: false,
  career: ''
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  career: ''
}

const initialUsers = []

function App() {
const [values, setValues] = useState(initialFormValues)
const [users, setUsers] = useState(initialUsers)
const [disabled, setDisabled] = useState(true)
const [errors, setErrors] = useState(initialFormErrors)

const submit = () => {
  const newUser = {
    first_name: values.first_name,
    last_name: values.last_name,
    email: values.email,
    password: values.password,
    tos: false,
    carrer: values.career
 }
 addUsersToApi(newUser)
}

const validate = (name, value) => {
  yup.reach(schema, name).validate(value)
  .then(()=> setErrors({...errors, [name]: ''}))
  .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
}

const change = (name, value) => {
  validate(name, value)
  setValues({...values, [name]: value})
}

useEffect(() => {
  schema.isValid(values).then( valid => {setDisabled(!valid)}, [values])})

const addUsersToApi = ( ) => {
  axios.post('https://reqres.in/api/users', values )
  .then(res => {
    setUsers([res.data, ...users]);
    setValues(initialFormValues)
  })
  .catch(err => console.log(err))
}
  return (
    <div className="App">
      <div className='formContainer'>
    <Form 
    values={values} 
    submit={submit} 
    change={change}
    disabled={disabled}
    errors={errors}/>
    </div>

    {
      users.map(user=> {
        return(
          <User key={user.id} details={user}/>
        )
      })
    }
    </div>
  );
}

export default App;
