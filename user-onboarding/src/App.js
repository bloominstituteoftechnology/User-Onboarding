import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import axios from 'axios';
import * as yup from "yup";
import schema from "./formSchema";
import User from "./User";

/// Initial State ///
const initialFormValues = {
  // Text inputs //
  name: '',
  email: '',
  password: '',
  // Checkbox //
  terms: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}
const initialUsers = [];
const initialDisabled = true;

function App() {
  //// States ////
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  //// Helper Functions ////
  const postNewUser = (newUser) => {
    
    axios
    .post(`https://reqres.in/api/users`, newUser)
    .then((res) => {
      setUsers([res.data, ...users]);
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      console.log(err);
    });
};
  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
       })
       .catch((err) => {
        setFormErrors({
          ...formErrors,
          // validation error from schema
          [name]: err.errors[0],
        });
      });
    
    setFormValues({
      ...formValues,
      [name]: value,
    });  
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      terms: formValues.terms === 'true' ? 'true' : 'false',
    }
    postNewUser(newUser);
  };
  
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      Your form will render here. 
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {users.map((user) => {
        return <User key={user.id} details={user} />;
      })}
    </div>
  );
}

export default App;
