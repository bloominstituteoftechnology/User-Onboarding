import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import * as yup from "yup";
import formSchema from "./formSchema";
import axios from "axios";

const initValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
};

const initialDisabled = true;

function App() {
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [formValues, setFormValues] = useState(initValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [users, setUsers] = useState([]);

  const updateForm = (inputName, inputValue) => {
    yup
      .reach(formSchema, inputName)
      .validate(inputValue)
      .then(() => {
        setFormErrors({ ...formErrors, [inputName]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [inputName]: err.errors[0] });
      });
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    };
    postNewUser(newUser);
  };

  const postNewUser = (newFriend) => {
    axios
      .post("https://reqres.in/api/users", newFriend)
      .then((res) => {
        console.log(res.data);
        setUsers([res.data, ...users]);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormValues(initValues);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="App">
      <Form
        submit={submitForm}
        change={updateForm}
        values={formValues}
        disabled={disabled}
        errors={formErrors}
      />
      {users[0] && <pre>{JSON.stringify(users)}</pre>}
    </div>
  );
}

export default App;
