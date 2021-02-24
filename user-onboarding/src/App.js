import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import Form from './Form'
import Hero from './Hero'
import formSchema from './validation/formSchema'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false,
  roll: ''
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  termsOfService: '',
}

const initialFriends = []

const initialDisabled = true

function App() {

  const [friends, setFriends] = useState(initialFriends)
  const [formValues, setFormValues]= useState(initialFormValues)
  const [formErrors, setFormErrors]= useState(initialFormErrors)
  const [disabled, setDisabled]= useState(initialDisabled)

  const getFriends = ( ) => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      console.log(res.data.data, 'get')
      setFriends(res.data.data)
    })
    .catch(err => {
      debugger
      console.log(err)
    })
  }

  const postNewFriend = newFriend => {
    axios.post('https://reqres.in/api/users')
    .then(res => {
      console.log(res, 'post')
      setFriends([res.data, ...friends])
    })
    .catch( err => {
      debugger
      console.log(err)
    })
    setFormValues(initialFormValues)
  }

  const formSubmit = () => {
    const newFriend = {
      username:formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      roll: formValues.roll.trim()
    }
    postNewFriend(newFriend)
  }

  const inputChange = (name,value) => {

  }

  useEffect(() => {
    getFriends()
  }, [])

  return (
    <div className="App">
      <header><h1>Welcome to the Onboarding!</h1></header>
      <Form 
      values={formValues}
      disabled={disabled}
      errors={formErrors}
      submit={formSubmit}
      change={inputChange}
      />

      {
        friends.map(friend => {
          return(
            <Hero key={friend.id} details={friend} />
          )
        })
      }
    </div>
  );
}

export default App;
