import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";

import schema from "./validation/formSchema";
import * as yup from "yup";
import axios from "axios";

// Axios request url
// "https://reqres.in/api/users"

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
};

const initialUser = [];

function App() {
  const [users, setUsers] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  // HELPER FUNCTIONS

  const getUsers = () => {};

  const postNewUser = (newUser) => {};

  // EVENT HANDLERS

  // onChange()
  const inputChange = (name, value) => {};

  // onSubmit()
  const formSubmit = () => {};

  return (
    <div className="app">
      <header>
        <h1>Sign Up to Onboard!</h1>
      </header>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
