import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";

import './App.css';
import "./";

import Form from "./components/Form";
import User from "./components/User";
import schema from "./validation/formSchema";

const StyledUserCard = styled.div `
    display: flex;
    justify-content: center;
`

const StyledForm = styled.div `
    display: flex;
    justify-content: space-evenly;
`

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

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data.data);
        console.log(`HERE IS setUsers`, setUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const validate = (name, value) => {
    yup
      .reach(schema, name)
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

  useEffect(() => {}, []);

  useEffect(() => {
    schema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <header>
        <h1>Welcome Future User!</h1>
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