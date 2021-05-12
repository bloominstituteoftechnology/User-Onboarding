import './App.css';
import axios from 'axios'
import * as yup from 'yup'
import React, {useState, useEffect} from 'react'
import Form from './Form'
import User from './User'
import Error from './Error'

const initialFormValues = {

  name: '',
  email: '',
  password: '',
  termsOfService: false,

}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}
const initialUsers = []
const initialDisabled = true

export default function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  

  const postNewUser = (newUser) => {

    axios.post('https://reqres.in/api/users', newUser)
    .then(({data}) => setUsers([data, ...users]))
    .catch(err => console.log('Error posting new friend:', err))
  }

  const inputChange = (name, value) => {
    yup.reach(Error, name)
    .validate(value)
    .then(() => setFormErrors({
      ...formErrors,
      [name]: ''
    }))
    .catch(err => setFormErrors({
      ...formErrors,
      [name]: err.errors[0]
    }))
    setFormValues({
      ...formValues,
      [name]: value
    })
      
    
  }

  const formSubmit = () => {
    const serviceTerms = []
    Object.keys(formValues)
    .filter(key => key === 'I have read the Terms of Service')
    .forEach(key => {
      const value = formValues[key]
      if(value) {
        serviceTerms.push(key)
      }
    })

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      serviceTerms
    }
    postNewUser(newUser)
    setFormValues(initialFormValues)
  }

  

useEffect(() => {
  Error.isValid(formValues)
  .then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div className="App">
      <header>User Logger</header>
      <Form
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disable={disabled}
      errors={formErrors}
      />

      {
        users.map((user, whatever) => {
          return(
            <User key={whatever} details={user} />)
          
        })
      }
    </div>
  );
}


