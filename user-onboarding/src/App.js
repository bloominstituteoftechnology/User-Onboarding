import './App.css';
import React, {useState, useEffect} from 'react';

import Form from './component/Form';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  term: false,
}

const initialFormErrors = {
  name: '',
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

  const getUsers = () => {

  }

  const postNewUser = newUser => {

  }

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      //put here for checkbox
    }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {

  }, [])
}
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
