import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

import './App.css';
import "./";

import Form from "./components/Form";
import User from "./components/User";
import schema from "./validation/formSchema";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
