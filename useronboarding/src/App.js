import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Form from './components/Form';
import * as yup from "yup";
import schema from "./formSchema";

//Initial States
const initialFormValues = {
  //Text Inputs
  name: "",
  username: "",
  email: "",
  password: "",
  //checkbox
  termsofservice: "",
};

//Initial Form Errors
const initialFormErrors = {
  name: "",
  email: "",
  username: "",
  password: "",
};
const initialDisabled = true;
const initialAccounts = [];

function App() {
  //states
  const [accounts, setAccounts] = useState(initialAccounts);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  //Helper Functions

  function getAccounts() {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setAccounts(res.data);
      })
      .catch((err) => {
        alert("Hey man! An error has occured - Line 47 app.js");
      });
  }
  function postNewAccount(newAccount) {
    axios
      .post("https://reqres.in/api/users", newAccount)
      .then((res) => {
        setAccounts([res.data, ...accounts]);
        setFormValues(initialFormValues);
      })
      .catch((err) => console.log("error"));
  }
  //Event Handlers

  function inputChange(name, value) {
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
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }
  function formSubmit() {
    const newAccount = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      termsofservice: formValues.termsofservice,
    };
    postNewAccount(newAccount);
    setFormValues(initialFormValues);
  }

  //Side effects

  useEffect(() => {
    getAccounts();
  }, []);

  //makes the button enable after form is filled out
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  return (
    <div className="App">
      <header>
        <h1>Accounts App</h1>
      </header>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
