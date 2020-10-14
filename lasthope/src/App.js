import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import * as yup from "yup";
import OnboardForm from "./components/OnboardForm";
import User from "./components/User"
import schema from './components/FormSchema';

const initFormValues = { name: "", email: "", password: "", tos: false };
const initFormErrors = { name: "", email: "", password: "", tos: "" };
const initUsers = [];
const initDisabled = true;

function App() {
  const [users, setUsers] = useState(initUsers);
  const [formValues, setFormValues] = useState(initFormValues);
  const [formErrors, setFormErrors] = useState(initFormErrors);
  const [disabled, setDisabled] = useState(initDisabled);

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((result) => {
        setUsers([result.data, ...users]);
        setFormValues(initFormValues);
      })
      .catch((err) => {
        alert('Network Error.')
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    };
    postNewUser(newUser);
  };

  // adjust disabled everytime formValues changes.
  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues]);

  return (
    <div className='App'>
      <OnboardForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <div className='user-list'>
        {users.map(user => {
          return <User key={user.key} details={user} />
        })}
      </div>
    </div>
  );
}

export default App;