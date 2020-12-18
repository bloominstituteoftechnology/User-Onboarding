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
//these are the values that are set for initial state for the form values from what we need on the api.
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
};
//these are the values that are set for initial state for the form errors
const initialUsers = [];
//empty array for the initial users that are added to the app
const initialDisabled = true;
//true vs false due to needing to have an initial state of the check mark area.

export default function App() {
  //Set up a state property called users that is initialized with an empty array
  const [users, setUsers] = useState(initialUsers);
  //initial users has a variable declared above with an empty array
  const [formValues, setFormValues] = useState(initialFormValues);
  //we need this state hook because we need to know what values will be in the form to start with
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  //we need this state hook because we need to know what values will occur when we've initiated an error in the form
  const [disabled, setDisabled] = useState(initialDisabled);
  //we need this state hook to tell the check mark to start as unclicked

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      //getting the data from the server
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
        //picking out the specific data that we'll use
      })
      .catch((err) => {
        console.log(err);
        debugger;
        //if there is no data, set an error for the programmer to see/debug
      });
  };

  //Every time you make a POST request, and get that new user data back, update your users state with the new user added to the array
  const postNewUser = (newUser) => {
    axios
      //Craft a POST request using axios that sends your form data to the following endpoint: https://reqres.in/api/users
      .post("https://reqres.in/api/users", newUser)
      //this tells the app to post to our page and pushing our individual
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
      //reach into the yup schema
      .validate(value)
      //ensure the values are true
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
