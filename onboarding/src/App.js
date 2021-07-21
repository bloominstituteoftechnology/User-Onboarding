import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import User from "./components/User";
import axios from "axios";
import * as yup from "yup";
import schema from './validation/formSchema'

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
  const [users, setUsers] = useState(initialUsers); //array of users objects
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data);
        console.log(`HERE IS setUsers`, setUsers);
      })
      .catch((err) => {
        debugger;
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
        debugger;
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
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const formSubmit = () =>{
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      // 🔥 terms
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    
  }, [])

  // useEffect(() => {
  //   schema.isValid(formValues)
  //   .then(valid => {
  //     setDisabled(!valid);
  //   });
  // }, [formValues]);


  return (
    <div className="App">
      <header>
        <h1>User Onboarding</h1>
      </header>
      <Form
        // values={formValues} 
        // update={updateForm} 
        // submit={submitForm}
      />
    </div>
  );
}
