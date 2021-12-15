import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

const newUserInfo = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  termsOfService: false,
};

function App() {
  const [newUser, setNewUser] = useState(newUserInfo);

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
      <Form newUser={newUser} />
    </div>
  );
}

export default App;
