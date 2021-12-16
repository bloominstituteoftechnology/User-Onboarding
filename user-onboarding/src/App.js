import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Member from './Member';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema';

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
const initialMembers = []
const initialDisabled = true

export default function App() {

  const [members, setMembers] = useState(initialMembers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getMembers = () => {

    axios.get('https://reqres.in/api/users')
      .then(resp => {
        setMembers(resp.data.data);
      }).catch(err => console.error(err))
  }

  const postNewMember = newMember => {
    axios.post('https://reqres.in/api/users', newMember)
      .then(resp => {
        setMembers([ resp.data.data, ...members ]);
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
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
  const formSubmit = () => {
    const newMember = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: false
    }

    postNewMember(newMember);
  }

  useEffect(() => {
    getMembers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>Onboard Members App</h1></header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      <h3>Current Members</h3>
      {
        members.map(members => {
          return (
            <Member key={members.id} details={members} />
          )
        })
      }
    </div>
  )
    }

  
