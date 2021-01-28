import './App.css';
import React, { useState, useEffect } from 'react';
import Form from "./Form";
import User from "./User";
import * as yup from "yup";
import axios from "axios";
import YupSchema from "./validation/formSchema";

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialUsers = []
const initialDisabled = true

function App() {

  const [disabled, setDisabled] = useState(initialDisabled)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState(initialUsers)   

  const postNewUser = newUser=> {
    axios.post(`https://reqres.in/api/users`, newUser)
         .then(res => {
           setUsers([res.data, ...users])
           setFormValues(initialFormValues)
         })
         .catch(err => {
           console.log(err)
         })
  }

  const inputChange = (name, value) => {
    yup
    .reach(YupSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })

    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    postNewUser(newUser)
    console.log(newUser)
  }


  useEffect(() => {
    YupSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div>
      <Form 
      disabled={disabled}
      values={formValues} 
      change={inputChange} 
      errors={formErrors}
      submit={formSubmit}
      />
      {
        users.map(user => {
          return (
            <User details={user} />
          )
        })
      }
    </div>

  );
}

export default App;
