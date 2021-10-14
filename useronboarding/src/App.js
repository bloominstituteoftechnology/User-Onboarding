import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import OnBoardingForm from './component/Form';
import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';


const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: false
}

const initialForm = []
const initialDisabled = true

export default function App() {

  const [forms, setForms] = useState(initialForm)
  const [formsValues, setFormsValues] = useState(initialFormValues)
  const[formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () =>{

  axios.get(`https://reqres.in/api/users`)
    .then(res => {
      setForms=(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  const postNewForm = newForm => {
    axios.post(`https://reqres.in/api/users`, newForm)
      .then(res => {
        setForms([res.data, ...forms]);
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        setFormsValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

  const change = (name, value) => {
    validate(name, value);
    setFormsValues({
      ...formsValues,
      [name]: value
    })
  }

  const submit = () => {
    const newForm = {
      username: formsValues.username.trim(),
      email: formsValues.email.trim(),
      password: formsValues.password.trim(),
      tos: ['tos'].filter(tos => !!formsValues[tos])
    }
  console.log(newForm);
  postNewForm(newForm);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formsValues).then(valid => setDisabled(!valid))
  }, [formsValues])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <OnBoardingForm 
        values={formsValues}
        change={change}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />
      {forms.map(form => {
        return (
          <OnBoardingForm key={forms.id} details={forms} />
        )
      })}
    </div>
  );
}

