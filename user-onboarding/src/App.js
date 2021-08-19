import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";

import './App.css';
import "./";

import Form from "./components/Form";
import User from "./components/User";
import formSchema from "./validation/formSchema";

// Styling
const StyledUserCard = styled.div `
    display: flex;
    justify-content: center;
`

const StyledForm = styled.div `
    display: flex;
    justify-content: space-evenly;
`
// Initial form object
const initialFormValues = {
  username: "",
  email: "",
  password: "",
  terms: "",
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  terms: "",
};

const initialUsers = [];
const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // API pull to populate current user list
  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Posting new users to API
  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([...users, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  // Validating inputs against formSchema
  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
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
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    formSchema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid);
    });
  }, [formValues]);

  // Form Element
  return (
    <div className="App">
      <header>
        <h1>Welcome User!</h1>
      </header>
      <StyledForm>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      </StyledForm>
      {
        users.map(user => {
          return (
            <StyledUserCard>
              <User key={user.id} details={user} />
            </StyledUserCard>
          )
        })
      }
    </div>
  )
}