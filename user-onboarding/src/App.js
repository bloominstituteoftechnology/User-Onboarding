import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './schema_validation/formSchema';

import Form from './component/Form';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  term: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  term: '',

}

const initialDisabled = true;
const initialUsers = []

export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [users, setUsers] = useState(initialUsers)


  const postNewUser = newUser => {
    axios
    .post('https://reqres.in/api/users')
    .then(response => {
      setUsers([...users, newUser]);
    })
    .catch(error => {
      console.log('Error posting user', error)
    })
    .finally(() => {
      setFormValues(formValues)
    })
  }

  const inputChange = (name, value) => {

    yup.reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ""})
    })
    .catch(error => {
      setFormErrors({...formErrors, [name]: error.message})
    })

    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email,
      password: formValues.password.trim(),
      term: formValues.term,
    }
    postNewUser(newUser)
}

  useEffect(() => {
    schema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])


  return (
    <div className="App">
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}/>
    </div>
  );
}
