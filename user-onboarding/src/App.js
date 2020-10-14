import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
import axios from "axios";
//you'll probably still have to import *yup*, and maybe the *schema* if you have to create one

const initialValues = {
  //Text fields
  name: "",
  email: "",
  password: "",
  //Checkbox
  terms: false,
}
const initialUsers = [];
const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [userValues, setUserValues] = useState(initialValues);

  return (
    <div className="App">
     <Form />
    </div>
  );
}


