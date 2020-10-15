import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './EmployeeForm'
import Employee from './Employee'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/schema'

const initialFormValues = {
  username: "",
  email: "",
  role:"",
  password:"",
  // unionStatus:"",
  termsOfService: false,
  read: false,
  agreed: false,
}

const initialFormErrors = {
  username: "",
  email: "",
  role: "",
  // unionStatus: "",
}

const initialEmployees = []
const initialDisabled = true

export default function App() {
  const [employees, setEmployees] = useState(initialEmployees)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getEmployees = () => {
    axios.get('https://reqres.in/api/users')
    .then((res) => {
      setEmployees(res.data)
    })
    .catch((err) => {
      alert('Error in the program')
    })
  }

  const postNewEmployee = (newEmployee) => {
    axios.post('https://reqres.in/api/users', newEmployee)
    .then((res) => {
      setEmployees([res.data, ...employees])
      setFormValues(initialFormValues)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newEmployee = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      // unionStatus: formValues.unionStatus.trim(),
      termsOfService: ['read', 'agreed'].filter((termsOfService) =>
      formValues[termsOfService]),
    }
    postNewEmployee(newEmployee)
  }

  useEffect(() => {
    getEmployees()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then
    (valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="container">
      <header>
        <h1>Add New Employee</h1>
      </header>

      <EmployeeForm
        values={formValues}
        update={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />

        {employees.map((employee) => {
          return (
          <Employee key={employee.id} details={employee} />
        )})}
    </div>
  );
}
