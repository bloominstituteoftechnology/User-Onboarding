import React, { useState, useEffect } from "react";
import Form from "./Form";
import logo from './logo.svg';
import './App.css';

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  terms: false,
};
const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  terms: "",
};
const initialUser = [];
const initialDisabled = true;

function App() {
  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

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

export default App;
