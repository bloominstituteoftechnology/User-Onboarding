import React, { useState, useEffect } from "react"
import './App.css';
import './Form'
import * as yup from "yup";
import axios from "axios"

const initialValues = {
  name: "",
  email: "",
  password: "",
  termsOfService: false,

};

const initialErrors = {
  name: "",
  email: "",
  password: "",
  termsOfService: "",
}

const initialUsers = [];
const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState(initialUser); //array of users
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean
}


const postNewUser = (newUser) => {
  axios
    .post("https://reqres.in/api/users", newUser)
    .then((res) => {
      setUsers([res.data, ...users]);
      setFormValues(initialValues);
    })
    .catch((err) => {
      console.log(err);
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
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      termsOfService: formValues.termsOfService
  
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className='App'>
      <header>
        <h1>Application</h1>
      </header>

      <form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <h2>Current Users</h2>
      {users.map((user) => {
        return <User key={user.id} userinfo={user} />;
      })}
    </div>
  );
}

