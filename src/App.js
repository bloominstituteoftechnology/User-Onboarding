import './App.css';
import User from './components/User'
import UserForm from './components/UserForm'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import schema from './validation/formSchema'
import * as yup from 'yup'

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  termsOfService: false,
}
const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  termsOfService: '',
}
const initialFriends = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialFriends)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
  axios.get('https://reqres.in/api/users')
    .then(esp=>{
      setUsers(esp.data.data)
    })
    .catch(err=>console.error(err))
}

  const postNewUser = newUser =>{
    axios.post('https://reqres.in/api/users', newUser)
      .then(esp=>{
        setUsers([esp.data, ...users])
      })
      .catch(err=>console.error(err))
      .finally(()=>setFormValues(initialFormValues));
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) =>{
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit =()=>{
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService,
    }
    postNewUser(newUser);
  }

useEffect(() => {
    getUsers();
  }, [])

useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])

  return (
    <div className="App">
      <header className="App-header">
        <h1>TITLE CARD TO SATISFY THE HUNGER</h1>
      </header>
      <UserForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {
        users.map(user=>{
          return (
            <User key={user.id} details={user} />
          )
        })

      }
    </div>
  );
}

export default App;
