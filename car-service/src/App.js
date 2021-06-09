import React, { useState, useEffect } from 'react'
import ServiceForm from './ServiceForm'
import UserForm from './UserForm'
import axios from 'axios'
import * as yup from 'yup'
import './App.css';
import Schema from './Schema'

const initialFormValues = {
  first_name: '',
  last_name: '',
  year: '',
  make: '',
  modle: '',
  service: '',
  terms: false,
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  year: '',
  make: '',
  modle: '',
  service: '',
}

const initialCustomers = []
const initialDisabled = true


export default function App() {

  const [customers, setCustomers] = useState(initialCustomers) //array of customers
  const [formValues, setFormValues] = useState(initialFormValues) //object
  const [formErrors, setFormErrors] = useState(initialFormErrors) //object
  const [disabled, setDisabled] = useState(initialDisabled) //boolean

  const getCustomers = () => {
    axios
      .get('https://reqres.in/api/users')
      .then(response => {
        console.log(response.data)
        setCustomers(response.data.data)
      })
      .catch(error => {
        console.log('Customer Error')
      })
  }

  const postCustomers = newCustomer => {
    axios
      .post('https://reqres.in/api/users', newCustomer)
      .then(response => {
        setCustomers([response.data, ...customers])
        console.log(response.data)
        setFormValues(initialFormValues)
      })
      .catch(error => {
        console.log('New customer error')
      })
  }
  const inputChange = (name, value) => {
    yup
      .reach(Schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0]
        })
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newCustomer = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      year: formValues.year.trim(),
      make: formValues.make.trim(),
      modle: formValues.modle.trim(),
      service: formValues.service,
      terms: formValues.terms,
    }
    postCustomers(newCustomer)
  }

  useEffect(() => {
    getCustomers()
  }, [])

  useEffect(() => {
    Schema.isValid(formValues)
      .then(valid => {
        setDisabled(false)
      })
  }, [formValues])

  return (
    <div className='container'>
      <h1>Welcome to Mcclary Mechanics</h1>

      <ServiceForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {customers.map(customer => {
        return <UserForm key={customer.id} details={customer} />
      })
      }
    </div>
  )

}
