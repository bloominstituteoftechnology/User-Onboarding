import React, {useState, useEffect } from 'react';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
import schema from './formSchema';
import Person from './person';
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}
const initialPerson = []
const initalDisabled = true


function App() {
  const [person, setPerson] = useState(initialPerson)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initalDisabled)

  const postNewPerson = newPerson => {

    axios.post('https://reqres.in/api/users', newPerson)
    .then(res => {
      console.log(res.data);
      setPerson([res.data, ...person]);
      setFormValues(initialFormValues);
    }).catch(err => {
      console.error(err);
      setFormValues(initialFormValues);
    })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
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
    const newPerson = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: ['termsOfService'].filter(termofservice => !!formValues[termofservice])
    }
    postNewPerson(newPerson);
  }

  useEffect(() => {

    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  
  return (
    <div className="App">
      <h1>YO HO HO New People!!</h1>

      <Form
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />

      {

        person.map(peep => {
          return (
            <Person details={peep}/>
          )
        })
      }
    </div>
  );
}

export default App;
