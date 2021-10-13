import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Form from "./Components/Form";
import Validate from "./Validator/Validate";
import * as yup from "yup";

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

  const [emp, setEmp] = useState(initialEmp)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getEmp = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setEmp(res.data)
    }).catch(err => {
      console.error(err)
    })
  } 

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

