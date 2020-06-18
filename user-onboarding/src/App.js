import React, { useState, useEffect } from 'react';
import './App.css';
import UserForm from '../src/components/Form'
import axios from 'axios'
import formSchema from './validation/formSchema'
import * as Yup from 'yup'
import Users from './components/Users.js';

const initialFormValues = {
  fullname: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  fullname: '',
  email: '',
  password: '',
  terms: '',
}
// Assigned initialUsers with an object only as a test
const initialUsers = [{fullname: "Donald", email: "faulknordonald@gmail.com", password: "Bandit", terms: "Terms"}]
const initialDisabled = true

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
  axios.get('https://reqres.in/api/users')
    .then(response => {
      console.log(response)
      setUsers(response.data)
    })
    .catch(error => {
      debugger
    })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res.data)
        setUsers([ ...users, res.data])
      })
      .catch( err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
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
    // Couldn't figure out TOS validation
    const { name, checked } = evt.target
    // Yup
    //   .reach(formSchema, name)
    //   .validate(checked)
    //   .then(() => {
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: ""
    //     })
    //   })
    //   .catch(err => {
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: err.errors[0]
    //     })
    //   })
    // setFormValues({
    //   ...formValues,
    //   [name]: checked,
    // })

    setFormValues({
      ...formValues,
      terms: {
        ...formValues.terms,
        [name]: checked,
      }
    })
    setFormValues(initialFormValues.terms)
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      fullname: formValues.fullname,
      email: formValues.email,
      password: formValues.password,
      terms: formValues.terms,
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="App">
      <header className="App-header">
        <UserForm
          values={formValues}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}
          disabled={disabled}
          errors={formErrors}
         />
         {/* {
        users.map(user => {
          return (
            <Users key={user.password} user={user} />
          )
        })
      } */}
      </header>
    </div>
  );
}

export default App;
