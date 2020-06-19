import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form.js";

function App() {
  return (
    <div className="App">
      <h1>
        {" "}
        <span>💜 </span>Welcome To Onboading. <br />
        Please fill out this form! <span>👾 </span>
      </h1>
      <Form />
    </div>
  );
}

export default App;
