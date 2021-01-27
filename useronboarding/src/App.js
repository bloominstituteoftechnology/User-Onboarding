import React, { useState, useEffect } from "react";
import Form from "./Form";
import "./App.css";
import * as yup from "yup";
import axios from "axios";

// initial states

const initialFormValues = {
  /// text inputs ///
  username: "",
  email: "",
  password: "",

  /// checkbox ///
  terms: "false",
};
const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  terms: "",
};
const initialUsers = [];
const intialDisabled = true;

export default function App() {
  //////// STATES /////////////
  const [user, setUser] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(intialDisabled);

  //// helpers /////

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setFormValues(res.data);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  };
  const postNewUser = (newUser) => {};
  axios
    .post("https://reqres.in/api/users")
    .then((res) => {
      setUser([res.data, ...user]);
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      console.log(err);
      debugger;
    });

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
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
