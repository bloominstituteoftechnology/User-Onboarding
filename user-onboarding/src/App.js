import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form.js";
import formSchema from "./formSchema";
import axios from "axios";
import * as yup from "yup";
import User from "./User";

const newUserInfo = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  termsOfService: false,
};

const initialUsers = [];
const initialDisabled = true;

const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

function App() {
  const [newUser, setNewUser] = useState(newUserInfo);
  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postUser = (newUsers) => {
    axios
      .post("https://reqres.in/api/users", newUsers)
      .then((response) => {
        console.log(response);
        setUsers([response.data, ...users]);
      })
      .catch((error) => console.log(error))
      .finally(() => setNewUser(newUserInfo));
  };

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const change = (name, value) => {
    validate(name, value);
    setNewUser({ ...newUser, [name]: value });
  };

  const submit = () => {
    const newUsers = {
      first_name: newUser.first_name.trim(),
      last_name: newUser.last_name.trim(),
      email: newUser.email.trim(),
      password: newUser.password.trim(),
      termsOfService: newUser.termsOfService,
    };
    console.log("work");
    postUser(newUsers);
  };

  useEffect(() => {
    formSchema.isValid(newUser).then((valid) => setDisabled(!valid));
  }, [newUser]);

  return (
    <div className="App">
      <h1>User Onboarding</h1>
      <Form
        user={newUser}
        change={change}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />
      <User users={users} />
    </div>
  );
}

export default App;
