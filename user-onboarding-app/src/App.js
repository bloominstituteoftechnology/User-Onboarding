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
      <Form/>
    </div>
  );
}

export default App;
