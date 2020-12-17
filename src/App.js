import React, { useState } from 'react';
import Form from './components/Form';

function App() {

  const initialFormValues = {
    name: '',
    email: '',
    password: '',
    terms: false,
  }

  const initialUsers = []

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)


  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }


  const formSubmit = (event) => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    console.log(newUser)
  }


  return (
    <div className="container">
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
      />
    </div>
  );
}

export default App;
