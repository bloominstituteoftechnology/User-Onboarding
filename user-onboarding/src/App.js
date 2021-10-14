import React, {useState, useEffect} from 'react';
import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';
import User from "./components/User"
import Form from './components/Form.js'

import './App.css';

//initial user state
const UserInitialValue = {
Name: '',
Email: '',
Password: '',
TermsOfService: false,
}
//initial error state
const initialFormError = {
  Name: '',
Email: '',
Password: '',
TermsOfService: false,

}
// initial users empty array
const initialUsers = [];
//initial button disabled to make selection required
const initialDisabled = [];


export default function App() {
//states//
const [users, setUsers] = useState(initialUsers);
const [formValues, setFormValues] = useState(UserInitialValue);
const [formErrors, setFormErrors] = useState(initialFormError);
const [disabled, setDisabled] = useState(initialDisabled);

//HELPERS
const getUsers = () => {
  //get original user list for state
  axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data);
    }).catch(err => {
      console.error(err);
    })
}
//POST HELPER
const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users',newUser)
  .then(res => {
    setUsers([res.data, ...users]);
  }).catch(err => {
    console.error(err);
  }).finally(() => {
    setFormValues(UserInitialValue)
  })
}
  //////////////// EVENT HANDLERS ////////////////
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    // RUN VALIDATION WITH YUP
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }
  const formSubmit = () => {
    const newUser = {
      Name: formValues.Name,
      Email: formValues.Email.trim(),
      Password: formValues.Password,
      TermsOfService: formValues.TermsOfService.trim(),
    }
    postNewUser(newUser);
  }

  //////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
   <Form 
    values = {formValues}
    change = {inputChange}
    submit = {formSubmit}
    disabled = {disabled}
    errors = {formErrors}
   />
    {
      users.map(user => {
        return (
          <User key ={user.id} details={user} />
        )
      })
    }
    </div>
  )
}


