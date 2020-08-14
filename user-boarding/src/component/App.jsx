import React, { useState, useEffect } from 'react'
import User from './User.jsx'
import UserForm from './UserForm.jsx'
import FormSchema from '../validation/FormSchema';
import axios from 'axios'
import { v4 as uuid } from 'uuid';
import * as Yup from 'yup'

// 🔥 STEP 1- CHECK THE ENDPOINTS USING POSTMAN OR HTTPIE
// 🔥 STEP 2- FLESH OUT FriendForm.jsx
// 🔥 STEP 3- FLESH THE SCHEMA IN ITS OWN FILE
// 🔥 STEP 4- IMPORT THE SCHEMA, AXIOS AND YUP

//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
const initialFormValues = {
  ///// TEXT INPUTS /////
  avatar: '',
  first_name: '',
  last_name: '',
  email: '',
  ///// DROPDOWN /////
  password: '',
  ///// RADIO BUTTONS /////
  termsOfService: false,
  ///// CHECKBOXES /////
}
const initialFormErrors = {
  avatar: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
}
const initialFriends = []
const initialDisabled = false


export default function App() {
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  const [friends, setFriends] = useState(initialFriends)          // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  const getFriends = () => {
    // 🔥 STEP 5- IMPLEMENT! ON SUCCESS PUT FRIENDS IN STATE
    //    helper to [GET] all friends from `http://localhost:4000/friends`
    axios
      .get('https://reqres.in/api/users')
      .then(res => {
        console.log('Get Hello! ',res.data.data)
        setFriends(res.data.data)
      })
      .catch(err =>{
        debugger
      })
  }

  const postNewFriend = newFriend => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newFriend` to `http://localhost:4000/friends`
    //    and regardless of success or failure, the form should reset
      axios
      .post('https://reqres.in/api/users', newFriend)
      .then(res => {
        console.log('Post Hello! ',res.data)
        setFriends([...friends, res.data])
      })
      .catch(err =>{
        console.log('Error on ', err)
        debugger
      })
      .finally(()=>{
        setFormValues(initialFormValues)
      })
  }

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const onInputChange = evt => {
    const {name, value} = evt.target

    // 🔥 STEP 11- RUN VALIDATION WITH YUP

    Yup
      .reach(FormSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
    });



    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const onCheckboxChange = evt => {
    // 🔥 STEP 7- IMPLEMENT!
    // a) pull the `name` of the checkbox from the event
    // b) pull whether `checked` true or false, from the event
    // c) set a new state for the whole form
    const {name, checked} = evt.target

    setFormValues({
      ...formValues,
      ...formValues.termsOfService,
      [name]: checked,
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newFriend = {
      avatar: formValues.avatar.trim(),
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      id: uuid(),
      // 🔥 STEP 8- WHAT ABOUT HOBBIES?

    }
    // 🔥 STEP 9- POST NEW FRIEND USING HELPER

    postNewFriend(newFriend)
  }

  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    getFriends()
  }, [])

  useEffect(() => {
    // 🔥 STEP 10- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    FormSchema.isValid(formValues).then(valid => {
      setDisabled(valid);
    });
  }, [formValues])



  return (
    <div className='container'>
      <header><h1>Friends App</h1></header>

      <UserForm
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        friends.map(friend => {
          return (
            <User 
            // key={friend.id}
            details={friend}
            // details={friend.first_name} 
            // details={friend.last_name} 
            // details={friend.email} 

            />
          )
        })
      }
    </div>
  )
}