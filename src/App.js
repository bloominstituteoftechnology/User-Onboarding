import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Form from "./Components/Form";
import schema from "./Validator/Validate";
import * as yup from "yup";
import Emp from './Components/Emp'

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

const initialEmp = [];

const initialDisabled = true;

export default function App() {
  const [emps, setEmp] = useState(initialEmp);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getEmp = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setEmp(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const postNewEmp = (newEmp) => {
    axios
      .post("https://reqres.in/api/users", newEmp)
      .then((res) => {
        setEmp([res.data, ...emps]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.error(err);
        setFormValues(initialFormValues);
      });
  };

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .cathc(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newEmp = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      tos: ['tos'].filter(tos => !!formValues[tos])
    }
    postNewEmp(newEmp)
  }

  useEffect(() => {
    getEmp()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header className="App-header"><h1>New Employees at Smith Co.</h1></header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

{
        emps.map(emp => {
          return (
            <Emp key={emp.id} details={emp} />
          )
        })
      }
    </div>
  );
}
