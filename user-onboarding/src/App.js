import React, { useState } from 'react'
import Form from './components/Form';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
import personForm from './components/personForm';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialUsers = []
const initialDisabled = true

export default function App() {
  const [user, setUser ] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newPerson = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
  }

  return (
    <div className="App">
      <h1>Welcome to my App. Now give me all of your info! Muahahahaha 😈</h1>

      <personForm 
        formValues={formValues}
        updateForm={updateForm}
        submitForm={submitForm}
      />
    </div>
  );
}

// export default App;
