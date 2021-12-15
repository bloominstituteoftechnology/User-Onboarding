import logo from "./logo.svg";
import "./App.css";
import * as yup from "yup";
import axios from "axios";
import InitialForm from "./components/InitialForm";
import React, { useState, useEffect } from "react";
import scheme from "../src/validation/formScheme";

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  service: false,
};

const initialFormErrors = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((resp) => {
        setUsers(resp.data);
      })
      .catch((err) => console.error(err));
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((resp) => {
        setUsers(resp.data, ...users);
      })
      .catch((err) => console.error(err))
      .finally(() => setFormValues(initialFormValues));
  };
  const validate = (name, value) => {
    yup
      .reach(scheme, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newUser = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),

      service: ["service"].filter((service) => !!formValues[service]),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    scheme.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="App">
      <header>
        <h1>User OnBoarding</h1>
      </header>

      <InitialForm
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
