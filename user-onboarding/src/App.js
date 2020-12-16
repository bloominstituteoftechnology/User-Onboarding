import './App.css';
import Form from './components/Form'
import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';


const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
} 

function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ members, setMembers ] = useState("")

  const onChange = event => {
    const { name, value, type, checked } = event.target;

    const valueToUse = type === 'checkbox' ? checked : value;
    setFormValues({
      ...formValues, [ name ] : valueToUse
    })
  }

  const onSubmit = event => {
    event.preventDefault();

    const newMember = {
      name:formValues.name.trim(),
      email:formValues.email.trim(),
      password:formValues.password.trim(),
      terms:formValues.terms.trim(),
    }
    setMembers(newMember, ...members )
  }

  return (
    <div className="App">
      <h1>User Onboarding Form</h1>
      <Form
      values={formValues}
      onChange={onChange}
      onSubmit={onSubmit}
      />
      {/* {
        members.map(mem => {
          return <div>{mem.name}</div>
        })
      } */}
    </div>
  );
}

export default App;
