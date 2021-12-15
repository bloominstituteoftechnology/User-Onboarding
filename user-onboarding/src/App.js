import React, { useState, useEffect} from 'react';
import './App.css';
import * as yup from 'yup'
import Form from './Form'
import User from './User'
import axios from 'axios'
import schema from './validation/formSchema'

const initialFormValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  termsofservice: false,
}

const initialFormErrors = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  termsofservice: '',

}
const initialUsers = []
const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        console.log(res)
        setUsers(res.data);
      }).catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.data, ...users])
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = ( name, value ) => {
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

  const formSubmit = () => {
    const newUser = {
      firstname: formValues.firstname.trim(),
      lastname: formValues.lastname.trim(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsofservice: formValues.termsofservice.trim()
    }
    postNewUser(newUser);
  }

  useEffect(() =>{
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className="App">
      <div className="App-container">
      <header><h1>User Onboarding App</h1></header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {/* {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      } */}
      </div>
    </div>
  );
}
