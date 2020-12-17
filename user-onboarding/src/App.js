import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import Form from "./components/Form";
import schema from "./validation/formSchema";

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
  terms: "",
};
const initialUsers = [];
const initialDisabled = true;

export default function App() {
  //Set up a state property called users that is initialized with an empty array
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  };

  //Every time you make a POST request, and get that new user data back, update your users state with the new user added to the array
  const postNewUser = (newUser) => {
    axios
      //Craft a POST request using axios that sends your form data to the following endpoint: https://reqres.in/api/users
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
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
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);
  //anytime the page renders, get the users.

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
      <header>
        <h1>Users</h1>
      </header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <div>
        <h2> Users Already Registered</h2>
        {users.map((user, index) => {
          return (
            <div key={index}>
              {user.name
                ? `${user.name}`
                : `${user.first_name} ${user.last_name}`}
            </div>
          );
        })}
      </div>
    </div>
  );
}
