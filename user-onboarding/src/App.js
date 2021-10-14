import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form';
import User from './components/User';

import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';
function App() {

const initialFormValues ={
  first_name:'',
  last_name:'',
  email:'',
  termsOfService: false
 
}
const initialFormErrors = {
  first_name:'',
  last_name:'',
  email:'',
  termsOfService:''
}

const initialUsers = []
const initialDisabled = true
 
const [users, setUsers] = useState(initialUsers)
const [formValues, setFormValues] = useState(initialFormValues)  
const [formErrors, setFormErrors] = useState(initialFormErrors) 
const [disabled, setDisabled] = useState(initialDisabled)   

const getUsers = () => {
  axios.get('https://reqres.in/api/users')
    .then(res => {
       
      console.log(res.data.data);
       
      setUsers(res.data.data)
      
    }).catch(err => {
      console.error(err);
})}


const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([newUser, ...users]);
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      setFormValues(initialFormValues);
    })
}

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}

const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value 
  })
}


const formSubmit = () =>{
  const newUser = {
    first_name: formValues.first_name.trim(),
    last_name: formValues.last_name.trim(),
    email: formValues.email.trim(),
    termsOfService: formValues.termsOfService

  } 
  postNewUser([...users, newUser])
}
useEffect(() => {  
  getUsers()
}, [])

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div className="App">

      <header className="App-header">
        <h1>User App</h1>
      </header>

      <div>
          <Form 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
            
            />
                {
        users.map(user => {
            return(
                <User key={user.id} details={user}/>      
            )
          })}
          
    </div>
    </div>
  );
}

export default App;
