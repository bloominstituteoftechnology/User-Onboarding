import "./App.css";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";
import axios from "axios";
import schema from "./validation/formSchema";
import * as yup from "yup";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  tos: false,
};
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  tos: "",
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
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.log(err));
  };
  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch(() => {
        debugger;
      })
  };

  const onChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));

    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      tos: formValues.tos,
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Form
        change={onChange}
        values={formValues}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <section>
        <h2>These users have already registered...</h2>
        {users.map(user => {
          return (
          <div>
            {user.name ? `${user.name}` : `${user.first_name} ${user.last_name}`}
          </div>
        )})}
      </section>
    </div>
  );
}

export default App;
