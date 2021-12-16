import * as yup from 'yup';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import schema from './formSchema'
import UserForm from './UserForm'
import User from './user'

const initialFormValues = {
  ///// TEXT INPUTS /////
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  termsofservice: false,

}
const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  termsofservice: '',
}

const initialUsers = []
const initialDisabled = true

export default function App () {
const [users, setUsers] = useState(initialUsers)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const getUsers = () => {

axios.get('https://reqres.in/api/users')
  .then(resp => {
    setUsers(resp.data.data);
    console.log(resp)
    console.log(users)
  }).catch(err => console.error(err))

}

const postNewUser = newUser => {
  
  axios.post('https://reqres.in/api/users', newUser)
    .then(resp => {
      setUsers([resp.data, ...users])
    }).catch(err => console.error(err))
    .finally( () => setFormValues(initialFormValues))
}

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
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
    first_name: formValues.first_name.trim(),
    last_name: formValues.last_name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    termsofservice: ['termsofservice'].filter(checked => !!formValues[checked])

  }
  postNewUser(newUser)
}

useEffect(() => {
  getUsers()
}, [])

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
  // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
}, [formValues])

return (
  <div className='container'>
  <header><h1>Employee Profiles</h1></header>

  <UserForm
    values={formValues}
    change={inputChange}
    submit={formSubmit}
    disabled={disabled}
    errors={formErrors}
  />

  {
    users.map(user => {
      return (
        <User key={user.id} details={user} />
      )
    })
  }

 
</div>


)
}