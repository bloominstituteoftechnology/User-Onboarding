import { useState, useEffect } from 'react';
import './App.css';
import AppForm from "./form"
import schema from "./formSchema"
import axios from "axios";
import * as yup from "yup";

const initialFormValues ={
  username: "",
  email: "",
  password: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
}

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [user, setUser] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
    .get("https://reqres.in/api/users")
    .then((res) => {
      setUser(res.data);
    })
    .catch((err) => {
      console.log (err);
    });
  };

  const postNewUser = (newUser) => {
    axios
    .post("https://reqres.in/api/users", newUser)
    .then ((res) => {
      setUser([res.data, ...user]);
      setFormValues(initialFormValues);
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
        [name]:"",
      });
    })
    .catch((err) => {
      setFormValues({
        ...formErrors,
        [name]: err.errors[0],
      })
    })
  
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      "": ["tos"].filter(
        (tos) => formValues[tos]
      )
    }

    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

    return (
      <div className="App container">

        <header>
          <h1>User Sign Up</h1>
        </header>
    
      <AppForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      </div>
    );
  }

export default App;
