import React, { useState, useEffect } from "react";
import '../App.css';
import axios from "axios";
import Form from "./Form";
import schema from "../Validator/Validate";
import * as yup from "yup";
import User from "./User";

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

const initialUser = [];

const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUser = () => {
    axios
      .get("http://buddies.com/api/friends")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const postNewUser = (newUser) => {
    axios
      .post("http://buddies.com/api/friends", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.error(err);
        setFormValues(initialFormValues);
      });
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      tos: ["tos"].filter((tos) => !!formValues[tos]),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="App">
        <h1>New Users at Smith Co.</h1>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {users.map((user) => {
        return <User key={user.id} details={user} />;
      })}
    </div>
  );
}
