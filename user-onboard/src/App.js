import React, { useState } from 'react';
import './App.css';
import * as yup from 'yup';
import axios from "axios";
import styled from "styled-components";
import Form from "./Form";

const Container = styled.div
`
border: 1px solid red;
`
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false
}

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
}

const initialDisabled = true;

function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  function change(name, value){

    return null;
}

function submit(name, value) {
    return null;
}

  return (
    <Container className="App">
      <Form users={users} disabled={disabled} change={change} submit={submit} errors={formErrors}/>
    </Container>
  );
}

export default App;
