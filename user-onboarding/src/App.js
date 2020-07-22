import React, { useState, useEffect } from 'react';
import formSchema from './components/Validation/formSchema.js'
import axios from 'axios'
import * as Yup from 'yup'
import '../App.css'


export default function Form() {
  const defaultState = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: false
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: ''
}

const initialUsers = []
const initialDisabled = true

const [formState, setFormState] = useState(defaultState);
const [errors, setErrors] = useState({ ...defaultState, terms: "" });
const [buttonDisabled, setButtonDisabled] = useState(true);


useEffect(() => {
  if (formState.terms) {
    setButtonDisabled(!formState.terms);
  }
}, [formState]);

const formSubmit = e => {
  e.preventDefault();
  console.log("form submitted!");
  axios
    .post("https://reqres.in/api/users", formState)
    .then(() => console.log("form submitted success"))
    .catch(err => console.log(err));
};

const validateChange = e => {
  e.persist();
  if (e.target.value.length === 0) {
    setErrors({
      ...errors,
      [e.target.name]: `${e.target.name} field is required`
    });
  }
};


const inputChange = e => {
  const value =
    e.target.type === "checkbox" ? e.target.checked : e.target.value;
  setFormState({
    ...formState,
    [e.target.name]: value
  });
  validateChange(e);
};

function App() {
  return (
    <form onSubmit={formSubmit}>
      <Input
        type="text"
        name="name"
        onChange={inputChange}
        value={formState.name}
        label="Name"
        errors={errors}
      />
      <Input
        type="email"
        name="email"
        onChange={inputChange}
        value={formState.email}
        label="Email"
        errors={errors}
      />
      <Input
        type="text"
        name="password"
        onChange={inputChange}
        value={formState.password}
        label="Password"
        errors={errors}
      />
     
      <label className="terms" htmlFor="terms">
        <input name="terms" type="checkbox" onChange={inputChange} />
        Terms & Conditions
      </label>
      <button disabled={buttonDisabled}>Submit</button>
    </form>
  );
}

export default App;
