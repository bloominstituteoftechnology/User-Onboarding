import React, { useState, useEffect } from "react";
import Form from "./Form";
import logo from './logo.svg';
import './App.css';

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: "?",
}

function App() {
  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
