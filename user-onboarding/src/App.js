import React, { useState } from 'react';
import Form from './Form';

const initialFormValues = {
  name: '',
  email:'',
  password: '',
  tos: false
}

const initialUsers=  [];
const initialDisabled = true;


function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled)

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      tos: true
    }
  }

  return (
    <div className="App">
      <Form form={formValues} disable={disabled} change={inputChange} submit={formSubmit} />
    </div>
  );
}

export default App;
