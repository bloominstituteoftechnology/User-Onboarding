import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import Form from "./components/Form";
import schema from "./validation/formSchema";

const initialFormValues = { name: "", email: "", password: "", terms: false };
const initialFormErrors = { name: "", email: "", password: "" };

export default function App() {
  //Set up a state property called users that is initialized with an empty array
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
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
      // terms: [''].filter((hobby) => formValues[hobby]
      //   //we iterate over coding reading hiking, and filter and say "does our form values/properAties have blank (coding, reading, hiking)"
      //   });
    };
    postNewUser(newUser);
  };
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

      {users.map((user) => {
        return <user key={user.id} details={user} />;
      })}
    </div>
  );
}
