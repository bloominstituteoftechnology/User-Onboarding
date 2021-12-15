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

function App() {
  const [newUser, setNewUser] = useState(newUserInfo);
  const [users, setUsers] = useState([]);
  const [disabled, setDisabled] = useState();
  const [formErrors, setFormErrors] = useState();

  const postUser = (newUsers) => {
    axios
      .post("https://reqres.in/api/users", newUsers)
      .then((response) => {
        setUsers(response, ...users);
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
      termsOfService: !!newUser.termsOfService,
    };
    postUser(newUsers);
  };

  useEffect(() => {
    formSchema.isValid(newUser).then((valid) => setDisabled(!valid));
  }, [newUser]);

  return (
    <div className="App">
      <Form
        user={newUser}
        change={change}
        submit={submit}
        disabled={disabled}
      />
      <User users={users} />
    </div>
  );
}

export default App;
