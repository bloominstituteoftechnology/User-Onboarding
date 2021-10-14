import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './Form';
import * as yup from 'yup';
import axios from 'axios';
import schema from './validation/formSchema'



// this would be considered the shape of the state that drive the form
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,

}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

const initialRequest = []
const initialDisabled = true

function App() {
  const [request, setRequest] = useState(initialRequest)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getRequest = () => {
    axios.get(`https://reqres.in/api/users`)
    .then(res => {
      setRequest(res.data)
    }).catch(err => {
      console.error(err)
    })
  }

  const postNewRequest = newRequest => {
    axios.post('https://reqres.in/api/users', newRequest)
      .then(res => {
        setRequest([res.data, ...request]);
      }).catch(err => {
        console.error(err)
      }).finally(()=>{
        setFormValues(initialFormValues)
      })
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = ( name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newRequest = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: ['terms']
    }
    postNewRequest(newRequest)
  }


  useEffect(() => {
    getRequest()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <h1>Information Form</h1>

      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  )
}

export default App;
