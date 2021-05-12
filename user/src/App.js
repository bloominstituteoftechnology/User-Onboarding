import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import Form from './Form'
import User from './User'
import './App.css';

const initialFormValues = {
  name:'',
  email: '',
  password: '',
  service: false,
}

const initialFormErrors = {
  name:'',
  email: '',
  password: '',
  service:'',
}

const initialForm = []
const initialDisabled = true

const Schema = yup.object().shape({
  name: yup.string().required('Please enter a name.').min(3, 'The name must be at least 3 characters in length.'),
  email: yup.string().required('Please enter an email.').notOneOf(['waffle@syrup.com'], 'That email is already taken.').email('The email is not valid.'),
  password: yup.string().required('Please enter a password.').min(6, 'The password must be at least 6 characters in length.'),
  role: yup.string().required('Please select a role.').oneOf(['Engineer', 'Developer', 'Designer'], 'You must select a role from the list.'),
  terms: yup.boolean().oneOf([true], 'Please agree to the terms of service.')
});

function App() {

  const [person, setPerson] = useState(initialForm)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [ disabled, setDisabled] = useState(initialDisabled)
  const [ formErrors, setFormErrors] = useState(initialFormErrors)

  const postNewPerson = newPerson =>{
    axios
    .post('https://reqres.in/api/users', newPerson)
    .then((res) => {
      setPerson([res.data, ...person])
      setFormValues(initialFormValues)
    })
    .catch((err) =>{
      console.log(err)
    })
  };

  const inputChange = (name, value) => {
    yup
      .reach(Schema, name) 
      .validate(value) 
      .then(() => {   
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value 
    })
  };

  const onSubmit = () =>{
    const newPerson = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password:formValues.password.trim(),
      services: ['service'].filter(
        (service) => formValues[service]
      ),
    }
    postNewPerson(newPerson)
  };

  useEffect(() => {
    Schema
    .isValid(formValues)
    .then((valid) => {
      setDisabled(!valid);
    })
  }, [formValues]);

  return (
    <div className="App">
      <Form
      values={formValues}
      change={inputChange}
      submit={onSubmit}
      disabled={disabled}
      errors={formErrors} />

{
        person.map(user => {
          return(
          <User key={user.id} details={user}/>
          )
      })
      }
    </div>
  );
}

export default App;
