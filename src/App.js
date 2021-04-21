import './App.css';
import Form from './Form.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Person from './Person'
import * as yup from "yup";
import schema from "./formSchema";

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

const initialPeople = [];
const initialDisabled = true;

export default function App() {
  // Setting states for things that will change throughout the application
  const [people, setPeople] = useState(initialPeople);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // SETTING PEOPLE
  
  // POSTING MEMBER TO BACKEND
  const postNewMember = (newMember) => {
    axios
      .post('https://reqres.in/api/users', newMember)
      .then(res => {
        setPeople([res.data, ...people]);
        setFormValues(initialFormValues);
      })
      .catch(err => {
        console.log(err);
      })
  }

  // Input Change
  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
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
    setFormValues({...formValues, [name]: value})
  }
    
  // }
  // Event Handlers

  // Submit
  const formSubmit = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewMember(newMember);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className = 'container'>
      <header>
        <h1>Members of System</h1>
      </header>
      <Form 
        values = {formValues}
        change = {inputChange}
        submit = {formSubmit}
        disabled = {disabled}
        errors = {formErrors}
      />
      {people.map((person, idx) => {
        return <Person key = {idx} details={person} />;
      })}
    </div>
  );
}