import React, { useState } from 'react'
import UserForm from './components/Form'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
}

export default function App() {
  const [users, setUsers] = useState([])

  const [formValues, setForms] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setForms({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }

    setUsers([...users, newUser])
    setForms(initialFormValues)
  }

  return (
    <div className="container">
      <h1>User Onboarding</h1>

      <UserForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  )
}
