import React, { useState, useEffect } from 'react'
import Friend from './comp/Friend'
import FriendForm from './comp/FriendForm'
import './App.css';

import schema from './validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';



//default state
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: '',
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: '',
}
const initialFriends = []
const initialDisabled = true

export default function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  //Helpers
  const getFriends = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      console.log(res)
      setFriends(res.data.data)
    }).catch(err => console.error(err))
  }

  const postNewFriends = newFriend => {
    axios.post('https://reqres.in/api/users', newFriend)
    .then(res => {
       setFriends([res.data, ...friends]);
    }).catch(err => console.error(err));

    setFormValues(initialFormValues);
  }
 
  //event handlers
  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }
  
  const inputChange = (name, value) => {
    console.log(name, value)
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms.trim(),
    }
    postNewFriends(newFriend);
  }

  //side effects
  useEffect(() => {
     getFriends()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header><h1>Friends App</h1></header>

     <FriendForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        friends.map(friend => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      }
    </div>
  );
}
