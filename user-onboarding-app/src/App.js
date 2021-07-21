import React, { useState, useEffect } from "react";
import Form from "./Form";
import logo from './logo.svg';
import './App.css';

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  terms: false,
}

function App() {
  return (
    <div className="App">
      <Form
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
